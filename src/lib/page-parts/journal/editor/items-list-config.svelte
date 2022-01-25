<script lang='ts'>

    import { editorStore } from './editorStore'
    import ItemEdit from './item-edit.svelte';
    import ItemListControls from './item-list-controls.svelte';

</script>


{#each $editorStore.postData.content as item, index}

    <div class="item">
            
        <ItemEdit 
            item={item}
        />

        <ItemListControls index={index}></ItemListControls>

    </div>


{/each}

<style>
    
    .item {
        position: relative;
    }

</style>