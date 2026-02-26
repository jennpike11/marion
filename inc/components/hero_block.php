<?php // Hero Block

if( have_rows('hero_block') ):
  while( have_rows('hero_block') ): the_row();
    $homePage = get_sub_field('home_page');
    $image = get_sub_field('image');
    $heading = get_sub_field('heading');
    $textColor = get_sub_field('text_color');
?>

<section class="hero-block__wrapper height--<?php echo $homePage ?>" data-component="hero-block">
  <div class="hero-block">

    <div class="hero-block__image" aria-hidden="true">
      <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['title']); ?>" decoding="async">
    </div>

    <div class="hero-block__copy">
      <h1 class="hero-block__heading color--<?php echo $textColor ?>">
        <?php echo $heading; ?>
      </h1>
    </div>

  </div>
</section>

<div class="hero-block__spacer height--<?php echo $homePage ?>" aria-hidden="true"></div>

<?php endwhile; ?>
<?php endif; ?>