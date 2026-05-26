<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package prc_theme
 */

get_header();
?>

<main id="primary" class="site-main">

<?php
$term = get_queried_object();
$thumbnail = get_field( 'category_thumbnail', $term );
?>

	<header class="page-title">
		<?php if ( ! empty( $thumbnail ) ) : ?>
			<div class="page-title__image">
				<?php
				if ( is_array( $thumbnail ) ) {
					echo wp_get_attachment_image( $thumbnail['ID'], 'large' );
				} else {
					echo wp_get_attachment_image( $thumbnail, 'large' );
				}
				?>
			</div>
		<?php endif; ?>

		<div class="page-title__content">
			<h1><?php single_cat_title(); ?></h1>
		</div>
	</header>

	<?php if ( have_posts() ) : ?>

		<div class="category-content">

			<?php while ( have_posts() ) : the_post(); ?>

				<article <?php post_class( 'category-content__item' ); ?>>

					<a href="<?php the_permalink(); ?>">
						<?php if ( has_post_thumbnail() ) : ?>
							<div class="post-thumbnail">
								<?php the_post_thumbnail( 'large' ); ?>
							</div>
						<?php endif; ?>

						<div class="category-content__link">
							<h2><?php the_title(); ?></h2>
							<div class="read-more">Read More</div>
						</div>
					</a>

				</article>

			<?php endwhile; ?>

		</div>

		<?php the_posts_navigation(); ?>

	<?php else : ?>

		<?php get_template_part( 'template-parts/content', 'none' ); ?>

	<?php endif; ?>

	</main><!-- #main -->

<?php
get_footer();
