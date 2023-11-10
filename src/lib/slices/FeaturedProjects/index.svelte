<script>
    import ProjectList from "../../components/ProjectList.svelte";

  /** @type {import("@prismicio/client").Content.FeaturedProjectsSlice} */
  export let slice;
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  <div class="intro">
    <img src={slice.primary.image.url} alt="" />
  </div>
  
  <h2>PROJECTS</h2>

  <ProjectList items={slice.items}/>

  <a href="#">projects overview</a>

</section>

<style>
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