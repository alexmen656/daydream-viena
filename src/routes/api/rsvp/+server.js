import { json } from '@sveltejs/kit';

/**
 * @param {import('@sveltejs/kit').RequestEvent} event
 */
export async function POST(event) {
	try {
		const { request, getClientAddress } = event;
		const { email, city } = await request.json();
		if (!email) {
			return json({ error: 'Email is required' }, { status: 400 });
		}
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return json({ error: 'Invalid email format' }, { status: 400 });
		}
		// get IP address
		const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || (getClientAddress && getClientAddress());
		// Hier könnte man weitere Logik einfügen, z.B. Logging oder Speicherung an anderer Stelle
		return new Response(null, { status: 200 });
	} catch (error) {
		console.error('Error processing RSVP:', error);
		return new Response(null, { status: 418 });
	}
}
