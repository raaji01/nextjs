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
exports.id = "pages/ssr1";
exports.ids = ["pages/ssr1"];
exports.modules = {

/***/ "./pages/ssr1.js":
/*!***********************!*\
  !*** ./pages/ssr1.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n// pages/ssr.js\n\n// This is an example of a component that will be rendered on the client-side\nconst ClientComponent = ()=>{\n    const { 0: count , 1: setCount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Client-Side Component\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\srira\\\\Desktop\\\\react-to-next\\\\pages\\\\ssr1.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Count: \",\n                    count\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\srira\\\\Desktop\\\\react-to-next\\\\pages\\\\ssr1.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>setCount(count + 1)\n                ,\n                children: \"Increment\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\srira\\\\Desktop\\\\react-to-next\\\\pages\\\\ssr1.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\srira\\\\Desktop\\\\react-to-next\\\\pages\\\\ssr1.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined));\n};\n// This is the server-side rendered page\nconst SSRPage = ({ serverData  })=>{\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"con\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Basic server and client side rendering\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\srira\\\\Desktop\\\\react-to-next\\\\pages\\\\ssr1.js\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Server-Side Rendered Page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\srira\\\\Desktop\\\\react-to-next\\\\pages\\\\ssr1.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Data from the server(Json Placeholder): \",\n                    serverData\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\srira\\\\Desktop\\\\react-to-next\\\\pages\\\\ssr1.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ClientComponent, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\srira\\\\Desktop\\\\react-to-next\\\\pages\\\\ssr1.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\srira\\\\Desktop\\\\react-to-next\\\\pages\\\\ssr1.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined));\n};\nasync function getServerSideProps() {\n    // Simulate fetching data from an API or database on the server side\n    try {\n        const response = await fetch('https://jsonplaceholder.typicode.com/todos/2');\n        const data = await response.json();\n        // Return the data as props\n        return {\n            props: {\n                serverData: data.title\n            }\n        };\n    } catch (error) {\n        console.error('Error fetching server data:', error);\n        // Return an empty object in case of an error\n        return {\n            props: {}\n        };\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SSRPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zc3IxLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxFQUFlO0FBQzRCO0FBRTNDLEVBQTZFO0FBQzdFLEtBQUssQ0FBQ0UsZUFBZSxPQUFTLENBQUM7SUFDN0IsS0FBSyxNQUFFQyxLQUFLLE1BQUVDLFFBQVEsTUFBSUosK0NBQVEsQ0FBQyxDQUFDO0lBRXBDLE1BQU0sNkVBQ0hLLENBQUc7O3dGQUNEQyxDQUFFOzBCQUFDLENBQXFCOzs7Ozs7d0ZBQ3hCQyxDQUFDOztvQkFBQyxDQUFPO29CQUFDSixLQUFLOzs7Ozs7O3dGQUNmSyxDQUFNO2dCQUFDQyxPQUFPLE1BQVFMLFFBQVEsQ0FBQ0QsS0FBSyxHQUFHLENBQUM7OzBCQUFHLENBQVM7Ozs7Ozs7Ozs7OztBQUczRCxDQUFDO0FBRUQsRUFBd0M7QUFDeEMsS0FBSyxDQUFDTyxPQUFPLElBQUksQ0FBQyxDQUFDQyxVQUFVLEVBQUMsQ0FBQyxHQUFLLENBQUM7SUFDbkMsTUFBTSw2RUFDSE4sQ0FBRztRQUFDTyxFQUFFLEVBQUMsQ0FBSzs7d0ZBQ1JDLENBQUU7MEJBQUMsQ0FBc0M7Ozs7Ozt3RkFDM0NBLENBQUU7MEJBQUMsQ0FBeUI7Ozs7Ozt3RkFDNUJOLENBQUM7O29CQUFDLENBQXdDO29CQUFDSSxVQUFVOzs7Ozs7O3dGQUNyRFQsZUFBZTs7Ozs7Ozs7Ozs7QUFHdEIsQ0FBQztBQUVNLGVBQWVZLGtCQUFrQixHQUFHLENBQUM7SUFDeEMsRUFBb0U7SUFDcEUsR0FBRyxDQUFDLENBQUM7UUFDSCxLQUFLLENBQUNDLFFBQVEsR0FBRyxLQUFLLENBQUNDLEtBQUssQ0FBQyxDQUE4QztRQUMzRSxLQUFLLENBQUNDLElBQUksR0FBRyxLQUFLLENBQUNGLFFBQVEsQ0FBQ0csSUFBSTtRQUVoQyxFQUEyQjtRQUMzQixNQUFNLENBQUMsQ0FBQztZQUNOQyxLQUFLLEVBQUUsQ0FBQztnQkFDTlIsVUFBVSxFQUFFTSxJQUFJLENBQUNHLEtBQUs7WUFDeEIsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDLENBQUMsS0FBSyxFQUFFQyxLQUFLLEVBQUUsQ0FBQztRQUNmQyxPQUFPLENBQUNELEtBQUssQ0FBQyxDQUE2Qiw4QkFBRUEsS0FBSztRQUVsRCxFQUE2QztRQUM3QyxNQUFNLENBQUMsQ0FBQztZQUNORixLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ1gsQ0FBQztJQUNILENBQUM7QUFFSCxDQUFDO0FBRUgsaUVBQWVULE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0Y2xvbmUvLi9wYWdlcy9zc3IxLmpzPzZmMTYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvc3NyLmpzXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBUaGlzIGlzIGFuIGV4YW1wbGUgb2YgYSBjb21wb25lbnQgdGhhdCB3aWxsIGJlIHJlbmRlcmVkIG9uIHRoZSBjbGllbnQtc2lkZVxyXG5jb25zdCBDbGllbnRDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgPlxyXG4gICAgICA8aDM+Q2xpZW50LVNpZGUgQ29tcG9uZW50PC9oMz5cclxuICAgICAgPHA+Q291bnQ6IHtjb3VudH08L3A+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0Q291bnQoY291bnQgKyAxKX0+SW5jcmVtZW50PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuLy8gVGhpcyBpcyB0aGUgc2VydmVyLXNpZGUgcmVuZGVyZWQgcGFnZVxyXG5jb25zdCBTU1JQYWdlID0gKHsgc2VydmVyRGF0YSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9J2Nvbic+XHJcbiAgICAgICAgPGgyPkJhc2ljIHNlcnZlciBhbmQgY2xpZW50IHNpZGUgcmVuZGVyaW5nPC9oMj5cclxuICAgICAgPGgyPlNlcnZlci1TaWRlIFJlbmRlcmVkIFBhZ2U8L2gyPlxyXG4gICAgICA8cD5EYXRhIGZyb20gdGhlIHNlcnZlcihKc29uIFBsYWNlaG9sZGVyKToge3NlcnZlckRhdGF9PC9wPlxyXG4gICAgICA8Q2xpZW50Q29tcG9uZW50IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICAgIC8vIFNpbXVsYXRlIGZldGNoaW5nIGRhdGEgZnJvbSBhbiBBUEkgb3IgZGF0YWJhc2Ugb24gdGhlIHNlcnZlciBzaWRlXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdG9kb3MvMicpO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIFxyXG4gICAgICAvLyBSZXR1cm4gdGhlIGRhdGEgYXMgcHJvcHNcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgc2VydmVyRGF0YTogZGF0YS50aXRsZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgc2VydmVyIGRhdGE6JywgZXJyb3IpO1xyXG4gIFxyXG4gICAgICAvLyBSZXR1cm4gYW4gZW1wdHkgb2JqZWN0IGluIGNhc2Ugb2YgYW4gZXJyb3JcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge30sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTU1JQYWdlO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDbGllbnRDb21wb25lbnQiLCJjb3VudCIsInNldENvdW50IiwiZGl2IiwiaDMiLCJwIiwiYnV0dG9uIiwib25DbGljayIsIlNTUlBhZ2UiLCJzZXJ2ZXJEYXRhIiwiaWQiLCJoMiIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInByb3BzIiwidGl0bGUiLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/ssr1.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/ssr1.js"));
module.exports = __webpack_exports__;

})();