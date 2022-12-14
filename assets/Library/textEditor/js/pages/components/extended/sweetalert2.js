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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/components/extended/sweetalert2.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/components/extended/sweetalert2.js":
/*!*****************************************************************!*\
  !*** ../src/assets/js/pages/components/extended/sweetalert2.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Class definition\nvar KTSweetAlert2Demo = function() {\n\n    // Demos\n    var initDemos = function() {\n        // Sweetalert Demo 1\n        $('#kt_sweetalert_demo_1').click(function(e) {\n            swal.fire('Good job!');\n        });\n\n        // Sweetalert Demo 2\n        $('#kt_sweetalert_demo_2').click(function(e) {\n            swal.fire(\"Here's the title!\", \"...and here's the text!\");\n        });\n\n        // Sweetalert Demo 3\n        $('#kt_sweetalert_demo_3_1').click(function(e) {\n            swal.fire(\"Good job!\", \"You clicked the button!\", \"warning\");\n        });\n\n        $('#kt_sweetalert_demo_3_2').click(function(e) {\n            swal.fire(\"Good job!\", \"You clicked the button!\", \"error\");\n        });\n\n        $('#kt_sweetalert_demo_3_3').click(function(e) {\n            swal.fire(\"Good job!\", \"You clicked the button!\", \"success\");\n        });\n\n        $('#kt_sweetalert_demo_3_4').click(function(e) {\n            swal.fire(\"Good job!\", \"You clicked the button!\", \"info\");\n        });\n\n        $('#kt_sweetalert_demo_3_5').click(function(e) {\n            swal.fire(\"Good job!\", \"You clicked the button!\", \"question\");\n        });\n\n        // Sweetalert Demo 4\n        $('#kt_sweetalert_demo_4').click(function(e) {\n            swal.fire({\n                title: \"Good job!\",\n                text: \"You clicked the button!\",\n                type: \"success\",\n                buttonsStyling: false,\n                confirmButtonText: \"Confirm me!\",\n                confirmButtonClass: \"btn btn-brand\"\n            });\n        });\n\n        // Sweetalert Demo 5\n        $('#kt_sweetalert_demo_5').click(function(e) {\n            swal.fire({\n                title: \"Good job!\",\n                text: \"You clicked the button!\",\n                type: \"success\",\n\n                buttonsStyling: false,\n\n                confirmButtonText: \"<i class='la la-headphones'></i> I am game!\",\n                confirmButtonClass: \"btn btn-danger\",\n\n                showCancelButton: true,\n                cancelButtonText: \"<i class='la la-thumbs-down'></i> No, thanks\",\n                cancelButtonClass: \"btn btn-default\"\n            });\n        });\n\n        $('#kt_sweetalert_demo_6').click(function(e) {\n            swal.fire({\n                position: 'top-right',\n                type: 'success',\n                title: 'Your work has been saved',\n                showConfirmButton: false,\n                timer: 1500\n            });\n        });\n\n        $('#kt_sweetalert_demo_7').click(function(e) {\n            swal.fire({\n                title: 'jQuery HTML example',\n                html: $('<div>')\n                    .addClass('some-class')\n                    .text('jQuery is everywhere.'),\n                animation: false,\n                customClass: 'animated tada'\n            })\n        });\n\n        $('#kt_sweetalert_demo_8').click(function(e) {\n            swal.fire({\n                title: 'Are you sure?',\n                text: \"You won't be able to revert this!\",\n                type: 'warning',\n                showCancelButton: true,\n                confirmButtonText: 'Yes, delete it!'\n            }).then(function(result) {\n                if (result.value) {\n                    swal.fire(\n                        'Deleted!',\n                        'Your file has been deleted.',\n                        'success'\n                    )\n                }\n            });\n        });\n\n        $('#kt_sweetalert_demo_9').click(function(e) {\n            swal.fire({\n                title: 'Are you sure?',\n                text: \"You won't be able to revert this!\",\n                type: 'warning',\n                showCancelButton: true,\n                confirmButtonText: 'Yes, delete it!',\n                cancelButtonText: 'No, cancel!',\n                reverseButtons: true\n            }).then(function(result){\n                if (result.value) {\n                    swal.fire(\n                        'Deleted!',\n                        'Your file has been deleted.',\n                        'success'\n                    )\n                    // result.dismiss can be 'cancel', 'overlay',\n                    // 'close', and 'timer'\n                } else if (result.dismiss === 'cancel') {\n                    swal.fire(\n                        'Cancelled',\n                        'Your imaginary file is safe :)',\n                        'error'\n                    )\n                }\n            });\n        });\n\n        $('#kt_sweetalert_demo_10').click(function(e) {\n            swal.fire({\n                title: 'Sweet!',\n                text: 'Modal with a custom image.',\n                imageUrl: 'https://unsplash.it/400/200',\n                imageWidth: 400,\n                imageHeight: 200,\n                imageAlt: 'Custom image',\n                animation: false\n            });\n        });\n\n        $('#kt_sweetalert_demo_11').click(function(e) {\n            swal.fire({\n                title: 'Auto close alert!',\n                text: 'I will close in 5 seconds.',\n                timer: 5000,\n                onOpen: function() {\n                    swal.showLoading()\n                }\n            }).then(function(result) {\n                if (result.dismiss === 'timer') {\n                    console.log('I was closed by the timer')\n                }\n            })\n        });\n    };\n\n    return {\n        // Init\n        init: function() {\n            initDemos();\n        },\n    };\n}();\n\n// Class Initialization\njQuery(document).ready(function() {\n    KTSweetAlert2Demo.init();\n});\n\n\n//# sourceURL=webpack:///../src/assets/js/pages/components/extended/sweetalert2.js?");

/***/ })

/******/ });