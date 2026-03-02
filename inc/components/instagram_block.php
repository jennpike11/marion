<?php // Instagram Block

  if( have_rows('instagram_block') ): 
  while( have_rows('instagram_block') ): the_row(); 
    $verticalPadding = get_sub_field('vertical_padding');
    $backgroundColor = get_sub_field('background_color');
    $shortcode = get_sub_field('shortcode');
  ?>

<section class="instagram-block__wrapper padding--<?php echo $verticalPadding ?> background-color--<?php echo $backgroundColor ?>">
  <div class="instagram-block">
    <?php if($shortcode): ?>
      <div class="instagram-block__feed"><?php echo do_shortcode($shortcode); ?></div>
    <?php endif; ?> 
  </div>
</section>

<?php endwhile; ?>
<?php endif; ?>
