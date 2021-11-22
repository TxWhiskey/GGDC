import '$lib/firebase/firebase'

import { post } from "$lib/util"
import { signInWithEmailAndPassword, getAuth, signOut } from "@firebase/auth"
import type { User  } from 'firebase/auth'

import { session } from '$app/stores'
import { goto } from '$app/navigation'

const auth = getAuth()

async function getCookie( user: User) {
    
    const idToken = await user.getIdToken(false)

    try {
        await post( '/auth/getCookie', {idToken: idToken})
    } catch (err) {
        return err
    }

}

export async function loginWithEmail( email: string, password: string ) {

    try {

        const userCredential = await signInWithEmailAndPassword( auth, email, password )

        await getCookie( userCredential.user)

        session.set( { user: userCredential.user } )

    } catch (err) {
        return err
    }

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