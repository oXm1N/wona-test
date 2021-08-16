// swiper

const firstSwiper = new Swiper('.swiper-header', {
  centeredSlides: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

const secondSwiper = new Swiper('.swiper-products__container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      direction: 'vertical',
      slidesPerView: 'auto',
    },
    428: {
      centeredSlides: true,
      direction: 'horizontal',
    },
  }
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

// read more/less button

var status = "less";
function toggleText(){
  if (status == "less") {
    document.getElementById("products-text").style.display="block";
    document.getElementById("product-button").innerText = "Read Less";
    document.getElementById("product-button").style.backgroundImage = "url('../img/btn-top.svg')";
    status = "more";
  } else if (status == "more") {
    document.getElementById("products-text").style.display="none";
    document.getElementById("product-button").innerText = "Read More";
    document.getElementById("product-button").style.backgroundImage = "url('../img/btn-vector.svg')";
    status = "less"
  }
};

// get products(include jquery)

$('document').ready(function(){
  loadItems();
});

function loadItems() {
$.getJSON('js/products.json', function (data) {
  console.log(data);
    let out = '';
    for (let key in data){
      out+='<div class="swiper-slide product-slide">';

      out+='<img src="'+data[key]['image']+'">';
      out+='<span class="product-item__title">'+data[key]['title']+'</span>';

      out+='<div class="product-item__price">';
      out+='<span class="product-item__price-idk">'+'םיעבצ4'+'</span>';
      out+='<span class="product-item__price-text">'+'₪'+data[key]['price']+'</span>';
      out+='</div>';

      out+='<a href="'+data[key]['link']+'" class="product-item__button">'+'סקירה מהירה'+'</a>';

      out+='</div>';
  }
$('#items').html(out);
})
}
