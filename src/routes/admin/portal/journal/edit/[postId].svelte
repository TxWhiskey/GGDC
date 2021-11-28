<script context='module' lang='ts'>

    import type { JournalPost} from '$lib/types/journal'
    import {postData} from '$lib/test-data/newPost'

    export async function load () {
            return {
                props: {
                    postData: postData
                }
            }
    }

</script>

<script lang='ts'>

    import { v4 as uuid } from 'uuid'

    export let postData: JournalPost = {
        id: uuid(),
        published: false,
        sections: [],
        title: "New Blog Post"
    }

</script>

<div class="journal-heading">
    <ul class="heading-list">
        <input type="text" placeholder="Post Title" bind:value={postData.title}>
    </ul>
</div>

<h1>Editing Post: {postData.title}</h1>

<style>

    .journal-heading {
        box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.356);
    }

    .heading-list {
        margin: 0;
        padding: .5rem;
    }

</style>