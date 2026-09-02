# 🚑 Errores comunes y cómo resolverlos

Catálogo de los errores que aparecen en este taller. Búscalo aquí **antes** de preguntar: la mitad de las veces la solución está a tres líneas.

**Método para depurar cualquier cosa:**
1. Lee el mensaje de error completo, no solo la primera línea.
2. Reproduce el error a propósito. ¿Qué acción exacta lo dispara?
3. Aísla: desactiva plugins, cambia de tema, prueba en otro navegador.
4. Revisa los registros: `wp-content/debug.log`, consola del navegador (`F12`), logs de Apache.
5. Busca el texto exacto del error entre comillas.

---

## 0. Comandos que no se reconocen (PATH)

**Síntoma:**
```
'git' no se reconoce como un comando interno o externo
'php' no se reconoce como un comando interno o externo
'npm' no se reconoce como un comando interno o externo
```

**Causa:** el ejecutable no está en la variable `PATH`, o abriste la terminal antes de instalarlo.

**Solución:**
1. **Cierra todas las terminales y VS Code, y vuelve a abrirlos.** Resuelve el 70% de los casos.
2. Si sigue: Windows → *Editar las variables de entorno del sistema* → **Variables de entorno** → selecciona `Path` en *Variables del sistema* → **Editar** → **Nuevo** y agrega la ruta del ejecutable, por ejemplo:
   - Git: `C:\Program Files\Git\cmd`
   - Node: `C:\Program Files\nodejs\`
   - PHP de Laragon: `C:\laragon\bin\php\php-8.3.x`
3. Acepta todo, cierra y abre una terminal nueva.
4. Para PHP y MySQL, lo más simple es usar **la terminal de Laragon** (`Menu → Terminal`), que ya los trae configurados.

---

### 0.1 PowerShell: "no se puede cargar el archivo... la ejecución de scripts está deshabilitada"

```
npm : No se puede cargar el archivo C:\Program Files\nodejs\npm.ps1
porque la ejecución de scripts está deshabilitada en este sistema.
```

**Solución** (PowerShell como administrador):

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

Confirma con `S`/`Y`. Alternativa: usa **CMD** o **Git Bash** en lugar de PowerShell.

---

## 1. Entorno local (Laragon / Local / XAMPP)

### 1.1 Apache no arranca en Laragon

**Síntoma:** el indicador de Apache se queda en rojo o parpadea.

**Causa más frecuente: el puerto 80 está ocupado.** Los sospechosos habituales son IIS, el servicio *World Wide Web Publishing*, Skype, VMware, Docker Desktop o... otro Apache.

**Diagnóstico** (CMD como administrador):

```cmd
netstat -ano | findstr :80
tasklist /FI "PID eq NUMERO_DE_PID"
```

**Soluciones, en orden:**
1. Cierra el programa culpable.
2. Detén el servicio de IIS:
   ```cmd
   net stop W3SVC
   net stop http /y
   ```
3. Si no puedes liberarlo, cambia el puerto de Apache: Laragon → **Apache → httpd.conf** → cambia `Listen 80` por `Listen 8080` y `ServerName localhost:8080`. Tu sitio pasará a ser `http://proyecto.test:8080`.

**Otras causas:**
- Falta el **Microsoft Visual C++ Redistributable**. Instala el paquete x64 más reciente desde el sitio de Microsoft.
- El antivirus bloquea `httpd.exe`. Agrega `C:\laragon` a las exclusiones.
- Error de sintaxis en `httpd.conf` tras editarlo. Revisa el log: `C:\laragon\bin\apache\...\logs\error.log`.

---

### 1.2 MySQL no arranca

**Síntoma:** MySQL en rojo; en el log aparece algo como `Can't start server: Bind on TCP/IP port: ... in use`.

**Solución:**
1. Otro MySQL está corriendo (XAMPP, WAMP, MySQL Server instalado como servicio):
   ```cmd
   net stop MySQL80
   ```
2. Puerto 3306 ocupado: `netstat -ano | findstr :3306`
3. Datos corruptos tras un apagón: renombra `C:\laragon\data\mysql` a `mysql-old` y reinicia Laragon (⚠️ **pierdes las bases de datos**; hazlo solo si no tienes nada importante o tienes respaldo).

---

### 1.3 El dominio .test no abre

**Síntoma:** `proyecto.test` no resuelve; el navegador busca en Google o muestra *ERR_NAME_NOT_RESOLVED*.

