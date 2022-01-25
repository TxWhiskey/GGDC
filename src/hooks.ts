import admin from 'firebase-admin'

import * as cookie from 'cookie'

import '$lib/firebase/firebase-admin'

export async function handle ( { event, resolve } ) {

    const ssr = !event.url.pathname.startsWith('/admin')

    console.log({
        path: event.url.pathname, 
        ssr
    });

    // Inbound Logic

        const cookies = cookie.parse(event.request.headers.cookie || '')

        const sessionCookie = cookies.session || ''

        await admin.auth()
            .verifySessionCookie(sessionCookie, true)
            .then( (decodedClaims) => {
                event.locals.user = decodedClaims
                event.locals.authenticated = true
            })
            .catch( (err) => {
                event.locals.user = null
                event.locals.authenticated = false
            })

    // Outbound Logic
    const response = await resolve(event, {ssr: !event.url.pathname.startsWith('/admin')})

    return response

}

export function getSession( event ) {

    console.log(event.locals);

    let locals = event.locals

    console.log("locals", locals);
    
    

    if (event.locals.authenticated) {
        return {authenticated: true, user: event.locals.user}
    } else {
        return {authenticated: false, user: null}
    }

}