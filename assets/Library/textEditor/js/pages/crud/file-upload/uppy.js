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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/crud/file-upload/uppy.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/crud/file-upload/uppy.js":
/*!*******************************************************!*\
  !*** ../src/assets/js/pages/crud/file-upload/uppy.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Class definition\nvar KTUppy = function () {\n\tconst Tus = Uppy.Tus;\n\tconst ProgressBar = Uppy.ProgressBar;\n\tconst StatusBar = Uppy.StatusBar;\n\tconst FileInput = Uppy.FileInput;\n\tconst Informer = Uppy.Informer;\n\n\t// to get uppy companions working, please refer to the official documentation here: https://uppy.io/docs/companion/\n\tconst Dashboard = Uppy.Dashboard;\n\tconst Dropbox = Uppy.Dropbox;\n\tconst GoogleDrive = Uppy.GoogleDrive;\n\tconst Instagram = Uppy.Instagram;\n\tconst Webcam = Uppy.Webcam;\n\n\t// Private functions\n\tvar initUppy1 = function(){\n\t\tvar id = '#kt_uppy_1';\n\n\t\tvar options = {\n\t\t\tproudlyDisplayPoweredByUppy: false,\n\t\t\ttarget: id,\n\t\t\tinline: true,\n\t\t\treplaceTargetContent: true,\n\t\t\tshowProgressDetails: true,\n\t\t\tnote: 'No filetype restrictions.',\n\t\t\theight: 470,\n\t\t\tmetaFields: [\n\t\t\t\t{ id: 'name', name: 'Name', placeholder: 'file name' },\n\t\t\t\t{ id: 'caption', name: 'Caption', placeholder: 'describe what the image is about' }\n\t\t\t],\n\t\t\tbrowserBackButtonClose: true\n\t\t}\n\n\t\tvar uppyDashboard = Uppy.Core({ \n\t\t\tautoProceed: true,\n\t\t\trestrictions: {\n\t\t\t\tmaxFileSize: 1000000, // 1mb\n\t\t\t\tmaxNumberOfFiles: 5,\n\t\t\t\tminNumberOfFiles: 1\n\t\t\t} \n\t\t});\n\n\t\tuppyDashboard.use(Dashboard, options);  \n\t\tuppyDashboard.use(Tus, { endpoint: 'https://master.tus.io/files/' });\n\t\tuppyDashboard.use(GoogleDrive, { target: Dashboard, companionUrl: 'https://companion.uppy.io' });\n\t\tuppyDashboard.use(Dropbox, { target: Dashboard, companionUrl: 'https://companion.uppy.io' });\n\t\tuppyDashboard.use(Instagram, { target: Dashboard, companionUrl: 'https://companion.uppy.io' });\n\t\tuppyDashboard.use(Webcam, { target: Dashboard });\n\t}\n\n\tvar initUppy2 = function(){\n\t\tvar id = '#kt_uppy_2';\n\n\t\tvar options = {\n\t\t\tproudlyDisplayPoweredByUppy: false,\n\t\t\ttarget: id,\n\t\t\tinline: true,\n\t\t\treplaceTargetContent: true,\n\t\t\tshowProgressDetails: true,\n\t\t\tnote: 'Images and video only, 2–3 files, up to 1 MB',\n\t\t\theight: 470,\n\t\t\tmetaFields: [\n\t\t\t\t{ id: 'name', name: 'Name', placeholder: 'file name' },\n\t\t\t\t{ id: 'caption', name: 'Caption', placeholder: 'describe what the image is about' }\n\t\t\t],\n\t\t\tbrowserBackButtonClose: true\n\t\t}\n\n\t\tvar uppyDashboard = Uppy.Core({ \n\t\t\tautoProceed: true,\n\t\t\trestrictions: {\n\t\t\t\tmaxFileSize: 1000000, // 1mb\n\t\t\t\tmaxNumberOfFiles: 5,\n\t\t\t\tminNumberOfFiles: 1,\n\t\t\t\tallowedFileTypes: ['image/*', 'video/*']\n\t\t\t} \n\t\t});\n\n\t\tuppyDashboard.use(Dashboard, options);  \n\t\tuppyDashboard.use(Tus, { endpoint: 'https://master.tus.io/files/' });\n\t}\n\n\tvar initUppy3 = function(){\n\t\tvar id = '#kt_uppy_3';\n\n\t\tvar uppyDrag = Uppy.Core({ \n\t\t\tautoProceed: true,\n\t\t\trestrictions: {\n\t\t\t\tmaxFileSize: 1000000, // 1mb\n\t\t\t\tmaxNumberOfFiles: 5,\n\t\t\t\tminNumberOfFiles: 1,\n\t\t\t\tallowedFileTypes: ['image/*', 'video/*']\n\t\t\t} \n\t\t});\n\n\t\tuppyDrag.use(Uppy.DragDrop, { target: id + ' .kt-uppy__drag' });  \n\t\tuppyDrag.use(ProgressBar, { \n\t\t\ttarget: id + ' .kt-uppy__progress',\n\t\t\thideUploadButton: false,\n\t\t\thideAfterFinish: false \n\t\t});      \n\t\tuppyDrag.use(Informer, { target: id + ' .kt-uppy__informer'  });\n\t\tuppyDrag.use(Tus, { endpoint: 'https://master.tus.io/files/' });\n\n\t\tuppyDrag.on('complete', function(file) {\n\t\t\tvar imagePreview = \"\";\n\t\t\t$.each(file.successful, function(index, value){\n\t\t\t\tvar imageType = /image/;\n\t\t\t\tvar thumbnail = \"\";\n\t\t\t\tif (imageType.test(value.type)){\n\t\t\t\t\tthumbnail = '<div class=\"kt-uppy__thumbnail\"><img src=\"'+value.uploadURL+'\"/></div>';\n\t\t\t\t}\n\t\t\t\tvar sizeLabel = \"bytes\";\n\t\t\t\tvar filesize = value.size;\n\t\t\t\tif (filesize > 1024){\n\t\t\t\t\tfilesize = filesize / 1024;\n\t\t\t\t\tsizeLabel = \"kb\";\n\t\t\t\t\tif(filesize > 1024){\n\t\t\t\t\t\tfilesize = filesize / 1024;\n\t\t\t\t\t\tsizeLabel = \"MB\";\n\t\t\t\t\t}\n\t\t\t\t}\t\t\t\t\t\n\t\t\t\timagePreview += '<div class=\"kt-uppy__thumbnail-container\" data-id=\"'+value.id+'\">'+thumbnail+' <span class=\"kt-uppy__thumbnail-label\">'+value.name+' ('+ Math.round(filesize, 2) +' '+sizeLabel+')</span><span data-id=\"'+value.id+'\" class=\"kt-uppy__remove-thumbnail\"><i class=\"flaticon2-cancel-music\"></i></span></div>';\n\t\t\t});\n\n\t\t\t$(id + ' .kt-uppy__thumbnails').append(imagePreview);\n\t\t});\n\n\t\t$(document).on('click', id + ' .kt-uppy__thumbnails .kt-uppy__remove-thumbnail', function(){\n\t\t\tvar imageId = $(this).attr('data-id');\n\t\t\tuppyDrag.removeFile(imageId);\t\t\t\t\t\n\t\t\t$(id + ' .kt-uppy__thumbnail-container[data-id=\"'+imageId+'\"').remove();\n\t\t});\t\t\t\n\t}\n\n\tvar initUppy4 = function(){\n\t\tvar id = '#kt_uppy_4';\n\n\t\tvar uppyDrag = Uppy.Core({ \n\t\t\tautoProceed: false,\n\t\t\trestrictions: {\n\t\t\t\tmaxFileSize: 1000000, // 1mb\n\t\t\t\tmaxNumberOfFiles: 5,\n\t\t\t\tminNumberOfFiles: 1\n\t\t\t} \n\t\t});\n\t\t\n\t\tuppyDrag.use(Uppy.DragDrop, { target: id + ' .kt-uppy__drag' });  \n\t\tuppyDrag.use(ProgressBar, { target: id + ' .kt-uppy__progress' });      \n\t\tuppyDrag.use(Informer, { target: id + ' .kt-uppy__informer'  });\n\t\tuppyDrag.use(Tus, { endpoint: 'https://master.tus.io/files/' });\n\n\t\tuppyDrag.on('complete', function(file) {\n\t\t\tvar imagePreview = \"\";\n\t\t\t$.each(file.successful, function(index, value){\n\t\t\t\tvar imageType = /image/;\n\t\t\t\tvar thumbnail = \"\";\n\t\t\t\tif (imageType.test(value.type)){\n\t\t\t\t\tthumbnail = '<div class=\"kt-uppy__thumbnail\"><img src=\"'+value.uploadURL+'\"/></div>';\n\t\t\t\t}\n\t\t\t\tvar sizeLabel = \"bytes\";\n\t\t\t\tvar filesize = value.size;\n\t\t\t\tif (filesize > 1024){\n\t\t\t\t\tfilesize = filesize / 1024;\n\t\t\t\t\tsizeLabel = \"kb\";\n\t\t\t\t\tif(filesize > 1024){\n\t\t\t\t\t\tfilesize = filesize / 1024;\n\t\t\t\t\t\tsizeLabel = \"MB\";\n\t\t\t\t\t}\n\t\t\t\t}\t\t\t\t\t\n\t\t\t\timagePreview += '<div class=\"kt-uppy__thumbnail-container\" data-id=\"'+value.id+'\">'+thumbnail+' <span class=\"kt-uppy__thumbnail-label\">'+value.name+' ('+ Math.round(filesize, 2) +' '+sizeLabel+')</span><span data-id=\"'+value.id+'\" class=\"kt-uppy__remove-thumbnail\"><i class=\"flaticon2-cancel-music\"></i></span></div>';\n\t\t\t});\n\n\t\t\t$(id + ' .kt-uppy__thumbnails').append(imagePreview);\n\t\t});\n\n\t\tvar uploadBtn = $(id + ' .kt-uppy__btn');\n\t\tuploadBtn.click(function () {\n\t\t\tuppyDrag.upload();\n\t\t});\n\n\t\t$(document).on('click', id + ' .kt-uppy__thumbnails .kt-uppy__remove-thumbnail', function(){\n\t\t\tvar imageId = $(this).attr('data-id');\n\t\t\tuppyDrag.removeFile(imageId);\t\t\t\t\t\n\t\t\t$(id + ' .kt-uppy__thumbnail-container[data-id=\"'+imageId+'\"').remove();\n\t\t});\t\n\t}\n\n\tvar initUppy5 = function(){\n\t\t// Uppy variables\n        // For more info refer: https://uppy.io/\n\t\tvar elemId = 'kt_uppy_5';\n\t\tvar id = '#' + elemId;\n\t\tvar $statusBar = $(id + ' .kt-uppy__status');\n\t\tvar $uploadedList = $(id + ' .kt-uppy__list');\n\t\tvar timeout;\n\t\t\n\t\tvar uppyMin = Uppy.Core({\n\t\t\tdebug: true, \n\t\t\tautoProceed: true,\n\t\t\tshowProgressDetails: true,\n\t\t\trestrictions: {\n\t\t\t\tmaxFileSize: 1000000, // 1mb\n\t\t\t\tmaxNumberOfFiles: 5,\n\t\t\t\tminNumberOfFiles: 1\n\t\t\t}\n\t\t});\n\t\t\n\t\tuppyMin.use(FileInput, { target: id + ' .kt-uppy__wrapper', pretty: false });\n\t\tuppyMin.use(Informer, { target: id + ' .kt-uppy__informer'  });\n\n\t\t// demo file upload server\n\t\tuppyMin.use(Tus, { endpoint: 'https://master.tus.io/files/' });\n\t\tuppyMin.use(StatusBar, {\n\t\t\ttarget: id + ' .kt-uppy__status',\n\t\t\thideUploadButton: true,\n\t\t\thideAfterFinish: false\n\t\t});\n\n\t\t$(id + ' .uppy-FileInput-input').addClass('kt-uppy__input-control').attr('id', elemId + '_input_control');\n\t\t$(id + ' .uppy-FileInput-container').append('<label class=\"kt-uppy__input-label btn btn-label-brand btn-bold btn-font-sm\" for=\"' + (elemId + '_input_control') + '\">Attach files</label>');\n\t\t\n\t\tvar $fileLabel = $(id + ' .kt-uppy__input-label');\n\n\t\tuppyMin.on('upload', function(data) {\n\t\t\t$fileLabel.text(\"Uploading...\");\n\t\t\t$statusBar.addClass('kt-uppy__status--ongoing');\n\t\t\t$statusBar.removeClass('kt-uppy__status--hidden');\n\t\t\tclearTimeout( timeout );\n\t\t});\n\n\t\tuppyMin.on('complete', function(file) {\n\t\t\t$.each(file.successful, function(index, value){\n\t\t\t\tvar sizeLabel = \"bytes\";\n\t\t\t\tvar filesize = value.size;\n\t\t\t\tif (filesize > 1024){\n\t\t\t\t\tfilesize = filesize / 1024;\n\t\t\t\t\tsizeLabel = \"kb\";\n\n\t\t\t\t\tif(filesize > 1024){\n\t\t\t\t\t\tfilesize = filesize / 1024;\n\t\t\t\t\t\tsizeLabel = \"MB\";\n\t\t\t\t\t}\n\t\t\t\t}\t\t\t\t\t\n\t\t\t\tvar uploadListHtml = '<div class=\"kt-uppy__list-item\" data-id=\"'+value.id+'\"><div class=\"kt-uppy__list-label\">'+value.name+' ('+ Math.round(filesize, 2) +' '+sizeLabel+')</div><span class=\"kt-uppy__list-remove\" data-id=\"'+value.id+'\"><i class=\"flaticon2-cancel-music\"></i></span></div>';\n\t\t\t\t$uploadedList.append(uploadListHtml);\n\t\t\t});\n\n\t\t\t$fileLabel.text(\"Add more files\");\t\t\n\n\t\t\t$statusBar.addClass('kt-uppy__status--hidden');\n\t\t\t$statusBar.removeClass('kt-uppy__status--ongoing');\n\t\t});\n\n\t\t$(document).on('click', id + ' .kt-uppy__list .kt-uppy__list-remove', function(){\n\t\t\tvar itemId = $(this).attr('data-id');\n\t\t\tuppyMin.removeFile(itemId);\n\t\t\t$(id + ' .kt-uppy__list-item[data-id=\"'+itemId+'\"').remove();\n\t\t});\n\t}\n\n\tvar initUppy6 = function(){\n\t\tvar id = '#kt_uppy_6';\n\t\tvar options = {\n\t\t\tproudlyDisplayPoweredByUppy: false,\n\t\t\ttarget: id + ' .kt-uppy__dashboard',\n\t\t\tinline: false,\n\t\t\treplaceTargetContent: true,\n\t\t\tshowProgressDetails: true,\n\t\t\tnote: 'No filetype restrictions.',\n\t\t\theight: 470,\n\t\t\tmetaFields: [\n\t\t\t\t{ id: 'name', name: 'Name', placeholder: 'file name' },\n\t\t\t\t{ id: 'caption', name: 'Caption', placeholder: 'describe what the image is about' }\n\t\t\t],\n\t\t\tbrowserBackButtonClose: true,\n\t\t\ttrigger: id + ' .kt-uppy__btn'\n\t\t}\n\n\t\tvar uppyDashboard = Uppy.Core({ \n\t\t\tautoProceed: true,\n\t\t\trestrictions: {\n\t\t\t\tmaxFileSize: 1000000, // 1mb\n\t\t\t\tmaxNumberOfFiles: 5,\n\t\t\t\tminNumberOfFiles: 1\n\t\t\t}\n\t\t});\n\n\t\tuppyDashboard.use(Dashboard, options);  \n\t\tuppyDashboard.use(Tus, { endpoint: 'https://master.tus.io/files/' });\n\t\tuppyDashboard.use(GoogleDrive, { target: Dashboard, companionUrl: 'https://companion.uppy.io' });\n\t\tuppyDashboard.use(Dropbox, { target: Dashboard, companionUrl: 'https://companion.uppy.io' });\n\t\tuppyDashboard.use(Instagram, { target: Dashboard, companionUrl: 'https://companion.uppy.io' });\n\t\tuppyDashboard.use(Webcam, { target: Dashboard });\n\t}\n\n\treturn {\n\t\t// public functions\n\t\tinit: function() {\n\t\t\tinitUppy1();\n\t\t\tinitUppy2();\n\t\t\tinitUppy3();\n\t\t\tinitUppy4();\n\t\t\tinitUppy5();\n\t\t\tinitUppy6();\n\n\t\t\tswal.fire({\n\t\t\t\t\"title\": \"Notice\", \n\t\t\t\t\"html\": \"Uppy demos uses <b>https://master.tus.io/files/</b> URL for resumable upload examples and your uploaded files will be temporarely stored in <b>tus.io</b> servers.\", \n\t\t\t\t\"type\": \"info\",\n\t\t\t\t\"buttonsStyling\": false,\n\t\t\t\t\"confirmButtonClass\": \"btn btn-brand kt-btn kt-btn--wide\",\n\t\t\t\t\"confirmButtonText\": \"Ok, I understand\",\n\t\t\t\t\"onClose\": function(e) {\n\t\t\t\t\tconsole.log('on close event fired!');\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\t};\n}();\n\nKTUtil.ready(function() {\t\n\tKTUppy.init();\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/crud/file-upload/uppy.js?");

/***/ })

/******/ });