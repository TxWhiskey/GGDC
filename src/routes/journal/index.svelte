<svelte:head>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-212337181-1">
    </script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-212337181-1');
    </script>

</svelte:head>

<div class="page-container">
    <h1 class="page-heading">Journal</h1>
    <ul class="journal-posts">
        <li class="journal-post">
            <!-- svelte-ignore a11y-missing-content -->
            <a href="/journal/posts/georgiagrace" class="post-link">
                <img class="post-img" src="/images/home/exterior-construction-2.jpg" alt="">
                <h4 class="post-header">Connecting Homeowners With The Best Custom Home Builders</h4>
            </a>
        </li>
        <li class="journal-post">
            <!-- svelte-ignore a11y-missing-content -->
            <a href="/journal/posts/gettingstartedchecklist" class="post-link">
                <img class="post-img" src="/blogs/gettingstartedchecklist/HomeUnderConstruction.jpg" alt="">
                <h4 class="post-header">Key Player Checklist to Get You Started Building or Renevating</h4>
            </a>
        </li>
    </ul>
</div>

<style>

    .page-container {
        padding-top: 1rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: center;
        margin-bottom: 1rem;
    }

    .page-heading {
        font-size: 5rem;
        font-weight: 500;
    }

    .journal-posts {
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-flow: row wrap;
        gap: 2rem;
    }

    .journal-post {
        text-decoration: none;
        display: flex;
        flex-flow: column nowrap;
        gap: 1rem;
        max-width: 500px;
    }

    .post-link {
        display: flex;
        flex-flow: row wrap;
        gap: 1rem;
        border: thin solid var(--light-grey);
        padding: 1rem;
    }

    .post-img {
        width: 100%;
    }

    .post-header {
        font-size: 1.75rem;
        font-weight: 300;
    }

</style>