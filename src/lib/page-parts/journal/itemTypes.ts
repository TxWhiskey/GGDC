import Paragraph from '$lib/page-parts/journal/items/paragraph.svelte'
import ParagraphPreview from '$lib/page-parts/journal/items/paragraph-preview.svelte'
import ParagraphConfig from '$lib/page-parts/journal/items/paragraph-config.svelte'
import Heading from '$lib/page-parts/journal/items/heading.svelte'
import HeadingPreview from '$lib/page-parts/journal/items/heading-preview.svelte'
import HeadingConfig from '$lib/page-parts/journal/items/heading-config.svelte'
import Image from '$lib/page-parts/journal/items/image.svelte'
import ImagePreview from '$lib/page-parts/journal/items/image-preview.svelte'
import ImageConfig from '$lib/page-parts/journal/items/image-config.svelte'

import type {  } from 'svelte'

export interface entry {
    title: string;
    viewComponent: any;
    previewComponent: any;
    configComponent: any;
}

export const itemLibrary: entry[] = [
    {
        title: "Image",
        viewComponent: Image,
        configComponent: ImageConfig,
        previewComponent: ImagePreview
    },
    {
        title: "Heading",
        viewComponent: Heading,
        configComponent: HeadingConfig,
        previewComponent: HeadingPreview
    },
    {
        title: "Paragraph",
        viewComponent: Paragraph,
        configComponent: ParagraphConfig,
        previewComponent: ParagraphPreview
    },
]