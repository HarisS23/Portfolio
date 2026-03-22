/* ============================================================
   PORTFOLIO — MAIN JAVASCRIPT
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // Custom Cursor
  const cursor     = document.getElementById('cursor');
  const cursorRing = document.getElementById('cursor-ring');

  if (cursor && cursorRing) {
    // Hide the native pointer and text cursors globally
    const hideStyle = document.createElement('style');
    hideStyle.textContent = '*, *::before, *::after { cursor: none !important; }';
    document.head.appendChild(hideStyle);

    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
    document.addEventListener('mousemove', e => {
      mouseX = e.clientX; mouseY = e.clientY;
      cursor.style.left = mouseX + 'px';
      cursor.style.top  = mouseY + 'px';
    });
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      cursorRing.style.left = ringX + 'px';
      cursorRing.style.top  = ringY + 'px';
      requestAnimationFrame(animateRing);
    };
    animateRing();
    document.querySelectorAll('a, button, .project-card').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width = cursor.style.height = '18px';
        cursorRing.style.width = cursorRing.style.height = '56px';
        cursorRing.style.opacity = '0.8';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.width = cursor.style.height = '10px';
        cursorRing.style.width = cursorRing.style.height = '36px';
        cursorRing.style.opacity = '0.5';
      });
    });
  }

  // Navbar scroll
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 40), { passive: true });
  }

  // Mobile menu
  const menuBtn    = document.querySelector('.nav-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (menuBtn && mobileMenu) {
    let open = false;
    const toggle = () => {
      open = !open;
      mobileMenu.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
      const spans = menuBtn.querySelectorAll('span');
      if (open) {
        spans[0].style.transform = 'rotate(45deg) translate(4px, 4px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(4px, -4px)';
      } else {
        spans[0].style.transform = spans[1].style.opacity = spans[2].style.transform = '';
      }
    };
    menuBtn.addEventListener('click', toggle);
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', toggle));
  }

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(el => observer.observe(el));
  }

  // Contact form
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const btn = form.querySelector('.btn-primary');
      const original = btn.textContent;
      btn.textContent = 'Sending...';
      btn.style.opacity = '0.7';

      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });

        if (res.ok) {
          btn.textContent = 'Message Sent ✓';
          btn.style.background = '#2ecc71';
          btn.style.opacity = '1';
          form.reset();
          setTimeout(() => { btn.textContent = original; btn.style.background = ''; }, 3000);
        } else {
          btn.textContent = 'Something went wrong';
          btn.style.background = '#c0392b';
          btn.style.opacity = '1';
          setTimeout(() => { btn.textContent = original; btn.style.background = btn.style.opacity = ''; }, 3000);
        }
      } catch {
        btn.textContent = 'Failed to send';
        btn.style.opacity = '1';
        setTimeout(() => { btn.textContent = original; btn.style.opacity = ''; }, 3000);
      }
    });
  }

  // Smooth anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 72;
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
      }
    });
  });

});