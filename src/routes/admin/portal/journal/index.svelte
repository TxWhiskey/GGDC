<script context='module' lang="ts">

    export async function load( {session, fetch} ) {

        const res = await fetch('/api/journals') 

        const journals = await res.json()

        return {
            props: {
                posts: journals
            }
        }

    }

</script>

<script lang="ts">

    import type { JournalPost } from "$lib/types/journal";
    
    export let posts: JournalPost[] = []

    async function togglePublish( post: JournalPost) {

        const newState = !post.published

        const res = await fetch( `/api/journals/publish/${post.id}/${newState}` )

        const postIndex = posts.findIndex( p => p.id === post.id)

        posts[postIndex].published = newState
        posts[postIndex].publishedDate = new Date

    }

</script>

<div class="page-container">
    
    <h1>Journals</h1>

    <ul>
        {#each posts as post}

            <li>

                <button class='post-status' on:click={() => togglePublish(post)} class:published="{post.published}">
                    {#if post.published}
                    Published
                    {:else}
                    Draft
                    {/if}
                </button>

                <a href={'/admin/portal/journal/edit/' + post.id}>
                    {post.title}
                </a>
                
                

            </li>
        
        {/each}
    </ul>


    <a href="/admin/portal/journal/edit/new" class="link-btn">Create New Post</a>

</div>

<style>

    .page-container {
        display: flex;
        flex-flow: column nowrap;
        gap: 1rem;
        padding: 1rem;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        flex-flow: column nowrap;
        gap: .5rem; 
    }

    li {
        display: flex;
        gap: .5rem;
        align-items: center;
    }

    .post-status {
        padding: .25rem;
        border-radius: 4px;
        font-size: .75rem;
        border: none;
        background-color: var(--purple);
        color: white;
    }

    .published {
        background-color: var(--teal);
        color: white;        
    }

    .link-btn {
        color: white;
        background-color: var(--teal);
        padding: .5rem;
        width: fit-content;
    }

</style>