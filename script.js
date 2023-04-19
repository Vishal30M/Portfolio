const burger = document.querySelector('.burger');
const menuMobile = document.querySelector('.menu-mobile');
const closeIcon = document.querySelector('.close-icon');

burger.addEventListener('click', () => {
  menuMobile.classList.add('active');
});

closeIcon.addEventListener('click', () => {
  menuMobile.classList.remove('active');
});

Window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    menuMobile.classList.remove('active');
  }
});