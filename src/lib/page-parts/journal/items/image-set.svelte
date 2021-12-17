<script lang='ts'>

    import { onMount } from "svelte";

    import { getStorage, ref, listAll, getDownloadURL, uploadBytes } from '@firebase/storage'
    import type { StorageReference } from "firebase/storage";

    import { app } from '$lib/firebase/firebase'

    import { editorStore } from "$lib/page-parts/journal/editor/editorStore";
    import type { ImageItemPayload } from "$lib/types/journal";

    let inputFiles: FileList;

    let imageList: StorageReference[] = []

    let uploadingImage = false

    const storage = getStorage( app )
    
    const libraryRef: StorageReference = ref(storage, `journals/${$editorStore.postData.id}`)
    
    onMount( async() => {

        imageList = await listAll( libraryRef ).then( (res) => {
            return res.items
        })

    })

    let uploadNewImage = false

    async function selectMediaItem( imageRef: StorageReference ) {

        await getDownloadURL( imageRef ).then( (url) => {

            const newPayload:ImageItemPayload = {
                imageTitle: imageRef.name,
                imageUrl: url,
                maxHeight: 500,
                maxWidth: 500
            }

            editorStore.updateItemPayload( $editorStore.selected.rowId, $editorStore.selected.columnId, $editorStore.selected.itemId, newPayload)

        })

    }

    async function uploadImage() {

        await fetch( '/api/photos', {
            method: "POST",
            body: JSON.stringify({
                url: 'TEST'
            })
        })

        
        /* if ( inputFiles ) {

            uploadingImage = true

            const file = inputFiles[0]
    
            const metadata = { 'contentType': file.type }

            const fileRef = ref( libraryRef, file.name)
    
            await uploadBytes( fileRef, file, metadata).then( async (snapshot) => {
                await getDownloadURL( snapshot.ref ).then( (url) => {
                    const newPayload:ImageItemPayload = {
                        imageTitle: snapshot.ref.name,
                        imageUrl: url,
                        maxHeight: 500,
                        maxWidth: 500
                    }
    
                    editorStore.updateItemPayload( $editorStore.selected.rowId, $editorStore.selected.columnId, $editorStore.selected.itemId, newPayload)
                })
            })

            uploadingImage = false

        } */


    }

</script>


{#if !uploadNewImage}
<div class="controls">

    <!-- Add Image Control -->
    <button class="add-media" on:click={ () => uploadNewImage = !uploadNewImage}>Add Image</button>
    
    <!-- Current Image Title -->
    {#if $editorStore.selected.item.payload}
    <button class="add-media" on:click={ () => $editorStore.selected.item.payload = null }>Replace Image</button>
    <input type="text" disabled bind:value={$editorStore.selected.item.payload.imageTitle} class="image-title">
    <p>Max-Height:</p>
    <input type="text" placeholder="Max Height" bind:value={$editorStore.selected.item.payload.maxHeight} class="config-box">
    <p>Max-Width: </p>
    <input type="text" placeholder="Max Width" bind:value={$editorStore.selected.item.payload.maxWidth} class="config-box">

    {:else}

        <!-- Media List -->
        {#if imageList.length}
        <ul class="media-list">
            {#each imageList as image}

            <li class="media-list-item" on:click={ () => selectMediaItem(image)}>{image.name}</li>

            {/each}
        </ul>
        {:else}
        <p>Media Library Empty</p>
        {/if}

    {/if}

</div>

{:else}

<div class="upload-controls">

    <!-- Upload Controls -->
    <input type=file id="file-selector" bind:files={inputFiles}>
    <button class="add-media" on:click={uploadImage} disabled={typeof inputFiles === 'undefined' || inputFiles.length < 1}>Upload</button>
    <button class="add-media" on:click={ () => uploadNewImage = !uploadNewImage}>Cancel</button>

</div>

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
    }

    .media-list {
        display: flex;
        flex-flow: column nowrap;
        border: thin solid black;
        list-style-type: none;
        max-height: 200px;
        overflow: auto;
        padding: 0;
        margin: 0;
    }

    .media-list-item {
        padding: .5rem;
        cursor: pointer;
    }

    .media-list-item:hover {
        background-color: var(--light-grey);
    }

</style>