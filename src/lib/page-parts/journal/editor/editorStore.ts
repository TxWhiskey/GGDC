import { writable, get } from "svelte/store";

import type { Writable } from 'svelte/store'

import { v4 as uuid } from 'uuid'

import type { JournalPost, Item } from "$lib/types/journal"

import { itemLibrary } from '$lib/page-parts/journal/itemTypes'

interface EditorState {
    postData: JournalPost,
    editing: boolean,
    expandEditor: boolean,
    selected: {
        rowId: string,
        columnId: string,
        itemId: string,
        item: Item
    }
}

function initStore() {

    const { subscribe, set, update } = writable<EditorState>({postData:null, editing: false, selected: null, expandEditor: false})

    // Store Controls

        function initStore( postData: JournalPost ) {
            set({
                postData,
                editing: false,
                expandEditor: false,
                selected: null
            })
        }

    // Post Controls

    // Row Controls

        function addRow() {

            update( s => {
                
                s.postData.content.push({
                    id: uuid(),
                    columns: [{
                        id: uuid(),
                        items: []
                    }]
                })

                return s

            })
        }

        function deleteRow( rowId: string ) {

            update( s => {

                const rows = s.postData.content.filter( r => r.id != rowId)

                s.postData.content = rows
                s.editing = false

                return s

            })

        }

        function moveRowUp( rowId: string ) {

            update( s => {

                let rows = s.postData.content

                const currentIndex = rows.findIndex( item => item.id == rowId)

                if ( currentIndex <= 0 ) { return s }

                const currentItem = rows[currentIndex]
                const previousItem = rows[currentIndex - 1]

                rows[currentIndex] = previousItem
                rows[currentIndex - 1] = currentItem


                s.postData.content = rows

                return s

            })
        }

        function moveRowDown( rowId: string ) {

            update( s => {

                let rows = s.postData.content

                const currentIndex = rows.findIndex( row => row.id == rowId)

                if ( currentIndex >= rows.length - 1 ) { return s }

                const currentItem = rows[currentIndex]
                const nextItem = rows[currentIndex + 1]

                rows[currentIndex] = nextItem
                rows[currentIndex + 1] = currentItem

                s.postData.content = rows

                return s

            })
        }
    
    // Column Controls

        function addColumn( rowId: string ) {

            update( s => {

                const rowIndex: number = s.postData.content.findIndex( r => r.id == rowId )
                s.postData.content[rowIndex].columns.push({
                    id: uuid(),
                    items: []
                })

                return s
            })
        }

        function deleteColumn( rowIndex: number, columnId: string ) {

            update( s => {

                const filteredColumns = s.postData.content[rowIndex].columns.filter( c => c.id != columnId )

                s.postData.content[rowIndex].columns = filteredColumns

                s.editing = false

                return s

            })
        }

        function moveColumnLeft( rowIndex: number, columnIndex: number ) {

            if ( columnIndex > 0 ) {

                update( d => {

                    let columns = d.postData.content[rowIndex].columns
    
                    const target = columns[columnIndex]
                    const previous = columns[columnIndex - 1]
    
                    columns[columnIndex - 1] = target
                    columns[columnIndex] = previous
    
                    d.postData.content[rowIndex].columns = columns

                    return d

                })

            }

        }

        function moveColumnRight( rowIndex: number, columnIndex: number ) {

            update( d => {
                
                if ( columnIndex < d.postData.content[rowIndex].columns.length - 1 ) {
    
                    let columns = [...d.postData.content[rowIndex].columns]
    
                    const target = columns[columnIndex]
                    const next = columns[columnIndex + 1]
    
                    columns[columnIndex + 1] = target
                    columns[columnIndex] = next
    
                    d.postData.content[rowIndex].columns = columns
    
                    return d
    
                }

                return d

            })
            

        }

    // Item Controls

        function addItem( rowId: string, columnId: string, itemType: string ) {

            update( s => {

                const rowIndex = s.postData.content.findIndex( row => row.id == rowId)
                const columnIndex = s.postData.content[rowIndex].columns.findIndex( c => c.id == columnId )

                const itemId = uuid()

                const newItem = {
                    id: itemId,
                    type: itemType,
                    payload: itemLibrary.find( i => i.title == itemType).defaultPayload
                }

                s.postData.content[rowIndex].columns[columnIndex].items.push( newItem )

                s.selected = { rowId, columnId, itemId, item: newItem }

                s.editing = true

                return s

            })

            const focusTarget = document.getElementById('addItemFocus')

            if (focusTarget) {
                focusTarget.focus()
            }

        }

        function deleteItem( rowId: string, columnId: string, itemId: string ) {

            update( s => {
                
                const rowIndex = s.postData.content.findIndex( row => row.id == rowId)
                const columnIndex = s.postData.content[rowIndex].columns.findIndex( col => col.id == columnId )

                let itemList = s.postData.content[rowIndex].columns[columnIndex].items.filter( item => item.id != itemId )

                s.postData.content[rowIndex].columns[columnIndex].items = itemList

                if ( s.editing && s.selected.itemId == itemId) {
                    s.editing = false
                    s.selected = null
                }

                return s

            })


        }

        function selectEditItem( rowId: string, columnId: string, itemId: string ) {
            update( s => {

                let item = s.postData.content.find( r => r.id == rowId).columns.find( c => c.id == columnId).items.find( i => i.id == itemId)

                s.selected = { rowId, columnId, itemId, item }
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

        function moveItemUp( rowId: string, columnId: string, itemId: string ) {
        
            update( s => {

                const rowIndex = s.postData.content.findIndex( row => row.id == rowId)
                const columnIndex = s.postData.content[rowIndex].columns.findIndex( col => col.id == columnId )

                let columnItems = s.postData.content[rowIndex].columns[columnIndex].items

                const currentIndex = columnItems.findIndex( item => item.id == itemId)

                if ( currentIndex <= 0 ) { return s }

                const currentItem = columnItems[currentIndex]
                const previousItem = columnItems[currentIndex - 1]

                columnItems[currentIndex] = previousItem
                columnItems[currentIndex - 1] = currentItem


                s.postData.content[rowIndex].columns[columnIndex].items = columnItems

                return s

            })

        }

        function moveItemDown( rowId: string, columnId: string, itemId: string ) {

            update( s => {

                const rowIndex = s.postData.content.findIndex( row => row.id == rowId)
                const columnIndex = s.postData.content[rowIndex].columns.findIndex( col => col.id == columnId )

                let columnItems = s.postData.content[rowIndex].columns[columnIndex].items

                const currentIndex = columnItems.findIndex( item => item.id == itemId)

                if ( currentIndex >= columnItems.length - 1 ) { return s }

                const currentItem = columnItems[currentIndex]
                const nextItem = columnItems[currentIndex + 1]

                columnItems[currentIndex] = nextItem
                columnItems[currentIndex + 1] = currentItem

                s.postData.content[rowIndex].columns[columnIndex].items = columnItems

                return s

            })
        }

        function updateItemPayload( rowId: string, columnId: string, itemId: string, payload:any ) {

            update( s => {

                const rowIndex = s.postData.content.findIndex( r => r.id == rowId)

                const colIndex = s.postData.content[rowIndex].columns.findIndex( c => c.id == columnId)

                const itemIndex = s.postData.content[rowIndex].columns[colIndex].items.findIndex( i => i.id == itemId)

                s.postData.content[rowIndex].columns[colIndex].items[itemIndex].payload = payload

                s.editing = false
                s.selected = null

                return s
            })

        }

    return {
        set,
        subscribe,
        initStore,
        addRow,
        deleteRow,
        moveRowUp,
        moveRowDown,
        addColumn,
        deleteColumn,
        moveColumnLeft,
        moveColumnRight,
        addItem,
        selectEditItem,
        cancelEditItem,
        moveItemUp,
        moveItemDown,
        updateItemPayload,
        deleteItem
    }

}

export const editorStore = initStore()
