<script>
  import Footer from "../lib/components/Footer.svelte";
  import Navigation from "../lib/components/Navigation.svelte";
  import { setContext } from "svelte";
  import global from "../global.css";

  export let data;

  setContext("contact-context", data.contact_link);
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
    border-bottom: 1px solid rgb(56, 56, 56);
    background-color: rgb(32, 32, 32);
  }
  main {
    display: flex;
    flex-direction: column;
    gap: 50rem;
    margin-top: 4rem;
  }
  .background {
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100%;
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
    border-left: 1px solid rgb(56, 56, 56);
  }
  .columns > div:last-of-type {
    border-right: 1px solid rgb(56, 56, 56);
  }
</style>