**Solución:**
1. Laragon → clic derecho → **Reload** (regenera los virtual hosts y el archivo hosts).
2. Ejecuta Laragon **como administrador**: sin permisos no puede escribir en `C:\Windows\System32\drivers\etc\hosts`.
3. Revisa ese archivo `hosts`: debe contener una línea como `127.0.0.1 proyecto.test`.
4. Vacía la caché DNS:
   ```cmd
   ipconfig /flushdns
   ```
5. En Chrome, vacía también: `chrome://net-internals/#dns` → *Clear host cache*.
6. Escribe la URL con `http://` explícito: Chrome tiende a buscar en lugar de navegar.

---

### 1.4 Local (WP Engine) se queda en "Starting site..."

**Solución:**
1. Reinicia la aplicación por completo (ciérrala desde la bandeja del sistema).
2. Cambia el **router mode**: *Preferences → Advanced → Router Mode* → prueba `localhost` en lugar de `Site Domains`.
3. Cambia el servidor del sitio de nginx a **Apache** (o al revés) en la pestaña del sitio.
4. Antivirus/firewall: agrega Local a las exclusiones.
5. Como último recurso: *Preferences → Advanced → Delete Local's data* (⚠️ no borra los sitios, pero sí la configuración interna).

---

### 1.5 "Fatal error: Allowed memory size exhausted"

```
Fatal error: Allowed memory size of 134217728 bytes exhausted
```

**Solución:**
1. `php.ini`: `memory_limit = 512M` → reinicia Apache.
2. `wp-config.php`:
   ```php
   define( 'WP_MEMORY_LIMIT', '512M' );
   define( 'WP_MAX_MEMORY_LIMIT', '512M' );
   ```
3. Si sigue, algo está consumiendo memoria de más: desactiva plugins uno por uno.

---

## 2. WordPress

### 2.1 "Error al establecer una conexión con la base de datos"

**Causas y comprobaciones, en orden:**
1. **MySQL no está corriendo.** Revísalo en Laragon/Local.
2. **Credenciales mal escritas** en `wp-config.php`. En Laragon suele ser usuario `root`, contraseña vacía, host `localhost`.
3. **La base de datos no existe** o el nombre tiene una errata:
   ```bash
   mysql -u root -e "SHOW DATABASES;"
   ```
4. **Tablas corruptas.** Añade a `wp-config.php`:
   ```php
   define( 'WP_ALLOW_REPAIR', true );
   ```
   Visita `tusitio.test/wp-admin/maint/repair.php`, repara y **borra esa línea después**.

---

### 2.2 Todas las páginas dan 404 menos la portada

**Causa:** las reglas de reescritura no se aplican.

**Solución:**
1. *Ajustes → Enlaces permanentes* → pulsa **Guardar cambios** sin cambiar nada. Regenera `.htaccess`.
2. Verifica que `mod_rewrite` esté activo: Laragon → **Apache → modules → mod_rewrite**.
3. Comprueba que exista `.htaccess` en la raíz con:
   ```apache
   # BEGIN WordPress
   <IfModule mod_rewrite.c>
   RewriteEngine On
   RewriteBase /
   RewriteRule ^index\.php$ - [L]
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /index.php [L]
   </IfModule>
   # END WordPress
   ```
4. En `httpd.conf`, el directorio del sitio debe tener `AllowOverride All` (si dice `None`, `.htaccess` se ignora).
5. En **Local con nginx** no hay `.htaccess`: cambia el sitio a Apache.

---

### 2.3 Pantalla en blanco (WSOD)

**Solución:**
1. Activa la depuración en `wp-config.php`:
   ```php
   define( 'WP_DEBUG', true );
   define( 'WP_DEBUG_LOG', true );
   define( 'WP_DEBUG_DISPLAY', false );
   ```
2. Lee `wp-content/debug.log`: te dirá archivo y línea exactos.
3. Si el error viene de un plugin y no puedes entrar al panel, renombra por FTP/disco la carpeta `wp-content/plugins` a `plugins-off`. Entra, y ve reactivando uno por uno.
4. Si viene del tema: renombra la carpeta del tema; WordPress activará uno por defecto.
5. Causa clásica en este taller: **un error de sintaxis en `functions.php`** del tema hijo (falta un `;` o una llave).

---

### 2.4 "El archivo subido excede la directiva upload_max_filesize"

**Solución:** en `php.ini`

```ini
upload_max_filesize = 128M
post_max_size = 128M
max_execution_time = 300
memory_limit = 512M
```

