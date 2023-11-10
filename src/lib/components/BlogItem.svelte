<script>
    export let blog;

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
            <h4>{blog.data.title}</h4>
            <span>read</span>
        </div>
    </a>
</li>

<style>
    li img {
        position: fixed;
        display: none;
        pointer-events: none;
        height: 15rem;
        padding: 0.7rem;
        background-color: rgb(255, 234, 208);
        border: 1px solid black;
        z-index: 1;
    }
    :is(a:hover, a:focus) img {
        display: block;
    }
    a {
        all: unset;
        cursor: pointer;
        display: block;
        padding: 1rem 0;
    }
    a > div {
        display: flex;
        flex-direction: row;
        width: 100%;
        max-width: 75rem;
        margin: 0 auto;
        overflow: hidden;
    }
    a > div span {
        margin-left: auto;
    }
    li {
        transition: color, background-color 0.5s;
        color: white;
        border-top: 1px solid rgb(56, 56, 56);
        font-size: 1.8rem;
    }
    li:last-of-type {
        border-bottom: 1px solid rgb(56, 56, 56);
    }
    li:has(a:is(:hover,:focus)) {
        color: black;

        transition: 0s;
        background-color: rgb(255, 255, 255);
    }
    h4 {
        transition: 0.5s;
    }
    a:is(:hover,:focus) h4 {
        transform: translateX(8px);
        transition: 0s;
    }
    a:is(:hover,:focus) span::before {
        content: "{ ";
    }
    a:is(:hover,:focus) span::after {
        content: " }";
    }
</style>
