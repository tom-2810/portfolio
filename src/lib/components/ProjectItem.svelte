<script>
  export let item;

  let project = item.project ? item.project : item;

  import { gsap } from "gsap/dist/gsap";

  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import { onDestroy, onMount } from "svelte";

  gsap.registerPlugin(ScrollTrigger);

  onDestroy(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  });

  onMount(() => {
    document.querySelectorAll(".projects .item").forEach((project) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: project,
          start: "-2% bottom",
          end: "75% bottom",
          scrub: true,
          markers: false,
        },
      });

      tl.set(project, {
        y: 800,
        // scale: 0.2,
      });

      tl.to(project, {
        y: 0,
        // scale: 1,
      });
    });
  });


</script>

<div class="project">
  <div class="title">
    <span>
      {project.data.title}
      {project.data.title}
      {project.data.title}
      {project.data.title}
    </span>
    <span>
      {project.data.title}
      {project.data.title}
      {project.data.title}
      {project.data.title}
    </span>
  </div>

  <section class="item">
    <a href="" data-uid={project.uid}>
      <img src={project.data.image.url} alt="" />
      <h3>{project.data.title}</h3>
    </a>
  </section>
</div>

<style>
  .project {
    grid-column: 2/4;
  }
  .project .item {
    transition: .03s;
  }
  .project .title {
    position: absolute;
    width: 100%;
    left: 0;
  }
  .project .title {
    position: absolute;
    left: 0;
    transform: translateY(60%);
    font-size: 9rem;
    color: white;
    text-wrap: nowrap;
    flex-shrink: 0;
    display: flex;
    overflow: hidden;
    gap: 1rem;
    min-width: 100%;
  }

  .project .title span {
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    animation: scroll 40s linear infinite;
    text-transform: uppercase;
    color: white;
  }
  .project .title {
    opacity: 0;
    transition: 0.3s;
  }
  .project:has(a:hover) .title {
    opacity: 1;
  }
  a:hover {
    text-decoration: underline;
  }
  section {
    transition: .05s;
    filter: saturate(0);
  }
  section:has(a:is(:hover, :focus)) {
    filter: saturate(1);
  }

  img {
    width: 100%;
  }

  @media only screen and (max-width: 800px) {
    .project {
      grid-column: 1/5;
    }
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

  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 1rem));
    }
  }
</style>
