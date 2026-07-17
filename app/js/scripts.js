(function ($) {
 
  // Mobile Menu
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 400) {
      $('.site-header__wrapper').addClass('scrolled');
      $('nav div').addClass('visible-title');
    } else {
      $('.site-header__wrapper').removeClass('scrolled');
    }
  });

  // Stop scroll when menu open
  $('.menu-toggle').click(function () {
    $('html').toggleClass('active');  
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
  if ($.fn.slick && $('.rooms-block__carousel').length && !$('.rooms-block__carousel').hasClass('slick-initialized')) {
    $('.rooms-block__carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      arrows: true,
      dots: false,
      cssEase: 'linear',
      pauseOnHover: true,
      pauseOnFocus: true,
    });
  }


// Carousel Block
$('.carousel-block__images').slick({  
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  arrows: true,
  dots: false,
  speed: 700,
  cssEase: 'ease',
  pauseOnHover: false,
  pauseOnFocus: false,

  swipe: true,
  touchMove: true,
  draggable: true,
  swipeToSlide: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        swipe: true,
        touchMove: true,
        draggable: true,
        swipeToSlide: true
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        swipe: true,
        touchMove: true,
        draggable: true,
        swipeToSlide: true
      }
    }
  ]
});

// Slider Block Trackpad Horizontal Scroll
$('.carousel-block__images').each(function () {

  const slider = this;
  const $slider = $(slider);

  let isScrolling = false;

  slider.addEventListener('wheel', function (e) {

    if (window.innerWidth < 768) return;

    const horizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);

    if (!horizontal || isScrolling) return;

    e.preventDefault();

    isScrolling = true;

    if (e.deltaX > 0) {
      $slider.slick('slickNext');
    } else {
      $slider.slick('slickPrev');
    }

    setTimeout(function () {
      isScrolling = false;
    }, 450);

  }, { passive: false });

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


// Hero Parallax Fallback for Firefox (no doc ready wrapper)

if (!CSS.supports('animation-timeline: scroll()')) {

  const $heroImages = jQuery('.hero-block__image');
  const $heroContent = jQuery('.hero-block__content-wrapper');

  if ($heroImages.length) {

    let ticking = false;

    function updateHeroParallax() {
      const scrollY = window.scrollY || window.pageYOffset;

      $heroImages.each(function(index) {
        const $image = jQuery(this);
        const $section = $image.closest('.hero-block__section');

        if (!$section.length) return;

        const sectionTop = $section.offset().top;
        const sectionHeight = $section.outerHeight();
        const progress = Math.min(Math.max((scrollY - sectionTop) / sectionHeight, 0), 1);

        // IMAGE movement (matches your CSS)
        const moveYImage = progress * -16;

        // CONTENT movement (matches your CSS)
        const moveYContent = progress * -44;

        $image.css('transform', 'translate3d(0, ' + moveYImage + 'vh, 0) scale(1.10)');

        // match content to same section index
        const $content = $heroContent.eq(index);
        $content.css('transform', 'translate3d(0, ' + moveYContent + 'vh, 0)');
      });

      ticking = false;
    }

    jQuery(window).on('scroll resize', function() {
      if (!ticking) {
        window.requestAnimationFrame(updateHeroParallax);
        ticking = true;
      }
    });

    updateHeroParallax();
  }
}


})(jQuery);


// Load Google Maps API
(function() {
  var script = document.createElement('script');
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBJjLdM2BGzorjmodPPoXpfGtC5eVAzbzQ';
  script.async = true;
  script.defer = true;

  script.onload = function() {
    initMap();
    initHospitalMap();
  };

  document.head.appendChild(script);
})();


