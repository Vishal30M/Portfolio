const burger = document.querySelector('.burger');
const menuMobile = document.querySelector('.menu-mobile');
const closeIcon = document.querySelector('.close-icon');
const menuItems = document.querySelectorAll('.menu-mobile a');

burger.addEventListener('click', () => {
  menuMobile.classList.add('active');
});

closeIcon.addEventListener('click', () => {
  menuMobile.classList.remove('active');
});

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    menuMobile.classList.remove('active');
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    menuMobile.classList.remove('active');
  }
});
