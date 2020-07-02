var mySwiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".arrow",
  },
  breakpoints: {
    540: {
      slidesPerView: 2,
    },
  },
});

let menuButton = document.querySelector(".menu-btn");
let menu = document.querySelector(".header");
menuButton.addEventListener("click", function () {
  menuButton.classList.toggle("menu-btn-active");
  menu.classList.toggle("header-active");
});
