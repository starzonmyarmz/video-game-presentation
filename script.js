import inViewport from './in-viewport.js';

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');

  document.querySelector('main').hidden = false;

  sections.forEach((section) => {
    inViewport(section, { offset: -10 }, function(el) {
      sections.forEach((s) => { s.classList.remove('in-viewport'); });
      el.classList.add('in-viewport');
    });
  });
});
