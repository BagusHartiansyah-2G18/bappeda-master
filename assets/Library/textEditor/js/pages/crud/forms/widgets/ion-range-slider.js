/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/crud/forms/widgets/ion-range-slider.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/crud/forms/widgets/ion-range-slider.js":
/*!*********************************************************************!*\
  !*** ../src/assets/js/pages/crud/forms/widgets/ion-range-slider.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Class definition\n\nvar KTIONRangeSlider = function () {\n    \n    // Private functions\n    var demos = function () {\n        // basic demo\n        $('#kt_slider_1').ionRangeSlider();\n\n        // min & max values\n        $('#kt_slider_2').ionRangeSlider({\n            min: 100,\n            max: 1000,\n            from: 550\n        });\n\n        // custom prefix\n        $('#kt_slider_3').ionRangeSlider({\n            type: \"double\",\n            grid: true,\n            min: 0,\n            max: 1000,\n            from: 200,\n            to: 800,\n            prefix: \"$\"\n        });\n\n        // range & step\n        $('#kt_slider_4').ionRangeSlider({\n            type: \"double\",\n            grid: true,\n            min: -1000,\n            max: 1000,\n            from: -500,\n            to: 500\n        });\n\n        // fractional step\n        $('#kt_slider_5').ionRangeSlider({\n            type: \"double\",\n            grid: true,\n            min: -12.8,\n            max: 12.8,\n            from: -3.2,\n            to: 3.2,\n            step: 0.1\n        });\n\n        // using postfixes\n        $('#kt_slider_6').ionRangeSlider({\n            type: \"single\",\n            grid: true,\n            min: -90,\n            max: 90,\n            from: 0,\n            postfix: \"°\"\n        });\n\n        // using text\n        $('#kt_slider_7').ionRangeSlider({\n            type: \"double\",\n            min: 100,\n            max: 200,\n            from: 145,\n            to: 155,\n            prefix: \"Weight: \",\n            postfix: \" million pounds\",\n            decorate_both: true\n        });\n\n    }\n\n    return {\n        // public functions\n        init: function() {\n            demos(); \n        }\n    };\n}();\n\njQuery(document).ready(function() {\n    KTIONRangeSlider.init();\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/crud/forms/widgets/ion-range-slider.js?");

/***/ })

/******/ });