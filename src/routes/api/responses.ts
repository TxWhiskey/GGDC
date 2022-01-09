import * as admin from 'firebase-admin'
import { db } from '$lib/firebase/firebase-admin'

export async function get() {

    const snapshot = await db.collection("surveyResponses").get()

    let responses = []

    snapshot.forEach( (doc) => {
        responses.push(doc.data())
    })

    responses = responses.map( r => {
        return {
            source: r.response,
            timestamp: r.timestamp.toDate().toDateString()
        }
    })

    return {
        status: 200,
        body: responses
    }

}