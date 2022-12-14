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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/components/maps/google-maps.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/components/maps/google-maps.js":
/*!*************************************************************!*\
  !*** ../src/assets/js/pages/components/maps/google-maps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Class definition\nvar KTGoogleMapsDemo = function() {\n\n    // Private functions\n\n    var demo1 = function() {\n        var map = new GMaps({\n            div: '#kt_gmap_1',\n            lat: -12.043333,\n            lng: -77.028333\n        });\n    }\n\n    var demo2 = function() {\n        var map = new GMaps({\n            div: '#kt_gmap_2',\n            zoom: 16,\n            lat: -12.043333,\n            lng: -77.028333,\n            click: function(e) {\n                alert('click');\n            },\n            dragend: function(e) {\n                alert('dragend');\n            }\n        });\n    }\n\n    var demo3 = function() {\n        var map = new GMaps({\n            div: '#kt_gmap_3',\n            lat: -51.38739,\n            lng: -6.187181,\n        });\n        map.addMarker({\n            lat: -51.38739,\n            lng: -6.187181,\n            title: 'Lima',\n            details: {\n                database_id: 42,\n                author: 'HPNeo'\n            },\n            click: function(e) {\n                if (console.log) console.log(e);\n                alert('You clicked in this marker');\n            }\n        });\n        map.addMarker({\n            lat: -12.042,\n            lng: -77.028333,\n            title: 'Marker with InfoWindow',\n            infoWindow: {\n                content: '<span style=\"color:#000\">HTML Content!</span>'\n            }\n        });\n        map.setZoom(5);\n    }\n\n    var demo4 = function() {\n        var map = new GMaps({\n            div: '#kt_gmap_4',\n            lat: -12.043333,\n            lng: -77.028333\n        });\n\n        GMaps.geolocate({\n            success: function(position) {\n                map.setCenter(position.coords.latitude, position.coords.longitude);\n            },\n            error: function(error) {\n                alert('Geolocation failed: ' + error.message);\n            },\n            not_supported: function() {\n                alert(\"Your browser does not support geolocation\");\n            },\n            always: function() {\n                //alert(\"Geolocation Done!\");\n            }\n        });\n    }\n\n    var demo5 = function() {\n        var map = new GMaps({\n            div: '#kt_gmap_5',\n            lat: -12.043333,\n            lng: -77.028333,\n            click: function(e) {\n                console.log(e);\n            }\n        });\n\n        var path = [\n            [-12.044012922866312, -77.02470665341184],\n            [-12.05449279282314, -77.03024273281858],\n            [-12.055122327623378, -77.03039293652341],\n            [-12.075917129727586, -77.02764635449216],\n            [-12.07635776902266, -77.02792530422971],\n            [-12.076819390363665, -77.02893381481931],\n            [-12.088527520066453, -77.0241058385925],\n            [-12.090814532191756, -77.02271108990476]\n        ];\n\n        map.drawPolyline({\n            path: path,\n            strokeColor: '#131540',\n            strokeOpacity: 0.6,\n            strokeWeight: 6\n        });\n    }\n\n    var demo6 = function() {\n        var map = new GMaps({\n            div: '#kt_gmap_6',\n            lat: -12.043333,\n            lng: -77.028333\n        });\n\n        var path = [\n            [-12.040397656836609, -77.03373871559225],\n            [-12.040248585302038, -77.03993927003302],\n            [-12.050047116528843, -77.02448169303511],\n            [-12.044804866577001, -77.02154422636042]\n        ];\n\n        var polygon = map.drawPolygon({\n            paths: path,\n            strokeColor: '#BBD8E9',\n            strokeOpacity: 1,\n            strokeWeight: 3,\n            fillColor: '#BBD8E9',\n            fillOpacity: 0.6\n        });\n    }\n\n    var demo7 = function() {\n        var map = new GMaps({\n            div: '#kt_gmap_7',\n            lat: -12.043333,\n            lng: -77.028333\n        });\n        $('#kt_gmap_7_btn').click(function(e) {\n            e.preventDefault();\n            KTUtil.scrollTo('kt_gmap_7_btn', 400);\n            map.travelRoute({\n                origin: [-12.044012922866312, -77.02470665341184],\n                destination: [-12.090814532191756, -77.02271108990476],\n                travelMode: 'driving',\n                step: function(e) {\n                    $('#kt_gmap_7_routes').append('<li>' + e.instructions + '</li>');\n                    $('#kt_gmap_7_routes li:eq(' + e.step_number + ')').delay(800 * e.step_number).fadeIn(500, function() {\n                        map.setCenter(e.end_location.lat(), e.end_location.lng());\n                        map.drawPolyline({\n                            path: e.path,\n                            strokeColor: '#131540',\n                            strokeOpacity: 0.6,\n                            strokeWeight: 6\n                        });\n                    });\n                }\n            });\n        });\n    }\n\n    var demo8 = function() {\n        var map = new GMaps({\n            div: '#kt_gmap_8',\n            lat: -12.043333,\n            lng: -77.028333\n        });\n\n        var handleAction = function() {\n            var text = $.trim($('#kt_gmap_8_address').val());\n            GMaps.geocode({\n                address: text,\n                callback: function(results, status) {\n                    if (status == 'OK') {\n                        var latlng = results[0].geometry.location;\n                        map.setCenter(latlng.lat(), latlng.lng());\n                        map.addMarker({\n                            lat: latlng.lat(),\n                            lng: latlng.lng()\n                        });\n                        KTUtil.scrollTo('kt_gmap_8');\n                    }\n                }\n            });\n        }\n\n        $('#kt_gmap_8_btn').click(function(e) {\n            e.preventDefault();\n            handleAction();\n        });\n\n        $(\"#kt_gmap_8_address\").keypress(function(e) {\n            var keycode = (e.keyCode ? e.keyCode : e.which);\n            if (keycode == '13') {\n                e.preventDefault();\n                handleAction();\n            }\n        });\n    }\n\n    return {\n        // public functions\n        init: function() {\n            // default charts\n            demo1();\n            demo2();\n            demo3();\n            demo4();\n            demo5();\n            demo6();\n            demo7();\n            demo8();\n        }\n    };\n}();\n\njQuery(document).ready(function() {\n    KTGoogleMapsDemo.init();\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/components/maps/google-maps.js?");

/***/ })

/******/ });