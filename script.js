// Variables
let lightToggle = document.querySelector(".jsLightToggle")
let lampLight = document.querySelector(".jsLampLight")

// Toggles slide and background color transitions on light toggle button 
lightToggle.addEventListener("click", () => {
  lightToggle.classList.toggle("light-switch")
  lightToggle.classList.toggle("light-off")
  lampLight.classList.toggle("light-opacity")
})