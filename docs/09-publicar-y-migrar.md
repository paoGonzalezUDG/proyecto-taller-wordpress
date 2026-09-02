# 09 · Optimizar, migrar y publicar

Esta guía es la demostración de la Sesión 8: cómo pasa un sitio de tu computadora a un hosting real.

---

## 1. Antes de migrar: dejar el sitio limpio

- [ ] Borra plugins y temas que no uses (desactivar no basta: **borra**)
- [ ] Borra revisiones de entradas y borradores basura
- [ ] Optimiza todas las imágenes (<https://squoosh.app/>) y usa WebP
- [ ] Comprueba que no queden textos *lorem ipsum*
- [ ] Verifica que todos los enlaces funcionen
- [ ] `WP_DEBUG` en `false`
- [ ] Contraseña de administrador fuerte y usuario distinto de `admin`

---

## 2. Optimización de rendimiento

### Imágenes
| Regla | Detalle |
|---|---|
| Formato | WebP siempre que se pueda |
| Tamaño | No subas 4000px si se muestra a 800px |
| Peso | Idealmente < 200 KB por imagen; el hero < 300 KB |
| Carga diferida | `loading="lazy"` (WordPress lo aplica solo, menos en el primer bloque) |
| `alt` | Siempre, descriptivo. Sirve a accesibilidad **y** a SEO |

### Elementor
☰ → Ajustes → **Rendimiento**: *Improved CSS Loading*, *Inline Font Icons*, *Optimized Control Loading*.

### Auditoría con Lighthouse
`F12` → pestaña **Lighthouse** → *Analyze page load*. Anota antes/después de optimizar:

| Métrica | Meta |
|---|---|
| Performance | > 85 |
| Accessibility | > 90 |
| Best Practices | > 90 |
| SEO | > 90 |

> En local los números no son fiables al 100% (no hay latencia de red). Sirven para comparar contra ti misma.

---

## 3. SEO básico on-page

- Un solo `<h1>` por página, y que describa el contenido
- Jerarquía de encabezados sin saltos (`h1 → h2 → h3`)
- Título SEO de 50–60 caracteres y meta descripción de 150–160
- URLs limpias y en español: `/servicios/limpieza-calzado-epi/`
- Texto alternativo en todas las imágenes
- Enlaces internos entre secciones y páginas
- Datos de contacto reales y coherentes (NAP)

---

## 4. Migración: exportar desde local

### Base de datos

```bash
# Laragon
mysqldump -u root recal_local > recal_local.sql

# Local (desde "Open site shell")
wp db export recal_local.sql
```

### Archivos
Comprime la carpeta del sitio **sin** `node_modules` ni respaldos:

```bash
# Windows (PowerShell), desde la carpeta padre
Compress-Archive -Path recal-taller\* -DestinationPath recal-taller.zip
```

---

## 5. Migración: importar en el hosting

1. Sube el ZIP por el **Administrador de archivos** de cPanel (o por FTP con FileZilla) a `public_html/` y descomprime.
2. Crea en el hosting la base de datos, un usuario y asígnale **todos los privilegios**. Anota los tres datos.
3. Importa el `.sql` desde **phpMyAdmin → Importar**.
4. Edita `wp-config.php` con las credenciales nuevas:

```php
define( 'DB_NAME', 'usuario_recal' );
define( 'DB_USER', 'usuario_recaluser' );
define( 'DB_PASSWORD', 'LA_CONTRASEÑA_DEL_HOSTING' );
define( 'DB_HOST', 'localhost' );
```

5. **Reemplaza las URLs.** Este paso es el que casi todo el mundo hace mal:

```bash
# Con WP-CLI (correcto: respeta los datos serializados)
wp search-replace 'http://recal-taller.test' 'https://midominio.com' --all-tables --precise
```

> ⚠️ **No hagas un buscar/reemplazar con SQL crudo.** WordPress guarda arreglos PHP serializados con la longitud del texto incluida; si cambias la URL con `UPDATE ... REPLACE()`, esos datos se corrompen y pierdes widgets y ajustes de Elementor.
> Si no tienes WP-CLI, usa el script *Better Search Replace* (plugin) o *interconnectit Search Replace DB*.

6. **Regenera Elementor:** *Elementor → Herramientas → Regenerar archivos y datos*, y en *Reemplazar URL* corre también el reemplazo interno de Elementor.
7. Ajustes → Enlaces permanentes → **Guardar** (regenera `.htaccess`).
8. Instala el certificado **SSL** (Let's Encrypt en cPanel) y fuerza HTTPS.

---

## 6. Después de migrar: lista de verificación

- [ ] La portada carga sin errores
- [ ] Las páginas internas no dan 404
- [ ] Las imágenes se ven (si no: URLs sin reemplazar)
- [ ] El formulario envía y llega el correo
- [ ] No hay avisos de *contenido mixto* en la consola (`http://` dentro de una página `https://`)
- [ ] El sitio se ve bien en móvil real, no solo en DevTools
- [ ] Ajustes → Lectura → *Disuadir a los motores de búsqueda* **desmarcado**
- [ ] Respaldo hecho antes de anunciar el lanzamiento

---

## 7. Mantenimiento (lo que se le explica al cliente)

| Frecuencia | Tarea |
|---|---|
| Semanal | Actualizar plugins y temas, revisar formularios |
| Mensual | Actualizar núcleo de WordPress, revisar enlaces rotos, respaldo completo |
| Trimestral | Auditoría de rendimiento y SEO, limpiar base de datos |
| Siempre | Respaldar **antes** de cualquier actualización mayor |

---

## 8. Errores típicos de migración

→ [errores-comunes.md § Migración](errores-comunes.md#5-migración-y-producción)
