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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/crud/forms/widgets/bootstrap-daterangepicker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/crud/forms/widgets/bootstrap-daterangepicker.js":
/*!******************************************************************************!*\
  !*** ../src/assets/js/pages/crud/forms/widgets/bootstrap-daterangepicker.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Class definition\n\nvar KTBootstrapDaterangepicker = function () {\n    \n    // Private functions\n    var demos = function () {\n        // minimum setup\n        $('#kt_daterangepicker_1, #kt_daterangepicker_1_modal').daterangepicker({\n            buttonClasses: ' btn',\n            applyClass: 'btn-primary',\n            cancelClass: 'btn-secondary'\n        });\n\n        // input group and left alignment setup\n        $('#kt_daterangepicker_2').daterangepicker({\n            buttonClasses: ' btn',\n            applyClass: 'btn-primary',\n            cancelClass: 'btn-secondary'\n        }, function(start, end, label) {\n            $('#kt_daterangepicker_2 .form-control').val( start.format('YYYY-MM-DD') + ' / ' + end.format('YYYY-MM-DD'));\n        });\n\n         $('#kt_daterangepicker_2_modal').daterangepicker({\n            buttonClasses: ' btn',\n            applyClass: 'btn-primary',\n            cancelClass: 'btn-secondary'\n        }, function(start, end, label) {\n            $('#kt_daterangepicker_2 .form-control').val( start.format('YYYY-MM-DD') + ' / ' + end.format('YYYY-MM-DD'));\n        });\n\n        // left alignment setup\n        $('#kt_daterangepicker_3').daterangepicker({\n            buttonClasses: ' btn',\n            applyClass: 'btn-primary',\n            cancelClass: 'btn-secondary'\n        }, function(start, end, label) {\n            $('#kt_daterangepicker_3 .form-control').val( start.format('YYYY-MM-DD') + ' / ' + end.format('YYYY-MM-DD'));\n        });\n\n        $('#kt_daterangepicker_3_modal').daterangepicker({\n            buttonClasses: ' btn',\n            applyClass: 'btn-primary',\n            cancelClass: 'btn-secondary'\n        }, function(start, end, label) {\n            $('#kt_daterangepicker_3 .form-control').val( start.format('YYYY-MM-DD') + ' / ' + end.format('YYYY-MM-DD'));\n        });\n\n\n        // date & time\n        $('#kt_daterangepicker_4').daterangepicker({\n            buttonClasses: ' btn',\n            applyClass: 'btn-primary',\n            cancelClass: 'btn-secondary',\n\n            timePicker: true,\n            timePickerIncrement: 30,\n            locale: {\n                format: 'MM/DD/YYYY h:mm A'\n            }\n        }, function(start, end, label) {\n            $('#kt_daterangepicker_4 .form-control').val( start.format('MM/DD/YYYY h:mm A') + ' / ' + end.format('MM/DD/YYYY h:mm A'));\n        });\n\n        // date picker\n        $('#kt_daterangepicker_5').daterangepicker({\n            buttonClasses: ' btn',\n            applyClass: 'btn-primary',\n            cancelClass: 'btn-secondary',\n\n            singleDatePicker: true,\n            showDropdowns: true,\n            locale: {\n                format: 'MM/DD/YYYY'\n            }\n        }, function(start, end, label) {\n            $('#kt_daterangepicker_5 .form-control').val( start.format('MM/DD/YYYY') + ' / ' + end.format('MM/DD/YYYY'));\n        });\n\n        // predefined ranges\n        var start = moment().subtract(29, 'days');\n        var end = moment();\n\n        $('#kt_daterangepicker_6').daterangepicker({\n            buttonClasses: ' btn',\n            applyClass: 'btn-primary',\n            cancelClass: 'btn-secondary',\n\n            startDate: start,\n            endDate: end,\n            ranges: {\n               'Today': [moment(), moment()],\n               'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],\n               'Last 7 Days': [moment().subtract(6, 'days'), moment()],\n               'Last 30 Days': [moment().subtract(29, 'days'), moment()],\n               'This Month': [moment().startOf('month'), moment().endOf('month')],\n               'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]\n            }\n        }, function(start, end, label) {\n            $('#kt_daterangepicker_6 .form-control').val( start.format('MM/DD/YYYY') + ' / ' + end.format('MM/DD/YYYY'));\n        });\n    }\n\n    var validationDemos = function() {\n        // input group and left alignment setup\n        $('#kt_daterangepicker_1_validate').daterangepicker({\n            buttonClasses: ' btn',\n            applyClass: 'btn-primary',\n            cancelClass: 'btn-secondary'\n        }, function(start, end, label) {\n            $('#kt_daterangepicker_1_validate .form-control').val( start.format('YYYY-MM-DD') + ' / ' + end.format('YYYY-MM-DD'));\n        });\n\n        // input group and left alignment setup\n        $('#kt_daterangepicker_2_validate').daterangepicker({\n            buttonClasses: ' btn',\n            applyClass: 'btn-primary',\n            cancelClass: 'btn-secondary'\n        }, function(start, end, label) {\n            $('#kt_daterangepicker_3_validate .form-control').val( start.format('YYYY-MM-DD') + ' / ' + end.format('YYYY-MM-DD'));\n        });\n\n        // input group and left alignment setup\n        $('#kt_daterangepicker_3_validate').daterangepicker({\n            buttonClasses: ' btn',\n            applyClass: 'btn-primary',\n            cancelClass: 'btn-secondary'\n        }, function(start, end, label) {\n            $('#kt_daterangepicker_3_validate .form-control').val( start.format('YYYY-MM-DD') + ' / ' + end.format('YYYY-MM-DD'));\n        });        \n    }\n\n    return {\n        // public functions\n        init: function() {\n            demos(); \n            validationDemos();\n        }\n    };\n}();\n\njQuery(document).ready(function() {\n    KTBootstrapDaterangepicker.init();\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/crud/forms/widgets/bootstrap-daterangepicker.js?");

/***/ })

/******/ });