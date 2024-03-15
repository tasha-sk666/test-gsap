import { gsap } from "gsap";
import { disableScroll } from './disable-scroll';
import { enableScroll } from './enable-scroll';

(function(){
  const burger = document?.querySelector('[data-burger]');
  const nav = document?.querySelector('[data-nav]');
  const navItems = document?.querySelectorAll('[data-nav-item]');

  const navTl = gsap.timeline({ pasused: true});

  navTl.to(nav, {
    display: 'block',
    opacity: 1,
  });
  
  navTl.reverse();

  burger?.addEventListener('click', (e) => {
    burger?.classList.toggle('burger--active');
    navTl.reverse()

    if (burger.classList.contains('burger--active')) {
      navTl.play();

      burger?.setAttribute('aria-expanded', 'true');
      burger?.setAttribute('aria-label', 'Close menu');
      disableScroll();
    } else {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Open menu');
      enableScroll();
    }
  });

  navItems?.forEach(el => {
    el.addEventListener('click', () => {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Open menu');
      burger.classList.remove('burger--active');
      navTl.reverse()
      enableScroll();
    });
  });
})();
