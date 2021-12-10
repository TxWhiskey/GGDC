import * as admin from 'firebase-admin'
import '$lib/firebase/firebase-admin'

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

export async function post( request ) {
    
    if ( !request.locals.authenticated ) {
        return {
            status: 403,
            body: {
                message: "Unauthenticated"
            }
        }
    }

    const title: string = request.body.title
    const url: string[] = request.body.url
    const path: Path = request.body.path

    if ( !title || ! url || !path ) {
        return {
            status: 400,
            body: {
                message: "Must contain a title, url, and path."
            }
        }
    }

    const pathString = ''

    for ( let currentPath = path; currentPath.child; currentPath = currentPath.child) {

    }

}