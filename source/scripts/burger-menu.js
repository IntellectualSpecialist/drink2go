const siteList = document.querySelector('.main-nav__site-list');
const navBurger = document.querySelector('.js-toggle-button');

const onNavBurgerClick = () => {
  if (siteList.classList.contains('main-nav__site-list--active')) {
    siteList.classList.remove('main-nav__site-list--active');
    navBurger.classList.remove('burger--active');
  } else {
    siteList.classList.add('main-nav__site-list--active');
    navBurger.classList.add('burger--active');
  }
};

const initNavBurger = () => {
  if (navBurger) {
    navBurger.addEventListener('click', onNavBurgerClick);
  }
};

export { initNavBurger };
