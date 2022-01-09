<script lang='ts'>

    import { editorStore } from '$lib/page-parts/journal/editor/editorStore'
    import type { PayloadButton } from './button-payload';

    let payload: PayloadButton = {
        color: 'Teal',
        linkTo: '/',
        text: 'Call to Action'
    }

    let selected = null

    let buttonStyles = [ 'Teal', 'Purple', 'Grey']
    let selectedButtonStyle = 'Teal'

    editorStore.subscribe( s => {

        if ( (s.selected?.item.id !== selected?.item.id) && (s.selected?.item.type == 'Button') ) {

            selected = s.selected
            payload = {...s.selected.item.payload}

        }

    })

</script>

<div class="container">
    
    <div class="control">
        <p>Button Text</p>
        <input type="text" id="text-input" bind:value={payload.text}>
    </div>
    
    <div class="control">
        <p>Link</p>
        <input type="text" id="text-input" bind:value={payload.linkTo}>
    </div>
    
    <div class="control">
        <p>Style</p>
        <select name="Button Types" id="button-selector" bind:value={selectedButtonStyle}>
            {#each buttonStyles as style}
            <option value={style}>{style}</option>
            {/each}
        </select>
    </div>
    
    <a href={payload.linkTo} target="_blank">Test Link</a>

    <button on:click={ () => editorStore.updateItemPayload($editorStore.selected.rowId, $editorStore.selected.columnId, $editorStore.selected.itemId, payload)}>Set</button>
    <button on:click={editorStore.cancelEditItem}>Cancel</button>


</div>

<style>

    .container {
        display: flex;
        gap: 1rem;
    }

    button, a {
        font-weight: 400;
        border: none;
        display: flex;
        align-self: center;
        padding: .5rem;
        background-color: var(--light-grey);
        border-radius: 4px;
    }

</style>
