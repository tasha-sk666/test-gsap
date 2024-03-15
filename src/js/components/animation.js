import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AccentTypographyBuild from "./accent-typography-builder";

gsap.registerPlugin(ScrollTrigger);

const animationTopScreenTextLine = new AccentTypographyBuild(`.hero__title`, 500, `accent-typography--active`, `transform`);

let animationHeroTextLine = ScrollTrigger.create({
  trigger: '.hero',
  start: 'top center',
  end: '200',
  scrub: true,
  onLeave: ({ }) => {
    animationTopScreenTextLine.destroyAnimation();
  },
  onEnterBack: ({ }) => {
    animationTopScreenTextLine.runAnimation();
  }
});

window.addEventListener(`DOMContentLoaded`, () => {
  document.body.classList.add(`page-loaded`);
  animationTopScreenTextLine.runAnimation();
});

export const horizontalScroll = () => {
  const horizontalSections = gsap.utils.toArray('section.horizontal')

  horizontalSections.forEach(function (sec, i) {
    var thisPinWrap = sec.querySelector('.pin-wrap');
    var thisAnimWrap = thisPinWrap.querySelector('.animation-wrap');
    var getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth);

    gsap.fromTo(thisAnimWrap, {
      x: () => thisAnimWrap.classList.contains('to-right') ? 0 : getToValue()
    }, {
      x: () => thisAnimWrap.classList.contains('to-right') ? getToValue() : 0,
      ease: "none",
      scrollTrigger: {
        trigger: sec,
        start: "top top",
        end: () => "+=" + (thisAnimWrap.scrollWidth - window.innerWidth),
        pin: thisPinWrap,
        invalidateOnRefresh: true,
        scrub: 1,
      }
    });
  });

  const galleryItems = gsap.fromTo(
    ".horizontal__item",
    { opacity: 0 },
    {
      opacity: 1, duration: 1, stagger: 0.3,
      scrollTrigger: {
        trigger: ".horizontal__item",
        start: "top 60%",
        end: "bottom",
      },
    }
  );
}

horizontalScroll();

gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 0.5 })

const animation = gsap.to(".photo:not(:first-child)", {
  opacity: 1, scale: 1, duration: 1, stagger: 1
});

ScrollTrigger.create({
  trigger: ".about__wrapper",
  start: "top top",
  end: "bottom bottom",
  pin: ".right",
  animation: animation,
  scrub: true,
});

const projectItems = document.querySelectorAll('.project__item');
const projectParallax = gsap.utils.toArray("[data-parallax]");

projectParallax.forEach((card, i) => {
  card.img = card.querySelector("img");

  gsap.to(card.img, {
    ease: "none",
    scrollTrigger: {
      trigger: card,
      scrub: 1,
      invalidateOnRefresh: true,
    },
    y: card.offsetHeight - card.img.offsetHeight,
  });

  gsap.fromTo(card, { opacity: 0 }, {
    opacity: 1,
    scrollTrigger: {
      trigger: card,
      scrub: true,
      start: 'top bottom-=350',
      end: 'top center',
    }
  })
});

projectItems.forEach((item, i) => {
  gsap.fromTo(item, { opacity: 0, }, {
    opacity: 1,
    duration: 1.2,
    stagger: 0.5,
    scrollTrigger: {
      trigger: item,
      scrub: true,
      start: "top 70%",
      end: "bottom",
      toggleActions: "play reverse play reverse",
    }
  })
});

const serviceItems = gsap.fromTo(
  ".service__item",
  { opacity: 0, y: 100 },
  {
    opacity: 1, y: 0, duration: 1, stagger: 0.3,
    scrollTrigger: {
      trigger: ".service__item",
      start: "top 60%",
      end: "bottom",
      toggleActions: "play reverse play reverse",
    },
  }
);

gsap.utils.toArray("[data-scroll-title]").forEach((item) => {
  gsap.fromTo(
    item,
    { opacity: 0 }, {
    opacity: 1, duration: 1, stagger: 0.3,
    scrollTrigger: {
      trigger: item,
      start: "top 60%",
      toggleActions: "play reverse play reverse",
    },
  }
  );
});
