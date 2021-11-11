<script>
    import { page } from '$app/stores';

    let showNav = false;

    function toggleNav() {
        showNav = !showNav
        console.log('toggle')
    }

</script>

<nav class="nav-bar">
        <h1 class='nav-header'>
            <a href="/" class="home-link">
                <span class="purple ">Georgia</span> <span class="teal ">Grace </span><span class="grey ">Collaboration</span>
            </a>
            <svg on:click={toggleNav} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="menu-icon" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
        </h1>
    <ul class="nav-items" class:hide-nav={!showNav}>
        <li class="nav-item">
            <a href="/" class="nav-link hide-home" class:show-home={$page.path != '/'} on:click={toggleNav}>Home</a>
        </li>
        <li class="nav-item">
            <a href="/about" class="nav-link" class:active={$page.path === '/about'} on:click={toggleNav}>About</a>
        </li>
        <li class="nav-item">
            <a href="/capabilities" class="nav-link" class:active={$page.path === '/capabilities'} on:click={toggleNav}>Capabilities</a>
        </li>
        <li class="nav-item">
            <a href="/experience" class="nav-link" class:active={$page.path === '/experience'} on:click={toggleNav}>Experience</a>
        </li>
        <li class="nav-item">
            <a href="/journal" class="nav-link" class:active={$page.path === '/journal'} on:click={toggleNav}>Journal</a>
        </li>
        <li class="nav-item">
            <a href="/connect" class="nav-link" class:active={$page.path === '/connect'} on:click={toggleNav}>Let's Connect</a>
        </li>
    </ul>
</nav>

<style>

    .nav-bar {
        display: flex;
        flex-flow: row wrap;
        gap: 10px;
        padding: 10px;
        align-items: center;
        box-sizing: border-box;
        position:fixed;
        background-color: white;
        width: 100%;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.356);
        z-index: 100;
    }

    .nav-header {
        font-size: 1rem;

    }

    .menu-icon {
        margin-left: auto;
        display: none;
    }

    .bold {
        font-weight: 400;
    }

    .home-link {
        text-decoration: none;
    }

    .nav-items {
        display: flex;
        flex-flow: row wrap;
        padding: 0;
        margin: 0 0 0 auto;
        list-style-type: none;
        gap: 20px;
        align-items: center;
        cursor: pointer;
        text-transform: uppercase;
        font-size: 1rem;
    }

    .nav-link {
        text-decoration: none;
        color: var(--dark-grey);
    }

    .active {
        color: var(--purple);
        text-shadow: 1px 1px 5px rgba(194, 132, 255, 0.5);
        /* font-weight: 400; */
    }

    .hide-home {
        display: none;
    }

    .show-home {
        display: list-item;
    }

    @media (max-width: 900px) {

        * {
            font-size: 16px;
        }

        .nav-header {
            width: 100%;
            display: flex;
            flex-flow: row nowrap;
        }

        .menu-icon {
            display: block;
        }

        .nav-bar {
            gap: 10px;
        }

        .nav-items {
            /* display: none; */
            display: flex;
            flex-flow: column nowrap;
            gap: 1em;
            align-items: flex-start;
            margin: 0 0 10px 0;
        }

        .hide-nav {
            display: none;
        }
    }

</style>
