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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/crud/forms/editors/quill.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/crud/forms/editors/quill.js":
/*!**********************************************************!*\
  !*** ../src/assets/js/pages/crud/forms/editors/quill.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Class definition\nvar KTQuilDemos = function() {\n\n    // Private functions\n    var demo1 = function() {\n        var quill = new Quill('#kt_quil_1', {\n            modules: {\n                toolbar: [\n                    [{\n                        header: [1, 2, false]\n                    }],\n                    ['bold', 'italic', 'underline'],\n                    ['image', 'code-block']\n                ]\n            },\n            placeholder: 'Type your text here...',\n            theme: 'snow' // or 'bubble'\n        });\n    }\n\n    var demo2 = function() {\n        var Delta = Quill.import('delta');\n        var quill = new Quill('#kt_quil_2', {\n            modules: {\n                toolbar: true\n            },\n            placeholder: 'Type your text here...',\n            theme: 'snow'\n        });\n\n        // Store accumulated changes\n        var change = new Delta();\n        quill.on('text-change', function(delta) {\n            change = change.compose(delta);\n        });\n\n        // Save periodically\n        setInterval(function() {\n            if (change.length() > 0) {\n                console.log('Saving changes', change);\n                /*\n                Send partial changes\n                $.post('/your-endpoint', {\n                  partial: JSON.stringify(change)\n                });\n\n                Send entire document\n                $.post('/your-endpoint', {\n                  doc: JSON.stringify(quill.getContents())\n                });\n                */\n                change = new Delta();\n            }\n        }, 5 * 1000);\n\n        // Check for unsaved data\n        window.onbeforeunload = function() {\n            if (change.length() > 0) {\n                return 'There are unsaved changes. Are you sure you want to leave?';\n            }\n        }\n    }\n\n    return {\n        // public functions\n        init: function() {\n            demo1();\n            demo2();\n        }\n    };\n}();\n\njQuery(document).ready(function() {\n    KTQuilDemos.init();\n});\n\n\n//# sourceURL=webpack:///../src/assets/js/pages/crud/forms/editors/quill.js?");

/***/ })

/******/ });