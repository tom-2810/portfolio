import { createClient } from "$lib/prismicio";

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, request, params }) {
    const client = createClient({ fetch, request });
    const projectData = await client.getByUID("project", params.projectUID);

    return projectData;
}