<script>
  export let data;
  import { fade, fly } from "svelte/transition";

  import Contact from "./Contact.svelte";
</script>

<section>
  <h1 in:fade={{ duration: 1000, delay: 1500 }}>{data.heading}</h1>
  <h2 in:fly={{ y: -550, duration: 1300, delay: 150 }}>{data.name}</h2>
  <img in:fly={{ y: -550, duration: 1300 }} src={data.image.url} alt="" />
  <a in:fly={{ y: 100, duration: 1000, delay: 1500 }} href="#contact" class="banner">
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
    width: 50%;
    margin-left: auto;
    transform: translateY(-2.5rem);
    margin-bottom: 2rem;
    filter: saturate(0);
    z-index: -1;
  }

  .banner {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: white;
    font-size: 2rem;
    flex-shrink: 0;
    display: flex;
    overflow: hidden;
    gap: .5rem;
    z-index: 2;
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
      transform: translateY(0);
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
