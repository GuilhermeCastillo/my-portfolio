const header = document.querySelector("header");

window.addEventListener("scrolll", function() {
    header.classList.toggle("sticky", window.scrollY > 120)
});