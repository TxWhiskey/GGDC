import * as admin from 'firebase-admin'
import { db } from '$lib/firebase/firebase-admin'

export async function patch( { params } ) {

    /* if ( !request.locals.authenticated ) {
        return {
            status: 403,
            body: {
                message: "Unauthenticated"
            }
        }
    } */

    const targetId = params.targetId
    const name = params.name

    if ( (!targetId || !name ) ) {
        return {
            status: 400,
            body: {
                message: "Must contain a ID and name."
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

    // Update File Name
    if ( fileExists ) {

        const fileRef = filesRef.doc(targetId)

        await fileRef.update({title:name})

        return {
            status: 200,
            body: {
                type: 'File',
                targetId,
                title: name
            }
        }

    } 

    // Update Folder Name

    const folderRef = foldersRef.doc(targetId)

    await folderRef.update({title:name})

    return {
        status: 200,
        body: {
            type: 'Folder',
            targetId,
            title: name
        }
    }

}