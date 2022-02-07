/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UIcomp.js":
/*!***********************!*\
  !*** ./src/UIcomp.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ \"./src/createProject.js\");\n/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTask */ \"./src/createTask.js\");\n\r\n\r\n\r\nfunction createDashBoard() {\r\n\tconst container = document.querySelector(\".container\");\r\n\r\n\tconst dashBoard = document.createElement(\"div\");\r\n\tdashBoard.classList.add(\"dashboard\");\r\n\tdashBoard.setAttribute(\"id\", \"dashboard\");\r\n\r\n\tconst addProjectBtn = document.createElement(\"button\");\r\n\taddProjectBtn.classList.add(\"project-button\", \"modal-btn\");\r\n\taddProjectBtn.setAttribute(\"id\", \"project-btn\");\r\n\taddProjectBtn.textContent = \"Add Project\";\r\n\r\n\tcontainer.appendChild(dashBoard);\r\n\tcontainer.appendChild(createHeader(\"clipboard\", \"Bit List\"));\r\n\tdashBoard.appendChild(addProjectBtn);\r\n\r\n\taddProjectBtn.addEventListener(\"click\", _createProject__WEBPACK_IMPORTED_MODULE_0__.default);\r\n\r\n\treturn container;\r\n}\r\n\r\nfunction createHeader(image, text) {\r\n\tconst toDoListHeader = document.createElement(\"header\");\r\n\ttoDoListHeader.classList.add(\"header\");\r\n\ttoDoListHeader.setAttribute(\"id\", \"header\");\r\n\r\n\tconst toDoTitle = document.createElement(\"h2\");\r\n\ttoDoTitle.classList.add(\"title\");\r\n\ttoDoTitle.textContent = text;\r\n\r\n\tconst iconImg = document.createElement(\"img\");\r\n\ticonImg.src = `./images/${image.toLowerCase()}.svg`;\r\n\ticonImg.classList.add(\"icon\");\r\n\r\n\ttoDoListHeader.appendChild(iconImg);\r\n\ttoDoListHeader.appendChild(toDoTitle);\r\n\r\n\treturn toDoListHeader;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDashBoard);\r\n\n\n//# sourceURL=webpack://todo-list/./src/UIcomp.js?");

/***/ }),

/***/ "./src/addProject.js":
/*!***************************!*\
  !*** ./src/addProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTask */ \"./src/createTask.js\");\n/* harmony import */ var _projectDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectDetails */ \"./src/projectDetails.js\");\n\r\n\r\n\r\nfunction addProject(project) {\r\n\tconst dashBoard = document.querySelector(\".dashboard\");\r\n\r\n\tconst projectDiv = document.createElement(\"div\");\r\n\tprojectDiv.classList.add(\"project-card\");\r\n\tprojectDiv.setAttribute(\"id\", `project${_projectDetails__WEBPACK_IMPORTED_MODULE_1__.projectList.indexOf(project)}`);\r\n\r\n\tconst projectTitle = document.createElement(\"h3\");\r\n\tprojectTitle.classList.add(\"project-title\");\r\n\tprojectTitle.textContent = project.title;\r\n\r\n\tconst projectDesc = document.createElement(\"p\");\r\n\tprojectDesc.textContent = project.description;\r\n\r\n\tconst projectCards = document.querySelectorAll(\"#dashboard > div\");\r\n\r\n\tprojectCards.forEach((project) => {\r\n\t\tproject.addEventListener(\"click\", _createTask__WEBPACK_IMPORTED_MODULE_0__.default);\r\n\t});\r\n\r\n\tprojectDiv.appendChild(projectTitle);\r\n\tdashBoard.appendChild(projectDiv);\r\n\r\n\treturn dashBoard;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addProject);\r\n\n\n//# sourceURL=webpack://todo-list/./src/addProject.js?");

