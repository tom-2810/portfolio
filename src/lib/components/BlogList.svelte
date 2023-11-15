<script>
  export let items;
  import BlogItem from "./BlogItem.svelte";
</script>

<ul>
  {#each items as item}
    <BlogItem {item} />
  {/each}
</ul>
