<script>
  import Footer from "../lib/components/Footer.svelte";
  import Navigation from "../lib/components/Navigation.svelte";
  import { setContext } from "svelte";

  export let data;

  setContext("contact-context", data.contact_link);
</script>

<header>
  <Navigation />
</header>

<slot />

<footer>
  <Footer />
</footer>
