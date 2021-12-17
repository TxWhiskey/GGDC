import '$lib/firebase/firebase'

import { signInWithEmailAndPassword, getAuth, signOut } from "@firebase/auth"
import type { User  } from 'firebase/auth'

import { session } from '$app/stores'
import { goto } from '$app/navigation'

const auth = getAuth()

export async function getCookie( user: User) {
    
    const idToken = await user.getIdToken(false)

    //return post( '/auth/getCookie', {idToken: idToken})

    return fetch( '/auth/getCookie', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify( {idToken} || {} ),
        headers: {
            'Content-Type': 'application/json'
        }
    })

}

export async function loginWithEmail( email: string, password: string ) {

    return signInWithEmailAndPassword( auth, email, password )/* .then( async userCredential => {

        await getCookie( userCredential.user )

        return userCredential

    }) *//* .then( userCredential => {
        session.set( { user: userCredential.user })
    } ).catch( (err) => {
        return err
    }) */

}

export async function logout() {

    await signOut(auth)
    await fetch( '/auth/removeCookie' )
    
    session.set( {user: null} )
    goto( '/admin/login' )


}

export function authGuard( path: string, session ) {

    switch( path ) {

        case '/admin':
            if ( session.user ) {
                return {
                    status: 302,
                    redirect: '/admin/portal'
                }
            } else {
                return {
                    status: 302,
                    redirect: 'admin/login'
                }
            }

        case '/admin/login':
            if (session.user) {
                return {
                    status: 302,
                    redirect: '/admin/portal'
                }
            } else {
                return {}
            }

    }

    if ( session.user ) {
        return {}
    } else {
        return {
            status: 302,
            redirect: '/admin/login'
        }
    }

}