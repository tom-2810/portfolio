<script>
  import Footer from "../lib/components/Footer.svelte";
  import Navigation from "../lib/components/Navigation.svelte";
  import PageTransitions from "$lib/components/PageTransitionsContainer.svelte";
  import {
    afterUpdate,
    beforeUpdate,
    onDestroy,
    onMount,
    setContext,
  } from "svelte";
  import global from "../global.css";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import { page } from '$app/stores'

  export let data;

  setContext("contact-context", data);

  // refresh start and end positions of the scrolltrigger,
  // wait 10 milleseconds for load animations
  afterUpdate(() => {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 10);
  });
</script>

<PageTransitions refresh={$page.url.pathname} />
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
    position: sticky;
    top: 0;
    width: 100%;
    border-bottom: 1px solid #303030;
    background-color: rgb(0, 0, 0);
    background-image: url(/Gradient.jpg);
    background-size: cover;
    z-index: 2;
  }
  main {
    display: flex;
    flex-direction: column;
    gap: 40rem;
    margin: 0 0 40rem;
    overflow-x: hidden;
  }
  footer {
    margin-bottom: 5rem;
  }
  .background {
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100%;
    background-image: url(/Gradient.jpg);
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
