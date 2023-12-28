<script>
    import { page } from "$app/stores";
    import Page from "$lib/components/PageTransition.svelte";

    export let data;
</script>

{#key $page.url.pathname}
    <Page {data} />
{/key}
