var a=["#f3ebe1","#eae6fc","#e5e6e8"],e=0,c=document.querySelector(".slider"),l=document.querySelector(".slider-button-prev"),d=document.querySelector(".slider-button-next"),o=Array.from(c.querySelectorAll(".slider__item")),s=o.length,i=Array.from(c.querySelectorAll(".slider__pagination-button")),u=document.querySelector(".hero"),m=()=>{i&&(document.querySelector(".slider__pagination-button--current").classList.remove("slider__pagination-button--current"),i[e].classList.add("slider__pagination-button--current"))},r=()=>{o.forEach((t,n)=>{n===e?(t.classList.add("slider__item--active"),u.style.setProperty("background-color",a[n])):t.classList.remove("slider__item--active")}),l.disabled=e===0,d.disabled=e===o.length-1,m()},v=()=>{e=(e-1+s)%s,r()},E=()=>{e=(e+1)%s,r()},_=()=>{l.addEventListener("click",v),d.addEventListener("click",E)},S=()=>{i.forEach((t,n)=>{t.addEventListener("click",()=>{e=n,r()})})},g=()=>{r(),S(),_()};export{g as initSlider};
