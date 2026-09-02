# 07 · Elementor: de cero a la página completa

Elementor es un constructor visual. **No sustituye saber HTML y CSS**: si no entiendes el modelo de caja, Elementor solo te va a permitir romper cosas más rápido.

Versión de referencia: **Elementor 4.2.4** · Requiere WordPress 6.8+ y PHP 7.4+ (recomendado WP 7.0+ y PHP 8.3+).

---

## 1. Anatomía del editor

| Zona | Qué hace |
|---|---|
| **Panel izquierdo** | Widgets, o los ajustes del elemento seleccionado |
| **Lienzo central** | Vista previa editable |
| **Navegador de estructura** (`Ctrl + I`) | Árbol de contenedores. **Úsalo siempre**: seleccionar a ciegas en el lienzo es la principal fuente de errores |
| **Barra inferior** | Ajustes de la página, historial, vista responsive, publicar |
| **Menú hamburguesa ☰** | Ajustes del sitio (*Site Settings*) |

Cada elemento tiene tres pestañas: **Contenido**, **Estilo** y **Avanzado**.
El 90% de los problemas de espaciado se resuelven en **Avanzado → Margen / Relleno**.

---

## 2. Lo PRIMERO: Ajustes del sitio

☰ → **Ajustes del sitio**. Antes de construir nada, carga aquí tus tokens de Figma.

### Colores globales
*Colores globales* → define Primario, Secundario, Texto y Acento con los HEX de tu tabla de tokens.

### Fuentes globales
*Fuentes globales* → define Primaria (títulos), Secundaria (cuerpo), Texto y Acento: familia, peso, tamaño y `line-height` por dispositivo.

### Ajustes de diseño
*Diseño* → ancho del contenido (ej. `1200px`), espacio entre widgets, breakpoints.

> **Por qué importa:** si el cliente cambia el azul de la marca, lo cambias en un lugar y se actualiza todo el sitio. Si pusiste el HEX a mano en 40 widgets, tienes 40 cambios y vas a olvidar alguno.

### Activar contenedores flexbox
☰ → **Ajustes → Funciones (Features)** → confirma que **Flexbox Container** esté activo. Es el sistema actual; las secciones/columnas antiguas quedaron como legado.

---

## 3. Contenedores: la estructura real

Un **contenedor** es un `div` con flexbox o grid. Trabaja siempre así:

```
Contenedor (sección, ancho completo, padding vertical)
└── Contenedor (interno, boxed, max-width 1200px)
    ├── Contenedor (columna izquierda)
    └── Contenedor (columna derecha)
```

Ajustes clave en **Diseño**:

| Ajuste | Equivalente en CSS |
|---|---|
| Dirección | `flex-direction` |
| Justificar contenido | `justify-content` |
| Alinear elementos | `align-items` |
| Espacios (gap) | `gap` |
| Ajuste (wrap) | `flex-wrap` |
| Ancho del contenido: Boxed / Full width | `max-width` |

> Si sabes flexbox, ya sabes Elementor. Si no lo sabes, vuelve a la [Sesión 5](../README.md#-sesión-5--bases-de-css) antes de seguir.

---

## 4. Widgets que usaremos en RECAL

| Sección del sitio | Widgets |
|---|---|
| Hero | Encabezado, Editor de texto, Botón, Imagen |
| Proceso | Contenedores + Icon Box (o Image Box) |
| Servicios | Contenedores repetidos + Icon Box; alternativa: Loop Grid (Pro) |
| Confianza / Empresa | Contadores, Testimonios, Galería de logos |
| Presupuesto | Widget del plugin de formularios (WPForms / CF7) |
| Footer | Editor de texto, Iconos sociales, Menú de navegación |

---

## 5. Header y Footer globales

Con Elementor gratuito y el tema **Hello Elementor**:

- Usa **Apariencia → Menús** para el menú y el header del tema, o
- Instala un complemento gratuito de encabezado/pie (por ejemplo *Header Footer Builder*), o
- Usa **Elementor Pro → Theme Builder** si la universidad cuenta con licencia.

Regla: header y footer se construyen **una sola vez** y se reutilizan. Nunca los copies dentro de cada página.

---

## 6. Plantillas: guardar y reutilizar

- Guardar una sección: clic derecho en el contenedor → **Guardar como plantilla**.
- Reutilizar: en el panel de widgets → icono de carpeta → *Mis plantillas*.
- Exportar: **Plantillas → Plantillas guardadas** → *Exportar* (descarga un `.json`).

> Exporta tus plantillas al final de cada sesión y guárdalas en `recursos/`. Es tu respaldo si algo se corrompe.

---

## 7. Responsive

Barra inferior → icono de dispositivos. Edita en cada breakpoint:

- **Escritorio** primero (es donde está el diseño), luego tablet, luego móvil.
- Ojo con: tamaños de fuente, dirección del contenedor (fila → columna), padding, orden de los elementos y visibilidad (**Avanzado → Responsive → Ocultar en…**).
- Usa `rem` o `%` en anchos; evita anchos fijos en píxeles.

**Verifica siempre en el sitio real, no solo en el editor:** abre la página, `F12`, modo dispositivo. El editor de Elementor miente un poco.

---

## 8. Rendimiento en Elementor

☰ → **Ajustes → Rendimiento**. Activa:

- *Improved CSS Loading* → carga solo el CSS necesario
- *Inline Font Icons*
- *Optimized Image Loading* / lazy load
- Desactiva *Google Fonts* si vas a servir las fuentes en local

Y evita:
- Anidar contenedores más allá de 3 o 4 niveles
- Widgets pesados (sliders y contadores) sin necesidad real
- Imágenes sin optimizar

---

## 9. Buenas prácticas que te van a ahorrar horas

1. **Nombra tus contenedores** en el navegador de estructura (`hero`, `servicios`, `cta-footer`).
2. Usa **colores y fuentes globales**, nunca valores sueltos.
3. Reutiliza clases: **Avanzado → Diseño → Clases CSS** y estiliza desde tu hoja de estilos del tema hijo.
4. Guarda con frecuencia. Elementor tiene historial (`Ctrl + Shift + H`) pero no es infalible.
5. Antes de una actualización mayor de Elementor: respalda base de datos y archivos.

---

## 10. Cuando algo no se ve

→ [errores-comunes.md § Elementor](errores-comunes.md#3-elementor)

El primer remedio para el 60% de los casos:
**Elementor → Herramientas → Regenerar archivos y datos** + vaciar caché del navegador (`Ctrl + Shift + R`).
