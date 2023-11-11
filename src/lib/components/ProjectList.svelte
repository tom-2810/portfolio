<script>
    export let items;
    import ProjectItem from "./ProjectItem.svelte";
</script>

<ul class="items">
    {#each items as item}
        <ProjectItem project={item.project} />
    {/each}
</ul>

<style>
    ul {
        display: flex;
        flex-direction: column;
        max-width: 75rem;
        margin: 0 auto;
        row-gap: 13rem;
    }
</style>
