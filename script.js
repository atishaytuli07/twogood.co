function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0, left: 0, width: window.innerWidth, height: window.innerHeight
      };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

function navbarAnimation() {
  gsap.to(".nav-1 svg", {
    y: "-100%",
    scrollTrigger: {
      trigger: ".page-1",
      scroller: "#main",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to("#nav-links", {
    y: "-100%",
    opacity: 0,
    scrollTrigger: {
      trigger: ".page-1",
      scroller: "#main",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
}

function page1h1() {

  gsap.from(".page-1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
    stagger: 0.3,
  });

  gsap.from(".page-1 .video-container", {
    scale: 0.9,
    opacity: 0,
    delay: 1.3,
    duration: 0.5,
  });

  gsap.from(".page-4 .cont1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
    stagger: 0.4
  })

  gsap.from(".page-3 .left-cont, .page-3 .right-cont", {
    scale: 0.9,
    opacity: 0,
    delay: 1.3,
    duration: 0.5,
  })

}

function videoconAnimation() {
  var videocon = document.querySelector(".video-container");
  var playbtn = document.querySelector(".play");
  videocon.addEventListener("mouseenter", function () {
    gsap.to(playbtn, {
      scale: 1,
      opacity: 1,
    });
  });
  videocon.addEventListener("mouseleave", function () {
    gsap.to(playbtn, {
      scale: 0,
      opacity: 0,
    });
  });
  document.addEventListener("mousemove", function (dets) {
    gsap.to(playbtn, {
      left: dets.x - 70,
      top: dets.y - 80,
    });
  });
}

function cursorAnimation() {
  const cursor = document.querySelector("#cursor");
  const main = document.querySelector("#main");

  // Handle movement with Locomotive Scroll
  main.addEventListener("mousemove", function (dets) {
    const locoScrollPos = locoScroll.scroll.instance.scroll;
    gsap.to(cursor, {
      left: dets.pageX - locoScrollPos.x, // Adjust for scroll
      top: dets.pageY - locoScrollPos.y,
      ease: "power3.out",
    });
  });

  // Interaction with containers
  document.querySelectorAll('.container').forEach(function (elem) {
    elem.addEventListener('mouseenter', function () {
      gsap.to('#cursor', {
        opacity: 1,
        scale: 1,
        ease: "power3.out"
      });
    });

    elem.addEventListener('mouseleave', function () {
      gsap.to('#cursor', {
        opacity: 0,
        scale: 0,
        ease: "power3.out"
      });
    });
  });
}


let a = document.querySelectorAll('.zero');
a.forEach(function (elem) {
  elem.addEventListener('mouseenter', function () {
    elem.className = 'zero hero';
  });
  elem.addEventListener('mouseleave', function () {
    elem.className = 'zero';
  });

});

locomotiveAnimation();
navbarAnimation();
videoconAnimation();
page1h1();
videocon();
cursorAnimation();