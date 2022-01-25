import { writable } from "svelte/store";
import type { Writable, Subscriber, Unsubscriber } from "svelte/store";

import type { FolderStructure } from "$lib/types/files";
import type { FileData } from "./file-explorer-types";

import { app, auth } from '$lib/firebase/firebase'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

export interface FileExplorerState {
    // View Settings
    path: any[];
    folders: any[];
    files: FileData[];
    viewLoaded: boolean;
    // Folder Settings
    showCreateNewFolder: boolean;
    newFolderName: string;
    renamingFolder: boolean;
    renameFolderTitle: string;
    folderLoading: boolean;
    // File Settings
    selectedFile: FileData;
    stagedFiles: any;
    showFileUpload: boolean;
    uploadingFile: boolean;
    newFileTitle: string;
    renamingFile: boolean;
    renameFileTitle: string;
}

export interface FileExplorerStateControler<FileExplorerState> extends Writable<FileExplorerState> {
    // Store
    subscribe: ( this: void, run: Subscriber<FileExplorerState> ) => Unsubscriber;
    // View
    initView: (path: string[]) => Promise<void>;
    // Dual Purpose
    deleteFileOrFolder: ( targetId: string ) => Promise<void>;
    renameFileOrFolder: ( targetId: string, newName: string ) => Promise<void>;
    // Folder
    loadFolder: (path: string[]) => Promise<void>;
    createNewFolder: ( path: string[], title: string) => Promise<void>;
    // File
    uploadFile: ( file: File ) => Promise<void>;
}

export function createFileExplorerViewState( ): FileExplorerStateControler<FileExplorerState> {

    // State Instantiation

        const { set, subscribe, update } = writable({

            // View Settings
            path: [],
            folders: [],
            files: [],
            viewLoaded: false,
            
            // Folder Settings
            showCreateNewFolder: false,
            newFolderName: null,
            renamingFolder: false,
            renameFolderTitle: null,
            folderLoading: false,

            // File Settings
            selectedFile: null,
            stagedFiles: null,
            showFileUpload: false,
            uploadingFile: false,
            newFileTitle: null,
            renamingFile: false,
            renameFileTitle: null

        })

        async function initView( path: string[] ) {
            
            let requestInit = {
                method: "POST",
                body: JSON.stringify({path}),
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            const res = await fetch( "/api/files", requestInit )

            const folderStructure = await res.json() as FolderStructure

            update( v => {
                v.files = folderStructure.files
                v.folders = folderStructure.folders
                v.path = folderStructure.path

                v.viewLoaded = true

                return v
            })

        }

    // Dual Folder/File Controls

        async function deleteFileOrFolder( targetId: string ) {

            const res = await fetch( '/api/files/delete/' + targetId, { method: "DELETE" })

            if ( res.ok ) {

                const body = await res.json()

                if ( body.type == 'File' ) {

                    update( v => {

                        const fileIndex = v.files.findIndex( file => file.id == body.targetId )

                        v.files.splice( fileIndex, 1)

                        v.selectedFile = null

                        v.renameFileTitle = false
                        v.renameFileTitle = null

                        return v

                    })

                }

                if ( body.type == 'Folder' ) {

                    // Might need more Folder logic here

                }
                
            }


        }

        async function renameFileOrFolder( targetId: string, newName: string ) {

            const res = await fetch( `/api/files/rename/${targetId}/${newName}`, { method: "PATCH" })

            if ( res.ok ) {

                const body = await res.json()

                if ( body.type == 'File' ) {

                    update( v => {

                        const fileIndex = v.files.findIndex( file => file.id == body.targetId)

                        v.files[fileIndex].title = body.title

                        v.renameFileTitle = null

                        v.renamingFile = false

                        return v

                    })

                }

                if ( body.type == 'Folder' ) {

                    update( v => {

                        v.path[v.path.length - 1].title = body.title

                        v.renameFolderTitle = null

                        v.renamingFolder = false

                        return v

                    })

                }
                
            }

        }

        async function createNewFolder( path: string[], title: string ) {

            const res = await fetch( '/api/files/create/folder', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    path: path,
                    title: title
                })
            })
    
            const newFolderData = await res.json()

            update( v => {

                v.folders.push(newFolderData)
                v.showCreateNewFolder = false
                v.newFolderName = null

                return v

            })
    
        }

    // Folder Controls

        function setFolderLoading( state: boolean ) {
            update( v => {
                v.folderLoading = state
                return v
            })
        }

        async function loadFolder( path: string[] ) {

            setFolderLoading( true )

            const res = await fetch( '/api/files', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    path: path
                })
            })

            const folderStructure = await res.json()

            update( v => {

                v.selectedFile = null
                v.folderLoading = false
                v.showFileUpload = false
                v.showCreateNewFolder = false
                v.renameFolderTitle = null
                v.renamingFolder = false

                v.path = folderStructure.path
                v.files = folderStructure.files,
                v.folders = folderStructure.folders

                return v

            })

        }

    // File Controls

        async function uploadFile( file: File ) {

            let path: string[]
            let newFileTitle: string
            
            update( v => {
                v.uploadingFile = true

                path = v.path.map( p => p.id )
                newFileTitle = v.renameFileTitle || v.newFileTitle

                return v
            })

            const storage = getStorage( app )
            const storageRef = ref( storage, 'Media Library/' + file.name )

            const typeAndExtension = (file.type as string).split( "/")
            
            let fileType = typeAndExtension[0] == "image" ? "image" : "document"

            const fileInfo = await uploadBytes( storageRef, file)
                .then( async snapshot => {
                    return await getDownloadURL(snapshot.ref)
                }).then( async ( url: string) => {

                    const res = await fetch( '/api/files/create/file', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            path: path,
                            title: newFileTitle || file.name,
                            url: url,
                            type: fileType
                        })
                    })

                    const newFileData = await res.json()

                    update( v => {

                        v.files.push(newFileData)

                        v.selectedFile = newFileData

                        v.stagedFiles = null

                        v.showFileUpload = false
                        v.uploadingFile = false

                        return v

                    })

                })
                .catch( (err) => console.log(err))

        }

    return {
        // Store
        subscribe,
        set,
        update,
        // Dual Purpose
        deleteFileOrFolder,
        renameFileOrFolder,
        // View
        initView,
        // Folder
        loadFolder,
        createNewFolder,
        // File
        uploadFile
    }

}