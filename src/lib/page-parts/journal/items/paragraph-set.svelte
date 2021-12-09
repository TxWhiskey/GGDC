<script lang='ts'>

    import { onMount } from "svelte";

    import { editorStore } from "$lib/page-parts/journal/editor/editorStore";

    onMount( () => {

        document.getElementById('addItemFocus').focus()
    })


</script>

<textarea id="addItemFocus" bind:value={$editorStore.selected.item.payload}></textarea>

<style>
    textarea {
        width: 100%;
        height: 200px;
    }
</style>