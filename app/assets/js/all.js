$(function() {
  var swiperTestimonial = new Swiper(".swiper--testimonial", {
    navigation: {
      nextEl: ".function__next",
      prevEl: ".function__prev",
    },
    pagination: {
      el: ".function__pagination",
    },
  });
  const elem = document.querySelector('input[name="reserve_input"]');
  const datepicker = new Datepicker(elem, {
    language: "zh-TW"
  });
});