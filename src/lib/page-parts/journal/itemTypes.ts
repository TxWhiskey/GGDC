import Paragraph from '$lib/page-parts/journal/items/paragraph/paragraph.svelte'
import ParagraphPreview from '$lib/page-parts/journal/items/paragraph/paragraph-preview.svelte'
import ParagraphConfig from '$lib/page-parts/journal/items/paragraph/paragraph-config.svelte'

import Heading from '$lib/page-parts/journal/items/heading/heading.svelte'
import HeadingPreview from '$lib/page-parts/journal/items/heading/heading-preview.svelte'
import HeadingConfig from '$lib/page-parts/journal/items/heading/heading-config.svelte'

import Image from '$lib/page-parts/journal/items/image/image.svelte'
import ImagePreview from '$lib/page-parts/journal/items/image/image-preview.svelte'
import ImageConfig from '$lib/page-parts/journal/items/image/image-config.svelte'

import RichText from '$lib/page-parts/journal/items/rich-text/rich-text.svelte'
import RichTextConfig from '$lib/page-parts/journal/items/rich-text/rich-text-config.svelte'
import RichTextPreview from '$lib/page-parts/journal/items/rich-text/rich-text-preview.svelte'

import Button from '$lib/page-parts/journal/items/button/button.svelte'
import ButtonPreview from '$lib/page-parts/journal/items/button/button-preview.svelte'
import ButtonConfig from '$lib/page-parts/journal/items/button/button-config.svelte'


export interface entry {
    title: string;
    viewComponent: any;
    previewComponent: any;
    configComponent: any;
    defaultPayload: any;
}

export const itemLibrary: entry[] = [
    {
        title: "Image",
        viewComponent: Image,
        configComponent: ImageConfig,
        previewComponent: ImagePreview,
        defaultPayload: null
    },
/*     {
        title: "Heading",
        viewComponent: Heading,
        configComponent: HeadingConfig,
        previewComponent: HeadingPreview,
        defaultPayload: ''
    }, */
/*     {
        title: "Paragraph",
        viewComponent: Paragraph,
        configComponent: ParagraphConfig,
        previewComponent: ParagraphPreview,
        defaultPayload: ''
    }, */
    {
        title: "Rich Text",
        viewComponent: RichText,
        configComponent: RichTextConfig,
        previewComponent: RichTextPreview,
        defaultPayload: {
            content: 'Duis eu rutrum eros. Donec luctus commodo erat, in ornare mauris pulvinar vehicula. Suspendisse quis ultrices eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec dui tellus, vulputate sed molestie nec, scelerisque ac magna. Vestibulum iaculis, justo id suscipit varius, nibh sem hendrerit urna, id mattis purus velit ut augue. Mauris at mi semper, lacinia magna vitae, ultrices odio. Nam non dolor odio. Curabitur vitae auctor ex, ultricies auctor tortor. Phasellus elementum aliquet facilisis.'
        }
    },
    {
        title: "Button",
        viewComponent: Button,
        configComponent: ButtonConfig,
        previewComponent: ButtonPreview,
        defaultPayload: {
            linkTo: '/',
            color: 'teal',
            text: 'Call to Action'
        }
    }
]