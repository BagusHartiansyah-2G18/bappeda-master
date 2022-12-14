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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/custom/login/login-1.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/custom/login/login-1.js":
/*!******************************************************!*\
  !*** ../src/assets/js/pages/custom/login/login-1.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Class Definition\nvar KTLoginV1 = function () {\n\tvar login = $('#kt_login');\n\n\tvar showErrorMsg = function(form, type, msg) {\n        var alert = $('<div class=\"alert alert-bold alert-solid-' + type + ' alert-dismissible\" role=\"alert\">\\\n\t\t\t<div class=\"alert-text\">'+msg+'</div>\\\n\t\t\t<div class=\"alert-close\">\\\n                <i class=\"flaticon2-cross kt-icon-sm\" data-dismiss=\"alert\"></i>\\\n            </div>\\\n\t\t</div>');\n\n        form.find('.alert').remove();\n        alert.prependTo(form);\n        KTUtil.animateClass(alert[0], 'fadeIn animated');\n    }\n\n\t// Private Functions\n\tvar handleSignInFormSubmit = function () {\n\t\t$('#kt_login_signin_submit').click(function (e) {\n\t\t\te.preventDefault();\n\n\t\t\tvar btn = $(this);\n\t\t\tvar form = $('#kt_login_form');\n\n\t\t\tform.validate({\n\t\t\t\trules: {\n\t\t\t\t\tusername: {\n\t\t\t\t\t\trequired: true\n\t\t\t\t\t},\n\t\t\t\t\tpassword: {\n\t\t\t\t\t\trequired: true\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t});\n\n\t\t\tif (!form.valid()) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tKTApp.progress(btn[0]);\n\n\t\t\tsetTimeout(function () {\n\t\t\t\tKTApp.unprogress(btn[0]);\n\t\t\t}, 2000);\n\n\t\t\t// ajax form submit:  http://jquery.malsup.com/form/\n\t\t\tform.ajaxSubmit({\n\t\t\t\turl: '',\n\t\t\t\tsuccess: function (response, status, xhr, $form) {\n\t\t\t\t\t// similate 2s delay\n\t\t\t\t\tsetTimeout(function () {\n\t\t\t\t\t\tKTApp.unprogress(btn[0]);\n\t\t\t\t\t\tshowErrorMsg(form, 'danger', 'Incorrect username or password. Please try again.');\n\t\t\t\t\t}, 2000);\n\t\t\t\t}\n\t\t\t});\n\t\t});\n\t}\n\n\t// Public Functions\n\treturn {\n\t\t// public functions\n\t\tinit: function () {\n\t\t\thandleSignInFormSubmit();\n\t\t}\n\t};\n}();\n\n// Class Initialization\njQuery(document).ready(function () {\n\tKTLoginV1.init();\n});\n\n\n//# sourceURL=webpack:///../src/assets/js/pages/custom/login/login-1.js?");

/***/ })

/******/ });