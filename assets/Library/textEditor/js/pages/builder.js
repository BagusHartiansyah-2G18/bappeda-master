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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/builder.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/builder.js":
/*!*****************************************!*\
  !*** ../src/assets/js/pages/builder.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Class definition\nvar KTLayoutBuilder = function() {\n\n\tvar exporter = {\n\t\tinit: function() {\n\t\t\t$('#kt-btn-howto').click(function(e) {\n\t\t\t\te.preventDefault();\n\t\t\t\t$('#kt-howto').slideToggle();\n\t\t\t});\n\t\t},\n\t\tstartLoad: function(options) {\n\t\t\t$('#builder_export').\n\t\t\taddClass('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light').\n\t\t\tfind('span').text('Exporting...').\n\t\t\tclosest('.kt-form__actions').\n\t\t\tfind('.btn').\n\t\t\tattr('disabled', true);\n\t\t\ttoastr.info(options.title, options.message);\n\t\t},\n\t\tdoneLoad: function() {\n\t\t\t$('#builder_export').\n\t\t\tremoveClass('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light').\n\t\t\tfind('span').text('Export').\n\t\t\tclosest('.kt-form__actions').\n\t\t\tfind('.btn').\n\t\t\tattr('disabled', false);\n\t\t},\n\t\texportHtml: function(demo) {\n\t\t\texporter.startLoad({\n\t\t\t\ttitle: 'Generate HTML Partials',\n\t\t\t\tmessage: 'Process started and it may take about 1 to 10 minutes.',\n\t\t\t});\n\n\t\t\t$.ajax('index.php', {\n\t\t\t\tmethod: 'POST',\n\t\t\t\tdata: {\n\t\t\t\t\tbuilder_export: 1,\n\t\t\t\t\texport_type: 'partial',\n\t\t\t\t\tdemo: demo,\n\t\t\t\t\ttheme: 'metronic',\n\t\t\t\t},\n\t\t\t}).done(function(r) {\n\t\t\t\tvar result = JSON.parse(r);\n\t\t\t\tif (result.message) {\n\t\t\t\t\texporter.stopWithNotify(result.message);\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tvar timer = setInterval(function() {\n\t\t\t\t\t$.ajax('index.php', {\n\t\t\t\t\t\tmethod: 'POST',\n\t\t\t\t\t\tdata: {\n\t\t\t\t\t\t\tbuilder_export: 1,\n\t\t\t\t\t\t\tbuilder_check: result.id,\n\t\t\t\t\t\t},\n\t\t\t\t\t}).done(function(r) {\n\t\t\t\t\t\tvar result = JSON.parse(r);\n\t\t\t\t\t\tif (typeof result === 'undefined') return;\n\t\t\t\t\t\t// export status 1 is completed\n\t\t\t\t\t\tif (result.export_status !== 1) return;\n\n\t\t\t\t\t\t$('<iframe/>').attr({\n\t\t\t\t\t\t\tsrc: 'index.php?builder_export&builder_download&id=' + result.id,\n\t\t\t\t\t\t\tstyle: 'visibility:hidden;display:none',\n\t\t\t\t\t\t}).ready(function() {\n\t\t\t\t\t\t\ttoastr.success('Export HTML Version Layout', 'HTML version exported.');\n\t\t\t\t\t\t\texporter.doneLoad();\n\t\t\t\t\t\t\t// stop the timer\n\t\t\t\t\t\t\tclearInterval(timer);\n\t\t\t\t\t\t}).appendTo('body');\n\t\t\t\t\t});\n\t\t\t\t}, 15000);\n\n\t\t\t\t// generate download\n\t\t\t\t// setTimeout(function() {\n\t\t\t\t// \texporter.runGenerate();\n\t\t\t\t// }, 5000);\n\t\t\t});\n\t\t},\n\t\texportHtmlStatic: function(demo) {\n\t\t\texporter.startLoad({\n\t\t\t\ttitle: 'Generate HTML Static Version',\n\t\t\t\tmessage: 'Process started and it may take about 1 to 10 minutes.',\n\t\t\t});\n\n\t\t\t$.ajax('index.php', {\n\t\t\t\tmethod: 'POST',\n\t\t\t\tdata: {\n\t\t\t\t\tbuilder_export: 1,\n\t\t\t\t\texport_type: 'html',\n\t\t\t\t\tdemo: demo,\n\t\t\t\t\ttheme: 'metronic',\n\t\t\t\t},\n\t\t\t}).done(function(r) {\n\t\t\t\tvar result = JSON.parse(r);\n\t\t\t\tif (result.message) {\n\t\t\t\t\texporter.stopWithNotify(result.message);\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tvar timer = setInterval(function() {\n\t\t\t\t\t$.ajax('index.php', {\n\t\t\t\t\t\tmethod: 'POST',\n\t\t\t\t\t\tdata: {\n\t\t\t\t\t\t\tbuilder_export: 1,\n\t\t\t\t\t\t\tbuilder_check: result.id,\n\t\t\t\t\t\t},\n\t\t\t\t\t}).done(function(r) {\n\t\t\t\t\t\tvar result = JSON.parse(r);\n\t\t\t\t\t\tif (typeof result === 'undefined') return;\n\t\t\t\t\t\t// export status 1 is completed\n\t\t\t\t\t\tif (result.export_status !== 1) return;\n\n\t\t\t\t\t\t$('<iframe/>').attr({\n\t\t\t\t\t\t\tsrc: 'index.php?builder_export&builder_download&id=' + result.id,\n\t\t\t\t\t\t\tstyle: 'visibility:hidden;display:none',\n\t\t\t\t\t\t}).ready(function() {\n\t\t\t\t\t\t\ttoastr.success('Export Default Version', 'Default HTML version exported with current configured layout.');\n\t\t\t\t\t\t\texporter.doneLoad();\n\t\t\t\t\t\t\t// stop the timer\n\t\t\t\t\t\t\tclearInterval(timer);\n\t\t\t\t\t\t}).appendTo('body');\n\t\t\t\t\t});\n\t\t\t\t}, 15000);\n\t\t\t});\n\t\t},\n\t\tstopWithNotify: function(message, type) {\n\t\t\ttype = type || 'danger';\n\t\t\tif (typeof toastr[type] !== 'undefined') {\n\t\t\t\ttoastr[type]('Verification failed', message);\n\t\t\t}\n\t\t\texporter.doneLoad();\n\t\t},\n\t\trunGenerate: function() {\n\t\t\t$.ajax('../tools/builder/cron-generate.php', {\n\t\t\t\tmethod: 'POST',\n\t\t\t\tdata: {\n\t\t\t\t\ttheme: 'metronic',\n\t\t\t\t},\n\t\t\t}).done(function(r) {});\n\t\t}\n\t};\n\n\t// Private functions\n\tvar preview = function() {\n\t\t$('[name=\"builder_submit\"]').click(function(e) {\n\t\t\te.preventDefault();\n\t\t\tvar _self = $(this);\n\t\t\t$(_self).\n\t\t\taddClass('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light').\n\t\t\tclosest('.kt-form__actions').\n\t\t\tfind('.btn').\n\t\t\tattr('disabled', true);\n\n\t\t\t$.ajax('index.php?demo=' + $(_self).data('demo'), {\n\t\t\t\tmethod: 'POST',\n\t\t\t\tdata: $('[name]').serialize(),\n\t\t\t}).done(function(r) {\n\t\t\t\ttoastr.success('Preview updated', 'Preview has been updated with current configured layout.');\n\t\t\t}).always(function() {\n\t\t\t\tsetTimeout(function() {\n\t\t\t\t\tlocation.reload();\n\t\t\t\t}, 600);\n\t\t\t});\n\t\t});\n\t};\n\n\tvar reset = function() {\n\t\t$('[name=\"builder_reset\"]').click(function(e) {\n\t\t\te.preventDefault();\n\t\t\tvar _self = $(this);\n\t\t\t$(_self).\n\t\t\taddClass('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light').\n\t\t\tclosest('.kt-form__actions').\n\t\t\tfind('.btn').\n\t\t\tattr('disabled', true);\n\n\t\t\t$.ajax('index.php?demo=' + $(_self).data('demo'), {\n\t\t\t\tmethod: 'POST',\n\t\t\t\tdata: {\n\t\t\t\t\tbuilder_reset: 1,\n\t\t\t\t\tdemo: $(_self).data('demo'),\n\t\t\t\t},\n\t\t\t}).done(function(r) {}).always(function() {\n\t\t\t\tlocation.reload();\n\t\t\t});\n\t\t});\n\t};\n\n\tvar keepActiveTab = function() {\n\t\t$('[href^=\"#kt_builder_\"]').click(function(e) {\n\t\t\tvar which = $(this).attr('href');\n\t\t\tvar btn = $('[name=\"builder_submit\"]');\n\t\t\tvar tab = $('[name=\"builder[tab]\"]');\n\t\t\tif ($(tab).length === 0) {\n\t\t\t\t$('<input/>').\n\t\t\t\tattr('type', 'hidden').\n\t\t\t\tattr('name', 'builder[tab]').\n\t\t\t\tval(which).\n\t\t\t\tinsertBefore(btn);\n\t\t\t} else {\n\t\t\t\t$(tab).val(which);\n\t\t\t}\n\t\t}).each(function() {\n\t\t\tif ($(this).hasClass('active')) {\n\t\t\t\tvar which = $(this).attr('href');\n\t\t\t\tvar btn = $('[name=\"builder_submit\"]');\n\t\t\t\tvar tab = $('[name=\"builder[tab]\"]');\n\t\t\t\tif ($(tab).length === 0) {\n\t\t\t\t\t$('<input/>').\n\t\t\t\t\tattr('type', 'hidden').\n\t\t\t\t\tattr('name', 'builder[tab]').\n\t\t\t\t\tval(which).\n\t\t\t\t\tinsertBefore(btn);\n\t\t\t\t} else {\n\t\t\t\t\t$(tab).val(which);\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\t};\n\n\tvar verify = {\n\t\treCaptchaVerified: function() {\n\t\t\treturn $.ajax('../tools/builder/recaptcha.php?recaptcha', {\n\t\t\t\tmethod: 'POST',\n\t\t\t\tdata: {\n\t\t\t\t\tresponse: $('#g-recaptcha-response').val(),\n\t\t\t\t},\n\t\t\t}).fail(function() {\n\t\t\t\tgrecaptcha.reset();\n\t\t\t\t$('#alert-message').\n\t\t\t\tremoveClass('alert-success kt-hide').\n\t\t\t\taddClass('alert-danger').\n\t\t\t\thtml('Invalid reCaptcha validation');\n\t\t\t});\n\t\t},\n\t\tinit: function() {\n\t\t\tvar exportReadyTrigger;\n\t\t\t// click event\n\t\t\t$('#builder_export').click(function(e) {\n\t\t\t\te.preventDefault();\n\t\t\t\texportReadyTrigger = $(this);\n\n\t\t\t\t$('#kt-modal-purchase').modal('show');\n\t\t\t\t$('#alert-message').addClass('kt-hide');\n\t\t\t\tgrecaptcha.reset();\n\t\t\t});\n\n\t\t\t$('#submit-verify').click(function(e) {\n\t\t\t\te.preventDefault();\n\t\t\t\tif (!$('#g-recaptcha-response').val()) {\n\t\t\t\t\t$('#alert-message').\n\t\t\t\t\tremoveClass('alert-success kt-hide').\n\t\t\t\t\taddClass('alert-danger').\n\t\t\t\t\thtml('Invalid reCaptcha validation');\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tverify.reCaptchaVerified().done(function(response) {\n\t\t\t\t\tif (response.success) {\n\t\t\t\t\t\t$('[data-dismiss=\"modal\"]').trigger('click');\n\n\t\t\t\t\t\tvar demo = $(exportReadyTrigger).data('demo');\n\t\t\t\t\t\tswitch ($(exportReadyTrigger).attr('id')) {\n\t\t\t\t\t\t\tcase 'builder_export':\n\t\t\t\t\t\t\t\texporter.exportHtml(demo);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\tcase 'builder_export_html':\n\t\t\t\t\t\t\t\texporter.exportHtml(demo);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\tcase 'builder_export_html_static':\n\t\t\t\t\t\t\t\texporter.exportHtmlStatic(demo);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t}\n\t\t\t\t\t} else {\n\t\t\t\t\t\tgrecaptcha.reset();\n\t\t\t\t\t\t$('#alert-message').\n\t\t\t\t\t\tremoveClass('alert-success kt-hide').\n\t\t\t\t\t\taddClass('alert-danger').\n\t\t\t\t\t\thtml('Invalid reCaptcha validation');\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t});\n\t\t},\n\t};\n\n\t// basic demo\n\tvar init = function() {\n\t\texporter.init();\n\t\tkeepActiveTab();\n\t\tpreview();\n\t\treset();\n\t};\n\n\treturn {\n\t\t// public functions\n\t\tinit: function() {\n\t\t\tverify.init();\n\t\t\tinit();\n\t\t}\n\t};\n}();\n\njQuery(document).ready(function() {\n\tKTLayoutBuilder.init();\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/builder.js?");

/***/ })

/******/ });