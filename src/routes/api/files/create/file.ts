import * as admin from 'firebase-admin'
import '$lib/firebase/firebase-admin'

const db = admin.firestore()

export async function post( request ) {

    /* if ( !request.locals.authenticated ) {
        return {
            status: 403,
            body: {
                message: "Unauthenticated"
            }
        }
    } */

    const path: string[] = request.body.path
    const title: string = request.body.title
    const url: string = request.body.url
    const type: string = request.body.type

    if ( (!path || !(Array.isArray(path)) && title ) || !url || !type ) {
        return {
            status: 400,
            body: {
                message: "Must contain a path array, url, type, and title."
            }
        }
    }

    path.splice(0, 0, 'Media Library')

    const res = await db.collection("Files").add({
        title,
        folderPath: path,
        url,
        type
    })

    return {
        status: 200,
        body: {
            id: res.id,
            title,
            folderPath: path,
            type
        }
    }

}