<?php // Hero Block

if( have_rows('hero_block') ):
  while( have_rows('hero_block') ): the_row();
    $image = get_sub_field('image');
    $heading = get_sub_field('heading');
    $pageTitle = get_sub_field('page_title');
    $textColor = get_sub_field('text_color');
?>

<section class="hero-block__wrapper" data-component="hero-block">
  <div class="hero-block">

    <div class="hero-block__image" aria-hidden="true">
      <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['title']); ?>" decoding="async">
    </div>

    <div class="hero-block__copy">
      <?php if($pageTitle == 1){ ?>
        <h1 class="hero-block__heading color--<?php echo $textColor ?>">
          <?php echo $heading; ?>
        </h1>
      <?php } else { ?>
        <h2 class="hero-block__heading color--<?php echo $textColor ?>">
          <?php echo $heading; ?>
        </h2>
      <?php } ?>
    </div>

  </div>
</section>

<div class="hero-block__spacer" aria-hidden="true"></div>

<?php endwhile; ?>
<?php endif; ?>