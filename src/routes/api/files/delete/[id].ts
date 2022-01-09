import * as admin from 'firebase-admin'

import { db } from '$lib/firebase/firebase-admin'

import { writeBatch } from 'firebase/firestore'


export async function del( req ) {

    /* if ( !request.locals.authenticated ) {
        return {
            status: 403,
            body: {
                message: "Unauthenticated"
            }
        }
    } */

    const targetId = req.params.id

    if ( (!targetId ) ) {
        return {
            status: 400,
            body: {
                message: "Must contain a folder ID."
            }
        }
    }

    // Identify if Folder or File

    const filesRef = db.collection('Files')

    const fileExists = (await filesRef.doc(targetId).get()).exists

    const foldersRef = db.collection('Folders')

    const folderExists = (await foldersRef.doc(targetId).get()).exists

    if ( !fileExists && !folderExists ) {
        return {
            status: 400,
            body: {
                message: "No file or folder of that ID exists."
            }
        }
    }

    if ( fileExists ) {

        await filesRef.doc(targetId).delete()

        return {
            status: 200,
            body: {
                filesDeleted: 1,
                foldersDeleted: 0,
                type: 'File',
                targetId
            }
        }

    } 

    const batch = db.batch()

    // Child Folder Deletion Logic

    const foldersForDeletion = await foldersRef.where( "folderPath", 'array-contains', targetId ).get()

    const foldersDeleted = foldersForDeletion.docs.length + 1

    foldersForDeletion.forEach( snapshot => {
        console.log(snapshot.id);
        
        batch.delete( snapshot.ref )
    })

    // Child File Deletion Logic

    const filesForDeletion = await filesRef.where( "folderPath", 'array-contains', targetId ).get()

    const filesDeleted = filesForDeletion.docs.length

    filesForDeletion.forEach( snapshot => {
        batch.delete( snapshot.ref )
    })

    //Delete Target Folder
    batch.delete(foldersRef.doc(targetId))

    await batch.commit()

    return {
        status: 200,
        body: {
            filesDeleted,
            foldersDeleted,
            type: "Folder",
            targetId
        }
    }

}