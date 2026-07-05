# BIO Salud — Sitio web (v1.0)

Landing institucional de **BIO Salud**: consultorio médico especializado (oncología, ginecología, pediatría) y **Espacio BIO**, el lugar que se alquila para talleres, cursos y charlas. Godoy Cruz, Mendoza, Argentina.

Este documento está pensado para dos lectores: **el cliente**, que valida contenido y decisiones, y **el desarrollador**, que mantiene y extiende el sitio.

---

## 1. Qué se entregó en esta etapa

Una página única (`index.html`), autocontenida y lista para publicar, derivada del **Manual de Marca v1.0**. Incluye:

- Hero con la tesis de marca *“Cuidar la vida, cultivar comunidad”*.
- Sección **“Dos mundos, un mismo techo”** (BIO Salud + Espacio BIO) — el elemento de firma.
- **Especialidades** (oncología, ginecología, pediatría).
- Banda de **valores**.
- **Espacio BIO**: para qué se alquila y cómo consultar.
- **Turnos**: proceso en 3 pasos + anticipo del asistente con IA (fase futura).
- **Ubicación** con **Google Maps embebido** (Pedro J. Godoy 840, Godoy Cruz) y botón “Cómo llegar”.
- **Contacto** (WhatsApp, Instagram, email) y footer.

Esto corresponde a una primera entrega de la **Fase 3 (Desarrollo web)** del roadmap del manual.

---

## 2. Decisiones de diseño (por qué se ve así)

- **Tokens = única fuente de verdad.** Todos los colores, tipografías y radios viven en `:root` (bloque `tokens.css` al inicio del `<style>`). Ningún valor “hardcodeado” fuera de ahí. Si cambia la marca, se cambia en un solo lugar.
- **Tipografía:** Fraunces (display), Inter (cuerpo), JetBrains Mono (etiquetas/datos), igual que el manual.
- **Voz:** voseo argentino, claro y cercano (“Agendá”, “Reservá”, “Conocé”), sin promesas médicas ni signos de exclamación exagerados, respetando la guía de tono del manual.
- **Motion con criterio** (filosofía de ingeniería de diseño):
  - Botones con feedback de pulsado (`:active { scale(.97) }`), curvas de *easing* propias, transiciones que nombran propiedades exactas (nunca `transition: all`).
  - *Reveals* al hacer scroll con `opacity + translateY` (nada aparece “de la nada”).
  - Hover sólo en dispositivos con puntero fino (`@media (hover:hover)`), para no romper en touch.
  - `prefers-reduced-motion`: se desactiva el movimiento y se conservan los cambios de opacidad.

---

## 3. Estructura del archivo

Es **un solo archivo** `index.html` (HTML + CSS + JS embebidos, logos en base64). Ventaja: cero dependencias locales, se abre y se despliega en cualquier lado.

```
index.html
├── <head>          → meta SEO, Open Graph, fuentes de Google, tokens.css
├── <header.topbar> → logo + navegación + menú móvil
├── <main>
│   ├── hero
│   ├── #nosotros        (dos mundos — firma)
│   ├── #especialidades
│   ├── #valores
│   ├── #espacio         (Espacio BIO)
│   ├── #agendar         (turnos + nota IA)
│   ├── #ubicacion       (Google Maps)
│   └── #contacto
├── <footer>
└── <script>        → año dinámico, menú móvil, reveals, scroll-spy
```

Los **logos** se extrajeron del manual y se reutilizan exactos: versión blanca para fondos teal y versión teal/bosque para fondos claros. Quedan también como PNG sueltos en `assets/` por si se necesitan para otros usos.

---

## 4. Pendientes a completar antes de publicar (TODO del cliente)

Estos datos son **placeholders** y deben reemplazarse con los reales. Buscá y cambiá en `index.html`:

| Dato | Valor actual (placeholder) | Dónde aparece |
| --- | --- | --- |
| WhatsApp | `https://wa.me/5492610000000` | Botón hero, contacto, footer |
| Instagram | `https://instagram.com/biosalud.mza` | Contacto, footer |
| Email | `hola@biosalud.com.ar` | Contacto, footer |
| Horarios | Lun–Vie 08–20, Sáb 09–13 | Sección Ubicación |

> Tip dev: son strings literales, un *find & replace* alcanza. Recomendado centralizarlos en un objeto de configuración cuando el sitio pase a framework (ver Fase 3+).

El **mapa** ya apunta a la dirección real con el *embed* de Google Maps (sin API key). Si querés precisión exacta de la entrada, reemplazá la `q=` del `<iframe>` por las coordenadas (`q=-32.92xx,-68.85xx`).

---

## 5. Cómo previsualizar y desplegar

**Previsualizar localmente:**
```bash
# opción simple: abrir el archivo en el navegador
# o servirlo (recomendado, para que el iframe del mapa cargue bien)
python3 -m http.server 8000
# luego abrir http://localhost:8000
```

**Desplegar (cualquiera sirve, es estático):**
- **Netlify / Vercel / Cloudflare Pages:** arrastrar la carpeta o conectar el repo. Deploy en segundos.
- **GitHub Pages:** subir `index.html` a un repo y activar Pages.

Para producción real conviene tener dominio propio (ej. `biosalud.com.ar`) y certificado HTTPS (los proveedores de arriba lo dan gratis).

---

## 6. Calidad y accesibilidad (piso garantizado)

- Responsive de desktop a mobile (probado a 1280px y 390px).
- Navegación por teclado con foco visible y *skip link*.
- Imágenes decorativas con `alt=""`, mapa con `title`.
- Contraste acorde a la paleta de marca.
- Sin librerías externas → carga rápida; las fuentes son lo único que se pide a la red.

---

## 7. Cómo encaja en el proyecto (próximos pasos)

Según el roadmap del manual, esta entrega abre la Fase 3. Lo que sigue, cuando quieras avanzar:

- **Fase 3+ — Migrar a framework** (ej. Next.js o Astro + Tailwind con estos mismos tokens): páginas internas (cada especialidad, página de Espacio BIO), blog/novedades, SEO técnico y métricas.
- **Fase 4 — Integraciones con IA:** asistente para agendar turnos y reservar el espacio 24/7 (la sección de Turnos ya lo anticipa), y agendamiento de nuevos profesionales que quieran sumarse.
- **Fase 5 — Instagram y contenido:** optimización del perfil, plantillas y calendario editorial alineados al manual.

> Recomendación de ingeniería: versionar con Git desde ya, mantener este `index.html` como *baseline* de marca, y cuando se migre a framework, portar primero `tokens.css` para no perder la coherencia visual.

---

*BIO Salud · Manual de Marca v1.0 · Documento vivo — Mendoza, Argentina.*
# BioSalud
# BioSalud
