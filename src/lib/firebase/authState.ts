import { writable, get } from 'svelte/store'
import { browser } from '$app/env'
import { goto } from '$app/navigation'

//import * as firebaseAuth from 'firebase/auth'
import { getAuth, signOut, onAuthStateChanged, signInWithEmailAndPassword } from '@firebase/auth'
import type { User } from '@firebase/auth'
import '$lib/firebase/firebase'
import { post } from '$lib/util'

const auth = getAuth()

export interface AuthState {
    user: User,
    authResolved: Promise<boolean>
}

function initAuth() {

    let resolveAuthResolved

    const authResolved = new Promise<boolean> ( ( resolve, reject ) => {
        resolveAuthResolved = resolve
    })

    const { subscribe, set } = writable<AuthState>({user: null, authResolved})
    
    if ( browser ) {
        onAuthStateChanged( auth, async user => {
            console.log("[AUTH] State Change")
            if (user) {
                console.log('[AUTH] State Change: User Signed In:', user.email)
                const idToken = await user.getIdToken(false)

                await post( '/auth/getCookie', {idToken: idToken})
                set({ user, authResolved})

            } else {
                await fetch( '/auth/removeCookie' ).then( () => {
                    set({ user, authResolved})
                })
            }

            resolveAuthResolved(true)

        }, err => { 
            console.error(err.message)
        })
    } else {
        set({user: null, authResolved})
        resolveAuthResolved(false)
    }

    async function loginWithEmail( email, password ) {
        await signInWithEmailAndPassword( auth, email, password )
    }

    async function logout() {
        await signOut(auth)
        goto('/')
    }

    return {
        subscribe,
        loginWithEmail,
        logout
    }

}

export const authState = initAuth()