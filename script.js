const toggle = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (toggle && mobileMenu) {
  toggle.addEventListener('click', () => {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    mobileMenu.classList.toggle('hidden');
    toggle.setAttribute('aria-expanded', String(!isExpanded));
    toggle.setAttribute('aria-label', isExpanded ? 'Open menu' : 'Close menu');
  });

  window.matchMedia('(min-width: 768px)').addEventListener('change', (e) => {
    if (e.matches) {
      mobileMenu.classList.add('hidden');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
    }
  });
}
