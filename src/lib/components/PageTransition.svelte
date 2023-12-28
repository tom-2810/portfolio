<script>
    import { fly } from "svelte/transition";
    import { goto } from "$app/navigation";
    import { beforeUpdate, onMount } from "svelte";
    import { page } from "$app/stores";
    import { gsap } from "gsap/dist/gsap";

    $: currentURL = "";
    onMount(() => {
        currentURL = window.location;
        gsap.fromTo(
            ".page-transition",
            { top: "0vh", display: "block" },
            { top: "-100vh", duration: 0.6, delay: 1, ease: "power1.inOut" },
        );
        // gsap.set(".page-transition", { top: "0vh", display: "block" });
        // gsap.to(".page-transition", { top: "-100vh", duration: .8, delay: 1 });

        document.querySelectorAll("a").forEach((link) => {
            // gsap.set(".page-transition", { top: "99vh", duration: 0 });
            link.addEventListener("click", function (e) {
                // console.log(link.href + " " + currentURL);
                e.preventDefault();
                let destination = link.href;
                console.log(currentURL);

                if (destination == currentURL) {
                    console.log("nope");
                } else {
                    gsap.fromTo(
                        ".page-transition",
                        {
                            top: "100vh",
                            delay: 3,
                            duration: 0.4,
                            ease: "power1.inOut",
                        },
                        {
                            top: "0vh",
                            delay: 0.3,
                            duration: 0.5,
                            ease: "power1.inOut",
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
