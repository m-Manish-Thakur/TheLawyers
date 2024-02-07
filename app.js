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

gsap.from("#page1 h1", {
  y: "110%",
  opacity: 0,
  duration: 1,
  delay: 1,
  stagger: 0.1,
  ease: "expo.out",
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
