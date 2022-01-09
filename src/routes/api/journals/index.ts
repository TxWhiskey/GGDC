import type { JournalPost } from '$lib/types/journal'
import { db } from '$lib/firebase/firebase-admin'

export async function get() {

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


    const newPostData = await db.collection('Journal Data').doc(post.id).set({
        postId: post.id,
        content: post.content
    })

    delete post.content

    const newPost = await db.collection('Journals').doc(post.id).set({...post})


    return {
        status: 200,
        body: newPost
    }

}
