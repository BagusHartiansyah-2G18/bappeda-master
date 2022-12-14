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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/components/extended/kanban-board.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/components/extended/kanban-board.js":
/*!******************************************************************!*\
  !*** ../src/assets/js/pages/components/extended/kanban-board.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Class definition\n\nvar KTKanbanBoardDemo = function () {\n    \n    // Private functions\n\n    // Basic demo\n    var demos = function () {\n\t\tvar kanban1 = new jKanban({\n\t\t\telement:'#kanban1',\n\t\t\tgutter  : '0',\n\t\t\tboards  :[\n\t\t\t\t{\n\t\t\t\t\t'id' : '_todo',\n\t\t\t\t\t'title'  : 'Try Drag me!',\n\t\t\t\t\t'item'  : [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t'title':'You can drag me too',\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t'title':'Buy Milk',\n\t\t\t\t\t\t}\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t'id' : '_working',\n\t\t\t\t\t'title'  : 'Working',\n\t\t\t\t\t'item'  : [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t'title':'Do Something!',\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t'title':'Run?',\n\t\t\t\t\t\t}\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t'id' : '_done',\n\t\t\t\t\t'title'  : 'Done',\n\t\t\t\t\t'item'  : [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t'title':'All right',\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t'title':'Ok!',\n\t\t\t\t\t\t}\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t]\n\t\t});\n\n\t\tvar kanban2 = new jKanban({\n\t\t\telement : '#kanban2',\n\t\t\tgutter  : '0',\n\t\t\tclick : function(el){\n\t\t\t\talert(el.innerHTML);\n\t\t\t},\n\t\t\tboards  :[\n\t\t\t\t{\n\t\t\t\t\t'id' : '_todo',\n\t\t\t\t\t'title'  : 'To Do',\n\t\t\t\t\t'class' : 'brand',\n\t\t\t\t\t'dragTo' : ['_working'],\n\t\t\t\t\t'item'  : [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t'title':'My Task Test',\n\t\t\t\t\t\t\t'class': 'info'\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t'title':'Buy Milk',\n\t\t\t\t\t\t\t'class': 'info'\n\t\t\t\t\t\t}\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t'id' : '_working',\n\t\t\t\t\t'title'  : 'Working',\n\t\t\t\t\t'class' : 'warning',\n\t\t\t\t\t'item'  : [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t'title':'Do Something!',\n\t\t\t\t\t\t\t'class': 'warning'\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t'title':'Run?',\n\t\t\t\t\t\t\t'class': 'warning'\n\t\t\t\t\t\t}\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t'id' : '_done',\n\t\t\t\t\t'title'  : 'Done',\n\t\t\t\t\t'class' : 'success',\n\t\t\t\t\t'dragTo' : ['_working'],\n\t\t\t\t\t'item'  : [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t'title':'All right',\n\t\t\t\t\t\t\t'class': 'success'\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t'title':'Ok!',\n\t\t\t\t\t\t\t'class': 'success'\n\t\t\t\t\t\t}\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t'id' : '_test',\n\t\t\t\t\t'title'  : 'Test',\n\t\t\t\t\t'class' : 'primary',\n\t\t\t\t\t'item'  : [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t'title':'Passed',\n\t\t\t\t\t\t\t'class': 'primary'\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t'title':'Well done!',\n\t\t\t\t\t\t\t'class': 'primary'\n\t\t\t\t\t\t}\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t'id' : '_notes',\n\t\t\t\t\t'title'  : 'Notes',\n\t\t\t\t\t'class' : 'danger',\n\t\t\t\t\t'item'  : [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t'title':'Warning Task',\n\t\t\t\t\t\t\t'class': 'danger'\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t'title':'Do not enter',\n\t\t\t\t\t\t\t'class': 'danger'\n\t\t\t\t\t\t}\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t]\n\t\t});\n\t\n\t\tvar kanban3 = new jKanban({\n\t\t\telement : '#kanban3',\n\t\t\tgutter  : '0',\n\t\t\tclick : function(el){\n\t\t\t\talert(el.innerHTML);\n\t\t\t},\n\t\t\tboards  :[\n\t\t\t\t{\n\t\t\t\t\t'id' : '_backlog',\n\t\t\t\t\t'title'  : 'Backlog',\n\t\t\t\t\t'class' : 'dark-light',\n\t\t\t\t\t'item'  : [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t'title':'<div class=\"kt-kanban__badge\"><div class=\"kt-kanban__image kt-media kt-media--dark\"><span>BF</span></div><div class=\"kt-kanban__content\"><div class=\"kt-kanban__title\">Bug Fixes</div><span class=\"kt-badge kt-badge--dark kt-badge--inline\">Backlog</span></div></div>',\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t'title':'<div class=\"kt-kanban__badge\"><div class=\"kt-kanban__image kt-media\"><img src=\"assets/media/users/100_5.jpg\" alt=\"image\"></div><div class=\"kt-kanban__content\"><div class=\"kt-kanban__title\">Documentation</div><span class=\"kt-badge kt-badge--dark kt-badge--inline\">Backlog</span></div></div>',\n\t\t\t\t\t\t}\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t'id' : '_todo',\n\t\t\t\t\t'title'  : 'To Do',\n\t\t\t\t\t'class' : 'danger-light',\n\t\t\t\t\t'item'  : [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t'title':'<div class=\"kt-kanban__badge\"><div class=\"kt-kanban__image kt-media\"><img src=\"assets/media/users/100_3.jpg\" alt=\"image\"></div><div class=\"kt-kanban__content\"><div class=\"kt-kanban__title\">SEO Optimization</div><span class=\"kt-badge kt-badge--danger kt-badge--inline\">To Do</span></div></div>',\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t'title':'<div class=\"kt-kanban__badge\"><div class=\"kt-kanban__image kt-media kt-media--danger\"><span>SV</span></div><div class=\"kt-kanban__content\"><div class=\"kt-kanban__title\">Site Verification</div><span class=\"kt-badge kt-badge--danger kt-badge--inline\">To Do</span></div></div>',\n\t\t\t\t\t\t}\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t'id' : '_working',\n\t\t\t\t\t'title'  : 'Working',\n\t\t\t\t\t'class' : 'brand-light',\n\t\t\t\t\t'item'  : [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t'title':'<div class=\"kt-kanban__badge\"><div class=\"kt-kanban__image kt-media\"><img src=\"assets/media/users/100_1.jpg\" alt=\"image\"></div><div class=\"kt-kanban__content\"><div class=\"kt-kanban__title\">Responsive UI</div><span class=\"kt-badge kt-badge--brand kt-badge--inline\">In Progress</span></div></div>',\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t'title':'<div class=\"kt-kanban__badge\"><div class=\"kt-kanban__image kt-media kt-media--brand\"><span>SB</span></div><div class=\"kt-kanban__content\"><div class=\"kt-kanban__title\">Sidebars</div><span class=\"kt-badge kt-badge--brand kt-badge--inline\">In Progress</span></div></div>',\n\t\t\t\t\t\t}\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t'id' : '_done',\n\t\t\t\t\t'title'  : 'Done',\n\t\t\t\t\t'class' : 'success-light',\n\t\t\t\t\t'item'  : [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t'title':'<div class=\"kt-kanban__badge\"><div class=\"kt-kanban__image kt-media kt-media--success\"><span>FE</span></div><div class=\"kt-kanban__content\"><div class=\"kt-kanban__title\">Frontend</div><span class=\"kt-badge kt-badge--success kt-badge--inline\">Completed</span></div></div>',\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t'title':'<div class=\"kt-kanban__badge\"><div class=\"kt-kanban__image kt-media\"><img src=\"assets/media/users/100_4.jpg\" alt=\"image\"></div><div class=\"kt-kanban__content\"><div class=\"kt-kanban__title\">Server Setup</div><span class=\"kt-badge kt-badge--success kt-badge--inline\">Completed</span></div></div>',\n\t\t\t\t\t\t}\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t'id' : '_deploy',\n\t\t\t\t\t'title'  : 'Deploy',\n\t\t\t\t\t'class' : 'primary-light',\n\t\t\t\t\t'item'  : [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t'title':'<div class=\"kt-kanban__badge\"><div class=\"kt-kanban__image kt-media kt-media--primary\"><span>CU</span></div><div class=\"kt-kanban__content\"><div class=\"kt-kanban__title\">Content Upload</div><span class=\"kt-badge kt-badge--primary kt-badge--inline\">Deploy</span></div></div>',\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t'title':'<div class=\"kt-kanban__badge\"><div class=\"kt-kanban__image kt-media\"><img src=\"assets/media/users/100_2.jpg\" alt=\"image\"></div><div class=\"kt-kanban__content\"><div class=\"kt-kanban__title\">Proofreading</div><span class=\"kt-badge kt-badge--primary kt-badge--inline\">Deploy</span></div></div>',\n\t\t\t\t\t\t}\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t]\n\t\t});\n\n\t\tvar toDoButton = document.getElementById('addToDo');\n\t\ttoDoButton.addEventListener('click',function(){\n\t\t\tkanban3.addElement(\n\t\t\t\t'_todo',\n\t\t\t\t{\n\t\t\t\t\t'title':'<div class=\"kt-kanban__badge\"><div class=\"kt-kanban__image kt-media kt-media--danger\"><span>NW</span></div><div class=\"kt-kanban__content\"><div class=\"kt-kanban__title\">New Task</div><span class=\"kt-badge kt-badge--danger kt-badge--inline\">To Do</span></div></div>'\n\t\t\t\t}\n\t\t\t);\n\t\t});\n\n\t\tvar addBoardDefault = document.getElementById('addDefault');\n\t\taddBoardDefault.addEventListener('click', function () {\n\t\t\tkanban3.addBoards(\n\t\t\t\t[{\n\t\t\t\t\t'id' : '_default',\n\t\t\t\t\t'title'  : 'New Board',\n\t\t\t\t\t'class': 'brand-light',\n\t\t\t\t\t'item'  : [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t'title':'<div class=\"kt-kanban__badge\"><div class=\"kt-kanban__image kt-media kt-media--brand\"><span>FT</span></div><div class=\"kt-kanban__content\"><div class=\"kt-kanban__title\">New Task 1</div><span class=\"kt-badge kt-badge--brand kt-badge--inline\">New</span></div></div>',\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t'title':'<div class=\"kt-kanban__badge\"><div class=\"kt-kanban__image kt-media kt-media--brand\"><span>FT</span></div><div class=\"kt-kanban__content\"><div class=\"kt-kanban__title\">New Task 2</div><span class=\"kt-badge kt-badge--brand kt-badge--inline\">New</span></div></div>',\n\t\t\t\t\t\t}\n\t\t\t\t\t]\n\t\t\t\t}]\n\t\t\t)\n\t\t});\n\n\t\tvar removeBoard = document.getElementById('removeBoard');\n\t\tremoveBoard.addEventListener('click',function(){\n\t\t\tkanban3.removeBoard('_done');\n\t\t});\n\n\t\t// kanban 4\n\t\tvar kanban4 = new jKanban({\n\t\t\telement : '#kanban4',\n\t\t\tgutter  : '0',\n\t\t\tclick : function(el){\n\t\t\t\talert(el.innerHTML);\n\t\t\t},\n\t\t\tboards  :[\n\t\t\t\t{\n\t\t\t\t\t'id' : '_board1',\n\t\t\t\t\t'title'  : 'Board 1',\n\t\t\t\t\t'item'  : [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t'title':'My Task Test',\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t'title':'Buy Milk',\n\t\t\t\t\t\t}\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t'id' : '_board2',\n\t\t\t\t\t'title'  : 'Board 2',\n\t\t\t\t\t'item'  : [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t'title':'Do Something!',\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t'title':'Run?',\n\t\t\t\t\t\t}\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t'id' : '_board3',\n\t\t\t\t\t'title'  : 'Board 3',\n\t\t\t\t\t'item'  : [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t'title':'All right',\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t'title':'Ok!',\n\t\t\t\t\t\t}\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t]\n\t\t});\n\n\t\t\n\n\t\tvar addBoard = document.getElementById('addBoard');\n\t\taddBoard.addEventListener('click',function(){\n\t\t\tvar boardTitle = $('#kanban-add-board').val();\n\t\t\tvar boardId = '_' + $.trim(boardTitle);\n\t\t\tvar boardColor = $('#kanban-add-board-color').val();\n\t\t\tvar option = '<option value=\"'+boardId+'\">'+boardTitle+'</option>';\n\t\t\tkanban4.addBoards(\n\t\t\t\t[{\n\t\t\t\t\t'id' : boardId,\n\t\t\t\t\t'title'  : boardTitle,\n\t\t\t\t\t'class': boardColor\n\t\t\t\t}]\n\t\t\t);\t\t\t\t\n\t\t\t$('#kanban-select-task').append(option);\n\t\t\t$('#kanban-select-board').append(option);\n\t\t});\n\n\t\tvar addTask = document.getElementById('addTask');\n\t\taddTask.addEventListener('click',function(){\n\t\t\tvar target = $('#kanban-select-task').val();\n\t\t\tvar title = $('#kanban-add-task').val();\n\t\t\tvar taskColor = $('#kanban-add-task-color').val();\n\t\t\tkanban4.addElement(\n\t\t\t\ttarget,\n\t\t\t\t{\n\t\t\t\t\t'title': title,\n\t\t\t\t\t'class': taskColor\n\t\t\t\t}\n\t\t\t);\n\t\t});\n\n\t\tvar removeBoard2 = document.getElementById('removeBoard2');\n\t\tremoveBoard2.addEventListener('click',function(){\n\t\t\tvar target = $('#kanban-select-board').val();\n\t\t\tkanban4.removeBoard(target);\n\t\t\t$('#kanban-select-task option[value=\"'+target+'\"]').remove();\n\t\t\t$('#kanban-select-board option[value=\"'+target+'\"]').remove();\n\t\t});\n    }\n\n    return {\n        // public functions\n        init: function() {\n            demos();\n        }\n    };\n}();\n\njQuery(document).ready(function() {    \n    KTKanbanBoardDemo.init();\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/components/extended/kanban-board.js?");

/***/ })

/******/ });