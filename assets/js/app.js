
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('[data-menu-toggle]');
  const body = document.body;
  if (toggle) {
    toggle.addEventListener('click', () => {
      body.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', body.classList.contains('menu-open') ? 'true' : 'false');
      toggle.textContent = body.classList.contains('menu-open') ? 'Fermer' : 'Menu';
    });
  }
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

  const video = document.querySelector('[data-video-embed]');
  const poster = document.querySelector('[data-video-poster]');
  if (video && poster) {
    poster.addEventListener('click', () => {
      video.removeAttribute('hidden');
      poster.setAttribute('hidden', 'hidden');
    });
  }
});
