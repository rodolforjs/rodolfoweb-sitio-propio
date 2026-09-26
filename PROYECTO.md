# Bitácora — Sitio propio de la agencia

## 2026-09-26 — Arranque
- Decisión: partir con template **Reboost**, verificado con contenido real
  (agencia creativa/social media), mejor match que cualquier template
  evaluado antes para uso propio.
- Copiado `~/Downloads/Templates_Web/reboost ver 1.0.3/HTML_TEMPLATE` a
  este proyecto (`HTML_TEMPLATE/`) — original queda intacto.
- Decisión: incluir sección de portafolio (ya viene en Reboost:
  `portofolio.html` / `portofolio-detail.html`), primer caso destacado
  Clínica Vitelia (ver reglas en `CLAUDE.md`).
- Decisión: repo público en GitHub, mismo criterio que el proyecto Vitelia
  pese a la licencia paga del template.
- Repo publicado: https://github.com/rodolforjs/rodolfoweb-sitio-propio
- Decisiones de identidad (2026-09-26): nombre de marca pendiente
  (placeholder de trabajo **"Rodolfo Web"**); tono visual = quedarse fiel
  al lenguaje de Reboost (sin inventar concepto nuevo, sin copiar la
  estética del portafolio personal ROJAS_RODOLFO_CINE); copy generalista
  (no cerrado solo a estética/dental/legal).

## Reskin de index.html (primera pasada, top de la página)
Traducido/reescrito con contenido real: `<title>`/meta, nav (Inicio/Sobre
mí/Servicios/Más/Contacto), offcanvas (bio + contacto real:
rojasrodolfo906@gmail.com, redes en "#" pendientes de definir), hero
(titular "-SITIOS HECHOS A MANO//", "Presencia con... *Rodolfo Web", texto
giratorio "DISEÑO. CÓDIGO. DETALLE."), sección Sobre Mí (encabezado +
párrafo + botones), sección Servicios (tags y lista de "navigation"
reemplazados por el catálogo real: Landing+Contacto, Servicio con Agenda,
integración Cal.com/Agendapro/Reservo, SEO básico, dominio propio,
ecommerce próximamente).

**Corrección ética aplicada sin fabricar datos:** Reboost trae de fábrica
un badge "4.9 Star Reviewer" (rating falso) — reemplazado por "1er caso /
En producción", honesto para una agencia recién creada.

Los testimonios con nombres inventados (Michael Carter, Robert Evans,
etc.) y las estadísticas "120/200 Completed Projects" / "15 Years
Experience" más abajo en la página: **decisión explícita de Rodolfo
(2026-09-26): dejarlos tal cual (en inglés, demo) por ahora, se revisan
más adelante.** No tocar sin que él lo pida.

**Nota técnica de verificación:** al levantar el servidor local en el
puerto 8791 (mismo puerto usado antes para el proyecto Vitelia/Intrio en
este Mac), un service worker viejo registrado en ese origin interceptó
los requests y sirvió assets cacheados de Intrio (Google Sans,
fontawesome4, etc.), rompiendo el layout aunque el HTML real sí era el
correcto. Se resolvió sirviendo en un puerto nuevo nunca usado (8927).
Para futuras verificaciones de este proyecto, evitar puertos ya usados
por otros proyectos de este Mac o limpiar el service worker del origin
antes de confiar en lo que se ve.

## Páginas de detalle del portafolio (2026-09-26)
- Capturas reales tomadas en vivo: clinicavitelia.cl (hero + tratamientos) y
  rodolforjs.github.io/rodolforojas (hero + "En Cartelera"), guardadas en
  `image/portfolio/`.
- `portofolio-detail.html` reescrito para el caso Clínica Vitelia: proceso,
  qué incluye, resultado, link real al sitio (clinicavitelia.cl).
- Nueva página `portofolio-detail-personal.html` (duplicada del template
  de detalle) para el caso "Mi Portafolio": proyecto propio de diseño+
  desarrollo completo (no cliente pagado, aclarado en el copy), con link
  real a rodolforjs.github.io/rodolforojas.
- Ambas páginas se linkean cruzadas entre sí ("Otro Caso" en el sidebar) y
  desde `portofolio.html` (miniaturas ya actualizadas con las capturas
  reales).

## Paleta de color (2026-09-26)
Rodolfo pidió cambiar la paleta por defecto de Reboost (negro + verde neón)
por una inspirada en la referencia "Malina Clubhouse" (índigo + blush +
coral), mezclada con blanco puro. Verificado contraste WCAG antes de
aplicar (fórmula de luminancia relativa, no a ojo):

