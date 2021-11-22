<script context="module">

    import { browser } from "$app/env";
    import { get } from 'svelte/store'

    /* export async function load({ session, page }) {

        return authGuard( page.path, session )

    } */

</script>

<script lang='ts'>



    import { goto } from "$app/navigation";

    import { authGuard, loginWithEmail } from '$lib/auth/auth'

    import { session } from '$app/stores'

    let email = 'cameronryansims@gmail.com'
    let password = 'Notime2die@'

    async function handleLogin() {
        
        await loginWithEmail(email, password)
        goto('/admin/portal')

    }

    async function handleLogout() {
        $session = {user: null}
    }

</script>

<h1>Admin</h1>
<h2>Login</h2>
{#if $session.user}
    <button on:click={handleLogout}>Logout</button>
{:else}
    <input type="text" placeholder="Email" bind:value={email}>
    <input type="password" placeholder="Password" bind:value={password}>
    <button on:click={handleLogin}>Login</button>
{/if}
<a href="/admin/portal">Portal</a>