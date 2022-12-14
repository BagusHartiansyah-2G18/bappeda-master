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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/crud/forms/widgets/select2.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/crud/forms/widgets/select2.js":
/*!************************************************************!*\
  !*** ../src/assets/js/pages/crud/forms/widgets/select2.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Class definition\nvar KTSelect2 = function() {\n    // Private functions\n    var demos = function() {\n        // basic\n        $('#kt_select2_1, #kt_select2_1_validate').select2({\n            placeholder: \"Select a state\"\n        });\n\n        // nested\n        $('#kt_select2_2, #kt_select2_2_validate').select2({\n            placeholder: \"Select a state\"\n        });\n\n        // multi select\n        $('#kt_select2_3, #kt_select2_3_validate').select2({\n            placeholder: \"Select a state\",\n        });\n\n        // basic\n        $('#kt_select2_4').select2({\n            placeholder: \"Select a state\",\n            allowClear: true\n        });\n\n        // loading data from array\n        var data = [{\n            id: 0,\n            text: 'Enhancement'\n        }, {\n            id: 1,\n            text: 'Bug'\n        }, {\n            id: 2,\n            text: 'Duplicate'\n        }, {\n            id: 3,\n            text: 'Invalid'\n        }, {\n            id: 4,\n            text: 'Wontfix'\n        }];\n\n        $('#kt_select2_5').select2({\n            placeholder: \"Select a value\",\n            data: data\n        });\n\n        // loading remote data\n\n        function formatRepo(repo) {\n            if (repo.loading) return repo.text;\n            var markup = \"<div class='select2-result-repository clearfix'>\" +\n                \"<div class='select2-result-repository__meta'>\" +\n                \"<div class='select2-result-repository__title'>\" + repo.full_name + \"</div>\";\n            if (repo.description) {\n                markup += \"<div class='select2-result-repository__description'>\" + repo.description + \"</div>\";\n            }\n            markup += \"<div class='select2-result-repository__statistics'>\" +\n                \"<div class='select2-result-repository__forks'><i class='fa fa-flash'></i> \" + repo.forks_count + \" Forks</div>\" +\n                \"<div class='select2-result-repository__stargazers'><i class='fa fa-star'></i> \" + repo.stargazers_count + \" Stars</div>\" +\n                \"<div class='select2-result-repository__watchers'><i class='fa fa-eye'></i> \" + repo.watchers_count + \" Watchers</div>\" +\n                \"</div>\" +\n                \"</div></div>\";\n            return markup;\n        }\n\n        function formatRepoSelection(repo) {\n            return repo.full_name || repo.text;\n        }\n\n        $(\"#kt_select2_6\").select2({\n            placeholder: \"Search for git repositories\",\n            allowClear: true,\n            ajax: {\n                url: \"https://api.github.com/search/repositories\",\n                dataType: 'json',\n                delay: 250,\n                data: function(params) {\n                    return {\n                        q: params.term, // search term\n                        page: params.page\n                    };\n                },\n                processResults: function(data, params) {\n                    // parse the results into the format expected by Select2\n                    // since we are using custom formatting functions we do not need to\n                    // alter the remote JSON data, except to indicate that infinite\n                    // scrolling can be used\n                    params.page = params.page || 1;\n\n                    return {\n                        results: data.items,\n                        pagination: {\n                            more: (params.page * 30) < data.total_count\n                        }\n                    };\n                },\n                cache: true\n            },\n            escapeMarkup: function(markup) {\n                return markup;\n            }, // let our custom formatter work\n            minimumInputLength: 1,\n            templateResult: formatRepo, // omitted for brevity, see the source of this page\n            templateSelection: formatRepoSelection // omitted for brevity, see the source of this page\n        });\n\n        // custom styles\n\n        // tagging support\n        $('#kt_select2_12_1, #kt_select2_12_2, #kt_select2_12_3, #kt_select2_12_4').select2({\n            placeholder: \"Select an option\",\n        });\n\n        // disabled mode\n        $('#kt_select2_7').select2({\n            placeholder: \"Select an option\"\n        });\n\n        // disabled results\n        $('#kt_select2_8').select2({\n            placeholder: \"Select an option\"\n        });\n\n        // limiting the number of selections\n        $('#kt_select2_9').select2({\n            placeholder: \"Select an option\",\n            maximumSelectionLength: 2\n        });\n\n        // hiding the search box\n        $('#kt_select2_10').select2({\n            placeholder: \"Select an option\",\n            minimumResultsForSearch: Infinity\n        });\n\n        // tagging support\n        $('#kt_select2_11').select2({\n            placeholder: \"Add a tag\",\n            tags: true\n        });\n\n        // disabled results\n        $('.kt-select2-general').select2({\n            placeholder: \"Select an option\"\n        });\n    }\n\n    var modalDemos = function() {\n        $('#kt_select2_modal').on('shown.bs.modal', function () {\n            // basic\n            $('#kt_select2_1_modal').select2({\n                placeholder: \"Select a state\"\n            });\n\n            // nested\n            $('#kt_select2_2_modal').select2({\n                placeholder: \"Select a state\"\n            });\n\n            // multi select\n            $('#kt_select2_3_modal').select2({\n                placeholder: \"Select a state\",\n            });\n\n            // basic\n            $('#kt_select2_4_modal').select2({\n                placeholder: \"Select a state\",\n                allowClear: true\n            }); \n        });\n    }\n\n    // Public functions\n    return {\n        init: function() {\n            demos();\n            modalDemos();\n        }\n    };\n}();\n\n// Initialization\njQuery(document).ready(function() {\n    KTSelect2.init();\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/crud/forms/widgets/select2.js?");

/***/ })

/******/ });