import admin from 'firebase-admin'

import * as cookie from 'cookie'

import '$lib/firebase/firebase-admin'

export const handle = async ( { request, resolve } ) => {

    console.log(`Handling request to path: ${request.path}`)

    // Inbound Logic

        const cookies = cookie.parse(request.headers.cookie || '')

        const sessionCookie = cookies.session || ''

        await admin.auth()
            .verifySessionCookie(sessionCookie, true)
            .then( (decodedClaims) => {
                request.locals.user = decodedClaims
                request.locals.authenticated = true
            })
            .catch( (err) => {
                request.locals.user = null
                request.locals.authenticated = false
            })

    // Outbound Logic
    const response = await resolve(request)

    return {
        ...response
    }

}

export const getSession = async ( request ) => {

    if (request.locals.authenticated) {
        return {authenticated: true, user: request.locals.user}
    } else {
        return {authenticated: false, user: null}
    }

}