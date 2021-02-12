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
