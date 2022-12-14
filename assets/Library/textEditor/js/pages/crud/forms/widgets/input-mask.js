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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/crud/forms/widgets/input-mask.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/crud/forms/widgets/input-mask.js":
/*!***************************************************************!*\
  !*** ../src/assets/js/pages/crud/forms/widgets/input-mask.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Class definition\n\nvar KTInputmask = function () {\n    \n    // Private functions\n    var demos = function () {\n        // date format\n        $(\"#kt_inputmask_1\").inputmask(\"99/99/9999\", {\n            \"placeholder\": \"mm/dd/yyyy\",\n            autoUnmask: true\n        });\n\n        // custom placeholder        \n        $(\"#kt_inputmask_2\").inputmask(\"99/99/9999\", {\n            \"placeholder\": \"mm/dd/yyyy\",\n        });\n        \n        // phone number format\n        $(\"#kt_inputmask_3\").inputmask(\"mask\", {\n            \"mask\": \"(999) 999-9999\"\n        }); \n\n        // empty placeholder\n        $(\"#kt_inputmask_4\").inputmask({\n            \"mask\": \"99-9999999\",\n            placeholder: \"\" // remove underscores from the input mask\n        });\n\n        // repeating mask\n        $(\"#kt_inputmask_5\").inputmask({\n            \"mask\": \"9\",\n            \"repeat\": 10,\n            \"greedy\": false\n        }); // ~ mask \"9\" or mask \"99\" or ... mask \"9999999999\"\n        \n        // decimal format\n        $(\"#kt_inputmask_6\").inputmask('decimal', {\n            rightAlignNumerics: false\n        }); \n        \n        // currency format\n        $(\"#kt_inputmask_7\").inputmask('€ 999.999.999,99', {\n            numericInput: true\n        }); //123456  =>  € ___.__1.234,56\n\n        //ip address\n        $(\"#kt_inputmask_8\").inputmask({\n            \"mask\": \"999.999.999.999\"\n        });  \n\n        //email address\n        $(\"#kt_inputmask_9\").inputmask({\n            mask: \"*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]\",\n            greedy: false,\n            onBeforePaste: function (pastedValue, opts) {\n                pastedValue = pastedValue.toLowerCase();\n                return pastedValue.replace(\"mailto:\", \"\");\n            },\n            definitions: {\n                '*': {\n                    validator: \"[0-9A-Za-z!#$%&'*+/=?^_`{|}~\\-]\",\n                    cardinality: 1,\n                    casing: \"lower\"\n                }\n            }\n        });        \n    }\n\n    return {\n        // public functions\n        init: function() {\n            demos(); \n        }\n    };\n}();\n\njQuery(document).ready(function() {\n    KTInputmask.init();\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/crud/forms/widgets/input-mask.js?");

/***/ })

/******/ });