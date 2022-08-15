"use strict";

$(function () {
  var swiperTestimonial = new Swiper(".swiper--testimonial", {
    navigation: {
      nextEl: ".function__next",
      prevEl: ".function__prev"
    },
    pagination: {
      el: ".function__pagination"
    }
  });
  var elem = document.querySelector('input[name="reserve_input"]');
  var datepicker = new Datepicker(elem, {
    language: "zh-TW"
  });
});
//# sourceMappingURL=all.js.map
