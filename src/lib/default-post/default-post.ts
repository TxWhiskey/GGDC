import { v4 as uuid } from 'uuid'

import type { Item, JournalPost } from '$lib/types/journal'

function getItem(): Item {
    
    return {
        id: uuid(),
        type: 'Paragraph',
        payload: "Aliqua in laboris aliqua enim minim adipisicing dolor sunt Lorem cillum nisi laborum laborum. Officia Lorem voluptate enim magna occaecat consectetur sint reprehenderit Lorem voluptate adipisicing id. Sunt occaecat eiusmod ullamco voluptate enim minim cillum eu magna fugiat ea. Sunt aliquip sint anim incididunt elit labore ad occaecat. Laboris Lorem mollit do veniam ex officia. Ad incididunt labore magna ad minim velit voluptate."
    }

}

export function getDefaultPost(): JournalPost {

    return {
        id: uuid(),
        published: false,
        publishedDate: new Date,
        createdDate: new Date,
        content: [
            {
                id: uuid(),
                columns: [
                    {
                        id: uuid(),
                        items: [
                            {
                                id: uuid(),
                                type: 'Rich Text',
                                payload: {
                                    content:"<h1 style=\"text-align: center;\">Title</h1>"
                                }
                            }
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
                            {
                                id: uuid(),
                                type: 'Image',
                                payload: null
                            }
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
                            {
                                id: uuid(),
                                type: 'Rich Text',
                                payload: {
                                    content:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget eros a dolor pellentesque mattis. Proin et ultricies quam. Duis facilisis diam sit amet magna interdum lobortis. Aliquam a arcu quis purus hendrerit tempus eu vitae mauris. Maecenas placerat nibh vitae libero cursus, in bibendum ipsum laoreet. Donec iaculis tempor ligula, ut blandit leo condimentum ut. Nam iaculis hendrerit ex, id vestibulum urna tincidunt quis. Ut ut tellus facilisis diam imperdiet viverra non vel ipsum. Vivamus sollicitudin et urna quis viverra. Vestibulum lacinia ex nulla, at ultrices odio fringilla at. Proin convallis arcu eget nunc pharetra, a dictum dolor ornare. Etiam at auctor nunc, nec iaculis purus. Integer arcu eros, molestie sit amet felis id, dignissim egestas purus. Nam sed nisi et tortor condimentum lacinia eget sed nunc. Maecenas ex lorem, semper in odio et, iaculis luctus felis.</p>"
                                }
                            }
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
                            {
                                id: uuid(),
                                type: 'Rich Text',
                                payload: {
                                    content:"<p>Ut tincidunt, dolor eu pretium consequat, massa sapien commodo turpis, vitae ullamcorper augue nibh eget orci. Vivamus id nisl vel orci tincidunt suscipit. Phasellus placerat metus erat, et consectetur ipsum blandit viverra. Suspendisse imperdiet magna vitae justo semper, eget sodales velit sodales. Nunc mattis mi scelerisque aliquet facilisis. Donec pellentesque ipsum a bibendum lacinia. Nullam ac dui laoreet, placerat dui eu, vehicula odio. Nullam faucibus lectus sed massa suscipit, suscipit varius est aliquet. Nullam sodales arcu lorem, vitae accumsan mi mollis vel.</p>"
                                }
                            },
                            {
                                id: uuid(),
                                type: 'Button',
                                payload: {
                                    linkTo: '/',
                                    color: 'Teal',
                                    text: 'Call to Action!'
                                }
                            }
                        ]
                    },

                ]
            },
            
        ],
        title: "New Post",
        pdfUrl: null
    }

}