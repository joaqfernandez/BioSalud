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

  // Reveal on scroll (una vez). CSS shows .reveal elements by default;
  // elements already visible on load get 'in' immediately with no hidden
  // frame, and only elements still below the fold are opted into the
  // hidden + IntersectionObserver treatment via 'js-reveal' on <html>.
  var pending = Array.prototype.slice.call(document.querySelectorAll('.reveal:not(.in)')).filter(function (el) {
    var r = el.getBoundingClientRect();
    var visible = r.top < window.innerHeight * 0.92 && r.bottom > 0;
    if (visible) { el.classList.add('in'); }
    return !visible;
  });
  if (pending.length) {
    document.documentElement.classList.add('js-reveal');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: .08 });
    pending.forEach(function (el) { io.observe(el); });
  }

  // Equipo: hover vinculado entre foto y nombre (mismo data-member)
  var showcase = document.getElementById('teamShowcase');
  if (showcase) {
    var members = Array.prototype.slice.call(showcase.querySelectorAll('[data-member]'));
    var setHovered = function (id) {
      members.forEach(function (el) {
        var isMatch = el.getAttribute('data-member') === id;
        el.classList.toggle('is-active', !!id && isMatch);
        el.classList.toggle('is-dimmed', !!id && !isMatch);
      });
    };
    members.forEach(function (el) {
      var id = el.getAttribute('data-member');
      el.addEventListener('mouseenter', function () { setHovered(id); });
      el.addEventListener('mouseleave', function () { setHovered(null); });
    });
  }

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
  ['equipo', 'especialidades', 'espacio', 'agendar', 'ubicacion'].forEach(function (id) {
    var s = document.getElementById(id); if (s) spy.observe(s);
  });
})();
