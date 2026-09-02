# 🏋️ Ejercicios

Prácticas de HTML, CSS y JavaScript. Se resuelven **sin WordPress y sin IA**: archivos sueltos, abiertos con la extensión *Live Server* de VS Code.

| Carpeta | Sesión | Tema |
|---|---|---|
| [`01-html/`](01-html/) | 4 | Estructura y semántica |
| [`02-css/`](02-css/) | 5 | Estilos, flexbox, grid y responsive |
| [`03-javascript/`](03-javascript/) | 7 | DOM, eventos y validación |

## Cómo trabajarlos

1. Asegúrate de estar en tu rama: `git checkout recal-TU_NOMBRE`
2. Abre la carpeta del ejercicio en VS Code.
3. Clic derecho en `index.html` → **Open with Live Server**.
4. Edita, guarda y observa el cambio en el navegador.
5. Al terminar:
   ```bash
   git add ejercicios/
   git commit -m "Resuelve el ejercicio de CSS: tarjetas de servicio responsive"
   git push
   ```

## Criterios de evaluación

| Criterio | Peso |
|---|---|
| El HTML es semántico y valida en el W3C | 25% |
| El CSS es legible, sin `!important` innecesario y usa variables | 25% |
| Es responsive y funciona en 375px, 768px y 1440px | 25% |
| Accesibilidad: `alt`, `label`, contraste y foco visible | 15% |
| Commits con mensajes claros | 10% |
