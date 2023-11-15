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
      loading="eager"
    />
    <div>
      <div>
        <h4>{blog.data.title}</h4>
      </div>
      <div />
      <div>
        <span>read</span>
      </div>
    </div>
  </a>
</li>

<style>
  li img {
    position: fixed;
    display: none;
    pointer-events: none;
    height: 13rem;
    padding: 0.5rem;
    background-color: #303030;
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
  a > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    width: 100%;
    max-width: 70rem;
    margin: 0 auto;
    overflow: hidden;
  }
  a > div > div:first-of-type {
    grid-column: 1/3;
  }
  a > div > div:last-of-type {
    border-right: 1px solid #303030;
    grid-column: 4;
  }
  a > div > div {
    border-left: 1px solid #303030;
    padding: 1rem 0;
  }
  a > div span {
    float: right;
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
  h4 {
    transition: 0.5s;
  }
  a:is(:hover, :focus) h4 {
    transform: translateX(8px);
    transition: 0s;
  }
  a:is(:hover, :focus) span::before {
    content: "{ ";
  }
  a:is(:hover, :focus) span::after {
    content: " }";
  }
</style>
