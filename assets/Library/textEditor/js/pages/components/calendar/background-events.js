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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/components/calendar/background-events.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/components/calendar/background-events.js":
/*!***********************************************************************!*\
  !*** ../src/assets/js/pages/components/calendar/background-events.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar KTCalendarBackgroundEvents = function() {\n\n    return {\n        //main function to initiate the module\n        init: function() {\n            var todayDate = moment().startOf('day');\n            var YM = todayDate.format('YYYY-MM');\n            var YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD');\n            var TODAY = todayDate.format('YYYY-MM-DD');\n            var TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD');\n\n            var calendarEl = document.getElementById('kt_calendar');\n            var calendar = new FullCalendar.Calendar(calendarEl, {\n                plugins: [ 'interaction', 'dayGrid', 'timeGrid', 'list' ],\n\n                isRTL: KTUtil.isRTL(),\n                header: {\n                    left: 'prev,next today',\n                    center: 'title',\n                    right: 'dayGridMonth,timeGridWeek,timeGridDay'\n                },\n\n                height: 800,\n                contentHeight: 780,\n                aspectRatio: 3,  // see: https://fullcalendar.io/docs/aspectRatio\n\n                nowIndicator: true,\n                now: TODAY + 'T09:25:00', // just for demo\n\n                views: {\n                    dayGridMonth: { buttonText: 'month' },\n                    timeGridWeek: { buttonText: 'week' },\n                    timeGridDay: { buttonText: 'day' }\n                },\n\n                defaultView: 'dayGridMonth',\n                defaultDate: TODAY,\n\n                editable: true,\n                eventLimit: true, // allow \"more\" link when too many events\n                navLinks: true,\n                businessHours: true, // display business hours\n                events: [\n                    {\n                        title: 'All Day Event',\n                        start: YM + '-01',\n                        description: 'Toto lorem ipsum dolor sit incid idunt ut',\n                        className: \"fc-event-danger fc-event-solid-warning\",\n                        color: KTApp.getStateColor('info'),\n                        rendering: 'background' \n                    },\n                    {\n                        title: 'Reporting',\n                        start: YM + '-14T13:30:00',\n                        description: 'Lorem ipsum dolor incid idunt ut labore',\n                        end: YM + '-14',\n                        className: \"fc-event-success\"\n                    },\n                    {\n                        title: 'Company Trip',\n                        start: YM + '-02',\n                        description: 'Lorem ipsum dolor sit tempor incid',\n                        end: YM + '-03',\n                        className: \"fc-event-primary\"\n                    },\n                    {\n                        title: 'ICT Expo 2017 - Product Release',\n                        start: YM + '-03',\n                        description: 'Lorem ipsum dolor sit tempor inci',\n                        end: YM + '-05',\n                        className: \"fc-event-light fc-event-solid-primary\"\n                    },\n                    {\n                        title: 'Dinner',\n                        start: YM + '-12',\n                        description: 'Lorem ipsum dolor sit amet, conse ctetur',\n                        end: YM + '-10',\n                        color: KTApp.getStateColor('info'),\n                        rendering: 'background' \n                    },\n                    {\n                        id: 999,\n                        title: 'Repeating Event',\n                        start: YM + '-09T16:00:00',\n                        description: 'Lorem ipsum dolor sit ncididunt ut labore',\n                        className: \"fc-event-danger\"\n                    },\n                    {\n                        id: 1000,\n                        title: 'Repeating Event',\n                        description: 'Lorem ipsum dolor sit amet, labore',\n                        start: YM + '-16T16:00:00',\n                        color: KTApp.getStateColor('warning'),\n                        rendering: 'background' \n                    },\n                    {\n                        title: 'Conference',\n                        start: YESTERDAY,\n                        end: TOMORROW,\n                        description: 'Lorem ipsum dolor eius mod tempor labore',\n                        className: \"fc-event-brand\"\n                    },\n                    {\n                        title: 'Meeting',\n                        start: TODAY + 'T10:30:00',\n                        end: TODAY + 'T12:30:00',\n                        description: 'Lorem ipsum dolor eiu idunt ut labore',\n                        color: KTApp.getStateColor('danger'),\n                        rendering: 'background' \n                    },\n                    {\n                        title: 'Lunch',\n                        start: TODAY + 'T12:00:00',\n                        className: \"fc-event-info\",\n                        description: 'Lorem ipsum dolor sit amet, ut labore'\n                    },\n                    {\n                        title: 'Meeting',\n                        start: TODAY + 'T14:30:00',\n                        className: \"fc-event-warning\",\n                        description: 'Lorem ipsum conse ctetur adipi scing'\n                    },\n                    {\n                        title: 'Happy Hour',\n                        start: TODAY + 'T17:30:00',\n                        className: \"fc-event-info\",\n                        description: 'Lorem ipsum dolor sit amet, conse ctetur',\n                        color: KTApp.getStateColor('danger'),\n                        rendering: 'background' \n                    },\n                    {\n                        title: 'Dinner',\n                        start: TOMORROW + 'T05:00:00',\n                        className: \"fc-event-solid-danger fc-event-light\",\n                        description: 'Lorem ipsum dolor sit ctetur adipi scing'\n                    },\n                    {\n                        title: 'Birthday Party',\n                        start: TOMORROW + 'T07:00:00',\n                        className: \"fc-event-primary\",\n                        description: 'Lorem ipsum dolor sit amet, scing',\n                        color: KTApp.getStateColor('danger'),\n                        rendering: 'background' \n                    },\n                    {\n                        title: 'Click for Google',\n                        url: 'http://google.com/',\n                        start: YM + '-28',\n                        className: \"fc-event-solid-info fc-event-light\",\n                        description: 'Lorem ipsum dolor sit amet, labore',\n                        color: KTApp.getStateColor('success'),\n                        rendering: 'background' \n                    }\n                ],\n\n                eventRender: function(info) {\n                    var element = $(info.el);\n\n                    if (info.event.extendedProps && info.event.extendedProps.description) {\n                        if (element.hasClass('fc-day-grid-event')) {\n                            element.data('content', info.event.extendedProps.description);\n                            element.data('placement', 'top');\n                            KTApp.initPopover(element);\n                        } else if (element.hasClass('fc-time-grid-event')) {\n                            element.find('.fc-title').append('<div class=\"fc-description\">' + info.event.extendedProps.description + '</div>'); \n                        } else if (element.find('.fc-list-item-title').lenght !== 0) {\n                            element.find('.fc-list-item-title').append('<div class=\"fc-description\">' + info.event.extendedProps.description + '</div>'); \n                        }\n                    } \n                }\n            });\n\n            calendar.render();\n        }\n    };\n}();\n\njQuery(document).ready(function() {\n    KTCalendarBackgroundEvents.init();\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/components/calendar/background-events.js?");

/***/ })

/******/ });