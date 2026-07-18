<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package prc_theme
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	
	<!-- Google tag (gtag.js) -->
<?php if ( !current_user_can('administrator') ) : ?>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-N926NP8VFJ"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'G-N926NP8VFJ');
	</script>
<?php endif; ?>

	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<header id="masthead" class="site-header__wrapper">
		<div class="site-header">
			<nav id="site-navigation" class="main-navigation">
			<?php wp_nav_menu(
				array(
					'theme_location' => 'primary-menu',
					'menu_id'        => 'primary-menu',
					'fallback_cb'    => false,
				)
			);?>
			</nav><!-- #site-navigation -->
		</div>	
		<a class="site-header__logo" href="/">
			<?php $custom_logo_id = get_theme_mod( 'custom_logo' );
				$logo = wp_get_attachment_image_src( $custom_logo_id, 'full' );
				if ( $logo ) : ?>
					<img src="<?php echo esc_url( $logo[0] ); ?>" alt="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>">
			<?php endif; ?>
		</a>
		<a class="primary-button button-color--turquoise" href="/rooms">View Rooms</a>
		<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><?php esc_html_e( 'Primary Menu', 'prc-theme' ); ?></button>
	</header><!-- #masthead -->
	<div class="site-overlay"></div>
