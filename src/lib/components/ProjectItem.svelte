<script>
  export let item;

  let project = item.project ? item.project : item;
</script>

<section class="item">
  <a href="" data-uid={project.uid}>
    <img src={project.data.image.url} alt="" />
    <h3>{project.data.title}</h3>
  </a>
</section>

<style>
  a:hover {
    text-decoration: underline;
  }
  section {
    transition: 1s;
    animation: reveal linear both;
    animation-timeline: view(block);
    animation-range: cover 0% cover 40%;
    filter: saturate(0);
  }
  section:has(a:is(:hover, :focus)) {
    filter: saturate(1);
  }

  img {
    width: 100%;
  }
  @keyframes reveal {
    0% {
      transform: translateY(120%);
      scale: 0.4;
    }
    80% {
      scale: 1;
    }
    100% {
      transform: translateY(0);
      scale: 1;
    }
  }
</style>
