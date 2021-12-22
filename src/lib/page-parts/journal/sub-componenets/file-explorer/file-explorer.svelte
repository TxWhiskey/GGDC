<script lang="ts">

    import { setContext } from "svelte";
    import { writable } from "svelte/store";
    import type { Writable } from "svelte/store";

    import type { FolderStructure } from "$lib/types/files";
    import type { FileExplorerView } from "./file-explorer-types";

    import FileList from '$lib/page-parts/journal/sub-componenets/file-explorer/file-list.svelte'
    import FolderControls from '$lib/page-parts/journal/sub-componenets/file-explorer/folder-controls.svelte'

    const view: Writable<FileExplorerView> = writable({
        path: [],
        folders: [],
        files: [],
        viewLoaded: false,
        showCreateNewFolder: false,
        renamingFolder: false,
        selectedFileId: null,
        folderLoading: false
    })

    setContext("View", view)

    async function getView( path: string[] ) {
        
        let requestInit = {
            method: "POST",
            body: JSON.stringify({path}),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await fetch( "/api/files", requestInit )

        const folderStructure = await res.json() as FolderStructure

        view.update( v => {
            v.files = folderStructure.files
            v.folders = folderStructure.folders
            v.path = folderStructure.path

            v.viewLoaded = true

            return v
        })

    }

    getView([])

</script>

<div class="controls-row">
    <div class="folder-controls shadow controls-row">
        <FolderControls/>
    </div>
</div>

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

    .shadow {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
    }

</style>