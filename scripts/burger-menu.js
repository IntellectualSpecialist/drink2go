var e=document.querySelector(".main-nav__site-list"),t=document.querySelector(".js-toggle-button"),s=()=>{e.classList.contains("main-nav__site-list--active")?(e.classList.remove("main-nav__site-list--active"),t.classList.remove("burger--active")):(e.classList.add("main-nav__site-list--active"),t.classList.add("burger--active"))},i=()=>{t&&t.addEventListener("click",s)};export{i as initNavBurger};
