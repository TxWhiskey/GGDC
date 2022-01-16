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

console.log(import.meta.env.VITE_FIREBASE_SERVICE_ACCOUNT_KEY);
const serviceAccount = JSON.parse(import.meta.env.VITE_FIREBASE_SERVICE_ACCOUNT_KEY as string)



export const app = initializeApp({
    credential: cert(serviceAccount),
    databaseURL: "https://georgia-grace-design-collab-default-rtdb.firebaseio.com"
})

export const db = getFirestore(app)