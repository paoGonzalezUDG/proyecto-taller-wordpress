/* =============================================================
   EJERCICIO 3 · JAVASCRIPT
   -------------------------------------------------------------
   Resuelve los TODO. No uses librerías ni IA.
   Abre la consola (F12) para ver los errores.
   ============================================================= */

document.addEventListener('DOMContentLoaded', function () {

    /* ---------------------------------------------------------
       PARTE 1 · Acordeón de preguntas frecuentes  [RESUELTO]
       Estúdialo: es tu modelo para la parte 2.
       --------------------------------------------------------- */
    const preguntas = document.querySelectorAll('.pregunta');

    preguntas.forEach(function (pregunta) {
        pregunta.addEventListener('click', function () {
            const respuesta = pregunta.nextElementSibling;
            const visible = respuesta.classList.toggle('esta-visible');
            pregunta.setAttribute('aria-expanded', visible ? 'true' : 'false');
        });
    });

    /* ---------------------------------------------------------
       PARTE 2 · Cerrar las demás al abrir una  [TODO]
       Modifica la Parte 1 para que solo una respuesta pueda
       estar abierta a la vez.
       --------------------------------------------------------- */


    /* ---------------------------------------------------------
       PARTE 3 · Validación del formulario  [TODO]
       Requisitos:
       - Ningún campo vacío.
       - El correo debe cumplir el patrón de abajo.
       - El mensaje debe tener al menos 10 caracteres.
       - Si algo falla: evita el envío, escribe el motivo en
         .js-error y marca el campo con aria-invalid="true".
       - Si todo está bien: evita el envío igualmente y muestra
         "Solicitud enviada" en .js-error.
       --------------------------------------------------------- */
    const formulario = document.querySelector('.js-formulario');
    const cajaError = document.querySelector('.js-error');
    const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault();

        // TODO: escribe aquí tu validación.
        console.log('Formulario enviado. Falta implementar la validación.');
    });

    /* ---------------------------------------------------------
       PARTE 4 · Reto opcional  [TODO]
       Muestra un contador de caracteres bajo el <textarea>
       que se actualice mientras la persona escribe.
       Pista: evento 'input'.
       --------------------------------------------------------- */

});
