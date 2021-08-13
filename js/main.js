const swiper = new Swiper('.swiper-container', {
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
    },
  });


var navButton = document.querySelector("#nav-button");
var navWrapper = document.querySelector("#nav-wrapper");
var headerSlider = document.querySelector("header-slider")

var body = document.querySelector('body');


document.querySelector("#nav-button").addEventListener('click', function(menuOpen){
  navWrapper.style.display = 'block';
  navButton.style.display = 'none';
  body.style.overflow = 'hidden';
});

document.querySelector("close-burger").addEventListener('click', function(menuClose){
  navWrapper.style.display = 'none';
  navButton.style.display = 'block';
  body.style.overflow = 'visible';
});