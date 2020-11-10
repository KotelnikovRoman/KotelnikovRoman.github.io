let active = 0;
const blocks = document.querySelectorAll(".main__block");
const menu_li = document.querySelectorAll(".nav__li");

function nav_click(e) {
  blocks[active].classList.remove("main__block-active");
  menu_li[active].classList.remove("nav__li-active");

  e = e || window.event;
  el = e.target || e.srcElement;


  if (el.id == "nav__about") active = 0;
  else if (el.id == "nav__templates") active = 1;
  else if (el.id == "nav__javascript") active = 2;
  else if (el.id == "nav__php") active = 3;
  else if (el.id == "nav__python") active = 4;
  else if (el.id == "nav__cpp") active = 5;

  blocks[active].classList.add("main__block-active");
  menu_li[active].classList.add("nav__li-active");
}
