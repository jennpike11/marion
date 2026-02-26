<?php // One Column Block

  if( have_rows('one_column_block') ): 
  while( have_rows('one_column_block') ): the_row(); 
    $verticalPadding = get_sub_field('vertical_padding');
    $maxWidth = get_sub_field('max_width');
    $backgroundColor = get_sub_field('background_color');
    $textColor = get_sub_field('text_color');
    $heading = get_sub_field('heading'); 
    $headingSize = get_sub_field('heading_size'); 
    $description = get_sub_field('description');
    $link = get_sub_field('link');
  ?>

<section class="one-column-block__wrapper padding--<?php echo $verticalPadding ?> background-color--<?php echo $backgroundColor ?>">
  <div class="one-column-block max-width--<?php echo $maxWidth ?>">
    <?php if($heading): ?>
      <h2 class="one-column-block__heading font-size--<?php echo $headingSize ?> color--<?php echo $textColor ?>"><?php echo $heading ?></h2>
    <?php endif; ?>  

    <?php if($description): ?>
      <div class="one-column-block__description color--<?php echo $textColor ?>"><?php echo $description ?></div>
    <?php endif; ?> 

    <?php if($link): ?>
      <div class="primary-button"><a href="<?php echo $link['url'] ?>"><?php echo $link['title'] ?></a></div>
    <?php endif; ?>  
  </div>
</section>

<?php endwhile; ?>
<?php endif; ?>
