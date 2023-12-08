const headerBtn = document.querySelector('.header__btn');
const headBtnSun = document.querySelector(".header__btn-sun");
const headBtnMoon = document.querySelector(".header__btn-moon");
// const heroTitle = document.querySelector('.hero_title')

headerBtn.addEventListener("click", () => {
    document.body.classList.toggle('dark-theme');
    headBtnSun.classList.toggle('sun')
    headBtnMoon.classList.toggle('moon')
    // heroTitle.classList.toggle('dark')
});
$(function() {
    let header = $('.header');
     
    $(window).scroll(function() {
      if($(this).scrollTop() > 1) {
       header.addClass('header_fixed');
      } else {
       header.removeClass('header_fixed');
      }
    });
   });
// $(document).ready(function() {
//   var currentIndex = 0;
//   var slides = $('.sliders__slide');
//   var totalSlides = slides.length;

//   // Показать первый слайд
//   showSlide(currentIndex);

//   // Обработчик для кнопки "Вперед"
//   $('.sliders-next').on('click', function() {
//     currentIndex = (currentIndex + 1) % totalSlides;
//     showSlide(currentIndex);
//   });

//   // Обработчик для кнопки "Назад"
//   $('.sliders-prev').on('click', function() {
//     currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
//     showSlide(currentIndex);
//   });

//   // Функция для отображения нужного слайда
//   function showSlide(index) {
//     slides.hide();
//     slides.eq(index).fadeIn();
//   }
// });