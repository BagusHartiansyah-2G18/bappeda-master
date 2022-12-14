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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/components/extended/dual-listbox.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/components/extended/dual-listbox.js":
/*!******************************************************************!*\
  !*** ../src/assets/js/pages/components/extended/dual-listbox.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Class definition\nvar KTDualListbox = function() {\n\n  // Private functions\n  var initDualListbox = function() {\n    // Dual Listbox\n    var listBoxes = $('.kt-dual-listbox');\n\n    listBoxes.each(function() {\n      var $this = $(this);\n      // get titles\n      var availableTitle = ($this.attr('data-available-title') != null) ? $this.attr('data-available-title') : 'Available options';\n      var selectedTitle = ($this.attr('data-selected-title') != null) ? $this.attr('data-selected-title') : 'Selected options';\n\n      // get button labels\n      var addLabel = ($this.attr('data-add') != null) ? $this.attr('data-add') : 'Add';\n      var removeLabel = ($this.attr('data-remove') != null) ? $this.attr('data-remove') : 'Remove';\n      var addAllLabel = ($this.attr('data-add-all') != null) ? $this.attr('data-add-all') : 'Add All';\n      var removeAllLabel = ($this.attr('data-remove-all') != null) ? $this.attr('data-remove-all') : 'Remove All';\n\n      // get options\n      var options = [];\n      $this.children('option').each(function() {\n        var value = $(this).val();\n        var label = $(this).text();\n        options.push({text: label, value: value});\n      });\n\n      // get search option\n      var search = ($this.attr('data-search') != null) ? $this.attr('data-search') : '';\n\n      // init dual listbox\n      var dualListBox = new DualListbox($this.get(0), {\n        addEvent: function(value) {\n          console.log(value);\n        },\n        removeEvent: function(value) {\n          console.log(value);\n        },\n        availableTitle: availableTitle,\n        selectedTitle: selectedTitle,\n        addButtonText: addLabel,\n        removeButtonText: removeLabel,\n        addAllButtonText: addAllLabel,\n        removeAllButtonText: removeAllLabel,\n        options: options,\n      });\n\n      if (search == 'false') {\n        dualListBox.search.classList.add('dual-listbox__search--hidden');\n      }\n    });\n  };\n\n  return {\n    // public functions\n    init: function() {\n      initDualListbox();\n    },\n  };\n}();\n\nKTUtil.ready(function() {\n  KTDualListbox.init();\n});\n\n\n//# sourceURL=webpack:///../src/assets/js/pages/components/extended/dual-listbox.js?");

/***/ })

/******/ });