<script>
    export let items;
    import ProjectItem from "./ProjectItem.svelte";
    import { onMount } from "svelte";

    onMount(() => {
        let items = document.querySelectorAll(".items a");

        items.forEach((item) => {
            let title = document.querySelector(
                `.titles span[data-uid=${item.getAttribute("data-uid")}]`
            );
            item.addEventListener("mouseover", () => {
                title.classList.toggle("highlight");
            });

            item.addEventListener("mouseout", () => {
                title.classList.toggle("highlight");
            });
        });
    });
</script>

<div class="projects">
    <ul class="titles">
        {#each items as item}
            <span data-uid={item.project.uid} class="marquee">
                <div class="marquee-content">
                    {item.project.data.title} {item.project.data.title} {item.project.data.title} 
                </div>
                <div class="marquee-content">
                    {item.project.data.title} {item.project.data.title} {item.project.data.title} 
                </div>
            </span>
        {/each}
    </ul>

    <ul class="items">
        {#each items as item}
            <ProjectItem project={item.project} />
        {/each}
    </ul>
</div>



<style>
    .marquee {
        flex-shrink: 0;
        display: flex;
        overflow: hidden;
        gap: 1rem;
        min-width: 100%;
    }
    .marquee .marquee-content {
        display: flex;
        flex-direction: row;
        flex-shrink: 0;
        animation: scroll 60s linear infinite;
    }
    .projects {
        position: relative;
    }
    ul.titles {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 10rem;
        height: 100%;
        overflow: hidden;
        width: 100%;
        color: rgba(255, 255, 255, 0.05);
        z-index: -1;
    }
    ul.items {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        max-width: 75rem;
        margin: 0 auto;
        row-gap: 13rem;
    }

    @keyframes scroll {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(calc(-100% - 1rem));
        }
    }
</style>
