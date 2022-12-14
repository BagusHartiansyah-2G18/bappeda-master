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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/custom/todo/todo.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/custom/todo/todo.js":
/*!**************************************************!*\
  !*** ../src/assets/js/pages/custom/todo/todo.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Class definition\nvar KTAppTodo = function() {\n    var asideEl;\n    var listEl;\n    var viewEl;\n\n    var asideOffcanvas;\n\n    var initEditor = function(editor) {\n        // init editor\n        var options = {\n            modules: {\n                toolbar: {}\n            },\n            placeholder: 'Type message...',\n            theme: 'snow'\n        };\n\n        var editor = new Quill('#' + editor, options);\n    }\n\n    var initAttachments = function(elemId) {\n        var id = \"#\" + elemId;\n        var previewNode = $(id + \" .dropzone-item\");\n        previewNode.id = \"\";\n        var previewTemplate = previewNode.parent('.dropzone-items').html();\n        previewNode.remove();\n\n        var myDropzone = new Dropzone(id, { // Make the whole body a dropzone\n            url: \"https://keenthemes.com/scripts/void.php\", // Set the url for your upload script location\n            parallelUploads: 20,\n            maxFilesize: 1, // Max filesize in MB\n            previewTemplate: previewTemplate,\n            previewsContainer: id + \" .dropzone-items\", // Define the container to display the previews\n            clickable: id + \"_select\" // Define the element that should be used as click trigger to select files.\n        });\n\n        myDropzone.on(\"addedfile\", function(file) {\n            // Hookup the start button\n            $(document).find(id + ' .dropzone-item').css('display', '');\n        });\n\n        // Update the total progress bar\n        myDropzone.on(\"totaluploadprogress\", function(progress) {\n            document.querySelector(id + \" .progress-bar\").style.width = progress + \"%\";\n        });\n\n        myDropzone.on(\"sending\", function(file) {\n            // Show the total progress bar when upload starts\n            document.querySelector(id + \" .progress-bar\").style.opacity = \"1\";\n        });\n\n        // Hide the total progress bar when nothing's uploading anymore\n        myDropzone.on(\"complete\", function(progress) {\n            var thisProgressBar = id + \" .dz-complete\";\n            setTimeout(function() {\n                $(thisProgressBar + \" .progress-bar, \" + thisProgressBar + \" .progress\").css('opacity', '0');\n            }, 300)\n        });\n    }\n\n    return {\n        // public functions\n        init: function() {\n            asideEl = KTUtil.getByID('kt_todo_aside');\n            listEl = KTUtil.getByID('kt_todo_list');\n            viewEl = KTUtil.getByID('kt_todo_view');\n\n            // init\n            KTAppTodo.initAside();\n            KTAppTodo.initList();\n            KTAppTodo.initCommentForm();\n            KTAppTodo.initView();\n        },\n\n        initAside: function() {\n            // Mobile offcanvas for mobile mode\n            asideOffcanvas = new KTOffcanvas(asideEl, {\n                overlay: true,\n                baseClass: 'kt-todo__aside',\n                closeBy: 'kt_todo_aside_close',\n                toggleBy: 'kt_subheader_mobile_toggle'\n            });\n        },\n\n        initList: function() {\n            // View message\n            KTUtil.on(listEl, '.kt-todo__item', 'click', function(e) {\n                var actionsEl = KTUtil.find(this, '.kt-todo__actions');\n\n                // skip actions click\n                if (e.target === actionsEl || (actionsEl && actionsEl.contains(e.target) === true)) {\n                    return false;\n                }\n\n                if (KTUtil.isInResponsiveRange('tablet-and-mobile') === false) {\n                    return; // mobile mode\n                }\n\n                // demo loading\n                var loading = new KTDialog({\n                    'type': 'loader',\n                    'placement': 'top center',\n                    'message': 'Loading ...'\n                });\n                loading.show();\n\n                setTimeout(function() {\n                    loading.hide();\n\n                    KTUtil.css(listEl, 'display', 'none');\n                    KTUtil.css(viewEl, 'display', 'flex');\n                }, 700);\n            });\n\n            // Group selection\n            KTUtil.on(listEl, '.kt-todo__toolbar .kt-todo__check .kt-checkbox input', 'click', function() {\n                var items = KTUtil.findAll(listEl, '.kt-todo__items .kt-todo__item');\n\n                for (var i = 0, j = items.length; i < j; i++) {\n                    var item = items[i];\n                    var checkbox = KTUtil.find(item, '.kt-todo__actions .kt-checkbox input');\n                    checkbox.checked = this.checked;\n\n                    if (this.checked) {\n                        KTUtil.addClass(item, 'kt-todo__item--selected');\n                    } else {\n                        KTUtil.removeClass(item, 'kt-todo__item--selected');\n                    }\n                }\n            });\n\n            // Individual selection\n            KTUtil.on(listEl, '.kt-todo__item .kt-checkbox input', 'click', function() {\n                var item = this.closest('.kt-todo__item');\n\n                if (item && this.checked) {\n                    KTUtil.addClass(item, 'kt-todo__item--selected');\n                } else {\n                    KTUtil.removeClass(item, 'kt-todo__item--selected');\n                }\n            });\n        },\n\n        initView: function() {\n            // Back to listing\n            KTUtil.on(viewEl, '.kt-todo__toolbar .kt-todo__icon.kt-todo__icon--back', 'click', function() {\n                // demo loading\n                var loading = new KTDialog({\n                    'type': 'loader',\n                    'placement': 'top center',\n                    'message': 'Loading ...'\n                });\n                loading.show();\n\n                setTimeout(function() {\n                    loading.hide();\n\n                    KTUtil.css(listEl, 'display', 'flex');\n                    KTUtil.css(viewEl, 'display', 'none');\n                }, 700);\n            });\n        },\n\n        initCommentForm: function() {\n            initEditor('kt_todo_post_editor');\n            initAttachments('kt_todo_post_attachments');\n        }\n    };\n}();\n\nKTUtil.ready(function() {\n    KTAppTodo.init();\n});\n\n\n//# sourceURL=webpack:///../src/assets/js/pages/custom/todo/todo.js?");

/***/ })

/******/ });