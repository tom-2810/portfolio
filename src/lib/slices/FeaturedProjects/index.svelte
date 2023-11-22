<script>
  import ProjectList from "$lib/components/ProjectList.svelte";

  /** @type {import("@prismicio/client").Content.FeaturedProjectsSlice} */
  export let slice;

  // import { gsap } from "gsap/dist/gsap";

  // import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  // import { onDestroy, onMount } from "svelte";

  // gsap.registerPlugin(ScrollTrigger);

  // onDestroy(() => {
  //   ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  // });

  // onMount(() => {
  //   document.querySelectorAll(".intro").forEach((intro) => {
  //     let tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: intro,
  //         start: "-2% bottom",
  //         end: "75% bottom",
  //         scrub: 1,
  //         markers: false,
  //       },
  //     });

  //     tl.set(intro, {
  //       y: -200,
  //       scale: 0.3,
  //     });

  //     tl.to(intro, {
  //       y: 0,
  //       scale: 1,
  //     });
  //   });
  // });
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  <!-- <div class="intro">
    <img src={slice.primary.image.url} alt="" />
  </div> -->

  <h2>PROJECTS</h2>

  <ProjectList items={slice.items} />

  <a href="/projects">projects overview</a>
</section>

<style>
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
