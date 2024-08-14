const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
  nav.classList.add("open-nav");
});
close.addEventListener("click", () => {
  nav.classList.remove("open-nav");
});

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "images/sun-icon.svg";
  } else {
    icon.src = "images/moon.svg";
  }
};
/*
icon.onclick = function () {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    close.src = "images/close-circle.svg";
    menu.src = "images/menu-icon.svg";
  } else {
    close.src = "images/close-icon.svg";
    menu.src = "images/menu.svg";
  }
};*/
