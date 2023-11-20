<script>
  /** @type {import("@prismicio/client").Content.TextBlockSlice} */
  export let slice;

  import { gsap } from "gsap/dist/gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { onMount } from "svelte";

gsap.registerPlugin(ScrollTrigger);

onMount(() => {
  document.querySelectorAll(".text_block").forEach((textBlock) => {

    textBlock.style.opacity = 0;

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: textBlock,
          start: "150% bottom",
          end: "110% 75%",
          scrub: true,
          markers: false,
        },
      });

      tl.set(textBlock, {
        opacity: 0
      });

      tl.to(textBlock, {
        opacity: 1
      });
    });
})
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  <p class="text_block">{slice.primary.text}</p>
</section>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@600;700&display=swap");

  section {
    width: 80%;
    max-width: 40rem;
    margin: 0 auto;
    color: white;
    font-size: clamp(1.2rem, 5vw, 2.5rem);
    font-family: "Darker Grotesque", sans-serif;
    font-style: normal;
    font-weight: 600;
    line-height: 90%;
    letter-spacing: -0.4px;
    text-align: center;
    text-wrap: balance;
  }
</style>