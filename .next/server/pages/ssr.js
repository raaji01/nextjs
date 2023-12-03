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

/***/ "./pages/ssr.js":
/*!**********************!*\
  !*** ./pages/ssr.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n// pages/ssr.js\n\nconst SSRPage = ({ serverData  })=>{\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"con\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Server-Side Rendered Page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\srira\\\\Desktop\\\\react-to-next\\\\pages\\\\ssr.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Data from the server: \",\n                    serverData\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\srira\\\\Desktop\\\\react-to-next\\\\pages\\\\ssr.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\srira\\\\Desktop\\\\react-to-next\\\\pages\\\\ssr.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined));\n};\nasync function getServerSideProps() {\n    // Simulate fetching data from an API or database on the server side\n    try {\n        const response = await fetch('https://jsonplaceholder.typicode.com/todos/2');\n        const data = await response.json();\n        // Return the data as props\n        return {\n            props: {\n                serverData: data.title\n            }\n        };\n    } catch (error) {\n        console.error('Error fetching server data:', error);\n        // Return an empty object in case of an error\n        return {\n            props: {}\n        };\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SSRPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zc3IuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEVBQWU7QUFDVTtBQUV6QixLQUFLLENBQUNDLE9BQU8sSUFBSSxDQUFDLENBQUNDLFVBQVUsRUFBQyxDQUFDLEdBQUssQ0FBQztJQUNuQyxNQUFNLDZFQUNIQyxDQUFHO1FBQUNDLEVBQUUsRUFBQyxDQUFLOzt3RkFDVkMsQ0FBRTswQkFBQyxDQUF5Qjs7Ozs7O3dGQUM1QkMsQ0FBQzs7b0JBQUMsQ0FBc0I7b0JBQUNKLFVBQVU7Ozs7Ozs7Ozs7Ozs7QUFHMUMsQ0FBQztBQUVNLGVBQWVLLGtCQUFrQixHQUFHLENBQUM7SUFDMUMsRUFBb0U7SUFDcEUsR0FBRyxDQUFDLENBQUM7UUFDSCxLQUFLLENBQUNDLFFBQVEsR0FBRyxLQUFLLENBQUNDLEtBQUssQ0FBQyxDQUE4QztRQUMzRSxLQUFLLENBQUNDLElBQUksR0FBRyxLQUFLLENBQUNGLFFBQVEsQ0FBQ0csSUFBSTtRQUVoQyxFQUEyQjtRQUMzQixNQUFNLENBQUMsQ0FBQztZQUNOQyxLQUFLLEVBQUUsQ0FBQztnQkFDTlYsVUFBVSxFQUFFUSxJQUFJLENBQUNHLEtBQUs7WUFDeEIsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDLENBQUMsS0FBSyxFQUFFQyxLQUFLLEVBQUUsQ0FBQztRQUNmQyxPQUFPLENBQUNELEtBQUssQ0FBQyxDQUE2Qiw4QkFBRUEsS0FBSztRQUVsRCxFQUE2QztRQUM3QyxNQUFNLENBQUMsQ0FBQztZQUNORixLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ1gsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVYLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0Y2xvbmUvLi9wYWdlcy9zc3IuanM/Zjc5YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9zc3IuanNcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFNTUlBhZ2UgPSAoeyBzZXJ2ZXJEYXRhIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cImNvblwiPlxyXG4gICAgICA8aDI+U2VydmVyLVNpZGUgUmVuZGVyZWQgUGFnZTwvaDI+XHJcbiAgICAgIDxwPkRhdGEgZnJvbSB0aGUgc2VydmVyOiB7c2VydmVyRGF0YX08L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICAvLyBTaW11bGF0ZSBmZXRjaGluZyBkYXRhIGZyb20gYW4gQVBJIG9yIGRhdGFiYXNlIG9uIHRoZSBzZXJ2ZXIgc2lkZVxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdG9kb3MvMicpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIGRhdGEgYXMgcHJvcHNcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgc2VydmVyRGF0YTogZGF0YS50aXRsZSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHNlcnZlciBkYXRhOicsIGVycm9yKTtcclxuXHJcbiAgICAvLyBSZXR1cm4gYW4gZW1wdHkgb2JqZWN0IGluIGNhc2Ugb2YgYW4gZXJyb3JcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7fSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTU1JQYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTU1JQYWdlIiwic2VydmVyRGF0YSIsImRpdiIsImlkIiwiaDIiLCJwIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwicHJvcHMiLCJ0aXRsZSIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/ssr.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/ssr.js"));
module.exports = __webpack_exports__;

})();