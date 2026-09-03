<?php
/**
 * Funciones del tema hijo RECAL.
 *
 * Regla del taller: TODO tu CSS y JS se carga desde aquí con las
 * funciones de encolado de WordPress. Nunca pegues <script> o <link>
 * a mano en las plantillas del tema padre.
 *
 * @package tema-hijo-recal
 */

// Salir si se accede directamente al archivo.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Encola los estilos y scripts del tema padre y del tema hijo.
 */
function recal_encolar_assets() {

    // 1. Hoja de estilos del tema padre (Hello Elementor).
    wp_enqueue_style(
        'hello-elementor-padre',
        get_template_directory_uri() . '/style.css',
        array(),
        wp_get_theme( get_template() )->get( 'Version' )
    );

    // 2. Hoja de estilos del tema hijo (style.css de esta carpeta).
    wp_enqueue_style(
        'recal-hijo',
        get_stylesheet_uri(),
        array( 'hello-elementor-padre' ),
        wp_get_theme()->get( 'Version' )
    );

    // 3. CSS personalizado del proyecto.
    $ruta_css = get_stylesheet_directory() . '/assets/css/personalizado.css';
    if ( file_exists( $ruta_css ) ) {
        wp_enqueue_style(
            'recal-personalizado',
            get_stylesheet_directory_uri() . '/assets/css/personalizado.css',
            array( 'recal-hijo' ),
            filemtime( $ruta_css ) // La fecha del archivo como versión: rompe la caché al editar.
        );
    }

    // 4. JavaScript personalizado, cargado en el footer.
    $ruta_js = get_stylesheet_directory() . '/assets/js/personalizado.js';
    if ( file_exists( $ruta_js ) ) {
        wp_enqueue_script(
            'recal-personalizado',
            get_stylesheet_directory_uri() . '/assets/js/personalizado.js',
            array(),
            filemtime( $ruta_js ),
            true // true = cargar antes de </body>.
        );
    }
}
add_action( 'wp_enqueue_scripts', 'recal_encolar_assets' );

/**
 * Quita los scripts de emojis del núcleo (menos peticiones HTTP).
 */
function recal_quitar_emojis() {
    remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
    remove_action( 'wp_print_styles', 'print_emoji_styles' );
    remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
    remove_action( 'admin_print_styles', 'print_emoji_styles' );
}
add_action( 'init', 'recal_quitar_emojis' );

/**
 * Permite subir archivos SVG solo a administradores.
 *
 * Un SVG puede contener JavaScript: nunca lo abras a cualquier usuario
 * y sanea los archivos antes de subirlos en un sitio real.
 */
function recal_permitir_svg( $mimes ) {
    if ( current_user_can( 'manage_options' ) ) {
        $mimes['svg'] = 'image/svg+xml';
    }
    return $mimes;
}
add_filter( 'upload_mimes', 'recal_permitir_svg' );

/**
 * Texto del pie de página del escritorio de WordPress.
 */
function recal_pie_admin() {
    return 'Sitio desarrollado en el Taller de WordPress + Elementor · Universidad de Guadalajara';
}
add_filter( 'admin_footer_text', 'recal_pie_admin' );

/**
 * EJERCICIO (Sesión 7): registra aquí un shortcode propio.
 *
 * Uso en el editor: [anio_actual]
 */
function recal_shortcode_anio() {
    return esc_html( gmdate( 'Y' ) );
}
add_shortcode( 'anio_actual', 'recal_shortcode_anio' );
