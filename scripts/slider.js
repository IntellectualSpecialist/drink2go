var a=["#f3ebe1","#eae6fc","#e5e6e8"],e=0,c=document.querySelector(".slider"),l=document.querySelector(".slider-button-prev"),d=document.querySelector(".slider-button-next"),o=Array.from(c.querySelectorAll(".slider__item")),s=o.length,r=Array.from(c.querySelectorAll(".slider__pagination-button")),u=document.querySelector(".hero"),m=()=>{r&&(document.querySelector(".slider__pagination-button--current").classList.remove("slider__pagination-button--current"),r[e].classList.add("slider__pagination-button--current"))},i=()=>{o.forEach((t,n)=>{n===e?(t.classList.add("slider__item--active"),u.style.setProperty("background-color",a[n])):t.classList.remove("slider__item--active")}),l.disabled=e===0,d.disabled=e===o.length-1,m()},v=()=>{e=(e-1+s)%s,i()},E=()=>{e=(e+1)%s,i()},_=()=>{l.addEventListener("click",v),d.addEventListener("click",E)},S=()=>{r&&r.forEach((t,n)=>{t.addEventListener("click",()=>{e=n,i()})})},g=()=>{S(),_()};export{g as initSlider};
