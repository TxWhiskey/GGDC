<script lang="ts">

    import type { PayloadImage } from "./image-payload";

    export let payload: PayloadImage

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
        flex: 1;
        flex-flow: row nowrap;
        justify-content: center;
    }

</style>