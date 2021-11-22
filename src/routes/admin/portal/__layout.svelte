<script lang="ts">

    import { session } from '$app/stores'

    import { logout } from '$lib/auth/auth'

</script>


<nav class="navbar">
    <ul class="navbar-items">
        <li class="navbar-item">
            Admin Portal
        </li>
        <li class="navbar-item">
            {$session.user?.email}
        </li>
        <li class="navbar-item">
            <button class="navbar-btn" on:click={logout}>Logout</button>
        </li>
    </ul>
</nav>

<slot></slot>

<style>

    .navbar {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.356);
    }

    .navbar-items {
        list-style: none;
        padding: .5rem;
        margin: 0;
        display: flex;
        flex-flow: row wrap;
        gap: 1rem;
    }

    .navbar-item {
    }

</style>