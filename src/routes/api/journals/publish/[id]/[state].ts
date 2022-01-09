import type { JournalPost } from '$lib/types/journal'
import { db } from '$lib/firebase/firebase-admin'

export async function get( request ) {

    const id = request.params.id
    const state = request.params.state

    const journalRef = db.collection('Journals').doc(id)

    const res = await journalRef.set( {
        published: (state === 'true')
    }, {merge: true })

    return {
        headers: {
            'content-type': 'application/json'
        },
        body: {
            id, state
        }
    }

}