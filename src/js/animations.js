gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

ScrollSmoother.create({
    smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
    effects: true, // looks for data-speed and data-lag attributes on elements
    smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});

let laptopScreen = window.matchMedia('(min-width:992px)')

if (laptopScreen.matches) {

    gsap.to('.hero__spiral', {
        scale: 1,
        autoAlpha: 1,
        duration: 1,
    });

    gsap.to('.hero__star', {
        rotate: 0,
        autoAlpha: 1,
        duration: 1,
    });

    gsap.to('.hero__bubble', {
        scale: 1,
        autoAlpha: 1,
        duration: 1,
    });

    gsap.from('.hero__footer .btn', {
        autoAlpha: 0,
        y: 100,
        stagger: 0.2,
        delay: 1
    });

    gsap.from('.hero__title span:not([class])', {
        x: -100,
        stagger: 0.2,
        autoAlpha: 0,
        delay: 0.1
    });

    gsap.from('.hero__title span.numbers', {
        y: 100,
        stagger: 0.2,
        autoAlpha: 0,
        delay: 0.7
    });

    const advantagesTimelines = gsap.timeline({
        scrollTrigger: {
            trigger: '.advantages',
            start: 'top 40%',
            // markers: true
        }
    });

    advantagesTimelines
        .from('.advantages__back', {
            scale: 0.8,
            autoAlpha: 0,
            rotate: 45,
            ease: "power2.out",
            duration: 2
        })
        .from('.advantages__item', {
            scale: 0.5,
            x: -100,
            stagger: 0.1,
            ease: "power2.out",
            autoAlpha: 0
        }, '-=1.7');
}

