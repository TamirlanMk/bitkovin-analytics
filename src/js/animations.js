gsap.registerPlugin(ScrollSmoother, ScrollTrigger);


let laptopScreen = window.matchMedia('(min-width:992px)')

if (laptopScreen.matches) {
    ScrollSmoother.create({
        smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
        effects: true, // looks for data-speed and data-lag attributes on elements
    });

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

    const offersTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.offers',
            start: 'top 30%',
        }
    });

    offersTimeline
        .from('.offers__back', {
            scale: 0.8,
            autoAlpha: 0,
            rotate: 22,
            ease: "power2.out",
            duration: 2
        })


    const testimonialsTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.testimonials',
            start: 'top 30%',
        }
    });

    testimonialsTimeline
        .from('.testimonials__back', {
            scale: 0.8,
            autoAlpha: 0,
            rotate: 15,
            ease: "power2.out",
            duration: 2
        })

    const feedbackTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.feedback',
            start: 'top 30%',
        }
    });

    feedbackTimeline
        .from('.feedback__back', {
            scale: 0.8,
            autoAlpha: 0,
            ease: "power2.out",
            duration: 2
        })

    gsap
        .from('.lead-magnet__inner', {
            scrollTrigger: {
                trigger: '.advantages',
                start: 'bottom 80%',
                end: '+=400',
                scrub: true
            },
            scale: 0.8,
            xPercent: 120
        })
}

let leadMagnet = document.querySelector('.lead-magnet__inner')

let leadMagnetHover = gsap
    .timeline({
        paused: true,
    })
    .to('.lead-magnet__image', {
        autoAlpha: 0,
        ease: "power2.out",
        duration: 0.25
    })
    .to('.lead-magnet__text', {
        autoAlpha: 1,
        ease: "power2.out",
        duration: 0.25
    })

leadMagnet.onmouseenter = () => {
    leadMagnetHover.play()
}

leadMagnet.onmouseleave = () => {
    leadMagnetHover.reverse()
}

