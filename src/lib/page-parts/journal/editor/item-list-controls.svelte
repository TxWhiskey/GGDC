<script lang='ts'>

    import {editorStore} from './editorStore'

    export let index:number = 1

</script>

<div class="add-item-controls">
    <div class="hb"></div>
    <!-- Add Text Item -->
    <button class="add-item-btn" on:click={ () => editorStore.addItem( index + 1, 'Rich Text' )}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-justify-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
        </svg>
    </button>
    <!-- Add Image -->
    <button class="add-item-btn" on:click={ () => editorStore.addItem( index + 1, 'Image' )}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-image-fill" viewBox="0 0 16 16">
            <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"/>
        </svg>
    </button>
    <!-- Add CTA -->
    <button class="add-item-btn" on:click={ () => editorStore.addItem( index + 1, 'Button' )}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-up-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z"/>
            <path fill-rule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z"/>
        </svg>
    </button>
    <div class="hb"></div>
</div>

<style>
    
    .add-item-controls {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        gap: 1rem;
    }

    .add-item-btn {
        background-color: var(--teal);
        border: none;
        padding: .25rem;
        border-radius: 50%;
        opacity: 0%;
        margin: 0;
        transition: 300ms ease-in-out;
        display: flex;
        align-items: center;
    }

    .add-item-controls:hover .add-item-btn{
        margin: .5rem 0;
        opacity: 100%;
    }

    .add-item-btn:hover {
        background-color: var(--light-grey);
    }

    .add-item-btn svg {
        fill: white;
    }

    .add-item-btn:hover svg {
        fill: var(--teal);
    }

    .hb {
        background-color: var(--teal);
        height: 1px;
        width: 100%;
        opacity: 0%;
        transition: 300ms ease-in-out;
    }

    .add-item-controls:hover .hb {
        opacity: 100%;
    }

</style>