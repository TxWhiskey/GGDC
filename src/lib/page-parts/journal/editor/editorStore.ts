import { writable, get } from "svelte/store";

import type { Writable } from 'svelte/store'

import { v4 as uuid } from 'uuid'

import type { JournalPost, Item } from "$lib/types/journal"

import { itemLibrary } from '$lib/page-parts/journal/itemTypes'

interface EditorState {
    postData: JournalPost,
    editing: boolean,
    expandEditor: boolean,
    previewing: boolean
    selected: {
        itemId: string,
        item: Item
    },
    changes: boolean
}

function initStore() {

    const { subscribe, set, update } = writable<EditorState>({
        postData:null, editing: false, selected: null, expandEditor: false, changes: false, previewing: false
    })

    // Store Controls

        function initStore( postData: JournalPost ) {
            set({
                postData,
                editing: false,
                expandEditor: false,
                selected: null,
                changes: false,
                previewing: false
            })
        }

    // Post Controls

    // Item Controls

        function addItem( index:number, itemType: string ) {

            update( s => {

                const itemId = uuid()

                const newItem = {
                    id: itemId,
                    type: itemType,
                    payload: itemLibrary.find( i => i.title == itemType).defaultPayload
                }

                s.postData.content.splice( index, 0, newItem )

                s.changes = true

                /* s.selected = { rowId, columnId, itemId, item: newItem }

                s.editing = true */

                return s

            })

        }

        function deleteItem( itemId: string ) {

            update( s => {

                s.postData.content = s.postData.content.filter( item => item.id !== itemId)

                if ( s.editing && s.selected.itemId == itemId) {
                    s.editing = false
                    s.selected = null
                }

                s.changes = true

                return s

            })


        }

        function selectEditItem( itemId: string ) {
            update( s => {

                let item = s.postData.content.find( i => i.id == itemId)

                //console.log(item.payload);

                s.selected = { itemId, item }
                s.editing = true

                return s
            })
        }

        function cancelEditItem( ) {
            update( s => {
                s.editing = false
                s.selected = null
                return s
            })
        }

        function moveItemUp( itemId: string ) {
        
            update( s => {

                const currentIndex = s.postData.content.findIndex( item => item.id == itemId )
                
                if ( currentIndex <= 0 ) { return s }

                const item = s.postData.content.find( i => i.id == itemId)

                s.postData.content.splice( currentIndex, 1 )
                s.postData.content.splice( currentIndex - 1, 0, item )

                s.changes = true

                return s

            })

        }

        function moveItemDown( itemId: string ) {

            update( s => {

                const currentIndex = s.postData.content.findIndex( item => item.id == itemId )

                if ( currentIndex >= s.postData.content.length - 1 ) { return s }

                const item = s.postData.content.find( i => i.id == itemId)
                
                s.postData.content.splice( currentIndex, 1 )

                s.postData.content.splice( currentIndex + 1, 0,  item)

                s.changes = true

                return s

            })
        }

        function updateItemPayload( itemId: string, payload:any ) {

            update( s => {

                const itemIndex = s.postData.content.findIndex( i => i.id == itemId)

                s.postData.content[itemIndex].payload = payload
                
                s.editing = false
                s.selected = null

                s.changes = true

                return s
            })

        }

        function togglePreview() {
            
            update( s => {

                s.previewing = !s.previewing

                return s

            })
        }

    return {
        set,
        subscribe,
        initStore,
        addItem,
        selectEditItem,
        cancelEditItem,
        moveItemUp,
        moveItemDown,
        updateItemPayload,
        deleteItem,
        togglePreview
    }

}

export const editorStore = initStore()
