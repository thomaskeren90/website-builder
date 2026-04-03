/* ============================================================
   VANGUARD UNIVERSITY — Shared Components
   Renders header + footer on every page via JS
   ============================================================ */

const SITE = {
  name: 'Vanguard University',
  tagline: 'Lead. Innovate. Transform.',
  email: 'hello@vanguarduni.ac.id',
  phone: '+62 21 7890 5678',
  address: 'Jl. Merdeka Raya No. 88, Jakarta Selatan 12950',
  year: new Date().getFullYear(),
};

// ---- HEADER ----
function renderHeader(activePage) {
  document.getElementById('site-header').innerHTML = `
    <div class="topbar">
      <div class="container topbar-inner">
        <div class="topbar-info">
          <span><i class="bi bi-envelope"></i> ${SITE.email}</span>
          <span><i class="bi bi-telephone"></i> ${SITE.phone}</span>
          <span><i class="bi bi-clock"></i> Mon–Fri 08:00–17:00 WIB</span>
        </div>
        <div class="topbar-social">
          <a href="#"><i class="bi bi-facebook"></i></a>
          <a href="#"><i class="bi bi-instagram"></i></a>
          <a href="#"><i class="bi bi-youtube"></i></a>
          <a href="#"><i class="bi bi-linkedin"></i></a>
          <a href="#"><i class="bi bi-tiktok"></i></a>
        </div>
      </div>
    </div>
    <nav class="navbar" id="navbar">
      <div class="container navbar-inner">
        <a class="navbar-brand" href="index.html">
          <span class="brand-dot"></span> Vanguard
        </a>
        <button class="nav-toggle" id="navToggle" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
        <div class="nav-menu" id="navMenu">
          <a href="index.html" ${activePage==='home'?'class="active"':''}>Home</a>
          <a href="about.html" ${activePage==='about'?'class="active"':''}>About</a>
          <a href="programs.html" ${activePage==='programs'?'class="active"':''}>Programs</a>
          <a href="faculty.html" ${activePage==='faculty'?'class="active"':''}>Faculty</a>
          <a href="campus.html" ${activePage==='campus'?'class="active"':''}>Campus</a>
          <a href="news.html" ${activePage==='news'?'class="active"':''}>News</a>
          <a href="contact.html" ${activePage==='contact'?'class="active"':''}>Contact</a>
          <a href="contact.html" class="nav-cta">Apply Now</a>
        </div>
      </div>
    </nav>
  `;

  // Mobile toggle
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    menu.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
  });

  // Close menu on link click
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.classList.remove('active');
      menu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  });
  navbar.classList.toggle('scrolled', window.scrollY > 30);
}

// ---- FOOTER ----
function renderFooter() {
  document.getElementById('site-footer').innerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <a class="footer-brand" href="index.html">
              <span class="brand-dot"></span> Vanguard
            </a>
            <p>Leading the next generation of thinkers, builders, and changemakers through world-class education and real-world experience.</p>
            <div class="footer-social">
              <a href="#"><i class="bi bi-facebook"></i></a>
              <a href="#"><i class="bi bi-instagram"></i></a>
              <a href="#"><i class="bi bi-youtube"></i></a>
              <a href="#"><i class="bi bi-linkedin"></i></a>
              <a href="#"><i class="bi bi-tiktok"></i></a>
            </div>
          </div>
          <div class="footer-col">
            <h6>Academics</h6>
            <ul class="footer-links">
              <li><a href="programs.html">Undergraduate</a></li>
              <li><a href="programs.html">Graduate</a></li>
              <li><a href="programs.html">Online Programs</a></li>
              <li><a href="programs.html">Research Centers</a></li>
              <li><a href="#">Library</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h6>Campus</h6>
            <ul class="footer-links">
              <li><a href="campus.html">Virtual Tour</a></li>
              <li><a href="campus.html">Student Life</a></li>
              <li><a href="#">Housing</a></li>
              <li><a href="#">Sports & Clubs</a></li>
              <li><a href="news.html">Events</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="about.html">About Us</a></li>
              <li><a href="faculty.html">Faculty</a></li>
              <li><a href="contact.html">Admissions</a></li>
              <li><a href="contact.html">Scholarships</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; ${SITE.year} ${SITE.name}. All rights reserved.</p>
          <div class="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
    <button class="back-top" id="backTop" aria-label="Back to top">
      <i class="bi bi-arrow-up"></i>
    </button>
  `;

  // Back to top
  const btn = document.getElementById('backTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 400);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ---- COUNTER ANIMATION ----
function initCounters() {
  const els = document.querySelectorAll('[data-count]');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.count);
      let cur = 0;
      const step = Math.ceil(target / 50);
      const t = setInterval(() => {
        cur += step;
        if (cur >= target) { cur = target; clearInterval(t); }
        el.textContent = cur.toLocaleString();
      }, 30);
      obs.unobserve(el);
    });
  }, { threshold: 0.4 });
  els.forEach(el => obs.observe(el));
}

// ---- AOS INIT ----
document.addEventListener('DOMContentLoaded', () => {
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 700, once: true, offset: 60 });
  }
  initCounters();
});
