<script lang='ts'>

    import { editorStore } from '$lib/page-parts/journal/editor/editorStore'
    import type { PayloadButton } from './button-payload';

    export let payload: PayloadButton

    function getPayloadClass() {
        return payload.color
    }

</script>

<div>
    
    <button class={payload.color}>
        {#if payload}
        {payload.text}
        {:else}
        - No Text -
        {/if}
    </button>

</div>

<style>

    div {
        display: flex;
        justify-content: center;
    }

    button {
        display: flex;
        align-items: center;
        justify-self: center;
        color: white;
        padding: .5rem;
        border: none;
        font-size: 1rem;
        border-radius: 4px;
        font-weight: 400;
    }

    .teal {
        background-color: var(--teal);
    }

    .purple {
        background-color: var(--purple);
    }

    .grey {
        background-color: var(--light-grey);
        color: var(--grey);
    }

</style>