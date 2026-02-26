/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/js/scripts.js"
/*!***************************!*\
  !*** ./app/js/scripts.js ***!
  \***************************/
() {

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