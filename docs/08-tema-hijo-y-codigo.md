# 08 · Tema hijo: dónde va tu código

Un **tema hijo** hereda todo del tema padre (Hello Elementor) pero te da un lugar propio para tu CSS, tu JS y tus funciones PHP. Sin él, la próxima actualización del tema borra tus cambios.

---

## 1. Instalar el tema hijo de este repositorio

La carpeta [`tema-hijo-recal/`](../tema-hijo-recal/) ya viene lista.

### Opción A — copiar la carpeta

```bash
# Laragon
xcopy tema-hijo-recal C:\laragon\www\recal-taller\wp-content\themes\tema-hijo-recal /E /I

# Local (Windows)
xcopy tema-hijo-recal "C:\Users\TU_USUARIO\Local Sites\recal-taller\app\public\wp-content\themes\tema-hijo-recal" /E /I

# macOS / Linux
cp -R tema-hijo-recal ~/Local\ Sites/recal-taller/app/public/wp-content/themes/
```

### Opción B — subirlo como ZIP
Comprime la carpeta `tema-hijo-recal` y súbela desde **Apariencia → Temas → Añadir nuevo → Subir tema**.

### Activar
1. Instala y **activa primero** el tema padre: *Hello Elementor*.
2. Luego activa **RECAL — Tema hijo**.
3. Comprueba en *Apariencia → Temas* que diga que es tema hijo de Hello Elementor.

> Si el tema hijo no aparece o WordPress marca *"La plantilla no existe"*, el valor `Template:` de `style.css` no coincide con el nombre de la carpeta del tema padre (`hello-elementor`).

---

## 2. Qué contiene

```
tema-hijo-recal/
├── style.css              <-- Cabecera obligatoria + estilos propios
├── functions.php          <-- Encolado de CSS/JS y funciones del sitio
└── assets/
    ├── css/personalizado.css
    └── js/personalizado.js
```

### `style.css`
La cabecera es obligatoria; sin ella WordPress no reconoce el tema:

```css
/*
Theme Name: RECAL — Tema hijo
Template: hello-elementor
Version: 1.0.0
*/
```

`Template` debe ser **exactamente** el nombre de la carpeta del tema padre.

---

## 3. La forma correcta de cargar CSS y JS

**Nunca** pegues `<script>` o `<link>` a mano en el `header.php` del tema padre. En WordPress se hace con funciones de encolado, desde `functions.php`:

```php
function recal_encolar_assets() {
    // CSS del tema padre
    wp_enqueue_style(
        'hello-elementor-padre',
        get_template_directory_uri() . '/style.css'
    );

    // CSS del tema hijo
    wp_enqueue_style(
        'recal-hijo',
        get_stylesheet_uri(),
        array( 'hello-elementor-padre' ),
        wp_get_theme()->get( 'Version' )
    );

    // CSS personalizado
    wp_enqueue_style(
        'recal-personalizado',
        get_stylesheet_directory_uri() . '/assets/css/personalizado.css',
        array( 'recal-hijo' ),
        filemtime( get_stylesheet_directory() . '/assets/css/personalizado.css' )
    );

    // JavaScript, cargado en el footer
    wp_enqueue_script(
        'recal-personalizado',
        get_stylesheet_directory_uri() . '/assets/js/personalizado.js',
        array(),
        filemtime( get_stylesheet_directory() . '/assets/js/personalizado.js' ),
        true // true = footer
    );
}
add_action( 'wp_enqueue_scripts', 'recal_encolar_assets' );
```

### Por qué así

| Detalle | Razón |
|---|---|
| `wp_enqueue_*` | WordPress ordena dependencias y evita cargar dos veces el mismo archivo |
| `filemtime()` | Usa la fecha del archivo como versión → **rompe la caché** cuando editas. Se acabó el "no se ven mis cambios" |
| `array('recal-hijo')` | Declara dependencias: tu CSS se carga *después* del que sobrescribe |
| `true` al final | Carga el JS en el footer, para que no bloquee el renderizado |

---

## 4. Escribir CSS que sí gane

Elementor genera CSS con alta especificidad. Si tu regla no se aplica:

1. Inspecciona con `F12` y mira **qué selector está ganando**.
2. Aumenta especificidad de forma razonable:

```css
/* ❌ Fuerza bruta, ilegible y difícil de mantener */
.mi-boton { background: red !important; }

/* ✅ Especificidad suficiente y explicable */
.elementor-widget-button .mi-boton .elementor-button {
    background-color: var(--color-primario);
}
```

3. Asigna clases propias a tus widgets: **Avanzado → Diseño → Clases CSS** (`boton-presupuesto`, `tarjeta-servicio`) y estiliza esas clases desde `personalizado.css`.

---

## 5. Variables CSS con tus tokens

En `assets/css/personalizado.css`:

```css
:root {
    --color-primario: #0B5FFF;
    --color-texto: #1A1A1A;
    --espacio-md: 1.5rem;
    --radio: 8px;
}

.tarjeta-servicio {
    background-color: #fff;
    border: 1px solid var(--color-borde);
    border-radius: var(--radio);
    padding: var(--espacio-md);
}
```

---

## 6. Ejemplos de `functions.php` útiles

```php
// Quitar los emojis del núcleo (menos peticiones)
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' );

// Permitir subir SVG solo a administradores (con cuidado: un SVG puede llevar JS)
function recal_permitir_svg( $mimes ) {
    if ( current_user_can( 'manage_options' ) ) {
        $mimes['svg'] = 'image/svg+xml';
    }
    return $mimes;
}
add_filter( 'upload_mimes', 'recal_permitir_svg' );

// Cambiar el texto del pie de página del panel
function recal_pie_admin() {
    return 'Sitio desarrollado en el Taller de WordPress · UDG';
}
add_filter( 'admin_footer_text', 'recal_pie_admin' );
```

> **Cuidado con `functions.php`.** Un punto y coma faltante deja el sitio en blanco. Si eso pasa, edita el archivo por FTP o directamente en disco y corrige; nunca desde el editor de temas de WordPress.

---

## 7. Alternativa rápida: CSS personalizado de Elementor

Para pruebas cortas: ☰ **Ajustes del sitio → CSS personalizado** (en la versión gratuita puede no estar disponible; entonces usa *Apariencia → Personalizar → CSS adicional*).

Sirve para experimentar, pero **el CSS definitivo va en el tema hijo**: está versionado en Git y no se pierde al cambiar de tema.
