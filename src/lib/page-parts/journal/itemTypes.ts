import Paragraph from '$lib/page-parts/journal/items/paragraph.svelte'
import ParagraphEdit from '$lib/page-parts/journal/items/paragraph-edit.svelte'
import ParagraphSet from '$lib/page-parts/journal/items/paragraph-set.svelte'
import Heading from '$lib/page-parts/journal/items/heading.svelte'
import HeadingEdit from '$lib/page-parts/journal/items/heading-edit.svelte'
import HeadingSet from '$lib/page-parts/journal/items/heading-set.svelte'
import Image from '$lib/page-parts/journal/items/image.svelte'
import ImageEdit from '$lib/page-parts/journal/items/image-edit.svelte'
import ImageSet from '$lib/page-parts/journal/items/image-set.svelte'

import type {  } from 'svelte'

export interface entry {
    title: string;
    viewComponent: any;
    editComponent: any;
    configComponent: any;
}

export const itemLibrary: entry[] = [
    {
        title: "Image",
        viewComponent: Image,
        configComponent: ImageSet,
        editComponent: ImageEdit
    },
    {
        title: "Heading",
        viewComponent: Heading,
        configComponent: HeadingSet,
        editComponent: HeadingEdit
    },
    {
        title: "Paragraph",
        viewComponent: Paragraph,
        configComponent: ParagraphSet,
        editComponent: ParagraphEdit
    },
]