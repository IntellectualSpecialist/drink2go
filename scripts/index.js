var s=document.querySelector(".main-nav__site-list"),i=document.querySelector(".js-toggle-button"),f=()=>{s.classList.contains("main-nav__site-list--active")?(s.classList.remove("main-nav__site-list--active"),i.classList.remove("burger--active")):(s.classList.add("main-nav__site-list--active"),i.classList.add("burger--active"))},d=()=>{i&&i.addEventListener("click",f)};var A=["#f3ebe1","#eae6fc","#e5e6e8"],t=0,u=document.querySelector(".slider"),_=document.querySelector(".slider-button-prev"),g=document.querySelector(".slider-button-next"),a=Array.from(u.querySelectorAll(".slider__item")),c=a.length,o=Array.from(u.querySelectorAll(".slider__pagination-button")),h=document.querySelector(".hero"),U=()=>{o&&(document.querySelector(".slider__pagination-button--current").classList.remove("slider__pagination-button--current"),o[t].classList.add("slider__pagination-button--current"))},l=()=>{a.forEach((e,r)=>{r===t?(e.classList.add("slider__item--active"),h.style.setProperty("background-color",A[r])):e.classList.remove("slider__item--active")}),_.disabled=t===0,g.disabled=t===a.length-1,U()},b=()=>{t=(t-1+c)%c,l()},y=()=>{t=(t+1)%c,l()},D=()=>{_.addEventListener("click",b),g.addEventListener("click",y)},x=()=>{o&&o.forEach((e,r)=>{e.addEventListener("click",()=>{t=r,l()})})},m=()=>{x(),D()};var S={FIRST_VALUE:0,SECOND_VALUE:900},n=document.querySelector(".range__wrapper"),p=document.querySelector("#min-price"),v=document.querySelector("#max-price"),I=Array.from(document.querySelectorAll(".range__control")),q=()=>{noUiSlider.create(n,{start:[S.FIRST_VALUE,S.SECOND_VALUE],connect:[!1,!0,!1],range:{min:0,max:1e3},step:1,format:{to:e=>e.toFixed(0),from:e=>parseFloat(e)},cssPrefix:"noUi-",cssClasses:{target:"target range__wrapper",base:"base range__scale",origin:"origin range__toggle-wrapper",handle:"handle range__toggle radio radio--toggle",handleLower:"handleLower range__toggle--min",handleUpper:"handleUpper range__toggle--max",touchArea:"touch-area",horizontal:"horizontal",connect:"connect range__bar",connects:"connects range__bar-wrapper",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag"}}),n.noUiSlider.on("update",e=>{I.forEach((r,E)=>{r.value=e[E]})})},N=()=>{p.addEventListener("change",()=>{n.noUiSlider.set([p.value,null])}),v.addEventListener("change",()=>{n.noUiSlider.set([null,v.value])})},L=()=>{n&&(q(),N())};var R=()=>{d(),m(),L()};R();
