# 01 · Requisitos, cuentas y editor

Antes de la primera sesión práctica, deja tu equipo listo. Calcula **40–60 minutos** con buena conexión.

---

## 1. Requisitos de la computadora

| | Mínimo | Recomendado |
|---|---|---|
| Sistema | Windows 10 64 bits / macOS 12 | Windows 11 / macOS 14+ |
| RAM | 4 GB | 8 GB o más |
| Disco libre | 10 GB | 20 GB |
| Permisos | Cuenta de administrador | Cuenta de administrador |

> **Sin permisos de administrador no vas a poder instalar Laragon ni Local.** Si tu equipo es de la universidad o del trabajo, resuélvelo antes de la sesión.

Software base que instalaremos:

- Entorno local: **Laragon** (Windows) o **Local by WP Engine** (Windows/macOS)
- **Visual Studio Code**
- **Git**
- **Google Chrome** (por DevTools)
- *(Opcional)* **Node.js LTS**, solo si vamos a compilar Sass

---

## 2. Cuentas que necesitas

### GitHub
1. Regístrate en <https://github.com/signup> con tu **correo institucional** (te sirve para el paquete de estudiante).
2. Verifica el correo.
3. Activa la **autenticación en dos pasos (2FA)**: *Settings → Password and authentication → Two-factor authentication*. GitHub la exige para poder colaborar.
4. Guarda tus **códigos de recuperación** en un lugar seguro. Si pierdes el 2FA sin ellos, pierdes la cuenta.

### Figma + Figma Education
Ver guía dedicada → [`06-figma-education.md`](06-figma-education.md)

### WhatsApp Business / correo del cliente
No los necesitas. El sitio real del cliente **no se toca**: trabajamos con una copia local.

---

## 3. Visual Studio Code

Descarga: <https://code.visualstudio.com/>

Durante la instalación en Windows marca estas casillas:

- ✔ *Agregar la acción "Abrir con Code" al menú contextual del archivo*
- ✔ *Agregar la acción "Abrir con Code" al menú contextual del directorio*
- ✔ *Agregar a PATH* ← **esta es imprescindible**

Verifica en una terminal nueva:

```bash
code --version
```

### Extensiones recomendadas

Instálalas desde el panel de extensiones (`Ctrl + Shift + X`):

| Extensión | Para qué sirve |
|---|---|
| **PHP Intelephense** | Autocompletado y errores de PHP |
| **WordPress Snippets** | Atajos de funciones de WordPress |
| **Live Server** | Vista previa instantánea de HTML/CSS/JS sueltos |
| **Prettier** | Formatea el código automáticamente |
| **Auto Rename Tag** | Renombra la etiqueta de cierre al cambiar la de apertura |
| **Path Intellisense** | Autocompleta rutas de archivos |
| **GitLens** | Historial de Git dentro del editor |
| **Spanish Language Pack** | Interfaz en español (opcional) |

### Ajustes útiles

`Ctrl + ,` → busca y activa:

- `Editor: Format On Save` → activado
- `Files: Auto Save` → `afterDelay`
- `Editor: Tab Size` → `4` para PHP, `2` para HTML/CSS/JS

---

## 4. Extensiones de Chrome recomendadas

- **Web Developer** — utilidades de inspección
- **WhatRuns** o **Wappalyzer** — detectar qué tecnologías usa un sitio
- **ColorZilla** — cuentagotas de colores
- **WhatFont** — identificar tipografías
- **Lighthouse** *(ya integrado en DevTools)*

---

## 5. Verificación final

Abre una terminal **nueva** (importante: las variables de entorno solo se cargan al abrirla) y ejecuta:

```bash
git --version
code --version
php -v
node -v      # opcional
```

Si alguno responde *"no se reconoce como un comando interno o externo"*, el problema es el **PATH**.
→ [errores-comunes.md § PATH](errores-comunes.md#0-comandos-que-no-se-reconocen-path)
