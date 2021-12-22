<script lang='ts'>

    import FileExplorer from "$lib/page-parts/journal/sub-componenets/file-explorer/file-explorer.svelte";

    import { editorStore } from "$lib/page-parts/journal/editor/editorStore";

    export let payload

    let showMediaLibrary = false;

    editorStore.subscribe( s => {
        if (s.selected.item.payload) {
            showMediaLibrary = false
        } else {
            showMediaLibrary = true
        }
    })

</script>


<div class="controls">
    
    <!-- Current Image Title -->
    {#if $editorStore.selected.item.payload}
    <button class="add-media" on:click={ () => showMediaLibrary = true }>Replace Image</button>
    <input type="text" disabled bind:value={$editorStore.selected.item.payload.imageTitle} class="image-title">
    <p>Max-Height:</p>
    <input type="text" placeholder="Max Height" bind:value={$editorStore.selected.item.payload.maxHeight} class="config-box">
    <p>Max-Width: </p>
    <input type="text" placeholder="Max Width" bind:value={$editorStore.selected.item.payload.maxWidth} class="config-box">
    {/if}

</div>

{#if showMediaLibrary}
<FileExplorer />
{/if}

<style>

    .controls {
        display: flex;
        flex-flow: row nowrap;
        gap: .5rem;
        align-items: center;
    }
    
    .add-media {
        border: thin solid var(--teal);
        padding: .5rem;
        background-color: white;
        color: var(--teal);
        font-weight: 400;
    }

    .add-media:hover {
        background-color: var(--teal);
        color: white;
    }

    .add-media:disabled {
        background-color: var(--light-grey);
        color: var(--grey);
        border-color: var(--grey);
        cursor: not-allowed;
    }

    .image-title {
        align-self: stretch;
    }

    .config-box {
        align-self: stretch;
        font-weight: 400;
    }

</style>