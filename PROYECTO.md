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
