# Proyecto: Sitio propio de la agencia (Rodolfo Web)

Sitio de marca propia del negocio freelance de Rodolfo — no es un cliente,
es la vitrina de la agencia/servicio de diseño+desarrollo web.

## Estado del proyecto
Sin nombre de marca definido todavía, sin decidir si trabaja solo o con
compañero. Se parte igual con placeholders — no bloquea la estructura del
sitio. Ver registro central en Drive: `RodolfoWeb-Registro/sitio-propio/brief.md`.

## Template base
Reboost (original intacto en `~/Downloads/Templates_Web/reboost ver 1.0.3`,
NUNCA editar ahí — este proyecto es la copia de trabajo en
`HTML_TEMPLATE/`).

Verificado con contenido real: hero de fábrica es "Social Media Management
& Creative Agency for Businesses & Brands" — páginas services, portfolio,
portfolio-detail, team, pricing-plan, about-us, faqs, contact-us, blog.

## Regla de reskin (no reestructurar)
Solo colores/textos/imágenes al reskinnear — cero cambios de estructura,
menús o tipografía salvo pedido explícito. Ver lecciones del proyecto
Vitelia en la memoria de Claude Code (`project_freelance_scaffolding`):
- Verificar en el template original intacto antes de inventar un patrón
  ("¿Reboost no tenía algo similar?").
- Placeholders genéricos de equipo (nombres stock) se mantienen intactos
  hasta que haya persona real que agregar — no fabricar ni borrar.
- Nunca reemplazar una imagen/archivo compartido entre varias páginas sin
  antes hacer grep — crear archivo nuevo si está compartido.

## Ajustes ya decididos (no discutir de nuevo salvo que Rodolfo pida)
- `pricing-plan.html`: NO dejar tabla de precios fija tipo suscripción —
  el modelo real es cotización por proyecto ($150k-500k CLP según
  `negocio.md`). Sacar de navegación o reconvertir a rangos/paquetes sin
  precio cerrado.
- `team.html`: si al final el proyecto es solo, reconvertir a "Sobre mí"
  en vez de dejarlo como team demo.
- Portafolio: incluir sí. Primer caso a destacar es Clínica Vitelia
  (Dr. Miguel Paredes) — ver detalle abajo.

## Caso de portafolio: Clínica Vitelia
Detalle completo del proceso real en la memoria de Claude Code
(`project_freelance_scaffolding.md`) y en
`~/Downloads/DrMiguelParedes_Sitio/PROYECTO.md`.

Reglas específicas para esta pieza (decisión de Rodolfo, 2026-09-26):
- NO mencionar el precio real cobrado ($150-250k CLP) — fue tarifa familiar
  con descuento por ser primer trabajo, no representa la tarifa de mercado.
  No usar como referencia de precio en el copy del caso.
- NO mencionar que el cliente es familiar (tío de Rodolfo) — debilita el
  caso como prueba de trabajo con clientes externos. Encuadrar como
  cliente real sin más detalle de la relación.
- Sí mostrar como proof-of-value verificable: sitio en producción
  (clinicavitelia.cl, dominio propio), SEO básico (sitemap, Search
  Console), agenda integrada en vivo (Reservo), feed de Instagram en vivo,
  proceso iterativo real con feedback de cliente real.
- Pendiente: Rodolfo debe avisarle al Dr. Paredes antes de publicar su
  sitio como caso de portafolio (cortesía profesional).

## Licencia del template
Reboost es un template pagado (ThemeForest/Designesia, mismo proveedor que
Intrio). Decisión explícita de Rodolfo (2026-09-26): repo público en
GitHub con el código completo, mismo criterio ya aplicado al proyecto
Vitelia. No volver a plantear la objeción de licencia salvo que él
pregunte.

## Pivote de posicionamiento y simplificación (2026-10-02)
Rodolfo pidió "ponernos serios": enfoque en lo humano, diseño con toques
únicos, eficiente — venderse como páginas únicas, lejos del look genérico
de "diseño con IA". Pidió simplificar la UI a solo 4 secciones: Proyectos,
Equipo, Beneficios, Contacto (+ Inicio) — "no más que eso".

**Estructura simplificada (vigente):**
- Nav en todas las páginas: Inicio / Proyectos / Equipo / Beneficios /
  Contacto. Beneficios es un ancla (`index.html#beneficios`), no página
  aparte.
- Páginas activas/enlazadas: `index.html`, `portfolio.html`,
  `portfolio-detail.html`, `portfolio-detail-personal.html`,
  `team.html`, `contact-us.html`.
- Páginas huérfanas (archivo sigue existiendo, ya no enlazadas desde
  ningún nav — decisión: no borrarlas, solo desvincularlas, por si se
  recicla contenido después): `about-us.html`, `blog.html`, `faqs.html`,
  `pricing-plan.html`, `services.html`, `services-detail.html`,
  `single-post.html`. `404.html` se mantiene (página de error estándar).

