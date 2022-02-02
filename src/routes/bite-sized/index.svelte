<!-- <script context="module" lang="ts">
    export const prerender = true;

    export async function load({ fetch }) {
        const res = await fetch("/stripe/products", {
            method: "POST",
            body: JSON.stringify({
                metadata: [
                    {
                        key: "bite-sized",
                        value: "true",
                    },
                ],
            }),
        });

        const services = await res.json();

        return {
            status: 200,
            props: {
                services,
            },
        };

    }
</script>

<script lang="ts">
    export let services = [];
</script> -->

<div class="page-content">

    <h2>Bite-Sized Services</h2>

    <p class="about-micro">
        So, you don't want to fully commit to having a full-time homeowner advocate. I get it - you don't know me (yet!). Let me show you our value through one of our bite-sized options.
    </p>

    <p class="about-micro">
        We'll review your builder proposal and give you our feedback on what might be missing or needs clarification.
    </p>

    <div class="services-container">
            
        <div class="services">

            <div class="service">

                <div class="service-header">
                    <h4 class='service-title'>BUILDER PROPOSAL FEEDBACK</h4>
                    <p class="service-price">$260</p>

                </div>

                <div class="service-body">
                    
                    <div class="service-detail">
                        <p>
                            Receive feedback on a builder's estimate and specifications for the construction of your custom home with a guaranteed 3-day turnaround.
                        </p>

                    </div>

                    <!-- <div class="hl"></div> -->

                    <ul class="service-list">
                        <li class="service-list-item">
                            Document Review
                        </li>
                        <li class="service-list-item">
                            Line-Item Analysis
                        </li>
                        <li class="service-list-item">
                            Mitigate Potential Change Orders
                        </li>
                        <li class="service-list-item">
                            Requests for Clearification
                        </li>
                        <li class="service-list-item">
                            3 Day Turnaround
                        </li>
                    </ul>

                    <a href="/bite-sized/builder-proposal-feedback" class="service-cta">
                        Buy Now
                    </a>
    
                </div>

            </div>

        </div>

    </div>

</div>

<style>

    .page-content {
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        gap: 2rem;
        align-items: center;
        padding-bottom: 1rem;
    }

    h2 {
        margin-top: 2rem;
        font-size: 3rem;
    }

    .about-micro {
        max-width: 800px;
        font-size: 1.2rem;
        line-height: 1.75rem;
    }

    .services-container {
        background-color: var(--light-grey);
        display: flex;
        justify-content: center;
        padding: 1rem;
        box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);
        width: 100%;
        max-width: 500px;
        border-radius: 4px;
    }

    .services {
        display: flex;
        gap: 1rem;
        width: 100%;
        max-width: 1000px;
    }

    .service {
        flex: 1;
        display: flex;
        flex-direction: column;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
        border-radius: 4px;
        overflow: hidden;
    }

    .service-header {
        background-color: var(--teal);
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: .5rem;
        border: thin solid var(--teal);
    }

    .service-body {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 2rem 1rem 1rem 1rem;
        /* border-left: thin solid var(--teal);
        border-right: thin solid var(--teal); */
        background-color: white;
        flex: 1;
    }

    .service-title {
        color: white;
        user-select: none;
        font-weight: 400;
        text-align: center;
    }

    .service-price {
        color: white;
        user-select: none;
        text-align: center;
    }

    .service-detail {
        color: white;
        line-height: 1.75rem;
    }

    .hl {
        height: 1px;
        background-color: var(--light-grey);
    }

    .service-list {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: .75rem;
        list-style: none;
    }

    .service-list-item {
        padding-left: 1.5rem;
        position: relative;
    }

    .service-list-item:before {
        content: '✓'; 
        position: absolute;
        top: -.15rem;
        left: 0;
        width: 1em;
        height: 1em;
        color: var(--teal)
    }

    .service-cta {
        background-color: var(--purple);
        color: white;
        padding: 1rem;
        text-align: center;
        transition: ease-in-out 175ms;
        font-weight: 400;
        border-radius: 4px;
    }

    .service-cta:hover {
        background-color: var(--teal);
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
    }

</style>