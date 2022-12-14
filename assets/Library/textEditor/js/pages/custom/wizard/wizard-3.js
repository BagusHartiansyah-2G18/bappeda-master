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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/custom/wizard/wizard-3.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/custom/wizard/wizard-3.js":
/*!********************************************************!*\
  !*** ../src/assets/js/pages/custom/wizard/wizard-3.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Class definition\nvar KTWizard3 = function () {\n\t// Base elements\n\tvar wizardEl;\n\tvar formEl;\n\tvar validator;\n\tvar wizard;\n\n\t// Private functions\n\tvar initWizard = function () {\n\t\t// Initialize form wizard\n\t\twizard = new KTWizard('kt_wizard_v3', {\n\t\t\tstartStep: 1, // initial active step number\n\t\t\tclickableSteps: true  // allow step clicking\n\t\t});\n\n\t\t// Validation before going to next page\n\t\twizard.on('beforeNext', function(wizardObj) {\n\t\t\tif (validator.form() !== true) {\n\t\t\t\twizardObj.stop();  // don't go to the next step\n\t\t\t}\n\t\t});\n\n\t\twizard.on('beforePrev', function(wizardObj) {\n\t\t\tif (validator.form() !== true) {\n\t\t\t\twizardObj.stop();  // don't go to the next step\n\t\t\t}\n\t\t});\n\n\t\t// Change event\n\t\twizard.on('change', function(wizard) {\n\t\t\tKTUtil.scrollTop();\n\t\t});\n\t}\n\n\tvar initValidation = function() {\n\t\tvalidator = formEl.validate({\n\t\t\t// Validate only visible fields\n\t\t\tignore: \":hidden\",\n\n\t\t\t// Validation rules\n\t\t\trules: {\n\t\t\t\t//= Step 1\n\t\t\t\taddress1: {\n\t\t\t\t\trequired: true\n\t\t\t\t},\n\t\t\t\tpostcode: {\n\t\t\t\t\trequired: true\n\t\t\t\t},\n\t\t\t\tcity: {\n\t\t\t\t\trequired: true\n\t\t\t\t},\n\t\t\t\tstate: {\n\t\t\t\t\trequired: true\n\t\t\t\t},\n\t\t\t\tcountry: {\n\t\t\t\t\trequired: true\n\t\t\t\t},\n\n\t\t\t\t//= Step 2\n\t\t\t\tpackage: {\n\t\t\t\t\trequired: true\n\t\t\t\t},\n\t\t\t\tweight: {\n\t\t\t\t\trequired: true\n\t\t\t\t},\n\t\t\t\twidth: {\n\t\t\t\t\trequired: true\n\t\t\t\t},\n\t\t\t\theight: {\n\t\t\t\t\trequired: true\n\t\t\t\t},\n\t\t\t\tlength: {\n\t\t\t\t\trequired: true\n\t\t\t\t},\n\n\t\t\t\t//= Step 3\n\t\t\t\tdelivery: {\n\t\t\t\t\trequired: true\n\t\t\t\t},\n\t\t\t\tpackaging: {\n\t\t\t\t\trequired: true\n\t\t\t\t},\n\t\t\t\tpreferreddelivery: {\n\t\t\t\t\trequired: true\n\t\t\t\t},\n\n\t\t\t\t//= Step 4\n\t\t\t\tlocaddress1: {\n\t\t\t\t\trequired: true\n\t\t\t\t},\n\t\t\t\tlocpostcode: {\n\t\t\t\t\trequired: true\n\t\t\t\t},\n\t\t\t\tloccity: {\n\t\t\t\t\trequired: true\n\t\t\t\t},\n\t\t\t\tlocstate: {\n\t\t\t\t\trequired: true\n\t\t\t\t},\n\t\t\t\tloccountry: {\n\t\t\t\t\trequired: true\n\t\t\t\t},\n\t\t\t},\n\n\t\t\t// Display error\n\t\t\tinvalidHandler: function(event, validator) {\n\t\t\t\tKTUtil.scrollTop();\n\n\t\t\t\tswal.fire({\n\t\t\t\t\t\"title\": \"\",\n\t\t\t\t\t\"text\": \"There are some errors in your submission. Please correct them.\",\n\t\t\t\t\t\"type\": \"error\",\n\t\t\t\t\t\"confirmButtonClass\": \"btn btn-secondary\"\n\t\t\t\t});\n\t\t\t},\n\n\t\t\t// Submit valid form\n\t\t\tsubmitHandler: function (form) {\n\n\t\t\t}\n\t\t});\n\t}\n\n\tvar initSubmit = function() {\n\t\tvar btn = formEl.find('[data-ktwizard-type=\"action-submit\"]');\n\n\t\tbtn.on('click', function(e) {\n\t\t\te.preventDefault();\n\n\t\t\tif (validator.form()) {\n\t\t\t\t// See: src\\js\\framework\\base\\app.js\n\t\t\t\tKTApp.progress(btn);\n\t\t\t\t//KTApp.block(formEl);\n\n\t\t\t\t// See: http://malsup.com/jquery/form/#ajaxSubmit\n\t\t\t\tformEl.ajaxSubmit({\n\t\t\t\t\tsuccess: function() {\n\t\t\t\t\t\tKTApp.unprogress(btn);\n\t\t\t\t\t\t//KTApp.unblock(formEl);\n\n\t\t\t\t\t\tswal.fire({\n\t\t\t\t\t\t\t\"title\": \"\",\n\t\t\t\t\t\t\t\"text\": \"The application has been successfully submitted!\",\n\t\t\t\t\t\t\t\"type\": \"success\",\n\t\t\t\t\t\t\t\"confirmButtonClass\": \"btn btn-secondary\"\n\t\t\t\t\t\t});\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t}\n\t\t});\n\t}\n\n\treturn {\n\t\t// public functions\n\t\tinit: function() {\n\t\t\twizardEl = KTUtil.get('kt_wizard_v3');\n\t\t\tformEl = $('#kt_form');\n\n\t\t\tinitWizard();\n\t\t\tinitValidation();\n\t\t\tinitSubmit();\n\t\t}\n\t};\n}();\n\njQuery(document).ready(function() {\n\tKTWizard3.init();\n});\n\n\n//# sourceURL=webpack:///../src/assets/js/pages/custom/wizard/wizard-3.js?");

/***/ })

/******/ });