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

    const path = request.body.path
    const title = request.body.title

    if ( (!path || !(Array.isArray(path)) && title ) ) {
        return {
            status: 400,
            body: {
                message: "Must contain a path array and title."
            }
        }
    }

    const res = await db.collection("Folders").add({
        title,
        folderPath: path
    })

    return {
        status: 200,
        body: {
            id: res.id,
            title,
            folderPath: path
        }
    }

}