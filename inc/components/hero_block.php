<?php // Hero Block

if( have_rows('hero_block') ):
  while( have_rows('hero_block') ): the_row();
    $homePage = get_sub_field('home_page');
    $image = get_sub_field('image');
    $textColor = get_sub_field('text_color');
    $heading = get_sub_field('heading');
    $description = get_sub_field('description');
    $button = get_sub_field('button');
    $buttonColor = get_sub_field('button_color');
?>

<section class="hero-block__wrapper height--<?php echo $homePage ?>" data-component="hero-block">
  <div class="hero-block">

    <div class="hero-block__image" aria-hidden="true">
      <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['title']); ?>" decoding="async">
    </div>

  <div class="hero-block__content-wrapper">
    <div class="hero-block__content">
      <h1 class="hero-block__heading color--<?php echo $textColor ?>">
        <?php echo $heading; ?>
      </h1>

      <?php if($description): ?>
        <div class="hero-block__description color--white"><?php echo $description; ?></div>
      <?php endif; ?>

      <?php if($button): ?>
        <div class="hero-block__button">
          <a class="primary-button background-color--<?php echo $buttonColor ?>" href="<?php echo esc_url($button['url']); ?>">
            <?php echo esc_html($button['title']); ?>
          </a>
        </div>
      <?php endif; ?>
    </div>
  </div>

  </div>
</section>

<div class="hero-block__spacer height--<?php echo $homePage ?>" aria-hidden="true"></div>

<?php endwhile; ?>
<?php endif; ?>