<script lang="ts">
    
    import { getContext } from "svelte";
    import type { Writable } from "svelte/store";

    import type { FileExplorerView } from "./file-explorer-types";
    import Spinner from "$lib/page-parts/spinner.svelte";

    let view: Writable<FileExplorerView> = getContext("View")

</script>

{#if view && $view.viewLoaded}

    <ul>
        {#each $view.folders as folder }
            <li>{folder.title}</li>
        {/each}
        {#each $view.files as file}
            <li>{file.title}</li>
        {/each}
    </ul>

{:else}

    <Spinner padding="0"/>

{/if}

<style>

    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        border: thin solid var(--grey);
        border-radius: 5px;
        overflow: hidden;
    }

    li {
        cursor: pointer;
        padding: .5rem;
    }

    li:hover {
        background-color: var(--light-grey);
    }

</style>