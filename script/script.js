let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 8000);
function nextSlide() {
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = 'slide showing';
}

let burgermenu = document.getElementById('hamburger');
let navul = document.getElementById('fixer');
let navigation = document.getElementById('navigation');
let mainNav = document.getElementById('main-nav');
let header = document.getElementById('header');
let main = document.getElementById('main');
burgermenu.addEventListener('click', () => {
  navul.classList.toggle('show');
  header.classList.toggle('show');
  main.classList.toggle('show');
  mainNav.classList.toggle('show');
  navigation.classList.toggle('show');
});
navul.addEventListener('click', () => {
  navul.classList.remove('show');
  header.classList.remove('show');
  main.classList.remove('show');
  mainNav.classList.remove('show');
  navigation.classList.remove('show');
});
