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

<section class="hero">

    <div class="hero-content">
        <ul class="hero-items">
            <li class="hero-item">
                <h3>
                    <a href="/about" class="hero-link">
                        About
                    </a>
                </h3>
            </li>
            <li class="hero-item">
                <h3>
                    <a href="/capabilities" class="hero-link">
                        Capabilities
                    </a>
                </h3>
            </li>
            <li class="hero-item">
                <h3>
                    <a href="/experience" class="hero-link">
                        Experience
                    </a>
                </h3>
            </li>
            <li class="hero-item">
                <h3>
                    <a href="/connect" class="hero-link">
                        Let's Connect
                    </a>
                </h3>
            </li>
        </ul>
        <div class="hero-details">
            <h4 class="hero-detail">
                Your proactive construction <br class="hero-br"> advisor and representative
            </h4>
            <hr class="hero-hr"> 
            <p class="hero-slogan">Planning and preparing <br class="hero-br"> for what lies ahead</p>
        </div>        
    </div>

</section>

<section class="info-section">

    <div class="text-cta">
        <p class="info-text">
            Georgia Grace Collaboration helps you make informed decisions during the construction of your home by analyzing options provided by your builder and design team. We ensure you find the right approach to every circumstance and scenario with a focus on protecting your investment.
        </p>
        
        <a class='cta-btn cta-btn-min' href="/capabilities">Guide Me</a>
    </div>

</section>
 
<section class="contact-info-section">
    <div class="contact-info-container">
        <img class="contact-info-logo" src="https://firebasestorage.googleapis.com/v0/b/georgia-grace-design-collab.appspot.com/o/Site%20Docs%2FGG-Square.svg?alt=media&token=99f7366f-a4fb-4095-9362-4015a5aafcf2" alt="">
        <div class="contact-info-split">
            <a href="mailto: Info@GGCollab.com" class="contact-info-item">Info@GGCollab.com</a>
            <a href="tel: 7132482987" class="contact-info-item">713.248.2987</a>
        </div>
        <a href="/connect" class="contact-info-cta">Get in touch</a>
    </div>
</section>

<style>

    .hero {
        min-height: 150px;
        height: calc(100vh - var(--nav-height));
        background:  url('https://firebasestorage.googleapis.com/v0/b/georgia-grace-design-collab.appspot.com/o/Site%20Docs%2Fhero-house.jpg?alt=media&token=615ccfe5-b8c3-40a0-8358-eda1acbb94a7'), rgba(72, 72, 72, 0.75);
        background-repeat: no-repeat;
        background-size: cover;
        background-blend-mode: multiply;
        background-position: center;
        color: white;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
    }

    .hero-content {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        gap: 20px;
        flex: 1;
        max-width: 1200px;
        padding: 40px;
    }

    .hero-items {
        display: flex;
        flex-flow: column wrap;
        gap: 40px;
        list-style-type: none;
        margin: 0;
        padding: 0;
        flex: 1;
    }

    .hero-link {
        color: white;
        text-decoration: none;
        border-bottom: white 1px solid;
        padding-bottom: 5px;
        font-weight: 200;
        font-size: 3rem;
        text-transform: uppercase;
    }

    .hero-details {
        display: flex;
        flex-flow: column nowrap;
        gap: 10px;
        text-transform: uppercase;
        text-align: right;
        flex: 1;
    }

    .hero-detail {
        font-size: x-large;
        font-weight: 200;
        color: white;
        /* text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
             0px 8px 13px rgba(0,0,0,0.1),
             0px 18px 23px rgba(0,0,0,0.1); */
    }

    .hero-hr {
        width: 300px;
        margin-right: 0;
        height: 1px;
        border: none;
        color: white;
        background-color: white;
    }

    .hero-slogan {
        text-transform: none;
        margin-left: auto;
        text-align: right;
        font-size: x-large;
        font-weight: 200;
        color: white;
    }

    .info-section {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        gap: 4rem;
        padding: 100px var(--content-padding);
        background-color: rgb(235, 235, 235);
        color: white;
        /* border: 3px solid var(--teal); */
        /* box-shadow: 0 5px 15px inset rgba(0, 0, 0, 0.3); */
    }

    .text-cta {
        display: flex;
        flex-flow: column nowrap;
        gap: 40px;
        justify-content: center;
        align-items: center;
        color: var(--teal);
    }

    .info-text {
        font-size: 1.5rem;
        text-align: left;
        line-height: 1.4;
        max-width: 900px;
        color: var(--teal);
        /* text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9); */
    }

    .contact-info-section {
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        padding: 100px 0;
    }

    .contact-info-container {
        max-width: var(--standard-width);
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        gap: 2rem;
    }

    .contact-info-logo {
        max-width: 250px;
    }

    .contact-info-cta {
        background-color: white;
        color: var(--teal);
        font-size: 1.5rem;
        font-weight: 300;
        cursor: pointer;
        text-decoration: none;
        border-bottom: 1px var(--teal) solid;
    }

    .contact-info-cta:hover {
        color: var(--purple);
        border-color: var(--purple);
    }

    .contact-info-split {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        gap: 20px;
    }

    .contact-info-item {
        flex: 1;
        font-size: 1.5rem;
        font-weight: 300;
        color: var(--teal);
        text-align: center;
    }

    @media (max-width: 745px) {
        .hero-br {
            display: static;
        }
    }

    @media (max-width: 900px) {

        .hero {
            padding: 10px;
            height: calc(100vh - 150px);
        }

        .hero-content {
            flex-flow: column nowrap;
            justify-content: center;
            align-items: center;
            text-align: center;
            gap: 100px;
        }

        .hero-link {
            font-size: 2rem;
        }

        .hero-details {
            text-align: center;
        }

        .hero-detail {
            font-size: 1rem;
            align-self: center;
            justify-content: center;
        }
        
        .hero-hr {
            margin: auto;
            width: 80%
        }

        .hero-slogan {
            text-align: center;
            margin: auto;
            font-size: 1rem;
        }

        .info-section {
            padding: 40px;
        }

        .info-text {
            font-size: 1.25rem;
            text-align: left;
        }

    }

</style>
