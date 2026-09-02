# 🧾 Chuleta de línea de comandos

Todo lo que vamos a teclear en el taller, en un solo lugar.

---

## Navegación básica (Windows)

```cmd
cd C:\laragon\www              :: Cambiar de carpeta
cd ..                          :: Subir un nivel
dir                            :: Listar archivos
mkdir mi-carpeta               :: Crear carpeta
del archivo.txt                :: Borrar archivo
cls                            :: Limpiar pantalla
code .                         :: Abrir la carpeta actual en VS Code
```

## Navegación básica (macOS / Linux / Git Bash)

```bash
cd ~/Local\ Sites
cd ..
ls -la
mkdir mi-carpeta
rm archivo.txt
clear
code .
```

---

## Verificar versiones

```bash
php -v
mysql --version
git --version
node -v
npm -v
code --version
wp --info          # Solo si tienes WP-CLI
```

---

## Git — lo que usarás todos los días

```bash
# Configuración inicial (una sola vez)
git config --global user.name "TU_USUARIO"
git config --global user.email "TU_CORREO"
git config --global --list

# Empezar
git clone https://github.com/paoGonzalezUDG/proyecto-taller-wordpress.git
cd proyecto-taller-wordpress

# Ramas
git branch                       # Ver ramas
git checkout -b recal-TU_NOMBRE  # Crear y cambiar
git checkout main                # Cambiar
git branch -m nombre-nuevo       # Renombrar la rama actual
git branch -d rama-vieja         # Borrar rama local

# Trabajo diario
git status                       # ¿Qué cambió?
git diff                         # ¿Qué exactamente?
git add .                        # Preparar todo
git add ruta/archivo.css         # Preparar un archivo
git commit -m "Mensaje claro y específico"
git push -u origin recal-TU_NOMBRE   # Primera vez
git push                             # Siguientes veces

# Traer cambios
git pull origin main
git fetch --all
git merge main

# Historial
git log --oneline --graph --decorate -10

# Deshacer
git checkout -- archivo.css      # Descartar cambios de un archivo
git reset --soft HEAD~1          # Deshacer el último commit, conservar cambios
git restore --staged archivo.css # Quitar del área de preparación
```

---

## MySQL (Laragon)

```bash
mysql -u root                                    # Entrar a la consola
mysql -u root -e "SHOW DATABASES;"
mysql -u root -e "CREATE DATABASE recal_local CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
mysql -u root -e "DROP DATABASE recal_local;"    # ⚠️ Irreversible

mysqldump -u root recal_local > respaldo.sql     # Exportar
mysql -u root recal_local < respaldo.sql         # Importar
```

Dentro de la consola de MySQL:

```sql
SHOW DATABASES;
USE recal_local;
SHOW TABLES;
SELECT option_name, option_value FROM wp_options WHERE option_name IN ('siteurl','home');
EXIT;
```

---

## WP-CLI (incluido en Local; instalable en Laragon)

```bash
wp core version
wp core download --locale=es_ES
wp db export respaldo.sql
wp db import respaldo.sql

wp plugin list
wp plugin install elementor --activate
wp plugin deactivate --all
wp plugin delete hello akismet

wp theme list
wp theme install hello-elementor --activate

wp user list
wp user update admin_taller --user_pass=NuevaClave123

# Reemplazar URLs respetando datos serializados
wp search-replace 'http://recal-taller.test' 'https://midominio.com' --all-tables --dry-run
wp search-replace 'http://recal-taller.test' 'https://midominio.com' --all-tables --precise

wp cache flush
wp rewrite flush
```

> Corre siempre primero con `--dry-run`. Te dice cuántos reemplazos hará sin tocar nada.

---

## Node y npm (solo si compilamos Sass)

```bash
npm -v
npm install                 # Instalar dependencias del proyecto
npm cache clean --force     # Limpiar caché cuando algo falla
npm run watch               # Compilar en tiempo real
npm run build               # Compilar para producción
```

---

## Diagnóstico de puertos (Windows)

```cmd
netstat -ano | findstr :80        :: ¿Quién usa el puerto 80?
netstat -ano | findstr :3306      :: ¿Quién usa MySQL?
tasklist /FI "PID eq 1234"        :: ¿Qué programa es ese PID?
taskkill /PID 1234 /F             :: Matarlo (con cuidado)
net stop W3SVC                    :: Detener IIS
ipconfig /flushdns                :: Limpiar caché DNS
```

---

## Atajos de VS Code

| Atajo | Acción |
|---|---|
| `Ctrl + P` | Buscar archivo por nombre |
| `Ctrl + Shift + F` | Buscar texto en todo el proyecto |
| `Ctrl + Shift + P` | Paleta de comandos |
| `Ctrl + ñ` / `` Ctrl + ` `` | Abrir/cerrar terminal |
| `Alt + Shift + F` | Formatear documento |
| `Ctrl + D` | Seleccionar la siguiente coincidencia |
| `Alt + ↑ / ↓` | Mover la línea |
| `Ctrl + /` | Comentar / descomentar |
| `Ctrl + B` | Ocultar la barra lateral |

---

## Atajos de Chrome DevTools

| Atajo | Acción |
|---|---|
| `F12` | Abrir DevTools |
| `Ctrl + Shift + C` | Inspeccionar elemento |
| `Ctrl + Shift + M` | Modo dispositivo (responsive) |
| `Ctrl + Shift + R` | Recarga forzada, ignorando caché |
| `Esc` | Abrir la consola sobre cualquier pestaña |
