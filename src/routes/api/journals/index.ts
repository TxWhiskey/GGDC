import type { ServerRequest } from "@sveltejs/kit/types/hooks";

export async function get( request: ServerRequest ) {

    const req = request.body

    console.log( req )

    return {
        body: {
            message: req
        }
    }

}

export async function post( request: ServerRequest ) {

    console.log(request.locals)

    if ( !request.locals.authenticated ) {
        return {
            status: 403,
            body: {
                message: "Unauthenticated"
            }
        }
    } else {
        return {
            status: 200,
            body: {
                message: "Testing New Post"
            }
        }
    }

}