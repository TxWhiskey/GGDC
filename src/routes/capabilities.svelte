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

<div class="layout">

    
    <section class="about-info">
        <img src="/images/GG-Stacked.svg" alt="" class="gg-logo" style="margin-bottom: 1em;">
        <p class="about bio-h4">
            Advocating for homeowners during the homebuilding process, and upscaling homebuilders to better serve my clients.
        </p>
        
    </section>

    <section class="about-pat">

        <div class="column">
            <div class="bio">
                <div class="bio__header">
                    <div class="bio__media bio-media-alt">
                        <img src="/images/home/exterior.jpg" alt="" class="bio__img">
                    </div>
                    <div class="bio-title bio-title-alt">
                        <h3 class="bio-h3">Representing</h3>
                        <h3 class="bio-h3">Homeowners</h3>
                        <!-- <h4 class="bio-h4 left">Customizable</h4> -->
                    </div>
                </div>
                <div class="bio__main">
                    <ul class="services">
                        <li class="service">
                            <h5 class="service-prompt">
                                Are you thinking of building a home or renovating one? Don't know where to start?
                            </h5>
                            <p class="service-response">
                                Let us generate a preliminary scope of work for your dream home. This will allow your builders to provide a comprehensive and competitive bid.
                            </p>
                        </li>
                        <li class="service">
                            <h5 class="service-prompt">
                                Are you worried about choosing the wrong builder? Need help finding the right one?
                            </h5>
                            <p class="service-response">
                                We can do the legwork by reaching out to qualified experts that can execute your vision. This includes reviewing and analyzing their bids.
                            </p>
                        </li>
                        <li class="service">
                            <h5 class="service-prompt">
                                Wishing you had an experienced ally join you for meetings with specialists to ask the right questions?
                            </h5>
                            <p class="service-response">
                                We are familiar with all the ins and outs of the building process. When you bring us on board, we ask the questions you haven’t thought of. Diligence during pre-construction means reduced costs later.
                            </p>
                        </li>
                        <li class="service">
                            <h5 class="service-prompt">
                                Concerned about reviewing hundreds upon hundreds contractor invoices?
                            </h5>
                            <p class="service-response">
                                Let us take that load off your shoulders. We ensure your invoices are in line with jobsite progress and alert you of any discrepancies. 
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

            <a href="/documents/Services%20&%20Pricing%20Guide%20for%20Homeowners.pdf" class="cta-btn cta-btn-min" target="_blank">Homeowner Representation <br/>Services & Pricing Guide</a>

        </div>
        
        <div class="column">
            <div class="bio">
                <div class="bio__header">
                    <div class="bio__media">
                        <img src="/images/home/stairs.jpeg" alt="" class="bio__img">
                    </div>
                    <div class="bio-title">
                        <h3 class="bio-h3">Upscaling</h3>
                        <h3 class="bio-h3">Homebuilders</h3>
                        <!-- <h4 class="bio-h4 right">Services & Add-Ons</h4> -->
                    </div>
                </div>
                <div class="bio__main">
                    <ul class="services">
                        <li class="service">
                            <h5 class="service-prompt">
                                Do your prospective client's receive a well thought out document explaining your value?
                            </h5>
                            <p class="service-response">
                                Collaboratively, we can create sales collateral that helps homeowners better understand the framework of your company.
                            </p>
                        </li>
                        <li class="service">
                            <h5 class="service-prompt">
                                Is your company consistent in the way it presents daily correspondence?
                            </h5>
                            <p class="service-response">
                                We will create templates for your team to use on a daily basis to bring consistency to your day-to-day form of communicating.
                            </p>
                        </li>
                        <li class="service">
                            <h5 class="service-prompt">
                                Are you often re-inventing the wheel because there is no established process?
                            </h5>
                            <p class="service-response">
                                We will work with your team to document the necessary steps to follow for common processes. This again, will bring consistency, and clarity on what should be happening on each project, from preconstruction to completion.
                            </p>
                        </li>
                        <li class="service">
                            <h5 class="service-prompt">
                                Is your online presence lacking in this day and age?
                            </h5>
                            <p class="service-response">
                                Let us work with you and a team of experts to cohesively showcase what your company offers homeowners looking to hire the right builder for their home construction.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        
            <a href="/documents/Services & Pricing Guide for Builders.pdf" class="cta-btn cta-btn-min" target="_blank">Homebuilder Upscaling <br/>Services & Pricing Guide</a>
        
        </div>
    </section>

</div>

