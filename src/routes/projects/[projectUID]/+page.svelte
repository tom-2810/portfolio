<script>
    import { page } from "$app/stores";
    import Page from "./page.svelte";

    export let data;

    $: console.log(data)
</script>

{#key $page.url.pathname}
	<Page data={data} />
{/key}