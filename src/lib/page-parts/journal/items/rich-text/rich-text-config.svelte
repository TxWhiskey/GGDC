<script lang='ts'>

    import { derived } from "svelte/store";

    import { editorStore } from "$lib/page-parts/journal/editor/editorStore";

    import Editor from '@tinymce/tinymce-svelte';

    let editorConfig = {
        plugins: 'lists link',
        toolbar: 'undo redo | formatselect | ' +
            'bold italic forecolor backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | link',
        menubar: false,
        height: '100%',
        content_style: "p {margin: 1rem}",
        branding: false
    }

    let smallHeight = '300px'
    let largeHeight = '600px'
    let expanded = false

    let height = smallHeight

    let selected = null
    let text = ''

    editorStore.subscribe( s => {

        if ( (selected?.item.id !== s.selected?.item.id) && (s.selected?.item.type == "Rich Text") ) {
            selected = s.selected
            text = s.selected.item.payload.content
        }

    })

    function toggleHeight() {
        if ( expanded ) {
            height = smallHeight
            expanded = false
        } else {
            height = largeHeight
            expanded = true
        }
    }

</script>

<div class="controls">

    <button on:click={ () => editorStore.updateItemPayload($editorStore.selected.rowId, $editorStore.selected.columnId, $editorStore.selected.itemId, {content: text})}>Set</button>
    <button on:click={editorStore.cancelEditItem}>Cancel</button>
    <button on:click={toggleHeight}>Expand</button>

</div>

{#if $editorStore.selected}

<div style="height: {height};">
    <Editor
        bind:value={text}
        scriptSrc="/node_modules/tinymce/tinymce.min.js"
        conf={editorConfig}
        cssClass={"testtest"}
    />
</div>

{/if}

<style>

    :global(.testtest) {
        height: 100%;
    }

    .controls {
        display: flex;
        flex-flow: row wrap;
        gap: 1rem;

    }

    button {
        border: none;
        color: white;
        background-color: var(--teal);
        padding: .5rem;
        font-weight: 400;
    }

    button:hover {
        background-color: var(--light-grey);
        color: var(--grey);
    }

</style>