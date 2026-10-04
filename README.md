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

## 🚢 Sesión 4 — Optimización, entrega y cierre

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

---

## 📚 Documentación oficial

- [WordPress — Documentación](https://wordpress.org/documentation/)
- [Elementor — Centro de ayuda](https://elementor.com/help/)
- [MDN Web Docs — HTML](https://developer.mozilla.org/es/docs/Web/HTML) · [CSS](https://developer.mozilla.org/es/docs/Web/CSS) · [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [Figma — Dev Mode](https://help.figma.com/hc/en-us/articles/15023124644247)
- [Git — Documentación](https://git-scm.com/doc)

---

*Taller impartido por [Paola González](https://github.com/paoGonzalezUDG) · Servicio social · Universidad de Guadalajara*
