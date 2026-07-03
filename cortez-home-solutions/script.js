// Cortez Home Solutions — interaction layer

document.documentElement.classList.add('js');

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Hero intro choreography */
const markLoaded = () => document.body.classList.add('loaded');
if (reduceMotion) {
  markLoaded();
} else {
  setTimeout(markLoaded, 80);
}

/* Sticky nav hairline + scroll progress rule */
const nav = document.getElementById('nav');
const progress = document.getElementById('scroll-progress');

const onScroll = () => {
  nav.classList.toggle('scrolled', window.scrollY > 8);
  if (progress) {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
  }
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onScroll, { passive: true });

/* Mobile menu */
const toggle = document.getElementById('nav-toggle');
const links = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

links.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

/* Scroll reveals */
const revealEls = document.querySelectorAll('[data-reveal]');

if (reduceMotion || !('IntersectionObserver' in window)) {
  revealEls.forEach((el) => el.classList.add('in'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
  );
  revealEls.forEach((el) => io.observe(el));
}

/* Self-drawing SVGs (house elevation, blueprint shop drawing) */
const drawOnScroll = (svg, pathSelector, threshold) => {
  if (!svg) return;

  if (!reduceMotion) {
    svg.querySelectorAll(pathSelector).forEach((path) => {
      const len = Math.ceil(path.getTotalLength());
      path.style.setProperty('--len', len);
    });
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          svg.classList.add('drawn');
          io.disconnect();
        }
      });
    },
    { threshold }
  );
  io.observe(svg);
};

drawOnScroll(document.getElementById('house-draw'), '.hd', 0.4);
drawOnScroll(document.getElementById('blueprint-draw'), '.bp', 0.35);

/* Angi rating counts up to 5.0 */
const ratingEl = document.querySelector('.rating-num[data-count]');

if (ratingEl && !reduceMotion && 'IntersectionObserver' in window) {
  const target = parseFloat(ratingEl.dataset.count);
  ratingEl.textContent = '0.0';

  const ratingIo = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        ratingIo.disconnect();

        const start = performance.now();
        const duration = 900;
        const tick = (now) => {
          const p = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          ratingEl.textContent = (target * eased).toFixed(1);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    },
    { threshold: 0.6 }
  );
  ratingIo.observe(ratingEl);
}

/* FAQ accordion */
document.querySelectorAll('.faq-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const open = item.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
});

/* Recent-work horizontal scroller */
const workScroller = document.getElementById('work-scroller');

