var s=document.querySelector(".main-nav__site-list"),i=document.querySelector(".js-toggle-button"),g=()=>{s.classList.contains("main-nav__site-list--active")?(s.classList.remove("main-nav__site-list--active"),i.classList.remove("burger--active")):(s.classList.add("main-nav__site-list--active"),i.classList.add("burger--active"))},v=()=>{i&&i.addEventListener("click",g)};v();var m=document.querySelector(".slider"),l=document.querySelector(".slider-button-prev"),a=document.querySelector(".slider-button-next"),d=Array.from(m.querySelectorAll(".slider__item")),u=d.length,t=0;l.addEventListener("click",L);a.addEventListener("click",f);var S=document.querySelector(".hero");function L(){t=(t-1+u)%u,o()}function f(){t=(t+1)%u,o()}var b={0:"#f3ebe1",1:"#eae6fc",2:"#e5e6e8"},r=Array.from(m.querySelectorAll(".slider__pagination-button"));function o(){d.forEach((e,n)=>{n===t?(e.classList.add("slider__item--active"),S.style.setProperty("--color",b[n.toString()]),r&&(document.querySelector(".slider__pagination-button--current").classList.remove("slider__pagination-button--current"),r[t].classList.add("slider__pagination-button--current"))):e.classList.remove("slider__item--active")}),t!==0?l.disabled=!1:l.disabled=!0,t===d.length-1?a.disabled=!0:a.disabled=!1}o();var E=()=>{r&&r.forEach((e,n)=>{e.addEventListener("click",_=>{document.querySelector(".slider__pagination-button--current").classList.remove("slider__pagination-button--current"),_.target.closest(".slider__pagination-button").classList.add("slider__pagination-button--current"),t=n,o()})})};E();var c=document.querySelector(".form__range"),p=0,y=100,q=1,A=document.querySelector(".range__toggle--min"),h=()=>{noUiSlider.create(c,{start:[0,900],range:{min:p,max:y},step:q,connect:"lower",format:{to:e=>Number.isInteger(e)?e.toFixed(0):e.toFixed(1),from:e=>parseFloat(e)}}),c.noUiSlider.on("update",()=>{A.value=c.noUiSlider.get()})};h();
