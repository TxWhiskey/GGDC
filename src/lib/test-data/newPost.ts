import { v4 as uuid } from 'uuid'

import type { Item, JournalPost } from '$lib/types/journal'

function getItem(): Item {
    
    return {
        id: uuid(),
        type: 'Paragraph',
        payload: "Aliqua in laboris aliqua enim minim adipisicing dolor sunt Lorem cillum nisi laborum laborum. Officia Lorem voluptate enim magna occaecat consectetur sint reprehenderit Lorem voluptate adipisicing id. Sunt occaecat eiusmod ullamco voluptate enim minim cillum eu magna fugiat ea. Sunt aliquip sint anim incididunt elit labore ad occaecat. Laboris Lorem mollit do veniam ex officia. Ad incididunt labore magna ad minim velit voluptate."
    }

}

export let postData: JournalPost = {
    id: uuid(),
    published: false,
    rows: [
        {
            id: uuid(),
            columns: [
                {
                    id: uuid(),
                    items: [
                        {
                            id: uuid(),
                            type: 'Image',
                            payload: {
                                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/georgia-grace-design-collab.appspot.com/o/journals%2Fmedia-library%2Fexterior-2.jpeg?alt=media&token=141d4536-9ad6-4d19-88ae-6f00814295b2',
                                imageTitle: 'Test',
                                maxWidth: 500,
                                maxHeight: 500
                            }
                        }
                    ]
                }
            ]
        }
        /* {
            id: uuid(),
            columns: [
                {
                    id: uuid(),
                    items: [
                        getItem(),
                        getItem()
                    ]
                },{
                    id: uuid(),
                    items: [
                        getItem()
                    ]
                }
            ]
        },
        {
            id: uuid(),
            columns: [
                {
                    id: uuid(),
                    items: [
                        getItem()
                    ]
                },{
                    id: uuid(),
                    items: []
                }
            ]
        },
        {
            id: uuid(),
            columns: [
                {
                    id: uuid(),
                    items: [
                        getItem()
                    ]
                },{
                    id: uuid(),
                    items: []
                }
            ]
        } */
    ],
    title: "A Whole New World",
    pdfUrl: null
}