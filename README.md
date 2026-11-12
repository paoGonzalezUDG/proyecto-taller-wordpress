# Taller: Sitio Web con WordPress + Elementor

Taller práctico de desarrollo web. Construiremos, desde cero y en local, un sitio de **WordPress con Elementor** partiendo de una propuesta de diseño en **Figma**, reforzando en el camino las bases de **HTML, CSS y JavaScript**.

El caso de estudio es un cliente real: **RECAL — [limpiezadecalzado.com](https://limpiezadecalzado.com/)**, empresa española dedicada a la limpieza y reacondicionamiento de calzado laboral, EPI y vestuario técnico.

**Diseño del proyecto en Figma:**
<https://www.figma.com/design/CN0BiZIyyV8NqCcH5saT3T/LIMPIEZA-DE-CALZADO--copia->

> Duplica el archivo a tus borradores (*Duplicate to your drafts*) antes de tocar nada. **No edites el archivo compartido.**

> Aquí llevaremos el registro del avance de cada sesión. Si te pierdes en algún momento, revisa en qué paso vamos y apóyate en tus compañeros.

---

## Antes de empezar

- **No uses IA para resolver las actividades.** La idea del taller es que desarrolles tu propio criterio y habilidades. Si la usas para hacer el trabajo, el aprendizaje se pierde… y entonces este taller no tendría sentido.
- Trabajaremos **siempre en local**. Nada de lo que hagas aquí toca el sitio real del cliente.

---

## Tecnologías del taller

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

# Plan de sesiones

---

## Sesión 1 — Preparación del entorno

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

## Sesión 2 — Instalar WordPress y configuración base

**Objetivo:** tener `recal.test` corriendo con WordPress limpio.

- [ ] **Paso 1:** Crear proyecto en WordPress. → [Guía](https://github.com/paoGonzalezUDG/proyecto-taller-wordpress/wiki/Gu%C3%ADa:-WordPress)
- [ ] **Paso 2:** Configuración inicial obligatoria: → [Guía](https://github.com/paoGonzalezUDG/proyecto-taller-wordpress/wiki/WordPress:-Configuraci%C3%B3n-inicial-obligatoria)
- [ ] **Paso 3:** Activar `WP_DEBUG` para ver errores reales: → [Guía](https://github.com/paoGonzalezUDG/proyecto-taller-wordpress/wiki/Activar-WP_DEBUG-para-ver-errores-reales)

---

## Sesión 3 — Del diseño al plan: Figma y Dev Mode

**Objetivo:** leer el diseño como lo haría una persona desarrolladora, no como espectadora.

- [ ] **Paso 1:** Abrir el [archivo de Figma del proyecto](https://www.figma.com/design/CN0BiZIyyV8NqCcH5saT3T/LIMPIEZA-DE-CALZADO--copia-), duplicarlo a tus borradores y activar **Dev Mode**. → [Guía](https://github.com/paoGonzalezUDG/proyecto-taller-wordpress/wiki/Gu%C3%ADa:-Figma-Education)
- [ ] **Paso 2:** Levantar el **inventario de secciones** del sitio (RECAL): Hero, Proceso, Servicios, Empresa, CTA de presupuesto, Footer.  → [Guía](https://github.com/paoGonzalezUDG/proyecto-taller-wordpress/wiki/inventario-de-secciones)

---

## Sesión 4 — Entrega y cierre

**Objetivo:** **subir tu evidencia a este repositorio** en tu propia rama.

- [ ] **Paso 1:** Tomar **3 capturas** de tu página de inicio con el modo responsive de Elementor: escritorio, tablet y móvil.
- [ ] **Paso 2:** Subir tu evidencia a GitHub en tu rama `nombre-carrera-año`.

### Paso 1 — Capturas de evidencia

Abre tu página de inicio en el editor de Elementor y usa el **modo responsive** (selector de dispositivo en la barra superior del editor) para cambiar entre las 3 vistas. Toma una captura en cada una y guárdala en formato **PNG** con estos nombres **exactos**:

| Archivo | Vista de Elementor |
|---|---|
| `01-escritorio.png` | Escritorio |
| `02-tablet.png` | Tablet |
| `03-movil.png` | Móvil |

> Para tomar la captura en Windows: `Win + Shift + S` → selecciona el área → clic en la notificación para guardarla.

### Paso 2 — Subir tu evidencia a GitHub

Copia y pega cada bloque en **Git Bash**. Donde diga `TU_RAMA`, escribe tu rama (paso 5).

#### 1. Verificar Git

```bash
git --version
```

#### 2. Abrir Git Bash en tu Escritorio

Clic derecho en el Escritorio > **Mostrar más opciones** > **Open Git Bash here**

#### 3. Clonar el repositorio y entrar a la carpeta

Clonar el repositorio:

```bash
git clone https://github.com/paoGonzalezUDG/proyecto-taller-wordpress.git
```

Entrar a la carpeta:

```bash
cd proyecto-taller-wordpress
```

#### 4. Configurar tu nombre y correo (solo la primera vez)

```bash
git config --global user.name "TU_NOMBRE"
git config --global user.email "TU_CORREO_DE_GITHUB"
```

#### 5. Crear tu rama y cambiarte a ella

`TU_RAMA` = **primernombre-carrera-año**, en minúsculas, sin acentos, sin ñ y sin espacios.

| Correcto | Incorrecto |
|---|---|
| `paola-computacion-2026` | `Paola-Computación-2026` |
| `jose-informatica-2026` | `josé informática 2026` |

```bash
git checkout -b TU_RAMA
git branch
```

> Tu rama debe aparecer con `*`.

#### 6. Crear tu carpeta de entrega

```bash
mkdir -p entregas/TU_RAMA/capturas
cp entregas/_plantilla/README.md entregas/TU_RAMA/README.md
```

Copia tus 3 capturas en `entregas/TU_RAMA/capturas` y llena `entregas/TU_RAMA/README.md` en VS Code.

#### 7. Subir tus cambios

```bash
git status
git add .
git commit -m "Entrega final TU_RAMA"
git push -u origin TU_RAMA
```

> La primera vez se abre una ventana para iniciar sesión en GitHub: *Sign in with your browser*.

#### 8. Comprobar

Busca tu rama en <https://github.com/paoGonzalezUDG/proyecto-taller-wordpress/branches>.

#### Si aparece un error

| Error | Solución |
|---|---|
| `Permission denied` o `403` | Acepta la invitación al repositorio en tu correo y repite `git push -u origin TU_RAMA` |
| `Author identity unknown` | Repite el paso 4 y luego el paso 7 |
| `already exists` al clonar | Ya lo tenías: `cd proyecto-taller-wordpress` y `git pull origin main` |
| `a branch named ... already exists` | `git checkout TU_RAMA` |
| `nothing to commit` | Revisa que tus capturas estén en `entregas/TU_RAMA/capturas` |

---

## Flujo de trabajo con Git (cada sesión)

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

## Documentación oficial

- [WordPress — Documentación](https://wordpress.org/documentation/)
- [Elementor — Centro de ayuda](https://elementor.com/help/)
- [MDN Web Docs — HTML](https://developer.mozilla.org/es/docs/Web/HTML) · [CSS](https://developer.mozilla.org/es/docs/Web/CSS) · [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [Figma — Dev Mode](https://help.figma.com/hc/en-us/articles/15023124644247)
- [Git — Documentación](https://git-scm.com/doc)

---

*Taller impartido por [Paola González](https://github.com/paoGonzalezUDG) · Servicio social · Universidad de Guadalajara*
