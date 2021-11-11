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

<div class="experience-container">

    <h4 class="info-header" name="top">
        Take a Peek
    </h4>

    <div class="info">
        <p class="info-text">
            We use our project management experience in high-end residential construction to provide you with a fulfilling and rewarding homebuilding journey. Featured below are some of the recent projects I've managed, including new custom homes and a hotel-bar-restaurant renovation, La Colombe d’Or Hotel, built alongside well-respected professionals and craftsmen in the greater Houston area. These professionals include Sims Luxury Builders (Builder), Geschke Group (Architect), The Owen Group (Designer), Pamela Hope Designs (Designer), Rottet Studio (Designer), Robert Dame Designs (Architect), MASA Studio (Architect), and Method Designs (Designer).
        </p>
        <p class="info-text">
            It would be a great honor to put our experience to work for one simple purpose: your homebuilding success.
        </p>
    </div>
    
    <a href="https://georgiagracecollaboration.hbportal.co/schedule/6163b3aee4a11230f3e34a24" target="_blank" rel=external class="cta-btn cta-btn-min">Hire With Confidence</a>

    <div class="gallery">
        <div style="background-image: url('/images/home/kitchen-1.jpeg');" class="photo large"></div>
        <div style="background-image: url('/images/home/closet.jpeg');" class="photo"></div>
        <div style="background-image: url('/images/home/dining.jpeg');" class="photo "></div>
        <div style="background-image: url('/images/home/elevation-construction.jpeg');" class="photo wide top"></div>
        <div style="background-image: url('/images/home/architecture.jpeg');" class="photo tall bottom"></div>
        <div style="background-image: url('/images/home/awning-construction.jpeg');" class="photo top"></div>
        <div style="background-image: url('/images/home/formal-living.jpeg');" class="photo"></div>
        <div style="background-image: url('/images/home/exterior-2.jpeg');" class="photo wide"></div>
        <div style="background-image: url('/images/home/hall.jpeg');" class="photo"></div>
        <div style="background-image: url('/images/home/kitchen-4.jpg');" class="photo"></div>
        <div style="background-image: url('/images/home/entry.jpeg');" class="photo tall"></div>
        <div style="background-image: url('/images/home/kitchen-2.jpeg');" class="photo"></div>
        <div style="background-image: url('/images/home/beams.jpg');" class="photo tall"></div>
        <div style="background-image: url('/images/home/exterior-construction-1.jpg');" class="photo"></div>
        <div style="background-image: url('/images/home/exterior-construction-2.jpg');" class="photo"></div>
        <div style="background-image: url('/images/home/exterior.jpg');" class="photo"></div>
        <div style="background-image: url('/images/home/sink.jpg');" class="photo tall"></div>
        <div style="background-image: url('/images/home/dream-house.jpg');" class="photo x-large"></div>
    </div>

    <a href="#top" class="to-top">Back to Top</a>
</div>

<style>

    .experience-container {
        display: flex;
        flex-flow: column wrap;
        margin: 4em 0 4em 0;
        gap: 3rem;
        align-items: center;
    }

    .info-header {
        text-align: center;
        font-size: 3em;
    }

    .info {
        display: flex;
        flex-direction: column;
        gap: 1em;
        max-width: 1200px;
    }

    .gallery {
        width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        grid-auto-rows: 240px;
        grid-auto-flow: dense;
        gap: .5rem;
        padding: 0 0 .5em 0;
    }

    .photo {
        height: 100%;
        width: 100%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    .tall {
        grid-row: span 2 / auto;
    }

    .wide {
        grid-column: span 2 / auto;
    }

    .large {
        grid-column: span 2 / auto;
        grid-row: span 2 / auto;
    }

    .x-large {
        grid-column: span 3 / auto;
        grid-row: span 2 / auto;
    }

    .top {
        background-position: top;
    }

    .bottom {
        background-position: bottom;
    }

    .info-cta{
        background-color: var(--teal);
        color: white;
        padding: 1rem;
        text-align: center;
        width: fit-content;
        align-self: center;
    }

    @media (max-width: 1200px) {

        .experience-container {
            margin: 2em 0;
            gap: 2em;
        }

        .info {
            padding: 0 2em;
        }
        .x-large {
            grid-column: span 2 / auto;
            grid-row: span 2 / auto;
        }

        .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
            grid-auto-rows: 290px;
            width: 100%;
        }
    }

    @media (min-width: 1000px) {

    }

    @media (max-width: 1000px) {

        .tall {
            grid-row: auto;
        }

        .wide {
            grid-column: auto;
        }

        .large {
            grid-column: auto;
            grid-row: auto;
        }

        .x-large {
            grid-column: auto;
            grid-row: auto;
        }

    }

</style>