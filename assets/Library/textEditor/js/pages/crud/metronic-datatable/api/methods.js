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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/crud/metronic-datatable/api/methods.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/crud/metronic-datatable/api/methods.js":
/*!*********************************************************************!*\
  !*** ../src/assets/js/pages/crud/metronic-datatable/api/methods.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// Class definition\n\nvar KTDefaultDatatableDemo = function() {\n\t// Private functions\n\n\t// basic demo\n\tvar demo = function() {\n\n\t\tvar options = {\n\t\t\t// datasource definition\n\t\t\tdata: {\n\t\t\t\ttype: 'remote',\n\t\t\t\tsource: {\n\t\t\t\t\tread: {\n\t\t\t\t\t\turl: 'https://keenthemes.com/metronic/tools/preview/api/datatables/demos/default.php',\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t\tpageSize: 20, // display 20 records per page\n\t\t\t\tserverPaging: true,\n\t\t\t\tserverFiltering: true,\n\t\t\t\tserverSorting: true,\n\t\t\t},\n\n\t\t\t// layout definition\n\t\t\tlayout: {\n\t\t\t\tscroll: true, // enable/disable datatable scroll both horizontal and vertical when needed.\n\t\t\t\theight: 550, // datatable's body's fixed height\n\t\t\t\tfooter: false, // display/hide footer\n\t\t\t},\n\n\t\t\t// column sorting\n\t\t\tsortable: true,\n\n\t\t\tpagination: true,\n\n\t\t\tsearch: {\n\t\t\t\tinput: $('#generalSearch'),\n\t\t\t},\n\n\t\t\t// columns definition\n\t\t\tcolumns: [\n\t\t\t\t{\n\t\t\t\t\tfield: 'RecordID',\n\t\t\t\t\ttitle: '#',\n\t\t\t\t\tsortable: false,\n\t\t\t\t\twidth: 30,\n\t\t\t\t\ttype: 'number',\n\t\t\t\t\tselector: {class: 'kt-checkbox--solid'},\n\t\t\t\t\ttextAlign: 'center',\n\t\t\t\t}, {\n\t\t\t\t\tfield: 'ID',\n\t\t\t\t\ttitle: 'ID',\n\t\t\t\t\twidth: 30,\n\t\t\t\t\ttype: 'number',\n\t\t\t\t\ttemplate: function(row) {\n\t\t\t\t\t\treturn row.RecordID;\n\t\t\t\t\t},\n\t\t\t\t}, {\n\t\t\t\t\tfield: 'OrderID',\n\t\t\t\t\ttitle: 'Order ID',\n\t\t\t\t}, {\n\t\t\t\t\tfield: 'Country',\n\t\t\t\t\ttitle: 'Country',\n\t\t\t\t\ttemplate: function(row) {\n\t\t\t\t\t\treturn row.Country + ' ' + row.ShipCountry;\n\t\t\t\t\t},\n\t\t\t\t}, {\n\t\t\t\t\tfield: 'ShipDate',\n\t\t\t\t\ttitle: 'Ship Date',\n\t\t\t\t\ttype: 'date',\n\t\t\t\t\tformat: 'MM/DD/YYYY',\n\t\t\t\t}, {\n\t\t\t\t\tfield: 'CompanyName',\n\t\t\t\t\ttitle: 'Company Name',\n\t\t\t\t}, {\n\t\t\t\t\tfield: 'Status',\n\t\t\t\t\ttitle: 'Status',\n\t\t\t\t\t// callback function support for column rendering\n\t\t\t\t\ttemplate: function(row) {\n\t\t\t\t\t\tvar status = {\n\t\t\t\t\t\t\t1: {'title': 'Pending', 'class': 'kt-badge--brand'},\n\t\t\t\t\t\t\t2: {'title': 'Delivered', 'class': ' kt-badge--danger'},\n\t\t\t\t\t\t\t3: {'title': 'Canceled', 'class': ' kt-badge--primary'},\n\t\t\t\t\t\t\t4: {'title': 'Success', 'class': ' kt-badge--success'},\n\t\t\t\t\t\t\t5: {'title': 'Info', 'class': ' kt-badge--info'},\n\t\t\t\t\t\t\t6: {'title': 'Danger', 'class': ' kt-badge--danger'},\n\t\t\t\t\t\t\t7: {'title': 'Warning', 'class': ' kt-badge--warning'},\n\t\t\t\t\t\t};\n\t\t\t\t\t\treturn '<span class=\"kt-badge ' + status[row.Status].class + ' kt-badge--inline kt-badge--pill\">' + status[row.Status].title + '</span>';\n\t\t\t\t\t},\n\t\t\t\t}, {\n\t\t\t\t\tfield: 'Type',\n\t\t\t\t\ttitle: 'Type',\n\t\t\t\t\tautoHide: false,\n\t\t\t\t\t// callback function support for column rendering\n\t\t\t\t\ttemplate: function(row) {\n\t\t\t\t\t\tvar status = {\n\t\t\t\t\t\t\t1: {'title': 'Online', 'state': 'danger'},\n\t\t\t\t\t\t\t2: {'title': 'Retail', 'state': 'primary'},\n\t\t\t\t\t\t\t3: {'title': 'Direct', 'state': 'success'},\n\t\t\t\t\t\t};\n\t\t\t\t\t\treturn '<span class=\"kt-badge kt-badge--' + status[row.Type].state + ' kt-badge--dot\"></span>&nbsp;<span class=\"kt-font-bold kt-font-' + status[row.Type].state + '\">' +\n\t\t\t\t\t\t\tstatus[row.Type].title + '</span>';\n\t\t\t\t\t},\n\t\t\t\t}, {\n\t\t\t\t\tfield: 'Actions',\n\t\t\t\t\ttitle: 'Actions',\n\t\t\t\t\tsortable: false,\n\t\t\t\t\twidth: 110,\n\t\t\t\t\toverflow: 'visible',\n\t\t\t\t\tautoHide: false,\n\t\t\t\t\ttemplate: function() {\n\t\t\t\t\t\treturn '\\\n\t\t\t\t\t\t<div class=\"dropdown\">\\\n\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-sm btn-clean btn-icon btn-icon-md\" data-toggle=\"dropdown\">\\\n                                <i class=\"la la-ellipsis-h\"></i>\\\n                            </a>\\\n\t\t\t\t\t\t  \t<div class=\"dropdown-menu dropdown-menu-right\">\\\n\t\t\t\t\t\t    \t<a class=\"dropdown-item\" href=\"#\"><i class=\"la la-edit\"></i> Edit Details</a>\\\n\t\t\t\t\t\t    \t<a class=\"dropdown-item\" href=\"#\"><i class=\"la la-leaf\"></i> Update Status</a>\\\n\t\t\t\t\t\t    \t<a class=\"dropdown-item\" href=\"#\"><i class=\"la la-print\"></i> Generate Report</a>\\\n\t\t\t\t\t\t  \t</div>\\\n\t\t\t\t\t\t</div>\\\n\t\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-sm btn-clean btn-icon btn-icon-md\" title=\"Edit details\">\\\n\t\t\t\t\t\t\t<i class=\"la la-edit\"></i>\\\n\t\t\t\t\t\t</a>\\\n\t\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-sm btn-clean btn-icon btn-icon-md\" title=\"Delete\">\\\n\t\t\t\t\t\t\t<i class=\"la la-trash\"></i>\\\n\t\t\t\t\t\t</a>\\\n\t\t\t\t\t';\n\t\t\t\t\t},\n\t\t\t\t}],\n\n\t\t};\n\n\t\tvar datatable = $('.kt-datatable').KTDatatable(options);\n\n\t\t// both methods are supported\n\t\t// datatable.methodName(args); or $(datatable).KTDatatable(methodName, args);\n\n\t\t$('#kt_datatable_destroy').on('click', function() {\n\t\t\t// datatable.destroy();\n\t\t\t$('.kt-datatable').KTDatatable('destroy');\n\t\t});\n\n\t\t$('#kt_datatable_init').on('click', function() {\n\t\t\tdatatable = $('.kt-datatable').KTDatatable(options);\n\t\t});\n\n\t\t$('#kt_datatable_reload').on('click', function() {\n\t\t\t// datatable.reload();\n\t\t\t$('.kt-datatable').KTDatatable('reload');\n\t\t});\n\n\t\t$('#kt_datatable_sort_asc').on('click', function() {\n\t\t\tdatatable.sort('Status', 'asc');\n\t\t});\n\n\t\t$('#kt_datatable_sort_desc').on('click', function() {\n\t\t\tdatatable.sort('Status', 'desc');\n\t\t});\n\n\t\t// get checked record and get value by column name\n\t\t$('#kt_datatable_get').on('click', function() {\n\t\t\t// select active rows\n\t\t\tdatatable.rows('.kt-datatable__row--active');\n\t\t\t// check selected nodes\n\t\t\tif (datatable.nodes().length > 0) {\n\t\t\t\t// get column by field name and get the column nodes\n\t\t\t\tvar value = datatable.columns('CompanyName').nodes().text();\n\t\t\t\tconsole.log(value);\n\t\t\t}\n\t\t});\n\n\t\t// record selection\n\t\t$('#kt_datatable_check').on('click', function() {\n\t\t\tvar input = $('#kt_datatable_check_input').val();\n\t\t\tdatatable.setActive(input);\n\t\t});\n\n\t\t$('#kt_datatable_check_all').on('click', function() {\n\t\t\t// datatable.setActiveAll(true);\n\t\t\t$('.kt-datatable').KTDatatable('setActiveAll', true);\n\t\t});\n\n\t\t$('#kt_datatable_uncheck_all').on('click', function() {\n\t\t\t// datatable.setActiveAll(false);\n\t\t\t$('.kt-datatable').KTDatatable('setActiveAll', false);\n\t\t});\n\n\t\t$('#kt_datatable_hide_column').on('click', function() {\n\t\t\tdatatable.columns('ShipDate').visible(false);\n\t\t});\n\n\t\t$('#kt_datatable_show_column').on('click', function() {\n\t\t\tdatatable.columns('ShipDate').visible(true);\n\t\t});\n\n\t\t$('#kt_datatable_remove_row').on('click', function() {\n\t\t\tdatatable.rows('.kt-datatable__row--active').remove();\n\t\t});\n\n\t\t$('#kt_form_status,#kt_form_type').selectpicker();\n\n\t};\n\n\treturn {\n\t\t// public functions\n\t\tinit: function() {\n\t\t\tdemo();\n\t\t},\n\t};\n}();\n\njQuery(document).ready(function() {\n\tKTDefaultDatatableDemo.init();\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/crud/metronic-datatable/api/methods.js?");

/***/ })

/******/ });