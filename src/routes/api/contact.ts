
export async function get() {

    return({
        body: {
            message: "ok"}
    })

}

export const post = ({request}) => {

    const body = request.formData()
    
    const formBody = JSON.parse(request.body)
    
    return {
        body: {
            message: "Thank you for your submission. We will reach out to you shortly. If you would like to get in contact with us sooner, please feel free to call me at 713.248.2987."
        }
    }

}
