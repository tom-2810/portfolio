<script>
  export let data;

  import Contact from "./Contact.svelte";
</script>

<section>
  <h1>{data.heading}</h1>
  <img src={data.image.url} alt="" />
  <h2>{data.name}</h2>
  <div class="contact">
    <Contact />
  </div>
</section>

<style>
  section {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 2rem;
    max-width: 75rem;
    margin: 8vh auto;
    height: 80vh;
  }
  h1 {
    grid-column: span 2;
    height: fit-content;
    /* text-wrap: balance; */
  }
  img {
    grid-column: 4;
    width: 100%;
  }
  h2 {
    margin: 0 auto;
    grid-column: span 4;
    height: fit-content;
  }
  .contact {
    grid-column: span 4;
  }
</style>