**"Why Choose Us" → "Beneficios":** se reemplazaron las barras de progreso
con porcentajes fabricados (93%/87%/90%/98%) y los contadores falsos
(120/200 proyectos, 15 años) por una checklist honesta de 4
diferenciadores reales + 3 cifras honestas de agencia recién creada
("1 cliente real en producción", "Fundado 2026", "100% contenido real").

**Equipo simplificado:** `team.html` tenía 8 tarjetas de personas
inventadas (CEO, CMO, COO, etc. con nombres falsos) con tabs de filtro
por departamento — reemplazado por 1 tarjeta real (Rodolfo Rojas) + 1
placeholder honesto ("Equipo en Crecimiento — Hoy trabajo solo").

**Bug encontrado y corregido:** al quitar el `#team-tab` (contenedor de
pestañas de filtro) de `team.html`, el JS de `js/script.js` (que lee la
pestaña activa por ese ID al cargar la página) quedaba con
`dataTeamActive = undefined` y llamaba `filterClasses(undefined)`, lo
que removía la clase `.active` de TODAS las `.class-team` (que tienen
`display:none` por defecto sin esa clase) — las tarjetas de equipo
quedaban con 0x0 de tamaño, invisibles, sin error en consola. Solución:
dejar un `#team-tab` oculto (`style="display:none"`) con un solo tab
`data-team="all" class="active"` para que el JS tenga de dónde leer el
filtro inicial, sin mostrar la UI de pestañas. Lección: al quitar
elementos de UI que un template referencia por ID desde JS compartido,
verificar si ese JS depende de leer estado inicial de ese elemento en
`document.ready`, no solo de los listeners de click.

**WhatsApp:** se agregó un botón de WhatsApp en el footer (global,
`js/script.js`-independiente, enlace directo `wa.me`) y en los cards de
contacto — **el número usado es un placeholder
(`https://wa.me/56900000000`), no es el número real de Rodolfo.
Pendiente que él lo reemplace o lo pase para actualizarlo.**

**Textos giratorios "CREATIVE. STRATEGIC. PROFESSIONAL." (decorativos,
aparecen 2-3 veces por página):** traducidos a "DISEÑO. CÓDIGO.
DETALLE." en las 6 páginas activas (index, team, portfolio, las 2
portfolio-detail, contact-us). Las páginas huérfanas quedaron sin tocar
(no es prioridad, no se enlazan desde ningún lado).

## Equipo real + ajustes de footer (2026-10-02, misma sesión)
Rodolfo pasó fotos reales (carpeta `Recursos/`, gitignored) y confirmó un
**nuevo integrante: Darío Benítez**, mismo rol que Rodolfo (Diseño &
Desarrollo Web) — ya no es "trabajo solo". Procesadas y versionadas en
`image/team/rodolfo.jpg` y `image/team/dario.jpg` (redimensionadas con
`sips`, originales de `Recursos/` quedan fuera de git).

- Hero de `team.html`: el placeholder "1920x1280" es en realidad un
  `background-image` CSS (`.bg-image-team` en `css/style.css`, 3
  ocurrencias por media queries), no un `<img>` — reemplazado el
  `dummy-img-1920x1280.jpg` por `image/team/rodolfo.jpg` en las 3.
  Copy del subtítulo mejorado: "TRATO DIRECTO, SIN FILTROS" →
  "GENTE DE VERDAD, CERO FILTROS".
- Encabezado de la grilla de equipo: "El Humano Detrás de Rodolfo Web" →
  "Conoce a las Mentes Creativas Detrás de Rodolfo Web" (tono más chill,
  plural porque ahora son 2).
- Tarjeta de Rodolfo: foto real. Tarjeta que antes era "Equipo en
  Crecimiento" (placeholder) → Darío Benítez, foto real, mismos íconos
  sociales que Rodolfo.
- **Corrección (2026-10-02, mismo día):** Rodolfo confirmó explícitamente
  que la foto de `Recursos/UI_UX Design Guide_....jpeg` (mesa de trabajo,
  laptops, bocetos) SÍ va en el sitio — es la imagen que quería para el
  fondo del hero de Equipo, no la de Rodolfo. Corregido: `.bg-image-team`
  ahora apunta a `image/team/equipo-trabajo.jpg` (las 3 ocurrencias por
  media query), `image/team/rodolfo.jpg` queda solo en su tarjeta del
  grid. También corregido el título del hero: "EQUIPO" → "NUESTRO
  EQUIPO" (Rodolfo lo había pedido explícito y no se aplicó a la
  primera). Lección: no asumir que una imagen de aspecto "stock" nunca
  es la intención real del usuario — confirmar antes de descartarla en
  vez de decidir unilateralmente no usarla.
