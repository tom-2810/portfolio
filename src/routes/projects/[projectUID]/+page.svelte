<script>
    import { page } from "$app/stores";
    import Page from "./page.svelte";

    export let data;

    console.log('doe t')
</script>

{#key $page.url.pathname}
    <Page {data} />
{/key}
