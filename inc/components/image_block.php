<?php // Image Block

  if( have_rows('image_block') ): 
  while( have_rows('image_block') ): the_row(); 
    $verticalPadding = get_sub_field('vertical_padding');
    $imageAlignment = get_sub_field('image_alignment');
    $backgroundColor = get_sub_field('background_color');
    $image = get_sub_field('image');
  ?>

<section class="image-block__wrapper padding--<?php echo $verticalPadding ?> background-color--<?php echo $backgroundColor ?>">
  <div class="image-block alignment--<?php echo $imageAlignment ?>">
    <div class="image-block__image"><img src="<?php echo $image['url'] ?>" alt="<?php echo $image['title'] ?>"></div>
  </div>
</section>

<?php endwhile; ?>
<?php endif; ?>
