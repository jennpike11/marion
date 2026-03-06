<?php  // Rooms Block
  if( have_rows('rooms_block') ): 
  while( have_rows('rooms_block') ): the_row(); 
    $verticalPadding = get_sub_field('vertical_padding'); 
    $backgroundColor = get_sub_field('background_color');
    $textColor = get_sub_field('text_color');
  ?>

  <section class="rooms-block__wrapper padding--<?php echo $verticalPadding ?> background-color--<?php echo $backgroundColor ?>">
		<div class="rooms-block">
      <div class="rooms-block__rooms">
        <?php if( have_rows('rooms') ): 
          while( have_rows('rooms') ): the_row(); 
          $roomCarousel = get_sub_field('room_carousel');
          $roomTitle = get_sub_field('room_title');
          $roomDescription = get_sub_field('room_description');
          $roomButton = get_sub_field('room_button');
        ?>
        <div class="rooms-block__room color--<?php echo $textColor ?>">
          <div class="rooms-block__carousel">
            <?php if( have_rows('room_images') ): 
              while( have_rows('room_images') ): the_row(); 
              $roomImage = get_sub_field('room_image');
            ?>
              <div class="rooms-block__image"><img src="<?php echo $roomImage['url'] ?>" alt="<?php echo $roomImage['title'] ?>"></div>
            <?php endwhile; ?>
            <?php endif; ?>
          </div>
          <h3 class="rooms-block__title color--<?php echo $textColor ?>"><?php echo $roomTitle ?></h3>
          <div class="rooms-block__description color--<?php echo $textColor ?>"><?php echo $roomDescription ?></div>
          <?php if ($roomButton): ?>
            <div class="rooms-block__button">
              <a class="primary-button"
                href="<?php echo esc_url($roomButton['url']); ?>"
                target="<?php echo esc_attr($roomButton['target'] ?: '_self'); ?>">
                <?php echo esc_html($roomButton['title']); ?>
              </a>
            </div>
          <?php endif; ?>
        </div>
        <?php endwhile; ?>
        <?php endif; ?>
      </div>
		</div>
	</section>	

  <?php endwhile; ?>
  <?php endif; ?>