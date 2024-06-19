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
    cssPrefix: '',
    cssClasses: {
      target: 'range__wrapper',
      base: 'range__scale',
      origin: 'range__toggle-wrapper',
      handle: 'range__toggle radio radio--toggle',
      handleLower: 'range__toggle--min',
      handleUpper: 'range__toggle--max',
      touchArea: 'touch-area',
      horizontal: 'horizontal',
      vertical: 'vertical',
      background: 'background',
      connect: 'range__bar',
      connects: 'range__bar-wrapper',
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
