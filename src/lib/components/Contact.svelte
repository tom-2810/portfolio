<script>
  import { getContext } from "svelte";

  const contactLinks = getContext("contact-context");
</script>

{#each contactLinks as contactLink}
  <a target="_blank" href={contactLink.link}>{contactLink.title}</a>
{/each}
