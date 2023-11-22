<script>
    import { SliceZone } from "@prismicio/svelte";
    import { components } from "$lib/slices";

    export let data;

    import { gsap } from "gsap/dist/gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
    import { onDestroy, onMount } from "svelte";

    gsap.registerPlugin(ScrollTrigger);

    onDestroy(() => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    });

    onMount(() => {
    ScrollTrigger.refresh();
        gsap.fromTo(
            ".project",
            { opacity: 0, y: -300 },
            { opacity: 1, y: 94, duration: 1, delay: .6 }
        );

        const banners = document.querySelectorAll(".banner");
        const project = document.querySelector(".project");

        for (let i = 0; i < banners.length; i++) {
            console.log(banners[i]);
            if (i % 2) {
                gsap.fromTo(
                    banners[i],
                    { x: 2000, opacity: 0 },
                    { x: 0, opacity: 1, duration: 1 }
                );
            } else {
                gsap.fromTo(
                    banners[i],
                    { x: -2000, opacity: 0 },
                    { x: 0, opacity: 1, duration: 1 }
                );
            }
        }
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: project,
                start: `50% ${project.offsetTop + project.offsetHeight / 2 + 55}`,
                end: `50% top`,
                scrub: 1,
                markers: false,
            },
        });

        tl.fromTo(project, {
            y: 94,
        },
        {y: -30});
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
        <div>
            <SliceZone slices={data.data.slices} {components} />
        </div>
    </div>
</section>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@400;700;900&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Noto+Serif+Display:wght@500&display=swap");

    .content {
        width: 100%;
        max-width: 70rem;
        margin: 0 auto;
        overflow: hidden;
    }
    .content > div {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        width: 50%;
        margin: 0 auto;
    }
    .project {
        position: absolute;
        width: 87%;
        max-width: 57rem;
        margin: 0 auto;
        transform: translateY(4rem);
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
        margin-bottom: 10rem;
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
