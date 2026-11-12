# 🧼 Taller: Sitio Web con WordPress + Elementor

Taller práctico de desarrollo web. Construiremos, desde cero y en local, un sitio de **WordPress con Elementor** partiendo de una propuesta de diseño en **Figma**, reforzando en el camino las bases de **HTML, CSS y JavaScript**.

El caso de estudio es un cliente real: **RECAL — [limpiezadecalzado.com](https://limpiezadecalzado.com/)**, empresa española dedicada a la limpieza y reacondicionamiento de calzado laboral, EPI y vestuario técnico.

🎨 **Diseño del proyecto en Figma:**
<https://www.figma.com/design/CN0BiZIyyV8NqCcH5saT3T/LIMPIEZA-DE-CALZADO--copia->

> Duplica el archivo a tus borradores (*Duplicate to your drafts*) antes de tocar nada. **No edites el archivo compartido.**

> Aquí llevaremos el registro del avance de cada sesión. Si te pierdes en algún momento, revisa en qué paso vamos y apóyate en tus compañeros.

---

## 📌 Antes de empezar

- **No uses IA para resolver las actividades.** La idea del taller es que desarrolles tu propio criterio y habilidades. Si la usas para hacer el trabajo, el aprendizaje se pierde… y entonces este taller no tendría sentido.
- Trabajaremos **siempre en local**. Nada de lo que hagas aquí toca el sitio real del cliente.

---

## 🧰 Tecnologías del taller

| Herramienta | Versión de referencia | Para qué la usamos |
|---|---|---|
| **WordPress** | 7.1.2 | Sistema de gestión de contenidos (CMS) base del proyecto. |
| **Elementor** | 4.2.4 | Constructor visual de páginas (Page builder). |
| **PHP** | 8.3 o superior | Lenguaje de programación del lado del servidor sobre el que corre WordPress. |
| **MySQL / MariaDB** | MySQL 8.0+ / MariaDB 10.11+ | Base de datos del sitio |
| **Apache** | 2.4 | Servidor web local |
| **Laragon** *o* **Local (WP Engine)** | Última estable | Entorno de desarrollo local |
| **Visual Studio Code** | Última estable | Editor de código |
| **Git** | 2.4x | Control de versiones |
| **GitHub** | — | Repositorio remoto y entrega de tareas |
| **Figma / Figma Education** | — | Diseño, Dev Mode y extracción de assets |
| **Chrome DevTools** | — | Inspección y depuración |

---

# 📅 Plan de sesiones

---

## ✅ Sesión 1 — Preparación del entorno

**Objetivo:** que todas las computadoras queden listas y funcionando igual.

- [ ] **Paso 1:** Crear cuenta en Figma (con **Figma Education**).
      → [Guía de Figma Education](https://github.com/paoGonzalezUDG/proyecto-taller-wordpress/wiki/Gu%C3%ADa:-Figma-Education)
- [ ] **Paso 2:** Instalar **Visual Studio Code** + extensiones recomendadas.
      → [Guía: Visual Studio Code](https://github.com/paoGonzalezUDG/proyecto-taller-wordpress/wiki/Gu%C3%ADa:-Visual-Studio-Code)
- [ ] **Paso 3:** Instalar extensiones de Chrome recomendadas.
      → [Guía: Potenciando tu Navegador con Extensiones de Chrome](https://github.com/paoGonzalezUDG/proyecto-taller-wordpress/wiki/Gu%C3%ADa:-Potenciando-tu-Navegador-con-Extensiones-de-Chrome)
- [ ] **Paso 4:** Crear cuenta en GitHub.
      → [Guía: Instalando Git y Creando tu Cuenta en GitHub](https://github.com/paoGonzalezUDG/proyecto-taller-wordpress/wiki/Gu%C3%ADa:-Instalando-Git-y-Creando-tu-Cuenta-en-GitHub)
- [ ] **Paso 5:** Instalar el entorno local.
      → [Guía: Laragon(Windows)](https://github.com/paoGonzalezUDG/proyecto-taller-wordpress/wiki/Gu%C3%ADa:-Laragon)
- [ ] **Paso 6:** Verificar que las versiones de PHP y APACHE sean las correctas
      

https://github.com/user-attachments/assets/707e32b1-a69f-4a51-ba1a-363d94a8e096


- [ ] **Paso 7:** Verificar versiones:
      
En Laragon, abre la terminal y pega los siguientes comandos:

```bash
php -v          # Debe mostrar 8.3.x o superior
```

```bash
mysql --version # MySQL 8.x o MariaDB 10.11+
```

```bash
git --version   # Git
```

```bash
code --version  # VS Code
```

<img width="678" height="454" alt="image" src="https://github.com/user-attachments/assets/15c99084-b2d3-4b7f-8e0d-29c73c2c0ef5" />

https://github.com/user-attachments/assets/da46d612-0c01-478f-aef2-57d1e7224c79

---

## 🧱 Sesión 2 — Instalar WordPress y configuración base

**Objetivo:** tener `recal.test` corriendo con WordPress limpio.

- [ ] **Paso 1:** Crear proyecto en WordPress. → [Guía](https://github.com/paoGonzalezUDG/proyecto-taller-wordpress/wiki/Gu%C3%ADa:-WordPress)
- [ ] **Paso 2:** Configuración inicial obligatoria: → [Guía](https://github.com/paoGonzalezUDG/proyecto-taller-wordpress/wiki/WordPress:-Configuraci%C3%B3n-inicial-obligatoria)
- [ ] **Paso 3:** Activar `WP_DEBUG` para ver errores reales: → [Guía](https://github.com/paoGonzalezUDG/proyecto-taller-wordpress/wiki/Activar-WP_DEBUG-para-ver-errores-reales)

---

## 🎨 Sesión 3 — Del diseño al plan: Figma y Dev Mode

**Objetivo:** leer el diseño como lo haría una persona desarrolladora, no como espectadora.

- [ ] **Paso 1:** Abrir el [archivo de Figma del proyecto](https://www.figma.com/design/CN0BiZIyyV8NqCcH5saT3T/LIMPIEZA-DE-CALZADO--copia-), duplicarlo a tus borradores y activar **Dev Mode**. → [Guía](https://github.com/paoGonzalezUDG/proyecto-taller-wordpress/wiki/Gu%C3%ADa:-Figma-Education)
- [ ] **Paso 2:** Levantar el **inventario de secciones** del sitio (RECAL): Hero, Proceso, Servicios, Empresa, CTA de presupuesto, Footer.  → [Guía](https://github.com/paoGonzalezUDG/proyecto-taller-wordpress/wiki/inventario-de-secciones)

---

## 🚢 Sesión 4 — Entrega y cierre

**Objetivo:** **subir tu evidencia a este repositorio** en tu propia rama.

- [ ] **Paso 1:** Tomar las **2 capturas de evidencia** (ver tabla abajo).
- [ ] **Paso 2:** **Subir tu evidencia a GitHub** en tu rama `nombre-carrera-año` (instrucciones para copiar y pegar abajo).

### 📸 Paso 1 — Capturas de evidencia

Guárdalas en formato **PNG** con estos nombres **exactos**:

| Archivo | Qué debe mostrar |
|---|---|
| `01-inicio-escritorio.png` | Página de inicio a 1440 px de ancho |
| `02-inicio-movil.png` | Página de inicio a 375 px (DevTools → `Ctrl + Shift + M`) |

> Tip: en DevTools, `Ctrl + Shift + P` → escribe **screenshot** → *Capture full size screenshot* toma la página completa.

### 🌿 Paso 2 — Subir tu evidencia a GitHub (copiar y pegar)

> **Antes de empezar**
> - Usa **Git Bash** (menú Inicio → escribe *Git Bash*). En Mac usa la app **Terminal**.
> - Para **pegar** en Git Bash: `Shift + Insert` o clic derecho → *Paste*. (`Ctrl + V` puede no funcionar).
> - Pega **un bloque a la vez** y presiona `Enter`. Espera a que termine antes de pegar el siguiente.
> - Solo vas a **editar lo que está entre comillas** en los bloques 2.1 y 2.2. Todo lo demás se pega tal cual.

#### 2.1 Escribe el nombre de tu rama

Formato: **primer nombre - carrera - año**, todo en **minúsculas**, **sin acentos**, **sin ñ** (usa `n`) y **sin espacios** (usa `-`).

| ✅ Correcto | ❌ Incorrecto |
|---|---|
| `paola-computacion-2026` | `Paola-Computación-2026` |
| `jose-informatica-2026` | `josé informática 2026` |
| `nuno-computacion-2026` | `nuño_computacion_2026` |

Cambia `paola-computacion-2026` por el tuyo y pega:

```bash
RAMA="paola-computacion-2026"
echo "Tu rama será: $RAMA"
```

> ⚠️ Si cierras Git Bash, **vuelve a pegar este bloque** antes de continuar; si no, los siguientes comandos fallan.

#### 2.2 Dile a Git quién eres (solo la primera vez en esta computadora)

Usa el **mismo correo de tu cuenta de GitHub**:

```bash
git config --global user.name "Tu Nombre Apellido"
git config --global user.email "tu-correo@ejemplo.com"
```

#### 2.3 Descarga el repositorio

```bash
cd ~
git clone https://github.com/paoGonzalezUDG/proyecto-taller-wordpress.git
cd ~/proyecto-taller-wordpress
git checkout main
git pull origin main
```

> Si aparece `already exists and is not an empty directory`, no pasa nada: ya lo tenías descargado. Las demás líneas siguen funcionando.

#### 2.4 Crea tu rama y tu carpeta de entrega

```bash
git switch -c "$RAMA"
mkdir -p "entregas/$RAMA/capturas"
cp entregas/_plantilla/README.md "entregas/$RAMA/README.md"
explorer.exe "$(cygpath -w "$PWD/entregas/$RAMA/capturas")"
```

Se abrirá la carpeta `capturas`. **Copia ahí tus 2 imágenes** del Paso 1.

> En Mac, cambia la última línea por: `open "entregas/$RAMA/capturas"`

#### 2.5 Llena tu ficha de entrega

```bash
code "entregas/$RAMA/README.md"
```

Se abre en VS Code. Llena tus datos y tus dos respuestas. Guarda con `Ctrl + S`.

#### 2.6 Sube tu evidencia

```bash
git add "entregas/$RAMA"
git commit -m "Agrega evidencia final de $RAMA: capturas"
git push -u origin "$RAMA"
```

> La primera vez se abrirá una ventana para **iniciar sesión en GitHub**. Elige *Sign in with your browser* y autoriza.

#### 2.7 Comprueba que sí se subió

Abre <https://github.com/paoGonzalezUDG/proyecto-taller-wordpress/branches> y busca tu rama. Entra a `entregas/tu-rama/` y verifica que se vean tus 2 capturas.

Después, abre tu **Pull Request** (no hagas *merge*):

1. En la página del repositorio aparecerá el aviso amarillo *“tu-rama had recent pushes”* → clic en **Compare & pull request**.
2. Título: `Entrega final — tu-rama`
3. Clic en **Create pull request**.

#### 🧯 Errores comunes

| Mensaje que ves | Qué significa | Solución |
|---|---|---|
| `Permission to paoGonzalezUDG/proyecto-taller-wordpress.git denied` o `403` | Aún no eres colaborador del repositorio. | Revisa tu correo y acepta la invitación, o entra a <https://github.com/paoGonzalezUDG/proyecto-taller-wordpress/invitations>. Luego vuelve a pegar: `git push -u origin "$RAMA"`. Si no tienes invitación, usa el **Plan B** de abajo. |
| `Author identity unknown` | Git no sabe quién eres. | Haz el bloque **2.2** y vuelve a pegar el bloque **2.6**. |
| `nothing to commit` | Git no encontró archivos nuevos. | Revisa que las capturas estén dentro de `entregas/tu-rama/capturas` y que guardaste el README con `Ctrl + S`. |
| `a branch named '...' already exists` | Ya habías creado tu rama. | Pega `git switch "$RAMA"` y continúa con las otras líneas del bloque 2.4. |
| `'' is not a valid branch name` o `entregas//capturas` | Se perdió el nombre de tu rama (cerraste Git Bash). | Vuelve a pegar el bloque **2.1** y luego `cd ~/proyecto-taller-wordpress`. |
| `src refspec ... does not match any` | Intentaste subir sin haber hecho commit. | Pega de nuevo el bloque **2.6** completo. |
| `not a git repository` | No estás dentro de la carpeta del proyecto. | Pega `cd ~/proyecto-taller-wordpress` y repite el bloque que falló. |

**Plan B (solo si no eres colaborador):** entra al repositorio en GitHub → botón **Fork** → *Create fork*. Luego pega, cambiando `TU_USUARIO` por tu usuario de GitHub:

```bash
git remote add mifork https://github.com/TU_USUARIO/proyecto-taller-wordpress.git
git push -u mifork "$RAMA"
```

Después, en tu fork, clic en **Compare & pull request** para enviarlo hacia `paoGonzalezUDG/proyecto-taller-wordpress` → `main`.

---

## 🔁 Flujo de trabajo con Git (cada sesión)

```bash
# Antes de empezar: traer los cambios nuevos
git checkout main
git pull origin main
git checkout TU_RAMA        # ej. paola-computacion-2026
git merge main

# Al terminar: guardar tu avance
git add .
git commit -m "Maqueta la sección de servicios en HTML semántico"
git push -u origin TU_RAMA
```

> El mensaje de commit debe ser **claro, específico y único**. Repetir *"cambios"* en cada commit es una mala práctica: hace ilegible el historial.

---

## 📚 Documentación oficial

- [WordPress — Documentación](https://wordpress.org/documentation/)
- [Elementor — Centro de ayuda](https://elementor.com/help/)
- [MDN Web Docs — HTML](https://developer.mozilla.org/es/docs/Web/HTML) · [CSS](https://developer.mozilla.org/es/docs/Web/CSS) · [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [Figma — Dev Mode](https://help.figma.com/hc/en-us/articles/15023124644247)
- [Git — Documentación](https://git-scm.com/doc)

---

*Taller impartido por [Paola González](https://github.com/paoGonzalezUDG) · Servicio social · Universidad de Guadalajara*
