const siteListElement = document.querySelector('.main-nav__site-list');
const navBurgerElement = document.querySelector('.js-toggle-button');

const onNavBurgerClick = () => {
  if (siteListElement.classList.contains('main-nav__site-list--active')) {
    siteListElement.classList.remove('main-nav__site-list--active');
    navBurgerElement.classList.remove('burger--active');
  } else {
    siteListElement.classList.add('main-nav__site-list--active');
    navBurgerElement.classList.add('burger--active');
  }
};

const initNavBurger = () => {
  if (navBurgerElement) {
    navBurgerElement.addEventListener('click', onNavBurgerClick);
  }
};

export { initNavBurger };
