<?php
/**
 * Template part for displaying posts
 *
 *Template for when not using the page builder (ie legal pages)
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<div class="entry-content">
    <header class="entry-header">
      <?php the_title( '<h1>', '</h1>' ); ?>
    </header><!-- .entry-header -->

		<?php
		the_content();
		?>
	</div><!-- .entry-content -->

</article>
