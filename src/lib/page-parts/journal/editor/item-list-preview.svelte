<script lang='ts'>

    import { editorStore } from './editorStore'
    import ItemDisplay from '$lib/page-parts/journal/viewer/item-display.svelte'

</script>
<!-- Title -->
<h1 class="blog-title">
    {$editorStore.postData.title}
</h1>

{#if $editorStore.postData.pdfUrl}
<!-- Media Controls -->
<div class="media-controls">
    <a href="{$editorStore.postData.pdfUrl}" class="media-download" target="_blank">PDF Download</a>
    <!-- <audio controls class='media-audio'>
        <source src="/blogs/gettingstartedchecklist/Blog2Audio.mp3" type="audio/mpeg">
    </audio> -->
</div>
{/if}

{#each $editorStore.postData.content as item}

    <div class="item">
        <ItemDisplay item={item}/>
    </div>

{/each}

<style>

    .blog-title {
        text-align: center;
        margin: 1rem 0;
    }
    
    .media-controls {
        border-top: thin solid var(--light-grey);
        border-bottom: thin solid var(--light-grey);
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        padding: .5rem 0;
    }

    .media-download:hover {
        color: var(--teal)
    }

    .item {
        position: relative;
    }

</style>