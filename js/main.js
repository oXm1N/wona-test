// swiper

const swiper = new Swiper('.swiper-container', {
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
  },
});

// burger-menu

var body = document.querySelector('body');
var navButton = document.getElementById("nav-button");
var bgBurger = document.querySelector(".bg-burger");
var headerNavbar = document.querySelector(".navbar-wrapper");

document.querySelector("#nav-button").addEventListener('click', function(menuOpen){
  bgBurger.style.display = 'block';
  headerNavbar.style.display = 'block';
  navButton.style.display = 'none';
  body.style.overflow = 'hidden';
});

document.getElementById("close-burger").addEventListener('click', function(menuClose){
  bgBurger.style.display = 'none';
  headerNavbar.style.display = 'none';
  navButton.style.display = 'block';
  body.style.overflow = 'visible';
});


// button show more / show less

var status = "less";
function toggleText(){
    if (status == "less") {
        document.getElementBycl("products-text").style.display= "block";
        document.getElementById("product-button").innerText = "Read Less";
        status = "more";
    } 
    else if (status == "more") {
        document.getElementById("products-text").style.display= "block";
        document.getElementById("product-button").innerText = "Read More";
        status = "less"
    }
}

