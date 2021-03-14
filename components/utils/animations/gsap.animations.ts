import gsap from "gsap";

export const fixScrollToTop = (time: number) => {
    const tl = gsap.timeline();

    if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);

    tl.to("body", {
        overflowY: "hidden",
        duration: time,
    });

    tl.to("body", {
        overflowY: "initial",
    });
};



export const fixScrollToTopToggle = (time: number) => {
    const tl = gsap.timeline();

    if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);

    tl.to("body", {
        overflowY: "hidden",
        duration: time,
    });

    tl.to("body", {
        overflowY: "initial",
    });
};