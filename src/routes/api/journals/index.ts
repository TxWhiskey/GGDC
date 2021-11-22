import type { ServerRequest } from "@sveltejs/kit/types/hooks";
import * as admin from 'firebase-admin'
import '$lib/firebase/firebase-admin'

export async function get( request ) {

    const journalsRef = admin.firestore().collection('Journals')

    const journals = await journalsRef.get().then( querySnapshot => {
        return querySnapshot.docs.map( doc => doc.data())
    })

    return {
        headers: {
            'content-type': 'application/json'
        },
        body: [
            ...journals
        ]
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

    const newPost = await admin.firestore().collection('Journals').doc().create({
        title: request.body.title,
        body: request.body.body
    })

    return {
        status: 200,
        body: newPost
    }

}