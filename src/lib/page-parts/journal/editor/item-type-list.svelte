<script>

    import { createEventDispatcher } from 'svelte'

    import { itemLibrary } from '$lib/page-parts/journal/itemTypes'

    const dispatch = createEventDispatcher()

    const itemTypes = itemLibrary.map( i => i.title )

</script>


<div class="item-types">
    
    {#each itemTypes as itemType}
    
        <button on:click={ () => dispatch("selection", itemType)}>{itemType}</button>

    {/each}

    <button on:click={ () => dispatch("cancel")}>Cancel</button>

</div>

<style>

    .item-types {
        display: flex;
        flex-flow: column nowrap;
        gap: .5rem;
        padding: 1rem;;
    }

    button {
        background-color: var(--teal);
        color: white;
        border: none;
        padding: .5rem;
    }

</style>