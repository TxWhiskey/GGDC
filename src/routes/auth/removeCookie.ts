import * as cookie from 'cookie'

export async function get() {
    return {
        status: 204,
        headers: {
            'set-cookie': [
                cookie.serialize('session', "deleted", {expires: new Date(0), path:'/'})
            ]
        }
    }
}