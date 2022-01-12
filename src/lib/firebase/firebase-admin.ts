/* import admin from 'firebase-admin'

function initApp() { */

    /* if (import.meta.env.DEV) {
        console.info("Init Admin App [Dev]")
        return initializeApp({
            credential: credential.cert(JSON.parse(import.meta.env.VITE_FB_SA as string))
        })
    } else {
        console.info("Init Admin App [Prod]")
        return initializeApp()
    } */
    /* return initializeApp({
        credential: credential.cert(JSON.parse(import.meta.env.VITE_FB_SA as string))
    })
} */

/* if (!admin.apps.length) {
    initApp()
} */

/* admin.initializeApp()

export const fbAdmin = admin */

import { initializeApp, applicationDefault, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

export const app = initializeApp({
    credential: cert(JSON.stringify({
        type: process.env.FIREBASE_TYPE,
        project_id: process.env.FIREBASE_PROJECT_ID,
        private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
        private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        client_email: process.env.FIREBASE_CLIENT_EMAIL,
        client_id: process.env.FIREBASE_CLIENT_ID,
        auth_uri: process.env.FIREBASE_AUTH_URI,
        token_uri: process.env.FIREBASE_TOKEN_URI,
        auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER,
        client_x509_cert_url: process.env.FIREBASE_CLIENT
    })),
    databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com/`
})

export const db = getFirestore(app)