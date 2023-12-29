<script>
  import ProjectList from "$lib/components/ProjectList.svelte";

  export let data;

  import { gsap } from "gsap/dist/gsap";
  import { onMount } from "svelte";

  onMount(() => {
    gsap.fromTo(".projects-page", { y: 100}, { y: 0, duration: .7, delay: 1})
  });
</script>

<section class="projects-page">
  <h2>PROJECTS</h2>

  <ProjectList items={data.projects} />
</section>