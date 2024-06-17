const BACKGROUND_COLORS = [
  '#f3ebe1',
  '#eae6fc',
  '#e5e6e8'
];
let slideIndex = 0;
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.slider-button-prev');
const nextButton = document.querySelector('.slider-button-next');
const slides = Array.from(slider.querySelectorAll('.slider__item'));
const slideCount = slides.length;
const paginationButtons = Array.from(slider.querySelectorAll('.slider__pagination-button'));
const hero = document.querySelector('.hero');

const changeActivePaginationButton = () => {
  if (paginationButtons) {
    const currentActiveElement = document.querySelector('.slider__pagination-button--current');
    currentActiveElement.classList.remove('slider__pagination-button--current');
    paginationButtons[slideIndex].classList.add('slider__pagination-button--current');
  }
};

const updateSlider = () => {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.classList.add('slider__item--active');
      hero.style.setProperty('background-color', BACKGROUND_COLORS[index]);
    } else {
      slide.classList.remove('slider__item--active');
    }
  });

  prevButton.disabled = slideIndex === 0;

  nextButton.disabled = slideIndex === slides.length - 1;
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
  prevButton.addEventListener('click', showPreviousSlide);
  nextButton.addEventListener('click', showNextSlide);
};

const registerSliderPaginationEvents = () => {
  if (paginationButtons) {
    paginationButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        slideIndex = index;
        updateSlider();
      });
    });
  }
};

const initSlider = () => {
  registerSliderPaginationEvents();
  registerSLiderButtonsEvents();
};

export { initSlider };
