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
        <?php  while( have_rows('rooms') ): the_row(); 
          $roomCarousel = get_sub_field('room_carousel');
          $roomTitle = get_sub_field('room_title');
          $roomDescription = get_sub_field('room_description');
          $roomButton = get_sub_field('room_button');
        ?>
        <div class="rooms-block__room color--<?php echo $textColor ?>">
          <div class="rooms-block__carousel">
            <?php  while( have_rows('room_images') ): the_row(); 
              $roomImage = get_sub_field('room_image');
            ?>
              <div class="rooms-block__image"><img src="<?php echo $roomImage['url'] ?>" alt="<?php echo $roomImage['title'] ?>"></div>
            <?php endwhile; ?>
          </div>
          <h3 class="rooms-block__title color--<?php echo $textColor ?>"><?php echo $roomTitle ?></h3>
          <div class="rooms-block__description color--<?php echo $textColor ?>"><?php echo $roomDescription ?></div>
          <div class="rooms-block__button"><a class="primary-button" href="<?php echo $roomButton['title'] ?>"><?php echo $roomButton['title'] ?></a></div>
        </div>
        <?php endwhile; ?>
      </div>
		</div>
	</section>	

  <?php endwhile; ?>
  <?php endif; ?>