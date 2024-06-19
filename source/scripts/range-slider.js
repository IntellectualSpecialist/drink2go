const DEFAULT_SLIDER_MIN = 0;
const DEFAULT_SLIDER_MAX = 1000;
const DEFAULT_SLIDER_STEP = 1;
const DefaultSliderStart = {
  FIRST_VALUE: 0,
  SECOND_VALUE: 900,
};
const sliderElement = document.querySelector('.range__wrapper');
const priceInputMinElement = document.querySelector('#min-price');
const priceInputMaxElement = document.querySelector('#max-price');
const priceInputsElements = Array.from(document.querySelectorAll('.range__control'));

const createNoUiSlider = () => {
  noUiSlider.create(sliderElement, {
    start: [DefaultSliderStart.FIRST_VALUE, DefaultSliderStart.SECOND_VALUE],
    connect: [false, true, false],
    range: {
      min: DEFAULT_SLIDER_MIN,
      max: DEFAULT_SLIDER_MAX,
    },
    step: DEFAULT_SLIDER_STEP,
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
      connect: 'connect range__bar',
      connects: 'connects range__bar-wrapper',
      ltr: 'ltr',
      rtl: 'rtl',
      textDirectionLtr: 'txt-dir-ltr',
      textDirectionRtl: 'txt-dir-rtl',
      draggable: 'draggable',
      drag: 'state-drag',
    }
  });

  sliderElement.noUiSlider.on('update', (values) => {
    priceInputsElements.forEach((input, index) => {
      input.value = values[index];
    });
  });
};

const registerInputsEvents = () => {
  priceInputMinElement.addEventListener('change', () => {
    sliderElement.noUiSlider.set([priceInputMinElement.value, null]);
  });

  priceInputMaxElement.addEventListener('change', () => {
    sliderElement.noUiSlider.set([null, priceInputMaxElement.value]);
  });
};

const initNoUiSlider = () => {
  if (sliderElement) {
    createNoUiSlider();
    registerInputsEvents();
  }
};

const disableSlider = () => {
  sliderElement.setAttribute('disabled', true);
};

export { initNoUiSlider, disableSlider };
