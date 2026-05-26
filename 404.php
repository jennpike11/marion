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
			<h1>It seems we can’t find what you’re looking for. Perhaps searching can help.</h1>

			<div class="articles">
				<?php get_search_form(); ?>
			</div>
		</div><!-- .entry-content -->

	<footer class="entry-footer">
		<?php prc_theme_entry_footer(); ?>
	</footer><!-- .entry-footer -->

	</main><!-- .site-main -->

</div><!-- .content-area -->

<?php get_footer(); ?>