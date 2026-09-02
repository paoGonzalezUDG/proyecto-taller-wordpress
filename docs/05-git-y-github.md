# 05 · Git y GitHub

Git guarda el historial de tu código en tu computadora. GitHub es donde ese historial vive en línea y donde entregas tus avances.

---

## 1. Instalar Git

- **Windows:** <https://git-scm.com/download/win>
  Durante la instalación:
  - *Default editor:* **Visual Studio Code**
  - *Adjusting the name of the initial branch:* **Override → `main`**
  - *PATH environment:* **Git from the command line and also from 3rd-party software**
  - *Line ending conversions:* **Checkout Windows-style, commit Unix-style**
- **macOS:** `brew install git` o instala Xcode Command Line Tools (`xcode-select --install`)

Verifica:

```bash
git --version
```

---

## 2. Configuración inicial (solo una vez)

```bash
git config --global user.name "TU_USUARIO_EN_GITHUB"
git config --global user.email "TU_CORREO_EN_GITHUB"
git config --global init.defaultBranch main
git config --global core.autocrlf true    # Solo en Windows
```

Revisa que quedó bien:

```bash
git config --global --list
```

> El correo debe ser **el mismo** que tienes en GitHub. Si no, tus commits no se te acreditan.

---

## 3. Autenticarte con GitHub

Desde 2021 GitHub **ya no acepta tu contraseña** al hacer `push`. Tienes dos opciones:

### Opción A — Personal Access Token (más simple)
1. GitHub → *Settings → Developer settings → Personal access tokens → Tokens (classic)*
2. *Generate new token (classic)*
3. Nombre: `taller-wordpress`; expiración: la duración del taller; permiso: **`repo`**
4. Copia el token: **solo se muestra una vez**.
5. Cuando `git push` te pida contraseña, pega el token.
6. Para no repetirlo: `git config --global credential.helper manager` (Windows) / `osxkeychain` (macOS).

### Opción B — SSH (más limpio a largo plazo)

```bash
ssh-keygen -t ed25519 -C "TU_CORREO_EN_GITHUB"
# Enter tres veces (o pon una passphrase)

# Windows (PowerShell)
Get-Content ~/.ssh/id_ed25519.pub | clip
# macOS
pbcopy < ~/.ssh/id_ed25519.pub
```

Pega la llave en GitHub → *Settings → SSH and GPG keys → New SSH key*. Prueba:

```bash
ssh -T git@github.com
```

> Trata el token como una contraseña: no lo pegues en un chat, ni en un archivo del repositorio, ni en una captura de pantalla. Si se te escapa, revócalo de inmediato en GitHub.

---

## 4. Flujo del taller

```bash
# 1. Clonar (solo la primera vez)
cd C:\laragon\www
git clone https://github.com/paoGonzalezUDG/proyecto-taller-wordpress.git
cd proyecto-taller-wordpress

# 2. Crear tu rama personal
git checkout -b recal-TU_NOMBRE

# 3. Trabajar... y luego revisar qué cambió
git status
git diff

# 4. Guardar el avance
git add .
git commit -m "Agrega estilos responsive a la sección de servicios"

# 5. Subirlo a GitHub (la primera vez con -u)
git push -u origin recal-TU_NOMBRE

# 6. Las siguientes veces basta con
git push
```

### Traer los cambios que suba la instructora

```bash
git checkout main
git pull origin main
git checkout recal-TU_NOMBRE
git merge main
```

---

## 5. Buenos mensajes de commit

| ❌ Mal | ✅ Bien |
|---|---|
| `cambios` | `Agrega header responsive con menú hamburguesa` |
| `arreglo` | `Corrige desbordamiento del hero en móvil (360px)` |
| `avance clase 4` | `Maqueta la sección Proceso con HTML semántico` |
| `.` | `Enlaza el CTA del hero al formulario de presupuesto` |

Reglas: en presente, en español, concreto, una idea por commit.

---

## 6. Qué NO se sube nunca

Este repositorio ya trae un `.gitignore`, pero entiende por qué:

- `wp-config.php` → contiene credenciales
- `node_modules/` → pesa cientos de MB y se regenera con `npm i`
- `wp-content/uploads/` → medios pesados
- `*.sql` → volcados de base de datos
- `.env`, tokens, contraseñas → **jamás**

> Si por accidente subiste una contraseña: cámbiala **de inmediato**. Borrarla del repositorio no la borra del historial.

---

## 7. Pull Request de entrega (Sesión 8)

1. Sube tu rama: `git push -u origin recal-TU_NOMBRE`
2. En GitHub aparecerá el botón **Compare & pull request**.
3. Base: `main` ← Compare: `recal-TU_NOMBRE`
4. En la descripción incluye: qué construiste, qué se te dificultó y cómo lo resolviste.
5. Envía y espera revisión.

---

## 8. Errores frecuentes de Git

→ [errores-comunes.md § Git y GitHub](errores-comunes.md#4-git-y-github)
