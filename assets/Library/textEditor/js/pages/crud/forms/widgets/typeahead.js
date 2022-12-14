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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/crud/forms/widgets/typeahead.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/crud/forms/widgets/typeahead.js":
/*!**************************************************************!*\
  !*** ../src/assets/js/pages/crud/forms/widgets/typeahead.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Class definition\nvar KTTypeahead = function() {\n\n    var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',\n            'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',\n            'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',\n            'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',\n            'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',\n            'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',\n            'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',\n            'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',\n            'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'\n        ];\n\n    // Private functions\n    var demo1 = function() {\n        var substringMatcher = function(strs) {\n            return function findMatches(q, cb) {\n                var matches, substringRegex;\n\n                // an array that will be populated with substring matches\n                matches = [];\n\n                // regex used to determine if a string contains the substring `q`\n                substrRegex = new RegExp(q, 'i');\n\n                // iterate through the pool of strings and for any string that\n                // contains the substring `q`, add it to the `matches` array\n                $.each(strs, function(i, str) {\n                    if (substrRegex.test(str)) {\n                        matches.push(str);\n                    }\n                });\n\n                cb(matches);\n            };\n        };\n\n        $('#kt_typeahead_1, #kt_typeahead_1_modal, #kt_typeahead_1_validate, #kt_typeahead_2_validate, #kt_typeahead_3_validate').typeahead({\n            hint: true,\n            highlight: true,\n            minLength: 1\n        }, {\n            name: 'states',\n            source: substringMatcher(states)\n        });\n    }\n\n    var demo2 = function() {\n        // constructs the suggestion engine\n        var bloodhound = new Bloodhound({\n            datumTokenizer: Bloodhound.tokenizers.whitespace,\n            queryTokenizer: Bloodhound.tokenizers.whitespace,\n            // `states` is an array of state names defined in \"The Basics\"\n            local: states\n        });\n\n        $('#kt_typeahead_2, #kt_typeahead_2_modal').typeahead({\n            hint: true,\n            highlight: true,\n            minLength: 1\n        },\n        {\n            name: 'states',\n            source: bloodhound\n        }); \n    }\n\n    var demo3 = function() {\n        var countries = new Bloodhound({\n            datumTokenizer: Bloodhound.tokenizers.whitespace,\n            queryTokenizer: Bloodhound.tokenizers.whitespace,\n            // url points to a json file that contains an array of country names, see\n            // https://github.com/twitter/typeahead.js/blob/gh-pages/data/countries.json\n            prefetch: 'https://keenthemes.com/metronic/tools/preview/api/typeahead/countries.json'\n        });\n\n        // passing in `null` for the `options` arguments will result in the default\n        // options being used\n        $('#kt_typeahead_3, #kt_typeahead_3_modal').typeahead(null, {\n            name: 'countries',\n            source: countries\n        });\n    }\n\n    var demo4 = function() {\n        var bestPictures = new Bloodhound({\n          datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),\n          queryTokenizer: Bloodhound.tokenizers.whitespace,\n          prefetch: 'https://keenthemes.com/metronic/tools/preview/api/typeahead/movies.json'\n        });\n\n        $('#kt_typeahead_4').typeahead(null, {\n            name: 'best-pictures',\n            display: 'value',\n            source: bestPictures,\n            templates: {\n                empty: [\n                    '<div class=\"empty-message\" style=\"padding: 10px 15px; text-align: center;\">',\n                        'unable to find any Best Picture winners that match the current query',\n                    '</div>'\n                ].join('\\n'),\n                suggestion: Handlebars.compile('<div><strong>{{value}}</strong> – {{year}}</div>')\n            }\n        });\n    }\n\n    var demo5 = function() {\n        var nbaTeams = new Bloodhound({\n            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),\n            queryTokenizer: Bloodhound.tokenizers.whitespace,\n            prefetch: 'https://keenthemes.com/metronic/tools/preview/api/typeahead/nba.json'\n        });\n\n        var nhlTeams = new Bloodhound({\n            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),\n            queryTokenizer: Bloodhound.tokenizers.whitespace,\n            prefetch: 'https://keenthemes.com/metronic/tools/preview/api/typeahead/nhl.json'\n        });\n\n        $('#kt_typeahead_5').typeahead({\n                highlight: true\n            },{\n                name: 'nba-teams',\n                display: 'team',\n                source: nbaTeams,\n                templates: {\n                    header: '<h3 class=\"league-name\" style=\"padding: 5px 15px; font-size: 1.2rem; margin:0;\">NBA Teams</h3>'\n                }\n            },{\n                name: 'nhl-teams',\n                display: 'team',\n                source: nhlTeams,\n                templates: {\n                    header: '<h3 class=\"league-name\" style=\"padding: 5px 15px; font-size: 1.2rem; margin:0;\">NHL Teams</h3>'\n                }\n            }\n        );\n    }\n\n    return {\n        // public functions\n        init: function() {\n            demo1();\n            demo2();\n            demo3();\n            demo4();\n            demo5();\n        }\n    };\n}();\n\njQuery(document).ready(function() {\n    KTTypeahead.init();\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/crud/forms/widgets/typeahead.js?");

/***/ })

/******/ });