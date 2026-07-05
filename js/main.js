(function () {
  // Año dinámico
  document.getElementById('year').textContent = new Date().getFullYear();

  // Topbar: borde al hacer scroll
  var topbar = document.getElementById('topbar');
  var onScroll = function () { topbar.classList.toggle('scrolled', window.scrollY > 8); };
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });

  // Menú móvil
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  }
  burger.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });

  // Reveal on scroll (una vez)
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: .08 });
  document.querySelectorAll('.reveal:not(.in)').forEach(function (el) { io.observe(el); });

  // Scroll-spy en la nav
  var links = {};
  document.querySelectorAll('nav.main a.link').forEach(function (l) {
    var id = l.getAttribute('href').slice(1); links[id] = l;
  });
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        Object.values(links).forEach(function (l) { l.classList.remove('active'); });
        if (links[e.target.id]) links[e.target.id].classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  ['especialidades', 'espacio', 'agendar', 'ubicacion'].forEach(function (id) {
    var s = document.getElementById(id); if (s) spy.observe(s);
  });
})();
