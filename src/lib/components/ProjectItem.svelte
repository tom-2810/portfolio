<script>
    import { onMount } from "svelte";

    export let project;

    console.log(project);

    
</script>

<section class="item">
    <a href="" data-uid={project.uid}>
        <img src={project.data.image.url} alt="" />
        <h3>{project.data.title}</h3>
    </a>
</section>

<style>
    a:hover {
        text-decoration: underline;
    }
    section:has(a:hover) {
        scale: 1.02;
    }
    section {
        transition: 1s;
    }
    section:nth-child(1n) {
        grid-column: 1/4;
        transform: translateY(-3rem);
    }

    section:nth-child(2n) {
        grid-column: 5/9;
        transform: translateY(2rem);
    }

    section:nth-child(3n) {
        grid-column: 2/5;
        transform: translateY(2rem);
    }

    section:nth-child(4n) {
        grid-column: 6/9;
        transform: translateY(-1rem);

    }

    section:nth-child(5n) {
        grid-column: 3/8;
    }
    img {
        width: 100%;
    }
</style>
