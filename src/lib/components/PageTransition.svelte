<script>
    import { fly } from "svelte/transition";
    import { goto } from "$app/navigation";
    import { beforeUpdate, onMount } from "svelte";
    import { gsap } from "gsap/dist/gsap";

    onMount(() => {
        gsap.set(".page-transition", { top: "0vh", display: "block" });
        gsap.to(".page-transition", { top: "100vh", duration: 1, delay: .5 });

        document.querySelectorAll("a").forEach((link) => {
            // gsap.set(".page-transition", { top: "99vh", duration: 0 });
            link.addEventListener("click", function (e) {
                e.preventDefault();
                let destination = link.href;

                gsap.fromTo(
                    ".page-transition",
                    {
                        top: "100vh",
                        duration: 1,
                    },
                    {
                        top: "0vh",
                        onComplete: () => {
                            goto(destination);
                        },
                    },
                );
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
        background-color: red;
        z-index: 3;
    }
</style>
