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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/components/extended/toastr.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/components/extended/toastr.js":
/*!************************************************************!*\
  !*** ../src/assets/js/pages/components/extended/toastr.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Class definition\nvar KTToastrDemo = function() {\n\n    // Private functions\n\n    // basic demo\n    var demo = function() {\n        var i = -1;\n        var toastCount = 0;\n        var $toastlast;\n\n        var getMessage = function () {\n            var msgs = [\n                'New order has been placed!',\n                'Are you the six fingered man?',\n                'Inconceivable!',\n                'I do not think that means what you think it means.',\n                'Have fun storming the castle!'\n            ];\n            i++;\n            if (i === msgs.length) {\n                i = 0;\n            }\n\n            return msgs[i];\n        };\n\n        var getMessageWithClearButton = function (msg) {\n            msg = msg ? msg : 'Clear itself?';\n            msg += '<br /><br /><button type=\"button\" class=\"btn btn-outline-light btn-sm--air--wide clear\">Yes</button>';\n            return msg;\n        };\n\n        $('#showtoast').click(function () {\n            var shortCutFunction = $(\"#toastTypeGroup input:radio:checked\").val();\n            var msg = $('#message').val();\n            var title = $('#title').val() || '';\n            var $showDuration = $('#showDuration');\n            var $hideDuration = $('#hideDuration');\n            var $timeOut = $('#timeOut');\n            var $extendedTimeOut = $('#extendedTimeOut');\n            var $showEasing = $('#showEasing');\n            var $hideEasing = $('#hideEasing');\n            var $showMethod = $('#showMethod');\n            var $hideMethod = $('#hideMethod');\n            var toastIndex = toastCount++;\n            var addClear = $('#addClear').prop('checked');\n\n            toastr.options = {\n                closeButton: $('#closeButton').prop('checked'),\n                debug: $('#debugInfo').prop('checked'),\n                newestOnTop: $('#newestOnTop').prop('checked'),\n                progressBar: $('#progressBar').prop('checked'),\n                positionClass: $('#positionGroup input:radio:checked').val() || 'toast-top-right',\n                preventDuplicates: $('#preventDuplicates').prop('checked'),\n                onclick: null\n            };\n\n            if ($('#addBehaviorOnToastClick').prop('checked')) {\n                toastr.options.onclick = function () {\n                    alert('You can perform some custom action after a toast goes away');\n                };\n            }\n\n            if ($showDuration.val().length) {\n                toastr.options.showDuration = $showDuration.val();\n            }\n\n            if ($hideDuration.val().length) {\n                toastr.options.hideDuration = $hideDuration.val();\n            }\n\n            if ($timeOut.val().length) {\n                toastr.options.timeOut = addClear ? 0 : $timeOut.val();\n            }\n\n            if ($extendedTimeOut.val().length) {\n                toastr.options.extendedTimeOut = addClear ? 0 : $extendedTimeOut.val();\n            }\n\n            if ($showEasing.val().length) {\n                toastr.options.showEasing = $showEasing.val();\n            }\n\n            if ($hideEasing.val().length) {\n                toastr.options.hideEasing = $hideEasing.val();\n            }\n\n            if ($showMethod.val().length) {\n                toastr.options.showMethod = $showMethod.val();\n            }\n\n            if ($hideMethod.val().length) {\n                toastr.options.hideMethod = $hideMethod.val();\n            }\n\n            if (addClear) {\n                msg = getMessageWithClearButton(msg);\n                toastr.options.tapToDismiss = false;\n            }\n            if (!msg) {\n                msg = getMessage();\n            }\n\n            $('#toastrOptions').text(\n                    'toastr.options = '\n                    + JSON.stringify(toastr.options, null, 2)\n                    + ';'\n                    + '\\n\\ntoastr.'\n                    + shortCutFunction\n                    + '(\"'\n                    + msg\n                    + (title ? '\", \"' + title : '')\n                    + '\");'\n            );\n\n            var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists\n            $toastlast = $toast;\n\n            if(typeof $toast === 'undefined'){\n                return;\n            }\n\n            if ($toast.find('#okBtn').length) {\n                $toast.delegate('#okBtn', 'click', function () {\n                    alert('you clicked me. i was toast #' + toastIndex + '. goodbye!');\n                    $toast.remove();\n                });\n            }\n            if ($toast.find('#surpriseBtn').length) {\n                $toast.delegate('#surpriseBtn', 'click', function () {\n                    alert('Surprise! you clicked me. i was toast #' + toastIndex + '. You could perform an action here.');\n                });\n            }\n            if ($toast.find('.clear').length) {\n                $toast.delegate('.clear', 'click', function () {\n                    toastr.clear($toast, { force: true });\n                });\n            }\n        });\n\n        function getLastToast(){\n            return $toastlast;\n        }\n        $('#clearlasttoast').click(function () {\n            toastr.clear(getLastToast());\n        });\n        $('#cleartoasts').click(function () {\n            toastr.clear();\n        });\n    }\n\n    return {\n        // public functions\n        init: function() {\n            demo();\n        }\n    };\n}();\n\njQuery(document).ready(function() {\n    KTToastrDemo.init();\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/components/extended/toastr.js?");

/***/ })

/******/ });