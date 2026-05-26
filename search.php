<?php
/**
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package prc_theme
 */

get_header();
?>

<div id="primary" class="content-area">
	<main id="main" class="site-main" role="main">
		<div class="category-header">
			<img src="https://thestayonmarion.com/wp-content/uploads/2026/05/rooms_1.jpg">
		</div>
		<div class="entry-content">
			<h1>
				<?php
				/* translators: %s: search query. */
				printf( esc_html__( 'Search Results for: %s', 'prc-theme' ), '<span>' . get_search_query() . '</span>' );
				?>
			</h1>

			<?php if ( have_posts() ) : ?>

				<div class="articles">
					<?php while ( have_posts() ) :
							the_post();

							get_template_part( 'template-parts/content', 'search' );

						endwhile;

						the_posts_navigation();

					else :

						get_template_part( 'template-parts/content', 'none' );

					endif; ?>
			</div>
		</div><!-- .entry-content -->

	<footer class="entry-footer">
		<?php prc_theme_entry_footer(); ?>
	</footer><!-- .entry-footer -->

	</main><!-- .site-main -->

</div><!-- .content-area -->

<?php get_footer(); ?>