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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/crud/datatables/advanced/footer-callback.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/crud/datatables/advanced/footer-callback.js":
/*!**************************************************************************!*\
  !*** ../src/assets/js/pages/crud/datatables/advanced/footer-callback.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar KTDatatablesAdvancedFooterCalllback = function() {\n\n\tvar initTable1 = function() {\n\t\tvar table = $('#kt_table_1');\n\n\t\t// begin first table\n\t\ttable.DataTable({\n\t\t\tresponsive: true,\n\t\t\tpageLength: 5,\n\t\t\tlengthMenu: [[2, 5, 10, 15, -1], [2, 5, 10, 15, 'All']],\n\t\t\tfooterCallback: function(row, data, start, end, display) {\n\n\t\t\t\tvar column = 6;\n\t\t\t\tvar api = this.api(), data;\n\n\t\t\t\t// Remove the formatting to get integer data for summation\n\t\t\t\tvar intVal = function(i) {\n\t\t\t\t\treturn typeof i === 'string' ? i.replace(/[\\$,]/g, '') * 1 : typeof i === 'number' ? i : 0;\n\t\t\t\t};\n\n\t\t\t\t// Total over all pages\n\t\t\t\tvar total = api.column(column).data().reduce(function(a, b) {\n\t\t\t\t\treturn intVal(a) + intVal(b);\n\t\t\t\t}, 0);\n\n\t\t\t\t// Total over this page\n\t\t\t\tvar pageTotal = api.column(column, {page: 'current'}).data().reduce(function(a, b) {\n\t\t\t\t\treturn intVal(a) + intVal(b);\n\t\t\t\t}, 0);\n\n\t\t\t\t// Update footer\n\t\t\t\t$(api.column(column).footer()).html(\n\t\t\t\t\t'$' + KTUtil.numberString(pageTotal.toFixed(2)) + '<br/> ( $' + KTUtil.numberString(total.toFixed(2)) + ' total)',\n\t\t\t\t);\n\t\t\t},\n\t\t});\n\t};\n\n\treturn {\n\n\t\t//main function to initiate the module\n\t\tinit: function() {\n\t\t\tinitTable1();\n\t\t},\n\n\t};\n\n}();\n\njQuery(document).ready(function() {\n\tKTDatatablesAdvancedFooterCalllback.init();\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/crud/datatables/advanced/footer-callback.js?");

/***/ })

/******/ });