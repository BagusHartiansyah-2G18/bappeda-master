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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/custom/chat/chat.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/custom/chat/chat.js":
/*!**************************************************!*\
  !*** ../src/assets/js/pages/custom/chat/chat.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Class definition\nvar KTAppChat = function () {\n\tvar chatAsideEl;\n\tvar chatContentEl;\n\n\t// Private functions\n\tvar initAside = function () {\n\t\t// Mobile offcanvas for mobile mode\n\t\tvar offcanvas = new KTOffcanvas(chatAsideEl, {\n            overlay: true,  \n            baseClass: 'kt-app__aside',\n            closeBy: 'kt_chat_aside_close',\n            toggleBy: 'kt_chat_aside_mobile_toggle'\n        }); \n\n\t\t// User listing \n\t\tvar userListEl = KTUtil.find(chatAsideEl, '.kt-scroll');\n\t\tif (!userListEl) {\n\t\t\treturn;\n\t\t}\n\n\t\t// Initialize perfect scrollbar(see:  https://github.com/utatti/perfect-scrollbar) \n\t\tKTUtil.scrollInit(userListEl, {\n\t\t\tmobileNativeScroll: true,  // enable native scroll for mobile\n\t\t\tdesktopNativeScroll: false, // disable native scroll and use custom scroll for desktop \n\t\t\tresetHeightOnDestroy: true,  // reset css height on scroll feature destroyed\n\t\t\thandleWindowResize: true, // recalculate hight on window resize\n\t\t\trememberPosition: true, // remember scroll position in cookie\n\t\t\theight: function() {  // calculate height\n\t\t\t\tvar height;\n\t\t\t\tvar portletBodyEl = KTUtil.find(chatAsideEl, '.kt-portlet > .kt-portlet__body');\n\t\t\t\tvar widgetEl = KTUtil.find(chatAsideEl, '.kt-widget.kt-widget--users');\n\t\t\t\tvar searchbarEl = KTUtil.find(chatAsideEl, '.kt-searchbar');\n\n\t\t\t\tif (KTUtil.isInResponsiveRange('desktop')) {\n\t\t\t\t\theight = KTLayout.getContentHeight();\n\t\t\t\t} else {\n\t\t\t\t\theight = KTUtil.getViewPort().height;\n\t\t\t\t}\n\n\t\t\t\tif (chatAsideEl) {\n\t\t\t\t\theight = height - parseInt(KTUtil.css(chatAsideEl, 'margin-top')) - parseInt(KTUtil.css(chatAsideEl, 'margin-bottom'));\n\t\t\t\t\theight = height - parseInt(KTUtil.css(chatAsideEl, 'padding-top')) - parseInt(KTUtil.css(chatAsideEl, 'padding-bottom'));\n\t\t\t\t}\n\n\t\t\t\tif (widgetEl) {\n\t\t\t\t\theight = height - parseInt(KTUtil.css(widgetEl, 'margin-top')) - parseInt(KTUtil.css(widgetEl, 'margin-bottom'));\n\t\t\t\t\theight = height - parseInt(KTUtil.css(widgetEl, 'padding-top')) - parseInt(KTUtil.css(widgetEl, 'padding-bottom'));\n\t\t\t\t}\n\n\t\t\t\tif (portletBodyEl) {\n\t\t\t\t\theight = height - parseInt(KTUtil.css(portletBodyEl, 'margin-top')) - parseInt(KTUtil.css(portletBodyEl, 'margin-bottom'));\n\t\t\t\t\theight = height - parseInt(KTUtil.css(portletBodyEl, 'padding-top')) - parseInt(KTUtil.css(portletBodyEl, 'padding-bottom'));\n\t\t\t\t}\n\n\t\t\t\tif (searchbarEl) {\n\t\t\t\t\theight = height - parseInt(KTUtil.css(searchbarEl, 'height'));\n\t\t\t\t\theight = height - parseInt(KTUtil.css(searchbarEl, 'margin-top')) - parseInt(KTUtil.css(searchbarEl, 'margin-bottom'));\n\t\t\t\t}\n\n\t\t\t\t// remove additional space\n\t\t\t\theight = height - 5;\n\t\t\t\t\n\t\t\t\treturn height;\n\t\t\t} \n\t\t});\n\t}\n\n\treturn {\n\t\t// public functions\n\t\tinit: function() {\n\t\t\t// elements\n\t\t\tchatAsideEl = KTUtil.getByID('kt_chat_aside');\n\n\t\t\t// init aside and user list\n\t\t\tinitAside();\n\n\t\t\t// init inline chat example\n\t\t\tKTChat.setup(KTUtil.getByID('kt_chat_content'));\n\n\t\t\t// trigger click to show popup modal chat on page load\n\t\t\tif (KTUtil.getByID('kt_app_chat_launch_btn')) {\n\t\t\t\tsetTimeout(function() {\n\t\t\t\t\tKTUtil.getByID('kt_app_chat_launch_btn').click();\n\t\t\t\t}, 1000);\n\t\t\t}\n\t\t}\n\t};\n}();\n\nKTUtil.ready(function() {\t\n\tKTAppChat.init();\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/custom/chat/chat.js?");

/***/ })

/******/ });