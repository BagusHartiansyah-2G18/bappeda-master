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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/components/extended/treeview.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/components/extended/treeview.js":
/*!**************************************************************!*\
  !*** ../src/assets/js/pages/components/extended/treeview.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar KTTreeview = function () {\n\n    var demo1 = function () {\n        $('#kt_tree_1').jstree({\n            \"core\" : {\n                \"themes\" : {\n                    \"responsive\": false\n                }            \n            },\n            \"types\" : {\n                \"default\" : {\n                    \"icon\" : \"fa fa-folder\"\n                },\n                \"file\" : {\n                    \"icon\" : \"fa fa-file\"\n                }\n            },\n            \"plugins\": [\"types\"]\n        });\n    }\n\n    var demo2 = function () {\n        $('#kt_tree_2').jstree({\n            \"core\" : {\n                \"themes\" : {\n                    \"responsive\": false\n                }            \n            },\n            \"types\" : {\n                \"default\" : {\n                    \"icon\" : \"fa fa-folder kt-font-warning\"\n                },\n                \"file\" : {\n                    \"icon\" : \"fa fa-file  kt-font-warning\"\n                }\n            },\n            \"plugins\": [\"types\"]\n        });\n\n        // handle link clicks in tree nodes(support target=\"_blank\" as well)\n        $('#kt_tree_2').on('select_node.jstree', function(e,data) { \n            var link = $('#' + data.selected).find('a');\n            if (link.attr(\"href\") != \"#\" && link.attr(\"href\") != \"javascript:;\" && link.attr(\"href\") != \"\") {\n                if (link.attr(\"target\") == \"_blank\") {\n                    link.attr(\"href\").target = \"_blank\";\n                }\n                document.location.href = link.attr(\"href\");\n                return false;\n            }\n        });\n    }\n\n    var demo3 = function () {\n        $('#kt_tree_3').jstree({\n            'plugins': [\"wholerow\", \"checkbox\", \"types\"],\n            'core': {\n                \"themes\" : {\n                    \"responsive\": false\n                },    \n                'data': [{\n                        \"text\": \"Same but with checkboxes\",\n                        \"children\": [{\n                            \"text\": \"initially selected\",\n                            \"state\": {\n                                \"selected\": true\n                            }\n                        }, {\n                            \"text\": \"custom icon\",\n                            \"icon\": \"fa fa-warning kt-font-danger\"\n                        }, {\n                            \"text\": \"initially open\",\n                            \"icon\" : \"fa fa-folder kt-font-default\",\n                            \"state\": {\n                                \"opened\": true\n                            },\n                            \"children\": [\"Another node\"]\n                        }, {\n                            \"text\": \"custom icon\",\n                            \"icon\": \"fa fa-warning kt-font-waring\"\n                        }, {\n                            \"text\": \"disabled node\",\n                            \"icon\": \"fa fa-check kt-font-success\",\n                            \"state\": {\n                                \"disabled\": true\n                            }\n                        }]\n                    },\n                    \"And wholerow selection\"\n                ]\n            },\n            \"types\" : {\n                \"default\" : {\n                    \"icon\" : \"fa fa-folder kt-font-warning\"\n                },\n                \"file\" : {\n                    \"icon\" : \"fa fa-file  kt-font-warning\"\n                }\n            },\n        });\n    }\n\n    var demo4 = function() {\n        $(\"#kt_tree_4\").jstree({\n            \"core\" : {\n                \"themes\" : {\n                    \"responsive\": false\n                }, \n                // so that create works\n                \"check_callback\" : true,\n                'data': [{\n                        \"text\": \"Parent Node\",\n                        \"children\": [{\n                            \"text\": \"Initially selected\",\n                            \"state\": {\n                                \"selected\": true\n                            }\n                        }, {\n                            \"text\": \"Custom Icon\",\n                            \"icon\": \"fa fa-warning kt-font-danger\"\n                        }, {\n                            \"text\": \"Initially open\",\n                            \"icon\" : \"fa fa-folder kt-font-success\",\n                            \"state\": {\n                                \"opened\": true\n                            },\n                            \"children\": [\n                                {\"text\": \"Another node\", \"icon\" : \"fa fa-file kt-font-waring\"}\n                            ]\n                        }, {\n                            \"text\": \"Another Custom Icon\",\n                            \"icon\": \"fa fa-warning kt-font-waring\"\n                        }, {\n                            \"text\": \"Disabled Node\",\n                            \"icon\": \"fa fa-check kt-font-success\",\n                            \"state\": {\n                                \"disabled\": true\n                            }\n                        }, {\n                            \"text\": \"Sub Nodes\",\n                            \"icon\": \"fa fa-folder kt-font-danger\",\n                            \"children\": [\n                                {\"text\": \"Item 1\", \"icon\" : \"fa fa-file kt-font-waring\"},\n                                {\"text\": \"Item 2\", \"icon\" : \"fa fa-file kt-font-success\"},\n                                {\"text\": \"Item 3\", \"icon\" : \"fa fa-file kt-font-default\"},\n                                {\"text\": \"Item 4\", \"icon\" : \"fa fa-file kt-font-danger\"},\n                                {\"text\": \"Item 5\", \"icon\" : \"fa fa-file kt-font-info\"}\n                            ]\n                        }]\n                    },\n                    \"Another Node\"\n                ]\n            },\n            \"types\" : {\n                \"default\" : {\n                    \"icon\" : \"fa fa-folder kt-font-brand\"\n                },\n                \"file\" : {\n                    \"icon\" : \"fa fa-file  kt-font-brand\"\n                }\n            },\n            \"state\" : { \"key\" : \"demo2\" },\n            \"plugins\" : [ \"contextmenu\", \"state\", \"types\" ]\n        });    \n    }\n\n    var demo5 = function() {\n        $(\"#kt_tree_5\").jstree({\n            \"core\" : {\n                \"themes\" : {\n                    \"responsive\": false\n                }, \n                // so that create works\n                \"check_callback\" : true,\n                'data': [{\n                        \"text\": \"Parent Node\",\n                        \"children\": [{\n                            \"text\": \"Initially selected\",\n                            \"state\": {\n                                \"selected\": true\n                            }\n                        }, {\n                            \"text\": \"Custom Icon\",\n                            \"icon\": \"fa fa-warning kt-font-danger\"\n                        }, {\n                            \"text\": \"Initially open\",\n                            \"icon\" : \"fa fa-folder kt-font-success\",\n                            \"state\": {\n                                \"opened\": true\n                            },\n                            \"children\": [\n                                {\"text\": \"Another node\", \"icon\" : \"fa fa-file kt-font-waring\"}\n                            ]\n                        }, {\n                            \"text\": \"Another Custom Icon\",\n                            \"icon\": \"fa fa-warning kt-font-waring\"\n                        }, {\n                            \"text\": \"Disabled Node\",\n                            \"icon\": \"fa fa-check kt-font-success\",\n                            \"state\": {\n                                \"disabled\": true\n                            }\n                        }, {\n                            \"text\": \"Sub Nodes\",\n                            \"icon\": \"fa fa-folder kt-font-danger\",\n                            \"children\": [\n                                {\"text\": \"Item 1\", \"icon\" : \"fa fa-file kt-font-waring\"},\n                                {\"text\": \"Item 2\", \"icon\" : \"fa fa-file kt-font-success\"},\n                                {\"text\": \"Item 3\", \"icon\" : \"fa fa-file kt-font-default\"},\n                                {\"text\": \"Item 4\", \"icon\" : \"fa fa-file kt-font-danger\"},\n                                {\"text\": \"Item 5\", \"icon\" : \"fa fa-file kt-font-info\"}\n                            ]\n                        }]\n                    },\n                    \"Another Node\"\n                ]\n            },\n            \"types\" : {\n                \"default\" : {\n                    \"icon\" : \"fa fa-folder kt-font-success\"\n                },\n                \"file\" : {\n                    \"icon\" : \"fa fa-file  kt-font-success\"\n                }\n            },\n            \"state\" : { \"key\" : \"demo2\" },\n            \"plugins\" : [ \"dnd\", \"state\", \"types\" ]\n        });    \n    }\n\n    var demo6 = function() {\n        $(\"#kt_tree_6\").jstree({\n            \"core\" : {\n                \"themes\" : {\n                    \"responsive\": false\n                }, \n                // so that create works\n                \"check_callback\" : true,\n                'data' : {\n                    'url' : function (node) {\n                      return 'https://keenthemes.com/metronic/tools/preview/api/jstree/ajax_data.php';\n                    },\n                    'data' : function (node) {\n                      return { 'parent' : node.id };\n                    }\n                }\n            },\n            \"types\" : {\n                \"default\" : {\n                    \"icon\" : \"fa fa-folder kt-font-brand\"\n                },\n                \"file\" : {\n                    \"icon\" : \"fa fa-file  kt-font-brand\"\n                }\n            },\n            \"state\" : { \"key\" : \"demo3\" },\n            \"plugins\" : [ \"dnd\", \"state\", \"types\" ]\n        });\n    }\n\n    return {\n        //main function to initiate the module\n        init: function () {\n            demo1();\n            demo2();\n            demo3();\n            demo4();\n            demo5();\n            demo6();\n        }\n    };\n}();\n\njQuery(document).ready(function() {    \n    KTTreeview.init();\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/components/extended/treeview.js?");

/***/ })

/******/ });