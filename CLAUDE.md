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
& Creative Agency for Businesses & Brands" — páginas services, portofolio,
portofolio-detail, team, pricing-plan, about-us, faqs, contact-us, blog.

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

## Stack e integraciones
- Hosting: GitHub Pages (dominio propio pendiente de decidir/comprar).
- Contacto: Netlify Forms o Web3Forms/Formspree (por definir, sitio no
  está en Netlify por ahora).
- Sin agenda/booking — este sitio no la necesita, es presencia de agencia.
