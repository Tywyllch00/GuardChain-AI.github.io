const NAVBAR_HTML = `
<nav class="fixed w-full top-0 z-50 bg-[#050507]/80 backdrop-blur-xl border-b border-white/5">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <a href="index.html" class="flex items-center gap-2.5">
        <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center text-sm">🛡️</div>
        <span class="font-bold text-lg tracking-tight">GuardChain <span class="text-emerald-400">AI</span></span>
      </a>
      <a href="https://github.com/Tywyllch00/GuardChain-AI" target="_blank" class="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg font-medium text-sm transition flex items-center gap-2">
        <span>GitHub</span><span class="text-xs">↗</span>
      </a>
    </div>
  </div>
</nav>`;

const SUBNAV_ITEMS = [
  { num: '00', label: 'Inicio',       page: 'index.html' },
  { num: '01', label: 'Problema',     page: 'problem.html' },
  { num: '02', label: 'Solución',     page: 'solution.html' },
  { num: '03', label: 'Demo',         page: 'demo.html' },
  { num: '04', label: 'Mercado',      page: 'market.html' },
  { num: '05', label: 'Negocio',      page: 'business.html' },
  { num: '06', label: 'Roadmap',      page: 'roadmap.html' },
  { num: '07', label: 'Arquitectura', page: 'architecture.html' },
  { num: '08', label: 'FAQ',          page: 'faq.html' }
];

const SUBNAV_HTML = `
<div class="subnav fixed w-full top-16 z-40">
  <div class="subnav-scroll overflow-x-auto">
    <div class="subnav-track flex items-center gap-1.5 py-3 px-4">
      <span class="text-[10px] font-mono text-emerald-500/40 mr-2 hidden md:inline shrink-0">// NAV</span>
      ${SUBNAV_ITEMS.map(item => `
        <a href="${item.page}" data-page="${item.page}" class="subnav-link shrink-0">
          <span class="subnav-num">${item.num}</span>${item.label}
        </a>
      `).join('')}
    </div>
  </div>
</div>`;

const FOOTER_HTML = `
<footer class="py-12 border-t border-white/5 bg-white/[0.01]">
  <div class="max-w-7xl mx-auto px-4">
    <div class="grid md:grid-cols-4 gap-8 mb-8">
      <div>
        <div class="flex items-center gap-2 mb-4">
          <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center text-xs">🛡️</div>
          <span class="font-bold">GuardChain AI</span>
        </div>
        <p class="text-gray-500 text-sm">Ciberseguridad inmutable en la blockchain de Stellar.</p>
      </div>
      <div>
        <h4 class="font-semibold text-sm mb-3 text-white">Producto</h4>
        <ul class="space-y-2 text-sm text-gray-500">
          <li><a href="solution.html" class="hover:text-emerald-400">Solución</a></li>
          <li><a href="demo.html" class="hover:text-emerald-400">Demo</a></li>
          <li><a href="business.html" class="hover:text-emerald-400">Precios</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold text-sm mb-3 text-white">Recursos</h4>
        <ul class="space-y-2 text-sm text-gray-500">
          <li><a href="https://github.com/Tywyllch00/GuardChain-AI" target="_blank" class="hover:text-emerald-400">GitHub</a></li>
          <li><a href="https://stellar.org" target="_blank" class="hover:text-emerald-400">Stellar</a></li>
          <li><a href="https://stellar.expert" target="_blank" class="hover:text-emerald-400">Stellar Expert</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold text-sm mb-3 text-white">Empresa</h4>
        <ul class="space-y-2 text-sm text-gray-500">
          <li><a href="faq.html" class="hover:text-emerald-400">FAQ</a></li>
          <li><a href="roadmap.html" class="hover:text-emerald-400">Roadmap</a></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
      <p class="text-gray-600 text-sm">© 2026 GuardChain AI. Hackathon Stellar.</p>
      <p class="text-gray-600 text-sm">Built with 💚 for immutable security</p>
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('navbar');
  if (nav) nav.innerHTML = NAVBAR_HTML;

  const foot = document.getElementById('footer');
  if (foot) foot.innerHTML = FOOTER_HTML;

  let subnav = document.getElementById('subnav');
  if (!subnav) {
    subnav = document.createElement('div');
    subnav.id = 'subnav';
    const navEl = document.getElementById('navbar');
    if (navEl && navEl.parentNode) {
      navEl.parentNode.insertBefore(subnav, navEl.nextSibling);
    } else {
      document.body.insertBefore(subnav, document.body.firstChild);
    }
  }
  subnav.innerHTML = SUBNAV_HTML;

  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .subnav-link').forEach(el => {
    if (el.dataset.page === page) el.classList.add('active');
  });

  // Auto-centrar el link activo en el subnav
  const activeLink = subnav.querySelector('.subnav-link.active');
  if (activeLink) {
    activeLink.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }
});