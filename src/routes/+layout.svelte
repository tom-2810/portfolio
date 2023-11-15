<script>
  import Footer from "../lib/components/Footer.svelte";
  import Navigation from "../lib/components/Navigation.svelte";
  import { onMount, setContext } from "svelte";
  import global from "../global.css";

  export let data;

  setContext("contact-context", data);

  import { gsap } from "gsap/dist/gsap";

  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    document.querySelectorAll(".intro").forEach((intro) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: intro,
          start: "top bottom",
          end: "75% bottom",
          scrub: true,
          markers: true,
        },
      });

      tl.set(intro, {
        y: 200,
        scale: 0.5,
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
          start: "-300% center",
          end: "-20% center",
          scrub: true,
          markers: true,
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

    document.querySelectorAll(".projects .item").forEach((project) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: project,
          start: "top bottom",
          end: "75% bottom",
          scrub: true,
          markers: true,
        },
      });

      tl.set(project, {
        y: 200,
        scale: 0.5,
      });

      tl.to(project, {
        y: 0,
        scale: 1,
      });
    });

    
  });
</script>

<div class="background">
  <div class="columns">
    <div />
    <div />
    <div />
    <div />
  </div>
</div>
<header>
  <Navigation />
</header>

<main>
  <slot />
</main>
<footer>
  <Footer />
</footer>

<style>
  header {
    position: fixed;
    top: 0;
    width: 100%;
    border-bottom: 1px solid #303030;
    background-color: rgb(32, 32, 32);
    background-image: url(./Gradient.jpg);
    background-size: cover;
    z-index: 2;
  }
  main {
    display: flex;
    flex-direction: column;
    gap: 20rem;
    margin: 4rem 0 40rem;
  }
  footer {
    margin-bottom: 40vh;
  }
  .background {
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100%;
    background-image: url(./Gradient.jpg);
    background-size: cover;

    z-index: -1;
  }
  .columns {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    max-width: 70rem;
  }
  .columns > div {
    height: 100%;
    border-left: 1px solid #303030;
  }
  .columns > div:last-of-type {
    border-right: 1px solid #303030;
  }
</style>
