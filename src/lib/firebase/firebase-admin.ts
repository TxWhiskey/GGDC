import admin from 'firebase-admin'

function initApp() {

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
    }) */
}

/* if (!admin.apps.length) {
    initApp()
} */

admin.initializeApp()

export const fbAdmin = admin