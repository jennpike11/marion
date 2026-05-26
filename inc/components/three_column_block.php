<?php  // Three Column Block 
  if( have_rows('three_column_block') ): 
  while( have_rows('three_column_block') ): the_row();
   $textColor = get_sub_field('text_color');  
  ?>

  <section class="three-column-block__wrapper">
		<div class="three-column-block">
			<?php if( have_rows('columns') ): 
        while( have_rows('columns') ): the_row(); 
        $backgroundColor = get_sub_field('background_color'); 
        $heading = get_sub_field('heading');
        $subheading = get_sub_field('subheading');
        $description = get_sub_field('description');
        $image = get_sub_field('image');
      ?>
			<div class="three-column-block__column background-color--<?php echo $backgroundColor ?>">
        <?php if($heading): ?>
          <h2 class="three-column-block__heading color--<?php echo $textColor ?>"><?php echo $heading ?></h2>
        <?php endif; ?>

        <?php if($image): ?>
          <div class="three-column-block__image"><img src="<?php echo $image['url'] ?>" alt="<?php echo $image['title'] ?>"></div>
        <?php endif; ?>

        <?php if($subheading || $description): ?>
          <div class="three-column-block__text">
            <?php if($subheading): ?>
              <h3 class="three-column-block__subheading color--<?php echo $textColor ?>"><?php echo $subheading ?></h3>
            <?php endif; ?>

            <?php if($description): ?>
              <div class="three-column-block__description color--<?php echo $textColor ?>"><?php echo $description ?></div>
            <?php endif; ?>
          </div>
        <?php endif; ?>
			</div>
      <?php endwhile; ?>
      <?php endif; ?>
		</div>
	</section>	

  <?php endwhile; ?>
  <?php endif; ?>