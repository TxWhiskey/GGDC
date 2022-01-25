import * as admin from 'firebase-admin'
import { db } from '$lib/firebase/firebase-admin'

export async function post( {request} ) {

    /* if ( !request.locals.authenticated ) {
        return {
            status: 403,
            body: {
                message: "Unauthenticated"
            }
        }
    } */

    const body = await request.json()

    const path = body.path
    const title = body.title

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