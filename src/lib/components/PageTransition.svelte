<script>
    import { fly } from "svelte/transition";
    import { goto } from "$app/navigation";
    import { beforeUpdate, onMount } from "svelte";
    import { page } from "$app/stores";
    import { gsap } from "gsap/dist/gsap";

    onMount(() => {
        gsap.set(".page-transition", { top: "0vh", display: "block" });
        gsap.to(".page-transition", { top: "-100vh", duration: 1, delay: 0.3 });

        document.querySelectorAll("a").forEach((link) => {
            // gsap.set(".page-transition", { top: "99vh", duration: 0 });
            link.addEventListener("click", function (e) {
                if (link.href !== $page.url.href) {
                    e.preventDefault();
                    let destination = link.href;

                    gsap.fromTo(
                        ".page-transition",
                        {
                            top: "100vh",
                            duration: 0.6,
                        },
                        {
                            top: "0vh",
                            onComplete: () => {
                                goto(destination);
                            },
                        },
                    );
                }
            });
        });
    });
</script>

<div class="page-transition">
    <slot />
</div>

<style>
    div {
        display: none;
        position: fixed;
        top: 0vh;
        height: 100vh;
        width: 100%;
        background-color: rgb(49, 49, 49);
        z-index: 3;
    }
</style>
