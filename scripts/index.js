var o=document.querySelector(".main-nav__site-list"),a=document.querySelector(".js-toggle-button"),p=()=>{o.classList.contains("main-nav__site-list--active")?(o.classList.remove("main-nav__site-list--active"),a.classList.remove("burger--active")):(o.classList.add("main-nav__site-list--active"),a.classList.add("burger--active"))},b=()=>{a&&a.addEventListener("click",p)};b();var _=document.querySelector(".slider"),s=document.querySelector(".slider-button-prev"),c=document.querySelector(".slider-button-next"),u=Array.from(_.querySelectorAll(".slider__item")),d=u.length,t=0;s.addEventListener("click",f);c.addEventListener("click",h);var S=document.querySelector(".hero");function f(){t=(t-1+d)%d,l()}function h(){t=(t+1)%d,l()}var L={0:"#f3ebe1",1:"#eae6fc",2:"#e5e6e8"},n=Array.from(_.querySelectorAll(".slider__pagination-button"));function l(){u.forEach((e,r)=>{r===t?(e.classList.add("slider__item--active"),S.style.setProperty("background-color",L[r]),n&&(document.querySelector(".slider__pagination-button--current").classList.remove("slider__pagination-button--current"),n[t].classList.add("slider__pagination-button--current"))):e.classList.remove("slider__item--active")}),t!==0?s.disabled=!1:s.disabled=!0,t===u.length-1?c.disabled=!0:c.disabled=!1}l();var k=()=>{n&&n.forEach((e,r)=>{e.addEventListener("click",v=>{document.querySelector(".slider__pagination-button--current").classList.remove("slider__pagination-button--current"),v.target.closest(".slider__pagination-button").classList.add("slider__pagination-button--current"),t=r,l()})})};k();var i=document.querySelector(".range__wrapper"),g=document.querySelector("#min-price"),m=document.querySelector("#max-price"),y=()=>{noUiSlider.create(i,{start:[0,900],connect:[!1,!0,!1],range:{min:0,max:1e3},step:1,format:{to:e=>e.toFixed(0),from:e=>parseFloat(e)},cssPrefix:"noUi-",cssClasses:{target:"target range__wrapper",base:"base range__scale",origin:"origin range__toggle-wrapper",handle:"handle range__toggle radio radio--toggle",handleLower:"handleLower range__toggle--min",handleUpper:"handleUpper range__toggle--max",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect range__bar",connects:"connects range__bar-wrapper",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"}}),i.noUiSlider.on("update",e=>{g.value=e[0],m.value=e[1]})};g.addEventListener("change",()=>{i.noUiSlider.set([g.value,null])});m.addEventListener("change",()=>{i.noUiSlider.set([null,m.value])});y();
