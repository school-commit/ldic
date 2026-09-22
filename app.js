/* =========================================================
   APP.JS — builds nav shell, handles interactions
   Runs on every page. Requires nav-data.js loaded first.
   ========================================================= */

(function () {
  const currentPage = (location.pathname.split('/').pop() || 'index.html');

  function buildNavItemsHTML(forDrawer) {
    return NAV_ITEMS.map((item) => {
      const active = item.href === currentPage ? ' active' : '';
      return `
        <a class="nav-item${active}" href="${item.href}">
          ${iconSvg(item.icon)}
          <span class="label">${item.label}</span>
          ${!forDrawer ? `<span class="tip">${item.label}</span>` : ''}
        </a>`;
    }).join('');
  }

  function mount() {
    const shell = document.getElementById('app-shell-root');
    if (!shell) return;

    shell.innerHTML = `
      <a href="#main" class="skip-link">मुख्य सामग्री पर जाएँ / Skip to content</a>

      <aside class="sidebar" id="sidebar">
        <div class="sidebar-top">
          <button class="sidebar-toggle" id="sidebarToggle" aria-label="Toggle menu">
            ${iconSvg('menu')}
          </button>
          <img src="assets/images/logo.png" class="sidebar-logo" alt="LDIC Logo" />
          <span class="sidebar-title hi-head">लक्ष्मी देवी इंटर कॉलेज</span>
        </div>
        <nav class="sidebar-nav">
          ${buildNavItemsHTML(false)}
        </nav>
        <div class="sidebar-foot">
          <a class="sidebar-whatsapp" href="${WHATSAPP_LINK}" target="_blank" rel="noopener">
            ${iconSvg('whatsapp')}
            <span>WhatsApp Channel</span>
          </a>
        </div>
      </aside>

      <div class="mobile-topbar">
        <a href="index.html" class="mobile-brand">
          <img src="assets/images/logo.png" alt="LDIC Logo" />
          <span>
            <span class="name hi-head" style="display:block;">लक्ष्मी देवी इंटर कॉलेज</span>
            <span class="sub">Madhwapur, Bahraich</span>
          </span>
        </a>
        <button class="hamburger-btn" id="hamburgerBtn" aria-label="Open menu">
          ${iconSvg('menu')}
        </button>
      </div>

      <div class="drawer-overlay" id="drawerOverlay"></div>
      <div class="mobile-drawer" id="mobileDrawer">
        <div class="drawer-head">
          <a href="index.html" class="brand">
            <img src="assets/images/logo.png" alt="LDIC Logo" />
            <span class="name hi-head">लक्ष्मी देवी<br/>इंटर कॉलेज</span>
          </a>
          <button class="drawer-close" id="drawerClose" aria-label="Close menu">
            ${iconSvg('close')}
          </button>
        </div>
        <nav class="drawer-nav">
          ${buildNavItemsHTML(true)}
        </nav>
        <div class="drawer-foot">
          <a class="btn btn-whatsapp btn-block" href="${WHATSAPP_LINK}" target="_blank" rel="noopener">
            ${iconSvg('whatsapp')}
            Join WhatsApp Channel
          </a>
        </div>
      </div>
    `;

    // ---- Desktop sidebar expand/collapse ----
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const mainContent = document.getElementById('main');

    function setSidebarState(expanded) {
      sidebar.classList.toggle('expanded', expanded);
      if (mainContent) mainContent.classList.toggle('sidebar-expanded', expanded);
      localStorage.setItem('ldic-sidebar-expanded', expanded ? '1' : '0');
    }
    const savedState = localStorage.getItem('ldic-sidebar-expanded');
    setSidebarState(savedState === '1');

    sidebarToggle.addEventListener('click', () => {
      setSidebarState(!sidebar.classList.contains('expanded'));
    });

    // ---- Mobile drawer ----
    const drawer = document.getElementById('mobileDrawer');
    const overlay = document.getElementById('drawerOverlay');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const drawerClose = document.getElementById('drawerClose');

    function openDrawer() {
      drawer.classList.add('open');
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closeDrawer() {
      drawer.classList.remove('open');
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }
    hamburgerBtn.addEventListener('click', openDrawer);
    drawerClose.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', closeDrawer);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeDrawer();
    });
  }

  document.addEventListener('DOMContentLoaded', mount);
})();

/* =========================================================
   SCROLL REVEAL
   ========================================================= */
(function () {
  function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || !els.length) {
      els.forEach((el) => el.classList.add('in-view'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
  }
  document.addEventListener('DOMContentLoaded', initReveal);
})();

/* =========================================================
   LIGHTBOX (used on gallery + results pages)
   ========================================================= */
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  const lbImg = document.getElementById('lightboxImg');
  const lbCaption = document.getElementById('lightboxCaption');
  const closeBtn = lightbox.querySelector('.lightbox-close');

  document.querySelectorAll('[data-lightbox]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const src = trigger.getAttribute('data-lightbox');
      const caption = trigger.getAttribute('data-caption') || '';
      lbImg.src = src;
      lbImg.alt = caption;
      lbCaption.textContent = caption;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  function close() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }
  closeBtn.addEventListener('click', close);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
}
document.addEventListener('DOMContentLoaded', initLightbox);

/* =========================================================
   TABS (UP Board Results year tabs)
   ========================================================= */
function initTabs() {
  const tabButtons = document.querySelectorAll('[data-tab-target]');
  if (!tabButtons.length) return;
  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab-target');
      const group = btn.closest('[data-tab-group]');
      group.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));
      group.querySelectorAll('.tab-panel').forEach((p) => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(targetId).classList.add('active');
    });
  });
}
document.addEventListener('DOMContentLoaded', initTabs);

/* =========================================================
   GALLERY FILTER CHIPS
   ========================================================= */
function initGalleryFilter() {
  const chips = document.querySelectorAll('.filter-chip');
  if (!chips.length) return;
  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      chips.forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
      const filter = chip.getAttribute('data-filter');
      document.querySelectorAll('.gallery-item').forEach((item) => {
        const cat = item.getAttribute('data-category');
        item.style.display = (filter === 'all' || cat === filter) ? '' : 'none';
      });
    });
  });
}
document.addEventListener('DOMContentLoaded', initGalleryFilter);
