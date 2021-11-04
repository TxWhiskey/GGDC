
<div class="layout">

    
    <section class="about-info">
        <img src="/images/GG-Stacked.svg" alt="" class="gg-logo" style="margin-bottom: 1em;">
        <!-- <p class="about bio-h3">
            Lost in the construction process? Here's what we can do for you.
        </p> -->
        
    </section>

    <section class="about-pat">

        <div class="bio">
            <div class="bio__header">
                <div class="bio__media bio-media-alt">
                    <img src="/images/home/exterior.jpg" alt="" class="bio__img">
                </div>
                <div class="bio-title bio-title-alt">
                    <h3 class="bio-h3">Full Service</h3>
                    <h4 class="bio-h4 left">Customizable</h4>
                </div>
            </div>
            <div class="bio__main">
                <ul class="services">
                    <li class="service">
                        <h5 class="service-prompt">Don't know where to start?</h5>
                        <p class="service-response">
                            Let us generate a preliminary scope of work for your dream home. This will allow your builders to provide a comprehensive and competitive bid.
                        </p>
                    </li>
                    <li class="service correction-1">
                        <h5 class="service-prompt">Need help finding the right home builder?</h5>
                        <p class="service-response">
                            We can do the legwork by reaching out to qualified experts that can execute your vision. This includes reviewing and analyzing their bids.
                        </p>
                    </li>
                    <li class="service">
                        <h5 class="service-prompt">Wishing you had an experienced ally to join you for your meetings with specialists and ask all the right questions?</h5>
                        <p class="service-response">
                            We are familiar with all the ins and outs of the building process. Diligence during pre-construction means reduced costs later.
                        </p>
                    </li>
                    <li class="service">
                        <h5 class="service-prompt">Reviewing invoices for your project can be overwhelming, especially if you are not used to the construction terms. Need a hand?</h5>
                        <p class="service-response">
                            It would be our pleasure to take that load off your shoulders. We ensure your invoices are in line with jobsite progress, and alert you of any discrepancies.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        
        <div class="bio">
            <div class="bio__header">
                <div class="bio__media">
                    <img src="/images/home/stairs.jpeg" alt="" class="bio__img">
                </div>
                <div class="bio-title">
                    <h3 class="bio-h3">A-La-Carte</h3>
                    <h4 class="bio-h4 right">Services & Add-Ons</h4>
                </div>
            </div>
            <div class="bio__main">
                <ul class="services">
                    <li class="service">
                        <h5 class="service-prompt">
                            Can’t afford the full-service package?
                        </h5>
                        <p class="service-response">
                            Don’t fret—we can still help you with any of our services à la carte to ensure your project does not go without a second opinion or the proper due diligence.
                        </p>
                    </li>
                    <li class="service">
                        <h5 class="service-prompt">
                            Do you want to double check some of the quantities your builder or subcontractor has given you?
                        </h5>
                        <p class="service-response">
                            Send over your drawings and we’ll take care of that for you.  It doesn’t hurt to double check someone’s takeoff.</p>
                    </li>
                    <li class="service">
                        <h5 class="service-prompt">
                            Want to do a minor renovation that doesn’t require a builder? Need to know what all your project entails?
                        </h5>
                        <p class="service-response">
                            We can help you determine what your scope of work is and what your agreement with specialists should include.
                        </p>
                    </li>
                    <li class="service">
                        <h5 class="service-prompt">
                            Is everything going according to plan at your jobsite? Do you wonder if you are missing anything?
                        </h5>
                        <p class="service-response">
                            When you are in the thick of it, it is hard to catch the small details that might not surface until your contractors are long gone. Bring us along as a second set of eyes.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </section>  
    <button class="banner-cta">View Our Services & Pricing Guide</button>

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