<script lang='ts'>

    import { app } from '$lib/firebase/firebase'
    import { getFirestore, doc, collection, addDoc } from 'firebase/firestore';
    import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

    import { v4 as uuid } from 'uuid'

    import { stripe } from '$lib/stripe/stripe'

    import DragAndDropFiles from '$lib/page-parts/form/DragAndDropFiles.svelte'
    
    // Form Values
    let clientName = null
    let clientEmail = null
    let clientPhone = null
    let projectDetail = null
    let stagedFiles: { file: File, uploading: boolean }[]

    const db = getFirestore(app)
    const storage = getStorage(app)

    async function createFormRecord( event: SubmitEvent ) {

        const submissionId = uuid()

        stagedFiles.map( sf => { sf.uploading = true; return sf })

        stagedFiles = stagedFiles

        let workingFiles = [...stagedFiles]

        let fileData = []

        try {

            fileData = await Promise.all( workingFiles.map( async ( f, index ) => {
    
                const fileRef = ref( storage, `service-request-submissions/${submissionId}/${f.file.name}` )
    
                await uploadBytes( fileRef, f.file )
    
                const url = await getDownloadURL( fileRef )
    
                stagedFiles[index].uploading = false
    
                stagedFiles = stagedFiles
    
                return { filename: f.file.name, url }
            }))

        } catch (e) {
            console.log(e);
        }


        let formData = { submissionId, clientName, clientEmail, clientPhone, projectDetail, files: fileData || null }        

        console.log(formData);
        

        try {
            await addDoc( collection( db, "Service Requests" ), formData)
        } catch( e ) {
            console.log( "Error creating form record", e );
        }

        createCheckoutSession()
    }

    async function createCheckoutSession() {

        await fetch('/stripe/checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ priceId: 'price_1KLpTmCi7DHAJAtO6EkXYb7r' })
        })
        .then( async (res) => await res.json())
        .then( body => {
            console.log(body)
            stripe.redirectToCheckout( {sessionId: body.sessionId} )
        } )
        .catch( (e) => console.log(e));

	}

</script>

<div class="page-content">

    <h2>Builder Proposal Feedback</h2>

    <h3>Fill out the form and upload your files below. We will analyze them and get back to you within 3 days.</h3>

    <div class="form-container" on:submit|preventDefault={(e) => createFormRecord(e)}>

        <form action="POST" id="form">

            <h4 class="form-title">
                Step 1: How should we contact you?
            </h4>

            <label for="name">
                Your Name:
                <input type="text" name="name" id="name" bind:value={clientName} required>
            </label>

            <label for="email">
                Email:
                <input type="email" name="email" id="email" bind:value={clientEmail} required>
            </label>

            <label for="phone">
                Phone:
                <input type="tel" name="phone" id="phone" bind:value={clientPhone}>
            </label>

            <h4 class="form-title">
                Step 2: Tell us about your project
            </h4>

            <label for="description">
                Please share any context or details you think we should know about:
                <textarea name="description" id="description" cols="30" rows="5" bind:value={projectDetail}></textarea>
            </label>

            <h4 class="form-title">
                Step 3: Which set of plans should we review?
            </h4>

            <div class="files">

                <div class="file-label">
                        
                    <span class="file-label">Builder & Architectural Files:</span>

                    <span class="file-label-sub">If you are having trouble uploading your files, feel free to skip this step and we will contact you to retrieve them later.</span>

                </div>

                <DragAndDropFiles bind:stagedFiles multiple={true}/>

            </div>

            <button type="submit" class="next">Next</button>

        </form>

    </div>

</div>

<style>

    .page-content {
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        gap: 2rem;
        align-items: center;
        padding-bottom: 1rem;
    }

    h2 {
        margin-top: 2rem;
        font-size: 3rem;
        text-align: center;
    }

    h3 {
        margin: 0 1rem;
    }

    .form-container {
        width: 100%;
        max-width: 800px;
        background-color: var(--light-grey);
        padding: 1rem;
        border-radius: 4px;
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
    }

    form {
        background-color: white;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        border-radius: 4px;
    }

    .form-title {
        font-size: 1.5rem;
        font-weight: 400;
        margin: 1rem 0;
    }
    .files {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    label, .file-label {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        font-weight: 400;
    }

    .file-label-sub {
        line-height: 1.5rem;
    }

    input, textarea {
        padding: .25rem;
        border: thin solid var(--grey);
        border-radius: 4px;
    }

    input:focus, textarea:focus {
        outline: none;
        border: 2px solid var(--teal);
    }

    .next {
        color: white;
        border-radius: 4px;
        border: none;
        background-color: var(--teal);
        padding: .5rem;
        font-size: 1rem;
        font-weight: 400;
        transition: ease-in-out 200ms;
    }

    .next:hover {
        background-color: var(--purple);
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
    }

    @media (max-width: 400px ) {

        .page-content {
            gap: 1rem;
        }

        h2 {
            font-size: 1.5rem;
            margin-top: 1rem;
        }
    }

</style>