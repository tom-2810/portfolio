<script>
  import { getContext } from "svelte";

  const contact = getContext("contact-context");

  import { gsap } from "gsap/dist/gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import { onMount } from "svelte";

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    gsap.fromTo(
      "main .contact",
      { opacity: 0, duration: 1 },
      { opacity: 1, delay: 2.5 }
    );
  });
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
  @import url("https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@600;700&display=swap");

  .contact {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    max-width: 70rem;
    width: 100%;
    margin: 0 auto;
    margin-top: auto;
    color: white;
    font-size: 1.15rem;
    font-family: "Darker Grotesque", sans-serif;
    font-style: normal;
    font-weight: 600;
    line-height: 95%;
    letter-spacing: -0.2px;
  }
  p {
    text-wrap: balance;
    max-width: 14rem;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 6px;
    list-style: none;
    grid-column: 4;
  }
  ul li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  li::after {
    content: url("/arrow.svg");
  }

  @media only screen and (max-width: 700px) {
    .contact {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-left: 25%;
      width: unset;
      padding: 0 4px;
    }
  }
</style>
