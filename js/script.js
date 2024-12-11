let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('.navbar li a');
let coll = document.getElementsByClassName("collapsible");

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