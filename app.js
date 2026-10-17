document.addEventListener('DOMContentLoaded', function () {
  const header = document.getElementById('site-header');
  const footer = document.getElementById('site-footer');

  if (header) {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    const active = (href) => href === page ? 'active-link' : '';

    header.innerHTML = `
      <nav class="header-navigation site-wrapper">
        <a class="site-logo" href="index.html">P Explorer</a>
        <button class="mobile-menu-toggle" type="button">
          <span class="menu-hamburger-bars"></span>
        </button>
        <div class="nav-links-wrapper" id="primaryNav">
          <ul class="nav-links-list">
            <li><a href="index.html" class="${active('index.html')}">Home</a></li>
            <li><a href="petra.html" class="${active('petra.html')}">Petra</a></li>
            <li><a href="palenque.html" class="${active('palenque.html')}">Palenque</a></li>
            <li><a href="pamukkale.html" class="${active('pamukkale.html')}">Pamukkale</a></li>
            <li><a href="palmanova.html" class="${active('palmanova.html')}">Palmanova</a></li>
          </ul>
        </div>
      </nav>
    `;

    const btn = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav-links-wrapper');

    if (btn && nav) {
      btn.addEventListener('click', function () {
        nav.classList.toggle('menu-expanded');
      });
    }
  }

  if (footer) {
    footer.innerHTML = `
    <div class="site-wrapper">
      <p class="footer-text">&copy; 2026 P Explorer</p>
    </div>
    `;
}

});