- Blanco (#FFFFFF) sobre índigo (#2A2496): 11.7:1 — AAA, texto de
  cualquier tamaño.
- Blush (#F4C9C7) sobre índigo: 7.8:1 — AAA, seguro incluso en texto
  chico (nav, listas).
- Coral (#E8604A) sobre índigo: 3.46:1 — pasa AA solo para texto
  grande/UI (botones, iconos), **no** para texto de cuerpo chico.

Mapeo aplicado en `css/style.css` (`:root`):
- `--background-color`: índigo #2A2496 (antes negro #0A0A0A)
- `--text-color`: blanco puro #FFFFFF (antes #F5F5F5)
- `--text-color-2`, `--accent-color`, `--accent-color-3`: blush #F4C9C7
  (roles de texto secundario/links/listas — los que en el template
  original cargan más texto chico, por eso van con el color de más
  contraste)
- `--accent-color-2`: coral claro/durazno #F2957F (hover states)
- `--accent-color-4`: coral #E8604A (botones y CTAs grandes, nunca texto
  chico)
- `--color-1/-2`: variantes más oscuras de índigo (paneles/tarjetas
  oscuras)
- `--color-3`, `--background-team`: tinte claro blush-blanco (paneles
  claros)

Efecto colateral corregido: el texto de fondo gigante decorativo
(`.text-accent`, ej. "SOBRE MÍ" detrás de los títulos) usaba un degradado
gris-a-negro pensado para casi desaparecer sobre el fondo casi-negro
original — sobre índigo se veía como un bloque negro sólido. Ajustado el
degradado a tonos de índigo cercanos al fondo para que vuelva a fundirse
igual que antes.

Verificado visualmente en index.html y portofolio.html (incluye tarjetas
con overlay y botones circulares) — todo legible y coherente. Los hex son
aproximados a ojo desde la referencia, no sampleados exactos (mismo
criterio que el banco de paletas.md del registro de negocio).

## Paleta v2: monocromática azul-violeta (2026-09-26, mismo día)
Rodolfo trajo un segundo referente (rampa monocromática: Catacean Blue
#010245, Han Purple #3C1DEE, Violets are Blue #7F58F0, Bright Lavender
#C092F1) y pidió reemplazar la paleta Malina por esta, "explotando" el
Bright Lavender como color protagonista.

Contraste verificado antes de aplicar:
- Blanco sobre Catacean: 19.16:1 (AAA).
- Bright Lavender sobre Catacean: 7.87:1 — seguro incluso en texto chico,
  por eso se usó como `--accent-color`/`--accent-color-3` (roles de texto
  más exigentes) Y como fondo de botón (`.btn-accent`, con texto Catacean
  encima, mismo 7.87:1 en el sentido inverso).
- Han Purple con texto blanco encima: 8.07:1 — reservado para fondos de
  bloques grandes (`--accent-color-4`), no para texto chico sobre el fondo
  (2.37:1 ahí, insuficiente).
- Violets are Blue sobre Catacean: 4.16:1 — al límite, usado solo en
  `--accent-color-2` (hover/decorativo, no texto de cuerpo).

Mapeo en `css/style.css` (reemplaza el mapeo Malina anterior):
`--background-color` Catacean #010245, `--text-color` blanco,
`--text-color-2`/`--accent-color`/`--accent-color-3` Bright Lavender
#C092F1, `--accent-color-2` Violets are Blue #7F58F0, `--accent-color-4`
Han Purple #3C1DEE, `--color-1` #0A0864, `--color-2` #000122, `--color-3`/
`--background-team` tinte claro lavanda-blanco #F1E9FC. Degradados de
`.text-accent` (texto de fondo decorativo) reajustados otra vez para
fundirse con Catacean en vez del índigo anterior.

Verificado visualmente en index.html (hero, sección "Sobre mí") — coherente,
sin el problema del texto de fondo sólido que apareció la primera vez.

## Pendiente (próxima pasada)
1. Textual Showcase, sección Portafolio (tarjetas con caso Vitelia real,
   sin precio ni parentesco — ver reglas en CLAUDE.md), "Why Choose Us"
   (decidir qué hacer con las estadísticas fabricadas), Pricing Plan
   (sacar precios fijos tipo suscripción), Testimonials (decidir: ocultar
   o reemplazar), FAQ (reescribir preguntas reales), CTA final, Blog
   (dejar sin contenido/ocultar hasta que haya artículos reales), Footer
   (contacto real, quitar "Prositus by Rometheme").
2. Logo propio (hoy sigue diciendo "REBOOST" en el header).
3. Definir nombre de marca final (o seguir con "Rodolfo Web").
4. Reskin de las demás páginas (about-us, services, portofolio-detail,
   team, pricing-plan, faqs, contact-us) siguiendo el mismo criterio.
