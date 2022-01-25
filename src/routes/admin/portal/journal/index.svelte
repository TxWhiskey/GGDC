<script context='module' lang="ts">

    export async function load( {session, fetch} ) {

        const res = await fetch('/api/journals') 

        const journals = await res.json()

        journals.sort( (a,b) => { return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()})

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

        const hasPublishedDate = (post.publishedDate != null)

        let requestInit = {
            method: "POST",
            body: JSON.stringify({
                id: post.id,
                state: newState,
                publishedDate: hasPublishedDate ? post.publishedDate : post.publishedDate
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await fetch( `/api/journals/publish`, requestInit )

        const body = await res.json()

        const postIndex = posts.findIndex( p => p.id === post.id)

        posts[postIndex].published = body.state
        posts[postIndex].publishedDate = body.publishedDate

    }

</script>

<div class="page-container">
    
    <h1>Journals</h1>

    <ul>
        {#each posts as post}

            <li>

                <!-- Move Post -->
                <!-- <div class="btn-group">
                    <button class="move up">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                        </svg>
                    </button>
                    <button class="move down">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                        </svg>
                    </button>
                </div> -->

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
        min-width: 75px;
    }

    /* .btn-group {
        display: flex;
        align-items: center;
        justify-content: center;
        justify-items: center;
    }

    .move {
        border: none;
        padding: .25rem;
        display: flex;
        align-items: center;
    }

    .move svg {
        fill: white;
    }

    .up {
        border-radius: 50% 0 0 50%;
        background-color: var(--teal);
    }

    .down {
        border-radius: 0 50% 50% 0;
        background-color: var(--purple);
    } */

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