import type { JournalPost } from '$lib/types/journal'
import { db } from '$lib/firebase/firebase-admin'

export async function post( {request} ) {

    const body = await request.json()

    const id = body.id
    const state = body.state
    const publishedDate = body.publishedDate

    const journalRef = db.collection('Journals').doc(id)

    const res = await journalRef.set( {
        published: (state == true ),
        publishedDate: publishedDate
    }, {merge: true })

    return {
        headers: {
            'content-type': 'application/json'
        },
        body: {
            id, state, publishedDate
        }
    }

}