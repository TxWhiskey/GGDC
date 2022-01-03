import type { JournalPost } from '$lib/types/journal'

import * as admin from 'firebase-admin'
import '$lib/firebase/firebase-admin'

export async function get( request ) {

    const id = request.params.id
    const state = request.params.state

    var db = admin.firestore()

    const journalRef = db.collection('Journals').doc(id)

    const res = await journalRef.set( {
        published: state
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