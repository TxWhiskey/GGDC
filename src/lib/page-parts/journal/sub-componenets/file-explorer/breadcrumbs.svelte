<script lang="ts">

    import Spinner from "$lib/page-parts/spinner.svelte";
import { getContext } from "svelte";
    import type { FileExplorerState, FileExplorerStateControler } from "./file-explorer-state";

    const view: FileExplorerStateControler<FileExplorerState> = getContext( "View" )
        
    async function goToFolder( folderId: string ) {

        const newPath = $view.path.map( i => i.id )

        const targetIndex = newPath.indexOf( folderId )

        newPath.splice( targetIndex + 1 , newPath.length )

        view.loadFolder( newPath )

    }


</script>

<ol>

    <li on:click={ () => goToFolder( "" )}>Media Library</li>

    {#each $view.path as path }

    <li on:click={ () => goToFolder( path.id )}>
        {path.title}
    </li>

    {/each}

    {#if $view.folderLoading}
    <li>
       <Spinner width="1rem" height="1rem" padding="0"/>
    </li>
    {/if}

</ol>

<style>

    ol {
        display: flex;
        flex-flow: row wrap;
        gap: .5rem;
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    li {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        cursor: pointer;
    }

    ol li+li::before {
        content:"/\00a0";
    }

</style>