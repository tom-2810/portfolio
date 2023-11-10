import { createClient } from "$lib/prismicio";

export async function load({ fetch, request }) {
  const client = createClient({ fetch, request });

  const document = await client.getSingle("homepage", {'fetchLinks': ['project.title', 'project.image', 'blog.title', 'blog.image']})

  return document.data
}