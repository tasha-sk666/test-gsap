(function () {
  const sections = document.querySelectorAll("[data-section-item]");
  const menu = document.querySelector(".menu");
  const menuItems = document.querySelectorAll(".menu__item");
  const scrollBar = document.querySelector(".menu__scrollbar-item");

  const getDataItem = (item) => item.getAttribute("data-menu-item");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        menuItems.forEach((item) => {
          item.classList.toggle("menu__item--active", getDataItem(item) === entry.target.getAttribute("data-section-item"));

          if (item.classList.contains("menu__item--active")) {
            scrollBar.style.transform = `translateY(${item.offsetTop}px)`;
          }
        });
      }
    });
  }, {
    threshold: 0.7,
  });

  sections.forEach((section) => {
    observer.observe(section)
  });

  menu.addEventListener('click', (event) => {
    if (event.target.classList.contains("menu__item")) {
      window.scrollTo({
        top: document.querySelector(`[data-section-item=${getDataItem(event.target)}]`).offsetTop - 100,
        behavior: 'smooth',
      })
    }
  });
})();
