<?php
/**
* Category Template
*/
 
get_header(); ?> 
 
<section id="primary" class="site-content">
	<div id="content" role="main">
		<div class="entry-content">
		<div class="category-header">
			<h1 class="category-title"><?php single_cat_title('' , true ) ?></h1>
		</div>
		<!-- <div class="category-search"><?php //get_search_form(); ?></div> -->
		<div class="category-content">
			<?php if ( have_posts() ){
			// The Loop
			while ( have_posts() ) : the_post(); ?>
			<div class="category-content__item">
				<?php prc_theme_post_thumbnail(); ?>
				<a class="catergory-content__link" href="<?php the_permalink() ?>">
					<h2><?php the_title(); ?></h2>
					<div class="read-more">Read more</div>
					<?php the_time('F jS, Y') ?>
				</a>
			</div>	
			<?php endwhile; 
			} else { ?>
			<p>Sorry, no posts matched your criteria.</p>
			<?php } ?>
		</div>
		<a class="load-more load-more--category-posts">Load More</a> 
	</div>
</section>
 
<?php get_footer(); ?>