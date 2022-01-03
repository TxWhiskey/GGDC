<script lang='ts'>

    import { editorStore } from "./editorStore";

    import { itemLibrary } from "$lib/page-parts/journal/itemTypes";
    import ItemControls from "./item-controls.svelte";

    $: component = itemLibrary.find( o => o.title == $editorStore.selected.item.type).configComponent

</script>

<div class="editor">
    
    <div class="row">
        <h3 class="title">Item Config</h3>
        <ItemControls rowId={$editorStore.selected.rowId} columnId={$editorStore.selected.columnId} itemId={$editorStore.selected.itemId}></ItemControls>
    </div>

    <svelte:component this={component}/>

</div>

<style>

    .editor {
        border-top: thin solid var(--teal);
        padding: 1rem;
        display: flex;
        flex-flow: column nowrap;
        gap: .5rem;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
    }

    .row {
        display: flex; 
        flex-flow: row wrap;
        gap: 1rem;
        align-items: center;
    }

    .title {
        margin-right: auto;
    }

</style>