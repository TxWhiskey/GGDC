<script context='module' lang='ts'>

    import type { JournalPost } from '$lib/types/journal';

    import { getDefaultPost } from '$lib/default-post/default-post'

    export async function load ( { params, fetch}) {

        let post: JournalPost

        const postId = params.id

        if ( postId == 'new' ) {
            
            post = getDefaultPost()

        } else {

            const res = await fetch( `/api/journals/${postId}`)

            post = await res.json()

            console.log(post);
            

        }

        return {
            props: {
                postData: post
            }
        }

    }

    export const ssr = false

</script>

<script lang='ts'>

    import { goto } from '$app/navigation';
        
    import { app, auth } from '$lib/firebase/firebase'
    import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'


    import ItemConfig from '$lib/page-parts/journal/editor/item-config.svelte';
    import ItemTypeList from '$lib/page-parts/journal/editor/item-type-list.svelte';
    import ColumnEdit from '$lib/page-parts/journal/editor/column-edit.svelte';

    import { editorStore } from '$lib/page-parts/journal/editor/editorStore'

    import Spinner from '$lib/page-parts/spinner.svelte'

    export let postData: JournalPost

    let stagedPDF = null
    let uploadingPDF = false

    let confirmDelete = false

    const itemTypes = [
        'Text',
        'Image'
    ]

    editorStore.initStore( postData )

    async function savePost() {

        let requestInit = {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await fetch( "/api/journals", requestInit )

        const body = await res.json()

    }

    async function togglePublish() {

        await savePost()

        const newState = !postData.published

        /* let requestInit = {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        } */

        const res = await fetch( `/api/journals/publish/${postData.id}/${newState}` )

        const body = await res.json()

        postData.published = newState
        postData.publishedDate = new Date

    }

    async function uploadPDF() {

        uploadingPDF = true

        const file = stagedPDF[0]

        let path: string[] = ["Journals","PDF Versions"]
        let newFileTitle: string = postData.title
        
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

                postData.pdfUrl = newFileData.url

                uploadingPDF = false

                stagedPDF = null

            })
            .catch( (err) => console.log(err))

    }

    async function deletePost() {

        const res = await fetch( '/api/journals/' + postData.id, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })

        goto('/admin/portal/journal')

    }

</script>

<div class="grid">

    <div class="journal-heading">
        <ul class="heading-list">
            <li class="heading-list-item">
                <input type="text" placeholder="Post Title" bind:value={postData.title}>
            </li>
            <li class="heading-list-item">
                <button on:click={savePost}>Save</button>
            </li>
            <li class="heading-list-item">
                <button on:click={togglePublish}>
                    {#if postData.published}
                    Revoke
                    {:else}
                    Publish
                    {/if}
                </button>
            </li>

            <!-- Post Delete -->
            {#if !confirmDelete}
            
            <li class="heading-list-item">
                <button on:click={() => confirmDelete = true}>
                    Delete
                </button>
            </li>

            {:else}

            <li class="heading-list-item">
                <button on:click={ () => confirmDelete = false}>Cancel</button>
            </li>

            <li class="heading-list-item">
                <button on:click={deletePost}>Confirm</button>
            </li>

            {/if}


            <li class="heading-list-item">
                <p>PDF:</p>
                {#if postData.pdfUrl}
                <button on:click={ () => postData.pdfUrl = null}>Remove</button>
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
                {/if}
            </li>
        </ul>
    </div>

    <div class="post-editor">

        {#if $editorStore.postData.content}

        <div class="rows">

            <!-- Rows -->
            {#each $editorStore.postData.content as row, ri}

                <div class="row">

                    <div class="row-content">

                        <!-- Columns -->
                        {#each row.columns as column, ci}

                            <ColumnEdit rowId={row.id} columnId={column.id} column={column}/>

                        {/each}

                    </div>

                    <!-- Row Controls -->
                    <div class="row-options">
                        <span class="row-title">Row</span>
                        <!-- Add Column to Row -->
                        <button class="row-option" on:click={() => editorStore.addColumn(row.id)} title="Add Columnt to Row">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                            </svg>
                        </button>
                        <!-- Move Row Up -->
                        <button class="row-option" on:click={ () => editorStore.moveRowUp(row.id)} title="Move Row Up">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
                            </svg>
                        </button>
                        <!-- Move Row Down -->
                        <button class="row-option" on:click={ () => editorStore.moveRowDown(row.id)} title="Move Row Down">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
                            </svg>
                        </button>
                        <!-- Delete Row -->
                        <button class="row-option" on:click={ () => editorStore.deleteRow(row.id)} title="Delete Row">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>
                    </div>

                </div>

            {/each}

        </div>

        {/if}

        <button class="add-row" on:click={editorStore.addRow}>Add Row</button>

        <!-- <pre>
            {JSON.stringify($editorStore.postData, undefined, 4)}
        </pre> -->

    </div>

    {#if $editorStore.editing}
        <ItemConfig/>
    {/if}

</div>

<style>

    .grid {
        display: grid;
        height: 100%;
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr auto;
    }

    .journal-heading {
        box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.356);
    }

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

    .post-editor {
        display: flex;
        flex-flow: column nowrap;
        gap: 1rem;
        overflow: auto;
        padding-bottom: 2rem;
    }

    .rows {
        display: flex;
        flex-flow: column nowrap;
        gap: 1rem;
        padding: 1rem 0;
        width: 100%;
        max-width: 1000px;
        align-self: center;
    }

    .row {
        /* background-color: cadetblue; */
        position: relative;
        min-height: 3rem;
    }

    .row:hover {
        /* border-top: thin dotted rgb(225, 225, 225);
        border-bottom: thin dotted rgb(225, 225, 225); */
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.174);
    }

    .row-content {
        display: flex;
        flex-flow: row wrap;
        gap: 1rem;
    }

    .row-title {
        color: white;
    }

    .row-options {
        position: absolute;
        right: .5rem;
        top: .5rem;
        padding: .25rem;
        background-color: var(--grey);
        border-radius: 3px;
        display: none;
        box-shadow: 0 0 2px rgba(28, 28, 28, 0.6);
        flex-flow: row nowrap;
        align-items: center;
        gap: .5rem;
    }

    .row:hover .row-options {
        display: flex;
    }

    .row-option {
        padding: 0;
    }

    svg {
        display: inline-block;
        vertical-align: middle;
    }

    .add-row {
        color: white;
        background-color: var(--teal);
        border: none;
        padding: .5rem;
        width: fit-content;
        align-self: center;
    }

    .pdf-upload {
        visibility: hidden;
    }

    .pdf-upload-label {
        cursor: pointer;
    }

</style>