<?php
/**
 * prc theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package prc_theme
 */

if ( ! defined( '_S_VERSION' ) ) {
	define( '_S_VERSION', '1.0.0' );
}

if ( ! function_exists( 'prc_theme_setup' ) ) :
	function prc_theme_setup() {
		load_theme_textdomain( 'prc-theme', get_template_directory() . '/languages' );

		add_theme_support( 'automatic-feed-links' );
		add_theme_support( 'title-tag' );
		add_theme_support( 'post-thumbnails' );

		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		add_theme_support(
			'custom-background',
			apply_filters(
				'prc_theme_custom_background_args',
				array(
					'default-color' => 'ffffff',
					'default-image' => '',
				)
			)
		);

		add_theme_support( 'customize-selective-refresh-widgets' );

		add_theme_support(
			'custom-logo',
			array(
				'height'      => 250,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);
	}
endif;
add_action( 'after_setup_theme', 'prc_theme_setup' );

function prc_theme_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'prc_theme_content_width', 640 );
}
add_action( 'after_setup_theme', 'prc_theme_content_width', 0 );

function prc_theme_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'prc-theme' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'prc-theme' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'prc_theme_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function prc_theme_scripts() {

	// style.css with real cache busting
	$style_path = get_stylesheet_directory() . '/style.css';
	$style_ver  = file_exists( $style_path ) ? filemtime( $style_path ) : _S_VERSION;

	wp_enqueue_style( 'prc-theme-style', get_stylesheet_uri(), array(), $style_ver );
	wp_style_add_data( 'prc-theme-style', 'rtl', 'replace' );

	// main-styles.css from /dist with real cache busting
	$main_css_rel  = '/dist/main-styles.css';
	$main_css_path = get_stylesheet_directory() . $main_css_rel;
	$main_css_url  = get_stylesheet_directory_uri() . $main_css_rel;

	if ( file_exists( $main_css_path ) ) {
		wp_enqueue_style(
			'prc-theme-main-styles',
			$main_css_url,
			array( 'prc-theme-style' ),
			filemtime( $main_css_path )
		);
	}

	// Slick CSS (move out of header.php)
	wp_enqueue_style(
		'prc-theme-slick-css',
		'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css',
		array(),
		'1.8.1'
	);

	// Font Awesome kit (move out of header.php)
	wp_enqueue_script(
		'prc-theme-fontawesome-kit',
		'https://kit.fontawesome.com/3c2484a2e6.js',
		array(),
		null,
		false
	);
	wp_script_add_data( 'prc-theme-fontawesome-kit', 'crossorigin', 'anonymous' );

	wp_enqueue_script( 'prc-theme-navigation', get_template_directory_uri() . '/js/navigation.js', array(), _S_VERSION, true );

	wp_enqueue_script( 'jquery' );

	wp_enqueue_script(
		'prc-theme-slick',
		'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js',
		array( 'jquery' ),
		'1.8.1',
		true
	);

	$bundle_rel  = '/dist/scripts.js';
	$bundle_path = get_stylesheet_directory() . $bundle_rel;
	$bundle_url  = get_stylesheet_directory_uri() . $bundle_rel;

	wp_enqueue_script(
		'prc-theme-bundle',
		$bundle_url,
		array( 'jquery', 'prc-theme-slick' ),
		file_exists( $bundle_path ) ? filemtime( $bundle_path ) : _S_VERSION,
		true
	);

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'prc_theme_scripts' );

require get_template_directory() . '/inc/custom-header.php';
require get_template_directory() . '/inc/template-tags.php';
require get_template_directory() . '/inc/template-functions.php';
require get_template_directory() . '/inc/customizer.php';

// Additional Menus
function register_my_menus() {
	register_nav_menus(
		array(
			'footer-menu'  => __( 'Footer Menu' ),
			'primary-menu' => __( 'Primary Menu' ),
		)
	);
}
add_action( 'init', 'register_my_menus' );
