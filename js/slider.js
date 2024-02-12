 var swiper = new Swiper(".slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: ".slider-control-container_right",
        prevEl: ".slider-control-container_left",
      },
      breakpoints: {
         950: {
            slidesPerView: 4
         }
      }
    });