<script lang="ts">

    import { onMount } from "svelte";
    import { v4 as uuid } from 'uuid';

    import Spinner from '$lib/page-parts/spinner.svelte'

    let droppedFiles: FileList = null;
    export let stagedFiles: { file: File, uploading: boolean }[] = []
    export let multiple: boolean = false

    let dragover
    
    let isAdvancedUpload = true 

    function isAdvanced() {
            let div = document.createElement('div');
            return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
    };

    onMount( () => {
        isAdvancedUpload = isAdvanced()
    })

    function handleFileSelection( event ) {

        let files: File[] = []

        if ( event.dataTransfer) {
            
            files = Array.from(event.dataTransfer.files) as File[]

        } else if ( event.target.files ) {

            files =  Array.from(event.target.files) as File[]

        }

        files.forEach( f => stagedFiles.push( { file: f, uploading: false} ))

        stagedFiles = stagedFiles

    }

</script>

<div class="dnd-container">

    <div class="dnd" 
        class:dnd-advanced-upload={isAdvancedUpload}
        class:is-dragover={dragover}
        on:drag|preventDefault|stopPropagation
        on:dragstart|preventDefault|stopPropagation
        on:dragend|preventDefault|stopPropagation={ () => dragover = false}
        on:dragover|preventDefault|stopPropagation={ () => dragover = true}
        on:dragenter|preventDefault|stopPropagation={ () => dragover = true}
        on:dragleave|preventDefault|stopPropagation={ () => dragover = false}
        on:drop|preventDefault|stopPropagation={ (e) => {
            dragover = false
            handleFileSelection( e )
        }}>
    
        <div class="dnd-input">
    
            {#if droppedFiles}
    
                <div class="dnd-file-detail">
    
                    {#each droppedFiles as file}
                    <p>{file.name}</p>
                    {/each}
    
                    <button type="button" class="dnd-cancel" on:click={ () => droppedFiles = null }>Cancel</button>
    
                    <label for="more-files" class="dnd-label">
                        <input type="file" class="dnd-file">
                    </label>
                    
                </div>
                
    
            {:else}
    
                <input class="dnd-file" type="file" name="files[]" id="file" 
                    multiple={multiple || null}
                    on:input={ (e) => handleFileSelection( e )}>
    
                <label class="dnd-label" for="file">
                    <!-- <img class="upload-icon" src="/icons/file-earmark-arrow-up-fill.svg" alt="upload icon"> -->
                    {#if multiple}
                        <strong>Choose your files&nbsp;</strong>
                        <span class="dnd-dragndrop" class:dnd-advanced-upload={isAdvancedUpload}>or drag them here.</span>
                    {:else}
                        <strong>Choose a file&nbsp;</strong>
                        <span class="dnd-dragndrop" class:dnd-advanced-upload={isAdvancedUpload}>or drag it here.</span>
                    {/if}
                </label>
    
            {/if}
    
        </div>
    
    </div>

    {#if stagedFiles.length}
        <ul class="staged-files">
            {#each stagedFiles as file, i}
                <li class="staged-file">

                    {#if file.uploading}

                    <Spinner height={"1rem"} width={"1rem"} padding={'0'}/>

                    {:else}
                    
                    <button class="remove-staged-file"
                        type="button"
                        on:click={ () => {stagedFiles.splice( i,1 ); stagedFiles = stagedFiles}}
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </button>
                
                    {/if}
                    {file.file.name}


                </li>
            {/each}
        </ul>
    {/if}

</div>

<style>

    .dnd-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    
    .dnd.dnd-advanced-upload {
        padding: 1rem;
        border: thin dashed var(--grey);
        border-radius: 4px;
    }

    .dnd-dragndrop,
    .dnd-file {
        display: none;
    }

    .dnd-input {
        display: flex;
        justify-content: center;
    }

    .dnd-file-detail {
        display: flex;
        flex-direction: column;
        gap: .25rem;
        align-items: flex-start;
        width: 100%;
    }

    .dnd-cancel {
        border: none;
        color: white;
        background-color: var(--purple);
        border-radius: 4px;
        padding: .5rem;
        font-weight: 400;
        transition: ease-in-out 200ms;
        margin-top: 1rem;
    }

    .dnd-cancel:hover {
        background-color: var(--light-grey);
        color: var(--grey);
        box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.3);
    }

    .dnd-label {
        display: flex;
        flex-direction: row;
    }

    .dnd-label strong {
        cursor: pointer;
    }

    .dnd-label strong:hover {
        color: var(--purple)
    }

    .dnd.is-dragover {
        border: thin dashed var(--purple);
        background-color: rgb(235, 235, 235);
    }

    .dnd-dragndrop.dnd-advanced-upload {
        display: inline
    }

    .staged-files {
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }

    .staged-file {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 1rem;
    }

    .remove-staged-file {
        border: thin solid var(--light-grey);
        background-color: white;
        border-radius: 4px;
        display: flex;
        align-items: center;
        flex-direction: row;
        padding: .1rem;
    }

    .remove-staged-file:hover {
        background-color: var(--purple);
        box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.1);
    }

    .remove-staged-file:hover svg {
        fill: white;
    }

    @media (max-width: 450px) {
            
        .dnd-label .dnd-dragndrop {
            display: none;
        }

    }

</style>