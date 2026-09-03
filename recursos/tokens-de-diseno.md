# 🎨 Tokens de diseño — RECAL

Llena esta tabla en la **Sesión 3** leyendo el archivo de Figma en Dev Mode.
A partir de aquí, **todo** el taller usa estos valores: los ajustes globales de Elementor, el CSS del tema hijo y los ejercicios.

> Si un color no está en esta tabla, no debe aparecer en el sitio.

---

## Colores

| Token | HEX | Uso |
|---|---|---|
| `--color-primario` | `#______` | Botones, enlaces, acentos |
| `--color-primario-oscuro` | `#______` | Estado `:hover` del primario |
| `--color-secundario` | `#______` | Elementos de apoyo |
| `--color-texto` | `#______` | Texto principal |
| `--color-texto-suave` | `#______` | Texto secundario, descripciones |
| `--color-fondo` | `#______` | Fondo general |
| `--color-fondo-alt` | `#______` | Fondo de secciones alternas |
| `--color-borde` | `#______` | Bordes y separadores |
| `--color-exito` | `#______` | Mensajes de confirmación |
| `--color-error` | `#______` | Errores de formulario |

**Verificación de contraste:** comprueba cada combinación texto/fondo en <https://webaim.org/resources/contrastchecker/>. Mínimo **4.5:1** para texto normal y **3:1** para texto grande (WCAG AA).

| Combinación | Ratio | ¿Pasa AA? |
|---|---|---|
| Texto sobre fondo | ___ : 1 | ☐ |
| Texto del botón sobre primario | ___ : 1 | ☐ |
| Texto suave sobre fondo alt | ___ : 1 | ☐ |

---

## Tipografía

| Nivel | Familia | Peso | Tamaño escritorio | Tamaño móvil | Interlineado |
|---|---|---|---|---|---|
| H1 | | | | | |
| H2 | | | | | |
| H3 | | | | | |
| H4 | | | | | |
| Cuerpo | | | | | |
| Texto pequeño | | | | | |
| Botón | | | | | |

**¿Las fuentes están disponibles?**

- [ ] Está en Google Fonts → nombre exacto: ______________
- [ ] Es de pago → alternativa libre elegida: ______________
- [ ] Se servirá localmente desde el tema hijo

---

## Escala de espaciado

| Token | Valor | Dónde se usa |
|---|---|---|
| `--espacio-xs` | ___ px | Separación entre icono y texto |
| `--espacio-sm` | ___ px | Interior de elementos pequeños |
| `--espacio-md` | ___ px | Interior de tarjetas |
| `--espacio-lg` | ___ px | Entre bloques |
| `--espacio-xl` | ___ px | Padding vertical de secciones |

---

## Otros

| Token | Valor |
|---|---|
| Radio de borde | ___ px |
| Sombra de tarjeta | `0 __px __px rgba(0,0,0,0.__)` |
| Ancho máximo del contenido | ___ px |
| Duración de transición | ___ ms |

---

## Breakpoints

| Dispositivo | Ancho del frame en Figma | Breakpoint en Elementor |
|---|---|---|
| Escritorio | ____ px | — |
| Tablet | ____ px | ≤ ____ px |
| Móvil | ____ px | ≤ ____ px |

---

## Inventario de secciones

| # | Sección | ¿Se repite en otras páginas? | Widgets previstos |
|---|---|---|---|
| 1 | Header | Sí → plantilla global | |
| 2 | Hero | | |
| 3 | Proceso | | |
| 4 | Servicios | | |
| 5 | Empresa / confianza | | |
| 6 | Presupuesto | | |
| 7 | Footer | Sí → plantilla global | |
