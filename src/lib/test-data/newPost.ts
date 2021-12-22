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
                                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/georgia-grace-design-collab.appspot.com/o/Media%20Library%2Fbob%20%26%20me.jpg?alt=media&token=c5f03305-da68-4d5f-9a3d-7bc994db2fa4',
                                imageId: 'f8sbY3nGjrxi1RQM7is6',
                                imageTitle: 'Bob & Me',
                                maxWidth: 600,
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

