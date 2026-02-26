(function ($) {
 
  // Mobile Menu
  $('.menu-toggle').on('click', function () {
    if ($('.site-header__wrapper').hasClass('active')) {
      $('.site-header__wrapper').removeClass('active');
      $('.menu-toggle').removeClass('active');
      $('.site-header__wrapper').hide(200);
    } else {
      $('.site-header__wrapper').show(200);
      $('.site-header__wrapper').addClass('active');
      $('.menu-toggle').addClass('active');
    }
  });

  // Load More Button - Posts from the Category Page 
  $(".load-more--category-posts").on("click", function(e){
    e.preventDefault();
    $(".category-items__item:hidden").slice(0, 4).slideDown();
    if($(".category-items__item:hidden").length == 0) {
      $(".load-more--category-posts").text("End of content").addClass("no-content");
    }
  });

  // Load More Button - Posts from the Post Feed Block
  $(".load-more--posts").on("click", function(e){
    e.preventDefault();
    $(".load-items__item:hidden").slice(0, 3).slideDown();
    if($(".load-items__item:hidden").length == 0) {
      $(".load-more--posts").text("End of content").addClass("no-content");
    }
  });


  // Rooms Slider
  $('.rooms-block__carousel').slick({  
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: true,
    cssEase: 'linear',
    pauseOnHover: true,
    pauseOnFocus: true,
  });

  // Rooms Carousel
  $(function(){
    $('.rooms-block__carousel').slick({  
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      arrows: false,
      dots: true,
      cssEase: 'linear',
      pauseOnHover: true,
      pauseOnFocus: true,
    });
  });  


// Carousel Block Slider
$(function(){
var $carousel = $('.carousel-block__images');
if ($carousel.length && $.fn.slick) {
  $carousel.not('.slick-initialized').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: false,
    draggable: true,     
    swipe: true, 
    touchMove: true,
    swipeToSlide: true,  
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768,  settings: { slidesToShow: 2 } },
      { breakpoint: 480,  settings: { slidesToShow: 1 } }]
    });
  }
});


  // FAQ Accordion
$(function(){
  $('.faq-block__item').click(function(){
    if($(this).hasClass('active')) {         
      $('.faq-block__answer').slideUp();
      $('.faq-block__item').removeClass('active');
    }
    else
    {      
      $('.faq-block__item').removeClass('active');   
      $(this).addClass('active');
      $('.faq-block__answer').slideUp();
      $(this).find('.faq-block__answer').slideDown();
    }
  });
});


})(jQuery);