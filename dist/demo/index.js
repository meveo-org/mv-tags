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

/***/ "./demo.js":
/*!*****************!*\
  !*** ./demo.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MvTagsDemo\": () => (/* binding */ MvTagsDemo)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'lit'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '@meveo-org/mv-container'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _mv_tags_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mv-tags.js */ \"./mv-tags.js\");\n\r\n\r\n\r\n\r\nclass MvTagsDemo extends Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'lit'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) {\r\n  static get properties() {\r\n    return {\r\n      tags: { type: Array, attribute: false, reflect: true },\r\n      detail: { type: Object, attribute: false, reflect: true },\r\n      theme: { type: String, attribute: true }\r\n    };\r\n  }\r\n\r\n  static get styles() {\r\n    return Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'lit'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())`\r\n      :host {\r\n        font-family: var(--font-family, Arial);\r\n        font-size: var(--font-size-m, 10pt);\r\n      }\r\n\r\n      .tags {\r\n        margin-top: 10px;\r\n      }\r\n      \r\n      fieldset > label, label > input {\r\n        cursor: pointer;\r\n      }\r\n      \r\n      fieldset {\r\n        width: 120px;\r\n        margin-left: 10px;\r\n        border:2px solid red;\r\n        -moz-border-radius: 8px;\r\n        -webkit-border-radius: 8px;\t\r\n        border-radius: 8px;\r\n        color: #818181;\r\n      }\r\n      \r\n      legend {\r\n        font-weight: 500;\r\n        color: red;\r\n      }\r\n    `;\r\n  }\r\n\r\n  constructor() {\r\n    super();\r\n    this.tags = [\"abc\", \"123\"];\r\n    this.detail = {};\r\n    this.theme = \"light\";\r\n  }\r\n\r\n  render() {\r\n    const { theme } = this;\r\n    return Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'lit'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())`\r\n      <fieldset>\r\n        <legend>Theme</legend>\r\n        <label><input type=\"radio\" name=\"theme\" value=\"light\" checked @change=\"${this.changeTheme}\" />Light</label>\r\n        <label><input type=\"radio\" name=\"theme\" value=\"dark\" @change=\"${this.changeTheme}\" />Dark</label>\r\n      </fieldset>\r\n      <mv-container .theme=\"${theme}\">\r\n        <h3>.tags=\"$ {[\"abc\", \"123\"]}\"</h3>\r\n        <mv-tags\r\n          .tags=\"${this.tags}\"\r\n          @add-tag=\"${this.updateTags}\"\r\n          @remove-tag=\"${this.removeTags}\"\r\n          placeholder=\"Enter tags...\"\r\n          .theme=\"${theme}\"\r\n        ></mv-tags>\r\n        <div class=\"tags\">\r\n          <b>Tags : </b>\r\n          <ul>\r\n            ${this.tags.map(\r\n              value =>\r\n                Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'lit'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())`\r\n                  <li>${JSON.stringify(value)}</li>\r\n                `\r\n            )}\r\n          </ul>\r\n        </div>\r\n        <div class=\"tags\">\r\n          <b>Data : </b>${JSON.stringify(this.detail, null, 2)}\r\n        </div>\r\n      </mv-container>\r\n    `;\r\n  }\r\n\r\n  removeTags = event => {\r\n    const { detail } = event;\r\n    const { value } = detail;\r\n    const shouldRemove = confirm(`Remove tag: ${value}?`);\r\n    if (shouldRemove) {\r\n      this.updateTags(event);\r\n    }\r\n  };\r\n\r\n  updateTags = event => {\r\n    const { detail } = event;\r\n    const { tags } = detail;\r\n    this.tags = [...tags];\r\n    this.detail = detail;\r\n  };\r\n\r\n  changeTheme = originalEvent => {\r\n    const { target: { value } } = originalEvent;\r\n    this.theme = value;\r\n  };\r\n}\r\n\r\ncustomElements.define(\"mv-tags-demo\", MvTagsDemo);\r\n\n\n//# sourceURL=webpack://@meveo-org/mv-tags/./demo.js?");

/***/ }),