<style>

    .layout {
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        justify-content: center;
        padding: 40px;
        gap: 2em;
        min-height: 100vh;
        max-width: 1000px;
        margin: 0 auto;
    }

    .gg-logo {
        max-width: 200px;
    }

    .about {
        max-width: 800px;
        text-align: center;
    }

    .about-info {
        display: flex;
        flex-flow: column wrap;
        justify-content: space-between;
        align-items: center;
        gap: 40px;
        line-height: 1.5em;
        flex:1.5;
    }

    @media (max-width: 700px) {
        .layout {
            padding: 10px;
        }

        .about-info {
            display: none;
        }
    }

    .banner {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2em;
        background:  url('/images/home/kitchen-2.jpeg'), rgba(72, 72, 72, 0.4);
        background-repeat: no-repeat;
        background-size: cover;
        background-blend-mode: multiply;
        background-position: center;
        min-height: 15em;
    }

    /* .banner-img {
        width: 100%;
    } */

    .banner-cta {
        background-color: transparent;
        color: var(--teal);
        padding: 1.2em 2em;
        border: 2px var(--teal) solid;
        font-size: 1rem;
        font-weight: 400;
        cursor: pointer;
        background-color: var(--teal);
        color: white;
    }

    .banner-link {
        color: inherit;
        text-decoration: none;
        font-weight: inherit;
    }

    .about-pat {
        /* max-width: 600px; */
        flex: 1;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        gap: 2em;
    }

    .column {
        flex: 1;
        display: flex;
        flex-flow: column nowrap;
        gap: 2em;
        align-items: center;
    }

    .bio {
        background-color: rgb(235, 235, 235);
        flex: 1;
    }

    .bio__header {
        padding: 0 2em;
        position: relative;
        z-index: 1;
        overflow: hidden;
    }

    .bio__header::after {
        content: "";
        position: absolute;
        z-index: 2;
        top: 0;
        left: 0;
        right: 0;
        height: 40%;
        background: white;
    }

    .bio__media {
        width: 60%;
        float: left;
        position: relative;
        z-index: 3;
        max-height: 400px;
    }

    .bio-media-alt {
        float: right;
    }

    .bio__img {
        width: 100%;
        max-width: 100%;
        height: auto;
        vertical-align: middle;
    }

    .bio-title {
        position: absolute;
        z-index: 4;
        bottom: 1em;
        left: auto;
        right: 0;
        max-width: 100%;
        padding: 1em 2em;
        background: rgba(255, 255, 255, 0.9);
        display: flex;
        flex-flow: column wrap;
        gap: 10px;
        text-align: end;
        color: var(--dark-grey);
    }

    .bio-title-alt {
        left: 0;
        right: auto;
        text-align: start;
    }

    .bio-h3 {
        margin-bottom: -.25em;
        text-transform: uppercase;
        font-size: 1.75em;
    }

    .bio-h4 {
        position: relative;
        display: block;
        width: 100%;
        padding-bottom:  .5em;
        margin-bottom: 0;
        font-size: x-large;
    }

    .left::after {
        left: 0;
        right: auto;
        content: "";
        position: absolute;
        bottom: 0;
        width: 60%;
        border-bottom: 2px solid var(--teal);
    }

    .right::after {
        left: auto;
        right: 0;
        content: "";
        position: absolute;
        bottom: 0;
        width: 60%;
        border-bottom: 2px solid var(--teal);
    }

    .bio__main {
        background: rgb(235, 235, 235);
        position: relative;
        z-index: 1;
        padding: 1em;
        color: var(--teal);
        font-weight: 300;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
    }

    /* .bio__main::after {
        content: "";
        position: absolute;
        z-index: 2;
        bottom: 0;
        left: 0;
        right: 0;
        height: 10%;
        background: white;
    } */

    .bio-about {
        margin-bottom: 1em;
        line-height: 1.5em;
    }

    .services {
        color: var(--teal);
        font-weight: 0;
        list-style: none;
        margin: 0;
        padding: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        /* list-style-type: "\2726"; */
    }

    .service {
        font-weight: 300;
        line-height: 1.5em;
        padding: 1em;
        background-color: inherit;
    }

    .service:nth-child(odd) {
        background-color: rgb(225, 225, 225);
    }

    .correction-1 {
        height: 190px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .service-prompt {
        font-weight: 400;
        font-size: 1rem;
        margin-bottom: 1em;
        color: var(--teal);
    }

    .service-response {
        padding-left: 1em;
    }

    @media (max-width: 800px) {
        
        .about-pat {
            flex-direction: column;
        }

    }

    @media (max-width: 1000px) {

        .correction-1 {
            height: auto;
        }

        .about-pat {
            flex: 2;
        }

        .bio__media {
            float: none;
            width: 100%;
            max-width: 400px;
            max-height: 400px;
        }
        
    }

</style>