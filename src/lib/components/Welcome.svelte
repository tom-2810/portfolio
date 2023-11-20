<script>
  export let data;
  import { fade, fly } from "svelte/transition";

  import Contact from "./Contact.svelte";

  import { gsap } from "gsap/dist/gsap";

  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import { onDestroy, onMount } from "svelte";

  gsap.registerPlugin(ScrollTrigger);

  onDestroy(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  });

  onMount(() => {
    let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".banner",
          start: "5% center",
          end: "170% center",
          scrub: true,
          markers: false,
        },
      });

      tl.to(".banner", {
        top: 200,
      });
  });

</script>

<section>
  <h1>{data.heading}</h1>
  <h2>{data.name}</h2>
  <img src={data.image.url} alt="" />
  <div class="banner">
    <div class="banner-content">
      {data.banner} ! {data.banner} ! {data.banner} ! {data.banner} ! {data.banner}
      ! {data.banner} ! {data.banner} !
    </div>
    <div class="banner-content">
      {data.banner} ! {data.banner} ! {data.banner} ! {data.banner} ! {data.banner}
      ! {data.banner} ! {data.banner} !
    </div>
  </div>
  <Contact />
</section>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Noto+Serif+Display:wght@500&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@600;700&display=swap");

  section {
    position: relative;
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
    width: 50%;
    margin-left: auto;
    transform: translateY(-2.3rem);
    margin-bottom: 7rem;
    filter: saturate(0);
    z-index: -1;
  }
  .banner {
    position: absolute;
    bottom: 7rem;
    left: -30rem;
    rotate: -5deg;
    background-color: white;
    font-size: 2.5rem;
    flex-shrink: 0;
    display: flex;
    overflow: hidden;
    gap: 1rem;
    height: 3.6rem;
    min-width: 200%;
    transition: .1s;
  }
  .banner-content {
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    animation: scroll 40s linear infinite;
    text-transform: uppercase;
    font-family: "Darker Grotesque", sans-serif;
    font-weight: 700;
    color: black;
  }
  @media only screen and (max-width: 850px) {
    .banner {
      bottom: 12rem;
    }
  }

  @media only screen and (max-width: 700px) {
    h1,
    h2 {
      margin-left: 8px;
    }
    img {
      width: 100%;
      transform: translateY(0);
      margin-top: 2rem;
    }
    .banner {
      left: -1rem;
      bottom: 6rem;
    }
  }
  @media only screen and (max-width: 550px) {
    .banner {
      bottom: 12rem;
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
