import { createClient } from "$lib/prismicio";

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, request, params }) {
    const client = createClient({ fetch, request });
    const blogData = await client.getByUID("blog", params.blogUID);

    return blogData;
}