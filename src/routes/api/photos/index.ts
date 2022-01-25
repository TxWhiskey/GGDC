import * as admin from 'firebase-admin'
import { db } from '$lib/firebase/firebase-admin'

import { v4 as uuid } from 'uuid'

import type { Path, Photo, PhotoFolder } from '$lib/types/photos'



export async function get() {
    return {
        status: 200,
        body: {
            message: "All good"
        }
    }
}

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

    const title: string = body.title
    const url: string[] = body.url
    const path = body.path

    if ( !title || ! url || !path ) {
        return {
            status: 400,
            body: {
                message: "Must contain a title, url, and path."
            }
        }
    }

    let pathArray: string[] = path.split("/")

    pathArray = pathArray.filter( p => p? true: false)

    await db.collection('Folders').doc("Media Library/" + path).set({
        title,
        url
    })

    pathArray.forEach( p => console.log(p))

    return {
        status: 200,
        body: {
            message: "done"
        }
    }

}