
let openMenuBtn = document.querySelector(".open-btn");

openMenuBtn.addEventListener("click", () => {
    if (openMenuBtn.getAttribute("aria-expanded", "false")) {
        openMenuBtn.setAttribute("aria-expanded", "true")
    }

    else {
        openMenuBtn.setAttribute("aria-expanded", "false")
    }
})