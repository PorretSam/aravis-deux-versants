
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

  document.querySelectorAll('form[data-formsubmit]').forEach(form => {
    const nextField = form.querySelector('input[name="_next"]');
    if (nextField) {
      nextField.value = new URL('merci.html', window.location.href).href;
    }
  });


  const player = document.querySelector('#selected-video-player');
  const title = document.querySelector('#selected-video-title');
  const description = document.querySelector('#selected-video-description');
  const externalLink = document.querySelector('#selected-video-link');
  const videoButtons = document.querySelectorAll('.video-button[data-video-id]');

  if (player && title && description && externalLink && videoButtons.length) {
    videoButtons.forEach(button => {
      button.addEventListener('click', () => {
        const videoId = button.dataset.videoId;
        const videoUrl = button.dataset.videoUrl;
        const titleParts = (button.dataset.videoTitle || '').split('|');

        player.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1`;
        player.title = titleParts.join(' - ');
        title.innerHTML = titleParts.map(part => escapeHtml(part)).join('<br>');
        description.textContent = button.dataset.videoDescription || '';
        externalLink.href = videoUrl;

        videoButtons.forEach(item => item.classList.remove('is-selected'));
        button.classList.add('is-selected');
      });
    });
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }
  const skiPlayer = document.querySelector('#ski-video-player');
  const skiButtons = document.querySelectorAll('[data-ski-video]');
  if (skiPlayer && skiButtons.length) {
    skiButtons.forEach(button => {
      button.addEventListener('click', () => {
        const videoId = button.dataset.skiVideo;
        const title = button.dataset.title || 'Vidéo des Aravis';
        skiPlayer.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1`;
        skiPlayer.title = title;
        skiButtons.forEach(item => item.classList.remove('is-selected'));
        button.classList.add('is-selected');
      });
    });
  }

});
document.addEventListener("DOMContentLoaded", function () {

  const menuButton = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("#nav-principal");

  if (!menuButton || !nav) return;

  menuButton.addEventListener("click", function () {

    nav.classList.toggle("is-open");

    const isOpen = nav.classList.contains("is-open");

    menuButton.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

  });

  // Fermer le menu après avoir cliqué sur un lien
  nav.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {

      nav.classList.remove("is-open");

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });

});
