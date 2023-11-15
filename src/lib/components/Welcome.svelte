<script>
  export let data;
  import { fade, fly } from "svelte/transition";

  import Contact from "./Contact.svelte";
</script>

<section in:fade={{ duration: 400, delay: 650 }}>
  <h1>{data.heading}</h1>
  <img src={data.image.url} alt="" />
  <h2>{data.name}</h2>
  <div class="contact">
    <Contact />
  </div>

  <div class="banner" in:fly={{ y: -200, duration: 600, delay: 700}}>
    <div class="banner-content">
      {data.banner} ! {data.banner} ! {data.banner} ! {data.banner} ! {data.banner}
      ! {data.banner} ! {data.banner} ! {data.banner} ! {data.banner}
      ! {data.banner} !
    </div>
    <div class="banner-content">
      {data.banner} ! {data.banner} ! {data.banner} ! {data.banner} ! {data.banner}
      ! {data.banner} ! {data.banner} ! {data.banner} ! {data.banner}
      ! {data.banner} !
    </div>
  </div>
</section>

<style>
  section {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 2rem;
    max-width: 70rem;
    margin: 8vh auto;
    height: 80vh;
  }
  h1 {
    grid-column: span 2;
    height: fit-content;
    text-wrap: balance;
  }
  img {
    grid-column: 4;
    width: 100%;
    border: 1px solid #303030;
  }
  h2 {
    margin: 0 auto;
    grid-column: span 4;
    height: fit-content;
  }
  .contact {
    grid-column: span 4;
  }
  .banner {
    position: absolute;
    bottom: 8.3rem;
    left: -26rem;
    rotate: 30deg;
    background-color: black;
    border: 3px solid red;
    font-size: 2.6rem;
    flex-shrink: 0;
    display: flex;
    overflow: hidden;
    gap: 1rem;
    min-width: 140%;
  }

  @supports (animation-timeline: view(block)) {
    .banner {
      animation: up linear both;
      animation-timeline: view(block);
      animation-range: cover 20% cover 100%;
    }
  }
  .banner-content {
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    animation: scroll 40s linear infinite;
    text-transform: uppercase;
    color: white;
  }

  @media only screen and (max-width: 960px) {
    .banner {
      bottom: 12rem;
    }
  }

  @media only screen and (max-width: 900px) {
    .banner {
      rotate: 0deg;
      bottom: 0;
      left: 0;
    }
  }

  @media only screen and (max-height: 780px) and (min-width: 750px) {
    .banner {
      rotate: 0deg;
      bottom: 0;
      left: 0;
    }
  }

  @media only screen and (min-height: 1030px) {
    .banner {
      rotate: 0deg;
      bottom: 0;
      left: 0;
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

  @keyframes up {
    from {
      position: fixed;
      transform: translateY(0);
    }
    to {
      position: fixed;
      transform: translateY(-130vh);
    }
  }
</style>
