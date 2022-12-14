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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/custom/wizard/wizard-2.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/custom/wizard/wizard-2.js":
/*!********************************************************!*\
  !*** ../src/assets/js/pages/custom/wizard/wizard-2.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Class definition\nvar KTWizard2 = function () {\n    // Base elements\n    var wizardEl;\n    var formEl;\n    var validator;\n    var wizard;\n\n    // Private functions\n    var initWizard = function () {\n        // Initialize form wizard\n        wizard = new KTWizard('kt_wizard_v2', {\n            startStep: 1, // initial active step number\n\t\t\tclickableSteps: true  // allow step clicking\n        });\n\n        // Validation before going to next page\n        wizard.on('beforeNext', function(wizardObj) {\n            if (validator.form() !== true) {\n                wizardObj.stop();  // don't go to the next step\n            }\n        });\n\n        wizard.on('beforePrev', function(wizardObj) {\n\t\t\tif (validator.form() !== true) {\n\t\t\t\twizardObj.stop();  // don't go to the next step\n\t\t\t}\n\t\t});\n\n        // Change event\n        wizard.on('change', function(wizard) {\n            KTUtil.scrollTop();\n        });\n    }\n\n    var initValidation = function() {\n        validator = formEl.validate({\n            // Validate only visible fields\n            ignore: \":hidden\",\n\n            // Validation rules\n            rules: {\n               \t//= Step 1\n\t\t\t\tfname: {\n\t\t\t\t\trequired: true\n\t\t\t\t},\n\t\t\t\tlname: {\n\t\t\t\t\trequired: true\n\t\t\t\t},\n\t\t\t\tphone: {\n\t\t\t\t\trequired: true\n\t\t\t\t},\n\t\t\t\temaul: {\n\t\t\t\t\trequired: true,\n\t\t\t\t\temail: true\n\t\t\t\t},\n\n\t\t\t\t//= Step 2\n\t\t\t\taddress1: {\n\t\t\t\t\trequired: true\n\t\t\t\t},\n\t\t\t\tpostcode: {\n\t\t\t\t\trequired: true\n\t\t\t\t},\n\t\t\t\tcity: {\n\t\t\t\t\trequired: true\n\t\t\t\t},\n\t\t\t\tstate: {\n\t\t\t\t\trequired: true\n\t\t\t\t},\n\t\t\t\tcountry: {\n\t\t\t\t\trequired: true\n\t\t\t\t},\n\n\t\t\t\t//= Step 3\n\t\t\t\tdelivery: {\n\t\t\t\t\trequired: true\n\t\t\t\t},\n\t\t\t\tpackaging: {\n\t\t\t\t\trequired: true\n\t\t\t\t},\n\t\t\t\tpreferreddelivery: {\n\t\t\t\t\trequired: true\n\t\t\t\t},\n\n\t\t\t\t//= Step 4\n\t\t\t\tlocaddress1: {\n\t\t\t\t\trequired: true\n\t\t\t\t},\n\t\t\t\tlocpostcode: {\n\t\t\t\t\trequired: true\n\t\t\t\t},\n\t\t\t\tloccity: {\n\t\t\t\t\trequired: true\n\t\t\t\t},\n\t\t\t\tlocstate: {\n\t\t\t\t\trequired: true\n\t\t\t\t},\n\t\t\t\tloccountry: {\n\t\t\t\t\trequired: true\n\t\t\t\t},\n\n\t\t\t\t//= Step 5\n\t\t\t\tccname: {\n\t\t\t\t\trequired: true\n\t\t\t\t},\n\t\t\t\tccnumber: {\n\t\t\t\t\trequired: true,\n\t\t\t\t\tcreditcard: true\n\t\t\t\t},\n\t\t\t\tccmonth: {\n\t\t\t\t\trequired: true\n\t\t\t\t},\n\t\t\t\tccyear: {\n\t\t\t\t\trequired: true\n\t\t\t\t},\n\t\t\t\tcccvv: {\n\t\t\t\t\trequired: true,\n\t\t\t\t\tminlength: 2,\n\t\t\t\t\tmaxlength: 3\n\t\t\t\t},\n            },\n\n            // Display error\n            invalidHandler: function(event, validator) {\n                KTUtil.scrollTop();\n\n                swal.fire({\n                    \"title\": \"\",\n                    \"text\": \"There are some errors in your submission. Please correct them.\",\n                    \"type\": \"error\",\n                    \"confirmButtonClass\": \"btn btn-secondary\"\n                });\n            },\n\n            // Submit valid form\n            submitHandler: function (form) {\n\n            }\n        });\n    }\n\n    var initSubmit = function() {\n        var btn = formEl.find('[data-ktwizard-type=\"action-submit\"]');\n\n        btn.on('click', function(e) {\n            e.preventDefault();\n\n            if (validator.form()) {\n                // See: src\\js\\framework\\base\\app.js\n                KTApp.progress(btn);\n                //KTApp.block(formEl);\n\n                // See: http://malsup.com/jquery/form/#ajaxSubmit\n                formEl.ajaxSubmit({\n                    success: function() {\n                        KTApp.unprogress(btn);\n                        //KTApp.unblock(formEl);\n\n                        swal.fire({\n                            \"title\": \"\",\n                            \"text\": \"The application has been successfully submitted!\",\n                            \"type\": \"success\",\n                            \"confirmButtonClass\": \"btn btn-secondary\"\n                        });\n                    }\n                });\n            }\n        });\n    }\n\n    return {\n        // public functions\n        init: function() {\n            wizardEl = KTUtil.get('kt_wizard_v2');\n            formEl = $('#kt_form');\n\n            initWizard();\n            initValidation();\n            initSubmit();\n        }\n    };\n}();\n\njQuery(document).ready(function() {\n    KTWizard2.init();\n});\n\n\n//# sourceURL=webpack:///../src/assets/js/pages/custom/wizard/wizard-2.js?");

/***/ })

/******/ });