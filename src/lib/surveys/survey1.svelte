<script>

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher()

    function completeSurvey(selection) {
        document.cookie = "surveyComplete=true"
        
        fetch("https://us-central1-georgia-grace-design-collab.cloudfunctions.net/submitSurvey" , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                selection: selection
            })
        })

        dispatch('surveyComplete')
    }

</script>

<div class="survey-container">
    <div class="survey-header">
        <h4 class="survey-header-text">How did you hear about us?</h4>
        <button class="survey-close" on:click={ () => { completeSurvey('skipped')}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </button>
    </div>
    <ul class="survey-options">
        <li class="survey-option" on:click={() => completeSurvey('instagram')}>Instagram</li>
        <li class="survey-option" on:click={() => completeSurvey('google')}>Google</li>
        <li class="survey-option" on:click={() => completeSurvey('architecht')}>Architect</li>
        <li class="survey-option" on:click={() => completeSurvey('builder')}>Builder</li>
        <li class="survey-option" on:click={() => completeSurvey('designer')}>Interior Designer</li>
        <li class="survey-option" on:click={() => completeSurvey('other')}>Other</li>
    </ul>
</div>

<style>

    .survey-container {
        background-color: rgba(255, 255, 255, 0.90);
        border: thin solid var(--grey);
        position: fixed;
        bottom: 1rem;
        right: 1rem;
        margin: 0 auto;
        padding: 1rem;
        z-index: 9999;
        border-radius: 5px;
        display: flex;
        flex-flow: column wrap;
        gap: 1rem;
    }

    @media (max-width: 500px) {
        .survey-container {
            left: 1rem;
        }
    }

    .survey-header {
        display: flex;
        flex-flow: row wrap;
        gap: 1rem;
        align-items: center;
    }

    .survey-close {
        border: none;
        padding: 0;
        cursor: pointer;
        background-color: transparent;
        margin-left: auto;
    }

    .survey-options {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-flow: column wrap;
        gap: 1rem;
    }

    .survey-option {
        border: thin solid var(--grey);
        padding: .5rem;
        border-radius: 5px;
        color: black;
        cursor: pointer;
    }

    .survey-option:hover {
        background-color: var(--grey);
        color: white;
    }


</style>