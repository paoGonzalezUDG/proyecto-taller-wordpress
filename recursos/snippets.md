# 🧩 Snippets de referencia

Fragmentos que usaremos en clase. Cópialos, entiéndelos y adáptalos. **No los pegues a ciegas.**

---

## HTML

### Estructura mínima de una página

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título de la página · RECAL</title>
    <meta name="description" content="Descripción de 150 a 160 caracteres.">
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <!-- contenido -->
    <script src="script.js"></script>
</body>
</html>
```

### Botón accesible que abre WhatsApp

```html
<a class="boton-whatsapp"
   href="https://wa.me/34620196333?text=Hola,%20quiero%20solicitar%20un%20presupuesto"
   target="_blank"
   rel="noopener noreferrer">
   Solicitar presupuesto por WhatsApp
</a>
```

### Imagen responsive

```html
<img src="hero-800.webp"
     srcset="hero-400.webp 400w, hero-800.webp 800w, hero-1600.webp 1600w"
     sizes="(max-width: 767px) 100vw, 50vw"
     alt="Operario revisando calzado de seguridad reacondicionado"
     width="800" height="600"
     loading="lazy">
```

---

## CSS

### Reset mínimo

```css
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; }
img, picture, video { display: block; max-width: 100%; }
input, button, textarea, select { font: inherit; }
```

### Contenedor centrado

```css
.contenedor {
    width: min(100% - 2rem, 1200px);
    margin-inline: auto;
}
```

### Grid responsive sin media queries

```css
.grid-auto {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
}
```

### Centrado con flexbox

```css
.centrado {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}
```

### Texto accesible solo para lectores de pantalla

```css
.solo-lectores {
    position: absolute;
    width: 1px; height: 1px;
    padding: 0; margin: -1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
    border: 0;
}
```

### Sobrescribir un estilo de Elementor

```css
/* Añade la clase en Elementor: Avanzado → Diseño → Clases CSS */
.boton-presupuesto .elementor-button {
    background-color: var(--color-primario);
    border-radius: var(--radio);
}
```

---

## JavaScript

### Seleccionar y escuchar

```js
const boton = document.querySelector('.js-boton');

boton.addEventListener('click', function (evento) {
    evento.preventDefault();
    boton.classList.toggle('esta-activo');
});
```

### Recorrer varios elementos

```js
document.querySelectorAll('.js-tarjeta').forEach(function (tarjeta) {
    tarjeta.addEventListener('mouseenter', function () {
        tarjeta.classList.add('esta-resaltada');
    });
});
```

### Validar un correo

```js
const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!patron.test(correo.value.trim())) {
    // mostrar error
}
```

> La validación en el navegador es comodidad para la persona usuaria, **no seguridad**. El servidor siempre revalida.

### Menú móvil accesible

```js
const boton = document.querySelector('.js-boton-menu');
const menu  = document.querySelector('.js-menu');

boton.addEventListener('click', function () {
    const abierto = menu.classList.toggle('esta-abierto');
    boton.setAttribute('aria-expanded', abierto ? 'true' : 'false');
});
```

---

## PHP / WordPress

### Encolar CSS y JS desde el tema hijo

```php
function recal_assets() {
    wp_enqueue_style(
        'recal-personalizado',
        get_stylesheet_directory_uri() . '/assets/css/personalizado.css',
        array(),
        filemtime( get_stylesheet_directory() . '/assets/css/personalizado.css' )
    );
}
add_action( 'wp_enqueue_scripts', 'recal_assets' );
```

### Shortcode propio

```php
function recal_telefono() {
    return '<a href="tel:+34620196333">+34 620 19 63 33</a>';
}
add_shortcode( 'telefono', 'recal_telefono' );
// Uso en el editor: [telefono]
```

### Constantes de depuración en `wp-config.php`

```php
define( 'WP_DEBUG', true );
define( 'WP_DEBUG_LOG', true );
define( 'WP_DEBUG_DISPLAY', false );
define( 'WP_MEMORY_LIMIT', '512M' );
```

> **Escapa siempre la salida** (`esc_html()`, `esc_url()`, `esc_attr()`) y **sanea siempre la entrada** (`sanitize_text_field()`). Es la base de la seguridad en WordPress.
