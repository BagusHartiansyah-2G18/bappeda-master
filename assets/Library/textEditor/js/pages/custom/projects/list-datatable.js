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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/custom/projects/list-datatable.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/custom/projects/list-datatable.js":
/*!****************************************************************!*\
  !*** ../src/assets/js/pages/custom/projects/list-datatable.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// Class definition\n\nvar KTUserListDatatable = function() {\n\n\t// variables\n\tvar datatable;\n\n\t// init\n\tvar init = function() {\n\t\t// init the datatables. Learn more: https://keenthemes.com/metronic/?page=docs&section=datatable\n\t\tdatatable = $('#kt_apps_user_list_datatable').KTDatatable({\n\t\t\t// datasource definition\n\t\t\tdata: {\n\t\t\t\ttype: 'remote',\n\t\t\t\tsource: {\n\t\t\t\t\tread: {\n\t\t\t\t\t\turl: 'https://keenthemes.com/metronic/tools/preview/api/datatables/demos/default.php',\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t\tpageSize: 10, // display 20 records per page\n\t\t\t\tserverPaging: true,\n\t\t\t\tserverFiltering: true,\n\t\t\t\tserverSorting: true,\n\t\t\t},\n\n\t\t\t// layout definition\n\t\t\tlayout: {\n\t\t\t\tscroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.\n\t\t\t\tfooter: false, // display/hide footer\n\t\t\t},\n\n\t\t\t// column sorting\n\t\t\tsortable: true,\n\n\t\t\tpagination: true,\n\n\t\t\tsearch: {\n\t\t\t\tinput: $('#generalSearch'),\n\t\t\t\tdelay: 400,\n\t\t\t},\n\n\t\t\t// columns definition\n\t\t\tcolumns: [{\n\t\t\t\tfield: 'RecordID',\n\t\t\t\ttitle: '#',\n\t\t\t\tsortable: false,\n\t\t\t\twidth: 20,\n\t\t\t\tselector: {\n\t\t\t\t\tclass: 'kt-checkbox--solid'\n\t\t\t\t},\n\t\t\t\ttextAlign: 'center',\n\t\t\t}, {\n\t\t\t\tfield: \"ShipName\",\n\t\t\t\ttitle: \"Company\",\n\t\t\t\twidth: 'auto',\n\t\t\t\tautoHide: false,\n\t\t\t\t// callback function support for column rendering\n\t\t\t\ttemplate: function(data, i) {\n\t\t\t\t\tvar number = i + 1;\n\t\t\t\t\twhile (number > 5) {\n\t\t\t\t\t\tnumber = number - 3;\n\t\t\t\t\t}\n\t\t\t\t\tvar img = number + '.png';\n\n\t\t\t\t\tvar skills = [\n\t\t\t\t\t\t'Angular, React',\n\t\t\t\t\t\t'Vue, Kendo',\n\t\t\t\t\t\t'.NET, Oracle, MySQL',\n\t\t\t\t\t\t'Node, SASS, Webpack',\n\t\t\t\t\t\t'MangoDB, Java',\n\t\t\t\t\t\t'HTML5, jQuery, CSS3'\n\t\t\t\t\t];\n\n\t\t\t\t\tvar output = '\\\n                        <div class=\"kt-user-card-v2 kt-user-card-v2--uncircle\">\\\n                            <div class=\"kt-user-card-v2__pic\">\\\n                                <img src=\"assets/media/project-logos/' + img + '\" alt=\"photo\">\\\n                            </div>\\\n                            <div class=\"kt-user-card-v2__details\">\\\n                                <a href=\"#\" class=\"kt-user-card-v2__name\">' + data.CompanyName + '</a>\\\n                                <span class=\"kt-user-card-v2__email\">' +\n\t\t\t\t\t\tskills[number - 1] + '</span>\\\n                            </div>\\\n                        </div>';\n\n\t\t\t\t\treturn output;\n\t\t\t\t}\n\t\t\t}, {\n\t\t\t\tfield: 'Country',\n\t\t\t\ttitle: 'Country',\n\t\t\t\ttemplate: function(row) {\n\t\t\t\t\treturn row.Country + ' ' + row.ShipCountry;\n\t\t\t\t},\n\t\t\t}, {\n\t\t\t\tfield: 'ShipDate',\n\t\t\t\ttitle: 'Ship Date',\n\t\t\t\ttype: 'date',\n\t\t\t\tformat: 'MM/DD/YYYY',\n\t\t\t}, {\n\t\t\t\tfield: \"AgentName\",\n\t\t\t\ttitle: \"Assigned\",\n\t\t\t\twidth: 200,\n\t\t\t\t// callback function support for column rendering\n\t\t\t\ttemplate: function(data, i) {\n\t\t\t\t\tvar number = 4 + i;\n\t\t\t\t\twhile (number > 12) {\n\t\t\t\t\t\tnumber = number - 3;\n\t\t\t\t\t}\n\t\t\t\t\tvar user_img = '100_' + number + '.jpg';\n\n\t\t\t\t\tvar pos = KTUtil.getRandomInt(0, 5);\n\t\t\t\t\tvar position = [\n\t\t\t\t\t\t'Developer',\n\t\t\t\t\t\t'Designer',\n\t\t\t\t\t\t'CEO',\n\t\t\t\t\t\t'Manager',\n\t\t\t\t\t\t'Architect',\n\t\t\t\t\t\t'Sales'\n\t\t\t\t\t];\n\n\t\t\t\t\tvar output = '';\n\t\t\t\t\tif (number > 5) {\n\t\t\t\t\t\toutput = '<div class=\"kt-user-card-v2\">\\\n\t\t\t\t\t\t\t\t<div class=\"kt-user-card-v2__pic\">\\\n\t\t\t\t\t\t\t\t\t<img src=\"assets/media/users/' + user_img + '\" alt=\"photo\">\\\n\t\t\t\t\t\t\t\t</div>\\\n\t\t\t\t\t\t\t\t<div class=\"kt-user-card-v2__details\">\\\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"kt-user-card-v2__name\">' + data.CompanyAgent + '</a>\\\n\t\t\t\t\t\t\t\t\t<span class=\"kt-user-card-v2__desc\">' + position[pos] + '</span>\\\n\t\t\t\t\t\t\t\t</div>\\\n\t\t\t\t\t\t\t</div>';\n\t\t\t\t\t} else {\n\t\t\t\t\t\tvar stateNo = KTUtil.getRandomInt(0, 6);\n\t\t\t\t\t\tvar states = [\n\t\t\t\t\t\t\t'success',\n\t\t\t\t\t\t\t'brand',\n\t\t\t\t\t\t\t'danger',\n\t\t\t\t\t\t\t'success',\n\t\t\t\t\t\t\t'warning',\n\t\t\t\t\t\t\t'primary',\n\t\t\t\t\t\t\t'info'\n\t\t\t\t\t\t];\n\t\t\t\t\t\tvar state = states[stateNo];\n\n\t\t\t\t\t\toutput = '<div class=\"kt-user-card-v2\">\\\n\t\t\t\t\t\t\t\t<div class=\"kt-user-card-v2__pic\">\\\n\t\t\t\t\t\t\t\t\t<div class=\"kt-badge kt-badge--xl kt-badge--' + state + '\">' + data.CompanyAgent.substring(0, 1) + '</div>\\\n\t\t\t\t\t\t\t\t</div>\\\n\t\t\t\t\t\t\t\t<div class=\"kt-user-card-v2__details\">\\\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"kt-user-card-v2__name\">' + data.CompanyAgent + '</a>\\\n\t\t\t\t\t\t\t\t\t<span class=\"kt-user-card-v2__desc\">' + position[pos] + '</span>\\\n\t\t\t\t\t\t\t\t</div>\\\n\t\t\t\t\t\t\t</div>';\n\t\t\t\t\t}\n\n\t\t\t\t\treturn output;\n\t\t\t\t}\n\t\t\t}, {\n\t\t\t\tfield: \"Status\",\n\t\t\t\ttitle: \"Status\",\n\t\t\t\twidth: 100,\n\t\t\t\t// callback function support for column rendering\n\t\t\t\ttemplate: function(row) {\n\t\t\t\t\tvar status = {\n\t\t\t\t\t\t1: {\n\t\t\t\t\t\t\t'title': 'Pending',\n\t\t\t\t\t\t\t'class': ' btn-label-brand'\n\t\t\t\t\t\t},\n\t\t\t\t\t\t2: {\n\t\t\t\t\t\t\t'title': 'Processing',\n\t\t\t\t\t\t\t'class': ' btn-label-danger'\n\t\t\t\t\t\t},\n\t\t\t\t\t\t3: {\n\t\t\t\t\t\t\t'title': 'Success',\n\t\t\t\t\t\t\t'class': ' btn-label-success'\n\t\t\t\t\t\t},\n\t\t\t\t\t\t4: {\n\t\t\t\t\t\t\t'title': 'Delivered',\n\t\t\t\t\t\t\t'class': ' btn-label-success'\n\t\t\t\t\t\t},\n\t\t\t\t\t\t5: {\n\t\t\t\t\t\t\t'title': 'Canceled',\n\t\t\t\t\t\t\t'class': ' btn-label-warning'\n\t\t\t\t\t\t},\n\t\t\t\t\t\t6: {\n\t\t\t\t\t\t\t'title': 'Done',\n\t\t\t\t\t\t\t'class': ' btn-label-danger'\n\t\t\t\t\t\t},\n\t\t\t\t\t\t7: {\n\t\t\t\t\t\t\t'title': 'On Hold',\n\t\t\t\t\t\t\t'class': ' btn-label-warning'\n\t\t\t\t\t\t}\n\t\t\t\t\t};\n\t\t\t\t\treturn '<span class=\"btn btn-bold btn-sm btn-font-sm ' + status[row.Status].class + '\">' + status[row.Status].title + '</span>';\n\t\t\t\t}\n\t\t\t}, {\n\t\t\t\twidth: 110,\n\t\t\t\tfield: 'Type',\n\t\t\t\ttitle: 'Type',\n\t\t\t\tautoHide: false,\n\t\t\t\t// callback function support for column rendering\n\t\t\t\ttemplate: function(row) {\n\t\t\t\t\tvar status = {\n\t\t\t\t\t\t1: {'title': 'Company', 'state': 'danger'},\n\t\t\t\t\t\t2: {'title': 'Customer', 'state': 'primary'},\n\t\t\t\t\t\t3: {'title': 'Staff', 'state': 'success'},\n\t\t\t\t\t};\n\t\t\t\t\treturn '<span class=\"kt-badge kt-badge--' + status[row.Type].state + ' kt-badge--dot\"></span>&nbsp;<span class=\"kt-font-bold kt-font-' + status[row.Type].state + '\">' +\n\t\t\t\t\t\t\tstatus[row.Type].title + '</span>';\n\t\t\t\t},\n\t\t\t}, {\n\t\t\t\tfield: \"Actions\",\n\t\t\t\twidth: 80,\n\t\t\t\ttitle: \"Actions\",\n\t\t\t\tsortable: false,\n\t\t\t\tautoHide: false,\n\t\t\t\toverflow: 'visible',\n\t\t\t\ttemplate: function() {\n\t\t\t\t\treturn '\\\n\t\t\t\t\t\t\t<div class=\"dropdown\">\\\n\t\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-sm btn-clean btn-icon btn-icon-md\" data-toggle=\"dropdown\">\\\n\t\t\t\t\t\t\t\t\t<i class=\"flaticon-more-1\"></i>\\\n\t\t\t\t\t\t\t\t</a>\\\n\t\t\t\t\t\t\t\t<div class=\"dropdown-menu dropdown-menu-right\">\\\n\t\t\t\t\t\t\t\t\t<ul class=\"kt-nav\">\\\n\t\t\t\t\t\t\t\t\t\t<li class=\"kt-nav__item\">\\\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"kt-nav__link\">\\\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"kt-nav__link-icon flaticon2-expand\"></i>\\\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"kt-nav__link-text\">View</span>\\\n\t\t\t\t\t\t\t\t\t\t\t</a>\\\n\t\t\t\t\t\t\t\t\t\t</li>\\\n\t\t\t\t\t\t\t\t\t\t<li class=\"kt-nav__item\">\\\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"kt-nav__link\">\\\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"kt-nav__link-icon flaticon2-contract\"></i>\\\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"kt-nav__link-text\">Edit</span>\\\n\t\t\t\t\t\t\t\t\t\t\t</a>\\\n\t\t\t\t\t\t\t\t\t\t</li>\\\n\t\t\t\t\t\t\t\t\t\t<li class=\"kt-nav__item\">\\\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"kt-nav__link\">\\\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"kt-nav__link-icon flaticon2-trash\"></i>\\\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"kt-nav__link-text\">Delete</span>\\\n\t\t\t\t\t\t\t\t\t\t\t</a>\\\n\t\t\t\t\t\t\t\t\t\t</li>\\\n\t\t\t\t\t\t\t\t\t\t<li class=\"kt-nav__item\">\\\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"kt-nav__link\">\\\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"kt-nav__link-icon flaticon2-mail-1\"></i>\\\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"kt-nav__link-text\">Export</span>\\\n\t\t\t\t\t\t\t\t\t\t\t</a>\\\n\t\t\t\t\t\t\t\t\t\t</li>\\\n\t\t\t\t\t\t\t\t\t</ul>\\\n\t\t\t\t\t\t\t\t</div>\\\n\t\t\t\t\t\t\t</div>\\\n\t\t\t\t\t\t';\n\t\t\t\t},\n\t\t\t}]\n\t\t});\n\t}\n\n\t// search\n\tvar search = function() {\n\t\t$('#kt_form_status').on('change', function() {\n\t\t\tdatatable.search($(this).val().toLowerCase(), 'Status');\n\t\t});\n\t}\n\n\t// selection\n\tvar selection = function() {\n\t\t// init form controls\n\t\t//$('#kt_form_status, #kt_form_type').selectpicker();\n\n\t\t// event handler on check and uncheck on records\n\t\tdatatable.on('kt-datatable--on-check kt-datatable--on-uncheck kt-datatable--on-layout-updated',\tfunction(e) {\n\t\t\tvar checkedNodes = datatable.rows('.kt-datatable__row--active').nodes(); // get selected records\n\t\t\tvar count = checkedNodes.length; // selected records count\n\n\t\t\t$('#kt_subheader_group_selected_rows').html(count);\n\t\t\t\t\n\t\t\tif (count > 0) {\n\t\t\t\t$('#kt_subheader_search').addClass('kt-hidden');\n\t\t\t\t$('#kt_subheader_group_actions').removeClass('kt-hidden');\n\t\t\t} else {\n\t\t\t\t$('#kt_subheader_search').removeClass('kt-hidden');\n\t\t\t\t$('#kt_subheader_group_actions').addClass('kt-hidden');\n\t\t\t}\n\t\t});\n\t}\n\n\t// fetch selected records\n\tvar selectedFetch = function() {\n\t\t// event handler on selected records fetch modal launch\n\t\t$('#kt_datatable_records_fetch_modal').on('show.bs.modal', function(e) {\n\t\t\t// show loading dialog\n            var loading = new KTDialog({'type': 'loader', 'placement': 'top center', 'message': 'Loading ...'});\n            loading.show();\n\n            setTimeout(function() {\n                loading.hide();\n\t\t\t}, 1000);\n\t\t\t\n\t\t\t// fetch selected IDs\n\t\t\tvar ids = datatable.rows('.kt-datatable__row--active').nodes().find('.kt-checkbox--single > [type=\"checkbox\"]').map(function(i, chk) {\n\t\t\t\treturn $(chk).val();\n\t\t\t});\n\n\t\t\t// populate selected IDs\n\t\t\tvar c = document.createDocumentFragment();\n\t\t\t\t\n\t\t\tfor (var i = 0; i < ids.length; i++) {\n\t\t\t\tvar li = document.createElement('li');\n\t\t\t\tli.setAttribute('data-id', ids[i]);\n\t\t\t\tli.innerHTML = 'Selected record ID: ' + ids[i];\n\t\t\t\tc.appendChild(li);\n\t\t\t}\n\n\t\t\t$(e.target).find('#kt_apps_user_fetch_records_selected').append(c);\n\t\t}).on('hide.bs.modal', function(e) {\n\t\t\t$(e.target).find('#kt_apps_user_fetch_records_selected').empty();\n\t\t});\n\t};\n\n\t// selected records status update\n\tvar selectedStatusUpdate = function() {\n\t\t$('#kt_subheader_group_actions_status_change').on('click', \"[data-toggle='status-change']\", function() {\n\t\t\tvar status = $(this).find(\".kt-nav__link-text\").html();\n\n\t\t\t// fetch selected IDs\n\t\t\tvar ids = datatable.rows('.kt-datatable__row--active').nodes().find('.kt-checkbox--single > [type=\"checkbox\"]').map(function(i, chk) {\n\t\t\t\treturn $(chk).val();\n\t\t\t});\n\n\t\t\tif (ids.length > 0) {\n\t\t\t\t// learn more: https://sweetalert2.github.io/\n\t\t\t\tswal.fire({\n\t\t\t\t\tbuttonsStyling: false,\n\n\t\t\t\t\thtml: \"Are you sure to update \" + ids.length + \" selected records status to \" + status + \" ?\",\n\t\t\t\t\ttype: \"info\",\n\t\n\t\t\t\t\tconfirmButtonText: \"Yes, update!\",\n\t\t\t\t\tconfirmButtonClass: \"btn btn-sm btn-bold btn-brand\",\n\t\n\t\t\t\t\tshowCancelButton: true,\n\t\t\t\t\tcancelButtonText: \"No, cancel\",\n\t\t\t\t\tcancelButtonClass: \"btn btn-sm btn-bold btn-default\"\n\t\t\t\t}).then(function(result) {\n\t\t\t\t\tif (result.value) {\n\t\t\t\t\t\tswal.fire({\n\t\t\t\t\t\t\ttitle: 'Deleted!',\n\t\t\t\t\t\t\ttext: 'Your selected records statuses have been updated!',\n\t\t\t\t\t\t\ttype: 'success',\n\t\t\t\t\t\t\tbuttonsStyling: false,\n\t\t\t\t\t\t\tconfirmButtonText: \"OK\",\n\t\t\t\t\t\t\tconfirmButtonClass: \"btn btn-sm btn-bold btn-brand\",\n\t\t\t\t\t\t})\n\t\t\t\t\t\t// result.dismiss can be 'cancel', 'overlay',\n\t\t\t\t\t\t// 'close', and 'timer'\n\t\t\t\t\t} else if (result.dismiss === 'cancel') {\n\t\t\t\t\t\tswal.fire({\n\t\t\t\t\t\t\ttitle: 'Cancelled',\n\t\t\t\t\t\t\ttext: 'You selected records statuses have not been updated!',\n\t\t\t\t\t\t\ttype: 'error',\n\t\t\t\t\t\t\tbuttonsStyling: false,\n\t\t\t\t\t\t\tconfirmButtonText: \"OK\",\n\t\t\t\t\t\t\tconfirmButtonClass: \"btn btn-sm btn-bold btn-brand\",\n\t\t\t\t\t\t});\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t}\n\t\t});\n\t}\n\n\t// selected records delete\n\tvar selectedDelete = function() {\n\t\t$('#kt_subheader_group_actions_delete_all').on('click', function() {\n\t\t\t// fetch selected IDs\n\t\t\tvar ids = datatable.rows('.kt-datatable__row--active').nodes().find('.kt-checkbox--single > [type=\"checkbox\"]').map(function(i, chk) {\n\t\t\t\treturn $(chk).val();\n\t\t\t});\n\n\t\t\tif (ids.length > 0) {\n\t\t\t\t// learn more: https://sweetalert2.github.io/\n\t\t\t\tswal.fire({\n\t\t\t\t\tbuttonsStyling: false,\n\n\t\t\t\t\ttext: \"Are you sure to delete \" + ids.length + \" selected records ?\",\n\t\t\t\t\ttype: \"danger\",\n\n\t\t\t\t\tconfirmButtonText: \"Yes, delete!\",\n\t\t\t\t\tconfirmButtonClass: \"btn btn-sm btn-bold btn-danger\",\n\n\t\t\t\t\tshowCancelButton: true,\n\t\t\t\t\tcancelButtonText: \"No, cancel\",\n\t\t\t\t\tcancelButtonClass: \"btn btn-sm btn-bold btn-brand\"\n\t\t\t\t}).then(function(result) {\n\t\t\t\t\tif (result.value) {\n\t\t\t\t\t\tswal.fire({\n\t\t\t\t\t\t\ttitle: 'Deleted!',\n\t\t\t\t\t\t\ttext: 'Your selected records have been deleted! :(',\n\t\t\t\t\t\t\ttype: 'success',\n\t\t\t\t\t\t\tbuttonsStyling: false,\n\t\t\t\t\t\t\tconfirmButtonText: \"OK\",\n\t\t\t\t\t\t\tconfirmButtonClass: \"btn btn-sm btn-bold btn-brand\",\n\t\t\t\t\t\t})\n\t\t\t\t\t\t// result.dismiss can be 'cancel', 'overlay',\n\t\t\t\t\t\t// 'close', and 'timer'\n\t\t\t\t\t} else if (result.dismiss === 'cancel') {\n\t\t\t\t\t\tswal.fire({\n\t\t\t\t\t\t\ttitle: 'Cancelled',\n\t\t\t\t\t\t\ttext: 'You selected records have not been deleted! :)',\n\t\t\t\t\t\t\ttype: 'error',\n\t\t\t\t\t\t\tbuttonsStyling: false,\n\t\t\t\t\t\t\tconfirmButtonText: \"OK\",\n\t\t\t\t\t\t\tconfirmButtonClass: \"btn btn-sm btn-bold btn-brand\",\n\t\t\t\t\t\t});\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t}\n\t\t});\t\t\n\t}\n\n\tvar updateTotal = function() {\n\t\tdatatable.on('kt-datatable--on-layout-updated', function () {\n\t\t\t//$('#kt_subheader_total').html(datatable.getTotalRows() + ' Total');\n\t\t});\n\t};\n\n\treturn {\n\t\t// public functions\n\t\tinit: function() {\n\t\t\tinit();\n\t\t\tsearch();\n\t\t\tselection();\n\t\t\tselectedFetch();\n\t\t\tselectedStatusUpdate();\n\t\t\tselectedDelete();\n\t\t\tupdateTotal();\n\t\t},\n\t};\n}();\n\n// On document ready\nKTUtil.ready(function() {\n\tKTUserListDatatable.init();\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/custom/projects/list-datatable.js?");

/***/ })

/******/ });