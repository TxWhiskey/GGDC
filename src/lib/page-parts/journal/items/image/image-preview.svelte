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
    <img src="https://firebasestorage.googleapis.com/v0/b/georgia-grace-design-collab.appspot.com/o/Site%20Docs%2Fno-image.jpg?alt=media&token=79221f56-67e2-4a83-a67f-f4f277a4c457" alt="Unavailable" style="max-height: 500px; max-width: 500px">
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