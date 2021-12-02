<script lang="ts">

    import '../../../app.css'

    import { session } from '$app/stores'

    import { logout } from '$lib/auth/auth'

</script>

<div class="grid">

    <nav class="navbar">
        <ul class="navbar-items">
            <li class="navbar-item">
                <a href="/admin/portal" class="navbar-link">
                    Admin Portal
                </a>
            </li>
            <li class="navbar-item">
                <a href="/admin/portal/journal" class="navbar-link">Journals</a>
            </li>
            <li class="navbar-item">
                {$session.user?.email}
            </li>
            <li class="navbar-item">
                <button class="navbar-btn" on:click={logout}>Logout</button>
            </li>
        </ul>
    </nav>        

    <div class="content">
        <slot></slot>
    </div>

</div>

<style>

    .grid {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr;
        height: 100vh;
    }

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

    .navbar-link:hover {
        color: var(--teal);
    }

    .content {
        height: 100%;
        overflow: auto;
    }

</style>