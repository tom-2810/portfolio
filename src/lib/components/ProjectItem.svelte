<script>
  export let item;

  let project = item.project ? item.project : item;

  import { gsap } from "gsap/dist/gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import { onMount } from "svelte";

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    document.querySelectorAll(".projects .item").forEach((project) => {
      project.style.opacity = 0;

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: project,
          start: "-150 bottom",
          end: "40% 90%",
          toggleAction: "restart pause reverse pause",
          scrub: 1,
          markers: false,
        },
      });

      tl.set(project, {
        y: 200,
        opacity: 0,
        scale: 0.9,
      });

      tl.to(project, {
        y: 0,
        opacity: 1,
        scale: 1,
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
    <a href="/projects/{project.uid}" data-uid={project.uid}>
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
    transition: 0.04s;
  }
  .project .title {
    position: absolute;
    width: 100%;
    left: 0;
    pointer-events: none;
    z-index: 1;
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
    z-index: 0;
  }
  .project:has(a:hover) .title {
    opacity: 1;
    transition: 0s;
    z-index: 1;
  }
  a:hover {
    text-decoration: underline;
  }
  section {
    transition: 0.05s;
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
