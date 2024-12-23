let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('.navbar li a');
let coll = document.getElementsByClassName("collapsible");
let theme = document.querySelector(".theme");
let themeIcon = document.querySelector(".theme i");
let body = document.querySelector("body");

window.addEventListener("load", function () {
  const currentTheme = localStorage.getItem('theme');
  console.log(currentTheme);
  if (currentTheme === '' || currentTheme === 'dark' || currentTheme == null) {
    localStorage.setItem('theme', 'dark');
    body.className = 'dark';
    themeIcon.className = 'ri-sun-fill';
  } else {
    localStorage.setItem('theme', 'light');
    body.className = 'light';
    themeIcon.className = 'ri-contrast-2-fill';
  }

});

theme.addEventListener("click", function () {
  const currentTheme = localStorage.getItem('theme').toString();

  if (currentTheme === 'dark') {
    body.className = 'light';
    themeIcon.className = 'ri-contrast-2-fill';
    localStorage.setItem('theme', 'light');
  } else if (currentTheme === 'light') {
    body.className = 'dark';
    themeIcon.className = 'ri-sun-fill';
    localStorage.setItem('theme', 'dark');
  } else {
    body.className = 'dark';
    themeIcon.className = 'ri-sun-fill';
    localStorage.setItem('theme', 'dark');
  }
});

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

/* Collapsible function */
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });

}

// Initialize animate on scroll
AOS.init({
  duration: 1200,
  once: false, // Trigger animation only once when scrolling
})