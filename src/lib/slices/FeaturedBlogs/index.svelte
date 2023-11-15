<script>
  import BlogList from "$lib/components/BlogList.svelte";

  /** @type {import("@prismicio/client").Content.FeaturedBlogsSlice} */
  export let slice;

  import { gsap } from "gsap/dist/gsap";

  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import { onDestroy, onMount } from "svelte";

  gsap.registerPlugin(ScrollTrigger);

  onDestroy(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  });

  onMount(() => {
    document.querySelectorAll(".intro").forEach((intro) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: intro,
          start: "-2% bottom",
          end: "75% bottom",
          scrub: true,
          markers: false,
        },
      });

      tl.set(intro, {
        y: -200,
        scale: 0.3,
      });

      tl.to(intro, {
        y: 0,
        scale: 1,
      });
    });

    document.querySelectorAll("main h2").forEach((intro_heading) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: intro_heading,
          start: "-450 center",
          end: "-30 center",
          scrub: true,
          markers: false,
        },
      });

      tl.set(intro_heading, {
        y: -600,
        opacity: 0,
      });

      tl.to(intro_heading, {
        y: 0,
        opacity: 1,
      });
    });
  });
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  <div class="intro">
    <img src={slice.primary.image.url} alt="" />
  </div>

  <h2>BLOG</h2>
  <!-- <h3>Featured blog topics</h3> -->

  <BlogList items={slice.items} />

  <a href="/blog">blog overview</a>
</section>

<style>
  section {
    width: 100%;
  }
  h3 {
    max-width: 70rem;
    font-size: 1.8rem;
    margin: 0 auto 1rem auto;
  }
  a {
    display: block;
    width: fit-content;
    margin: 2rem auto 0 auto;
    font-size: 1.2rem;
  }
  a:is(:hover, :focus)::before {
    content: "{ ";
  }
  a:is(:hover, :focus)::after {
    content: " }";
  }
</style>
