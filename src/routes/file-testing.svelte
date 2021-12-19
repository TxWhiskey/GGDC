<script context='module' lang="ts">

    interface FolderStructure {
        path: {
            id: string;
            title: string;
        }[];
        folders: {
            id: string;
            title: string;
        }[];
        files: {
            id: string;
            title: string;
            type: string;
        }[];
    }

    const startingPath = []

    export async function load( { page, fetch, session, stuff} ) {

        let requestInit = {
            method: "POST",
            body: JSON.stringify({path: startingPath}),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await fetch( "/api/files", requestInit )

        const folderStructure = await res.json()


        return {
            status: 200,
            props: {
                folderStructure
            }
        }
    }


</script>

<script lang="ts">

    import { app, auth } from '$lib/firebase/firebase'
    import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

    import Spinner from '$lib/page-parts/spinner.svelte'

    // Props

    export let folderStructure: FolderStructure
    
    // Folder Controls

        let showCreateNewFolder = false
        let createNewFolderTitle = null
        let folderLoading = false

        let showUploadFile = false
        let createNewFileTitle = null
        let files
        let fileUploading = false

        // Folder Navigation

            async function returnToRoot() {

                folderStructure.path = []

                folderStructure = folderStructure
                folderLoading = true

                let requestInit = {
                    method: "POST",
                    body: JSON.stringify({path: []}),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }

                const res = await fetch( "/api/files", requestInit )

                folderStructure = await res.json()

                folderLoading = false

            }

            async function goToFolder( index: number ) {

                let pathIds: string[] = folderStructure.path.map( p => p.id )

                pathIds.splice( index + 1 , pathIds.length )

                folderStructure.path.splice( index + 1, folderStructure.path.length)

                folderStructure = folderStructure

                folderLoading = true

                const res = await fetch( '/api/files', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        path: pathIds
                    })
                })

                folderStructure = await res.json()

                selectedFileId = null

                folderLoading = false

            }

            async function handleFolderClick( folderId: string) {

                folderLoading = true

                const pathIds: string[] = [ ...folderStructure.path.map( p => p.id), folderId]

                const res = await fetch( '/api/files', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        path: pathIds
                    })
                })

                folderStructure = await res.json()

                selectedFileId = null

                folderLoading = false

            }

        // Folder Management
        
            async function createNewFolder() {
        
                const pathIds: string[] = folderStructure.path.map( p => p.id )
        
                const res = await fetch( '/api/files/create/folder', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        path: pathIds,
                        title: createNewFolderTitle
                    })
                })
        
                const newFolderData = await res.json()
        
                folderStructure.folders.push(newFolderData)
                folderStructure = folderStructure
        
                createNewFolderTitle = null
                showCreateNewFolder = false
        
            }


    // File Controls
        let selectedFileId = null

        function handleFileClick( fileId: string ) {

            selectedFileId = fileId

        }

        async function uploadFile() {

            fileUploading = true

            const file = files[0]

            const storage = getStorage( app )
            const storageRef = ref( storage, 'Media Library/' + folderStructure.path + file.name )

            const typeAndExtension = (file.type as string).split( "/")
            
            let fileType = typeAndExtension[0] == "image" ? "image" : "document"

            const fileInfo = await uploadBytes( storageRef, files[0])
                .then( async snapshot => {
                    return await getDownloadURL(snapshot.ref)
                }).then( async ( url: string) => {

                    const pathIds: string[] = folderStructure.path.map( p => p.id )

                    const title = createNewFileTitle || file.name;

                    const res = await fetch( '/api/files/create/file', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            path: pathIds,
                            title: title,
                            url: url,
                            type: fileType
                        })
                    })

                    const newFileData = await res.json()

                    folderStructure.files.push(newFileData)
                    folderStructure = folderStructure

                    createNewFileTitle = null
                    showUploadFile = false

                }).then( () => {
                    fileUploading = false
                })
                .catch( (err) => console.log(err))

            files = null
            

        }

    // Deletion

        async function deleteFileOrFolder( targetId: string) {

            console.log(folderStructure);
            console.log(targetId);
            

            const res = await fetch( '/api/files/delete/' + targetId, { method: "DELETE" })

            if ( res.ok ) {

                console.log('Delete Success');

                const body = await res.json()

                if ( body.type == 'File' ) {

                    const fileIndex = folderStructure.files.findIndex( file => file.id == body.targetId)

                    folderStructure.files.splice(fileIndex, 1)

                    folderStructure = folderStructure

                }

                if ( body.type == 'Folder' ) {

                    folderStructure.path.pop()

                    goToFolder( folderStructure.path.length - 1 )

                }
                
            }

        }

</script>

