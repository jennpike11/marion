<?php // location
if ( have_rows('locations_block') ) :
  while ( have_rows('locations_block') ) : the_row();

    $verticalPadding = get_sub_field('vertical_padding');
    $heading = get_sub_field('heading');
    $description = get_sub_field('description');
    $map = get_sub_field('map');
?>

<section class="locations-block__wrapper padding--<?php echo esc_attr($verticalPadding); ?>">
  <div class="locations-block">

    <?php if($heading): ?>
      <h2 class="locations-block__heading"><?php echo esc_html($heading); ?></h2>
    <?php endif; ?>

    <?php if($description): ?>
      <div class="locations-block__description"><?php echo $description ?></div>
    <?php endif; ?>

    <?php if ( $map == 1 ) : ?>
      <div id="property-map" class="locations-block__location"></div>
    <?php endif; ?>
  </div>

  <?php if ( have_rows('location_cards') ) : ?>
    <div class="location-cards">
      <?php while ( have_rows('location_cards') ) : the_row();

        $icon = get_sub_field('icon');
        $name = get_sub_field('name');
        $description = get_sub_field('description');
        $link = get_sub_field('link');
      ?>
        <div class="location-cards__card">
          <div class="location-cards__name">
            <span class="location-cards__icon">
              <?php if ( !empty($icon) && is_array($icon) && !empty($icon['url']) ) : ?>
                <img src="<?php echo esc_url($icon['url']); ?>" alt="">
              <?php endif; ?>
            </span>
            <span><?php echo esc_html($name); ?></span>
          </div>

          <div class="location-cards__description">
            <?php echo wp_kses_post($description); ?>
          </div>

          <div class="location-cards__link">
            <?php if ( !empty($link) && is_array($link) ) : ?>
              <a class="primary-button"
                 href="<?php echo esc_url($link['url']); ?>"
                 target="<?php echo esc_attr($link['target'] ?: '_self'); ?>">
                <?php echo esc_html($link['title']); ?>
              </a>
            <?php endif; ?>
          </div>
        </div>
      <?php endwhile; ?>
    </div>
  <?php endif; ?>

</section>

<?php
  endwhile;
endif;
?>