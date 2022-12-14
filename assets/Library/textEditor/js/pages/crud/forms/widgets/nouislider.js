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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/crud/forms/widgets/nouislider.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/crud/forms/widgets/nouislider.js":
/*!***************************************************************!*\
  !*** ../src/assets/js/pages/crud/forms/widgets/nouislider.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Class definition\nvar KTnoUiSliderDemos = function() {\n\n    // Private functions\n\n     \n    var demo1 = function() {\n        // init slider\n        var slider = document.getElementById('kt_nouislider_1');\n\n        noUiSlider.create(slider, {\n            start: [ 0 ],\n            step: 2,\n            range: {\n                'min': [ 0 ],\n                'max': [ 10 ]\n            },\n            format: wNumb({\n                decimals: 0 \n            })\n        });\n\n        // init slider input\n        var sliderInput = document.getElementById('kt_nouislider_1_input');\n\n        slider.noUiSlider.on('update', function( values, handle ) {\n            sliderInput.value = values[handle];\n        });\n\n        sliderInput.addEventListener('change', function(){\n            slider.noUiSlider.set(this.value);\n        });\n    }\n\n    var demo2 = function() {\n        // init slider\n        var slider = document.getElementById('kt_nouislider_2');\n\n        noUiSlider.create(slider, {\n            start: [ 20000 ],\n            connect: [true, false],\n            step: 1000,\n            range: {\n                'min': [ 20000 ],\n                'max': [ 80000 ]\n            },\n            format: wNumb({\n                decimals: 3,\n                thousand: '.',\n                postfix: ' (US $)',\n            })\n        });\n\n        // init slider input\n        var sliderInput = document.getElementById('kt_nouislider_2_input');\n\n        slider.noUiSlider.on('update', function( values, handle ) {\n            sliderInput.value = values[handle];\n        });\n\n        sliderInput.addEventListener('change', function(){\n            slider.noUiSlider.set(this.value);\n        });\n    }\n\n    var demo3 = function() {\n        // init slider\n        var slider = document.getElementById('kt_nouislider_3');\n\n        noUiSlider.create(slider, {\n            start: [20, 80],\n            connect: true,\n            direction: 'rtl',\n            tooltips: [true, wNumb({ decimals: 1 })],\n            range: {\n                'min': [0],\n                '10%': [10, 10],\n                '50%': [80, 50],\n                '80%': 150,\n                'max': 200\n            }\n        });\n       \n\n        // init slider input\n        var sliderInput0 = document.getElementById('kt_nouislider_3_input');\n        var sliderInput1 = document.getElementById('kt_nouislider_3.1_input');\n        var sliderInputs = [sliderInput1, sliderInput0];        \n\n        slider.noUiSlider.on('update', function( values, handle ) {\n            sliderInputs[handle].value = values[handle];\n        });\n    }\n\n    var demo4 = function() {\n\n       var slider = document.getElementById('kt_nouislider_input_select');\n\n        // Append the option elements\n        for ( var i = -20; i <= 40; i++ ){\n\n            var option = document.createElement(\"option\");\n                option.text = i;\n                option.value = i;\n\n            slider.appendChild(option);\n        }\n\n        // init slider\n        var html5Slider = document.getElementById('kt_nouislider_4');\n\n        noUiSlider.create(html5Slider, {\n            start: [ 10, 30 ],\n            connect: true,\n            range: {\n                'min': -20,\n                'max': 40\n            }\n        });\n\n        // init slider input\n        var inputNumber = document.getElementById('kt_nouislider_input_number');\n\n        html5Slider.noUiSlider.on('update', function( values, handle ) {\n\n            var value = values[handle];\n\n            if ( handle ) {\n                inputNumber.value = value;\n            } else {\n                slider.value = Math.round(value);\n            }\n        });\n\n        slider.addEventListener('change', function(){\n            html5Slider.noUiSlider.set([this.value, null]);\n        });\n\n        inputNumber.addEventListener('change', function(){\n            html5Slider.noUiSlider.set([null, this.value]);\n        });\n    }\n \n    var demo5 = function() {\n        // init slider\n        var slider = document.getElementById('kt_nouislider_5');\n\n        noUiSlider.create(slider, {\n            start: 20,\n            range: {\n                min: 0,\n                max: 100\n            },\n            pips: {\n                mode: 'values',\n                values: [20, 80],\n                density: 4\n            }\n        });\n\n        var sliderInput = document.getElementById('kt_nouislider_5_input');\n\n        slider.noUiSlider.on('update', function( values, handle ) {\n            sliderInput.value = values[handle];\n        });\n\n        sliderInput.addEventListener('change', function(){\n            slider.noUiSlider.set(this.value);\n        });\n\n        slider.noUiSlider.on('change', function ( values, handle ) {\n            if ( values[handle] < 20 ) {\n                slider.noUiSlider.set(20);\n            } else if ( values[handle] > 80 ) {\n                slider.noUiSlider.set(80);\n            }\n        });\n    }\n\n    var demo6 = function() {\n        // init slider             \n\n        var verticalSlider = document.getElementById('kt_nouislider_6');\n\n        noUiSlider.create(verticalSlider, {\n            start: 40,\n            orientation: 'vertical',\n            range: {\n                'min': 0,\n                'max': 100\n            }\n        }); \n\n        // init slider input\n        var sliderInput = document.getElementById('kt_nouislider_6_input');\n\n        verticalSlider.noUiSlider.on('update', function( values, handle ) {\n            sliderInput.value = values[handle];\n        });\n\n        sliderInput.addEventListener('change', function(){\n            verticalSlider.noUiSlider.set(this.value);\n        });      \n    }    \n\n    // Modal demo\n\n    var modaldemo1 = function() {\n        var slider = document.getElementById('kt_nouislider_modal1');\n\n        noUiSlider.create(slider, {\n            start: [ 0 ],\n            step: 2,\n            range: {\n                'min': [ 0 ],\n                'max': [ 10 ]\n            },\n            format: wNumb({\n                decimals: 0 \n            })\n        });\n\n        // init slider input\n        var sliderInput = document.getElementById('kt_nouislider_modal1_input');\n\n        slider.noUiSlider.on('update', function( values, handle ) {\n            sliderInput.value = values[handle];\n        });\n\n        sliderInput.addEventListener('change', function(){\n            slider.noUiSlider.set(this.value);\n        });\n    }\n\n    var modaldemo2 = function() {\n        var slider = document.getElementById('kt_nouislider_modal2');\n\n        noUiSlider.create(slider, {\n            start: [ 20000 ],\n            connect: [true, false],\n            step: 1000,\n            range: {\n                'min': [ 20000 ],\n                'max': [ 80000 ]\n            },\n            format: wNumb({\n                decimals: 3,\n                thousand: '.',\n                postfix: ' (US $)',\n            })\n        });\n\n        // init slider input\n        var sliderInput = document.getElementById('kt_nouislider_modal2_input');\n\n        slider.noUiSlider.on('update', function( values, handle ) {\n            sliderInput.value = values[handle];\n        });\n\n        sliderInput.addEventListener('change', function(){\n            slider.noUiSlider.set(this.value);\n        });\n    }\n\n    var modaldemo3 = function() {\n        var slider = document.getElementById('kt_nouislider_modal3');\n\n        noUiSlider.create(slider, {\n            start: [20, 80],\n            connect: true,\n            direction: 'rtl',\n            tooltips: [true, wNumb({ decimals: 1 })],\n            range: {\n                'min': [0],\n                '10%': [10, 10],\n                '50%': [80, 50],\n                '80%': 150,\n                'max': 200\n            }\n        });\n       \n\n        // init slider input\n        var sliderInput0 = document.getElementById('kt_nouislider_modal1.1_input');\n        var sliderInput1 = document.getElementById('kt_nouislider_modal1.2_input');\n        var sliderInputs = [sliderInput1, sliderInput0];        \n\n        slider.noUiSlider.on('update', function( values, handle ) {\n            sliderInputs[handle].value = values[handle];\n        });\n    }\n    return {\n        // public functions\n        init: function() {\n            demo1();\n            demo2();\n            demo3();  \n            demo4(); \n            demo5();  \n            demo6(); \n            modaldemo1();\n            modaldemo2();\n            modaldemo3();                           \n        }\n    };\n}();\n\njQuery(document).ready(function() {\n    KTnoUiSliderDemos.init();\n});\n\n\n\n\n//# sourceURL=webpack:///../src/assets/js/pages/crud/forms/widgets/nouislider.js?");

/***/ })

/******/ });