import { initializeApp, credential, apps } from 'firebase-admin';

function initApp() {

    if (import.meta.env.DEV) {
        console.info("Init Admin App [Dev]")
        return initializeApp({
            credential: credential.cert(JSON.parse(import.meta.env.VITE_FB_SA as string))
        })
    } else {
        console.info("Init Admin App [Prod]")
        return initializeApp()
    }

}

if (!apps.length) {
    initApp()
}