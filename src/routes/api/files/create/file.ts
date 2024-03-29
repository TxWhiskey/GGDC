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

    const path: string[] = body.path
    const title: string = body.title
    const url: string = body.url
    const type: string = body.type

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
            type,
            url
        }
    }

}