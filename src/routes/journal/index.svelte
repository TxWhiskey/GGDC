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
                <div class="post-image" style="background-image: url(/images/home/exterior-construction-2.jpg)"></div>
                <h4 class="post-header">Connecting Homeowners With The Best Custom Home Builders</h4>
            </a>
        </li>
        <li class="journal-post">
            <!-- svelte-ignore a11y-missing-content -->
            <a href="/journal/posts/gettingstartedchecklist" class="post-link">
                <div class="post-image" style="background-image: url(/blogs/gettingstartedchecklist/HomeUnderConstruction.jpg)"></div>
                <h4 class="post-header">Key Player Checklist to Get You Started Building or Renovating</h4>
            </a>
        </li>
        <li class="journal-post">
            <!-- svelte-ignore a11y-missing-content -->
            <a href="/journal/posts/firstimpressions" class="post-link">
                <div class="post-image" style="background-image: url(/blogs/firstimpressions/DSC07350.png)"></div>
                <h4 class="post-header">First Impression is the Last Impression</h4>
            </a>
        </li>
        <li class="journal-post">
            <!-- svelte-ignore a11y-missing-content -->
            <a href="/journal/posts/lessonslearned" class="post-link">
                <div class="post-image" style="background-image: url(/blogs/lessonslearned/Truss.JPG)"></div>
                <h4 class="post-header">One Homeowner’s Lessons Learned </h4>
            </a>
        </li>
        <li class="journal-post">
            <!-- svelte-ignore a11y-missing-content -->
            <a href="/journal/posts/insight" class="post-link">
                <div class="post-image" style="background-image: url(/blogs/insight/Pathricia-Paloma.JPG)"></div>
                <h4 class="post-header">Insight into 3 Houston Interior Designers: Part 1</h4>
            </a>
        </li>
        <li class="journal-post">
            <!-- svelte-ignore a11y-missing-content -->
            <a href="/journal/posts/35questions" class="post-link">
                <div class="post-image" style="background-image: url(/blogs/35questions/beams.jpg)"></div>
                <h4 class="post-header">35 Questions to Ask Potential Builders Before You Hire Them</h4>
            </a>
        </li>
        <li class="journal-post">
            <!-- svelte-ignore a11y-missing-content -->
            <a href="/journal/posts/insight-part-2" class="post-link">
                <div class="post-image" style="background-image: url(https://firebasestorage.googleapis.com/v0/b/georgia-grace-design-collab.appspot.com/o/Posts%2FInsights%20Part%202%2FPat-And-Pamela.jpg?alt=media&token=f00dd820-5068-4e64-b983-be6ce7680961)"></div>
                <h4 class="post-header">Insight into 3 Houston Interior Designers Part 2</h4>
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
        justify-content: center;
        margin-bottom: 1rem;
        padding: 0 1rem;
    }

    .page-heading {
        font-size: 5rem;
        font-weight: 500;
    }

    .journal-posts {
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 16px;
        justify-content: center;

    }

    .journal-post {
        text-decoration: none;
    }

    .post-link {
        border: thin solid var(--light-grey);
        padding: 1rem;
        display: flex;
        flex-flow: column nowrap;
        gap: .5rem;
        height: 100%;
    }

    .post-image {
        background-position: center;
        background-size: cover;
        height: 300px;
    }

    .post-img {
        width: 100%;
    }

    .post-header {
        font-size: 1.75rem;
        font-weight: 300;
    }

</style>