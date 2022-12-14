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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/components/extended/bootstrap-notify.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/components/extended/bootstrap-notify.js":
/*!**********************************************************************!*\
  !*** ../src/assets/js/pages/components/extended/bootstrap-notify.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Class definition\n\nvar KTBootstrapNotifyDemo = function () {\n    \n    // Private functions\n\n    // basic demo\n    var demo = function () {\n        // init bootstrap switch\n        $('[data-switch=true]').bootstrapSwitch();\n\n        // handle the demo\n        $('#kt_notify_btn').click(function() {\n            var content = {};\n\n            content.message = 'New order has been placed';\n            if ($('#kt_notify_title').prop('checked')) {\n                content.title = 'Notification Title';\n            }\n            if ($('#kt_notify_icon').val() != '') {\n                content.icon = 'icon ' + $('#kt_notify_icon').val();\n            }\n            if ($('#kt_notify_url').prop('checked')) {\n                content.url = 'www.keenthemes.com';\n                content.target = '_blank';\n            }\n\n            var notify = $.notify(content, { \n                type: $('#kt_notify_state').val(),\n                allow_dismiss: $('#kt_notify_dismiss').prop('checked'),\n                newest_on_top: $('#kt_notify_top').prop('checked'),\n                mouse_over:  $('#kt_notify_pause').prop('checked'),\n                showProgressbar:  $('#kt_notify_progress').prop('checked'),\n                spacing: $('#kt_notify_spacing').val(),                    \n                timer: $('#kt_notify_timer').val(),\n                placement: {\n                    from: $('#kt_notify_placement_from').val(), \n                    align: $('#kt_notify_placement_align').val()\n                },\n                offset: {\n                    x: $('#kt_notify_offset_x').val(), \n                    y: $('#kt_notify_offset_y').val()\n                },\n                delay: $('#kt_notify_delay').val(),\n                z_index: $('#kt_notify_zindex').val(),\n                animate: {\n                    enter: 'animated ' + $('#kt_notify_animate_enter').val(),\n                    exit: 'animated ' + $('#kt_notify_animate_exit').val()\n                }\n            });\n\n            if ($('#kt_notify_progress').prop('checked')) {\n                setTimeout(function() {\n                    notify.update('message', '<strong>Saving</strong> Page Data.');\n                    notify.update('type', 'primary');\n                    notify.update('progress', 20);\n                }, 1000);\n\n                setTimeout(function() {\n                    notify.update('message', '<strong>Saving</strong> User Data.');\n                    notify.update('type', 'warning');\n                    notify.update('progress', 40);\n                }, 2000);\n\n                setTimeout(function() {\n                    notify.update('message', '<strong>Saving</strong> Profile Data.');\n                    notify.update('type', 'danger');\n                    notify.update('progress', 65);\n                }, 3000);\n\n                setTimeout(function() {\n                    notify.update('message', '<strong>Checking</strong> for errors.');\n                    notify.update('type', 'success');\n                    notify.update('progress', 100);\n                }, 4000);\n            }\n        });\n    }\n\n    return {\n        // public functions\n        init: function() {\n            demo();\n        }\n    };\n}();\n\njQuery(document).ready(function() {    \n    KTBootstrapNotifyDemo.init();\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/components/extended/bootstrap-notify.js?");

/***/ })

/******/ });