if (workScroller) {
  const prev = document.querySelector('.work-prev');
  const next = document.querySelector('.work-next');

  const step = () => {
    const card = workScroller.querySelector('.work-card');
    return card ? card.getBoundingClientRect().width + 20 : workScroller.clientWidth * 0.8;
  };

  const updateArrows = () => {
    if (!prev || !next) return;
    const max = workScroller.scrollWidth - workScroller.clientWidth - 2;
    prev.disabled = workScroller.scrollLeft <= 1;
    next.disabled = workScroller.scrollLeft >= max;
  };

  const behavior = reduceMotion ? 'auto' : 'smooth';
  if (prev) prev.addEventListener('click', () => workScroller.scrollBy({ left: -step(), behavior }));
  if (next) next.addEventListener('click', () => workScroller.scrollBy({ left: step(), behavior }));

  workScroller.addEventListener('scroll', updateArrows, { passive: true });
  window.addEventListener('resize', updateArrows);
  updateArrows();

  // Drag-to-scroll for mouse users (touch/trackpad use native scrolling)
  let dragging = false;
  let dragMoved = false;
  let startX = 0;
  let startScroll = 0;

  workScroller.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse') return;
    dragging = true;
    dragMoved = false;
    startX = e.clientX;
    startScroll = workScroller.scrollLeft;
    workScroller.setPointerCapture(e.pointerId);
  });

  workScroller.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 6) {
      dragMoved = true;
      workScroller.classList.add('is-dragging');
    }
    workScroller.scrollLeft = startScroll - dx;
  });

  const endDrag = () => {
    if (!dragging) return;
    dragging = false;
    workScroller.classList.remove('is-dragging');
    updateArrows();
  };

  workScroller.addEventListener('pointerup', endDrag);
  workScroller.addEventListener('pointercancel', endDrag);

  /* Click a photo to enlarge it (lightbox) */
  const lightbox = document.getElementById('lightbox');

  if (lightbox) {
    const lbImg = lightbox.querySelector('.lightbox-img');
    const lbPhoto = lightbox.querySelector('.lightbox-photo');
    const lbTag = lightbox.querySelector('.lightbox-tag');
    const lbDesc = lightbox.querySelector('.lightbox-desc');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    let lastFocus = null;

    const openLightbox = (card) => {
      const photo = card.querySelector('.work-photo');
      const img = photo.querySelector('img');
      const empty = photo.classList.contains('is-empty') || !img || !img.naturalWidth;
      lbPhoto.classList.toggle('is-empty', empty);
      if (empty) {
        lbImg.hidden = true;
        lbImg.removeAttribute('src');
      } else {
        lbImg.hidden = false;
        lbImg.src = img.currentSrc || img.src;
        lbImg.alt = img.alt;
      }
      const tag = card.querySelector('.work-tag');
      const desc = card.querySelector('.work-desc');
      lbTag.textContent = tag ? tag.textContent : '';
      lbDesc.textContent = desc ? desc.textContent : '';

      lastFocus = document.activeElement;
      lightbox.hidden = false;
      void lightbox.offsetWidth; // flush layout so the fade-in transition runs
      lightbox.classList.add('open');
      document.body.classList.add('no-scroll');
      closeBtn.focus();
    };

    const closeLightbox = () => {
      if (lightbox.hidden) return;
      lightbox.classList.remove('open');
      document.body.classList.remove('no-scroll');
      if (reduceMotion) {
        lightbox.hidden = true;
      } else {
        const onEnd = (e) => {
          if (e.target !== lightbox) return;
          lightbox.hidden = true;
          lightbox.removeEventListener('transitionend', onEnd);
        };
        lightbox.addEventListener('transitionend', onEnd);
      }
      if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
    };

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.querySelector('[data-lightbox-close]').addEventListener('click', closeLightbox);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
    });

    document.querySelectorAll('.work-card').forEach((card) => {
      const photo = card.querySelector('.work-photo');
      if (!photo) return;
      photo.setAttribute('role', 'button');
      photo.setAttribute('tabindex', '0');
      photo.setAttribute('aria-label', 'Enlarge photo');
      photo.addEventListener('click', () => {
        if (dragMoved) return;
        openLightbox(card);
      });
      photo.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(card);
        }
      });
    });
  }
}

/* Estimate form */
const form = document.getElementById('estimate-form');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let valid = true;

    form.querySelectorAll('.field').forEach((field) => {
      const input = field.querySelector('input, textarea');
      const error = field.querySelector('.field-error');
      if (!input || !input.required) return;

      const empty = input.value.trim() === '';
      field.classList.toggle('invalid', empty);
      if (error) error.hidden = !empty;
      if (empty) valid = false;
    });

    if (!valid) {
      const firstInvalid = form.querySelector('.field.invalid input, .field.invalid textarea');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Honeypot — silently drop bot submissions
    const honey = form.querySelector('.form-honey');
    if (honey && honey.value) return;

    const submitBtn = form.querySelector('button[type="submit"]');
    const successBox = form.querySelector('.form-success');
    const errorBox = form.querySelector('.form-error');
    const originalLabel = submitBtn.textContent;

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';
    if (errorBox) errorBox.hidden = true;

    const payload = {
      Name: document.getElementById('f-name').value.trim(),
      'Phone or email': document.getElementById('f-contact').value.trim(),
      'What they need': document.getElementById('f-type').value,
      Details: document.getElementById('f-list').value.trim() || '(none provided)',
      _subject: 'New estimate request — Cortez Home Solutions',
      _template: 'table',
      _captcha: 'false',
    };

    fetch('https://formsubmit.co/ajax/lostheboss23@gmail.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Request failed');
        return res.json();
      })
      .then(() => {
        form.querySelectorAll('.field, button[type="submit"], .form-note').forEach((el) => {
          el.hidden = true;
        });
        successBox.hidden = false;
        successBox.setAttribute('tabindex', '-1');
        successBox.focus();
      })
      .catch(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel;
        if (errorBox) {
          errorBox.hidden = false;
          errorBox.setAttribute('tabindex', '-1');
          errorBox.focus();
        }
      });
  });

  form.querySelectorAll('input, textarea').forEach((input) => {
    input.addEventListener('input', () => {
      const field = input.closest('.field');
      if (field.classList.contains('invalid') && input.value.trim() !== '') {
        field.classList.remove('invalid');
        const error = field.querySelector('.field-error');
        if (error) error.hidden = true;
      }
    });
  });
}
