<script>
  import BlogList from "$lib/components/BlogList.svelte";
	import { fade } from 'svelte/transition';

  export let data;
</script>

<section in:fade={{ duration: 500, delay: 650 }}>
  <h2>BLOG</h2>

  <BlogList items={data.blogs} />
</section>
