<script lang='ts'>

    import type { Column } from '$lib/types/journal';
    import { editorStore } from '$lib/page-parts/journal/editor/editorStore'
    import ItemEdit from './item-edit.svelte';
    import ItemTypeList from './item-type-list.svelte';

    export let rowId: string
    let rowIndex = $editorStore.postData.content.findIndex( row => row.id == rowId )

    export let columnId: string
    export let column: Column

    let showAddItemTypes = false

    let columnIndex = $editorStore.postData.content[rowIndex].columns.findIndex( col => col.id === columnId)

</script>

<div class="column">

    
    <div class="column-content">

        {#if column.items.length}
        
            {#each column.items as item, ii}

                <ItemEdit 
                    item={item}
                    rowId={rowId}
                    columnId={columnId}
                />

            {/each}

        {:else if !showAddItemTypes}

            <button class="empty-column" on:click={() => showAddItemTypes = !showAddItemTypes}>Add Item</button>

        {/if}

        {#if showAddItemTypes}

            <ItemTypeList
                on:cancel={ () => showAddItemTypes = false}
                on:selection={ (e) => {editorStore.addItem( rowId, columnId, e.detail ); showAddItemTypes = false}}
            />

        {/if}

    </div>

    <!-- Column Controls -->
    <div class="column-options">
        <div class="column-controls">
            <span class="col-title">Column:</span>
            <!-- Add Item to Column -->
            <button class="column-option" on:click={() => showAddItemTypes = !showAddItemTypes} title="Add Item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
            </button>
            <!-- Add Paragraph to Column -->
            <button class="column-option" on:click={() => editorStore.addItem(rowId, columnId, 'Paragraph')} title="Add Paragraph">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-text-paragraph" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </button>
            <!-- Delete Column -->
            <button class="column-option" on:click={() => editorStore.deleteColumn( rowIndex, column.id )} title="Delete Column">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </button>
            <!-- Move Column Left -->
            <button class="column-option" on:click={() => editorStore.moveColumnLeft( rowIndex, columnIndex)} title="Move Column Left">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                </svg>
            </button>
            <!-- Move Column Right -->
            <button class="column-option" on:click={() => editorStore.moveColumnRight( rowIndex, columnIndex)} title="Move Column Right">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                    </svg>
            </button>
        </div>
    </div>

</div>

<style>
    
    .column {
        /* background-color: darksalmon; */
        flex: 1;
        position: relative;
        min-height: 3rem;;
    }

    .column:hover {
        background-color: rgb(250, 250, 250);
    }

    .column-content {
        display: flex;
        flex-flow: column nowrap;
        gap: 1rem;
    }

    .col-title {
        color: white;
    }

    .empty-column {
        width: 100%;
        border: none;
        background-color: transparent;
        color: var(--grey);
        font-weight: 400;
    }

    .column-options {
        position: absolute;
        left: .5rem;
        bottom: .5rem;
        padding: .25rem;
        background-color: var(--purple);
        border-radius: 3px;
        display: none;
        box-shadow: 0 0 2px rgba(28, 28, 28, 0.6);
        flex-flow: column nowrap;
        align-items: center;
        gap: .5rem;
    }

    .column:hover .column-options {
        display: flex;
    }

    .column-controls {
        display: flex;
        flex-flow: row nowrap;
        gap: .5rem;
    }

    .column-option {
        padding: 0;
    }

    .itemTypeOptions {
        display: flex;
        flex-flow: column nowrap;
        gap: .5rem;
        position: absolute;
        z-index: 10;
        padding: .5rem;
        background-color: var(--light-grey);
        border-radius: 3px;
        box-shadow: 0 0 2px rgba(28, 28, 28, 0.6);
    }

    .item-type-button {
        width: 100%;
        border: none;
        color: white;
        background-color: var(--purple);
        padding: .5rem;
    }

</style>