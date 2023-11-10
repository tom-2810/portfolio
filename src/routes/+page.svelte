<script>
  import { SliceZone } from '@prismicio/svelte'
  import Welcome from "../lib/components/Welcome.svelte";
  import { components } from '$lib/slices' 

  export let data;
</script>

<Welcome {data} />

<SliceZone slices={data.slices} {components} />