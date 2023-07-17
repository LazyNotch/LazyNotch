window.onscroll = function() { fixNavbar() };

var navbar = document.querySelector('.navbar');
var sticky = navbar.offsetTop;

function fixNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
}
