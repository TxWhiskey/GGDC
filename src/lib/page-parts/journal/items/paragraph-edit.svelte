<script lang="ts">

    export let payload = 'Insert your text'

</script>

{#if payload}

<p>{payload}</p>

{:else}

<p class="empty">- Empty -</p>

{/if}

<style>

    p {
        white-space: pre-wrap;
    }

    p:hover {
        color: black;
    }

    .empty {
        text-align: center;
    }

</style>