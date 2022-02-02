import stripe from './_stripe';

export async function post( {request, url}) {
 
    const body = await request.json()

	const priceId = body.priceId;

	if (typeof priceId !== 'string') {
		return {
			status: 400,
			headers: {},
			body: JSON.stringify({
				error: {
					message: 'priceId is required'
				}
			})
		};
	}

	try {
		const session = await stripe.checkout.sessions.create({
			mode: 'payment',
			payment_method_types: ['card'],
			line_items: [
				{
					price: priceId,
					quantity: 1
				}
			],
			success_url: `http://${url.host}/bite-sized/builder-proposal-feedback/checkout?sessionId={CHECKOUT_SESSION_ID}`,
			cancel_url: `http://${url.host}/bite-sized`
		});
		return {
			status: 200,
			headers: {},
			body: JSON.stringify({
				sessionId: session.id
			})
		};
	} catch (err) {
		return {
			status: 500,
			headers: {},
			body: JSON.stringify({
				error: err
			})
		};
	}
}