import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ parent }) {
	const { user } = await parent();
	if (user) throw redirect(307, '/');
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ locals,cookies, request }) => {
		const data = await request.formData();

		const user = {
			username: data.get('username'),
			password: data.get('password')
		};

		const response = await fetch('https://location-app-back.onrender.com/users/register', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(user)
		}).then(res=>res.json());//explication à fournir

		if (response.err) {
			return fail(response.status, response);
		}


		console.log("test",locals.user);
		throw redirect(307, '/');
	}
};
