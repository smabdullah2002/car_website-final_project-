/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// Show menu
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Hide menu
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

//nusrat

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));


const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

const swiperPopular = new Swiper(".popular__container", {
  slidesPerView: 3, 
  spaceBetween: 20, 
  loop: true, 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: { slidesPerView: 2 }, 
    1024: { slidesPerView: 3 }, 
  },
});


const sr=ScrollReveal({
  origin:'top',
  distance: '60px',
  duration:2500,
  delay: 400,

})
sr.reveal('.home__title')
sr.reveal('.popular__container')
sr.reveal('.features__img')
sr.reveal('.home__subtitle', {delay: 500})
sr.reveal('.home__elec', {delay: 600})
sr.reveal('.home__img', {delay: 800})
sr.reveal('.home__car-data', {delay: 800, interval: 80, origin:'bottom'})
sr.reveal('.home__button', {delay: 900, origin:'bottom'})
sr.reveal('.about__group', { origin:'left'})
sr.reveal('.about__data', { origin:'right'})
sr.reveal('.features__map', { delay:600,origin:'bottom'})
sr.reveal('.features__card', { interval:300})



let mixerFeatured = mixitup('.featured__content', {
    selectors: {
        target: '.featured__card' // Target selector for filterable items
    },
    animation: {
        duration: 500,              // Animation speed in ms
        effects: 'fade scale(0.5)', // Animation effects
        easing: 'ease-in-out'       // Easing function
    }
});

const linkFeatured = document.querySelectorAll('.featured__item')

function activeFeatured()
{
  linkedFeatured.forEach(l=>l.classList.remove('active-featured'))
  this.classList.add('active-featured')
}

linkFeatured.forEach(l=>l.addEventListener('click', activeFeatured))



