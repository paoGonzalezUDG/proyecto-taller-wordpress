# ✅ Checklist de entrega

Repásala antes de la Sesión 8. Cada casilla sin marcar es un punto menos y, en el mundo real, una llamada del cliente.

---

## Contenido

- [ ] No queda ni un `lorem ipsum` ni una imagen de relleno
- [ ] Los textos están revisados: sin faltas de ortografía ni de acentuación
- [ ] Los datos de contacto son coherentes en todo el sitio
- [ ] Existe página de aviso legal y de política de privacidad
- [ ] La página 404 está personalizada

## Estructura y código

- [ ] Un solo `<h1>` por página, y describe el contenido
- [ ] Jerarquía de encabezados sin saltos
- [ ] El HTML valida en <https://validator.w3.org/nu/>
- [ ] El CSS propio vive en el **tema hijo**, no en el tema padre
- [ ] No hay `!important` sin una razón escrita en un comentario
- [ ] Los colores y tipografías salen de los **ajustes globales**, no a mano por widget
- [ ] Los contenedores están nombrados en el navegador de estructura

## Responsive

- [ ] Se ve bien en 375 px (móvil)
- [ ] Se ve bien en 768 px (tablet)
- [ ] Se ve bien en 1440 px (escritorio)
- [ ] No hay scroll horizontal en ningún tamaño
- [ ] Probado en un teléfono real, no solo en DevTools

## Accesibilidad

- [ ] Todas las imágenes tienen `alt` descriptivo (o `alt=""` si son decorativas)
- [ ] Todos los campos de formulario tienen `<label>`
- [ ] El contraste cumple WCAG AA (4.5:1)
- [ ] Se puede navegar con `Tab` y el foco es visible
- [ ] Los enlaces dicen a dónde llevan ("Ver servicios", no "Clic aquí")

## Rendimiento

- [ ] Todas las imágenes están optimizadas y en WebP cuando aplica
- [ ] Ninguna imagen supera los 300 KB
- [ ] No hay plugins instalados que no se usen
- [ ] Lighthouse: Performance > 85, Accessibility > 90, SEO > 90
- [ ] Sin errores en la consola del navegador

## SEO

- [ ] Título SEO y meta descripción en cada página
- [ ] URLs limpias y descriptivas
- [ ] Enlaces internos entre secciones
- [ ] *Disuadir a los motores de búsqueda* desmarcado si el sitio es público

## Funcionalidad

- [ ] Todos los enlaces funcionan (ninguno lleva a `#`)
- [ ] El formulario valida y envía
- [ ] El CTA de WhatsApp abre el chat correcto
- [ ] El menú funciona en móvil

## Entrega en GitHub

- [ ] Todo tu trabajo está en la rama `recal-TU_NOMBRE`
- [ ] Los commits tienen mensajes claros y distintos entre sí
- [ ] No subiste `wp-config.php`, `node_modules/`, `.sql` ni contraseñas
- [ ] Exportaste tus plantillas de Elementor a `recursos/`
- [ ] Llenaste `recursos/tokens-de-diseno.md`
- [ ] Abriste el Pull Request hacia `main` con la descripción completa

## Presentación

- [ ] Puedes explicar **una decisión de diseño** y por qué la tomaste
- [ ] Puedes explicar **una dificultad técnica** y cómo la resolviste
- [ ] La demostración dura menos de 5 minutos y no depende de tu conexión
