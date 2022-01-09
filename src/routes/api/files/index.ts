import * as admin from 'firebase-admin'

import { db } from '$lib/firebase/firebase-admin'

export async function post( request ) {

    /* if ( !request.locals.authenticated ) {
        return {
            status: 403,
            body: {
                message: "Unauthenticated"
            }
        }
    } */

    const requestedPath: string[] = request.body.path

    if ( !requestedPath || !(Array.isArray(requestedPath)) ) {
        return {
            status: 400,
            body: {
                message: "Must contain a path array."
            }
        }
    }

    requestedPath.splice(0, 0, 'Media Library')

    let folderContents = {
        path: [],
        folders: [],
        files: []
    }
    
    const foldersRef = db.collection("Folders")

    // Get folder info for path (Ancestors and self)
    folderContents.path = await Promise.all( requestedPath.map( async ( folderId ) => {
        const docData = (await foldersRef.doc(folderId).get()).data()
        return {
            id: folderId,
            ...docData
        }
    }))

    // Remove Meida Library from path
    folderContents.path.splice( 0 , 1 )
    

    // Get folder info for child folders
    const folderSnapshot = await foldersRef.where( "folderPath", "==", requestedPath).get()
    
    if ( !folderSnapshot.empty ) {

        folderSnapshot.forEach( docSnap => folderContents.folders.push( {
            id: docSnap.id,
            title: docSnap.data().title
        } ))

    }

    // Get child files
    const filesRef = db.collection("Files")

    const fileSnapshot = await filesRef.where( "folderPath", "==", requestedPath).get()

    if ( !fileSnapshot.empty ) {

        fileSnapshot.forEach( docSnap => folderContents.files.push( {
            id: docSnap.id,
            ...docSnap.data()
        } ))

    }

    return {
        status: 200,
        body: folderContents
    }

}