Reinicia Apache. Verifica en *Herramientas → Salud del sitio → Información → Servidor*.

> `post_max_size` debe ser **mayor o igual** que `upload_max_filesize`, o el límite real será el menor de los dos.

---

### 2.5 No puedo iniciar sesión / bucle de redirección en /wp-admin

1. Borra cookies del dominio local.
2. Comprueba `siteurl` y `home` en la tabla `wp_options`: deben coincidir exactamente con la URL que usas (con o sin `www`, `http` o `https`).
3. Fuérzalas temporalmente en `wp-config.php`:
   ```php
   define( 'WP_HOME', 'http://recal-taller.test' );
   define( 'WP_SITEURL', 'http://recal-taller.test' );
   ```
4. ¿Olvidaste la contraseña? Con WP-CLI: `wp user update admin_taller --user_pass=NuevaClave123`

---

### 2.6 "Se ha producido un error crítico en esta web"

Es el WSOD moderno. WordPress envía el detalle al correo del administrador. Si no llega, activa `WP_DEBUG_LOG` y lee `debug.log` (ver 2.3).

---

## 3. Elementor

### 3.1 El editor no carga (rueda girando o pantalla en blanco)

**Solución, en orden:**
1. **Modo seguro:** *Elementor → Herramientas → Modo seguro → Activar*. Si en modo seguro sí carga, el conflicto es con un plugin o con el tema.
2. Sube la memoria: `WP_MEMORY_LIMIT` a `512M` y `memory_limit` en `php.ini`.
3. Sube `max_input_vars` a `3000` en `php.ini`. Es una causa muy común en páginas largas.
4. Desactiva plugins de caché y de optimización (minificación de JS/CSS).
5. Prueba en una ventana de incógnito y con las extensiones del navegador desactivadas (los bloqueadores de anuncios rompen el editor).
6. Comprueba la versión de PHP: Elementor 4.x requiere **PHP 7.4 o superior**.

---

### 3.2 "Preview could not be loaded" / "La vista previa no se pudo cargar"

1. Comprueba que la URL del sitio (*Ajustes → Generales*) sea la misma con la que navegas.
2. Desactiva `mod_security` si el hosting lo tiene (en local rara vez aplica).
3. Cambia temporalmente a un tema por defecto (Twenty Twenty-*) para descartar el tema.
4. Elementor te ofrece un enlace de diagnóstico en el propio mensaje de error: úsalo.

---

### 3.3 Los cambios no se ven en el sitio publicado

**El remedio universal:**
1. *Elementor → Herramientas → **Regenerar archivos y datos***
2. `Ctrl + Shift + R` en el navegador (recarga forzada)
3. Vacía la caché del plugin de caché, si tienes uno
4. Revisa que no estés viendo una versión guardada como borrador: pulsa **Publicar**, no solo *Guardar borrador*

---

### 3.4 Mi CSS no se aplica