/***/ }),

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _projectDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectDetails */ \"./src/projectDetails.js\");\n\r\n\r\nfunction createProject() {\r\n\tconst dashboard = document.querySelector(\".dashboard\");\r\n\r\n\tconst formModal = document.createElement(\"div\");\r\n\tformModal.setAttribute(\"id\", \"modal\");\r\n\tformModal.classList.add(\"modal\");\r\n\r\n\tconst fieldDiv = document.createElement(\"div\");\r\n\tfieldDiv.classList.add(\"field-div\");\r\n\tfieldDiv.setAttribute(\"id\", \"field-div\");\r\n\r\n\tconst addProjectBtn = document.getElementById(\"project-btn\");\r\n\r\n\tconst taskHeaderSection = document.createElement(\"section\");\r\n\ttaskHeaderSection.classList.add(\"task-header\");\r\n\ttaskHeaderSection.setAttribute(\"id\", \"task-header\");\r\n\r\n\tconst formContent = document.createElement(\"form\");\r\n\tformContent.setAttribute(\"action\", \"./formDetails.js\");\r\n\tformContent.setAttribute(\"id\", \"form\");\r\n\tformContent.classList.add(\"modal-content\");\r\n\r\n\tconst closeBtn = document.createElement(\"span\");\r\n\tcloseBtn.classList.add(\"close-button\");\r\n\tcloseBtn.textContent = \"X\";\r\n\r\n\t// task title input field\r\n\tconst taskTitlePara = document.createElement(\"p\");\r\n\tconst taskTitleField = document.createElement(\"input\");\r\n\ttaskTitleField.classList.add(\"task-title\");\r\n\ttaskTitleField.setAttribute(\"type\", \"text\");\r\n\ttaskTitleField.setAttribute(\"name\", \"title\");\r\n\ttaskTitleField.setAttribute(\"placeholder\", \"Project Title\");\r\n\ttaskTitleField.setAttribute(\"id\", \"task\");\r\n\r\n\t// task description input field\r\n\tconst taskDescPara = document.createElement(\"p\");\r\n\tconst taskDescField = document.createElement(\"input\");\r\n\ttaskDescField.classList.add(\"task-description\");\r\n\ttaskDescField.setAttribute(\"type\", \"text\");\r\n\ttaskDescField.setAttribute(\"name\", \"description\");\r\n\ttaskDescField.setAttribute(\"placeholder\", \"Project Description\");\r\n\ttaskDescField.setAttribute(\"id\", \"task\");\r\n\r\n\t// task date input field\r\n\t// const taskDateField = document.createElement(\"input\");\r\n\t// taskDateField.classList.add(\"task-date\");\r\n\t// taskDateField.setAttribute(\"type\", \"date\");\r\n\t// taskDateField.setAttribute(\"name\", \"date\");\r\n\t// taskDateField.setAttribute(\"id\", \"task\");\r\n\r\n\tconst addTaskBtn = document.createElement(\"button\");\r\n\taddTaskBtn.classList.add(\"add-task\");\r\n\taddTaskBtn.setAttribute(\"id\", \"add-task\");\r\n\taddTaskBtn.textContent = \"Add Project\";\r\n\r\n\t// Click event listeners\r\n\r\n\taddTaskBtn.addEventListener(\"click\", _projectDetails__WEBPACK_IMPORTED_MODULE_0__.default);\r\n\r\n\taddProjectBtn.addEventListener(\"click\", () => {\r\n\t\tformModal.style.display = \"block\";\r\n\t});\r\n\r\n\taddTaskBtn.addEventListener(\"click\", () => {\r\n\t\tformModal.style.display = \"none\";\r\n\t\tdashboard.removeChild(formModal);\r\n\t});\r\n\r\n\tcloseBtn.addEventListener(\"click\", () => {\r\n\t\tformModal.style.display = \"none\";\r\n\t\tdashboard.removeChild(formModal);\r\n\t});\r\n\r\n\twindow.addEventListener(\"click\", () => {\r\n\t\tif (event.target == formModal) {\r\n\t\t\tformModal.style.display = \"none\";\r\n\t\t\tdashboard.removeChild(formModal);\r\n\t\t}\r\n\t});\r\n\r\n\ttaskTitlePara.appendChild(taskTitleField);\r\n\ttaskDescPara.appendChild(taskDescField);\r\n\tfieldDiv.appendChild(taskTitlePara);\r\n\tfieldDiv.appendChild(taskDescPara);\r\n\t// fieldDiv.appendChild(taskDateField);\r\n\ttaskHeaderSection.appendChild(closeBtn);\r\n\tformContent.appendChild(taskHeaderSection);\r\n\tformContent.appendChild(fieldDiv);\r\n\tformContent.appendChild(addTaskBtn);\r\n\tformModal.appendChild(formContent);\r\n\tdashboard.appendChild(addProjectBtn);\r\n\tdashboard.appendChild(formModal);\r\n\r\n\treturn dashboard;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);\r\n\n\n//# sourceURL=webpack://todo-list/./src/createProject.js?");

/***/ }),

