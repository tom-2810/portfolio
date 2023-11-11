<script>
  import { getContext } from "svelte";

  const contact = getContext("contact-context");
</script>

<div class="contact">
  <p class="status">{contact.status[0].text}</p>

  <ul>
    {#each contact.contact_link as contactLink}
      <li>
        <a target="_blank" href={contactLink.link}>{contactLink.title}</a>
      </li>
    {/each}
  </ul>
</div>

<style>
  .contact {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    max-width: 75rem;
    margin: 0 auto;
    color: white;
  }
  p {
    text-wrap: balance;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
    list-style: none;
    grid-column: 4;
  }
  ul li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  li::after {
    content: "->";
  }
</style>
