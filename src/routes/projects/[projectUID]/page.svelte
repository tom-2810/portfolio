<script>
    import { SliceZone } from "@prismicio/svelte";
    import { components } from "$lib/slices";

    export let data;

    import { gsap } from "gsap/dist/gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
    import { onMount, afterUpdate } from "svelte";

    gsap.registerPlugin(ScrollTrigger);

    onMount(() => {
        console.log('test')
        gsap.fromTo(
            ".project",
            { opacity: 0, y: -300 },
            { opacity: 1, y: 48, duration: 1, delay: 1.3 },
        );

        gsap.fromTo(
            ".content",
            { opacity: 0 },
            { opacity: 1, y: 0, delay: 0.3 },
        );

        const banners = document.querySelectorAll(".banner");

        for (let i = 0; i < banners.length; i++) {
            if (i % 2) {
                gsap.fromTo(
                    banners[i],
                    { x: 2000, opacity: 0 },
                    { x: 0, opacity: 1, duration: 1 },
                );
            } else {
                gsap.fromTo(
                    banners[i],
                    { x: -2000, opacity: 0 },
                    { x: 0, opacity: 1, duration: 1 },
                );
            }
        }
    });
</script>

<section>
    <div class="hero">
        <div class="project">
            <img src={data.data.image.url} alt="" />
            <h1>{data.data.title}</h1>
        </div>
        {#each Array(4) as _, i}
            <div class="banner index{i}">
                <div class="banner-content">
                    {data.data.title}
                    {data.data.title}
                    {data.data.title}
                    {data.data.title}
                </div>
                <div class="banner-content">
                    {data.data.title}
                    {data.data.title}
                    {data.data.title}
                    {data.data.title}
                </div>
            </div>
        {/each}
    </div>

    <div class="content">
        <a href="https://portfolio-of-tom.vercel.app/projects/vervoerregio-amsterdam"
            >http://localhost:5173/projects/vervoerregio-amsterdam</a
        >
        <a href="https://portfolio-of-tom.vercel.app/projects/schiphol"
            >http://localhost:5173/projects/schiphol</a
        >
        <div>
            <SliceZone slices={data.data.slices} {components} />
        </div>
    </div>
</section>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@400;700;900&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Noto+Serif+Display:wght@500&display=swap");

    .project {
        position: absolute;
        width: 87%;
        max-width: 57rem;
        margin: 0 auto;
        /* transform: translateY(3rem); */
    }
    img {
        width: 100%;
        box-shadow: 0px 4px 15px 5px rgba(0, 0, 0, 0.3);
    }
    h1 {
        font-size: 1rem;
    }
    .hero {
        display: flex;
        align-items: center;
        justify-content: end;
        flex-direction: column;
        top: 4rem;
        left: 0;
        overflow: hidden;
        width: 100%;
        height: calc(4 * 13rem);
        margin-bottom: 6rem;
    }
    .banner {
        flex-shrink: 0;
        display: flex;
        overflow: hidden;
        gap: 1rem;
        width: 100%;
        height: 13rem;
        z-index: -1;
    }
    .banner-content {
        position: relative;
        display: flex;
        flex-direction: row;
        flex-shrink: 0;
        animation: scroll 50s linear infinite;
        text-transform: uppercase;
        color: white;
        font-family: "Playfair Display SC", serif;
        font-size: 15rem;
        font-weight: 900;
        align-items: center;
        opacity: 0.03;
    }
    .banner:nth-child(odd) .banner-content {
        animation-direction: reverse;
    }
    @media only screen and (max-width: 840px) {
        .hero {
            height: calc(3 * 13rem);
        }
        .content > div {
            width: 95%;
        }
    }
    @media only screen and (max-width: 470px) {
        .hero {
            margin-bottom: 20rem;
            height: calc(4 * 5rem);
        }
        .banner {
            height: 5rem;
        }
        .banner-content {
            font-size: 6rem;
            height: 5rem;
        }
        .project {
            transform: translateY(4rem);
        }
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
