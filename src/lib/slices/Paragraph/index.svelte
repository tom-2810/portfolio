<script>
  /** @type {import("@prismicio/client").Content.ParagraphSlice} */
  export let slice;
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  <h2>{slice.primary.heading}</h2>

  <p>{slice.primary.text}</p>
</section>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@400;700;900&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@600;700&display=swap");

  section {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin: 0 auto;
  }
  h2 {
    all: unset;
    font-family: "Playfair Display SC", serif;
    color: white;
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: -0.5px;
  }
  p {
    color: white;
    font-size: 1.2rem;
    font-family: "Darker Grotesque", sans-serif;
    font-style: normal;
    font-weight: 600;
    line-height: 95%;
    letter-spacing: -0.2px;
  }
</style>