// Amenities Map
function initMap() {
  var mapEl = document.getElementById('property-map');
  if (!mapEl) return;

  var hotel = { lat: 39.650656, lng: -104.972286 };

 var locations = [
  {
    position: { lat: 39.650656, lng: -104.972286 },
    title: 'Marion Hotel',
    icon: null
  },
  {
    position: { lat: 39.652280, lng: -104.983550 },
    title: 'Swedish Medical Center',
    icon: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png'
  },
  {
    position: { lat: 39.647650, lng: -104.984200 },
    title: 'Craig Hospital',
    icon: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png'
  },
  {
    position: { lat: 39.653598, lng: -104.979934 },
    title: 'Penn Street Kitchen',
    icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
  },
  {
    position: { lat: 39.653960, lng: -104.972458 },
    title: 'Grow + Gather',
    icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
  },
  {
    position: { lat: 39.653743, lng: -104.967147 },
    title: 'Undici',
    icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
  },
  {
    position: { lat: 39.653153, lng: -104.987305 },
    title: 'Zomo Eatery',
    icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
  },
  {
    position: { lat: 39.760210, lng: -104.986067 },
    title: 'Work & Class',
    icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
  },
  {
    position: { lat: 39.653771, lng: -104.966180 },
    title: 'Aung\'s Bangkok Cafe',
    icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
  },
  {
    position: { lat: 39.697919, lng: -104.961780 },
    title: 'Home Grown Tap & Dough',
    icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
  },
  {
    position: { lat: 39.693518, lng: -104.987214 },
    title: 'Maria Empanada',
    icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
  },
  {
    position: { lat: 39.670887, lng: -104.973853 },
    title: 'Denver Beer Company',
    icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
  },
  {
    position: { lat: 39.682259, lng: -104.980748 },
    title: 'Platt Park Brewing',
    icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
  },
  {
    position: { lat: 39.720739, lng: -104.956127 },
    title: 'Forget Me Not',
    icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
  },
  {
    position: { lat: 39.661922, lng: -104.987512 },
    title: 'Breakfast On Broadway',
    icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
  }
];

  var map = new google.maps.Map(mapEl, {
    center: hotel,
    zoom: 15,
    disableDefaultUI: true,
    zoomControl: true,
    gestureHandling: 'greedy',
    styles: [
      { featureType: 'all', elementType: 'geometry', stylers: [{ color: '#efefef' }] },
      { featureType: 'poi', stylers: [{ visibility: 'off' }] },
      { featureType: 'transit', stylers: [{ visibility: 'off' }] },
      { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#ffffff' }] }
    ]
  });

  locations.forEach(function(location) {
    var marker = new google.maps.Marker({
      position: location.position,
      map: map,
      title: location.title,
      icon: location.icon || undefined
    });

    var infoWindow = new google.maps.InfoWindow({
      content: '<div class="map-info-window">' + location.title + '</div>'
    });

    marker.addListener('click', function() {
      infoWindow.open(map, marker);
    });

    if (location.title === 'Marion Hotel') {
      infoWindow.open(map, marker);
      map.setCenter(location.position);
    }
  });
}


// Hospital Map
function initHospitalMap() {
  var mapEl = document.getElementById('hospital-map');
  if (!mapEl) return;

  var hotel = { lat: 39.650656, lng: -104.972286 };

  var locations = [
  {
    position: hotel,
    title: 'Marion Hotel',
    icon: null
  },
  {
    position: { lat: 39.738716, lng: -104.942528 },
    title: 'National Jewish Health',
    icon: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png'
  },
  {
    position: { lat: 39.670742, lng: -104.973324 },
    title: 'AdventHealth Porter',
    icon: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png'
  },
  {
    position: { lat: 39.718524, lng: -104.947992 },
    title: 'UC Health',
    icon: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png'
  }
];

  var map = new google.maps.Map(mapEl, {
    center: hotel,
    zoom: 14,
    disableDefaultUI: true,
    zoomControl: true,
    gestureHandling: 'greedy',
    styles: [
      { featureType: 'all', elementType: 'geometry', stylers: [{ color: '#efefef' }] },
      { featureType: 'poi', stylers: [{ visibility: 'off' }] },
      { featureType: 'transit', stylers: [{ visibility: 'off' }] },
      { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#ffffff' }] }
    ]
  });

  locations.forEach(function(location) {
    var marker = new google.maps.Marker({
      position: location.position,
      map: map,
      title: location.title,
      icon: location.icon || undefined
    });

    var infoWindow = new google.maps.InfoWindow({
      content: '<div class="map-info-window">' + location.title + '</div>'
    });

    marker.addListener('click', function() {
      infoWindow.open(map, marker);
    });

    if (location.title === 'Marion Hotel') {
      infoWindow.open(map, marker);
      map.setCenter(location.position);
    }
  });
}