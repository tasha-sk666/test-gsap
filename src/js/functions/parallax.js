
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function parallax() {
  // const trigger = document?.querySelector(".hero-parallax");
  // const target = document?.querySelector(".hero-parallax__man");
  // const targetMount = document?.querySelector(".hero-parallax__mountins");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: 'top bottom',
      scrub: 1,
    },
  });

  tl.fromTo(target, { y: 400 }, { y: -150 }, 0)
    .fromTo(targetMount, { y: 900 },{ y: -220 }, 0);
}

window.addEventListener('load', function () {
  parallax();
});
