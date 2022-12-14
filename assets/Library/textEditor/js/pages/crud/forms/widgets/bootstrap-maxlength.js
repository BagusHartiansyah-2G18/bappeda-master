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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/crud/forms/widgets/bootstrap-maxlength.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/crud/forms/widgets/bootstrap-maxlength.js":
/*!************************************************************************!*\
  !*** ../src/assets/js/pages/crud/forms/widgets/bootstrap-maxlength.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Class definition\n\nvar KTBootstrapMaxlength = function () {\n    \n    // Private functions\n    var demos = function () {\n        // minimum setup\n        $('#kt_maxlength_1').maxlength({\n            warningClass: \"kt-badge kt-badge--warning kt-badge--rounded kt-badge--inline\",\n            limitReachedClass: \"kt-badge kt-badge--success kt-badge--rounded kt-badge--inline\"\n        });\n\n        // threshold value\n        $('#kt_maxlength_2').maxlength({\n            threshold: 5,\n            warningClass: \"kt-badge kt-badge--danger kt-badge--rounded kt-badge--inline\",\n            limitReachedClass: \"kt-badge kt-badge--success kt-badge--rounded kt-badge--inline\"\n        });\n\n        // always show\n        $('#kt_maxlength_3').maxlength({\n            alwaysShow: true,\n            threshold: 5,\n            warningClass: \"kt-badge kt-badge--primary kt-badge--rounded kt-badge--inline\",\n            limitReachedClass: \"kt-badge kt-badge--brand kt-badge--rounded kt-badge--inline\"\n        });\n\n        // custom text\n        $('#kt_maxlength_4').maxlength({\n            threshold: 3,\n            warningClass: \"kt-badge kt-badge--danger kt-badge--rounded kt-badge--inline\",\n            limitReachedClass: \"kt-badge kt-badge--success kt-badge--rounded kt-badge--inline\",\n            separator: ' of ',\n            preText: 'You have ',\n            postText: ' chars remaining.',\n            validate: true\n        });\n\n        // textarea example\n        $('#kt_maxlength_5').maxlength({\n            threshold: 5,\n            warningClass: \"kt-badge kt-badge--primary kt-badge--rounded kt-badge--inline\",\n            limitReachedClass: \"kt-badge kt-badge--brand kt-badge--rounded kt-badge--inline\"\n        });\n\n        // position examples\n        $('#kt_maxlength_6_1').maxlength({\n            alwaysShow: true,\n            threshold: 5,\n            placement: 'top-left',\n            warningClass: \"kt-badge kt-badge--brand kt-badge--rounded kt-badge--inline\",\n            limitReachedClass: \"kt-badge kt-badge--brand kt-badge--rounded kt-badge--inline\"\n        });\n\n        $('#kt_maxlength_6_2').maxlength({\n            alwaysShow: true,\n            threshold: 5,\n            placement: 'top-right',\n            warningClass: \"kt-badge kt-badge--success kt-badge--rounded kt-badge--inline\",\n            limitReachedClass: \"kt-badge kt-badge--brand kt-badge--rounded kt-badge--inline\"\n        });\n\n        $('#kt_maxlength_6_3').maxlength({\n            alwaysShow: true,\n            threshold: 5,\n            placement: 'bottom-left',\n            warningClass: \"kt-badge kt-badge--warning kt-badge--rounded kt-badge--inline\",\n            limitReachedClass: \"kt-badge kt-badge--brand kt-badge--rounded kt-badge--inline\"\n        });\n\n        $('#kt_maxlength_6_4').maxlength({\n            alwaysShow: true,\n            threshold: 5,\n            placement: 'bottom-right',\n            warningClass: \"kt-badge kt-badge--danger kt-badge--rounded kt-badge--inline\",\n            limitReachedClass: \"kt-badge kt-badge--brand kt-badge--rounded kt-badge--inline\"\n        });\n\n        // Modal Examples\n\n        // minimum setup\n        $('#kt_maxlength_1_modal').maxlength({\n            warningClass: \"kt-badge kt-badge--warning kt-badge--rounded kt-badge--inline\",\n            limitReachedClass: \"kt-badge kt-badge--success kt-badge--rounded kt-badge--inline\",\n            appendToParent: true\n        });\n\n        // threshold value\n        $('#kt_maxlength_2_modal').maxlength({\n            threshold: 5,\n            warningClass: \"kt-badge kt-badge--danger kt-badge--rounded kt-badge--inline\",\n            limitReachedClass: \"kt-badge kt-badge--success kt-badge--rounded kt-badge--inline\",\n            appendToParent: true\n        });\n\n        // always show\n        // textarea example\n        $('#kt_maxlength_5_modal').maxlength({\n            threshold: 5,\n            warningClass: \"kt-badge kt-badge--primary kt-badge--rounded kt-badge--inline\",\n            limitReachedClass: \"kt-badge kt-badge--brand kt-badge--rounded kt-badge--inline\",\n            appendToParent: true\n        });\n\n        // custom text\n        $('#kt_maxlength_4_modal').maxlength({\n            threshold: 3,\n            warningClass: \"kt-badge kt-badge--danger kt-badge--rounded kt-badge--inline\",\n            limitReachedClass: \"kt-badge kt-badge--success kt-badge--rounded kt-badge--inline\",\n            appendToParent: true,\n            separator: ' of ',\n            preText: 'You have ',\n            postText: ' chars remaining.',\n            validate: true\n        });\n    }\n\n    return {\n        // public functions\n        init: function() {\n            demos();  \n        }\n    };\n}();\n\njQuery(document).ready(function() {\n    KTBootstrapMaxlength.init();\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/crud/forms/widgets/bootstrap-maxlength.js?");

/***/ })

/******/ });