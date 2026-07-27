
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('[data-menu-toggle]');
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('menu-open');
      const open = document.body.classList.contains('menu-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? 'Fermer' : 'Menu';
    });
  }

  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  const poster = document.querySelector('[data-video-poster]');
  const video = document.querySelector('[data-video-embed]');
  if (poster && video) {
    const play = () => {
      if (video.hasAttribute('hidden')) {
        video.removeAttribute('hidden');
        const icon = poster.querySelector('.play-icon');
        if (icon) icon.setAttribute('hidden', 'hidden');
      }
    };
    poster.addEventListener('click', play);
    poster.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        play();
      }
    });
  }
});
