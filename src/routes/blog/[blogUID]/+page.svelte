<script>
    import { SliceZone } from "@prismicio/svelte";
    import { components } from "$lib/slices";

    export let data;

    import { gsap } from "gsap/dist/gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
    import { onMount } from "svelte";

    gsap.registerPlugin(ScrollTrigger);

    let date =
        data.last_publication_date != undefined
            ? data.last_publication_date.split("-")
            : data.primary.topic.last_publication_date;

    let year = date[0];
    let month = date[1];
    let day = date[2].slice(0, 2);

    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    let fullMonth = monthNames[month - 1];

    onMount(() => {
        gsap.fromTo(
            ".hero",
            { opacity: 0 },
            { opacity: 1, y: 0 }
        );
        gsap.fromTo(
            ".content",
            { opacity: 0 },
            { opacity: 1, y: 0, delay: .3 }
        );
    });
</script>

<section>
    <div class="hero">
        <img src={data.data.image.url} alt="" />
        <h1>{data.data.heading}</h1>
        <span>{day} {fullMonth}, {year}</span>
    </div>

    <div class="content">
        <div>
            <SliceZone slices={data.data.slices} {components} />
        </div>
    </div>
</section>

<style>
    .hero {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 70rem;
        margin: 4rem auto 4rem auto;
        color: white;
    }
    .hero h1 {
        font-size: clamp(1.5rem, 8vw, 2.5rem);
        max-width: 55rem;
        margin-top: 1rem;
        margin-bottom: 0.5rem;
        text-wrap: balance;
    }
    .hero img {
        width: 100%;
        aspect-ratio: 2/1;
        object-fit: cover;
    }

    @media only screen and (max-width: 980px) {
        .hero {
            margin: 0 auto 4rem auto;
        }
    }
</style>
