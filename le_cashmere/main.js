// ------------------------------------------------
// navbar-side

const mySidenav = document.getElementById("mySidenav");
const menuIcon = document.getElementById("menu_icon");

function toggleBtn() {
  console.log(mySidenav.style.width);
  if (mySidenav.style.width == 0 + "px" || !mySidenav.style.width) {
    mySidenav.style.width = "70%";
    document.body.style.overflow = "hidden";
    menuIcon.innerHTML = "&times;";
  } else {
    mySidenav.style.width = "0";
    document.body.style.overflow = "scroll";
    menuIcon.innerHTML = "&#9776;";
  }
}

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
