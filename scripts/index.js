var o=document.querySelector(".main-nav__site-list"),a=document.querySelector(".js-toggle-button"),b=()=>{o.classList.contains("main-nav__site-list--active")?(o.classList.remove("main-nav__site-list--active"),a.classList.remove("burger--active")):(o.classList.add("main-nav__site-list--active"),a.classList.add("burger--active"))},d=()=>{a&&a.addEventListener("click",b)};var A=["#f3ebe1","#eae6fc","#e5e6e8"],t=0,u=document.querySelector(".slider"),m=document.querySelector(".slider-button-prev"),g=document.querySelector(".slider-button-next"),l=Array.from(u.querySelectorAll(".slider__item")),s=l.length,c=Array.from(u.querySelectorAll(".slider__pagination-button")),f=document.querySelector(".hero"),h=()=>{c&&(document.querySelector(".slider__pagination-button--current").classList.remove("slider__pagination-button--current"),c[t].classList.add("slider__pagination-button--current"))},i=()=>{l.forEach((e,r)=>{r===t?(e.classList.add("slider__item--active"),f.style.setProperty("background-color",A[r])):e.classList.remove("slider__item--active")}),m.disabled=t===0,g.disabled=t===l.length-1,h()},k=()=>{t=(t-1+s)%s,i()},U=()=>{t=(t+1)%s,i()},y=()=>{m.addEventListener("click",k),g.addEventListener("click",U)},D=()=>{c.forEach((e,r)=>{e.addEventListener("click",()=>{t=r,i()})})},_=()=>{i(),D(),y()};var v={FIRST_VALUE:0,SECOND_VALUE:900},n=document.querySelector(".range__wrapper"),p=document.querySelector("#min-price"),E=document.querySelector("#max-price"),x=Array.from(document.querySelectorAll(".range__control")),I=()=>{noUiSlider.create(n,{start:[v.FIRST_VALUE,v.SECOND_VALUE],connect:[!1,!0,!1],range:{min:0,max:1e3},step:1,format:{to:e=>e.toFixed(0),from:e=>parseFloat(e)},cssPrefix:"",cssClasses:{target:"range__wrapper",base:"range__scale",origin:"range__toggle-wrapper",handle:"range__toggle radio radio--toggle",handleLower:"range__toggle--min",handleUpper:"range__toggle--max",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"range__bar",connects:"range__bar-wrapper",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"}}),n.noUiSlider.on("update",e=>{x.forEach((r,L)=>{r.value=e[L]})})},N=()=>{p.addEventListener("change",()=>{n.noUiSlider.set([p.value,null])}),E.addEventListener("change",()=>{n.noUiSlider.set([null,E.value])})},S=()=>{n&&(I(),N())};var q=()=>{d(),_(),S()};q();
