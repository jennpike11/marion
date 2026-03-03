<?php // One Column Block

  if( have_rows('one_column_block') ): 
  while( have_rows('one_column_block') ): the_row(); 
    $verticalPadding = get_sub_field('vertical_padding');
    $backgroundColor = get_sub_field('background_color');
    $textColor = get_sub_field('text_color');
    $headingWidth = get_sub_field('heading_width');
    $heading = get_sub_field('heading'); 
    $headingSize = get_sub_field('heading_size'); 
    $descriptionWidth = get_sub_field('description_width');
    $description = get_sub_field('description');
    $buttonAlignment = get_sub_field('button_alignment');
    $buttonColor = get_sub_field('button_color');
    $button = get_sub_field('button');
  ?>

<section class="one-column-block__wrapper padding--<?php echo $verticalPadding ?> background-color--<?php echo $backgroundColor ?>">
  <div class="one-column-block heading-width--<?php echo $headingWidth ?>">
    <?php if($heading): ?>
      <h2 class="one-column-block__heading font-size--<?php echo $headingSize ?> color--<?php echo $textColor ?>"><?php echo $heading ?></h2>
    <?php endif; ?>  

    <?php if($description): ?>
      <div class="one-column-block__description description-width--<?php echo $descriptionWidth ?> color--<?php echo $textColor ?>"><?php echo $description ?></div>
    <?php endif; ?> 

    <?php if($button): ?>
      <div class="one-column-block__button button-alignment--<?php echo $buttonAlignment ?>"><a class="primary-button button-color--<?php echo $buttonColor ?>" href="<?php echo $button['url'] ?>"><?php echo $button['title'] ?></a></div>
    <?php endif; ?>  
  </div>
</section>

<?php endwhile; ?>
<?php endif; ?>
