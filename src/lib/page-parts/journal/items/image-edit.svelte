<script lang="ts">

    import type { ImageItemPayload } from "$lib/types/journal";

    export let payload: ImageItemPayload

</script>

{#if payload}

<div class="image-container">
    <img src={payload.imageUrl} alt="Unavailable" style="max-height: {payload.maxHeight}px; max-width: {payload.maxWidth}px">
</div>

{:else}

<div class="image-container">
    <img src="/images/no-image.jpg" alt="Unavailable" style="max-height: 500px; max-width: 500px">
</div>

{/if}

<style>

    .image-container {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
    }

</style>