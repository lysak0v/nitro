document.getElementById('year').textContent = new Date().getFullYear();

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('main-menu');
if (menuToggle && menu) {
  const mq = window.matchMedia('(max-width: 1199px)');
  const setMenuState = (open) => {
    menu.dataset.open = String(open);
    menuToggle.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
  };
  menuToggle.addEventListener('click', () => {
    const open = menu.dataset.open !== 'true';
    setMenuState(open);
  });
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (mq.matches) setMenuState(false);
    });
  });
  window.matchMedia('(min-width: 1200px)').addEventListener('change', e => {
    if (e.matches) setMenuState(false);
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') setMenuState(false);
  });
}

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    if (!id) return;
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (window.location.hash !== '#' + id) {
        history.replaceState(null, '', '#' + id);
      }
    }
  });
});

document.querySelectorAll('[data-select]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const card = e.currentTarget.closest('.plan');
    if (!card) return;
    const plan = card.dataset.plan || '';
    const prices = {
      '1m': '150 ₽ за 30 дней',
      '3m': '350 ₽ за 3 мес (~117 ₽/мес)',
      '6m': '600 ₽ за 6 мес (~100 ₽/мес)',
      '12m': '1000 ₽ за 12 мес (~84 ₽/мес)'
    };
    toast(`Выбран тариф: ${card.querySelector('h3').textContent} — ${prices[plan] || ''}. Оплата в Telegram.`);
  });
});

const toast = (msg) => {
  const t = document.createElement('div');
  t.textContent = msg;
  t.setAttribute('role', 'status');
  t.setAttribute('aria-live', 'polite');
  t.style.position = 'fixed';
  t.style.left = '50%';
  t.style.top = '16px';
  t.style.transform = 'translateX(-50%)';
  t.style.background = 'linear-gradient(135deg, var(--primary-600), var(--primary))';
  t.style.color = '#0b0f16';
  t.style.padding = '10px 14px';
  t.style.borderRadius = '12px';
  t.style.fontWeight = '800';
  t.style.boxShadow = 'var(--shadow)';
  t.style.zIndex = '50';
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3200);
};
