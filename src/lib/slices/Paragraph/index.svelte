<script>
  /** @type {import("@prismicio/client").Content.ParagraphSlice} */
  export let slice;

  import { gsap } from "gsap/dist/gsap";

  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import { onMount } from "svelte";

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    document.querySelectorAll(".paragraph").forEach((paragraph) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: paragraph,
          start: "-5% bottom",
          end: "200 bottom",
          toggleAction: "restart pause reverse pause",
          scrub: 1.5,
          markers: false,
        },
      });

      tl.set(paragraph, {
        opacity: 0,
      });

      tl.to(paragraph, {
        opacity: 1,
      });
    });
  });
</script>

<section
  class="paragraph"
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  <h2>{slice.primary.heading}</h2>

  <p>{slice.primary.text}</p>
</section>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@600;700&display=swap");

  section {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    /* margin: 0 auto; */
    max-width: 57rem;
    /* grid-column: span 3; */
  }
  h2 {
    all: unset;
    font-family: "Playfair Display", serif;
    color: white;
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: -0.5px;
  }
  p {
    color: white;
    font-size: clamp(1.2rem, 4vw, 1.6rem);
    font-family: "Darker Grotesque", sans-serif;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
    letter-spacing: -0.1px;
  }
</style>
