/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/js/scripts.js"
/*!***************************!*\
  !*** ./app/js/scripts.js ***!
  \***************************/
() {

(function ($) {
  // Mobile Menu
  var $header = $('.site-header');
  var $toggle = $('.menu-toggle');
  function openMenu() {
    $header.addClass('active');
    $toggle.addClass('active').attr('aria-expanded', 'true');
    $('html, body').addClass('menu-open');
  }
  function closeMenu() {
    $header.removeClass('active');
    $toggle.removeClass('active').attr('aria-expanded', 'false');
    $('html, body').removeClass('menu-open');
  }
  function isMenuOpen() {
    return $header.hasClass('active');
  }
  $toggle.on('click', function (e) {
    e.preventDefault();
    isMenuOpen() ? closeMenu() : openMenu();
  });

  // Close on ESC
  $(document).on('keydown', function (e) {
    if (e.key === 'Escape' && isMenuOpen()) closeMenu();
  });

  // Optional: close when a menu link is clicked
  $('.main-navigation').on('click', 'a', function () {
    if (isMenuOpen()) closeMenu();
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
      arrows: false,
      dots: true,
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

      // Init slick once
      if (!$carousel.hasClass('slick-initialized')) {
        $carousel.slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: false,
          draggable: true,
          swipe: true,
          touchMove: true,
          swipeToSlide: true,
          speed: 450,
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

      // Hover scrub behavior
      var rafId = null;
      var targetIndex = null;
      var lastIndex = null;
      var isPointerDown = false;
      function update() {
        rafId = null;
        if (targetIndex === null) return;
        if (targetIndex === lastIndex) return;

        // true = don't animate every tiny move too aggressively
        $carousel.slick('slickGoTo', targetIndex, true);
        lastIndex = targetIndex;
      }
      function queueUpdate() {
        if (rafId) return;
        rafId = requestAnimationFrame(update);
      }

      // Use the slick-list as the hover area (this is the visible viewport)
      var $hoverArea = $carousel.closest('.slick-slider').find('.slick-list');

      // Track pointer down so we don't fight the existing drag behavior
      $hoverArea.on('mousedown touchstart', function () {
        isPointerDown = true;
      });
      $(document).on('mouseup touchend touchcancel', function () {
        isPointerDown = false;
      });
      $hoverArea.on('mousemove', function (e) {
        if (isPointerDown) return; // let drag do its thing

        var slick = $carousel.slick('getSlick');
        if (!slick) return;
        var slideCount = slick.slideCount;
        if (!slideCount) return;
        var rect = this.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var pct = x / rect.width;

        // Clamp 0..1
        if (pct < 0) pct = 0;
        if (pct > 1) pct = 1;

        // Map mouse position to slide index
        targetIndex = Math.round(pct * (slideCount - 1));
        queueUpdate();
      });
      $hoverArea.on('mouseleave', function () {
        targetIndex = null;
        lastIndex = null;
        if (rafId) cancelAnimationFrame(rafId);
        rafId = null;
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