<nav>
    <ul>
        <li>
            <a href="#">home</a>
        </li>
        <li>
            <a href="#">projects</a>
        </li>
        <li>
            <a href="#">blog</a>
        </li>
        <li>
            <a href="#">contact</a>
        </li>
    </ul>
</nav>

<style>
    nav {
        width: 100%;
        max-width: 75rem;
        margin: 0 auto;
        font-size: 1.8rem;
    }

    ul {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        width: 100%;
        list-style: none;
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
</style>