- Footer global (14 páginas): Rodolfo pidió sacar el botón de WhatsApp
  que se había agregado (rompía la diagramación original de Reboost) y
  mejorar el copy — revertido a la estructura original (solo título +
  párrafo + email + logo), copy nuevo: "HABLEMOS DE TU PRÓXIMA PÁGINA" /
  "Sin filtros ni intermediarios — cuéntame tu idea y partimos de ahí."
  El WhatsApp sigue disponible en Contacto y en los íconos sociales del
  header, solo se sacó del footer.

**Tercera integrante (2026-10-05):** Ybrana Urosa se suma al equipo —
rol Publicista & Marketing (distinto del rol de diseño/desarrollo de
Rodolfo y Darío). Tarjeta agregada en `team.html` (`image/team/ybrana.jpg`,
misma estructura de card que las otras dos). No se tocó el stack de
avatares "1er caso" de `index.html` (ese es específico del caso Vitelia,
en el que ella no participó).

**Pendiente/gaps conocidos (actualizado 2026-10-03):**
- Resuelto: la sección "Clientes" duplicada dentro de `index.html` ya no
  tiene las tarjetas fake "Vision Tech Solutions" — ahora muestra los
  mismos 2 casos reales que `portfolio.html` (ver más abajo).
- Resuelto: "Pricing Plan" (precios de suscripción falsos) reemplazado
  por sección "Cómo Trabajamos" (proceso en 4 pasos, sin precios
  inventados). FAQ traducido con preguntas reales. Blog (posts falsos)
  eliminado. Testimonios/stats "4.9 Star" del home ya se habían sacado
  junto con toda la sección "Beneficios".
- **Grilla de Clientes — decisión para cuando haya más casos (Rodolfo,
  2026-10-03):** hoy la grilla de 2 tarjetas (en `index.html` y
  `portfolio.html`) está bien así con solo 2 casos reales, pero cuando
  haya más clientes, volver a la grilla original de Reboost (mosaico de
  3 columnas, la que tenía 7 tarjetas antes de reducirla) en vez de
  seguir en 2 columnas simples.
- El formulario de contacto (`contact-us.html`) no tiene backend real de
  envío — el sitio está en GitHub Pages (no Netlify), así que
  `submit-form.js` probablemente no envía nada de verdad. Falta decidir
  integración (Web3Forms/Formspree, según `negocio.md`).

## Stack e integraciones
- Hosting: GitHub Pages (dominio propio pendiente de decidir/comprar).
- Contacto: Netlify Forms o Web3Forms/Formspree (por definir, sitio no
  está en Netlify por ahora).
- Sin agenda/booking — este sitio no la necesita, es presencia de agencia.

## Revisión externa y correcciones (2026-10-09)
- **Copy:** se sacó «sin plantillas / a medida» de las páginas activas (el sitio y el de Vitelia parten de templates comprados): ahora «diseño personalizado para tu negocio». «Plan a Medida» pasó a «Plan Personalizado». Evitar volver a prometer «único», «sin plantillas», «no genérico».
- **Redes:** Instagram y LinkedIn de la agencia están ocultos (`d-none` + `data-oculto="pendiente"`) hasta que existan; también la tarjeta de Instagram de Contacto. Para reactivarlos, quitar `d-none` y poner el link real.
- **Contacto:** el formulario va primero, las tarjetas (dónde, correo, WhatsApp) debajo; se eliminó el bloque «Síguenos en redes».
- **Archivos:** imágenes sin espacios (`site-logo.png`, `icon-1.png`…); `portofolio*.html` → `portfolio*.html`.
- **Accesibilidad:** el texto circular «Escribe y resolvemos» es `aria-hidden` (la letra por letra es el efecto visual) y el enlace tiene `aria-label`; tooltips con «i» marcados; alts en logos que son enlaces.
- **Compartir:** `og:image` propio (`image/og-compas.png`, 1200×630); los casos usan su captura.
- **404** traducida al español (el título quedaba invisible por la animación).
- Precios publicados: Vitrina $245.000 y Agenda $295.000.

## Dominio propio (2026-10-09)
`agenciacompas.cl` (NIC Chile, cuenta propia de Rodolfo como persona natural; DNS en Cloudflare, cuenta aparte de la de Vitelia). Registros: 4 A de GitHub Pages + CNAME `www` → `rodolforjs.github.io`, todos «DNS only». Archivo `CNAME` en la raíz del repo. Canonical, og, sitemap y robots apuntan a `https://agenciacompas.cl/`. Correo: Cloudflare Email Routing (`contacto@` y `rodolfo@`) + Gmail «Enviar como» con Brevo (pendiente).
