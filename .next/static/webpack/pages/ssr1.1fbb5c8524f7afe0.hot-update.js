"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ssr1",{

/***/ "./pages/ssr1.js":
/*!***********************!*\
  !*** ./pages/ssr1.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n// pages/ssr.js\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\n// This is an example of a component that will be rendered on the client-side\nvar ClientComponent = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), count = ref[0], setCount = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Client-Side Component\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\srira\\\\Desktop\\\\react-to-next\\\\pages\\\\ssr1.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Count: \",\n                    count\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\srira\\\\Desktop\\\\react-to-next\\\\pages\\\\ssr1.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return setCount(count + 1);\n                },\n                children: \"Increment\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\srira\\\\Desktop\\\\react-to-next\\\\pages\\\\ssr1.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\srira\\\\Desktop\\\\react-to-next\\\\pages\\\\ssr1.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, _this));\n};\n_s(ClientComponent, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = ClientComponent;\n// This is the server-side rendered page\nvar SSRPage = function(param) {\n    var serverData = param.serverData;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"con\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Server-Side Rendered Page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\srira\\\\Desktop\\\\react-to-next\\\\pages\\\\ssr1.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Data from the server(Json Placeholder): \",\n                    serverData\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\srira\\\\Desktop\\\\react-to-next\\\\pages\\\\ssr1.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ClientComponent, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\srira\\\\Desktop\\\\react-to-next\\\\pages\\\\ssr1.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\srira\\\\Desktop\\\\react-to-next\\\\pages\\\\ssr1.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, _this));\n};\n_c1 = SSRPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SSRPage);\nvar _c, _c1;\n$RefreshReg$(_c, \"ClientComponent\");\n$RefreshReg$(_c1, \"SSRPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zc3IxLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLEVBQWU7QUFDNEI7OztBQUUzQyxFQUE2RTtBQUM3RSxHQUFLLENBQUNFLGVBQWUsR0FBRyxRQUFRLEdBQUYsQ0FBQzs7SUFDN0IsR0FBSyxDQUFxQkYsR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsR0FBN0JHLEtBQUssR0FBY0gsR0FBVyxLQUF2QkksUUFBUSxHQUFJSixHQUFXO0lBRXJDLE1BQU0sNkVBQ0hLLENBQUc7O3dGQUNEQyxDQUFFOzBCQUFDLENBQXFCOzs7Ozs7d0ZBQ3hCQyxDQUFDOztvQkFBQyxDQUFPO29CQUFDSixLQUFLOzs7Ozs7O3dGQUNmSyxDQUFNO2dCQUFDQyxPQUFPLEVBQUUsUUFBUTtvQkFBRkwsTUFBTSxDQUFOQSxRQUFRLENBQUNELEtBQUssR0FBRyxDQUFDOzswQkFBRyxDQUFTOzs7Ozs7Ozs7Ozs7QUFHM0QsQ0FBQztHQVZLRCxlQUFlO0tBQWZBLGVBQWU7QUFZckIsRUFBd0M7QUFDeEMsR0FBSyxDQUFDUSxPQUFPLEdBQUcsUUFBUSxRQUFZLENBQUM7UUFBbEJDLFVBQVUsU0FBVkEsVUFBVTtJQUMzQixNQUFNLDZFQUNITixDQUFHO1FBQUNPLEVBQUUsRUFBQyxDQUFLOzt3RkFDVkMsQ0FBRTswQkFBQyxDQUF5Qjs7Ozs7O3dGQUM1Qk4sQ0FBQzs7b0JBQUMsQ0FBd0M7b0JBQUNJLFVBQVU7Ozs7Ozs7d0ZBQ3JEVCxlQUFlOzs7Ozs7Ozs7OztBQUd0QixDQUFDO01BUktRLE9BQU87O0FBZ0NiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3NyMS5qcz82ZjE2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL3Nzci5qc1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gVGhpcyBpcyBhbiBleGFtcGxlIG9mIGEgY29tcG9uZW50IHRoYXQgd2lsbCBiZSByZW5kZXJlZCBvbiB0aGUgY2xpZW50LXNpZGVcclxuY29uc3QgQ2xpZW50Q29tcG9uZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2ID5cclxuICAgICAgPGgzPkNsaWVudC1TaWRlIENvbXBvbmVudDwvaDM+XHJcbiAgICAgIDxwPkNvdW50OiB7Y291bnR9PC9wPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldENvdW50KGNvdW50ICsgMSl9PkluY3JlbWVudDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vIFRoaXMgaXMgdGhlIHNlcnZlci1zaWRlIHJlbmRlcmVkIHBhZ2VcclxuY29uc3QgU1NSUGFnZSA9ICh7IHNlcnZlckRhdGEgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPSdjb24nPlxyXG4gICAgICA8aDI+U2VydmVyLVNpZGUgUmVuZGVyZWQgUGFnZTwvaDI+XHJcbiAgICAgIDxwPkRhdGEgZnJvbSB0aGUgc2VydmVyKEpzb24gUGxhY2Vob2xkZXIpOiB7c2VydmVyRGF0YX08L3A+XHJcbiAgICAgIDxDbGllbnRDb21wb25lbnQgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gICAgLy8gU2ltdWxhdGUgZmV0Y2hpbmcgZGF0YSBmcm9tIGFuIEFQSSBvciBkYXRhYmFzZSBvbiB0aGUgc2VydmVyIHNpZGVcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS90b2Rvcy8yJyk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgXHJcbiAgICAgIC8vIFJldHVybiB0aGUgZGF0YSBhcyBwcm9wc1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICBzZXJ2ZXJEYXRhOiBkYXRhLnRpdGxlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBzZXJ2ZXIgZGF0YTonLCBlcnJvcik7XHJcbiAgXHJcbiAgICAgIC8vIFJldHVybiBhbiBlbXB0eSBvYmplY3QgaW4gY2FzZSBvZiBhbiBlcnJvclxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7fSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTU1JQYWdlO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDbGllbnRDb21wb25lbnQiLCJjb3VudCIsInNldENvdW50IiwiZGl2IiwiaDMiLCJwIiwiYnV0dG9uIiwib25DbGljayIsIlNTUlBhZ2UiLCJzZXJ2ZXJEYXRhIiwiaWQiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/ssr1.js\n");

/***/ })

});