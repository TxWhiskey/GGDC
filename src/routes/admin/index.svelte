<script lang='ts'>

    import { session } from '$app/stores';

    import { authState } from '$lib/firebase/authState'

    import { getAuth } from 'firebase/auth'

    let email = ''
    let password = ''

    function handleLogin() {
        authState.loginWithEmail( email, password )
        email = ''
        password = ''
    }

</script>

<h1>Admin</h1>
{#if $session.authenticated }
    {$session.user.email}
    <h2>Welcome</h2>
    <button on:click={authState.logout}>Logout</button>
{:else}
    <h2>Login</h2>
    <input type="text" placeholder="Email" bind:value={email}>
    <input type="password" placeholder="Password" bind:value={password}>
    <button on:click={handleLogin}>Login</button>
{/if}