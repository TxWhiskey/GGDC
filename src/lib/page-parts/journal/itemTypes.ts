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
        defaultPayload: ''
    }
]