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

    <script>
        (function(w, d, t, h, s, n) {
          w.FlodeskObject = n;
          var fn = function() {
            (w[n].q = w[n].q || []).push(arguments);
          };
          w[n] = w[n] || fn;
          var f = d.getElementsByTagName(t)[0];
          var v = '?v=' + Math.floor(new Date().getTime() / (120 * 1000)) * 60;
          var sm = d.createElement(t);
          sm.async = true;
          sm.type = 'module';
          sm.src = h + s + '.mjs' + v;
          f.parentNode.insertBefore(sm, f);
          var sn = d.createElement(t);
          sn.async = true;
          sn.noModule = true;
          sn.src = h + s + '.js' + v;
          f.parentNode.insertBefore(sn, f);
        })(window, document, 'script', 'https://assets.flodesk.com', '/universal', 'fd');
      </script>

</svelte:head>

<div class="container">

    <!-- Title -->
    <div class="row">
        <div class="col">
            <h1 class="blog-title">
                35 Questions to Ask Potential Builders Before You Hire Them
            </h1>
        </div>
    </div>

    <!-- Media Controls -->
    <div class="row">
        <div class="col">
            <div class="media-controls">
                <a href="https://firebasestorage.googleapis.com/v0/b/georgia-grace-design-collab.appspot.com/o/Posts%2F35%20Questions%2FBuilder%20Questionnaire%20Blog%20Post.pdf?alt=media&token=72d647a9-ccaa-474d-96cd-1c435d2e9d71" class="media-download" target="_blank">PDF Download</a>
                <!-- <audio controls class='media-audio'>
                    <source src="/blogs/gettingstartedchecklist/Blog2Audio.mp3" type="audio/mpeg">
                </audio> -->
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col">
            <img class="blog-image" src="https://firebasestorage.googleapis.com/v0/b/georgia-grace-design-collab.appspot.com/o/Posts%2F35%20Questions%2Fbeams.jpg?alt=media&token=db92cf1e-a194-4e7b-8fa3-4bc0470c67b3" alt="Home being built. Currently down to the studs.">
        </div>
    </div>

    <!-- Section 2 Header -->
    <div class="row">
        <div class="col">

            <p class="blog-text">
                Once you decide that building a home is the best option for you and your family, the next step is to decide on the builder. Choosing a home construction company that aligns with your specific needs is essential in order to achieve your desired result. 
            </p>

            <p class="blog-text">
                With so many different Houston home builders to choose from, making the right choice can seem like an overwhelming and impossible task. Every builder has their strengths and weaknesses, and there are a lot of factors to consider when making your decision. Each home builder will provide a different experience. And different builders have different preferences, standards, fee structures, and staff members, so it's important to find the company that works best for you.
            </p>

            <p class="blog-text">
                Once you narrow down your options to 3-5 builders, it's time to get prepared. When you're meeting with potential builders for your new home, you'll want to find out all of the details, positive and negative, ahead of time. That way, you can be ready for all of the twists and turns during your home construction without major surprises. 
            </p>

            <p class="blog-text">
                Being prepared with the correct questions is the best thing a new homeowner can do to ensure a successful build. In order to help ensure that you make the best decision for you and your family's needs, Georgia Grace Collaboration has created an in-depth <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=1AotmwxJvkmwzJNDU_AESvgpjKQJIQJEkMYJ2PRuOGpUMTk1SzA3MkJQTjVSSU9KVlJSUFNSMEc0VC4u" target="_blank">builder questionnaire</a>. This questionnaire will provide you with valuable information about all your potential builders, and it will help you choose the builder that will best meet your needs from start to finish. 
            </p>

            <p class="blog-text">
                If you're just starting your home building journey in Houston, TX, consider hiring a residential construction consultant. Having an experienced advocate on your side will make the process much less stressful. And, due to extensive experience in the industry, a home building advocate can provide advice on which home builder would best suit your needs.
            </p>

            <p class="blog-text">
                If you'd like to connect, or if you have questions, please feel free to fill out my <a href="https://ggcollab.com/connect" target="_blank">contact form</a>. Or, if you're ready to schedule a discovery call, <a href="https://georgiagracecollaboration.hbportal.co/schedule/6163b3aee4a11230f3e34a24" target="_blank">click here</a> and select a day/time that works best for you. I'm looking forward to speaking with you!
            </p>

        </div>
    </div>

    <div class="row">
        <div class="col">
            <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=1AotmwxJvkmwzJNDU_AESvgpjKQJIQJEkMYJ2PRuOGpUMTk1SzA3MkJQTjVSSU9KVlJSUFNSMEc0VC4u" target="_blank" class="cta-btn cta-btn-min">
                Builder Questionnaire
            </a>
        </div>
    </div>

</div>

<div id="fd-form-618323060b51fd1569c550a2" style="padding-top: 1rem;"></div>

<script lang='ts'>

    import { onMount } from 'svelte';

    onMount( () => {
        // @ts-ignore
        window.fd('form', {
        formId: '618323060b51fd1569c550a2',
        containerEl: '#fd-form-618323060b51fd1569c550a2'
        });        
    })


</script>

<style>

    a {
        color: var(--teal);
        font-weight: 400;
    }

    .cta-btn {
        color: white;
    }

    .media-download {
        color: var(--grey);
        font-weight: 300;
    }

    .header-link {
        border-bottom: thin solid var(--purple);
        color: var(--purple);
        cursor: pointer;
    }

    .container {
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        padding: 3rem 0;
        gap: 2rem;
    }

    .row {
        flex: 1;
        width: 800px;
        display: flex;
        flex-flow: row wrap;
        gap: 1rem;
    }

    .col {
        flex: 1;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        gap: 1rem;
    }

    .blog-title {
        text-align: center;
        max-width: 700px;
    }

    .media-controls {
        border-top: thin solid var(--light-grey);
        border-bottom: thin solid var(--light-grey);
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        padding: .5rem 0;
    }

    .media-download:hover {
        color: var(--teal)
    }

    .media-audio {
        margin-left: auto;
    }

    .section-header {
        font-size: 2.2rem;
        text-align: center;
    }

    .section-subheader {
        font-size: 1.5rem;
        text-align: start;
        flex: 1;
        width: 100%;
    }

    .blog-image {
        width: auto;
        max-height: 500px;
        max-width: 100%;
    }

    .blog-image-container-circle {
        display: inline-block;
        position: relative;
        width: 300px;
        height: 300px;
        overflow: hidden;
        border-radius: 50%;
        background-position: top;
        background-size: contain;
    }

    .blog-image-circle {
        width: auto;
        height: 100%;
    }

    .blog-list {
        margin: 0;
    }

    .text-section {
        display: flex;
        flex-flow: column nowrap;
        gap: 1rem;
    }

    .cta {
        background-color: var(--teal);
        padding: 1rem;
        color: white;
        font-weight: 400;
    }

    .cta:hover {
        background-color: var(--light-grey);
        color: var(--teal);
    }

    @media (max-width: 1000px ) {
        .row {
            width: 100%;
            padding: 0 1rem;
        }

        .media-controls {
            justify-content: center;
            gap: 1rem;
        }

        .blog-image {
            max-width: 100%;
        }

        .blog-image-container-circle {
            height: 200px;
            width: 200px;
        }
    }

    @media (max-width: 500px) {

        .media-audio {
            margin: 0;
        }

        .blog-title {
            font-size: 1.5rem;
        }

        .section-header {
            font-size: 1.5rem;
        }
    }

    b {
        font-weight: 500;
    }

</style>
