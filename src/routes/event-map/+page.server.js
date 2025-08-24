

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
	const location = url.searchParams.get('location');
	// Geocoder-Logik entfernt. Hier kann eigene Logik eingefügt werden.
	return {
		location,
		geocoded: null
	};
}
