<script context='module' lang='ts'>

    import type { JournalPost, Item} from '$lib/types/journal'

    import ItemText from '$lib/page-parts/journal/item-text.svelte';
    

    export async function load () {
            return {
                /* props: {
                    postData: postData
                } */
            }
    }

</script>

<script lang='ts'>

    import Editor from '$lib/page-parts/journal/editor.svelte';

    import { v4 as uuid } from 'uuid'

    const textItem: Item = {
        id: uuid(),
        type: 'Text',
        payload: "Aliqua in laboris aliqua enim minim adipisicing dolor sunt Lorem cillum nisi laborum laborum. Officia Lorem voluptate enim magna occaecat consectetur sint reprehenderit Lorem voluptate adipisicing id. Sunt occaecat eiusmod ullamco voluptate enim minim cillum eu magna fugiat ea. Sunt aliquip sint anim incididunt elit labore ad occaecat. Laboris Lorem mollit do veniam ex officia. Ad incididunt labore magna ad minim velit voluptate. Enim duis laborum Lorem nulla fugiat enim proident ipsum ipsum esse ipsum quis. Excepteur officia est duis reprehenderit ullamco eu. Aliqua eiusmod ad et sit exercitation ad ut duis do labore laborum. Esse occaecat nostrud ullamco adipisicing sint magna excepteur quis dolore cillum tempor et irure enim. Aliqua nisi ullamco incididunt aliqua consequat incididunt minim sunt. Ut sit culpa commodo incididunt pariatur do veniam eiusmod exercitation Lorem tempor sit id eu. Deserunt officia Lorem eiusmod voluptate reprehenderit do nulla nostrud dolor laborum consequat dolore elit mollit. Est enim exercitation veniam pariatur dolore sunt eiusmod adipisicing laboris nulla ullamco amet reprehenderit."
    }

    export let postData: JournalPost = {
        id: uuid(),
        published: false,
        rows: [
            {
                id: uuid(),
                columns: [
                    {
                        id: uuid(),
                        items: [
                            textItem
                        ]
                    },{
                        id: uuid(),
                        items: [
                            textItem
                        ]
                    }
                ]
            },
            {
                id: uuid(),
                columns: [
                    {
                        id: uuid(),
                        items: [
                            textItem
                        ]
                    },{
                        id: uuid(),
                        items: []
                    }
                ]
            },
            {
                id: uuid(),
                columns: [
                    {
                        id: uuid(),
                        items: [
                            textItem
                        ]
                    },{
                        id: uuid(),
                        items: []
                    }
                ]
            }
        ],
        title: "New Blog Post"
    }

    let editing = false
    let selected = null

    function setSelection( rowIndex: number, columnIndex: number, itemIndex: number ) {

        let selectedItem = postData.rows[rowIndex].columns[columnIndex].items[itemIndex]

    }

</script>

<div class="grid">

    
    <div class="journal-heading">
        <ul class="heading-list">
            <li class="heading-list-item">
                <input type="text" placeholder="Post Title" bind:value={postData.title}>
            </li>
            <li class="heading-list-item">
                <button>Save</button>
            </li>
            <li class="heading-list-item">
                <button>Publish</button>
            </li>
        </ul>
    </div>

    <div class="post-editor">

        <div class="rows">

            <!-- Rows -->
            {#each postData.rows as row, ri}

                <div class="row">

                    <div class="row-content">

                        <!-- Columns -->
                        {#each row.columns as column, ci}

                            <div class="column" on:click={() => editing = !editing}>

                                <div class="column-content">
                                    
                                    {#each column.items as item, ii}
    
                                        <ItemText payload={item.payload}/>
    
                                    {/each}
    
                                </div>
    
                                <!-- Column Controls -->
                                <div class="column-options">
                                    <button class="column-option">Add Item</button>
                                    <button class="column-option">Move Left</button>
                                    <button class="column-option">Move Right</button>
                                </div>
    
                            </div>
        
                        {/each}
        
                    </div>
        
                    <!-- Row Controls -->
                    <div class="row-options">
                        <button class="row-option">Add Column</button>
                        <button class="row-option">Move Up</button>
                        <button class="row-option">Move Down</button>
                        <button class="row-option">Delete</button>
                    </div>

                </div>

            {/each}

        </div>

    </div>

    {#if editing}
    <Editor></Editor>
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
    }

    .row {
        background-color: cadetblue;
        padding: 0 1rem;
    }

    .row-content {
        display: flex;
        flex-flow: row wrap;
        gap: 1rem;
    }

    .column {
        background-color: darksalmon;
        flex: 1;
        cursor: pointer;
    }

    .column-content {
        display: flex;
        flex-flow: column nowrap;
        gap: 1rem;
    }

</style>