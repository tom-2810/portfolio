<script>
  import ProjectList from "$lib/components/ProjectList.svelte";

  export let data;
</script>

<section>
  <h2>PROJECTS</h2>

  <ProjectList items={data.projects} />
</section>
