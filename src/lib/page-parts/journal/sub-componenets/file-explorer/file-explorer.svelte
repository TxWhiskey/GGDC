<script lang="ts">

    import { setContext } from "svelte";
    import { createEventDispatcher } from "svelte";

    import Breadcrumbs from "./breadcrumbs.svelte";
    import FolderControls from '$lib/page-parts/journal/sub-componenets/file-explorer/folder-controls.svelte'
    import FileControls from "./file-controls.svelte";
    import FileList from '$lib/page-parts/journal/sub-componenets/file-explorer/file-list.svelte'

    import { createFileExplorerViewState } from './file-explorer-state'
    import type { FileData } from "./file-explorer-types";

    const view = createFileExplorerViewState()

    setContext("View", view)

    view.initView( [] )

    const dispatch = createEventDispatcher()

    function setFile() {

        const targetFile: FileData = $view.selectedFile
        dispatch( "setFile", {
            targetFile
        } )
    }


</script>

<div class="controls-row">
    <div class="folder-controls shadow controls-row">
        <FolderControls/>
    </div>
    <div class="file-controls shadow controls-row">
        <FileControls/>
    </div>
    {#if $view.selectedFile}
    <div class="set-file shadow controls-row" on:click={setFile}>
        <button>Set</button>
    </div>
    {/if}
</div>

<Breadcrumbs/>

<FileList/>

<style>

    .controls-row {
        display: flex;
        flex-flow: row nowrap;
        gap: .5rem;
        align-items: center;
    }

    .folder-controls {
        background-color: var(--teal);
        border-radius: 5px;
        padding: .5rem;
    }

    .file-controls {
        background-color: var(--purple);
        border-radius: 5px;
        padding: .5rem;
    }

    .shadow {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
    }

    .set-file {
        background-color: var(--light-grey);
        border-radius: 5px;
        padding: .5rem;
        border: solid thin var(--teal);
        cursor: pointer;
    }

    .set-file:hover {
        background-color: var(--teal);
    }

    button {
        border: none;
        color: var(--teal);
        font-weight: 400;
        padding: 0;
        background-color: transparent;
        display: flex;
        align-items: center;
    }

    .set-file:hover button {
        color: white;
    }

</style>