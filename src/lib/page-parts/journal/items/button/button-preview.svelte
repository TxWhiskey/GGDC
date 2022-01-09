<script lang='ts'>

    import { editorStore } from '$lib/page-parts/journal/editor/editorStore'
    import type { PayloadButton } from './button-payload';

    export let payload: PayloadButton

</script>

<div>
    
    <button>
        {#if payload}
        {payload.text}
        {:else}
        No Text
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
        background-color: var(--teal);
        color: white;
        padding: .5rem;
        border: none;
        font-size: 1rem;
        border-radius: 4px;
    }

</style>