<script lang='ts'>

    import { goto } from '$app/navigation';
    
    import { app, auth } from '$lib/firebase/firebase'
    import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

    import Spinner from '$lib/page-parts/spinner.svelte'

    import {editorStore} from './editorStore'

    let stagedPDF = null
    let uploadingPDF = false

    let confirmDelete = false

    async function savePost() {

        let requestInit = {
            method: "POST",
            body: JSON.stringify($editorStore.postData),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await fetch( "/api/journals", requestInit )

        const body = await res.json()

        $editorStore.changes = false

    }

    async function deletePost() {

        const res = await fetch( '/api/journals/' + $editorStore.postData.id, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })

        goto('/admin/portal/journal')

    }

    async function uploadPDF() {

        uploadingPDF = true

        const file = stagedPDF[0]

        let path: string[] = ["Journals","PDF Versions"]
        let newFileTitle: string = $editorStore.postData.title
        
        const storage = getStorage( app )
        const storageRef = ref( storage, 'Media Library/' + newFileTitle )

        const typeAndExtension = (file.type as string).split( "/")
        
        let fileType = typeAndExtension[0] == "image" ? "image" : "document"

        const fileInfo = await uploadBytes( storageRef, file)
            .then( async snapshot => {
                return await getDownloadURL(snapshot.ref)
            }).then( async ( url: string) => {

                const res = await fetch( '/api/files/create/file', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        path: path,
                        title: newFileTitle || file.name,
                        url: url,
                        type: fileType
                    })
                })

                const newFileData = await res.json()

                $editorStore.postData.pdfUrl = newFileData.url
                $editorStore.changes = true

                uploadingPDF = false

                stagedPDF = null

            })
            .catch( (err) => console.log(err))

    }

    async function togglePublish() {

        const newState = !$editorStore.postData.published
        await savePost()


        let requestInit = {
            method: "POST",
            body: JSON.stringify({
                id: $editorStore.postData.id,
                state: newState,
                publishedDate: $editorStore.postData.publishedDate
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await fetch( `/api/journals/publish`, requestInit )

        const body = await res.json()

        $editorStore.postData.published = newState

    }

</script>

<ul class="heading-list">
    <li class="heading-list-item">
        <input type="text" placeholder="Post Title" bind:value={$editorStore.postData.title} on:keypress={() => $editorStore.changes = true}>
    </li>
    <li class="heading-list-item">
        <button on:click={savePost} class:unsaved="{$editorStore.changes}">Save</button>
    </li>
    <li class="heading-list-item">
        <button on:click={togglePublish}>
            {#if $editorStore.postData.published}
            Revoke
            {:else}
            Publish
            {/if}
        </button>
    </li>

    <li class="heading-list-item">
        <input type="date" name="publish-date" id="publish-date" bind:value={$editorStore.postData.publishedDate}>
    </li>

    {#if !confirmDelete}
    
    <li class="heading-list-item">
        <button on:click={() => confirmDelete = true}>
            Delete
        </button>
    </li>

    {:else}

    <li class="heading-list-item">
        <button on:click={ () => confirmDelete = false}>Cancel Delete</button>
    </li>

    <li class="heading-list-item">
        <button on:click={deletePost} class="confirm-delete">Confirm Delete</button>
    </li>

    {/if}

    <li class="heading-list-item">
        <button on:click={editorStore.togglePreview} class:previewing="{$editorStore.previewing}">
            Preview
        </button>
    </li>

    <li class="heading-list-item">
        <p>PDF:</p>
        {#if $editorStore.postData.pdfUrl}
        <button on:click={ () => $editorStore.postData.pdfUrl = null}>Remove</button>
        {:else if uploadingPDF}
        <Spinner padding="0" height="1rem" width="1rem"/>
        {:else if !stagedPDF}
        <label for="pdf-upload" class="pdf-upload-label">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-plus" viewBox="0 0 16 16">
                <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"/>
                <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
            </svg>
            <input type="file" id="pdf-upload" class="pdf-upload" bind:files={stagedPDF}>
        </label>
        {:else}
        <button on:click={uploadPDF}>Set</button>
        {stagedPDF[0].name}
        {/if}
    </li>
</ul>

<style>

    
    .heading-list {
        margin: 0;
        padding: .5rem;
        display: flex;
        flex-flow: row wrap;
        gap: 1rem;
        list-style-type: none;
    }

    .heading-list-item {
        display: flex;
        flex-direction: row;
        gap: .5rem;
        align-items: center;
    }

    .heading-list-item button {
        font-weight: 400;
    }

    .confirm-delete {
        background-color: red;
        color: white;
        border-radius: 2px;
        border: none;
        height: 100%;
    }

    .unsaved {
        border-color: red;
        border-radius: 4px;
    }

    .previewing {
        background-color: var(--teal);
        color: white;
        border: 2px solid var(--teal);
        border-radius: 2px;
    }

    svg {
        display: inline-block;
        vertical-align: middle;
    }

    .pdf-upload {
        visibility: hidden;
    }

    .pdf-upload-label {
        cursor: pointer;
    }

</style>