<?php  // Carousel Block
  if( have_rows('carousel_block') ): 
  while( have_rows('carousel_block') ): the_row(); 
  $verticalPadding = get_sub_field('vertical_padding'); 
  $backgroundColor = get_sub_field('background_color'); 
  ?>

  <section class="carousel-block__wrapper padding--<?php echo $verticalPadding ?> background-color--<?php echo $backgroundColor ?>">
		<div class="carousel-block">
      <div class="carousel-block__images">
       <?php if ( have_rows('images') ): ?>
        <?php while ( have_rows('images') ): the_row();
          $image = get_sub_field('image');
          if ( empty($image) ) continue;
        ?>
          <div class="carousel-block__image">
            <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>">
          </div>
        <?php endwhile; ?>
      <?php endif; ?>
      </div>
		</div>
	</section>	

  <?php endwhile; ?>
  <?php endif; ?>