/***/ "./mv-tags.js":
/*!********************!*\
  !*** ./mv-tags.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MvTags\": () => (/* binding */ MvTags)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'lit'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\nclass MvTags extends Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'lit'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) {\r\n  static get properties() {\r\n    return {\r\n      value: { type: String, attribute: true, reflect: true },\r\n      tags: { type: Array, attribute: false, reflect: true },\r\n      focus: { type: Boolean, attribute: false, reflect: true },\r\n      hasError: { type: Boolean, attribute: \"has-error\", reflect: true },\r\n      placeholder: { type: String, attribute: true },\r\n      required: { type: Boolean, attribute: true, reflect: true },\r\n      immediate: { type: Boolean, attribute: true, reflect: true },\r\n\r\n      //  valid theme values are: \"light\", \"dark\"\r\n      //    default: \"light\"\r\n      theme: { type: String, attribute: true },\r\n    };\r\n  }\r\n\r\n  static get styles() {\r\n    return Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'lit'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())`\r\n      :host {\r\n        font-family: var(--font-family, MuseoSans);\r\n        font-size: var(--font-size-m, 16px);\r\n        --color: var(--mv-tags-color, #818181);\r\n        --min-width: var(--mv-tags-min-width, auto);\r\n        --max-width: var(--mv-tags-max-width, auto);\r\n        --margin: var(--mv-tags-margin, 0);\r\n        --border: var(--mv-tags-border, 1px solid #4e686d);\r\n        --active-border: var(--mv-tags-active-border, 1px solid #1d9bc9);\r\n        --placeholder-color: var(--mv-tags-placeholder-color, #c8c6c6);\r\n        --required-placeholder-color: var(\r\n          --mv-tags-required-placeholder-color,\r\n          #818181\r\n        );\r\n        --active-box-shadow: var(\r\n          --mv-tags-active-box-shadow,\r\n          inset 0 0 9px 0 rgba(29, 155, 201, 0.3)\r\n        );\r\n        --error-border: var(\r\n          --mv-tags-error-border,\r\n          1px solid rgba(247, 112, 98, 1)\r\n        );\r\n        --error-box-shadow: var(\r\n          --mv-tags-error-box-shadow,\r\n          inset 0 0 9px 0 rgba(229, 47, 47, 0.3)\r\n        );\r\n        --border-radius: 5px;\r\n        --light-background: var(--mv-tags-light-background, #1e87f0);\r\n        --dark-background: var(--mv-tags-dark-background, #373e48);\r\n      }\r\n\r\n      a:hover {\r\n        cursor: pointer;\r\n      }\r\n\r\n      .mv-tags {\r\n        border: var(--border);\r\n        margin: var(--margin);\r\n        min-width: var(--min-width);\r\n        max-width: var(--max-width);\r\n        padding: var(--mv-tags-padding, 4px 8px);\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        border-radius: var(--border-radius);\r\n        background-color: #ffffff;\r\n      }\r\n\r\n      .mv-tags:hover,\r\n      .mv-tags.focus {\r\n        border: var(--active-border);\r\n        box-shadow: var(--active-box-shadow);\r\n      }\r\n\r\n      .mv-tags.error,\r\n      .mv-tags.error:hover,\r\n      .mv-tags.error.focus {\r\n        border: var(--error-border);\r\n      }\r\n\r\n      .mv-tags.error:hover,\r\n      .mv-tags.error.focus {\r\n        box-shadow: var(--error-box-shadow);\r\n      }\r\n\r\n      .mv-tags > ul {\r\n        list-style: none;\r\n        padding: 0;\r\n        margin: 0;\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        min-width: var(--min-width);\r\n        max-width: var(--max-width);\r\n      }\r\n\r\n      .mv-tags ul li {\r\n        margin: 0.2em;\r\n        padding: 0.3em 0.5em;\r\n        color: #fff;\r\n        background-color: var(--background-color);\r\n        border-radius: 5px;\r\n      }\r\n\r\n      .mv-tags ul li a {\r\n        margin: 0.4em 0.2em;\r\n        text-decoration: none;\r\n        color: inherit;\r\n      }\r\n\r\n      .mv-tags input {\r\n        margin: 0.4em 0.3em;\r\n        padding: 0;\r\n        box-sizing: border-box;\r\n        flex-grow: 1;\r\n        border: none;\r\n        outline: none;\r\n        font-family: inherit;\r\n        font-size: inherit;\r\n        color: var(--color);\r\n        min-width: var(--min-width);\r\n        max-width: var(--max-width);\r\n      }\r\n\r\n      ::placeholder {\r\n        color: var(--placeholder-color);\r\n        font-weight: 100;\r\n      }\r\n\r\n      .required::placeholder {\r\n        font-weight: 700;\r\n        color: var(--required-placeholder-color);\r\n      }\r\n\r\n      .light {\r\n        --background-color: var(--light-background);\r\n      }\r\n\r\n      .dark {\r\n        --background-color: var(--dark-background);\r\n      }\r\n    `;\r\n  }\r\n\r\n  constructor() {\r\n    super();\r\n    this.value = \"\";\r\n    this.tags = [];\r\n    this.placeholder = \"\";\r\n    this.focus = false;\r\n    this.hasError = false;\r\n    this.required = false;\r\n    this.immediate = false;\r\n    this.theme = \"light\";\r\n  }\r\n\r\n  render() {\r\n    const hasTags = this.tags && this.tags.length > 0;\r\n    const focusClass = this.focus ? \" focus\" : \"\";\r\n    const errorClass = this.hasError ? \" error\" : \"\";\r\n    const componentClass = `mv-tags${focusClass}${errorClass}`;\r\n    return Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'lit'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())`\r\n      <div class=\"${componentClass} ${this.theme}\">\r\n        <ul>\r\n          ${hasTags\r\n            ? this.tags.map(\r\n                (tag, index) => Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'lit'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())`\r\n                  <li>${tag}<a @click=\"${this.removeTag(index)}\">×</a></li>\r\n                `\r\n              )\r\n            : Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'lit'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())``}\r\n        </ul>\r\n        <input\r\n          @keydown = \"${this.inputChange}\"\r\n          @focusin=\"${this.focusInInput}\"\r\n          @focusout=\"${this.focusOutInput}\"\r\n          .value=\"${this.value}\"\r\n          placeholder=\"${this.placeholder}\"\r\n          class=\"${this.required ? \"required\" : \"\"}\"\r\n        />\r\n      </div>\r\n    `;\r\n  }\r\n\r\n  focusInInput = () => {\r\n    this.focus = true;\r\n  };\r\n\r\n  focusOutInput = (event) => {\r\n    const {\r\n      target: { value },\r\n    } = event;\r\n    const hasValue = !!value.trim();\r\n    if (this.immediate && hasValue) {\r\n      this.value = \"\";\r\n      this.dispatchEvent(\r\n        new CustomEvent(\"add-tag\", {\r\n          detail: {\r\n            tags: [...this.tags, value],\r\n            value,\r\n            index: this.tags.length,\r\n          },\r\n        })\r\n      );\r\n    }\r\n    this.focus = false;\r\n  };\r\n\r\n  inputChange = (event) => {\r\n    const {\r\n      target: { value },\r\n    } = event;\r\n    const hasValue = !!value.trim();\r\n    const hasTags = this.tags && this.tags.length > 0;\r\n    const isComma = event.key === \",\";\r\n    const isEnter = event.key === \"Enter\" || isComma;\r\n    const isBackspace = event.key === \"Backspace\";\r\n    const isTab = event.key === \"Tab\";\r\n    if ((isEnter && hasValue) || (isTab && hasValue)) {\r\n      event.preventDefault()\r\n      const tags = [...this.tags, isComma ? value.replace(\",\", \"\") : value];\r\n      this.value = \"\";\r\n      this.dispatchEvent(\r\n        new CustomEvent(\"add-tag\", {\r\n          detail: { tags, value, index: this.tags.length },\r\n        })\r\n      );\r\n    } else if (isBackspace && hasTags && !hasValue) {\r\n      this.removeTag(this.tags.length - 1)();\r\n    } else {\r\n      this.value = value;\r\n      this.dispatchEvent(\r\n        new CustomEvent(\"change-tag\", {\r\n          detail: { value },\r\n        })\r\n      );\r\n    }\r\n  };\r\n\r\n  removeTag = (index) => () => {\r\n    const tags = [...this.tags.slice(0, index), ...this.tags.slice(index + 1)];\r\n    this.dispatchEvent(\r\n      new CustomEvent(\"remove-tag\", {\r\n        detail: { tags, value: this.tags[index], index },\r\n      })\r\n    );\r\n  };\r\n}\r\n\r\ncustomElements.define(\"mv-tags\", MvTags);\r\n\n\n//# sourceURL=webpack://@meveo-org/mv-tags/./mv-tags.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./demo.js");
/******/ 	
/******/ })()
;