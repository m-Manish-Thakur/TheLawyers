const init = () => {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    smartphone: { smooth: true },
    tablet: { smooth: true },
    lerp: 0.03, // Linear Interpolation, 0 > 1 // Try 0.01
    multiplier: 1.2,
  });

  locoScroll.on("scroll", () => {
    console.log("LocoScroll is scrolling");
    ScrollTrigger.update();
  });

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => {
    console.log("ScrollTrigger is refreshed");
    locoScroll.update();
  });

  ScrollTrigger.refresh();
};
init();

// const lenis = new Lenis();
// lenis.on("scroll", (e) => {
//   console.log(e);
// });
// lenis.on("scroll", ScrollTrigger.update);
// gsap.ticker.add((time) => {
//   lenis.raf(time * 1000);
// });

// gsap.ticker.lagSmoothing(0);

const headerTl = gsap.timeline();

gsap.from("#header img, #header nav, #header #search", {
  y: "-90%",
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  delay: 0.1,
  ease: "elastic.out",
});

gsap.to("#header", {
  duration: 1,
  y: "-75px",
  scrollTrigger: {
    trigger: "#header",
    scroller: "#main",
    start: "top -20%",
    end: "top -25%",
    scrub: 2,
  },
});

gsap.from("#page1 p", {
  y: "100%",
  opacity: 0,
  duration: 1,
  delay: 1,
  stagger: 0.1,
  ease: "expo.out",
});

gsap.from("#page1 #part2 .item", {
  scale: 0.5,
  opacity: "0",
  duration: 1,
  scrollTrigger: {
    trigger: "#page1 #part2",
    scroller: "#main",
    start: "top 70%",
    end: "top 70%",
    scrub: 3,
  },
});

document.querySelector("#button button").addEventListener("mouseover", () => {
  gsap.to("#arrow2", {
    duration: 0.3,
    scale: "0",
  });
  gsap.to("#arrow1", {
    duration: 0.3,
    height: "65px",
    width: "65px",
  });
});

document.querySelector("#button button").addEventListener("mouseout", () => {
  gsap.to("#arrow2", {
    duration: 0.2,
    scale: "1",
  });
  gsap.to("#arrow1", {
    duration: 0.3,
    height: "0",
    width: "0",
  });
});

// #############################   Page 2  ###########################

gsap.from("#page2 .part1 img", {
  scale: 0.3,
  opacity: "0",
  duration: 1,
  scrollTrigger: {
    trigger: "#page2 .part1",
    scroller: "#main",
    start: "top 60%",
    end: "top 60%",
    scrub: 3,
  },
});

// #############################   Page 3  ###########################

gsap.from("#page3 p", {
  y: "100%",
  duration: 1,
  ease: "expo.out",
  scrollTrigger: {
    trigger: "#page3 p",
    scroller: "#main",
    start: "top 70%",
    end: "top 70%",
    scrub: 3,
  },
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
