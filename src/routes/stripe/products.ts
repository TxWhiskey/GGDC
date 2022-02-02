import stripe from './_stripe'

export async function get() {

    const products = await stripe.products.list()

    return {
        status: 200,
        body: products.data
    }
}

export async function post({ request }) {

    const data = await request.json()

    const metaData: {key: string, value: string}[]  = data.metadata || null

    const productsList = await stripe.products.list()

    let products = productsList.data

    if ( metaData ) {

        metaData.forEach( md => {
            products = products.filter( p => {
                
                if (p.metadata[md.key] && p.metadata[md.key] == md.value) {
                    return true
                } else {
                    return false
                }

            })
        })

    }

    return {
        status: 200,
        body: products
    }

}