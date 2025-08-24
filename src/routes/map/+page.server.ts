

export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	// Event-Logik entfernt. Hier kann eigene Logik eingefügt werden.
	return {
		locations: []
	};
}
