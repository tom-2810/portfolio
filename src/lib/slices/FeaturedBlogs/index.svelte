<script>
  import BlogList from "$lib/components/BlogList.svelte";

  /** @type {import("@prismicio/client").Content.FeaturedBlogsSlice} */
  export let slice;
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  <div class="intro">
    <img src={slice.primary.image.url} alt="" />
  </div>

  <h2>BLOG</h2>
  <h3>Featured blog topics</h3>

  <BlogList items={slice.items} />

  <a href="#">blog overview</a>
</section>

<style>
  section {
    width: 100%;
  }
  h3 {
    max-width: 70rem;
    margin: 0 auto;
  }
  a {
    display: block;
    width: fit-content;
    margin: 2rem auto 0 auto;
    font-size: 1.2rem;
  }
  a:is(:hover, :focus)::before {
    content: "{ ";
  }
  a:is(:hover, :focus)::after {
    content: " }";
  }
</style>
