<script>
  export let items;
  import ProjectItem from "./ProjectItem.svelte";
</script>

<ul class="projects">
  {#each items as item}
    <ProjectItem {item} />
  {/each}
</ul>

<style>
  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    max-width: 70rem;
    margin: 0 auto;
    row-gap: 3rem;
    overflow-y: hidden;
  }
</style>
