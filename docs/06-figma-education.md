# 06 · Figma, Figma Education y Dev Mode

El diseño del proyecto vive en Figma. Tu trabajo no es "copiar la imagen": es **leer el diseño** y traducirlo a estructura, estilos y componentes.

---

## 1. Crear la cuenta

1. Regístrate en <https://www.figma.com/signup> con tu **correo institucional**.
2. Verifica el correo.
3. Instala también la **app de escritorio** (<https://www.figma.com/downloads/>). Rinde mejor y maneja mejor las fuentes locales.

---

## 2. Solicitar Figma Education

Figma ofrece un plan gratuito para estudiantes y docentes verificados.

1. Entra a <https://www.figma.com/education/>
2. Pulsa la opción para estudiantes y llena el formulario:
   - Institución: Universidad de Guadalajara
   - Rol: estudiante
   - Área de estudio y fecha estimada de graduación
3. Sube el comprobante que te pidan (credencial vigente, constancia o kárdex). Que se lea **tu nombre, la institución y la vigencia**.
4. La verificación no es instantánea: puede tardar. **Hazlo antes de la Sesión 1.**

> Los términos y requisitos del plan educativo los define Figma y cambian con el tiempo. Revisa siempre la página oficial: <https://www.figma.com/education/>

Si tu solicitud tarda o es rechazada, el **plan gratuito Starter** alcanza para todo lo que haremos en el taller.

---

## 3. Abrir el archivo del proyecto

Diseño de RECAL (LIMPIEZA DE CALZADO):

<https://www.figma.com/design/CN0BiZIyyV8NqCcH5saT3T/LIMPIEZA-DE-CALZADO--copia->

- Ábrelo y pulsa **Duplicate to your drafts** para tener tu propia copia editable.
- **No edites el archivo original compartido.** Es la referencia común de todo el grupo.
- Si el enlace te pide acceso, avisa en clase: hay que darte permiso de lectura.

---

## 4. Dev Mode: leer el diseño como desarrolladora

Activa **Dev Mode** con el interruptor de la esquina superior derecha (o `Shift + D`).

Con un elemento seleccionado, el panel derecho te da:

| Pestaña | Qué te sirve |
|---|---|
| **Inspect** | Medidas exactas, colores, tipografía, espaciados |
| **Code** | CSS aproximado del elemento |
| **Export** | Descargar el asset en el formato que elijas |

> El CSS que genera Figma es **una referencia, no un entregable**. Suele traer posicionamiento absoluto y medidas en píxeles fijos. Tú escribes CSS mantenible: flexbox, grid, `rem` y variables.

---

## 5. Extraer los tokens de diseño

Antes de tocar Elementor, llena la tabla de [`recursos/tokens-de-diseno.md`](../recursos/tokens-de-diseno.md) con:

### Colores
Selecciona cada elemento y anota el HEX. Clasifícalos por función, no por nombre del color:

```
--color-primario
--color-primario-oscuro
--color-secundario
--color-texto
--color-texto-suave
--color-fondo
--color-borde
```

### Tipografía
Para cada nivel anota: familia, peso, tamaño, `line-height` y `letter-spacing`.

```
H1  ·  Inter  ·  700  ·  48px / 1.2
H2  ·  Inter  ·  700  ·  36px / 1.25
Body ·  Inter  ·  400  ·  16px / 1.6
```

### Espaciados
Identifica la escala que usó el diseño (normalmente múltiplos de 4 u 8): `4, 8, 16, 24, 32, 48, 64`.

### Breakpoints
Anota los anchos de los frames: escritorio (1440), tablet (768), móvil (375).

---

## 6. Exportar assets correctamente

| Tipo de asset | Formato | Por qué |
|---|---|---|
| Logotipos e iconos | **SVG** | Escalan sin perder calidad y pesan poco |
| Fotografías | **WebP** (o JPG al 80%) | Mucho menor peso con calidad similar |
| Imágenes con transparencia | **PNG** o WebP | Soportan canal alfa |
| Retina / pantallas densas | Exporta a **2x** | Evita el efecto borroso |

Cómo: selecciona el elemento → panel **Export** → `+` → elige formato y escala → *Export*.

Guarda todo en una carpeta `assets/` de tu proyecto, con nombres en minúsculas y guiones: `logo-recal.svg`, `hero-calzado-epi.webp`.

> Antes de subir cualquier imagen a WordPress, pásala por un optimizador (<https://squoosh.app/>). Una foto de 4 MB en el hero destruye el rendimiento del sitio.

---

## 7. Del diseño a Elementor

Antes de arrastrar un solo widget, escribe en papel o en un comentario:

1. ¿Cuántas secciones tiene la página?
2. ¿Cuáles se repiten en otras páginas? → esas serán **plantillas globales**.
3. ¿Qué es texto y qué es imagen? (Muchos "diseños de texto" en Figma son imágenes; en web deben ser texto real, por SEO y accesibilidad.)
4. ¿Cómo se reordena cada sección en móvil?

Ese análisis es el 70% del trabajo. Construir es lo rápido.

---

## 8. Atajos útiles de Figma

| Atajo | Acción |
|---|---|
| `Shift + D` | Entrar/salir de Dev Mode |
| `Ctrl/Cmd + \` | Ocultar interfaz |
| `Alt` + pasar el cursor | Ver distancias entre elementos |
| `Ctrl/Cmd + G` | Agrupar |
| `Shift + A` | Añadir auto layout |
| `Ctrl/Cmd + Shift + E` | Exportar |
| `Z` | Zoom a la selección |
