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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/components/calendar/google.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/components/calendar/google.js":
/*!************************************************************!*\
  !*** ../src/assets/js/pages/components/calendar/google.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar KTCalendarGoogle = function() {\n\n    return {\n        //main function to initiate the module\n        init: function() {\n            var calendarEl = document.getElementById('kt_calendar');\n            var calendar = new FullCalendar.Calendar(calendarEl, {\n                plugins: [ 'interaction', 'dayGrid', 'timeGrid', 'list', 'googleCalendar' ],\n\n                isRTL: KTUtil.isRTL(),\n                header: {\n                    left: 'prev,next today',\n                    center: 'title',\n                    right: 'dayGridMonth,timeGridWeek,timeGridDay'\n                },\n\n                displayEventTime: false, // don't show the time column in list view\n\n                height: 800,\n                contentHeight: 780,\n                aspectRatio: 3,  // see: https://fullcalendar.io/docs/aspectRatio\n\n                views: {\n                    dayGridMonth: { buttonText: 'month' },\n                    timeGridWeek: { buttonText: 'week' },\n                    timeGridDay: { buttonText: 'day' }\n                },\n\n                defaultView: 'dayGridMonth',\n\n                editable: true,\n                eventLimit: true, // allow \"more\" link when too many events\n                navLinks: true,\n\n                // THIS KEY WON'T WORK IN PRODUCTION!!!\n                // To make your own Google API key, follow the directions here:\n                // http://fullcalendar.io/docs/google_calendar/\n                googleCalendarApiKey: 'AIzaSyDcnW6WejpTOCffshGDDb4neIrXVUA1EAE',\n\n                // US Holidays\n                events: 'en.usa#holiday@group.v.calendar.google.com',\n                \n                eventClick: function(event) {\n                    // opens events in a popup window\n                    window.open(event.url, 'gcalevent', 'width=700,height=600');\n                    return false;\n                },\n\n                loading: function(bool) {\n                    return;\n\n                    /*\n                    KTApp.block(portlet.getSelf(), {\n                        type: 'loader',\n                        state: 'success',\n                        message: 'Please wait...'  \n                    });\n                    */\n                }, \n\n                eventRender: function(info) {\n                    var element = $(info.el);\n\n                    if (info.event.extendedProps && info.event.extendedProps.description) {\n                        if (element.hasClass('fc-day-grid-event')) {\n                            element.data('content', info.event.extendedProps.description);\n                            element.data('placement', 'top');\n                            KTApp.initPopover(element);\n                        } else if (element.hasClass('fc-time-grid-event')) {\n                            element.find('.fc-title').append('<div class=\"fc-description\">' + info.event.extendedProps.description + '</div>'); \n                        } else if (element.find('.fc-list-item-title').lenght !== 0) {\n                            element.find('.fc-list-item-title').append('<div class=\"fc-description\">' + info.event.extendedProps.description + '</div>'); \n                        }\n                    } \n                }\n            });\n\n            calendar.render();\n        }\n    };\n}();\n\njQuery(document).ready(function() {\n    KTCalendarGoogle.init();\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/components/calendar/google.js?");

/***/ })

/******/ });