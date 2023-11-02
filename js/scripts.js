// setup nav
const navBtn   = document.getElementById("nav-btn")
const navbar   = document.getElementById("navbar")
const navClose = document.getElementById("navbar-close")

// show nav 
navBtn.addEventListener("click", () => {
    navbar.classList.add("show-nav")
})

// close nav 
navClose.addEventListener("click", () => {
    navbar.classList.remove("show-nav")
})