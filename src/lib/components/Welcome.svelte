<script>
  export let data;

  import Contact from "./Contact.svelte";

  import { gsap } from "gsap/dist/gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import { onDestroy, onMount } from "svelte";

  gsap.registerPlugin(ScrollTrigger);

  onDestroy(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  });

  onMount(() => {
    const banner = document.querySelector(".banner")
    console.log(banner.offsetTop)
    gsap.fromTo(
      "h2",
      { opacity: 0, y: -150 },
      { opacity: 1, y: 0, duration: 2, delay: 0.2 }
    );

    gsap.fromTo(
      "img",
      { opacity: 0, y: -150 },
      { opacity: 1, y: 0, duration: 2 }
    );

    gsap.fromTo("h1", { opacity: 0, duration: 1 }, { opacity: 1, delay: 2.5 });

    gsap.fromTo(
      ".banner",
      { opacity: 0, x: 2000, duration: 1 },
      { opacity: 1, x: 0, rotate: "-5deg", delay: 3 }
    );

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".banner",
        start: `50% ${(banner.offsetTop + banner.offsetHeight / 2)}`,
        end: `50% top}`,
        toggleActions: "restart pause reverse pause",
        scrub: 1.5,
        markers: false,
      },
    });
    tl.to(".banner", {
      y: -150,
    });
  });
</script>

<section>
  <h1>{data.heading}</h1>
  <h2>{data.name}</h2>
  <img src={data.image.url} alt="" />
  <a href="#contact" class="banner">
    <div class="banner-content">
      {data.banner}
      {data.banner}
      {data.banner}
      {data.banner}
      {data.banner}
      {data.banner}
      {data.banner}
      {data.banner}
    </div>
    <div class="banner-content">
      {data.banner}
      {data.banner}
      {data.banner}
      {data.banner}
      {data.banner}
      {data.banner}
      {data.banner}
      {data.banner}
    </div>
  </a>
  <Contact />
</section>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Noto+Serif+Display:wght@500&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@600;700&display=swap");

  section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    max-width: 70rem;
    width: 100%;
    margin: 4rem auto;
    min-height: max-content;
    max-height: 42rem;
  }
  h1 {
    width: 10rem;
    font-size: 1.15rem;
    font-family: "Darker Grotesque", sans-serif;
    font-style: normal;
    font-weight: 600;
    line-height: 90%;
    letter-spacing: -0.4px;
  }
  h2 {
    all: unset;
    font-size: clamp(2rem, 14vw, 9.4rem);
    width: min-content;
    color: white;
    font-family: "Noto Serif Display", serif;
    font-style: normal;
    font-weight: 500;
    line-height: 85%;
    letter-spacing: 3px;
    text-transform: uppercase;
  }
  img {
    position: relative;
    width: 50%;
    margin-left: auto;
    top: -2.5rem;
    margin-bottom: 2rem;
    filter: saturate(0);
    z-index: -1;
  }

  .banner {
    position: relative;
    left: -60%;
    bottom: 6.5rem;
    rotate: -5deg;
    width: 240%;
    background-color: white;
    font-size: 2rem;
    flex-shrink: 0;
    display: flex;
    overflow: hidden;
    gap: 0.5rem;
    z-index: 1;
  }
  .banner-content {
    position: relative;
    top: -2px;
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    animation: scroll 30s linear infinite;
    text-transform: uppercase;
    font-family: "Darker Grotesque", sans-serif;
    font-weight: 700;
    color: black;
  }

  @media only screen and (max-width: 700px) {
    h1,
    h2 {
      margin-left: 4px;
    }
    img {
      width: 100%;
      top: 0;
    }
    .banner {
      bottom: 3rem;
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