<div class="container">

    <h1>File Testing</h1>
    
    <div class="container-row">
        
        <!-- Folder Controls -->
        <div class="folder-controls">
            <!-- Create Folder -->
            <button on:click={ () => showCreateNewFolder = true} class="folder-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder-plus" viewBox="0 0 16 16">
                    <path d="m.5 3 .04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z"/>
                    <path d="M13.5 10a.5.5 0 0 1 .5.5V12h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V13h-1.5a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z"/>
                </svg>
            </button>
        
            <!-- Delete Folder -->
            <button on:click={ () => deleteFileOrFolder( folderStructure.path[folderStructure.path.length - 1].id)} class="folder-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
            </button>
        
            <!-- Rename Folder -->
            <button class="folder-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                </svg>
            </button>
        </div>
        
        <!-- File Controls -->
        <div class="file-controls">
            {#if !showUploadFile}
            <!-- Upload File -->
            <button on:click={ () => showUploadFile = true} class="folder-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-plus" viewBox="0 0 16 16">
                    <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"/>
                    <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                  </svg>
            </button>
            {:else}
                <button class="new-file-cancel" on:click={ () => {showUploadFile = false; createNewFileTitle = null}}>Cancel</button>
    
                {#if files && files[0]}
                    <!-- Upload -->
                    <button class="newfolder-btn" on:click={uploadFile}>Upload</button>
                    {#if fileUploading}<Spinner/>{/if}
                {/if}

                <!-- File Title -->
                <input type="text" name="new-file-title" id="new-file-title" placeholder="Title" bind:value={createNewFileTitle}>
                <!-- File Selector -->
                <input type="file" name="new-file" id="new-file" bind:files>
    
            {/if}
        </div>


    </div>


    <!-- Breadcrumbs -->
    <ul class="breadcrumbs">
        <li class="crumb" on:click={returnToRoot}>Media Library</li>
        {#each folderStructure.path as crumb, index }
        <li class="crumb" on:click={() => goToFolder( index )}>{crumb.title}</li>
        {/each}
        {#if folderLoading}
        <li class="crumb"><Spinner padding={"0"} height={"1rem"} width={"1rem"}/></li>
        {/if}
    </ul>

    <!-- File Explorer -->
    <ul class="file-explorer">

        {#if !folderStructure.folders.length && !folderStructure.files.length}
        <li class="empty">Empty</li>
        {/if}

        {#if showCreateNewFolder}
        <li class="new-folder">
            
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder" viewBox="0 0 16 16">
                <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"/>
            </svg>

            <input type="text" placeholder="New Folder" bind:value={createNewFolderTitle}>

            <button class="new-folder-btn" on:click={createNewFolder}>Create</button>

            <button class="new-folder-btn" on:click={() => showCreateNewFolder = false}>Cancel</button>

        </li>
        {/if}

        <!-- Folders -->
        {#each folderStructure.folders as folder}
        <li class="folder file-explorer-item"
            on:click={ () => handleFolderClick(folder.id)}>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder" viewBox="0 0 16 16">
                <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"/>
            </svg>
            
            {folder.title}
        
        </li>
        {/each}

        <!-- Files -->
        {#each folderStructure.files as file}
        <li class="file file-explorer-item" 
            class:selected-file="{file.id == selectedFileId}" 
            on:click={() => handleFileClick(file.id)}>

            {#if file.type == "image"}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-image" viewBox="0 0 16 16">
                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z"/>
            </svg>
            {:else if file.type == "document"}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-text" viewBox="0 0 16 16">
                <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
            </svg>
            {/if}
            
            {file.title}
            
        </li>
        {/each}

    </ul>

</div>

<style>

    .container {
        padding: 1rem;
        display: flex;
        flex-flow: column nowrap;
        gap: .5rem;
    }

    .container-row {
        display: flex;
        flex-flow: row wrap;
        gap: .5rem;
        align-items: center;
        /* width: fit-content; */
    }

    .folder-controls {
        background-color: var(--teal);
        padding: .5rem;
        border-radius: 5px;
        display: flex;
        flex-flow: row wrap;
        gap: .5rem;
        align-items: center;
    }

    .file-controls {
        background-color: var(--purple);
        padding: .5rem;
        border-radius: 5px;
        display: flex;
        flex-flow: row wrap;
        gap: .5rem;
        align-items: center;
    }

    button {
        border: none;
        background-color: transparent;
        padding: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .folder-btn {
        color: white;
    }

    .folder-btn svg {
        fill: white;
    }

    .folder-btn:hover svg {
        filter: drop-shadow( 0 0 5px rgba(0, 0, 0, 0.438));
    }

    .breadcrumbs {
        display: flex;
        flex-flow: row wrap;
        gap: .5rem;
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    .crumb {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
    }

    .empty {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        padding: .5rem;
        cursor: default;
    }

    .new-folder {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        gap: .5rem;
        padding: .5rem;
    }

    .crumb {
        cursor: pointer;
    }

    ul.breadcrumbs li+li::before {
        content:"/\00a0";
    }


    .file-explorer {
        display: flex;
        flex-flow: column nowrap;
        border: thin solid black;
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    .file-explorer-item {
        padding: .5rem;
        cursor: pointer;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        gap: .5rem;
    }

    .file-explorer-item:hover {
        background-color: var(--light-grey);
    }

    .selected-file {
        background-color: var(--light-grey);
    }

</style>