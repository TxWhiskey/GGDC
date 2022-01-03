<script lang="ts">

    export let payload = 'Insert your text'

</script>

<div class="heading-container">
    
    {#if payload}
    
    <h2>{payload}</h2>
    
    {:else}
    
    <h2 class="empty">- Empty -</h2>
    
    {/if}

</div>


<style>

    .heading-container {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        align-content: center;
    }

    h2 {
        text-align: center;
        max-width: 500px;
        font-weight: 400;
    }

    h2:hover {
        color: black;
    }

    .empty {
        text-align: center;
    }

</style>