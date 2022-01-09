<script lang="ts">

    import SvelteMarkdown from 'svelte-markdown'

    import type { RichTextPayload } from './rich-text-payload';

    export let payload: RichTextPayload = {
        content: 'Insert your text'
    }

</script>

{#if payload}

<div class="display">
    <SvelteMarkdown source={payload.content}/>
</div>

{:else}

<p class="empty">- Empty -</p>

{/if}

<!-- {payload} -->

<style>

    p {
        text-align: center;
        margin: 0;
        color: teal;
    }

    .display {
        display: flex;
        flex-flow: column nowrap;
        gap: 1rem;
        white-space: normal;
    }

</style>