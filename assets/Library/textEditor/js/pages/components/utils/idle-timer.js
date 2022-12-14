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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/components/utils/idle-timer.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/components/utils/idle-timer.js":
/*!*************************************************************!*\
  !*** ../src/assets/js/pages/components/utils/idle-timer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar KTIdleTimerDemo = function() {\n\n    var demo1 = function() {\n        //Define default\n        var\n            docTimeout = 5000;\n\n        /*\n        Handle raised idle/active events\n        */\n        $(document).on(\"idle.idleTimer\", function(event, elem, obj) {\n            $(\"#docStatus\")\n                .val(function(i, v) {\n                    return v + \"Idle @ \" + moment().format() + \" \\n\";\n                })\n                .removeClass(\"alert-success\")\n                .addClass(\"alert-warning\")\n                .scrollTop($('#docStatus')[0].scrollHeight);\n        });\n        $(document).on(\"active.idleTimer\", function(event, elem, obj, e) {\n            $('#docStatus')\n                .val(function(i, v) {\n                    return v + \"Active [\" + e.type + \"] [\" + e.target.nodeName + \"] @ \" + moment().format() + \" \\n\";\n                })\n                .addClass(\"alert-success\")\n                .removeClass(\"alert-warning\")\n                .scrollTop($('#docStatus')[0].scrollHeight);\n        });\n\n        /*\n        Handle button events\n        */\n        $(\"#btPause\").click(function() {\n            $(document).idleTimer(\"pause\");\n            $('#docStatus')\n                .val(function(i, v) {\n                    return v + \"Paused @ \" + moment().format() + \" \\n\";\n                })\n                .scrollTop($('#docStatus')[0].scrollHeight);\n            $(this).blur();\n            return false;\n        });\n        $(\"#btResume\").click(function() {\n            $(document).idleTimer(\"resume\");\n            $('#docStatus')\n                .val(function(i, v) {\n                    return v + \"Resumed @ \" + moment().format() + \" \\n\";\n                })\n                .scrollTop($('#docStatus')[0].scrollHeight);\n            $(this).blur();\n            return false;\n        });\n        $(\"#btElapsed\").click(function() {\n            $('#docStatus')\n                .val(function(i, v) {\n                    return v + \"Elapsed (since becoming active): \" + $(document).idleTimer(\"getElapsedTime\") + \" \\n\";\n                })\n                .scrollTop($('#docStatus')[0].scrollHeight);\n            $(this).blur();\n            return false;\n        });\n        $(\"#btDestroy\").click(function() {\n            $(document).idleTimer(\"destroy\");\n            $('#docStatus')\n                .val(function(i, v) {\n                    return v + \"Destroyed: @ \" + moment().format() + \" \\n\";\n                })\n                .removeClass(\"alert-success\")\n                .removeClass(\"alert-warning\")\n                .scrollTop($('#docStatus')[0].scrollHeight);\n            $(this).blur();\n            return false;\n        });\n        $(\"#btInit\").click(function() {\n            // for demo purposes show init with just object\n            $(document).idleTimer({\n                timeout: docTimeout\n            });\n            $('#docStatus')\n                .val(function(i, v) {\n                    return v + \"Init: @ \" + moment().format() + \" \\n\";\n                })\n                .scrollTop($('#docStatus')[0].scrollHeight);\n\n            //Apply classes for default state\n            if ($(document).idleTimer(\"isIdle\")) {\n                $('#docStatus')\n                    .removeClass(\"alert-success\")\n                    .addClass(\"alert-warning\");\n            } else {\n                $('#docStatus')\n                    .addClass(\"alert-success\")\n                    .removeClass(\"alert-warning\");\n            }\n            $(this).blur();\n            return false;\n        });\n\n        //Clear old statuses\n        $('#docStatus').val('');\n\n        //Start timeout, passing no options\n        //Same as $.idleTimer(docTimeout, docOptions);\n        $(document).idleTimer(docTimeout);\n\n        //For demo purposes, style based on initial state\n        if ($(document).idleTimer(\"isIdle\")) {\n            $(\"#docStatus\")\n                .val(function(i, v) {\n                    return v + \"Initial Idle State @ \" + moment().format() + \" \\n\";\n                })\n                .removeClass(\"alert-success\")\n                .addClass(\"alert-warning\")\n                .scrollTop($('#docStatus')[0].scrollHeight);\n        } else {\n            $('#docStatus')\n                .val(function(i, v) {\n                    return v + \"Initial Active State @ \" + moment().format() + \" \\n\";\n                })\n                .addClass(\"alert-success\")\n                .removeClass(\"alert-warning\")\n                .scrollTop($('#docStatus')[0].scrollHeight);\n        }\n\n\n        //For demo purposes, display the actual timeout on the page\n        $('#docTimeout').text(docTimeout / 1000);\n\n    }\n\n    var demo2 = function() {\n        //Define textarea settings\n        var\n            taTimeout = 3000;\n\n        /*\n        Handle raised idle/active events\n        */\n        $('#elStatus').on(\"idle.idleTimer\", function(event, elem, obj) {\n            //If you dont stop propagation it will bubble up to document event handler\n            event.stopPropagation();\n\n            $('#elStatus')\n                .val(function(i, v) {\n                    return v + \"Idle @ \" + moment().format() + \" \\n\";\n                })\n                .removeClass(\"alert-success\")\n                .addClass(\"alert-warning\")\n                .scrollTop($('#elStatus')[0].scrollHeight);\n\n        });\n        $('#elStatus').on(\"active.idleTimer\", function(event) {\n            //If you dont stop propagation it will bubble up to document event handler\n            event.stopPropagation();\n\n            $('#elStatus')\n                .val(function(i, v) {\n                    return v + \"Active @ \" + moment().format() + \" \\n\";\n                })\n                .addClass(\"alert-success\")\n                .removeClass(\"alert-warning\")\n                .scrollTop($('#elStatus')[0].scrollHeight);\n        });\n\n        /*\n        Handle button events\n        */\n        $(\"#btReset\").click(function() {\n            $('#elStatus')\n                .idleTimer(\"reset\")\n                .val(function(i, v) {\n                    return v + \"Reset @ \" + moment().format() + \" \\n\";\n                })\n                .scrollTop($('#elStatus')[0].scrollHeight);\n\n            //Apply classes for default state\n            if ($(\"#elStatus\").idleTimer(\"isIdle\")) {\n                $('#elStatus')\n                    .removeClass(\"alert-success\")\n                    .addClass(\"alert-warning\");\n            } else {\n                $('#elStatus')\n                    .addClass(\"alert-success\")\n                    .removeClass(\"alert-warning\");\n            }\n            $(this).blur();\n            return false;\n        });\n        $(\"#btRemaining\").click(function() {\n            $('#elStatus')\n                .val(function(i, v) {\n                    return v + \"Remaining: \" + $(\"#elStatus\").idleTimer(\"getRemainingTime\") + \" \\n\";\n                })\n                .scrollTop($('#elStatus')[0].scrollHeight);\n            $(this).blur();\n            return false;\n        });\n        $(\"#btLastActive\").click(function() {\n            $('#elStatus')\n                .val(function(i, v) {\n                    return v + \"LastActive: \" + $(\"#elStatus\").idleTimer(\"getLastActiveTime\") + \" \\n\";\n                })\n                .scrollTop($('#elStatus')[0].scrollHeight);\n            $(this).blur();\n            return false;\n        });\n        $(\"#btState\").click(function() {\n            $('#elStatus')\n                .val(function(i, v) {\n                    return v + \"State: \" + ($(\"#elStatus\").idleTimer(\"isIdle\") ? \"idle\" : \"active\") + \" \\n\";\n                })\n                .scrollTop($('#elStatus')[0].scrollHeight);\n            $(this).blur();\n            return false;\n        });\n\n        //Clear value if there was one cached & start time\n        $('#elStatus').val('').idleTimer(taTimeout);\n\n        //For demo purposes, show initial state\n        if ($(\"#elStatus\").idleTimer(\"isIdle\")) {\n            $(\"#elStatus\")\n                .val(function(i, v) {\n                    return v + \"Initial Idle @ \" + moment().format() + \" \\n\";\n                })\n                .removeClass(\"alert-success\")\n                .addClass(\"alert-warning\")\n                .scrollTop($('#elStatus')[0].scrollHeight);\n        } else {\n            $('#elStatus')\n                .val(function(i, v) {\n                    return v + \"Initial Active @ \" + moment().format() + \" \\n\";\n                })\n                .addClass(\"alert-success\")\n                .removeClass(\"alert-warning\")\n                .scrollTop($('#elStatus')[0].scrollHeight);\n        }\n\n        // Display the actual timeout on the page\n        $('#elTimeout').text(taTimeout / 1000);\n\n    }\n\n    return {\n        //main function to initiate the module\n        init: function() {\n            demo1();\n            demo2();\n        }\n    };\n\n}();\n\njQuery(document).ready(function() {\n    KTIdleTimerDemo.init();\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/components/utils/idle-timer.js?");

/***/ })

/******/ });