1. `F12` → inspecciona el elemento → mira **qué selector está ganando** en el panel Styles.
2. Si tu regla aparece tachada, el problema es de especificidad: → [08 · Tema hijo § CSS que sí gana](08-tema-hijo-y-codigo.md#4-escribir-css-que-sí-gane)
3. Si tu regla ni siquiera aparece: el archivo no se está cargando. Revisa la pestaña **Network**, filtra por CSS y busca tu archivo. Si no está, el `wp_enqueue_style()` tiene mal la ruta.
4. Si aparece pero con contenido viejo: es caché. Usa `filemtime()` como versión (ver guía 08).

---

### 3.5 Las fuentes no cargan o se ven distintas a Figma

1. La fuente del diseño puede ser de pago o no estar en Google Fonts. Busca una alternativa libre o compra la licencia (decisión del cliente, no tuya).
2. Si desactivaste Google Fonts en *Ajustes → Rendimiento*, tienes que servir las fuentes localmente.
3. Revisa peso y `line-height`: casi siempre la diferencia visual no es la familia, sino el peso o el interlineado.

---

### 3.6 El diseño se rompe en móvil

1. Busca anchos fijos en píxeles: cámbialos a `%`, `rem` o `max-width`.
2. Revisa la **dirección del contenedor** en el breakpoint móvil: normalmente debe pasar de `fila` a `columna`.
3. Padding lateral: en móvil suele necesitar al menos `20px`.
4. Imágenes: `width: 100%; height: auto;`
5. Busca desbordamientos horizontales: si aparece scroll lateral, algún elemento excede el ancho. En DevTools, `document.querySelectorAll('*')` y revisa uno por uno, o usa la vista de *Layout*.

---

### 3.7 Perdí mi trabajo en Elementor

1. Historial: `Ctrl + Shift + H` → pestaña **Revisiones**.
2. WordPress guarda revisiones de la página: *Página → Revisiones* en el panel.
3. Prevención: exporta tus plantillas al terminar cada sesión.

---

## 4. Git y GitHub

### 4.1 `fatal: not a git repository`
Estás fuera de la carpeta del proyecto. `cd` a la carpeta correcta, o `git init` si de verdad es un proyecto nuevo.

### 4.2 `Support for password authentication was removed`
GitHub ya no acepta tu contraseña. Usa un **token** o **SSH** → [05 · Git y GitHub § Autenticarte](05-git-y-github.md#3-autenticarte-con-github)

### 4.3 `failed to push some refs to ...`
Alguien subió cambios antes que tú.

```bash
git pull origin recal-TU_NOMBRE --rebase
# resuelve conflictos si los hay
git push
```

### 4.4 Conflictos de fusión (`CONFLICT (content): Merge conflict in ...`)
1. Abre el archivo en VS Code: verás bloques `<<<<<<<`, `=======`, `>>>>>>>`.
2. Decide qué se queda (VS Code te da botones *Accept Current / Incoming / Both*).
3. Borra los marcadores, guarda, y:
   ```bash
   git add ARCHIVO
   git commit
   ```

### 4.5 `warning: LF will be replaced by CRLF`
Es un aviso, no un error. En Windows: `git config --global core.autocrlf true`.

### 4.6 Subí `node_modules` o un archivo enorme

```bash
git rm -r --cached node_modules
echo "node_modules/" >> .gitignore
git commit -m "Deja de rastrear node_modules"
git push
```

> Si el archivo supera los 100 MB, GitHub rechaza el push. Habrá que reescribir el historial (`git filter-repo`) o partir de un commit limpio. Pide ayuda antes de intentarlo.

### 4.7 `Permission denied (publickey)`
Tu llave SSH no está registrada en GitHub, o el agente no la carga:

```bash
ssh -T git@github.com          # diagnóstico
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

### 4.8 Me equivoqué en el nombre de la rama

```bash
git branch -m nombre-nuevo
git push origin -u nombre-nuevo
git push origin --delete nombre-viejo
```

### 4.9 Hice commit de algo que no debía

```bash
# Deshacer el último commit, conservando los cambios en el disco
git reset --soft HEAD~1

# Descartar cambios de un archivo (⚠️ irreversible)
git checkout -- ruta/al/archivo
```

---

## 5. Migración y producción

### 5.1 Las imágenes no se ven después de migrar
Quedaron URLs viejas en la base de datos. Corre el reemplazo **serializado** (WP-CLI o *Better Search Replace*), nunca un `UPDATE ... REPLACE()` a mano.

### 5.2 Elementor pierde el diseño tras la migración
1. *Elementor → Herramientas → **Reemplazar URL***: pon la URL vieja y la nueva.
2. Luego *Regenerar archivos y datos*.

### 5.3 Advertencia de "contenido mixto"
La página se sirve por `https` pero carga recursos por `http`. Reemplaza `http://tudominio` por `https://tudominio` en la base de datos y revisa los enlaces escritos a mano.

### 5.4 "Too many redirects"
`siteurl`/`home` no coinciden con el dominio real, o hay un doble redireccionamiento entre `.htaccess` y un plugin de SSL. Define `WP_HOME` y `WP_SITEURL` en `wp-config.php` y desactiva plugins de redirección para probar.

### 5.5 El formulario no envía correos
El envío por `mail()` de PHP casi nunca funciona en local ni en hosting compartido. Configura **SMTP** (por ejemplo con *WP Mail SMTP*) usando las credenciales del correo del cliente.

---

## 6. ¿Y si nada de esto funciona?

Abre un **Issue** en este repositorio con:

1. **Qué querías hacer**
2. **Qué pasos diste**, exactos
3. **Qué esperabas que ocurriera**
4. **Qué ocurrió**, con el mensaje de error **completo** copiado como texto (no captura recortada)
5. Tu entorno: sistema operativo, Laragon o Local, versión de PHP y de WordPress
6. Qué ya intentaste

Un buen reporte se resuelve en minutos. Un "no me funciona" no se resuelve nunca.
