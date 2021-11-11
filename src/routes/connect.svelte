<svelte:head>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-212337181-1">
    </script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-212337181-1');
    </script>

</svelte:head>

<script lang='ts'>

    const formSubmit = 'https://us-central1-georgia-grace-design-collab.cloudfunctions.net/handleFormSubmit'

    let firstName = ""
    let lastName = ""
    let email = ""
    let phone = ""
    let projectType = ""
    let architectHired = false
    let architectSeeking = false
    let builderHired = false
    let builderSeeking = false
    let designerHired = false
    let designerSeeking = false
    let detail = ""

    let message
    let error

    let loading = false


    async function submitForm(): Promise<void> {

        loading = true;
        console.log('Set loading to true')

        try {

            const formData = JSON.stringify({
                firstName, lastName, email, phone, projectType, architectHired, architectSeeking, 
                builderHired, builderSeeking, designerHired, designerSeeking, detail
            })

            const submit = await fetch( formSubmit, {
                method: "POST",
                body: formData
            })

            message = await submit.text().then( m => {
                loading = false;
                console.log('Set loading to false')
                return m
            })

            console.log(message)

        } catch(e) {
            error = e
            console.log(e)
        }

    }

</script>

<div class="page-container">

    <!-- <div class="header-section">
        <img src="/images/GG-Square.svg" alt="" class="header-section-logo">
        <h3 class="header-section-text">
            Let's Connect!
        </h3>
    </div> -->

    <div class="page-columns">

        <div class="form-section">
            <img src="/images/GG-Square.svg" alt="" class="header-section-logo">
            <h3 class="header-section-text">
                Let's Connect!
            </h3>

            
            <!-- <div class="form-options">
                <button class="form-option">Homeowner</button>
                <button class="form-option">Builder / Architect</button>
            </div> -->

            {#if loading}
            <h5>Sending...</h5>
            {:else if !message && !error}
            <form class="form-content" action="/api/contact" method="POST" on:submit|preventDefault={submitForm}>
                <div class="form-row">
                    <input type="text" class="form-item" name="first-name" placeholder="First Name" bind:value={firstName}>
                    <input type="text" class="form-item" name="last-name" placeholder="Last Name" bind:value={lastName}>
                </div>
                <div class="form-row">
                    <input type="email" class="form-item" placeholder="*Email" bind:value={email} required>
                    <input type="tel" class="form-item" placeholder="Phone Number" bind:value={phone}>
                </div>
                <div class="form-row">

                        <h3 class="status-label">Project Type</h3>
                        <select name="job-types" id="job-types" class="form-item form-select"  bind:value={projectType}>
                            <option value="New Construction" class="form-option">New Construction</option>
                            <option value="Remodel with Builder" class="form-option">Remodel with Builder</option>
                            <option value="Remodel By Myself" class="form-option">Remodel By Myself</option>
                            <option value="Other" class="form-option">Other</option>
                        </select>

                </div>
                <div class="form-row">

                        <div class="status-section">
                            <h3 class="status-label">Architect</h3>
                            <div class="status-options">
                                <div class="status-option">
                                    <input type="checkbox" name="hired" class="checkbox" bind:checked={architectHired}>
                                    <label class="checkbox-label" for="hired">Hired</label>
                                </div>
                                <div class="status-option">
                                    <input type="checkbox" name="seeking" class="checkbox" bind:checked={architectSeeking}>
                                    <label class="checkbox-label" for="seeking">Seeking</label>
                                </div>
                            </div>                                
                        </div>

                        <div class="status-section">
                            <h3 class="status-label">Builder</h3>
                            <div class="status-options">
                                <div class="status-option">
                                    <input type="checkbox" name="hired" class="checkbox" bind:checked={builderHired}>
                                    <label class="checkbox-label" for="hired">Hired</label>
                                </div>
                                <div class="status-option">
                                    <input type="checkbox" name="seeking" class="checkbox" bind:checked={builderSeeking}>
                                    <label class="checkbox-label" for="seeking">Seeking</label>
                                </div>
                            </div>                                
                        </div>

                        <div class="status-section design">
                            <h3 class="status-label">Interior Designer</h3>
                            <div class="status-options">
                                <div class="status-option">
                                    <input type="checkbox" name="hired" class="checkbox" bind:checked={designerHired}>
                                    <label class="checkbox-label" for="hired">Hired</label>
                                </div>
                                <div class="status-option">
                                    <input type="checkbox" name="seeking" class="checkbox" bind:checked={designerSeeking}>
                                    <label class="checkbox-label" for="seeking">Seeking</label>
                                </div>
                            </div>                                
                        </div>

                </div>
                
                <div class="form-row">
                    <textarea name="" id="" cols="30" rows="10" class="form-item form-text" placeholder="Tell us a bit about what you're looking for" bind:value={detail}></textarea>
                </div>

                <div class="form-row" style="justify-content:center;">
                    <input type="submit" class="form-submit">
                    <!-- <button type="submit" class="form-cta">Featured Projects</button> -->
                </div>

                <div class="form-row" style="justify-content:center;">
                    <a href="https://georgiagracecollaboration.hbportal.co/schedule/6163b3aee4a11230f3e34a24" target="_blank" rel=external class="schedule-submit">
                        <button class="schedule-btn" type='button'>Schedule Discovery Call</button>
                    </a>
                </div>

            </form>

            {:else if message }
            <div class="response-container">
                <h4 class="server-response">{message}</h4>
                <button class="form-submit">
                    <a href="/experience" class="btn-link">Check out our projects</a>
                </button>
            </div>
            {:else if error}
            <div class="response-conatiner">
                <h4 class="server-response">{error}</h4>
                <h5 class="server-response">We did not receive your form due to an error. Please let us know about it. Info@GGCollab.com</h5>
            </div>
            {/if}

        </div>

        <div class="details-section">
            
            <div class="details">
                <div class="detail">
                    <h5 class="detail-header">Phone</h5>
                    <a href="tel: 7132482987" class="detail">713.248.2987</a>
                </div>
                <div class="detail">
                    <h5 class="detail-header">Email</h5>
                    <a href="mailto: Info@GGCollab.com" class="detail">Info@GGCollab.com</a>
                </div>
                <div class="detail">
                    <h5 class="detail-header">Instagram</h5>
                    <a href="https://www.instagram.com/ggcollab/" class="detail">@GGCollab</a>
                </div>                
            </div>

        </div>

    </div>

</div>

<style>

    :root {
        --default-width: 1000px;
    }

    .page-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: center;
        margin-bottom: 1rem;
    }

    .page-columns {
        display: flex; 
        flex-flow: column wrap-reverse;
        gap: 2em;
        width: var(--default-width);
        padding-top: 2em;
    }

    .header-section {
        padding-top: 2em;
        text-align: center;
    }

    .header-section-logo {
        width: 150px;
    }

    .header-section-text {
        font-size: 2em;
    }

    .form-section {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 2em;
        align-items: center;
    }

    /* .form-options {
        display: flex;
        flex-direction: row;
        gap: 2em;
        align-items: center;
    }

    .form-option {
        background-color: transparent;
        font-size: 1rem;
        border: none;
        border-bottom: 1px solid var(--dark-grey);
        padding: 0;
        cursor: pointer;
    }

    .form-option:hover {
        color: var(--purple);
        border-color: var(--purple);
    } */

    .form-content {
        display:flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }

    .form-row {
        display: flex;
        flex-flow: row wrap;
        gap: 2rem;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }

    .form-item {
        border: 1px solid var(--light-grey);
        padding: .5rem 1rem;
        font-weight: 400;
        color: var(--dark-grey);
        border-radius: 0%;
    }

    .form-item::placeholder {
        color: var(--dark-grey);
    }

    .form-select {
        flex: 1;
    }

    .form-text {
        width: 100%;
    }

    .form-submit {
        border: 1px solid var(--light-grey);
        background-color: white;
        padding: 1rem 2rem;
        width: 100%;
        font-size: 1rem;
        font-weight: 400;
        border-radius: 0%;
        -webkit-appearance: none;
        cursor: pointer;
    }

    .form-submit:hover {
        background-color: var(--light-grey);
    }

    .schedule-submit {
        width: 100%;
    }

    .schedule-btn {
        border: 1px solid var(--light-grey);
        background-color: var(--teal);
        color: white;
        padding: 1rem 2rem;
        width: 100%;
        font-size: 1rem;
        font-weight: 400;
        border-radius: 0%;
        cursor: pointer;
    }

    .schedule-btn:hover {
        background-color: var(--light-grey);
        color: var(--dark-grey);
    }

    .details-section {
        flex: 1;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }

    .details {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
        gap: 1em;
        width: 100%;
    }

    .detail-header {
        color: var(--teal);
        font-weight: 400;
    }

    .response-container {
        display: flex;
        flex-flow: column wrap;
        gap: 1em;
    }

    .form-cta {

    }

    @media (max-width: 1000px) {

        :root {
            --default-width: 100%;
        }

        .page-container {
            padding: 1rem 1rem;
        }

        .page-columns {
            padding: 0;
        }

        .form-section {
            min-width: 400px;
        }

        .form-item {
            width: 100%;
        }

    }

    @media (max-width: 450px) {

        .form-section {
            min-width: fit-content;
            width: 100%;
        }

        .form-content {
            width: 100%;
            gap: 1em;
        }

        .form-row {
            gap: 1em;
        }

        .form-item {
            width: 100%;
            font-size: 16px;
        }

        .details-section {
            flex-direction: column;
            width: 100%;
            padding-top: 2rem;
            gap: 1rem;
        }

        .details {
            align-items: flex-start;
            width: 100%;
        }

    }

</style>