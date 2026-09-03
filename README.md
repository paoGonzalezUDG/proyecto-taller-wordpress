# 🧼 Taller: Sitio Web con WordPress + Elementor

Taller práctico de desarrollo web. Construiremos, desde cero y en local, un sitio de **WordPress con Elementor** partiendo de una propuesta de diseño en **Figma**, reforzando en el camino las bases de **HTML, CSS y JavaScript**.

El caso de estudio es un cliente real: **RECAL — [limpiezadecalzado.com](https://limpiezadecalzado.com/)**, empresa española dedicada a la limpieza y reacondicionamiento de calzado laboral, EPI y vestuario técnico.

🎨 **Diseño del proyecto en Figma:**
<https://www.figma.com/design/CN0BiZIyyV8NqCcH5saT3T/LIMPIEZA-DE-CALZADO--copia->

> Duplica el archivo a tus borradores (*Duplicate to your drafts*) antes de tocar nada. **No edites el archivo compartido.**

> Aquí llevaremos el registro del avance de cada sesión. Si te pierdes en algún momento, revisa en qué paso vamos y apóyate en tu equipo.

---

## 📌 Antes de empezar

- **No uses IA para resolver las actividades.** La idea del taller es que desarrolles tu propio criterio y habilidades. Si la usas para hacer el trabajo, el aprendizaje se pierde… y entonces este taller no tendría sentido.
- Trabajaremos **siempre en local**. Nada de lo que hagas aquí toca el sitio real del cliente.
- Todo lo que instales queda documentado en [`docs/`](docs/). Si algo falla, primero revisa [`docs/errores-comunes.md`](docs/errores-comunes.md).

---

## 🧰 Tecnologías del taller

| Herramienta | Versión de referencia | Para qué la usamos |
|---|---|---|
| **WordPress** | 7.1 (ago 2026) | CMS base del proyecto |
| **Elementor** | 4.2.4 (ago 2026) | Constructor visual de páginas |
| **PHP** | 8.3 o superior | Lenguaje sobre el que corre WordPress |
| **MySQL / MariaDB** | MySQL 8.0+ / MariaDB 10.11+ | Base de datos del sitio |
| **Apache** | 2.4 | Servidor web local |
| **Laragon** *o* **Local (WP Engine)** | Última estable | Entorno de desarrollo local |
| **Visual Studio Code** | Última estable | Editor de código |
| **Git** | 2.4x | Control de versiones |
| **GitHub** | — | Repositorio remoto y entrega de tareas |
| **Figma / Figma Education** | — | Diseño, Dev Mode y extracción de assets |
| **Node.js (opcional)** | LTS | Solo si compilamos Sass |
| **Chrome DevTools** | — | Inspección y depuración |

Requisitos oficiales de referencia:
[WordPress](https://wordpress.org/about/requirements/) · [Elementor](https://wordpress.org/plugins/elementor/)

---

## 🗂️ Contenido del repositorio

```
proyecto-taller-wordpress/
├── docs/                       <-- Guías paso a paso (instalación, errores, comandos)
│   ├── 01-requisitos-y-cuentas.md
│   ├── 02-instalacion-laragon.md
│   ├── 03-instalacion-local-wpengine.md
│   ├── 04-instalacion-wordpress.md
│   ├── 05-git-y-github.md
│   ├── 06-figma-education.md
│   ├── 07-elementor-basico.md
│   ├── 08-tema-hijo-y-codigo.md
│   ├── 09-publicar-y-migrar.md
│   ├── comandos.md             <-- Chuleta de línea de comandos
│   └── errores-comunes.md      <-- 🚑 Catálogo de errores y soluciones
├── ejercicios/                 <-- Prácticas de HTML, CSS y JavaScript
│   ├── 01-html/
│   ├── 02-css/
│   └── 03-javascript/
├── tema-hijo-recal/            <-- Tema hijo listo para instalar en WordPress
│   ├── style.css
│   ├── functions.php
│   └── assets/
├── recursos/                   <-- Snippets, checklist de entrega y contenidos
└── README.md                   <-- Estás aquí
```

---

## 🚀 Arranque rápido

Si ya tienes todo instalado y solo quieres empezar:

```bash
# 1. Ubícate en la carpeta de proyectos de tu servidor local
cd C:\laragon\www

# 2. Configura tu identidad de Git (solo la primera vez)
git config --global user.name "TU_USUARIO_EN_GITHUB"
git config --global user.email "TU_CORREO_EN_GITHUB"

# 3. Clona este repositorio
git clone https://github.com/paoGonzalezUDG/proyecto-taller-wordpress.git

# 4. Entra y crea tu rama de trabajo
cd proyecto-taller-wordpress
git checkout -b recal-TU_NOMBRE
```

> Cambia `TU_NOMBRE` por tu nombre real, **sin espacios ni acentos**. Ejemplo: `recal-paola-gonzalez`.

---

# 📅 Plan de sesiones

---

## ✅ Sesión 1 — Preparación del entorno

**Objetivo:** que todas las computadoras queden listas y funcionando igual.

- [ ] **Paso 1:** Crear cuentas necesarias: GitHub, Figma (con **Figma Education**) y WordPress.org (opcional).
      → [Guía de requisitos y cuentas](docs/01-requisitos-y-cuentas.md) · [Guía de Figma Education](docs/06-figma-education.md)
- [ ] **Paso 2:** Instalar **Visual Studio Code** + extensiones recomendadas.
      → [Guía de requisitos y cuentas](docs/01-requisitos-y-cuentas.md#3-visual-studio-code)
- [ ] **Paso 3:** Instalar el entorno local. Elige **una** de las dos rutas:
      - **Ruta A — Laragon** (Windows, más control, misma que usamos en el taller anterior) → [Guía](docs/02-instalacion-laragon.md)
      - **Ruta B — Local by WP Engine** (Windows/macOS, instala WordPress con un clic) → [Guía](docs/03-instalacion-local-wpengine.md)
- [ ] **Paso 4:** Instalar **Git** y configurarlo. → [Guía](docs/05-git-y-github.md)
- [ ] **Paso 5:** Verificar que todo responde:

```bash
php -v          # Debe mostrar 8.3.x o superior
mysql --version # MySQL 8.x o MariaDB 10.11+
git --version   # 2.4x.x
code --version  # VS Code
```

- [ ] **Paso 6:** Clonar este repositorio y crear tu rama (ver *Arranque rápido*).

**Si algo falla:** → [errores-comunes.md § Entorno local](docs/errores-comunes.md#1-entorno-local-laragon--local--xampp)

---

## 🧱 Sesión 2 — Instalar WordPress y configuración base

**Objetivo:** tener `recal.test` (o `recal.local`) corriendo con WordPress limpio.

- [ ] **Paso 1:** Crear la base de datos del proyecto. → [Guía](docs/04-instalacion-wordpress.md#2-crear-la-base-de-datos)
- [ ] **Paso 2:** Descargar e instalar WordPress (famoso instalador de 5 minutos). → [Guía](docs/04-instalacion-wordpress.md)
- [ ] **Paso 3:** Configuración inicial obligatoria:
      - Ajustes → Generales: título, descripción, idioma **Español (España)**, zona horaria.
      - Ajustes → **Enlaces permanentes** → *Nombre de la entrada*.
      - Ajustes → Lectura → desmarcar *Disuade a los motores de búsqueda* solo cuando el sitio sea público.
      - Borrar contenido de ejemplo: entrada *¡Hola, mundo!*, página *Página de ejemplo*, comentario y plugins que no usaremos.
- [ ] **Paso 4:** Instalar plugins base del taller:
      - **Elementor** (constructor)
      - **Hello Elementor** (tema base, ligero)
      - **WPForms Lite** o **Contact Form 7** (formularios)
      - *(Opcional)* **Yoast SEO** o **Rank Math**
- [ ] **Paso 5:** Instalar el **tema hijo** de este repo. → [Guía](docs/08-tema-hijo-y-codigo.md)
- [ ] **Paso 6:** Activar `WP_DEBUG` en `wp-config.php` para ver errores reales:

```php
define( 'WP_DEBUG', true );
define( 'WP_DEBUG_LOG', true );
define( 'WP_DEBUG_DISPLAY', false );
define( 'WP_MEMORY_LIMIT', '512M' );
```

**Si algo falla:** → [errores-comunes.md § WordPress](docs/errores-comunes.md#2-wordpress)

---

## 🎨 Sesión 3 — Del diseño al plan: Figma y Dev Mode

**Objetivo:** leer el diseño como lo haría una persona desarrolladora, no como espectadora.

- [ ] **Paso 1:** Abrir el [archivo de Figma del proyecto](https://www.figma.com/design/CN0BiZIyyV8NqCcH5saT3T/LIMPIEZA-DE-CALZADO--copia-), duplicarlo a tus borradores y activar **Dev Mode**. → [Guía](docs/06-figma-education.md)
- [ ] **Paso 2:** Levantar el **inventario de secciones** del sitio (RECAL): Hero, Proceso, Servicios, Empresa, CTA de presupuesto, Footer.
- [ ] **Paso 3:** Extraer los **tokens de diseño**:
      - Colores (formato HEX) y su uso: primario, secundario, texto, fondo, bordes.
      - Tipografías: familia, pesos, tamaños y `line-height` por nivel (H1–H6, body, small).
      - Espaciados y radios de borde.
      - Breakpoints: escritorio, tablet, móvil.
- [ ] **Paso 4:** Exportar los assets: logotipos en **SVG**, fotografías en **WebP** o JPG optimizado, iconos en SVG.
- [ ] **Paso 5:** Llenar la tabla de tokens en [`recursos/tokens-de-diseno.md`](recursos/tokens-de-diseno.md). Esa tabla es la fuente de verdad del resto del taller.
- [ ] **Paso 6:** Analizar el sitio real del cliente en [limpiezadecalzado.com](https://limpiezadecalzado.com/) con **Chrome DevTools** y comparar con la propuesta de Figma. ¿Qué cambia? ¿Por qué?

---

## 📄 Sesión 4 — Bases de HTML

**Objetivo:** maquetar a mano una sección del diseño antes de tocar Elementor. Si no entiendes el HTML, Elementor solo esconde el problema.

- [ ] **Paso 1:** Teoría rápida: estructura de un documento, etiquetas de bloque vs. en línea, atributos.
- [ ] **Paso 2:** **HTML semántico**: `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`, jerarquía de encabezados (`h1` único por página).
- [ ] **Paso 3:** Imágenes accesibles (`alt`), enlaces (`a`), listas, tablas y formularios (`label` + `input`).
- [ ] **Paso 4:** Ejercicio guiado → [`ejercicios/01-html/`](ejercicios/01-html/)
- [ ] **Paso 5:** **Entregable:** maqueta la sección *Servicios* de RECAL en HTML puro, sin estilos.
- [ ] **Paso 6:** Validar tu HTML en el [validador del W3C](https://validator.w3.org/nu/) y corregir lo que marque.

---

## 💅 Sesión 5 — Bases de CSS

**Objetivo:** dar estilo a lo maquetado y entender por qué las cosas se mueven de lugar.

- [ ] **Paso 1:** Selectores, especificidad y cascada. Por qué `!important` casi siempre es una mala señal.
- [ ] **Paso 2:** Modelo de caja: `margin`, `border`, `padding`, `content` y `box-sizing: border-box`.
- [ ] **Paso 3:** **Variables CSS** con los tokens de la Sesión 3:

```css
:root {
  --color-primario: #0B5FFF;
  --color-texto: #1A1A1A;
  --fuente-base: 'Inter', system-ui, sans-serif;
  --espacio-md: 1.5rem;
}
```

- [ ] **Paso 4:** **Flexbox** y **CSS Grid**: cuándo usar cada uno.
- [ ] **Paso 5:** **Responsive**: unidades relativas (`rem`, `%`, `vw`), `max-width`, imágenes fluidas y media queries *mobile first*.
- [ ] **Paso 6:** Ejercicio guiado → [`ejercicios/02-css/`](ejercicios/02-css/)
- [ ] **Paso 7:** **Entregable:** estiliza la sección *Servicios* hasta que se parezca al diseño de Figma en escritorio y móvil.

---

## 🧩 Sesión 6 — WordPress + Elementor: construir el sitio

**Objetivo:** reproducir la propuesta de Figma con Elementor, aplicando lo aprendido.

- [ ] **Paso 1:** Anatomía de Elementor: panel, lienzo, navegador de estructura, historial y vista responsive. → [Guía](docs/07-elementor-basico.md)
- [ ] **Paso 2:** **Ajustes del sitio** (*Site Settings*): cargar ahí los colores y tipografías globales de tus tokens. Nunca colores sueltos por widget.
- [ ] **Paso 3:** **Contenedores flexbox**: estructura de secciones, alineación, gaps y anchos.
- [ ] **Paso 4:** Construir sección por sección:
      - Hero con CTA a WhatsApp
      - Proceso (pasos numerados)
      - Servicios (tarjetas)
      - Empresa / confianza
      - Formulario de presupuesto
- [ ] **Paso 5:** Header y Footer globales.
- [ ] **Paso 6:** Ajuste responsive en los tres breakpoints. Revisar en DevTools, no solo en el editor.
- [ ] **Paso 7:** Guardar como **plantilla** y exportar el JSON a [`recursos/`](recursos/) para poder recuperarlo.

**Si algo falla:** → [errores-comunes.md § Elementor](docs/errores-comunes.md#3-elementor)

---

## ⚡ Sesión 7 — Bases de JavaScript y código propio en WordPress

**Objetivo:** agregar comportamiento sin romper el sitio ni perder los cambios en la siguiente actualización.

- [ ] **Paso 1:** Fundamentos: variables (`let` / `const`), tipos, condicionales, funciones y arreglos.
- [ ] **Paso 2:** **DOM**: `querySelector`, `classList`, `addEventListener`.
- [ ] **Paso 3:** Ejercicio guiado → [`ejercicios/03-javascript/`](ejercicios/03-javascript/)
- [ ] **Paso 4:** Práctica aplicada: menú móvil, acordeón de preguntas frecuentes y validación del formulario antes de enviar.
- [ ] **Paso 5:** **La forma correcta de cargar CSS y JS en WordPress**: `wp_enqueue_style()` y `wp_enqueue_script()` desde el tema hijo. Nunca pegando `<script>` en el header del tema padre. → [Guía](docs/08-tema-hijo-y-codigo.md)
- [ ] **Paso 6:** Depuración: consola del navegador, pestaña Network y `console.log()` con criterio.

---

## 🚢 Sesión 8 — Optimización, entrega y cierre

**Objetivo:** dejar el proyecto presentable y entendible por alguien más.

- [ ] **Paso 1:** **Rendimiento**: imágenes en WebP, tamaños correctos, `loading="lazy"`, quitar plugins que no uses.
- [ ] **Paso 2:** **SEO básico**: títulos y meta descripciones, jerarquía de encabezados, `alt` en imágenes, URLs limpias.
- [ ] **Paso 3:** **Accesibilidad**: contraste de color, foco visible del teclado, etiquetas en formularios.
- [ ] **Paso 4:** Auditoría con **Lighthouse** en DevTools. Anota puntajes antes/después.
- [ ] **Paso 5:** **Migración a hosting** (demostración): exportar base de datos, subir archivos, ajustar `wp-config.php`, buscar y reemplazar URLs. → [Guía](docs/09-publicar-y-migrar.md)
- [ ] **Paso 6:** Subir tu avance final y abrir un **Pull Request** hacia `main`.
- [ ] **Paso 7:** Presentación final: cada equipo muestra su sitio y explica **una decisión de diseño y una dificultad técnica** que resolvió.
- [ ] **Paso 8:** Checklist de entrega → [`recursos/checklist-entrega.md`](recursos/checklist-entrega.md)

---

## 🔁 Flujo de trabajo con Git (cada sesión)

```bash
# Antes de empezar: traer los cambios nuevos
git checkout main
git pull origin main
git checkout recal-TU_NOMBRE
git merge main

# Al terminar: guardar tu avance
git add .
git commit -m "Maqueta la sección de servicios en HTML semántico"
git push -u origin recal-TU_NOMBRE
```

> El mensaje de commit debe ser **claro, específico y único**. Repetir *"cambios"* en cada commit es una mala práctica: hace ilegible el historial.

Chuleta completa de comandos → [`docs/comandos.md`](docs/comandos.md)

---

## 🚑 ¿Algo se rompió?

1. Lee el mensaje de error completo. No lo cierres.
2. Búscalo en [`docs/errores-comunes.md`](docs/errores-comunes.md).
3. Revisa `wp-content/debug.log` y la consola del navegador (F12).
4. Si sigue sin salir, abre un **Issue** en este repositorio con: qué hiciste, qué esperabas, qué pasó y una captura del error.

---

## 📚 Documentación oficial

- [WordPress — Documentación](https://wordpress.org/documentation/)
- [Elementor — Centro de ayuda](https://elementor.com/help/)
- [MDN Web Docs — HTML](https://developer.mozilla.org/es/docs/Web/HTML) · [CSS](https://developer.mozilla.org/es/docs/Web/CSS) · [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [Figma — Dev Mode](https://help.figma.com/hc/en-us/articles/15023124644247)
- [Git — Documentación](https://git-scm.com/doc)

---

*Taller impartido por [Paola González](https://github.com/paoGonzalezUDG) · Servicio social · Universidad de Guadalajara*
