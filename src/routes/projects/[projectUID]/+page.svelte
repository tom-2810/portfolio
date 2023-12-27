<script>
    import { page } from "$app/stores";
    import Page from "./page.svelte";

    export let data;

    $: console.log(data)
</script>

{#key data.uid}
    <Page {data} />
{/key}
