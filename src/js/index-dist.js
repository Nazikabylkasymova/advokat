const showTab=e=>{const t=e.closest(".tab");if(e.classList.contains("tab-btn-active"))return;const a=e.dataset.targetId,s=t.querySelector(`.tab-pane[data-id="${a}"]`);if(s){t.querySelector(".tab-btn-active").classList.remove("tab-btn-active");t.querySelector(".tab-pane-show").classList.remove("tab-pane-show"),e.classList.add("tab-btn-active"),s.classList.add("tab-pane-show")}};document.addEventListener("click",(e=>{if(e.target&&!e.target.closest(".tab-btn"))return;const t=e.target.closest(".tab-btn");showTab(t)}));var swiper=new Swiper(".mySwiper",{slidesPerView:5,spaseBetween:30,scrollbar:{el:".swiper-scrollbar",hide:!0}});document.querySelector(".home__btn").onclick=function(){document.querySelector(".overlay").style.display="flex"};