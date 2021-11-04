<script>

    import '../app.css'

    import Nav from '$lib/page-parts/nav.svelte'
    import Footer from '$lib/page-parts/footer.svelte'
    import Survey1 from '$lib/surveys/survey1.svelte'

    import { onMount } from 'svelte';

    let surveyVisisble = false;

    function toggleSurvey() {
        surveyVisisble = !surveyVisisble;
    }

    function getCookies() {
        return document.cookie
            .split(';')
            .map( c => c.split('='))
            .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});
    }

    onMount( () => {

        //Decode Cookies
        let cookieValues = getCookies()

        // If visitor has cookie
        // @ts-ignore
        if (cookieValues.survey) {
            
        // If new visitor
        } else {
            document.cookie = 'survey=1'
            document.cookie = 'surveyComplete=false'
        }


        // @ts-ignore
        if (!cookieValues.surveyComplete === true) {
            setTimeout(function() {toggleSurvey()}, 5000)
        }

    })

</script>

<svelte:head>
    <title>GG Collab</title>
</svelte:head>

<main class="container">
    <Nav></Nav>
    <div class="content-container">
        <slot></slot>
    </div>
    <Footer/>
</main>

{#if surveyVisisble}
    <Survey1 on:surveyComplete={toggleSurvey}/>
{/if}
    

<style>

    .container {
        min-height: 100vh;
        display: flex;
        flex-flow: column nowrap;
    }

    .content-container {
        margin-top: calc(1.2rem + 20px);
    }

</style>