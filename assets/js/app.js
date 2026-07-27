
(() => {
  const body = document.body;
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-main-nav]');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = body.classList.toggle('menu-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.textContent = isOpen ? 'Fermer' : 'Menu';
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      body.classList.remove('menu-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = 'Menu';
    }));
  }

  document.querySelectorAll('[data-year]').forEach(node => {
    node.textContent = String(new Date().getFullYear());
  });

  const restaurantGrid = document.querySelector('[data-restaurant-grid]');
  if (restaurantGrid && window.ARAVIS_DATA) {
    const cards = window.ARAVIS_DATA.restaurants.map(item => {
      const article = document.createElement('article');
      article.className = 'card restaurant-card';
      article.dataset.zone = item.zone;
      article.dataset.tags = item.tags.join(' ');
      article.innerHTML = `
        <div class="card-top">
          <div>
            <span class="eyebrow">${escapeHtml(item.place)}</span>
            <h3>${escapeHtml(item.name)}</h3>
          </div>
          ${item.favorite ? '<span class="badge badge-fav">Coup de cœur</span>' : ''}
        </div>
        <div class="restaurant-meta">
          <span class="badge">${escapeHtml(item.type)}</span>
          ${item.tags.map(tag => `<span class="badge">${escapeHtml(tag)}</span>`).join('')}
        </div>
        <p>${escapeHtml(item.summary)}</p>
        <p class="muted"><strong>Bon à savoir :</strong> ${escapeHtml(item.note)}</p>
        <div class="restaurant-actions actions">
          <a class="btn btn-small" href="${safeUrl(item.maps)}" target="_blank" rel="noopener">Itinéraire</a>
          <a class="btn btn-secondary btn-small" href="${safeUrl(item.official)}" target="_blank" rel="noopener">Infos pratiques</a>
        </div>
      `;
      return article;
    });
    restaurantGrid.replaceChildren(...cards);

    const buttons = document.querySelectorAll('[data-filter]');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        buttons.forEach(other => other.setAttribute('aria-pressed', 'false'));
        button.setAttribute('aria-pressed', 'true');
        const filter = button.dataset.filter;
        cards.forEach(card => {
          const match = filter === 'all'
            || card.dataset.zone === filter
            || card.dataset.tags.split(' ').includes(filter);
          card.hidden = !match;
        });
      });
    });
  }

  const contactForm = document.querySelector('[data-contact-form]');
  if (contactForm) {
    contactForm.addEventListener('submit', event => {
      event.preventDefault();
      const data = new FormData(contactForm);
      const email = contactForm.dataset.recipient || 'bonjour@votre-domaine.fr';
      const subject = encodeURIComponent(`Aravis Deux Versants — ${data.get('subject') || 'Nouveau message'}`);
      const bodyText = [
        `Nom : ${data.get('name') || ''}`,
        `E-mail : ${data.get('email') || ''}`,
        `Téléphone : ${data.get('phone') || ''}`,
        '',
        data.get('message') || ''
      ].join('\n');
      window.location.href = `mailto:${email}?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
      showToast('Votre messagerie va s’ouvrir. Remplacez l’adresse de destination dans le code avant la mise en ligne.');
    });
  }

  function showToast(message) {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      toast.setAttribute('role', 'status');
      document.body.append(toast);
    }
    toast.textContent = message;
    toast.classList.add('is-visible');
    window.setTimeout(() => toast.classList.remove('is-visible'), 5000);
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function safeUrl(value) {
    try {
      const url = new URL(value, window.location.href);
      return ['http:', 'https:'].includes(url.protocol) ? url.href : '#';
    } catch {
      return '#';
    }
  }
})();
