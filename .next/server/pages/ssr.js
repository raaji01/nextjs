"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/ssr";
exports.ids = ["pages/ssr"];
exports.modules = {

/***/ "./pages/ssr.tsx":
/*!***********************!*\
  !*** ./pages/ssr.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst App = ()=>{\n    const { 0: todos , 1: setTodos  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_2___default().get('https://jsonplaceholder.typicode.com/todos?_limit=5').then((response)=>setTodos(response.data)\n        ).catch((error)=>console.log(error)\n        );\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"con\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Todos\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\srira\\\\Desktop\\\\react-to-next\\\\pages\\\\ssr.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            todo.title,\n                            \" - \",\n                            todo.completed ? 'Done' : 'Pending'\n                        ]\n                    }, todo.id, true, {\n                        fileName: \"C:\\\\Users\\\\srira\\\\Desktop\\\\react-to-next\\\\pages\\\\ssr.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, undefined)\n                )\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\srira\\\\Desktop\\\\react-to-next\\\\pages\\\\ssr.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\srira\\\\Desktop\\\\react-to-next\\\\pages\\\\ssr.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zc3IudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ3pCO0FBUXpCLEtBQUssQ0FBQ0ksR0FBRyxPQUFtQixDQUFDO0lBQzVCLEtBQUssTUFBRUMsS0FBSyxNQUFFQyxRQUFRLE1BQUlMLCtDQUFRLENBQVMsQ0FBQyxDQUFDO0lBRTdDQyxnREFBUyxLQUFPLENBQUM7UUFDZEMsZ0RBQ00sQ0FBQyxDQUFxRCxzREFDekRLLElBQUksRUFBRUMsUUFBUSxHQUFLSCxRQUFRLENBQUNHLFFBQVEsQ0FBQ0MsSUFBSTtVQUN6Q0MsS0FBSyxFQUFFQyxLQUFLLEdBQUtDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLOztJQUN4QyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsTUFBTSw2RUFDRkcsQ0FBRztRQUFDQyxFQUFFLEVBQUMsQ0FBSzs7d0ZBQ1ZDLENBQUU7MEJBQUMsQ0FBSzs7Ozs7O3dGQUNSQyxDQUFFOzBCQUNBYixLQUFLLENBQUNjLEdBQUcsRUFBRUMsSUFBSSwrRUFDYkMsQ0FBRTs7NEJBQ0FELElBQUksQ0FBQ0UsS0FBSzs0QkFBQyxDQUFHOzRCQUFDRixJQUFJLENBQUNHLFNBQVMsR0FBRyxDQUFNLFFBQUcsQ0FBUzs7dUJBRDVDSCxJQUFJLENBQUNKLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzFCLENBQUM7QUFFRCxpRUFBZVosR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3RjbG9uZS8uL3BhZ2VzL3Nzci50c3g/NmMyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbnR5cGUgVG9kbyA9IHtcclxuIGlkOiBudW1iZXI7XHJcbiB0aXRsZTogc3RyaW5nO1xyXG4gY29tcGxldGVkOiBib29sZWFuO1xyXG59O1xyXG5cclxuY29uc3QgQXBwOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGU8VG9kb1tdPihbXSk7XHJcblxyXG4gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS90b2Rvcz9fbGltaXQ9NScpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc2V0VG9kb3MocmVzcG9uc2UuZGF0YSkpXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiB9LCBbXSk7XHJcblxyXG4gcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9J2Nvbic+XHJcbiAgICAgIDxoMT5Ub2RvczwvaDE+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7dG9kb3MubWFwKCh0b2RvKSA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXt0b2RvLmlkfT5cclxuICAgICAgICAgICAge3RvZG8udGl0bGV9IC0ge3RvZG8uY29tcGxldGVkID8gJ0RvbmUnIDogJ1BlbmRpbmcnfVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiQXBwIiwidG9kb3MiLCJzZXRUb2RvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImRpdiIsImlkIiwiaDEiLCJ1bCIsIm1hcCIsInRvZG8iLCJsaSIsInRpdGxlIiwiY29tcGxldGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/ssr.tsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/ssr.tsx"));
module.exports = __webpack_exports__;

})();