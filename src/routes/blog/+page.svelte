<script>
  import BlogList from "$lib/components/BlogList.svelte";

  export let data;
</script>

<section>
  <h2>BLOG</h2>

  <BlogList items={data.blogs} />
</section>
