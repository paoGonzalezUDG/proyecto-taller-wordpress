# 04 · Instalación y configuración de WordPress

> Si usas **Local (Ruta B)**, WordPress ya quedó instalado al crear el sitio. Salta directo a la [sección 5 · Configuración inicial](#5-configuración-inicial-obligatoria).
> Esta guía completa aplica a **Laragon (Ruta A)**.

---

## 1. Descargar WordPress

1. Ve a <https://es-mx.wordpress.org/download/> (o `wordpress.org/download`) y descarga el `.zip`.
2. Descomprime.
3. Copia **el contenido** de la carpeta `wordpress` (no la carpeta misma) dentro de:

```
C:\laragon\www\recal-taller\
```

Debe quedar así:

```
recal-taller/
├── wp-admin/
├── wp-content/
├── wp-includes/
├── index.php
├── wp-config-sample.php
└── ...
```

4. Clic derecho en Laragon → **Reload** para generar el virtual host `http://recal-taller.test`.

### Alternativa por terminal

```bash
cd C:\laragon\www
mkdir recal-taller
cd recal-taller
curl -O https://wordpress.org/latest.zip
tar -xf latest.zip --strip-components=1
del latest.zip
```

---

## 2. Crear la base de datos

Desde la terminal de Laragon:

```bash
mysql -u root -e "CREATE DATABASE recal_local CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
```

O desde **HeidiSQL**: clic derecho en el servidor → *Create new* → *Database* → nombre `recal_local`, cotejamiento `utf8mb4_unicode_ci`.

> **Siempre `utf8mb4`.** Con `utf8` a secas los emojis y algunos acentos se guardan corruptos.

---

## 3. Ejecutar el instalador

Abre <http://recal-taller.test>. WordPress te llevará al instalador:

| Campo | Valor en local |
|---|---|
| Nombre de la base de datos | `recal_local` |
| Nombre de usuario | `root` |
| Contraseña | *(vacía)* |
| Servidor de la base de datos | `localhost` |
| Prefijo de tabla | `wp_` (puedes usar `recal_` por costumbre de seguridad) |

Luego:

| Campo | Valor sugerido |
|---|---|
| Título del sitio | RECAL — Limpieza de calzado laboral |
| Nombre de usuario | `admin_taller` (nunca `admin`) |
| Contraseña | Una fuerte, y **anótala** |
| Correo | El tuyo |
| Visibilidad en buscadores | Marcar *disuadir* mientras sea local |

> Si el instalador no puede crear `wp-config.php`, créalo tú: copia `wp-config-sample.php` a `wp-config.php` y edita las cuatro constantes de base de datos.

---

## 4. Anatomía de la instalación

```
recal-taller/
├── wp-admin/            <-- Núcleo: panel de administración. NO EDITAR.
├── wp-includes/         <-- Núcleo: funciones de WordPress. NO EDITAR.
├── wp-content/          <-- 🎯 Todo lo tuyo vive aquí
│   ├── themes/                <-- Temas (aquí va tema-hijo-recal)
│   ├── plugins/               <-- Plugins
│   ├── uploads/               <-- Medios subidos desde el panel
│   └── debug.log              <-- Aparece al activar WP_DEBUG_LOG
├── wp-config.php        <-- Credenciales y constantes. NUNCA lo subas a Git.
├── .htaccess            <-- Reglas de Apache (URLs limpias)
└── index.php            <-- Punto de entrada
```

**Regla de oro:** todo lo que modifiques debe estar dentro de `wp-content`. Si editas el núcleo, la próxima actualización borra tu trabajo.

---

## 5. Configuración inicial obligatoria

### Ajustes → Generales
- Título y descripción corta del sitio
- **Idioma:** Español (España) — el cliente es español
- **Zona horaria:** Madrid
- Formato de fecha: `j \d\e F \d\e Y`

### Ajustes → Enlaces permanentes
Selecciona **Nombre de la entrada**. Si después las páginas dan 404 → [errores-comunes.md § 404](errores-comunes.md#22-todas-las-páginas-dan-404-menos-la-portada).

### Ajustes → Comentarios
Desmarca *Permitir comentarios en las entradas nuevas*. Un sitio corporativo no los necesita.

### Ajustes → Medios
Deja las medidas por defecto. Marca *Organizar mis archivos subidos en carpetas por mes y año*.

### Limpieza
Borra:
- La entrada *¡Hola, mundo!*
- La página *Página de ejemplo*
- El comentario de ejemplo
- Los plugins **Akismet** y **Hello Dolly**
- Los temas por defecto que no uses (deja uno como respaldo)

---

## 6. Activar el modo depuración

Edita `wp-config.php` y coloca esto **antes** de la línea `/* That's all, stop editing! */`:

```php
define( 'WP_DEBUG', true );
define( 'WP_DEBUG_LOG', true );     // Escribe en wp-content/debug.log
define( 'WP_DEBUG_DISPLAY', false ); // No muestra errores en pantalla
define( 'SCRIPT_DEBUG', true );      // Carga CSS/JS sin minificar
define( 'WP_MEMORY_LIMIT', '512M' );
```

> En un sitio en producción, `WP_DEBUG` siempre en `false`. Mostrar errores al público es una fuga de información.

---

## 7. Plugins base del taller

Plugins → Añadir nuevo:

| Plugin | Para qué |
|---|---|
| **Elementor** | Constructor visual |
| **Hello Elementor** *(tema)* | Tema base ligero y sin estilos que estorben |
| **WPForms Lite** o **Contact Form 7** | Formulario de presupuesto |
| **Yoast SEO** o **Rank Math** *(opcional)* | SEO on-page |

Instalación por WP-CLI (si usas Local o tienes WP-CLI):

```bash
wp theme install hello-elementor --activate
wp plugin install elementor --activate
wp plugin install wpforms-lite --activate
wp plugin delete akismet hello
```

> **Menos es más.** Cada plugin es código de terceros que se ejecuta en cada carga. Instala solo lo que uses en clase.

---

## 8. Checklist antes de continuar

- [ ] WordPress abre en `/wp-admin`
- [ ] Idioma y zona horaria configurados
- [ ] Enlaces permanentes en *Nombre de la entrada* y una página interna abre sin 404
- [ ] Contenido de ejemplo eliminado
- [ ] Elementor y Hello Elementor instalados y activos
- [ ] `WP_DEBUG` activado

Siguiente → [07 · Elementor básico](07-elementor-basico.md)
