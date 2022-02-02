
import { browser } from '$app/env';

import {loadStripe} from '@stripe/stripe-js';
import type { Stripe } from '@stripe/stripe-js';

const STRIPE_PUBLIC_KEY = import.meta.env.VITE_STRIPE_PUBLIC_KEY;

if (typeof STRIPE_PUBLIC_KEY !== 'string') {
	throw new Error('VITE_STRIPE_PUBLIC_KEY must be added to .env');
}

// ID of the connected stripe account
export let stripeAccount: string | undefined = undefined;

export let stripe: Stripe | null;

async function initStripe() {
	stripe = await loadStripe(STRIPE_PUBLIC_KEY as string);
}

if ( browser) {
	initStripe()
}
