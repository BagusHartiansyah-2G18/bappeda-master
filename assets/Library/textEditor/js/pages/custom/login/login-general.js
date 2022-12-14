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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/custom/login/login-general.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/custom/login/login-general.js":
/*!************************************************************!*\
  !*** ../src/assets/js/pages/custom/login/login-general.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Class Definition\nvar KTLoginGeneral = function() {\n\n    var login = $('#kt_login');\n\n    var showErrorMsg = function(form, type, msg) {\n        var alert = $('<div class=\"alert alert-' + type + ' alert-dismissible\" role=\"alert\">\\\n\t\t\t<div class=\"alert-text\">'+msg+'</div>\\\n\t\t\t<div class=\"alert-close\">\\\n                <i class=\"flaticon2-cross kt-icon-sm\" data-dismiss=\"alert\"></i>\\\n            </div>\\\n\t\t</div>');\n\n        form.find('.alert').remove();\n        alert.prependTo(form);\n        //alert.animateClass('fadeIn animated');\n        KTUtil.animateClass(alert[0], 'fadeIn animated');\n        alert.find('span').html(msg);\n    }\n\n    // Private Functions\n    var displaySignUpForm = function() {\n        login.removeClass('kt-login--forgot');\n        login.removeClass('kt-login--signin');\n\n        login.addClass('kt-login--signup');\n        KTUtil.animateClass(login.find('.kt-login__signup')[0], 'flipInX animated');\n    }\n\n    var displaySignInForm = function() {\n        login.removeClass('kt-login--forgot');\n        login.removeClass('kt-login--signup');\n\n        login.addClass('kt-login--signin');\n        KTUtil.animateClass(login.find('.kt-login__signin')[0], 'flipInX animated');\n        //login.find('.kt-login__signin').animateClass('flipInX animated');\n    }\n\n    var displayForgotForm = function() {\n        login.removeClass('kt-login--signin');\n        login.removeClass('kt-login--signup');\n\n        login.addClass('kt-login--forgot');\n        //login.find('.kt-login--forgot').animateClass('flipInX animated');\n        KTUtil.animateClass(login.find('.kt-login__forgot')[0], 'flipInX animated');\n\n    }\n\n    var handleFormSwitch = function() {\n        $('#kt_login_forgot').click(function(e) {\n            e.preventDefault();\n            displayForgotForm();\n        });\n\n        $('#kt_login_forgot_cancel').click(function(e) {\n            e.preventDefault();\n            displaySignInForm();\n        });\n\n        $('#kt_login_signup').click(function(e) {\n            e.preventDefault();\n            displaySignUpForm();\n        });\n\n        $('#kt_login_signup_cancel').click(function(e) {\n            e.preventDefault();\n            displaySignInForm();\n        });\n    }\n\n    var handleSignInFormSubmit = function() {\n        $('#kt_login_signin_submit').click(function(e) {\n            e.preventDefault();\n            var btn = $(this);\n            var form = $(this).closest('form');\n\n            form.validate({\n                rules: {\n                    email: {\n                        required: true,\n                        email: true\n                    },\n                    password: {\n                        required: true\n                    }\n                }\n            });\n\n            if (!form.valid()) {\n                return;\n            }\n\n            btn.addClass('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light').attr('disabled', true);\n\n            form.ajaxSubmit({\n                url: '',\n                success: function(response, status, xhr, $form) {\n                \t// similate 2s delay\n                \tsetTimeout(function() {\n\t                    btn.removeClass('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light').attr('disabled', false);\n\t                    showErrorMsg(form, 'danger', 'Incorrect username or password. Please try again.');\n                    }, 2000);\n                }\n            });\n        });\n    }\n\n    var handleSignUpFormSubmit = function() {\n        $('#kt_login_signup_submit').click(function(e) {\n            e.preventDefault();\n\n            var btn = $(this);\n            var form = $(this).closest('form');\n\n            form.validate({\n                rules: {\n                    fullname: {\n                        required: true\n                    },\n                    email: {\n                        required: true,\n                        email: true\n                    },\n                    password: {\n                        required: true\n                    },\n                    rpassword: {\n                        required: true\n                    },\n                    agree: {\n                        required: true\n                    }\n                }\n            });\n\n            if (!form.valid()) {\n                return;\n            }\n\n            btn.addClass('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light').attr('disabled', true);\n\n            form.ajaxSubmit({\n                url: '',\n                success: function(response, status, xhr, $form) {\n                \t// similate 2s delay\n                \tsetTimeout(function() {\n\t                    btn.removeClass('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light').attr('disabled', false);\n\t                    form.clearForm();\n\t                    form.validate().resetForm();\n\n\t                    // display signup form\n\t                    displaySignInForm();\n\t                    var signInForm = login.find('.kt-login__signin form');\n\t                    signInForm.clearForm();\n\t                    signInForm.validate().resetForm();\n\n\t                    showErrorMsg(signInForm, 'success', 'Thank you. To complete your registration please check your email.');\n\t                }, 2000);\n                }\n            });\n        });\n    }\n\n    var handleForgotFormSubmit = function() {\n        $('#kt_login_forgot_submit').click(function(e) {\n            e.preventDefault();\n\n            var btn = $(this);\n            var form = $(this).closest('form');\n\n            form.validate({\n                rules: {\n                    email: {\n                        required: true,\n                        email: true\n                    }\n                }\n            });\n\n            if (!form.valid()) {\n                return;\n            }\n\n            btn.addClass('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light').attr('disabled', true);\n\n            form.ajaxSubmit({\n                url: '',\n                success: function(response, status, xhr, $form) {\n                \t// similate 2s delay\n                \tsetTimeout(function() {\n                \t\tbtn.removeClass('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light').attr('disabled', false); // remove\n\t                    form.clearForm(); // clear form\n\t                    form.validate().resetForm(); // reset validation states\n\n\t                    // display signup form\n\t                    displaySignInForm();\n\t                    var signInForm = login.find('.kt-login__signin form');\n\t                    signInForm.clearForm();\n\t                    signInForm.validate().resetForm();\n\n\t                    showErrorMsg(signInForm, 'success', 'Cool! Password recovery instruction has been sent to your email.');\n                \t}, 2000);\n                }\n            });\n        });\n    }\n\n    // Public Functions\n    return {\n        // public functions\n        init: function() {\n            handleFormSwitch();\n            handleSignInFormSubmit();\n            handleSignUpFormSubmit();\n            handleForgotFormSubmit();\n        }\n    };\n}();\n\n// Class Initialization\njQuery(document).ready(function() {\n    KTLoginGeneral.init();\n});\n\n\n//# sourceURL=webpack:///../src/assets/js/pages/custom/login/login-general.js?");

/***/ })

/******/ });