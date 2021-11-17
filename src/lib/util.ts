export function post( endpoint, data ) {

    //console.log("[POST]", JSON.stringify(data || {}))

    return fetch(endpoint, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify( data || {} ),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then( res => res.json() )
    .catch( (err) => {
        console.error("[POST] Error", err)
    })
}