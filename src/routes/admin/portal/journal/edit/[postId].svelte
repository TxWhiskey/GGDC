<script context='module' lang='ts'>

    import { postData } from '$lib/test-data/newPost'

    const post = postData
    
    export async function load () {
            return {
                props: {
                    postData: post
                }
            }
    }

    export const ssr = false

</script>

<script lang='ts'>

    import ItemConfig from '$lib/page-parts/journal/editor/item-config.svelte';
    import ItemTypeList from '$lib/page-parts/journal/editor/item-type-list.svelte';
    import ColumnEdit from '$lib/page-parts/journal/editor/column-edit.svelte';

    import { editorStore } from '$lib/page-parts/journal/editor/editorStore'
    import type { JournalPost } from '$lib/types/journal';

    export let postData: JournalPost

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

        console.log(body);

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

        console.log(body);

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
            <li class="heading-list-item">
                <p>PDF:</p>
                <input type="file">
            </li>
            <li class="heading-list-item">
                {postData.createdDate}
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
    }

</style>