<script>
  /** @type {import("@prismicio/client").Content.ImageSlice} */
  export let slice;
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  <img src={slice.primary.image.url} alt="">
</section>

<style>
  section {
    margin: 0 auto;
    width: 90%;
  }
  img {
    width: 100%;
    box-shadow: 0px 4px 15px 5px rgba(0, 0, 0, 0.3);
  }
</style>