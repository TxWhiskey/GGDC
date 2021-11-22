import type { ServerRequest } from "@sveltejs/kit/types/hooks";
import * as cookie from 'cookie'
import * as admin from 'firebase-admin'
import '$lib/firebase/firebase'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export async function post ( request ) {

    interface LoginReqBody {
        email: string;
        password: string;
    }

    const body: LoginReqBody = request.body as LoginReqBody

    const email = body.email
    const password = body.password


    try {
        var userCredential = await signInWithEmailAndPassword( getAuth(), email, password )
    } catch (err) {
        return {
            status: 403,
            body: err
        }
    }

    const idToken = await userCredential.user.getIdToken()

    const expiresIn = 60 * 60 * 25 * 10 * 1000

    return await admin.auth()
        .createSessionCookie( idToken, { expiresIn })
        .then( (sessionCookie) => {
            const options = { maxAge: expiresIn, httpOnly: true, secure: true, path:'/' }

            return {
                status: 200,
                body: {
                    message: 'Login Successful'
                },
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

    return {
        body: {
            email: email,
            password: password
        }
    }

}