/***/ "./src/createTask.js":
/*!***************************!*\
  !*** ./src/createTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _taskDetails_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskDetails.js */ \"./src/taskDetails.js\");\n\r\n\r\n\r\nfunction createTasks(task) {\r\n\tconst taskContainer = document.getElementById(\"task-container\");\r\n\r\n\tconst taskDiv = document.createElement(\"div\");\r\n\ttaskDiv.classList.add(\"task-div\");\r\n\ttaskDiv.setAttribute(\"id\", _taskDetails_js__WEBPACK_IMPORTED_MODULE_0__.taskList.indexOf(task));\r\n\r\n\tconst taskCheckBox = document.createElement(\"input\");\r\n\ttaskCheckBox.classList.add(\"task-checkbox\");\r\n\ttaskCheckBox.setAttribute(\"type\", \"checkbox\");\r\n\ttaskCheckBox.setAttribute(\"name\", `task${_taskDetails_js__WEBPACK_IMPORTED_MODULE_0__.taskList.indexOf(task)}`);\r\n\r\n\tconst taskTitle = document.createElement(\"h3\");\r\n\ttaskTitle.classList.add(\"task-title\");\r\n\ttaskTitle.textContent = task.title;\r\n\r\n\tconst taskDesc = document.createElement(\"p\");\r\n\ttaskDesc.textContent = task.description;\r\n\r\n\tconst addTaskBtn = document.createElement(\"button\");\r\n\taddTaskBtn.classList.add(\"add-task\");\r\n\taddTaskBtn.setAttribute(\"id\", \"add-task\");\r\n\taddTaskBtn.textContent = \"Add Task\";\r\n\r\n\t// const taskDate = document.createElement(\"p\");\r\n\t// taskDate.classList.add(\"task-date\");\r\n\t// taskDate.textContent = task.date;\r\n\r\n\ttaskDiv.appendChild(taskCheckBox);\r\n\ttaskDiv.appendChild(taskTitle);\r\n\ttaskDiv.appendChild(taskDesc);\r\n\ttaskDiv.appendChild(addTaskBtn);\r\n\t// taskDiv.appendChild(taskDate);\r\n\ttaskContainer.appendChild(taskDiv);\r\n\r\n\treturn taskContainer;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTasks);\r\n\n\n//# sourceURL=webpack://todo-list/./src/createTask.js?");

/***/ }),

/***/ "./src/displayProject.js":
/*!*******************************!*\
  !*** ./src/displayProject.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _projectDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectDetails */ \"./src/projectDetails.js\");\n/* harmony import */ var _addProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addProject */ \"./src/addProject.js\");\n\r\n\r\n\r\nfunction render() {\r\n\tconst dashBoard = document.querySelector(\".dashboard\");\r\n\tconst projects = document.querySelectorAll(\".project-card\");\r\n\r\n\tprojects.forEach((project) => dashBoard.removeChild(project));\r\n\r\n\tfor (let i = 0; i < _projectDetails__WEBPACK_IMPORTED_MODULE_0__.projectList.length; i++) {\r\n\t\t(0,_addProject__WEBPACK_IMPORTED_MODULE_1__.default)(_projectDetails__WEBPACK_IMPORTED_MODULE_0__.projectList[i]);\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);\r\n\n\n//# sourceURL=webpack://todo-list/./src/displayProject.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UIcomp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UIcomp.js */ \"./src/UIcomp.js\");\n\r\n\r\n(0,_UIcomp_js__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/projectDetails.js":
/*!*******************************!*\
  !*** ./src/projectDetails.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectList\": () => (/* binding */ projectList),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayProject */ \"./src/displayProject.js\");\n\r\n\r\nlet projectList = [];\r\n\r\nfunction addProjectCard() {\r\n\tlet newProject;\r\n\tclass Project {\r\n\t\tconstructor(title, description) {\r\n\t\t\tthis.title = form.title.value;\r\n\t\t\tthis.description = form.description.value;\r\n\t\t}\r\n\t}\r\n\r\n\tfunction addTask(title, description) {\r\n\t\tevent.preventDefault();\r\n\r\n\t\tnewProject = new Project(title, description);\r\n\t\tprojectList.push(newProject);\r\n\t\t(0,_displayProject__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n\t\tform.reset();\r\n\t}\r\n\r\n\treturn addTask();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addProjectCard);\r\n\n\n//# sourceURL=webpack://todo-list/./src/projectDetails.js?");

/***/ }),

/***/ "./src/taskDetails.js":
/*!****************************!*\
  !*** ./src/taskDetails.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"taskList\": () => (/* binding */ taskList),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayProject */ \"./src/displayProject.js\");\n\r\n\r\nlet taskList = [];\r\n\r\nfunction addProjectDetails() {\r\n\tlet newTask;\r\n\tclass Task {\r\n\t\tconstructor(title, description, date = \"No date\") {\r\n\t\t\t(this.title = form.title.value),\r\n\t\t\t\t(this.description = form.description.value),\r\n\t\t\t\t(this.date = form.date.value);\r\n\t\t}\r\n\t}\r\n\r\n\tfunction addTask(title, description, date) {\r\n\t\tevent.preventDefault();\r\n\r\n\t\tnewTask = new Task(title, description, date);\r\n\t\ttaskList.push(newTask);\r\n\t\t(0,_displayProject__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n\t\tform.reset();\r\n\t}\r\n\r\n\treturn addTask();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addProjectDetails);\r\n\n\n//# sourceURL=webpack://todo-list/./src/taskDetails.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;