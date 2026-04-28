(function ($) {
 
  // Mobile Menu
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 10) {
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


// Carousel Block Slider + Hover Scrub
$(function () {
  var $carousels = $('.carousel-block__images');

  if (!$carousels.length || !$.fn.slick) return;

  $carousels.each(function () {
    var $carousel = $(this);

    if (!$carousel.hasClass('slick-initialized')) {
      $carousel.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true,
        draggable: true,
        swipe: true,
        touchMove: true,
        swipeToSlide: true,
        speed: 600,
        cssEase: 'ease',
        responsive: [
          { breakpoint: 1024, settings: { slidesToShow: 3 } },
          { breakpoint: 768, settings: { slidesToShow: 2 } },
          { breakpoint: 480, settings: { slidesToShow: 1 } }
        ]
      });
    }

    var $hoverArea = $carousel.closest('.slick-slider').find('.slick-list');
    var lastDirection = null;
    var hoverTimeout = null;
    var isPointerDown = false;

    $hoverArea.on('mousedown touchstart', function () {
      isPointerDown = true;
    });

    $(document).on('mouseup touchend touchcancel', function () {
      isPointerDown = false;
    });

    $hoverArea.on('mousemove', function (e) {
      if (isPointerDown) return;

      var rect = this.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var width = rect.width;

      clearTimeout(hoverTimeout);

      if (x < width * 0.33) {
        if (lastDirection !== 'prev') {
          $carousel.slick('slickPrev');
          lastDirection = 'prev';
        }
      } else if (x > width * 0.66) {
        if (lastDirection !== 'next') {
          $carousel.slick('slickNext');
          lastDirection = 'next';
        }
      } else {
        lastDirection = null;
      }

      hoverTimeout = setTimeout(function () {
        lastDirection = null;
      }, 250);
    });

    $hoverArea.on('mouseleave', function () {
      clearTimeout(hoverTimeout);
      lastDirection = null;
    });
  });
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