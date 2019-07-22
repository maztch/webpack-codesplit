(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form"],{

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  render: function render() {\n    var form = document.createElement('form');\n\n    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(['Name', 'Email', 'Contact'], function (field) {\n      var lbl = document.createElement('label');\n      lbl.innerHTML = field;\n      var txt = document.createElement('input');\n      txt.type = 'text';\n      var container = document.createElement('div');\n      container.className = 'field';\n      container.appendChild(lbl);\n      container.appendChild(txt);\n      form.appendChild(container);\n    });\n\n    return form;\n  }\n});\n\n//# sourceURL=webpack:///./src/form.js?");

/***/ })

}]);