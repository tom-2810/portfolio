<script>
  export let item;

  let blog = item.blog ? item.blog : item;

  let cursor_pos = { x: 0, y: 0 };

  function handleMove(event) {
    cursor_pos.x = event.clientX;
    cursor_pos.y = event.clientY;
  }
</script>

<li>
  <a href="#" on:pointermove={handleMove}>
    <img
      src={blog.data.image.url}
      alt=""
      style="left: {cursor_pos.x + 20}px; top: {cursor_pos.y + 20}px;"
    />
    <h3>{blog.data.title}</h3>
  </a>
</li>

<style>
  li img {
    position: fixed;
    display: none;
    pointer-events: none;
    min-height: 10rem;
    height: 100%;
    width: 100%;
    max-height: 12rem;
    max-width: 18rem;
    object-fit: cover;
    background-color: white;
    z-index: 1;
  }
  :is(a:hover, a:focus) img {
    display: block;
  }
  a {
    all: unset;
    cursor: pointer;
    display: block;
  }
  h3 {
    font-size: clamp(1.2rem, 5vw, 2rem);
    width: 100%;
    max-width: 70rem;
    margin: 0 auto;
    padding: 1rem 0;
    overflow: hidden;
  }
  li {
    transition: color, background-color 0.5s;
    color: white;
    border-top: 1px solid #303030;
    font-size: 1.8rem;
  }
  li:last-of-type {
    border-bottom: 1px solid #303030;
  }
  li:has(a:is(:hover, :focus)) {
    color: black;

    transition: 0s;
    background-color: rgb(255, 255, 255);
  }
  h3 {
    transition: 0.5s;
  }
  a:is(:hover, :focus) h3 {
    transform: translateX(8px);
    transition: 0s;
  }
</style>
