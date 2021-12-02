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
    
    export let posts = []

    let newPostTitle = ''
    let newPostBody = ''

    async function createNewPost() {

        await fetch( '/api/journals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: newPostTitle,
                body: newPostBody
            })
        })

        newPostBody = ''
        newPostTitle = ''
    }

</script>

<h1>Journals</h1>

<ul>
    {#each posts as post}

        <li>{post.title}</li>
    
    {/each}
</ul>

<!-- <form on:submit|preventDefault={createNewPost} class="form">
    <input type="text" bind:value={newPostTitle}>
    <textarea type="text" bind:value={newPostBody}/>
    <button type="submit">Create New Post</button>
</form> -->

<a href="/admin/portal/journal/edit/new" class="link-btn">Create New Post</a>

<style>

    .form {
        display: flex;
        flex-flow: column nowrap;
        gap: .5rem;
        padding: 1rem;
    }

    .link-btn {
        color: white;
        background-color: var(--teal);
        padding: .5rem;
    }
</style>