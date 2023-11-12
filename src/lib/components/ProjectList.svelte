<script>
  export let items;
  import ProjectItem from "./ProjectItem.svelte";
  import { fade } from "svelte/transition";
</script>

<ul class="items" in:fade={{ duration: 500, delay: 1000 }}>
  {#each items as item}
    <ProjectItem {item} />
  {/each}
</ul>

<style>
  ul {
    display: flex;
    flex-direction: column;
    max-width: 70rem;
    margin: 0 auto;
    row-gap: 13rem;
  }
</style>
