/* =============================================================
   RECAL · JavaScript del proyecto
   Se carga en el footer desde functions.php
   ============================================================= */

(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {

        /* ---------------------------------------------------------
           1. Menú móvil (Sesión 7)
           --------------------------------------------------------- */
        const botonMenu = document.querySelector('.js-boton-menu');
        const menu = document.querySelector('.js-menu');

        if (botonMenu && menu) {
            botonMenu.addEventListener('click', function () {
                const abierto = menu.classList.toggle('esta-abierto');
                botonMenu.setAttribute('aria-expanded', abierto ? 'true' : 'false');
            });
        }

        /* ---------------------------------------------------------
           2. Acordeón de preguntas frecuentes
           --------------------------------------------------------- */
        const preguntas = document.querySelectorAll('.js-pregunta');

        preguntas.forEach(function (pregunta) {
            pregunta.addEventListener('click', function () {
                const respuesta = pregunta.nextElementSibling;
                if (!respuesta) return;

                const visible = respuesta.classList.toggle('esta-visible');
                pregunta.setAttribute('aria-expanded', visible ? 'true' : 'false');
            });
        });

        /* ---------------------------------------------------------
           3. Desplazamiento suave a los anclajes internos
           --------------------------------------------------------- */
        const enlacesInternos = document.querySelectorAll('a[href^="#"]:not([href="#"])');

        enlacesInternos.forEach(function (enlace) {
            enlace.addEventListener('click', function (evento) {
                const destino = document.querySelector(enlace.getAttribute('href'));
                if (!destino) return;

                evento.preventDefault();
                destino.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });

        /* ---------------------------------------------------------
           4. Validación básica del formulario de presupuesto
           (la validación real SIEMPRE se repite en el servidor)
           --------------------------------------------------------- */
        const formulario = document.querySelector('.js-formulario-presupuesto');

        if (formulario) {
            formulario.addEventListener('submit', function (evento) {
                const correo = formulario.querySelector('input[type="email"]');
                const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (correo && !patron.test(correo.value.trim())) {
                    evento.preventDefault();
                    correo.setAttribute('aria-invalid', 'true');
                    alert('Revisa el correo electrónico: no parece válido.');
                }
            });
        }
    });
})();
