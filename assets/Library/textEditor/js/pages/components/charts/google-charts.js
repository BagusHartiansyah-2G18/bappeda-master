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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/components/charts/google-charts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/components/charts/google-charts.js":
/*!*****************************************************************!*\
  !*** ../src/assets/js/pages/components/charts/google-charts.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// Class definition\nvar KTGoogleChartsDemo = function() {\n\n    // Private functions\n\n    var main = function() {\n        // GOOGLE CHARTS INIT\n        google.load('visualization', '1', {\n            packages: ['corechart', 'bar', 'line']\n        });\n\n        google.setOnLoadCallback(function() {\n            KTGoogleChartsDemo.runDemos();\n        });\n    }\n\n    var demoColumnCharts = function() {\n        // COLUMN CHART\n        var data = new google.visualization.DataTable();\n        data.addColumn('timeofday', 'Time of Day');\n        data.addColumn('number', 'Motivation Level');\n        data.addColumn('number', 'Energy Level');\n\n        data.addRows([\n            [{\n                v: [8, 0, 0],\n                f: '8 am'\n            }, 1, .25],\n            [{\n                v: [9, 0, 0],\n                f: '9 am'\n            }, 2, .5],\n            [{\n                v: [10, 0, 0],\n                f: '10 am'\n            }, 3, 1],\n            [{\n                v: [11, 0, 0],\n                f: '11 am'\n            }, 4, 2.25],\n            [{\n                v: [12, 0, 0],\n                f: '12 pm'\n            }, 5, 2.25],\n            [{\n                v: [13, 0, 0],\n                f: '1 pm'\n            }, 6, 3],\n            [{\n                v: [14, 0, 0],\n                f: '2 pm'\n            }, 7, 4],\n            [{\n                v: [15, 0, 0],\n                f: '3 pm'\n            }, 8, 5.25],\n            [{\n                v: [16, 0, 0],\n                f: '4 pm'\n            }, 9, 7.5],\n            [{\n                v: [17, 0, 0],\n                f: '5 pm'\n            }, 10, 10],\n        ]);\n\n        var options = {\n            title: 'Motivation and Energy Level Throughout the Day',\n            focusTarget: 'category',\n            hAxis: {\n                title: 'Time of Day',\n                format: 'h:mm a',\n                viewWindow: {\n                    min: [7, 30, 0],\n                    max: [17, 30, 0]\n                },\n            },\n            vAxis: {\n                title: 'Rating (scale of 1-10)'\n            },\n            colors: ['#6e4ff5', '#fe3995']\n        };\n\n        var chart = new google.visualization.ColumnChart(document.getElementById('kt_gchart_1'));\n        chart.draw(data, options);\n\n        var chart = new google.visualization.ColumnChart(document.getElementById('kt_gchart_2'));\n        chart.draw(data, options);\n    }\n\n    var demoPieCharts = function() {\n        var data = google.visualization.arrayToDataTable([\n            ['Task', 'Hours per Day'],\n            ['Work', 11],\n            ['Eat', 2],\n            ['Commute', 2],\n            ['Watch TV', 2],\n            ['Sleep', 7]\n        ]);\n\n        var options = {\n            title: 'My Daily Activities',\n            colors: ['#fe3995', '#f6aa33', '#6e4ff5', '#2abe81', '#c7d2e7', '#593ae1']\n        };\n\n        var chart = new google.visualization.PieChart(document.getElementById('kt_gchart_3'));\n        chart.draw(data, options);\n\n        var options = {\n            pieHole: 0.4,\n            colors: ['#fe3995', '#f6aa33', '#6e4ff5', '#2abe81', '#c7d2e7', '#593ae1']\n        };\n\n        var chart = new google.visualization.PieChart(document.getElementById('kt_gchart_4'));\n        chart.draw(data, options);\n    }    \n\n    var demoLineCharts = function() {\n        // LINE CHART\n        var data = new google.visualization.DataTable();\n        data.addColumn('number', 'Day');\n        data.addColumn('number', 'Guardians of the Galaxy');\n        data.addColumn('number', 'The Avengers');\n        data.addColumn('number', 'Transformers: Age of Extinction');\n\n        data.addRows([\n            [1, 37.8, 80.8, 41.8],\n            [2, 30.9, 69.5, 32.4],\n            [3, 25.4, 57, 25.7],\n            [4, 11.7, 18.8, 10.5],\n            [5, 11.9, 17.6, 10.4],\n            [6, 8.8, 13.6, 7.7],\n            [7, 7.6, 12.3, 9.6],\n            [8, 12.3, 29.2, 10.6],\n            [9, 16.9, 42.9, 14.8],\n            [10, 12.8, 30.9, 11.6],\n            [11, 5.3, 7.9, 4.7],\n            [12, 6.6, 8.4, 5.2],\n            [13, 4.8, 6.3, 3.6],\n            [14, 4.2, 6.2, 3.4]\n        ]);\n\n        var options = {\n            chart: {\n                title: 'Box Office Earnings in First Two Weeks of Opening',\n                subtitle: 'in millions of dollars (USD)'\n            },\n            colors: ['#6e4ff5', '#f6aa33', '#fe3995']\n        };\n\n        var chart = new google.charts.Line(document.getElementById('kt_gchart_5'));\n        chart.draw(data, options);\n    }\n\n    return {\n        // public functions\n        init: function() {\n            main();\n        },\n\n        runDemos: function() {\n            demoColumnCharts();\n            demoLineCharts();\n            demoPieCharts();\n        }\n    };\n}();\n\nKTGoogleChartsDemo.init();\n\n//# sourceURL=webpack:///../src/assets/js/pages/components/charts/google-charts.js?");

/***/ })

/******/ });