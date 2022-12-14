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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/components/maps/jqvmap.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/components/maps/jqvmap.js":
/*!********************************************************!*\
  !*** ../src/assets/js/pages/components/maps/jqvmap.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Class definition\nvar KTjQVMapDemo = function() {\n\n    var sample_data = {\n        \"af\": \"16.63\",\n        \"al\": \"11.58\",\n        \"dz\": \"158.97\",\n        \"ao\": \"85.81\",\n        \"ag\": \"1.1\",\n        \"ar\": \"351.02\",\n        \"am\": \"8.83\",\n        \"au\": \"1219.72\",\n        \"at\": \"366.26\",\n        \"az\": \"52.17\",\n        \"bs\": \"7.54\",\n        \"bh\": \"21.73\",\n        \"bd\": \"105.4\",\n        \"bb\": \"3.96\",\n        \"by\": \"52.89\",\n        \"be\": \"461.33\",\n        \"bz\": \"1.43\",\n        \"bj\": \"6.49\",\n        \"bt\": \"1.4\",\n        \"bo\": \"19.18\",\n        \"ba\": \"16.2\",\n        \"bw\": \"12.5\",\n        \"br\": \"2023.53\",\n        \"bn\": \"11.96\",\n        \"bg\": \"44.84\",\n        \"bf\": \"8.67\",\n        \"bi\": \"1.47\",\n        \"kh\": \"11.36\",\n        \"cm\": \"21.88\",\n        \"ca\": \"1563.66\",\n        \"cv\": \"1.57\",\n        \"cf\": \"2.11\",\n        \"td\": \"7.59\",\n        \"cl\": \"199.18\",\n        \"cn\": \"5745.13\",\n        \"co\": \"283.11\",\n        \"km\": \"0.56\",\n        \"cd\": \"12.6\",\n        \"cg\": \"11.88\",\n        \"cr\": \"35.02\",\n        \"ci\": \"22.38\",\n        \"hr\": \"59.92\",\n        \"cy\": \"22.75\",\n        \"cz\": \"195.23\",\n        \"dk\": \"304.56\",\n        \"dj\": \"1.14\",\n        \"dm\": \"0.38\",\n        \"do\": \"50.87\",\n        \"ec\": \"61.49\",\n        \"eg\": \"216.83\",\n        \"sv\": \"21.8\",\n        \"gq\": \"14.55\",\n        \"er\": \"2.25\",\n        \"ee\": \"19.22\",\n        \"et\": \"30.94\",\n        \"fj\": \"3.15\",\n        \"fi\": \"231.98\",\n        \"fr\": \"2555.44\",\n        \"ga\": \"12.56\",\n        \"gm\": \"1.04\",\n        \"ge\": \"11.23\",\n        \"de\": \"3305.9\",\n        \"gh\": \"18.06\",\n        \"gr\": \"305.01\",\n        \"gd\": \"0.65\",\n        \"gt\": \"40.77\",\n        \"gn\": \"4.34\",\n        \"gw\": \"0.83\",\n        \"gy\": \"2.2\",\n        \"ht\": \"6.5\",\n        \"hn\": \"15.34\",\n        \"hk\": \"226.49\",\n        \"hu\": \"132.28\",\n        \"is\": \"12.77\",\n        \"in\": \"1430.02\",\n        \"id\": \"695.06\",\n        \"ir\": \"337.9\",\n        \"iq\": \"84.14\",\n        \"ie\": \"204.14\",\n        \"il\": \"201.25\",\n        \"it\": \"2036.69\",\n        \"jm\": \"13.74\",\n        \"jp\": \"5390.9\",\n        \"jo\": \"27.13\",\n        \"kz\": \"129.76\",\n        \"ke\": \"32.42\",\n        \"ki\": \"0.15\",\n        \"kr\": \"986.26\",\n        \"undefined\": \"5.73\",\n        \"kw\": \"117.32\",\n        \"kg\": \"4.44\",\n        \"la\": \"6.34\",\n        \"lv\": \"23.39\",\n        \"lb\": \"39.15\",\n        \"ls\": \"1.8\",\n        \"lr\": \"0.98\",\n        \"ly\": \"77.91\",\n        \"lt\": \"35.73\",\n        \"lu\": \"52.43\",\n        \"mk\": \"9.58\",\n        \"mg\": \"8.33\",\n        \"mw\": \"5.04\",\n        \"my\": \"218.95\",\n        \"mv\": \"1.43\",\n        \"ml\": \"9.08\",\n        \"mt\": \"7.8\",\n        \"mr\": \"3.49\",\n        \"mu\": \"9.43\",\n        \"mx\": \"1004.04\",\n        \"md\": \"5.36\",\n        \"mn\": \"5.81\",\n        \"me\": \"3.88\",\n        \"ma\": \"91.7\",\n        \"mz\": \"10.21\",\n        \"mm\": \"35.65\",\n        \"na\": \"11.45\",\n        \"np\": \"15.11\",\n        \"nl\": \"770.31\",\n        \"nz\": \"138\",\n        \"ni\": \"6.38\",\n        \"ne\": \"5.6\",\n        \"ng\": \"206.66\",\n        \"no\": \"413.51\",\n        \"om\": \"53.78\",\n        \"pk\": \"174.79\",\n        \"pa\": \"27.2\",\n        \"pg\": \"8.81\",\n        \"py\": \"17.17\",\n        \"pe\": \"153.55\",\n        \"ph\": \"189.06\",\n        \"pl\": \"438.88\",\n        \"pt\": \"223.7\",\n        \"qa\": \"126.52\",\n        \"ro\": \"158.39\",\n        \"ru\": \"1476.91\",\n        \"rw\": \"5.69\",\n        \"ws\": \"0.55\",\n        \"st\": \"0.19\",\n        \"sa\": \"434.44\",\n        \"sn\": \"12.66\",\n        \"rs\": \"38.92\",\n        \"sc\": \"0.92\",\n        \"sl\": \"1.9\",\n        \"sg\": \"217.38\",\n        \"sk\": \"86.26\",\n        \"si\": \"46.44\",\n        \"sb\": \"0.67\",\n        \"za\": \"354.41\",\n        \"es\": \"1374.78\",\n        \"lk\": \"48.24\",\n        \"kn\": \"0.56\",\n        \"lc\": \"1\",\n        \"vc\": \"0.58\",\n        \"sd\": \"65.93\",\n        \"sr\": \"3.3\",\n        \"sz\": \"3.17\",\n        \"se\": \"444.59\",\n        \"ch\": \"522.44\",\n        \"sy\": \"59.63\",\n        \"tw\": \"426.98\",\n        \"tj\": \"5.58\",\n        \"tz\": \"22.43\",\n        \"th\": \"312.61\",\n        \"tl\": \"0.62\",\n        \"tg\": \"3.07\",\n        \"to\": \"0.3\",\n        \"tt\": \"21.2\",\n        \"tn\": \"43.86\",\n        \"tr\": \"729.05\",\n        \"tm\": 0,\n        \"ug\": \"17.12\",\n        \"ua\": \"136.56\",\n        \"ae\": \"239.65\",\n        \"gb\": \"2258.57\",\n        \"us\": \"14624.18\",\n        \"uy\": \"40.71\",\n        \"uz\": \"37.72\",\n        \"vu\": \"0.72\",\n        \"ve\": \"285.21\",\n        \"vn\": \"101.99\",\n        \"ye\": \"30.02\",\n        \"zm\": \"15.69\",\n        \"zw\": \"5.57\"\n    };\n\n    // Private functions\n\n    var setupMap = function(name) {\n        var data = {\n            map: 'world_en',\n            backgroundColor: null,\n            color: '#ffffff',\n            hoverOpacity: 0.7,\n            selectedColor: '#666666',\n            enableZoom: true,\n            showTooltip: true,\n            values: sample_data,\n            scaleColors: ['#C8EEFF', '#006491'],\n            normalizeFunction: 'polynomial',\n            onRegionOver: function(event, code) {\n                //sample to interact with map\n                if (code == 'ca') {\n                    event.preventDefault();\n                }\n            },\n            onRegionClick: function(element, code, region) {\n                //sample to interact with map\n                var message = 'You clicked \"' + region + '\" which has the code: ' + code.toUpperCase();\n                alert(message);\n            }\n        };\n\n        data.map = name + '_en';\n\n        var map = jQuery('#kt_jqvmap_' + name);\n\n        map.width(map.parent().width());\n        map.vectorMap(data);\n    }\n\n    var setupMaps = function() {\n        setupMap(\"world\");\n        setupMap(\"usa\");\n        setupMap(\"europe\");\n        setupMap(\"russia\");\n        setupMap(\"germany\");\n    }\n\n    return {\n        // public functions\n        init: function() {\n            // default charts\n            setupMaps();\n\n            KTUtil.addResizeHandler(function() {\n                setupMaps();\n            });\n        }\n    };\n}();\n\njQuery(document).ready(function() {\n    KTjQVMapDemo.init();\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/components/maps/jqvmap.js?");

/***/ })

/******/ });