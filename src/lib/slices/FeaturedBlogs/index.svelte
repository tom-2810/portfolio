<script>
  import BlogList from "$lib/components/BlogList.svelte";

  /** @type {import("@prismicio/client").Content.FeaturedBlogsSlice} */
  export let slice;

  import { gsap } from "gsap/dist/gsap";

  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import { onMount } from "svelte";

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    document.querySelectorAll(".intro").forEach((intro) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: intro,
          start: "-2% bottom",
          end: "75% bottom",
          scrub: 1,
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

  <BlogList items={slice.items} />

  <a href="/blog">blog overview</a>
</section>

<style>
  section {
    width: 100%;
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
