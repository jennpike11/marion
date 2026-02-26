<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package prc_theme
 */

?>

<?php prc_theme_post_thumbnail(); ?>
<div class="entry-content">
	<div class="entry-content__title">
		<?php the_title() ?>
	</div>
	<hr>

	<?php the_content(); ?>

</div><!-- .entry-content -->



