import type { JournalPost } from '$lib/types/journal'

import * as admin from 'firebase-admin'
import '$lib/firebase/firebase-admin'

export async function get() {

    var db = admin.firestore()

    const journalsRef = db.collection('Journals')

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

    /* if ( !request.locals.authenticated ) {
        return {
            status: 403,
            body: {
                message: "Unauthenticated"
            }
        }
    } */

    const post: JournalPost = request.body

    /* if ( !title || ! body ) {
        return {
            status: 400,
            body: {
                message: "Must contain a title and body."
            }
        }
    } */
    const newPostData = await admin.firestore().collection('Journal Data').doc(post.id).set({
        postId: post.id,
        content: post.content
    })

    delete post.content

    const newPost = await admin.firestore().collection('Journals').doc(post.id).set({...post})


    return {
        status: 200,
        body: newPost
    }

}
