import * as admin from 'firebase-admin'

import '$lib/firebase/firebase-admin'

import * as cookie from 'cookie'

export async function post({ body }) {

    const idToken = body.idToken

    const expiresIn = 60 * 60 * 25 * 10 * 1000

    return await admin.auth()
        .createSessionCookie( idToken, { expiresIn })
        .then( (sessionCookie) => {
            const options = { maxAge: expiresIn, httpOnly: true, secure: true, path:'/' }

            return {
                status: 200,
                headers: {
                    "set-cookie": [
                        cookie.serialize('session', sessionCookie, options)
                    ]
                }
            }

        })
        .catch( (error) => {
            console.log( "[Get Cookie]", error.message)
            return {
                status: 401,
                error: error.message
            }
        })

}