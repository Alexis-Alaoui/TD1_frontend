import {redirect} from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
    const user =locals.user
    const token = user.split('.')
    const role=JSON.parse(atob(token[1])).role
    const response = await fetch('https://location-app-back.onrender.com/locations', {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${locals.user }`}


    }).then(res=>res.json());

    console.log(role)
    return {response, role,locals}


}
/** @type {import('./$types').Actions} */
export const actions = {
    deleteLocation: async ({locals, request}) => {
    const form = await request. formData();
    const id = form.get ('id');
    const body = await fetch(  `https://location-app-back.onrender.com/Locations/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${locals.user }`}


    }).then(res=>res.json());
       console.log(body)
    }



}



