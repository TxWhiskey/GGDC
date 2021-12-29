<script lang='ts'>

    import FileExplorer from "$lib/page-parts/journal/sub-componenets/file-explorer/file-explorer.svelte";

    import { editorStore } from "$lib/page-parts/journal/editor/editorStore";
    import type { FileData } from "../sub-componenets/file-explorer/file-explorer-types";

    let showMediaLibrary = false;

    editorStore.subscribe( s => {
        if (s.selected?.item.payload) {
            showMediaLibrary = false
        } else {
            showMediaLibrary = true
        }
    })

    function updatePayload( file: FileData ) {

        $editorStore.selected.item.payload = {
            imageUrl: file.url,
            imageTitle: file.title,
            imageId: file.id,
            maxHeight: 500,
            maxWidth: 500
        }

        showMediaLibrary = false
    }

</script>

<div class="controls">
    
    <!-- Current Image Title -->
    {#if $editorStore.selected.item.payload}

    {#if showMediaLibrary}
    <button class="add-media" on:click={ () => showMediaLibrary = false }>Cancel</button>
    {:else}
    <button class="add-media" on:click={ () => showMediaLibrary = true }>Replace Image</button>
    {/if}
    <input type="text" disabled bind:value={$editorStore.selected.item.payload.imageTitle} class="image-title">
    <p>Max-Height:</p>
    <input type="text" placeholder="Max Height" bind:value={$editorStore.selected.item.payload.maxHeight} class="config-box">
    <p>Max-Width: </p>
    <input type="text" placeholder="Max Width" bind:value={$editorStore.selected.item.payload.maxWidth} class="config-box">
    {/if}

</div>

{#if showMediaLibrary}
<FileExplorer on:setFile={ (e) => updatePayload(e.detail.targetFile)}/>
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