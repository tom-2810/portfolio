<script>
  import BlogList from "$lib/components/BlogList.svelte";
	import { fade, fly } from 'svelte/transition';

  export let data;
</script>

<section in:fly={{ y: 200, duration: 500, delay: 650 }}>
  <h2>PROJECTS</h2>

  <BlogList items={data.blogs} />
</section>
