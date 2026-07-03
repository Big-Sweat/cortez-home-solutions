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

    const success = form.querySelector('.form-success');
    form.querySelectorAll('.field, button[type="submit"], .form-note').forEach((el) => {
      el.hidden = true;
    });
    success.hidden = false;
    success.setAttribute('tabindex', '-1');
    success.focus();
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
