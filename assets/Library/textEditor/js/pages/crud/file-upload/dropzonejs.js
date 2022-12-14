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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/crud/file-upload/dropzonejs.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/crud/file-upload/dropzonejs.js":
/*!*************************************************************!*\
  !*** ../src/assets/js/pages/crud/file-upload/dropzonejs.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// Class definition\n\nvar KTDropzoneDemo = function () {\n    // Private functions\n    var demo1 = function () {\n        // single file upload\n        $('#kt_dropzone_1').dropzone({\n            url: \"https://keenthemes.com/scripts/void.php\", // Set the url for your upload script location\n            paramName: \"file\", // The name that will be used to transfer the file\n            maxFiles: 1,\n            maxFilesize: 5, // MB\n            addRemoveLinks: true,\n            accept: function(file, done) {\n                if (file.name == \"justinbieber.jpg\") {\n                    done(\"Naha, you don't.\");\n                } else {\n                    done();\n                }\n            }\n        });\n\n        // multiple file upload\n        $('#kt_dropzone_2').dropzone({\n            url: \"https://keenthemes.com/scripts/void.php\", // Set the url for your upload script location\n            paramName: \"file\", // The name that will be used to transfer the file\n            maxFiles: 10,\n            maxFilesize: 10, // MB\n            addRemoveLinks: true,\n            accept: function(file, done) {\n                if (file.name == \"justinbieber.jpg\") {\n                    done(\"Naha, you don't.\");\n                } else {\n                    done();\n                }\n            }\n        });\n\n        // file type validation\n        $('#kt_dropzone_3').dropzone({\n            url: \"https://keenthemes.com/scripts/void.php\", // Set the url for your upload script location\n            paramName: \"file\", // The name that will be used to transfer the file\n            maxFiles: 10,\n            maxFilesize: 10, // MB\n            addRemoveLinks: true,\n            acceptedFiles: \"image/*,application/pdf,.psd\",\n            accept: function(file, done) {\n                if (file.name == \"justinbieber.jpg\") {\n                    done(\"Naha, you don't.\");\n                } else {\n                    done();\n                }\n            }\n        });\n    }\n\n    var demo2 = function () {\n        // set the dropzone container id\n        var id = '#kt_dropzone_4';\n\n        // set the preview element template\n        var previewNode = $(id + \" .dropzone-item\");\n        previewNode.id = \"\";\n        var previewTemplate = previewNode.parent('.dropzone-items').html();\n        previewNode.remove();\n\n        var myDropzone4 = new Dropzone(id, { // Make the whole body a dropzone\n            url: \"https://keenthemes.com/scripts/void.php\", // Set the url for your upload script location\n            parallelUploads: 20,\n            previewTemplate: previewTemplate,\n            maxFilesize: 1, // Max filesize in MB\n            autoQueue: false, // Make sure the files aren't queued until manually added\n            previewsContainer: id + \" .dropzone-items\", // Define the container to display the previews\n            clickable: id + \" .dropzone-select\" // Define the element that should be used as click trigger to select files.\n        });\n\n        myDropzone4.on(\"addedfile\", function(file) {\n            // Hookup the start button\n            file.previewElement.querySelector(id + \" .dropzone-start\").onclick = function() { myDropzone4.enqueueFile(file); };\n            $(document).find( id + ' .dropzone-item').css('display', '');\n            $( id + \" .dropzone-upload, \" + id + \" .dropzone-remove-all\").css('display', 'inline-block');\n        });\n\n        // Update the total progress bar\n        myDropzone4.on(\"totaluploadprogress\", function(progress) {\n            $(this).find( id + \" .progress-bar\").css('width', progress + \"%\");\n        });\n\n        myDropzone4.on(\"sending\", function(file) {\n            // Show the total progress bar when upload starts\n            $( id + \" .progress-bar\").css('opacity', '1');\n            // And disable the start button\n            file.previewElement.querySelector(id + \" .dropzone-start\").setAttribute(\"disabled\", \"disabled\");\n        });\n\n        // Hide the total progress bar when nothing's uploading anymore\n        myDropzone4.on(\"complete\", function(progress) {\n            var thisProgressBar = id + \" .dz-complete\";\n            setTimeout(function(){\n                $( thisProgressBar + \" .progress-bar, \" + thisProgressBar + \" .progress, \" + thisProgressBar + \" .dropzone-start\").css('opacity', '0');\n            }, 300)\n\n        });\n\n        // Setup the buttons for all transfers\n        document.querySelector( id + \" .dropzone-upload\").onclick = function() {\n            myDropzone4.enqueueFiles(myDropzone4.getFilesWithStatus(Dropzone.ADDED));\n        };\n\n        // Setup the button for remove all files\n        document.querySelector(id + \" .dropzone-remove-all\").onclick = function() {\n            $( id + \" .dropzone-upload, \" + id + \" .dropzone-remove-all\").css('display', 'none');\n            myDropzone4.removeAllFiles(true);\n        };\n\n        // On all files completed upload\n        myDropzone4.on(\"queuecomplete\", function(progress){\n            $( id + \" .dropzone-upload\").css('display', 'none');\n        });\n\n        // On all files removed\n        myDropzone4.on(\"removedfile\", function(file){\n            if(myDropzone4.files.length < 1){\n                $( id + \" .dropzone-upload, \" + id + \" .dropzone-remove-all\").css('display', 'none');\n            }\n        });\n    }\n\n    var demo3 = function () {\n         // set the dropzone container id\n         var id = '#kt_dropzone_5';\n\n         // set the preview element template\n         var previewNode = $(id + \" .dropzone-item\");\n         previewNode.id = \"\";\n         var previewTemplate = previewNode.parent('.dropzone-items').html();\n         previewNode.remove();\n\n         var myDropzone5 = new Dropzone(id, { // Make the whole body a dropzone\n             url: \"https://keenthemes.com/scripts/void.php\", // Set the url for your upload script location\n             parallelUploads: 20,\n             maxFilesize: 1, // Max filesize in MB\n             previewTemplate: previewTemplate,\n             previewsContainer: id + \" .dropzone-items\", // Define the container to display the previews\n             clickable: id + \" .dropzone-select\" // Define the element that should be used as click trigger to select files.\n         });\n\n         myDropzone5.on(\"addedfile\", function(file) {\n             // Hookup the start button\n             $(document).find( id + ' .dropzone-item').css('display', '');\n         });\n\n         // Update the total progress bar\n         myDropzone5.on(\"totaluploadprogress\", function(progress) {\n             $( id + \" .progress-bar\").css('width', progress + \"%\");\n         });\n\n         myDropzone5.on(\"sending\", function(file) {\n             // Show the total progress bar when upload starts\n             $( id + \" .progress-bar\").css('opacity', \"1\");\n         });\n\n         // Hide the total progress bar when nothing's uploading anymore\n         myDropzone5.on(\"complete\", function(progress) {\n             var thisProgressBar = id + \" .dz-complete\";\n             setTimeout(function(){\n                 $( thisProgressBar + \" .progress-bar, \" + thisProgressBar + \" .progress\").css('opacity', '0');\n             }, 300)\n         });\n    }\n\n    return {\n        // public functions\n        init: function() {\n            demo1();\n            demo2();\n            demo3();\n        }\n    };\n}();\n\nKTUtil.ready(function() {\n    KTDropzoneDemo.init();\n});\n\n\n//# sourceURL=webpack:///../src/assets/js/pages/crud/file-upload/dropzonejs.js?");

/***/ })

/******/ });