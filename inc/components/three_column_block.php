<?php  // Three Column Block 
  if( have_rows('three_column_block') ): 
  while( have_rows('three_column_block') ): the_row(); 
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
        <h2 class="three-column-block__heading"><?php echo $heading ?></h2>
        <div class="three-column-block__image"><img src="<?php echo $image['url'] ?>" alt="<?php echo $image['title'] ?>"></div>
				<h3 class="three-column-block__subheading"><?php echo $subheading ?></h3>
				<div class="three-column-block__description"><?php echo $description ?></div>
			</div>
      <?php endwhile; ?>
      <?php endif; ?>
		</div>
	</section>	

  <?php endwhile; ?>
  <?php endif; ?>