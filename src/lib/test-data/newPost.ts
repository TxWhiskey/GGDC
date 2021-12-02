import { v4 as uuid } from 'uuid'

import type { JournalPost } from '$lib/types/journal'

export let postData = {
    id: uuid(),
    published: false,
    sections: [],
    title: "New Blog Post"
}