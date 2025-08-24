
/** @type {import('./$types').PageServerLoad} */
export async function load() {
	// Event- und Geocoding-Logik entfernt. Hier kann eigene Logik eingefügt werden.
	return {
		nearestEvent: null
	};
}
