let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('.navbar li a');

menu.onclick = () => {
    toggleMenu();
};

sections.forEach(section => {
    section.addEventListener("click", function () {
        if (navbar.classList.contains('open')) {
            toggleMenu();
        }
    });
});

function toggleMenu() {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};