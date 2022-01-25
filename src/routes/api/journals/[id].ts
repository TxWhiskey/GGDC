import type { JournalPost } from '$lib/types/journal'

import { db } from '$lib/firebase/firebase-admin'

export async function get( { params } ) {

    const id = params.id

    // Journal Info

        const journalRef = db.collection('Journals').doc(id)

        const doc = await journalRef.get()

        if ( !doc.exists ) {
            return {
                headers: {
                    'content-type': 'application/json'
                },
                status: 404,
                body: {
                    message: 'test'
                }
            }
        } 

    // Journal Data

        const dataRef = db.collection('Journal Data').doc(id)

        const data = await dataRef.get()

        console.log(data.data());
        

    return {
        headers: {
            'content-type': 'application/json'
        },
        body: {
            ...doc.data(),
            ...data.data()
        }
    }

}

export async function del( {params} ) {

    const id = params.id

    // Journal

    const journalRef = db.collection('Journals').doc(id)

    const doc = await journalRef.delete()

// Journal Data

    const dataRef = db.collection('Journal Data').doc(id)

    const data = await dataRef.delete()


return {
    headers: {
        'content-type': 'application/json'
    },
    body: {
        message: 'Success'
    }
}

}