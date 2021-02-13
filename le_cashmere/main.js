// function openNav() {
//   document.getElementById("mySidenav").style.width = "70%";
//   navbar_icons.classList.toggle("active");
// }

// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
// }

const navbar_side = document.querySelector(".navbar__side");
const menu_icon = document.querySelector(".navbar .menu_icon");
// const menu = document.querySelector(".navbar__menu");
const navbar_icons = document.querySelector(".navbar__side .navbar__icons");
const mySidenav = document.getElementById("mySidenav");

/* 수정: 클릭해도 메뉴가 안 나타남 */
menu_icon.addEventListener("click", () => {
  menu_icon.style.color = "#FF0000";
  // menu.classList.toggle("active");
  navbar_side.classList.toggle("active");
  navbar_icons.classList.toggle("active");
  mySidenav.style.width = "70%";
  // if (mySidenav_width == "0") mySidenav_width = "70%";
  // else mySidenav_width = "0";
});

// ------------------------------------------------
// main-img
var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
