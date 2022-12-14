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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/crud/forms/widgets/bootstrap-touchspin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/crud/forms/widgets/bootstrap-touchspin.js":
/*!************************************************************************!*\
  !*** ../src/assets/js/pages/crud/forms/widgets/bootstrap-touchspin.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// Class definition\nvar KTKBootstrapTouchspin = function() {\n\n    // Private functions\n    var demos = function() {\n        // minimum setup\n        $('#kt_touchspin_1, #kt_touchspin_2_1').TouchSpin({\n            buttondown_class: 'btn btn-secondary',\n            buttonup_class: 'btn btn-secondary',\n\n            min: 0,\n            max: 100,\n            step: 0.1,\n            decimals: 2,\n            boostat: 5,\n            maxboostedstep: 10,\n        });\n\n        // with prefix\n        $('#kt_touchspin_2, #kt_touchspin_2_2').TouchSpin({\n            buttondown_class: 'btn btn-secondary',\n            buttonup_class: 'btn btn-secondary',\n\n            min: -1000000000,\n            max: 1000000000,\n            stepinterval: 50,\n            maxboostedstep: 10000000,\n            prefix: '$'\n        });\n\n        // vertical button alignment:\n        $('#kt_touchspin_3, #kt_touchspin_2_3').TouchSpin({\n            buttondown_class: 'btn btn-secondary',\n            buttonup_class: 'btn btn-secondary',\n\n            min: -1000000000,\n            max: 1000000000,\n            stepinterval: 50,\n            maxboostedstep: 10000000,\n            postfix: '$'\n        });\n\n        // vertical buttons with custom icons:\n        $('#kt_touchspin_4, #kt_touchspin_2_4').TouchSpin({\n            buttondown_class: 'btn btn-secondary',\n            buttonup_class: 'btn btn-secondary',\n            verticalbuttons: true,\n            verticalup: '<i class=\"la la-plus\"></i>',\n            verticaldown: '<i class=\"la la-minus\"></i>'\n        });\n\n        // vertical buttons with custom icons:\n        $('#kt_touchspin_5, #kt_touchspin_2_5').TouchSpin({\n            buttondown_class: 'btn btn-secondary',\n            buttonup_class: 'btn btn-secondary',\n            verticalbuttons: true,\n            verticalup: '<i class=\"la la-angle-up\"></i>',\n            verticaldown: '<i class=\"la la-angle-down\"></i>'\n        });\n    }\n\n    var validationStateDemos = function() {\n        // validation state demos\n        $('#kt_touchspin_1_validate').TouchSpin({\n            buttondown_class: 'btn btn-secondary',\n            buttonup_class: 'btn btn-secondary',\n\n            min: -1000000000,\n            max: 1000000000,\n            stepinterval: 50,\n            maxboostedstep: 10000000,\n            prefix: '$'\n        });\n\n        // vertical buttons with custom icons:\n        $('#kt_touchspin_2_validate').TouchSpin({\n            buttondown_class: 'btn btn-secondary',\n            buttonup_class: 'btn btn-secondary',\n\n            min: 0,\n            max: 100,\n            step: 0.1,\n            decimals: 2,\n            boostat: 5,\n            maxboostedstep: 10,\n        });\n\n        $('#kt_touchspin_3_validate').TouchSpin({\n            buttondown_class: 'btn btn-secondary',\n            buttonup_class: 'btn btn-secondary',\n            verticalbuttons: true,\n            verticalupclass: 'la la-plus',\n            verticaldownclass: 'la la-minus'\n        });\n    }\n\n    return {\n        // public functions\n        init: function() {\n            demos();\n            validationStateDemos();\n        }\n    };\n}();\n\njQuery(document).ready(function() {\n    KTKBootstrapTouchspin.init();\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/crud/forms/widgets/bootstrap-touchspin.js?");

/***/ })

/******/ });