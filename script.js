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

const projects = [
  {
    title: "Tonic",
    imgSrc: "images/SS0.png",
    imgAlt: "snapshot",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    details: {
      company: "CANOPY",
      role: "Back End Dev",
      year: "2015",
    },
    languages: ["HTML", "CSS", "Javascript"],
    btnText: "See Project",
  },
  {
    title: "Tonic",
    imgSrc: "images/SS2.png",
    imgAlt: "snapshot-1",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    details: {
      company: "CANOPY",
      role: "Back End Dev",
      year: "2015",
    },
    languages: ["HTML", "CSS", "Javascript"],
    btnText: "See Project",
  },
];