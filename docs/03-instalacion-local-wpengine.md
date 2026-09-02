# 03 · Ruta B — Instalación de Local (by WP Engine)

**Local** es un instalador diseñado exclusivamente para WordPress: crea el sitio, la base de datos y el usuario administrador en un solo flujo. Es la ruta más rápida y la única cómoda en **macOS**.

> ¿Prefieres control fino sobre Apache, PHP y MySQL? Usa la [Ruta A — Laragon](02-instalacion-laragon.md).

---

## 1. Descarga e instalación

1. Entra a <https://localwp.com/> y pulsa **Download**.
2. Elige tu plataforma (Windows / macOS Intel / macOS Apple Silicon).
3. Te pedirá un correo antes de descargar. Puedes usar el institucional.
4. Instala y abre la aplicación. La primera vez descarga componentes internos: **puede tardar varios minutos**, no la cierres.

> En Windows, Local instala controladores de red propios. Si aparece un aviso del **Firewall de Windows**, marca *Permitir acceso* en redes privadas.

---

## 2. Crear el sitio del taller

1. Pulsa **+ Create a new site** → *Create a new site*.
2. **Site name:** `recal-taller` → *Continue*.
   - En *Advanced options* puedes cambiar el dominio local. El resultado será `recal-taller.local`.
3. **Choose environment:**
   - `Preferred` es lo más rápido, pero para parecernos a un hosting real elige **Custom**:
     - **PHP:** 8.3 o superior
     - **Web server:** **Apache** (así usamos `.htaccess`, igual que en producción)
     - **Database:** MySQL 8.0
4. **WordPress setup:**
   - *WordPress username:* `admin_taller` (evita `admin` a secas)
   - *WordPress password:* una que recuerdes; anótala
   - *WordPress email:* tu correo
5. **Add site.** Local descarga WordPress, crea la base de datos y arranca el sitio.

---

## 3. Abrir tu sitio

En la ficha del sitio:

- **Open site** → `http://recal-taller.local`
- **WP Admin** → `http://recal-taller.local/wp-admin`

> La primera vez el navegador puede advertir por el certificado. En la pestaña **SSL** del sitio pulsa **Trust** y reinicia el navegador.

---

## 4. Dónde viven tus archivos

Pulsa el nombre del sitio → **Go to site folder**. La ruta típica es:

- **Windows:** `C:\Users\TU_USUARIO\Local Sites\recal-taller\app\public`
- **macOS:** `~/Local Sites/recal-taller/app/public`

Esa carpeta `public` es la raíz de WordPress: ahí están `wp-content`, `wp-config.php`, etc. **Ábrela en VS Code**, no la carpeta padre.

Nuestro tema hijo va en:

```
app/public/wp-content/themes/tema-hijo-recal/
```

---

## 5. Base de datos

Botón **Open Adminer** (o *Sequel Ace* / *TablePlus* si lo tienes configurado) en la pestaña **Database**. Local muestra ahí el usuario, contraseña y host generados automáticamente. No necesitas crearlos a mano.

---

## 6. Ajustes que conviene tocar

### Aumentar límites de PHP
Pestaña del sitio → **Advanced** → *Run site setup wizard* no hace falta. Edita directamente:

`conf/php/php.ini.hbs` dentro de la carpeta del sitio:

```ini
memory_limit = 512M
upload_max_filesize = 128M
post_max_size = 128M
max_execution_time = 300
```

Después: clic derecho en el sitio → **Restart**.

### Activar WP_DEBUG
Local trae un interruptor rápido en la pestaña **Tools → WP-CLI**, pero lo haremos a mano en `wp-config.php` en la Sesión 2.

---

## 7. Herramienta extra: WP-CLI

Local incluye **WP-CLI**. Clic derecho en el sitio → **Open site shell** y prueba:

```bash
wp --info
wp core version
wp plugin list
wp plugin install elementor --activate
wp user list
wp search-replace 'http://viejo.local' 'http://nuevo.local' --dry-run
```

Es la forma más rápida de instalar plugins y de reemplazar URLs al migrar.

---

## 8. Diferencias con Laragon (para que no te confundas en clase)

| | Laragon | Local |
|---|---|---|
| Dominio | `proyecto.test` | `proyecto.local` |
| Raíz de archivos | `C:\laragon\www\proyecto` | `.../Local Sites/proyecto/app/public` |
| Instalar WordPress | Manual (descarga + instalador) | Automático |
| Base de datos | HeidiSQL / phpMyAdmin | Adminer |
| Cambiar PHP | Menú de Laragon | Pestaña del sitio |
| Varios sitios | Una carpeta por sitio | Un contenedor por sitio |

---

## 9. Checklist antes de continuar

- [ ] El sitio aparece en verde (*Running*) en Local
- [ ] `http://recal-taller.local` abre WordPress
- [ ] Puedes entrar a `/wp-admin` con tu usuario
- [ ] Sabes dónde está la carpeta `app/public` y la tienes abierta en VS Code

Siguiente → [04 · Instalación y configuración de WordPress](04-instalacion-wordpress.md)
