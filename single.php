<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package prc_theme
 */

get_header();
?>

	<main id="primary" class="site-main">

		<?php
		while ( have_posts() ) :
			the_post();

			get_template_part( 'template-parts/content-single', get_post_type() );

			the_post_navigation(
				array(
					'prev_text' => '' . esc_html__( '', 'prc-theme' ) . '</span> <span class="nav-title">%title</span>',
					'next_text' => '' . esc_html__( '', 'prc-theme' ) . '</span> <span class="nav-title">%title</span>',
				)
			);

		endwhile; // End of the loop.
		?>

	</main><!-- #main -->

<?php
get_footer();
