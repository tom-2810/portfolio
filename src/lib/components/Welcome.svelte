<script>
  export let data;

  import Contact from "./Contact.svelte";
</script>

<h1>{data.heading}</h1>
<img src={data.image.url} alt="" />
<h2>{data.name}</h2>
<Contact />
