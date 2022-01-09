<script lang='ts'>

import { onMount } from "svelte";

import { editorStore } from "$lib/page-parts/journal/editor/editorStore";

onMount( () => {

    document.getElementById('addItemFocus').focus()

})

</script>

<input id="addItemFocus" type='text' bind:value={$editorStore.selected.item.payload}/>

<style>
    input {
        width: 100%;
    }
</style>