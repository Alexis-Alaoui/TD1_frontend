import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	if (locals.user) throw redirect(307, '/');
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();

		const response = await fetch('https://location-app-back.onrender.com/users/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({

					username: data.get('username'),
					password: data.get('password')

			})
		}).then(res => {   if(res.ok) {      return res.json();   }   else {      return res;   }});

		if (response.status && response.status!=201) {
			return fail(response.status, {err:response.statusText});
		}


		const value = response.jwt;
		console.log(response.jwt);
		cookies.set('jwt', value, { path: '/' });

		throw redirect(307, '/');
	}
};
