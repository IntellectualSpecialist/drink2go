/* в этот файл добавляет скрипты*/
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

const navBurgerInit = () => {
  if (navBurger) {
    navBurger.addEventListener('click', onNavBurgerClick);
  }
};

navBurgerInit();

const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.slider-button-prev');
const nextButton = document.querySelector('.slider-button-next');
const slides = Array.from(slider.querySelectorAll('.slider__item'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);
const hero = document.querySelector('.hero');

function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}


function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

const BackgroundColors = {
  0: '#f3ebe1',
  1: '#eae6fc',
  2: '#e5e6e8'
};

const paginationButtons = Array.from(slider.querySelectorAll('.slider__pagination-button'));

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.classList.add('slider__item--active');
      hero.style.setProperty('background-color', BackgroundColors[index]);

      if (paginationButtons) {
        const currentActiveElement = document.querySelector('.slider__pagination-button--current');
        currentActiveElement.classList.remove('slider__pagination-button--current');
        paginationButtons[slideIndex].classList.add('slider__pagination-button--current');
      }
    } else {
      slide.classList.remove('slider__item--active');
    }
  });

  if (slideIndex !== 0) {
    prevButton.disabled = false;
  } else {
    prevButton.disabled = true;
  }

  if (slideIndex === slides.length - 1) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}

updateSlider();

const initSliderPagination = () => {
  if (paginationButtons) {
    paginationButtons.forEach((button, index) => {
      button.addEventListener('click', (evt) => {
        const currentActiveElement = document.querySelector('.slider__pagination-button--current');
        currentActiveElement.classList.remove('slider__pagination-button--current');
        evt.target.closest('.slider__pagination-button').classList.add('slider__pagination-button--current');
        slideIndex = index;
        updateSlider();
      });
    });
  }
};

initSliderPagination();

const sliderElement = document.querySelector('.range__wrapper');
const slideValueMin = document.querySelector('#min-price');
const slideValueMax = document.querySelector('#max-price');
// const DEFAULT_SLIDER_MIN = 0;
// const DEFAULT_SLIDER_MAX = 100;
// // const DEFAULT_SLIDER_START = DEFAULT_SLIDER_MAX;
// const DEFAULT_SLIDER_STEP = 1;
// const rangeToggleMin = document.querySelector('.range__toggle--min');
// // const rangeToggleMax = document.querySelector('.range__toggle--max');

// const createNoUiSlider = () => {
//   noUiSlider.create(sliderElement, {
//     start: [0, 900],
//     range: {
//       min: DEFAULT_SLIDER_MIN,
//       max: DEFAULT_SLIDER_MAX,
//     },
//     // start: DEFAULT_SLIDER_START,
//     step: DEFAULT_SLIDER_STEP,
//     connect: 'lower',
//     format: {
//       to: (value) => Number.isInteger(value) ? value.toFixed(0) : value.toFixed(1),
//       from: (value) => parseFloat(value),
//     }
//   });

//   sliderElement.noUiSlider.on('update', () => {
//     rangeToggleMin.value = sliderElement.noUiSlider.get();
//     // effectInputElement.value = Number(sliderElement.noUiSlider.get());
//   });
//   // setNoUiSlider();
// };

const createNoUiSlider = () => {
  noUiSlider.create(sliderElement, {
    start: [0, 900],
    connect: [false, true, false],
    range: {
      min: 0,
      max: 1000,
    },
    step: 1,
    format: {
      to: (value) => value.toFixed(0),
      from: (value) => parseFloat(value),
    },
    cssPrefix: 'noUi-',
    cssClasses: {
      target: 'target range__wrapper',
      base: 'base range__scale',
      origin: 'origin range__toggle-wrapper',
      handle: 'handle range__toggle radio radio--toggle',
      handleLower: 'handleLower range__toggle--min',
      handleUpper: 'handleUpper range__toggle--max',
      touchArea: 'touch-area',
      horizontal: 'horizontal',
      vertical: 'vertical',
      background: 'background',
      connect: 'connect range__bar',
      connects: 'connects range__bar-wrapper',
      ltr: 'ltr',
      rtl: 'rtl',
      textDirectionLtr: 'txt-dir-ltr',
      textDirectionRtl: 'txt-dir-rtl',
      draggable: 'draggable',
      drag: 'state-drag',
      tap: 'state-tap',
      active: 'active',
      tooltip: 'tooltip',
      pips: 'pips',
      pipsHorizontal: 'pips-horizontal',
      pipsVertical: 'pips-vertical',
      marker: 'marker',
      markerHorizontal: 'marker-horizontal',
      markerVertical: 'marker-vertical',
      markerNormal: 'marker-normal',
      markerLarge: 'marker-large',
      markerSub: 'marker-sub',
      value: 'value',
      valueHorizontal: 'value-horizontal',
      valueVertical: 'value-vertical',
      valueNormal: 'value-normal',
      valueLarge: 'value-large',
      valueSub: 'value-sub'
    }
  });

  sliderElement.noUiSlider.on('update', (values) => {
    slideValueMin.value = values[0];
    slideValueMax.value = values[1];
  });
};

slideValueMin.addEventListener('change', () => {
  sliderElement.noUiSlider.set([slideValueMin.value, null]);
});

slideValueMax.addEventListener('change', () => {
  sliderElement.noUiSlider.set([null, slideValueMax.value]);
});


createNoUiSlider();
