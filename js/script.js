// Бургер-меню
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
});

document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    nav.classList.remove('active');
  });
});

// Затемнение шапки при скролле
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.style.background = 'rgba(18,11,7,.95)';
  } else {
    header.style.background = 'rgba(28,19,14,.85)';
  }
});

// Подсветка активного пункта меню при скролле
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});
