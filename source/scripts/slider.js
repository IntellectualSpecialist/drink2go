const BACKGROUND_COLORS = [
  '#f3ebe1',
  '#eae6fc',
  '#e5e6e8'
];
let slideIndex = 0;
const sliderPromoElement = document.querySelector('.slider');
const prevButtonElement = document.querySelector('.slider-button-prev');
const nextButtonElement = document.querySelector('.slider-button-next');
const slidesElements = Array.from(sliderPromoElement.querySelectorAll('.slider__item'));
const slideCount = slidesElements.length;
const paginationButtonsElements = Array.from(sliderPromoElement.querySelectorAll('.slider__pagination-button'));
const heroElement = document.querySelector('.hero');

const changeActivePaginationButton = () => {
  if (paginationButtonsElements) {
    const currentActiveElement = document.querySelector('.slider__pagination-button--current');
    currentActiveElement.classList.remove('slider__pagination-button--current');
    paginationButtonsElements[slideIndex].classList.add('slider__pagination-button--current');
  }
};

const updateSlider = () => {
  slidesElements.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.classList.add('slider__item--active');
      heroElement.style.setProperty('background-color', BACKGROUND_COLORS[index]);
    } else {
      slide.classList.remove('slider__item--active');
    }
  });

  prevButtonElement.disabled = slideIndex === 0;

  nextButtonElement.disabled = slideIndex === slidesElements.length - 1;
  changeActivePaginationButton();
};

const showPreviousSlide = () => {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
};

const showNextSlide = () => {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
};

const registerSLiderButtonsEvents = () => {
  prevButtonElement.addEventListener('click', showPreviousSlide);
  nextButtonElement.addEventListener('click', showNextSlide);
};

const registerSliderPaginationEvents = () => {
  if (paginationButtonsElements) {
    paginationButtonsElements.forEach((button, index) => {
      button.addEventListener('click', () => {
        slideIndex = index;
        updateSlider();
      });
    });
  }
};

const initSlider = () => {
  updateSlider();
  registerSliderPaginationEvents();
  registerSLiderButtonsEvents();
};

export { initSlider };
