import * as admin from 'firebase-admin'
import '$lib/firebase/firebase-admin'

export async function get() {

    const snapshot = await admin.firestore().collection("surveyResponses").get()

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

    /* return {
        status: 200,
        body: {
            message: 'Success'
        }
    } */

    return {
        status: 200,
        body: responses
    }

}