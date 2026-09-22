/* =========================================================
   NAVIGATION DATA — single source of truth
   Used to render both the desktop sidebar and mobile drawer
   on every page. Edit menu items here only.
   ========================================================= */

const NAV_ITEMS = [
  { href: 'index.html', label: 'Home', icon: 'home' },
  { href: 'about.html', label: 'About School', icon: 'info' },
  { href: 'principal.html', label: "Principal's Message", icon: 'user' },
  { href: 'achievements.html', label: 'Our Achievements', icon: 'award' },
  { href: 'results.html', label: 'UP Board Results', icon: 'chart' },
  { href: 'facilities.html', label: 'Academic Facilities', icon: 'building' },
  { href: 'laboratory.html', label: 'Science Laboratory', icon: 'flask' },
  { href: 'journey.html', label: 'School Journey', icon: 'timeline' },
  { href: 'student-life.html', label: 'Student Life', icon: 'users' },
  { href: 'trips.html', label: 'Educational Trips', icon: 'bus' },
  { href: 'scholarship.html', label: 'UP Scholarship', icon: 'scroll' },
  { href: 'gallery.html', label: 'Gallery', icon: 'image' },
  { href: 'contact.html', label: 'Contact Us', icon: 'phone' },
  { href: 'social.html', label: 'Social Media', icon: 'share' },
];

const WHATSAPP_LINK = 'https://whatsapp.com/channel/0029VaUwFchAojYnk6egLF0L';

const ICONS = {
  home: '<path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v10h5v-6h4v6h5V10"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6"/><circle cx="12" cy="7.5" r="0.6" fill="currentColor"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4.5 5-6 8-6s6.5 1.5 8 6"/>',
  award: '<circle cx="12" cy="8" r="5"/><path d="M9 12.5 7.5 21 12 18.5 16.5 21 15 12.5"/>',
  chart: '<path d="M4 20V10"/><path d="M11 20V4"/><path d="M18 20v-7"/><path d="M3 20h18"/>',
  building: '<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1"/>',
  flask: '<path d="M9 3h6"/><path d="M10 3v6l-5.5 9.5A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-2.5L14 9V3"/>',
  timeline: '<path d="M4 6h16M4 12h16M4 18h16"/><circle cx="8" cy="6" r="1.6" fill="currentColor"/><circle cx="15" cy="12" r="1.6" fill="currentColor"/><circle cx="9" cy="18" r="1.6" fill="currentColor"/>',
  users: '<circle cx="9" cy="8" r="3.2"/><path d="M2.5 20c1-3.5 3.7-5.2 6.5-5.2s5.5 1.7 6.5 5.2"/><circle cx="17.5" cy="8.5" r="2.6"/><path d="M15.7 14.8c2.1.2 4 1.8 4.8 5.2"/>',
  bus: '<rect x="3" y="5" width="18" height="12" rx="2"/><path d="M3 11h18"/><circle cx="7.5" cy="19.5" r="1.4"/><circle cx="16.5" cy="19.5" r="1.4"/>',
  scroll: '<path d="M6 4h11a2 2 0 0 1 2 2v13a1.5 1.5 0 0 1-3 0V6a1 1 0 0 0-1-1H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11"/>',
  image: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.6"/><path d="M21 16.5 15.5 11 6 20"/>',
  phone: '<path d="M5 4h3.2l1.4 4.4-2 1.6a13 13 0 0 0 6.4 6.4l1.6-2 4.4 1.4V19a2 2 0 0 1-2.2 2A16 16 0 0 1 3 6.2 2 2 0 0 1 5 4Z"/>',
  share: '<circle cx="18" cy="5" r="2.4"/><circle cx="6" cy="12" r="2.4"/><circle cx="18" cy="19" r="2.4"/><path d="M8.2 10.8 15.8 6.2M8.2 13.2l7.6 4.6"/>',
  whatsapp: '<path d="M3.5 20.5 5 16a8 8 0 1 1 3.2 3.2Z"/><path d="M8.3 8.7c-.2.9.4 2.2 1.4 3.4 1.1 1.3 2.5 2.2 3.7 2.2.7 0 1.1-.5 1.4-1l.3-.5c.1-.2 0-.4-.2-.5l-1.5-.8c-.2-.1-.4 0-.5.1l-.3.4c-.1.1-.3.2-.5.1-.6-.3-1.5-1-2-1.8-.1-.2 0-.4.1-.5l.4-.4c.1-.1.2-.3.1-.5l-.7-1.6c-.1-.2-.3-.3-.5-.2-.6.1-1.2.5-1.2 1.2Z" fill="currentColor" stroke="none"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  chevron: '<path d="M9 18l6-6-6-6"/>',
  arrowleft: '<path d="M19 12H5M11 18l-6-6 6-6"/>',
};

function iconSvg(name, extra) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" ${extra||''}>${ICONS[name] || ''}</svg>`;
}
