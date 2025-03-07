// Variables
let lightToggle = document.querySelector(".jsLightToggle");
let lampLight = document.querySelector(".jsLampLight");
let menu = document.querySelector(".jsMenu");
let ul = document.querySelector(".jsUl");

// Toggles slide and background color transitions on light toggle button
lightToggle.addEventListener("click", () => {
  lightToggle.classList.toggle("light-switch");
  lightToggle.classList.toggle("light-off");
  lampLight.classList.toggle("light-opacity");
});

// Shows and hides menu on smaller screens
menu.addEventListener("click", () => {
  ul.classList.toggle("show-nav");
});
