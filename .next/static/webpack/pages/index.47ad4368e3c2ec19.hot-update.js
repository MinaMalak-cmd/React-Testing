"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index", {
  /***/ "./src/Components/Counter/Counter.tsx":
    /*!********************************************!*\
  !*** ./src/Components/Counter/Counter.tsx ***!
  \********************************************/
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Counter": function() { return /* binding */ Counter; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$();\nfunction Counter(param) {\n    var description = param.description, defaultCount = param.defaultCount;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultCount), count = ref[0], setCount = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), incrementor = ref1[0], setIncrementor = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {\n                children: [\n                    "DESC: ",\n                    description,\n                    " - DC: ",\n                    defaultCount\n                ]\n            }, void 0, true, {\n                fileName: "/home/eduapps/Documents/Myrepos/react-testing/src/Components/Counter/Counter.tsx",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {\n                children: [\n                    "incrementor",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {\n                        type: "number",\n                        onChange: e\n                    }, void 0, false, {\n                        fileName: "/home/eduapps/Documents/Myrepos/react-testing/src/Components/Counter/Counter.tsx",\n                        lineNumber: 19,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: "/home/eduapps/Documents/Myrepos/react-testing/src/Components/Counter/Counter.tsx",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {\n                "aria-label": "Subtract from Counter",\n                onClick: function() {\n                    return setCount(count - 1);\n                },\n                children: "-"\n            }, void 0, false, {\n                fileName: "/home/eduapps/Documents/Myrepos/react-testing/src/Components/Counter/Counter.tsx",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            "Current Count: ",\n            count,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {\n                "aria-label": "Add to Counter",\n                onClick: function() {\n                    return setCount(count + 1);\n                },\n                children: "+"\n            }, void 0, false, {\n                fileName: "/home/eduapps/Documents/Myrepos/react-testing/src/Components/Counter/Counter.tsx",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: "/home/eduapps/Documents/Myrepos/react-testing/src/Components/Counter/Counter.tsx",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this));\n}\n_s(Counter, "lat6RyxjvqEd+joUemzS818Nxy8=");\n_c = Counter;\nvar _c;\n$RefreshReg$(_c, "Counter");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we\'re in a\n        // browser context before continuing.\n        if (typeof self !== \'undefined\' &&\n            // AMP / No-JS mode does not inject these helpers:\n            \'$RefreshHelpers$\' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we\'ll check if it\'s\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we\'ll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it\'s possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9Db3VudGVyL0NvdW50ZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF1Qzs7QUFPaEMsU0FBU0UsT0FBTyxDQUFDLEtBQTJDLEVBQUUsQ0FBQztRQUE1Q0MsV0FBVyxHQUFiLEtBQTJDLENBQXpDQSxXQUFXLEVBQUVDLFlBQVksR0FBM0IsS0FBMkMsQ0FBNUJBLFlBQVk7O0lBQ2pELEdBQUssQ0FBcUJILEdBQXNCLEdBQXRCQSwrQ0FBUSxDQUFDRyxZQUFZLEdBQXhDQyxLQUFLLEdBQWNKLEdBQXNCLEtBQWxDSyxRQUFRLEdBQUlMLEdBQXNCO0lBQ2hELEdBQUssQ0FBaUNBLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQXpDTSxXQUFXLEdBQW9CTixJQUFXLEtBQTdCTyxjQUFjLEdBQUlQLElBQVc7SUFFakQsTUFBTSw2RUFDSFEsQ0FBRzs7d0ZBQ0RDLENBQUU7O29CQUFDLENBQ0k7b0JBQUNQLFdBQVc7b0JBQUMsQ0FBTztvQkFBQ0MsWUFBWTs7Ozs7Ozt3RkFFeENPLENBQUs7O29CQUFDLENBRVA7Z0dBQUNDLENBQUs7d0JBQUNDLElBQUksRUFBQyxDQUFRO3dCQUFDQyxRQUFRLEVBQUdDLENBQUM7Ozs7Ozs7Ozs7Ozt3RkFFaENDLENBQU07Z0JBQ0xDLENBQVUsYUFBQyxDQUF1QjtnQkFDbENDLE9BQU8sRUFBRSxRQUFRO29CQUFGWixNQUFNLENBQU5BLFFBQVEsQ0FBQ0QsS0FBSyxHQUFHLENBQUM7OzBCQUNsQyxDQUVEOzs7Ozs7WUFBUyxDQUNNO1lBQUNBLEtBQUs7d0ZBQ3BCVyxDQUFNO2dCQUNMQyxDQUFVLGFBQUMsQ0FBZ0I7Z0JBQzNCQyxPQUFPLEVBQUUsUUFBUTtvQkFBRlosTUFBTSxDQUFOQSxRQUFRLENBQUNELEtBQUssR0FBRyxDQUFDOzswQkFDbEMsQ0FFRDs7Ozs7Ozs7Ozs7O0FBR04sQ0FBQztHQTVCZUgsT0FBTztLQUFQQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db21wb25lbnRzL0NvdW50ZXIvQ291bnRlci50c3g/YWE4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGludGVyZmFjZSBDb3VudGVyUHJvcHMge1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBkZWZhdWx0Q291bnQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENvdW50ZXIoeyBkZXNjcmlwdGlvbiwgZGVmYXVsdENvdW50IH06IENvdW50ZXJQcm9wcykge1xuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKGRlZmF1bHRDb3VudCk7XG4gIGNvbnN0IFtpbmNyZW1lbnRvciwgc2V0SW5jcmVtZW50b3JdID0gdXNlU3RhdGUoMCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgyPlxuICAgICAgICBERVNDOiB7ZGVzY3JpcHRpb259IC0gREM6IHtkZWZhdWx0Q291bnR9XG4gICAgICA8L2gyPlxuICAgICAgPGxhYmVsPlxuICAgICAgaW5jcmVtZW50b3JcbiAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgb25DaGFuZ2U9eyhlKX0vPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxidXR0b25cbiAgICAgICAgYXJpYS1sYWJlbD1cIlN1YnRyYWN0IGZyb20gQ291bnRlclwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldENvdW50KGNvdW50IC0gMSl9XG4gICAgICA+XG4gICAgICAgIC1cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgQ3VycmVudCBDb3VudDoge2NvdW50fVxuICAgICAgPGJ1dHRvblxuICAgICAgICBhcmlhLWxhYmVsPVwiQWRkIHRvIENvdW50ZXJcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDb3VudChjb3VudCArIDEpfVxuICAgICAgPlxuICAgICAgICArXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ291bnRlciIsImRlc2NyaXB0aW9uIiwiZGVmYXVsdENvdW50IiwiY291bnQiLCJzZXRDb3VudCIsImluY3JlbWVudG9yIiwic2V0SW5jcmVtZW50b3IiLCJkaXYiLCJoMiIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJlIiwiYnV0dG9uIiwiYXJpYS1sYWJlbCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Components/Counter/Counter.tsx\n'
      );

      /***/
    },
});
