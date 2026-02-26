<?php  // FAQ Block
  if( have_rows('faq_block') ): 
  while( have_rows('faq_block') ): the_row(); 
  $verticalPadding = get_sub_field('vertical_padding'); 
  $backgroundColor = get_sub_field('background_color'); 
  $textColor = get_sub_field('text_color'); 
  $heading = get_sub_field('heading');
  ?>

  <section class="faq-block__wrapper padding--<?php echo $verticalPadding ?> background-color--<?php echo $backgroundColor ?>">
		<div class="faq-block">
			<h2 class="faq-block__heading color--<?php echo $textColor ?>"><?php echo $heading ?></h2>
			<?php  while( have_rows('questions_and_answers') ): the_row(); 
      $question = get_sub_field('question');
      $answer = get_sub_field('answer');
      ?>
			<div class="faq-block__item">
				<h3 class="faq-block__question color--<?php echo $textColor ?>"><?php echo $question ?><span class="arrow"></span></h3>
				<div class="faq-block__answer color--<?php echo $textColor ?>"><?php echo $answer ?></div>
			</div>
      <?php endwhile; ?>
		</div>
	</section>	

  <?php endwhile; ?>
  <?php endif; ?>