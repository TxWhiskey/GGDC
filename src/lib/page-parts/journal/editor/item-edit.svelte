<script lang='ts'>

    import { editorStore } from './editorStore';

    import { itemLibrary} from '$lib/page-parts/journal/itemTypes'

    import type { Item } from '$lib/types/journal';

    export let rowId: string
    export let columnId: string
    export let item: Item

    $: component = itemLibrary.find( o => o.title == item.type ).previewComponent

    let config

</script>

<div class="item" on:click={ () => editorStore.selectEditItem( rowId, columnId, item.id )}>
    <svelte:component this={component} bind:this={config} payload={item.payload}/>
</div>

<style>

    .item {
        position: relative;
        cursor: pointer;
    }

    .item:hover {
        background-color: rgb(237, 237, 237);
    }

</style>