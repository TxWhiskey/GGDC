<script lang='ts'>

    import type { PayloadButton } from './button-payload';

    export let payload: PayloadButton

</script>

<div>
    
    {#if payload}
    <a target="_blank" href="{payload.linkTo}" class={payload.color}>
        {payload.text}
    </a>
    {/if}

</div>

<style>

    div {
        display: flex;
        justify-content: center;
    }

    a {
        display: flex;
        align-items: center;
        justify-self: center;
        color: white;
        padding: .5rem;
        border: none;
        font-size: 1rem;
        border-radius: 4px;
        font-weight: 400;
        transition: ease-in-out 300ms;
    }

    .teal {
        background-color: var(--teal);
    }

    .teal:hover {
        background-color: var(--light-grey);
        color: var(--teal);
    }

    .purple {
        background-color: var(--purple);
    }

    .purple:hover {
        background-color: var(--light-grey);
        color: var(--purple);
    }

    .grey {
        background-color: var(--light-grey);
        color: var(--grey);
    }

    .grey:hover {
        background-color: var(--teal);
        color: white;
    }

</style>