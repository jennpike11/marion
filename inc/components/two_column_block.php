<?php // Two Column Block
   if( have_rows('two_column_block') ): 
   while( have_rows('two_column_block') ): the_row(); 
   $verticalPadding = get_sub_field('vertical_padding'); 
   $columnAlignment = get_sub_field('column_alignment'); 
   $backgroundColor = get_sub_field('background_color');
   $textColor = get_sub_field('text_color');
   $headingOne = get_sub_field('column_one_heading'); 
   $descriptionOne = get_sub_field('column_one_description');
   $imageOne = get_sub_field('column_one_image');
   $buttonOne = get_sub_field('column_one_button');
   $headingTwo = get_sub_field('column_two_heading'); 
   $descriptionTwo = get_sub_field('column_two_description'); 
   $imageTwo = get_sub_field('column_two_image');
   $buttonTwo = get_sub_field('column_two_button');
?>

<section class="two-column-block__wrapper padding--<?php echo $verticalPadding ?> background-color--<?php echo $backgroundColor ?>">
   <div class="two-column-block column-alignment--<?php echo $columnAlignment ?>">   
      <div class="column column--one">
         <?php if( $imageOne ): ?>
            <div class="column__image">
               <img src="<?php echo $imageOne['url'] ?>" alt="<?php echo $imageOne['title'] ?>">
            </div>  
         <?php endif; ?>  

         <?php if( $headingOne || $descriptionOne || $buttonOne ): ?>
            <div class="column__content">   
               <?php if( $headingOne ): ?>
                  <h2 class="column__heading color--<?php echo $textColor ?>">
                     <?php echo $headingOne ?>
                  </h2>
               <?php endif; ?>

               <?php if( $descriptionOne ): ?>
                  <div class="column__description color--<?php echo $textColor ?>">
                     <?php echo $descriptionOne ?>
                  </div>
               <?php endif; ?>

               <?php if( $buttonOne != ""): ?>
                  <a class="primary-button" href="<?php echo $buttonOne['url'] ?>"><?php echo $buttonOne['title'] ?></a>
               <?php endif; ?>
            </div>
         <?php endif; ?>
      </div>
      <div class="column column--two">
         <?php if( $imageTwo ): ?>
            <div class="column__image">
               <img src="<?php echo $imageTwo['url'] ?>" alt="<?php echo $imageTwo['title'] ?>">
            </div>  
         <?php endif; ?>  

         <?php if( $headingTwo || $descriptionTwo || $buttonTwo ): ?>
            <div class="column__content">
               <?php if( $headingTwo ): ?>
                  <h2 class="column__heading color--<?php echo $textColor ?>">
                     <?php echo $headingTwo ?>
                  </h2>
               <?php endif; ?>

               <?php if( $descriptionTwo ): ?>
                  <div class="column__description color--<?php echo $textColor ?>">
                     <?php echo $descriptionTwo ?>
                  </div>
               <?php endif; ?>

               <?php if( $buttonTwo != ""): ?>
                  <a class="primary-button" href="<?php echo $buttonTwo['url'] ?>"><?php echo $buttonTwo['title'] ?></a>
               <?php endif; ?>
            </div>
         <?php endif; ?>  
      </div>
   </div>  
</section>

<?php endwhile; ?>
<?php endif; ?>  