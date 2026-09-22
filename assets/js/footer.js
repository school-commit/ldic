/* =========================================================
   FOOTER.JS — renders the shared site footer on every page
   ========================================================= */
(function () {
  function mountFooter() {
    const root = document.getElementById('footer-root');
    if (!root) return;

    root.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col">
            <div class="footer-brand">
              <img src="assets/images/logo.png" alt="LDIC Logo" />
              <div>
                <div class="name hi-head">लक्ष्मी देवी इंटर कॉलेज</div>
                <div class="loc">मधवापुर (बहराइच), उत्तर प्रदेश</div>
              </div>
            </div>
            <p>उत्तर प्रदेश शासन द्वारा मान्यता प्राप्त शिक्षण संस्थान। शिक्षा • संस्कार • अनुशासन • सफलता</p>
          </div>
          <div class="footer-col">
            <h4>Quick Links</h4>
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="results.html">Results</a>
            <a href="scholarship.html">Scholarship</a>
            <a href="gallery.html">Gallery</a>
            <a href="contact.html">Contact</a>
          </div>
          <div class="footer-col">
            <h4>Office</h4>
            <a href="tel:+918795853788">📞 8795853788</a>
            <a href="mailto:ldic1236@gmail.com">✉️ ldic1236@gmail.com</a>
            <a href="https://maps.app.goo.gl/7c9vRDv6QZhhVDzn6" target="_blank" rel="noopener">📍 Google Maps पर देखें</a>
          </div>
          <div class="footer-col">
            <h4>Connect With Us</h4>
            <div class="footer-social">
              <a href="https://youtube.com/@ldic1236?si=Wy3Z7Y0gZsjElKBQ" target="_blank" rel="noopener" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.6-.46-5.3a3 3 0 0 0-2.1-2.1C18.7 4 12 4 12 4s-6.7 0-8.44.6a3 3 0 0 0-2.1 2.1C1 8.4 1 12 1 12s0 3.6.46 5.3a3 3 0 0 0 2.1 2.1C5.3 20 12 20 12 20s6.7 0 8.44-.6a3 3 0 0 0 2.1-2.1C23 15.6 23 12 23 12ZM9.8 15.5v-7l6 3.5-6 3.5Z"/></svg>
              </a>
              <a href="https://www.instagram.com/ldic1236" target="_blank" rel="noopener" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/></svg>
              </a>
              <a href="https://www.facebook.com/ldic1236" target="_blank" rel="noopener" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.5H16l.4-3H13.5V8.4c0-.87.24-1.46 1.5-1.46H16.5V4.35C16.2 4.3 15.2 4.2 14 4.2c-2.4 0-4 1.46-4 4.15v2.15H7.5v3H10V21h3.5Z"/></svg>
              </a>
              <a href="https://x.com/ldic1236" target="_blank" rel="noopener" aria-label="X (Twitter)">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4l7 8.5L4.3 20H6.6L12 14l4.3 6H20l-7.3-8.8L19.5 4h-2.3l-5 5.9L8 4H4Z"/></svg>
              </a>
              <a href="https://www.telegram.com/ldic1236" target="_blank" rel="noopener" aria-label="Telegram">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.5 4.5 2.7 11.7c-1.1.44-1.1 1.07-.2 1.34l4.8 1.5 1.85 5.7c.23.6.4.85.83.85.34 0 .5-.16.7-.36l1.9-1.85 4 2.95c.73.4 1.26.2 1.44-.68l2.6-12.3c.27-1.1-.4-1.6-1.13-1.36Z"/></svg>
              </a>
              <a href="https://whatsapp.com/channel/0029VaUwFchAojYnk6egLF0L" target="_blank" rel="noopener" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.4 14.2c-.23.65-1.34 1.24-1.86 1.3-.5.06-1 .27-3.4-.7-2.86-1.17-4.7-4.1-4.85-4.3-.14-.2-1.15-1.53-1.15-2.9 0-1.4.72-2.06.98-2.34.26-.28.56-.35.75-.35h.54c.17 0 .4-.06.63.48.23.55.78 1.9.85 2.03.07.14.11.3.02.5-.1.2-.14.3-.28.46-.14.17-.3.37-.42.5-.14.14-.29.3-.13.6.16.3.72 1.2 1.55 1.94 1.07.95 1.96 1.24 2.26 1.38.3.14.47.12.65-.07.18-.2.75-.87.95-1.17.2-.3.4-.24.66-.14.28.1 1.76.83 2.06.98.3.15.5.22.57.34.07.13.07.72-.16 1.36Z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          &copy; Laxmi Devi Inter College. All Rights Reserved.
        </div>
      </div>
    </footer>`;
  }
  document.addEventListener('DOMContentLoaded', mountFooter);
})();
