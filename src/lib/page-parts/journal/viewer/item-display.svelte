<script lang='ts'>

    import { itemLibrary} from '$lib/page-parts/journal/itemTypes'

    import type { Item } from '$lib/types/journal';

    export let item: Item

    $: component = itemLibrary.find( o => o.title == item.type ).viewComponent

</script>

<div class="item">
    <svelte:component this={component} payload={item.payload}/>
</div>

<style>

</style>