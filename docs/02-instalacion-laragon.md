# 02 · Ruta A — Instalación de Laragon (Windows)

Laragon es un entorno local **portátil** que trae Apache, MySQL/MariaDB, PHP y herramientas listas. Es la ruta que usamos en el taller anterior: da más control y se parece más a un hosting real.

> ¿Usas macOS? Salta a la [Ruta B — Local by WP Engine](03-instalacion-local-wpengine.md).

---

## 1. Descarga e instalación

1. Entra a <https://laragon.org/download/> y descarga **Laragon Full** (incluye Apache, MySQL, PHP y Node).
2. Ejecuta el instalador **como administrador** (clic derecho → *Ejecutar como administrador*).
3. Ruta de instalación: déjala en `C:\laragon`. **No la instales en `C:\Program Files`** ni en rutas con espacios o acentos: rompe varias herramientas.
4. En las opciones marca:
   - ✔ *Enable Laragon on Windows startup* (opcional)
   - ✔ *Auto virtual hosts*
   - Hostname format: `Automatic` (genera `carpeta.test`)
5. Termina la instalación y abre Laragon.

---

## 2. Primer arranque

1. Pulsa **Start All**. Los indicadores de **Apache** y **MySQL** deben ponerse en verde.
2. Prueba en el navegador: <http://localhost>
   Debe aparecer la pantalla de bienvenida de Laragon.

Si Apache no arranca → [errores-comunes.md § Apache no inicia](errores-comunes.md#11-apache-no-arranca-en-laragon)

---

## 3. Configurar PHP 8.3

WordPress 7.1 recomienda **PHP 8.3 o superior**.

1. Clic derecho en el icono de Laragon → **PHP → Version**.
2. Si no aparece 8.3+, descárgala de <https://windows.php.net/download/> (versión **Thread Safe**, x64), descomprímela en `C:\laragon\bin\php\php-8.3.x` y vuelve a abrir el menú.
3. Selecciona la versión y pulsa **Reload / Restart All**.

Verifica:

```bash
php -v
```

> La terminal de Laragon (**Menu → Terminal**, o `Ctrl + Alt + T`) ya trae PHP, MySQL, Git y Composer en el PATH. Úsala en lugar de CMD cuando trabajes con este proyecto.

---

## 4. Ajustar `php.ini`

Laragon → **PHP → php.ini**. Busca y ajusta estos valores (son la causa de la mayoría de errores al subir medios a WordPress):

```ini
memory_limit = 512M
upload_max_filesize = 128M
post_max_size = 128M
max_execution_time = 300
max_input_vars = 3000
```

Y asegúrate de que estas extensiones estén **sin punto y coma** al inicio:

```ini
extension=curl
extension=gd
extension=intl
extension=mbstring
extension=mysqli
extension=openssl
extension=zip
```

Guarda y pulsa **Reload**.

---

## 5. Activar mod_rewrite (URLs limpias)

Sin esto, los enlaces permanentes de WordPress dan **404 en todas las páginas menos la portada**.

1. Laragon → **Apache → modules → mod_rewrite** (debe quedar palomeado).
2. **Reload**.

---

## 6. Crear la carpeta del proyecto

Todos los sitios viven en `C:\laragon\www`.

```bash
cd C:\laragon\www
git clone https://github.com/paoGonzalezUDG/proyecto-taller-wordpress.git
```

Después de crear una carpeta nueva, haz clic derecho en Laragon → **Reload** para que genere el virtual host automáticamente. Tu sitio quedará en:

```
http://proyecto-taller-wordpress.test
```

> Si el dominio `.test` no resuelve → [errores-comunes.md § El dominio .test no abre](errores-comunes.md#13-el-dominio-test-no-abre)

---

## 7. Acceso a la base de datos

Laragon incluye **HeidiSQL** (Menu → *MySQL* → *HeidiSQL*) y opcionalmente phpMyAdmin.

Credenciales por defecto:

| Campo | Valor |
|---|---|
| Host | `localhost` o `127.0.0.1` |
| Usuario | `root` |
| Contraseña | *(vacía)* |
| Puerto | `3306` |

> Contraseña vacía **solo** es aceptable en local. En un servidor real, jamás.

---

## 8. Comandos útiles de la terminal de Laragon

```bash
# Entrar a MySQL
mysql -u root

# Crear una base de datos desde la terminal
mysql -u root -e "CREATE DATABASE recal_local CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"

# Listar bases de datos
mysql -u root -e "SHOW DATABASES;"

# Exportar (respaldo)
mysqldump -u root recal_local > respaldo.sql

# Importar
mysql -u root recal_local < respaldo.sql
```

---

## 9. Checklist antes de continuar

- [ ] Apache y MySQL en verde
- [ ] `http://localhost` abre la página de Laragon
- [ ] `php -v` muestra 8.3 o superior
- [ ] `mod_rewrite` activado
- [ ] Puedes entrar a MySQL con `root` sin contraseña
- [ ] La carpeta del proyecto está en `C:\laragon\www`

Siguiente → [04 · Instalación de WordPress](04-instalacion-wordpress.md)
