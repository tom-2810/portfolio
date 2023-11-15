<script>
  import ProjectList from "$lib/components/ProjectList.svelte";
	import { fade } from 'svelte/transition';

  export let data;
</script>

<section in:fade={{ duration: 500, delay: 650 }}>
  <h2>PROJECTS</h2>

  <ProjectList items={data.projects} />
</section>
