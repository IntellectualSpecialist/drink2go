var t=document.querySelector(".main-nav__site-list"),e=document.querySelector(".js-toggle-button"),s=()=>{t.classList.contains("main-nav__site-list--active")?(t.classList.remove("main-nav__site-list--active"),e.classList.remove("burger--active")):(t.classList.add("main-nav__site-list--active"),e.classList.add("burger--active"))},i=()=>{e&&e.addEventListener("click",s)};export{i as initNavBurger};
