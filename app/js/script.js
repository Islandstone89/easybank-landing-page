
let openMenuBtn = document.querySelector(".open-btn");
let closeMenuBtn = document.querySelector(".close-btn");

openMenuBtn.addEventListener("click", () => {
    openMenuBtn.setAttribute("aria-expanded", "true");
})

closeMenuBtn.addEventListener("click", () => {
    openMenuBtn.setAttribute("aria-expanded", "false");
})