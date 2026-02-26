<?php
/**
 * Template part for displaying results in search pages */ ?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<?php prc_theme_post_thumbnail(); ?>
	<div class="entry-meta">
		<?php echo get_the_date(); ?>
	</div><!-- .entry-meta -->
	<?php
		if ( is_singular() ) :
			the_title( '<h2 class="entry-title">', '</h2>' );
		else :
			the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
		endif; ?>

</article><!-- #post-<?php the_ID(); ?> -->
	