<script context='module' lang='ts'>

    import type { JournalPost } from '$lib/types/journal';

    import { getDefaultPost } from '$lib/default-post/default-post'

    export async function load ( { params, fetch}) {

        let post: JournalPost

        const postId = params.id

        if ( postId == 'new' ) {
            
            post = getDefaultPost()

        } else {

            const res = await fetch( `/api/journals/${postId}`)

            post = await res.json()

        }

        return {
            props: {
                postData: post
            }
        }

    }

</script>

<script lang='ts'>

    import ItemConfig from '$lib/page-parts/journal/editor/item-config.svelte';

    import { editorStore } from '$lib/page-parts/journal/editor/editorStore'

    export let postData: JournalPost

    import ItemListConfig from '$lib/page-parts/journal/editor/items-list-config.svelte'
    import ItemListPreview from '$lib/page-parts/journal/editor/item-list-preview.svelte';
    import ItemListControls from '$lib/page-parts/journal/editor/item-list-controls.svelte';
    import PostControls from '$lib/page-parts/journal/editor/post-controls.svelte'

    editorStore.initStore( postData )

</script>

<div class="grid">

    <div class="journal-heading">
        
        <PostControls/>

    </div>

    <div class="items-container">

        <div class="items" class:items-preview="{$editorStore.previewing}">

            {#if $editorStore.previewing}

            <ItemListPreview/>

            {:else}

            <ItemListConfig></ItemListConfig>

            {/if}

            {#if !$editorStore.postData.content.length}

                <ItemListControls/>

            {/if}
    
        </div>

    </div>

    {#if $editorStore.editing}
        <div class="post-editor">

                <ItemConfig/>

        </div>
    {/if}

</div>

<style>

    .grid {
        display: grid;
        height: 100%;
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr auto;
        overflow: hidden;
    }

    .journal-heading {
        box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.356);
    }

    .post-editor {
        display: flex;
        flex-flow: column nowrap;
        gap: 1rem;
        overflow: auto;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.445);
    }

    .items-container {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        height: 100%;
        overflow: auto;
    }

    .items {
        display: flex;
        flex-flow: column nowrap;
        padding: 1rem 0;
        width: 100%;
        max-width: 800px;
    }

    .items-preview {
        gap: 1rem;
    }

</style>