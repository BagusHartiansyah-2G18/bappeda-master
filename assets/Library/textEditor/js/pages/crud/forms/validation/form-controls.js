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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/crud/forms/validation/form-controls.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/crud/forms/validation/form-controls.js":
/*!*********************************************************************!*\
  !*** ../src/assets/js/pages/crud/forms/validation/form-controls.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Class definition\n\nvar KTFormControls = function () {\n    // Private functions\n\n    var demo1 = function () {\n        $( \"#kt_form_1\" ).validate({\n            // define validation rules\n            rules: {\n                email: {\n                    required: true,\n                    email: true,\n                    minlength: 10\n                },\n                url: {\n                    required: true\n                },\n                digits: {\n                    required: true,\n                    digits: true\n                },\n                creditcard: {\n                    required: true,\n                    creditcard: true\n                },\n                phone: {\n                    required: true,\n                    phoneUS: true\n                },\n                option: {\n                    required: true\n                },\n                options: {\n                    required: true,\n                    minlength: 2,\n                    maxlength: 4\n                },\n                memo: {\n                    required: true,\n                    minlength: 10,\n                    maxlength: 100\n                },\n\n                checkbox: {\n                    required: true\n                },\n                checkboxes: {\n                    required: true,\n                    minlength: 1,\n                    maxlength: 2\n                },\n                radio: {\n                    required: true\n                }\n            },\n\n            errorPlacement: function(error, element) {\n                var group = element.closest('.input-group');\n                if (group.length) {\n                    group.after(error.addClass('invalid-feedback'));\n                } else {\n                    element.after(error.addClass('invalid-feedback'));\n                }\n            },\n\n            //display error alert on form submit\n            invalidHandler: function(event, validator) {\n                var alert = $('#kt_form_1_msg');\n                alert.removeClass('kt--hide').show();\n                KTUtil.scrollTop();\n            },\n\n            submitHandler: function (form) {\n                //form[0].submit(); // submit the form\n            }\n        });\n    }\n\n    var demo2 = function () {\n        $( \"#kt_form_2\" ).validate({\n            // define validation rules\n            rules: {\n                //= Client Information(step 3)\n                // Billing Information\n                billing_card_name: {\n                    required: true\n                },\n                billing_card_number: {\n                    required: true,\n                    creditcard: true\n                },\n                billing_card_exp_month: {\n                    required: true\n                },\n                billing_card_exp_year: {\n                    required: true\n                },\n                billing_card_cvv: {\n                    required: true,\n                    minlength: 2,\n                    maxlength: 3\n                },\n\n                // Billing Address\n                billing_address_1: {\n                    required: true\n                },\n                billing_address_2: {\n\n                },\n                billing_city: {\n                    required: true\n                },\n                billing_state: {\n                    required: true\n                },\n                billing_zip: {\n                    required: true,\n                    number: true\n                },\n\n                billing_delivery: {\n                    required: true\n                }\n            },\n\n            //display error alert on form submit\n            invalidHandler: function(event, validator) {\n                swal.fire({\n                    \"title\": \"\",\n                    \"text\": \"There are some errors in your submission. Please correct them.\",\n                    \"type\": \"error\",\n                    \"confirmButtonClass\": \"btn btn-secondary\",\n                    \"onClose\": function(e) {\n                        console.log('on close event fired!');\n                    }\n                });\n\n                event.preventDefault();\n            },\n\n            submitHandler: function (form) {\n                //form[0].submit(); // submit the form\n                swal.fire({\n                    \"title\": \"\",\n                    \"text\": \"Form validation passed. All good!\",\n                    \"type\": \"success\",\n                    \"confirmButtonClass\": \"btn btn-secondary\"\n                });\n\n                return false;\n            }\n        });\n    }\n\n    return {\n        // public functions\n        init: function() {\n            demo1();\n            demo2();\n        }\n    };\n}();\n\njQuery(document).ready(function() {\n    KTFormControls.init();\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/crud/forms/validation/form-controls.js?");

/***/ })

/******/ });