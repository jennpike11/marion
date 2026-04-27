/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/js/scripts.js"
/*!***************************!*\
  !*** ./app/js/scripts.js ***!
  \***************************/
() {

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
  $(".load-more--category-posts").on("click", function (e) {
    e.preventDefault();
    $(".category-items__item:hidden").slice(0, 4).slideDown();
    if ($(".category-items__item:hidden").length == 0) {
      $(".load-more--category-posts").text("End of content").addClass("no-content");
    }
  });

  // Load More Button - Posts from the Post Feed Block
  $(".load-more--posts").on("click", function (e) {
    e.preventDefault();
    $(".load-items__item:hidden").slice(0, 3).slideDown();
    if ($(".load-items__item:hidden").length == 0) {
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
      pauseOnFocus: true
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
          responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 3
            }
          }, {
            breakpoint: 768,
            settings: {
              slidesToShow: 2
            }
          }, {
            breakpoint: 480,
            settings: {
              slidesToShow: 1
            }
          }]
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

        // Left third = previous, right third = next, middle = do nothing
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
  $(function () {
    $('.faq-block__item').click(function () {
      if ($(this).hasClass('active')) {
        $('.faq-block__answer').slideUp();
        $('.faq-block__item').removeClass('active');
      } else {
        $('.faq-block__item').removeClass('active');
        $(this).addClass('active');
        $('.faq-block__answer').slideUp();
        $(this).find('.faq-block__answer').slideDown();
      }
    });
  });
})(jQuery);

// Load Google Maps API
(function () {
  var script = document.createElement('script');
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBJjLdM2BGzorjmodPPoXpfGtC5eVAzbzQ';
  script.async = true;
  script.defer = true;
  script.onload = function () {
    initMap();
  };
  document.head.appendChild(script);
})();
function initMap() {
  var mapEl = document.getElementById('property-map');
  if (!mapEl) return;
  var hotel = {
    lat: 39.650656,
    lng: -104.972286
  };
  var swedish = {
    lat: 39.652280,
    lng: -104.983550
  };
  var craig = {
    lat: 39.647650,
    lng: -104.984200
  };
  var map = new google.maps.Map(mapEl, {
    center: {
      lat: 39.6498,
      lng: -104.972286
    },
    zoom: 15,
    disableDefaultUI: true,
    zoomControl: true,
    gestureHandling: 'greedy',
    styles: [{
      featureType: 'all',
      elementType: 'geometry',
      stylers: [{
        color: '#efefef'
      }]
    }, {
      featureType: 'poi',
      stylers: [{
        visibility: 'off'
      }]
    }, {
      featureType: 'transit',
      stylers: [{
        visibility: 'off'
      }]
    }, {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{
        color: '#ffffff'
      }]
    }]
  });

  // HOTEL
  var hotelMarker = new google.maps.Marker({
    position: hotel,
    map: map,
    title: 'Marion Hotel'
  });
  new google.maps.InfoWindow({
    content: '<div class="map-info-window">Marion Hotel</div>'
  }).open(map, hotelMarker);

  // SWEDISH MEDICAL CENTER
  var swedishMarker = new google.maps.Marker({
    position: swedish,
    map: map,
    icon: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png'
  });
  new google.maps.InfoWindow({
    content: '<div class="map-info-window">Swedish Medical Center</div>'
  }).open(map, swedishMarker);

  // CRAIG HOSPITAL
  var craigMarker = new google.maps.Marker({
    position: craig,
    map: map,
    icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
  });
  new google.maps.InfoWindow({
    content: '<div class="map-info-window">Craig Hospital</div>'
  }).open(map, craigMarker);
}

/***/ },

/***/ "./app/scss/main.scss"
/*!****************************!*\
  !*** ./app/scss/main.scss ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ "./app/scss/main.scss");
/* harmony import */ var _js_scripts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/scripts.js */ "./app/js/scripts.js");
/* harmony import */ var _js_scripts_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_scripts_js__WEBPACK_IMPORTED_MODULE_1__);
/* MAIN File */
// imports


})();

/******/ })()
;
//# sourceMappingURL=scripts.js.map