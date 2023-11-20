<script>
    import { page } from '$app/stores';
</script>

<nav>
    <ul>
        <li>
            <a href="/" class:active="{$page.url.pathname == "/"}">home</a>
        </li>
        <li>
            <a class="desktop" href="/projects" class:active="{$page.url.pathname.includes("/projects")}">projects</a>
        </li>
        <li>
            <a class="desktop" href="/blog" class:active="{$page.url.pathname.includes("/blog")}">blog</a>
        </li>
        <li>
            <a class="desktop" href="#contact">contact</a>
        </li>
        
        <li>
            <p class="mobile">test</p>
        </li>
    </ul>
</nav>

<style>
    .desktop {
        display: block;
    }
    .mobile {
        display: none;
    }
    ul li:last-child {
        display: none;
    }
    nav {
        width: 100%;
        max-width: 70rem;
        margin: 0 auto;
        font-size: 1.8rem;
    }

    ul {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        border-right: 1px solid #303030;
        width: 100%;
        list-style: none;
        color: white;
    }
    ul > li {
        padding: 1rem 0 0 0;
        border-left: 1px solid #303030;
        width: 100%;
        padding: 2rem 0 0 0;
    }
    ul > li:last-of-type {
        border-right: 1px solid #303030;
    }
    a:is(:hover, :focus)::before {
        content: "{ ";
    }
    a:is(:hover, :focus)::after {
        content: " }";
    }
    @media only screen and (max-width: 800px) {
    .desktop {
      display: none;
    }
    .mobile {
        display: block;
    }
    ul :nth-child(2) {
        display: none;
    }
    li {
        font-size: 1.3rem;
    }
    ul li:last-child {
        display: block;
    }
  }
</style>
