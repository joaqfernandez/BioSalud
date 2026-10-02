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

  // Formulario "Sumate al staff": validación, saneamiento y anti-spam.
  // OJO: todo esto corre en el navegador y se puede saltear. El backend que
  // reciba los datos (data-endpoint) tiene que volver a validar todo.
  var staffForm = document.getElementById('staffForm');
  if (staffForm) {
    var MIN_FILL_MS = 4000;          // menos que esto = probablemente un bot
    var COOLDOWN_MS = 60 * 1000;     // un envío por minuto por navegador
    var MAX_LINKS = 2;
    var COOLDOWN_KEY = 'staffFormLastSent';
    var startedAt = Date.now();
    var sending = false;
    var statusEl = document.getElementById('staffStatus');
    var submitBtn = staffForm.querySelector('button[type="submit"]');

    var NAME_RE = /^[A-Za-zÀ-ÖØ-öø-ÿ' .-]+$/;
    var EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;

    var rules = {
      nombre: { min: 2, max: 60, re: NAME_RE, msg: 'Usá solo letras, espacios, apóstrofes o guiones.' },
      apellido: { min: 2, max: 60, re: NAME_RE, msg: 'Usá solo letras, espacios, apóstrofes o guiones.' },
      especialidad: { min: 3, max: 80, re: /^[A-Za-zÀ-ÖØ-öø-ÿ0-9' .,()\/-]+$/, msg: 'La especialidad tiene caracteres no permitidos.' },
      email: { min: 6, max: 120, re: EMAIL_RE, msg: 'Revisá el email, no parece válido.' },
      mensaje: { min: 20, max: 1500, multiline: true }
    };

    // Normaliza y limpia: quita caracteres de control, etiquetas HTML y
    // saltos de línea en campos de una línea (evita inyección de cabeceras).
    var clean = function (value, multiline) {
      var v = String(value).normalize('NFC');
      v = v.replace(/<[^>]*>/g, '');
      v = multiline
        ? v.replace(/\r\n?/g, '\n').replace(/[\u0000-\u0008\u000B-\u001F\u007F​-‏‪-‮⁦-⁩]/g, '').replace(/\n{3,}/g, '\n\n')
        : v.replace(/[\u0000-\u001F\u007F​-‏‪-‮⁦-⁩]/g, ' ').replace(/\s+/g, ' ');
      return v.trim();
    };

    var setFieldError = function (input, msg) {
      var err = document.getElementById(input.id + 'Err');
      if (err) err.textContent = msg || '';
      if (msg) input.setAttribute('aria-invalid', 'true');
      else input.removeAttribute('aria-invalid');
    };

    var setStatus = function (msg, isError) {
      statusEl.textContent = msg;
      statusEl.classList.toggle('is-error', !!isError);
    };

    var validate = function () {
      var data = {};
      var firstBad = null;
      Object.keys(rules).forEach(function (name) {
        var input = staffForm.elements[name];
        var rule = rules[name];
        var v = clean(input.value, rule.multiline);
        var msg = '';
        if (!v) msg = 'Este campo es obligatorio.';
        else if (v.length < rule.min) msg = 'Escribí al menos ' + rule.min + ' caracteres.';
        else if (v.length > rule.max) msg = 'Máximo ' + rule.max + ' caracteres.';
        else if (rule.re && !rule.re.test(v)) msg = rule.msg;
        else if (name === 'mensaje' && (v.match(/https?:\/\/|www\./gi) || []).length > MAX_LINKS) {
          msg = 'El mensaje tiene demasiados enlaces.';
        }
        setFieldError(input, msg);
        if (msg && !firstBad) firstBad = input;
        data[name] = name === 'email' ? v.toLowerCase() : v;
      });
      return { ok: !firstBad, firstBad: firstBad, data: data };
    };

    var readLastSent = function () {
      try { return parseInt(localStorage.getItem(COOLDOWN_KEY), 10) || 0; } catch (e) { return 0; }
    };
    var lastSent = readLastSent();
    var markSent = function () {
      lastSent = Date.now();
      try { localStorage.setItem(COOLDOWN_KEY, String(lastSent)); } catch (e) { /* sin storage */ }
    };

    // Limpia el error de un campo apenas la persona lo corrige
    staffForm.addEventListener('input', function (e) {
      if (e.target.getAttribute('aria-invalid') === 'true') setFieldError(e.target, '');
    });

    staffForm.addEventListener('submit', function (e) {
      e.preventDefault(); // nunca dejar que el navegador mande los datos en la URL
      if (sending) return;
      setStatus('');

      // Bots: honeypot completo o envío instantáneo. Se simula éxito para no darles pistas.
      if (staffForm.elements.website.value || Date.now() - startedAt < MIN_FILL_MS) {
        staffForm.reset();
        setStatus('¡Gracias! Recibimos tu postulación.');
        return;
      }

      var wait = COOLDOWN_MS - (Date.now() - Math.max(lastSent, readLastSent()));
      if (wait > 0) {
        setStatus('Ya enviaste una postulación hace poco. Probá de nuevo en ' + Math.ceil(wait / 1000) + ' segundos.', true);
        return;
      }

      var result = validate();
      if (!result.ok) {
        setStatus('Revisá los campos marcados.', true);
        result.firstBad.focus();
        return;
      }

      var d = result.data;
      var endpoint = staffForm.getAttribute('data-endpoint');
      var done = function () {
        markSent();
        staffForm.reset();
        startedAt = Date.now();
        setStatus('¡Gracias! Recibimos tu postulación.');
      };

      if (!endpoint) {
        // Sin backend todavía: se abre el cliente de correo con los datos ya saneados
        var to = staffForm.getAttribute('data-mailto');
        var body = 'Nombre: ' + d.nombre + ' ' + d.apellido + '\nEspecialidad: ' + d.especialidad +
          '\nEmail: ' + d.email + '\n\n' + d.mensaje;
        window.location.href = 'mailto:' + to +
          '?subject=' + encodeURIComponent('Postulación staff: ' + d.nombre + ' ' + d.apellido) +
          '&body=' + encodeURIComponent(body);
        markSent();
        setStatus('Se abrió tu aplicación de correo con la postulación lista para enviar.');
        return;
      }

      sending = true;
      submitBtn.disabled = true;
      var controller = 'AbortController' in window ? new AbortController() : null;
      var timer = controller && setTimeout(function () { controller.abort(); }, 15000);
      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(d),
        credentials: 'omit',
        signal: controller ? controller.signal : undefined
      }).then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        done();
      }).catch(function () {
        setStatus('No pudimos enviar la postulación. Probá de nuevo en unos minutos.', true);
      }).then(function () {
        if (timer) clearTimeout(timer);
        sending = false;
        submitBtn.disabled = false;
      });
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
