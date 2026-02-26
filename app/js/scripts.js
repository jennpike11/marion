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


})(jQuery);