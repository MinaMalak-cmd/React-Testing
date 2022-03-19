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
  exports.id = "pages/index";
  exports.ids = ["pages/index"];
  exports.modules = {
    /***/ "./src/Components/Counter/Counter.tsx":
      /*!********************************************!*\
  !*** ./src/Components/Counter/Counter.tsx ***!
  \********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Counter": () => (/* binding */ Counter)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Counter({ description , defaultCount  }) {\n    const { 0: count , 1: setCount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultCount);\n    const { 0: incrementor , 1: setIncrementor  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const { 0: isBigEnough , 1: setIsBigEnough  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let id;\n        if (count >= 10) {\n            id = setTimeout(()=>{\n                setIsBigEnough(true);\n            });\n        } else setIsBigEnough(false);\n        return ()=>clearTimeout(id)\n        ;\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {\n                children: [\n                    "DESC: ",\n                    description,\n                    " - DC: ",\n                    defaultCount\n                ]\n            }, void 0, true, {\n                fileName: "F:\\\\Career\\\\React-Testing\\\\src\\\\Components\\\\Counter\\\\Counter.tsx",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {\n                children: [\n                    "incrementor",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {\n                        type: "number",\n                        value: incrementor,\n                        onChange: (e)=>setIncrementor(parseInt(e.target.value) || 1)\n                    }, void 0, false, {\n                        fileName: "F:\\\\Career\\\\React-Testing\\\\src\\\\Components\\\\Counter\\\\Counter.tsx",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: "F:\\\\Career\\\\React-Testing\\\\src\\\\Components\\\\Counter\\\\Counter.tsx",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {\n                "aria-label": "Subtract from Counter",\n                onClick: ()=>setCount(count - incrementor)\n                ,\n                children: "-"\n            }, void 0, false, {\n                fileName: "F:\\\\Career\\\\React-Testing\\\\src\\\\Components\\\\Counter\\\\Counter.tsx",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            "Current Count: ",\n            count,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {\n                "aria-label": "Add to Counter",\n                onClick: ()=>setTimeout(()=>{\n                        setCount((c)=>c + incrementor\n                        );\n                    }, 200)\n                ,\n                children: "+"\n            }, void 0, false, {\n                fileName: "F:\\\\Career\\\\React-Testing\\\\src\\\\Components\\\\Counter\\\\Counter.tsx",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            !isBigEnough && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                children: "I\'m too small"\n            }, void 0, false, {\n                fileName: "F:\\\\Career\\\\React-Testing\\\\src\\\\Components\\\\Counter\\\\Counter.tsx",\n                lineNumber: 51,\n                columnNumber: 24\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: "F:\\\\Career\\\\React-Testing\\\\src\\\\Components\\\\Counter\\\\Counter.tsx",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9Db3VudGVyL0NvdW50ZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFrRDtBQU8zQyxTQUFTRyxPQUFPLENBQUMsQ0FBQyxDQUFDQyxXQUFXLEdBQUVDLFlBQVksRUFBZSxDQUFDLEVBQUUsQ0FBQztJQUNwRSxLQUFLLE1BQUVDLEtBQUssTUFBRUMsUUFBUSxNQUFJTCwrQ0FBUSxDQUFDRyxZQUFZO0lBQy9DLEtBQUssTUFBRUcsV0FBVyxNQUFFQyxjQUFjLE1BQUlQLCtDQUFRLENBQUMsQ0FBQztJQUNoRCxLQUFLLE1BQUVRLFdBQVcsTUFBRUMsY0FBYyxNQUFJVCwrQ0FBUSxDQUFDLEtBQUs7SUFDcERELGdEQUFTLEtBQU8sQ0FBQztRQUNmLEdBQUcsQ0FBQ1csRUFBRTtRQUNOLEVBQUUsRUFBRU4sS0FBSyxJQUFJLEVBQUUsRUFBRSxDQUFDO1lBQ2hCTSxFQUFFLEdBQUdDLFVBQVUsS0FBTyxDQUFDO2dCQUNyQkYsY0FBYyxDQUFDLElBQUk7WUFDckIsQ0FBQztRQUNILENBQUMsTUFBTUEsY0FBYyxDQUFDLEtBQUs7UUFDM0IsTUFBTSxLQUFPRyxZQUFZLENBQUNGLEVBQUU7O0lBQzlCLENBQUM7SUFDRCxNQUFNLDZFQUNIRyxDQUFHOzt3RkFDREMsQ0FBRTs7b0JBQUMsQ0FDSTtvQkFBQ1osV0FBVztvQkFBQyxDQUFPO29CQUFDQyxZQUFZOzs7Ozs7O3dGQUV4Q1ksQ0FBSzs7b0JBQUMsQ0FFTDtnR0FBQ0MsQ0FBSzt3QkFDSkMsSUFBSSxFQUFDLENBQVE7d0JBQ2JDLEtBQUssRUFBRVosV0FBVzt3QkFDbEJhLFFBQVEsR0FBR0MsQ0FBQyxHQUFLYixjQUFjLENBQUNjLFFBQVEsQ0FBQ0QsQ0FBQyxDQUFDRSxNQUFNLENBQUNKLEtBQUssS0FBSyxDQUFDOzs7Ozs7Ozs7Ozs7d0ZBR2hFSyxDQUFNO2dCQUNMQyxDQUFVLGFBQUMsQ0FBdUI7Z0JBQ2xDQyxPQUFPLE1BQVFwQixRQUFRLENBQUNELEtBQUssR0FBR0UsV0FBVzs7MEJBQzVDLENBRUQ7Ozs7OztZQUFTLENBQ007WUFBQ0YsS0FBSzt3RkFDcEJtQixDQUFNO2dCQUNMQyxDQUFVLGFBQUMsQ0FBZ0I7Z0JBQzNCQyxPQUFPLE1BQ0xkLFVBQVUsS0FBTyxDQUFDO3dCQUNoQk4sUUFBUSxFQUFFcUIsQ0FBQyxHQUFLQSxDQUFDLEdBQUdwQixXQUFXOztvQkFDakMsQ0FBQyxFQUFFLEdBQUc7OzBCQUVULENBRUQ7Ozs7OzthQUNFRSxXQUFXLGdGQUFLSyxDQUFHOzBCQUFDLENBQWtCOzs7Ozs7Ozs7Ozs7QUFHOUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LXRlc3RpbmcvLi9zcmMvQ29tcG9uZW50cy9Db3VudGVyL0NvdW50ZXIudHN4P2FhOGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGludGVyZmFjZSBDb3VudGVyUHJvcHMge1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBkZWZhdWx0Q291bnQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENvdW50ZXIoeyBkZXNjcmlwdGlvbiwgZGVmYXVsdENvdW50IH06IENvdW50ZXJQcm9wcykge1xuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKGRlZmF1bHRDb3VudCk7XG4gIGNvbnN0IFtpbmNyZW1lbnRvciwgc2V0SW5jcmVtZW50b3JdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtpc0JpZ0Vub3VnaCwgc2V0SXNCaWdFbm91Z2hdID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBpZDogTm9kZUpTLlRpbWVvdXQ7XG4gICAgaWYgKGNvdW50ID49IDEwKSB7XG4gICAgICBpZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRJc0JpZ0Vub3VnaCh0cnVlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBzZXRJc0JpZ0Vub3VnaChmYWxzZSk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dChpZCk7XG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDI+XG4gICAgICAgIERFU0M6IHtkZXNjcmlwdGlvbn0gLSBEQzoge2RlZmF1bHRDb3VudH1cbiAgICAgIDwvaDI+XG4gICAgICA8bGFiZWw+XG4gICAgICAgIGluY3JlbWVudG9yXG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIHZhbHVlPXtpbmNyZW1lbnRvcn1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEluY3JlbWVudG9yKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSB8fCAxKX1cbiAgICAgICAgLz5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGFyaWEtbGFiZWw9XCJTdWJ0cmFjdCBmcm9tIENvdW50ZXJcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDb3VudChjb3VudCAtIGluY3JlbWVudG9yKX1cbiAgICAgID5cbiAgICAgICAgLVxuICAgICAgPC9idXR0b24+XG4gICAgICBDdXJyZW50IENvdW50OiB7Y291bnR9XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGFyaWEtbGFiZWw9XCJBZGQgdG8gQ291bnRlclwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRDb3VudCgoYykgPT4gYyArIGluY3JlbWVudG9yKTtcbiAgICAgICAgICB9LCAyMDApXG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgK1xuICAgICAgPC9idXR0b24+XG4gICAgICB7IWlzQmlnRW5vdWdoICYmIDxkaXY+SSZhcG9zO20gdG9vIHNtYWxsPC9kaXY+fVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb3VudGVyIiwiZGVzY3JpcHRpb24iLCJkZWZhdWx0Q291bnQiLCJjb3VudCIsInNldENvdW50IiwiaW5jcmVtZW50b3IiLCJzZXRJbmNyZW1lbnRvciIsImlzQmlnRW5vdWdoIiwic2V0SXNCaWdFbm91Z2giLCJpZCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJkaXYiLCJoMiIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJwYXJzZUludCIsInRhcmdldCIsImJ1dHRvbiIsImFyaWEtbGFiZWwiLCJvbkNsaWNrIiwiYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Components/Counter/Counter.tsx\n'
        );

        /***/
      },

    /***/ "./src/Components/Counter/index.tsx":
      /*!******************************************!*\
  !*** ./src/Components/Counter/index.tsx ***!
  \******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Counter */ "./src/Components/Counter/Counter.tsx");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _Counter__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _Counter__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9Db3VudGVyL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF5QiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LXRlc3RpbmcvLi9zcmMvQ29tcG9uZW50cy9Db3VudGVyL2luZGV4LnRzeD8yMWMwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCIuL0NvdW50ZXJcIjtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Components/Counter/index.tsx\n'
        );

        /***/
      },

    /***/ "./src/pages/index.tsx":
      /*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Components_Counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Counter */ "./src/Components/Counter/index.tsx");\n\n\nfunction Home() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {\n                children: "Hello React.js Testing Series Friends!!!"\n            }, void 0, false, {\n                fileName: "F:\\\\Career\\\\React-Testing\\\\src\\\\pages\\\\index.tsx",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Counter__WEBPACK_IMPORTED_MODULE_1__.Counter, {\n                description: "My Counter",\n                defaultCount: 9\n            }, void 0, false, {\n                fileName: "F:\\\\Career\\\\React-Testing\\\\src\\\\pages\\\\index.tsx",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: "F:\\\\Career\\\\React-Testing\\\\src\\\\pages\\\\index.tsx",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQStDO0FBRWhDLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHLENBQUM7SUFDOUIsTUFBTSw2RUFDSEMsQ0FBRzs7d0ZBQ0RDLENBQUU7MEJBQUMsQ0FBd0M7Ozs7Ozt3RkFDM0NILHdEQUFPO2dCQUFDSSxXQUFXLEVBQUMsQ0FBWTtnQkFBQ0MsWUFBWSxFQUFFLENBQUM7Ozs7Ozs7Ozs7OztBQUd2RCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtdGVzdGluZy8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3VudGVyIH0gZnJvbSBcIi4uL0NvbXBvbmVudHMvQ291bnRlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPkhlbGxvIFJlYWN0LmpzIFRlc3RpbmcgU2VyaWVzIEZyaWVuZHMhISE8L2gxPlxyXG4gICAgICA8Q291bnRlciBkZXNjcmlwdGlvbj1cIk15IENvdW50ZXJcIiBkZWZhdWx0Q291bnQ9ezl9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJDb3VudGVyIiwiSG9tZSIsImRpdiIsImgxIiwiZGVzY3JpcHRpb24iLCJkZWZhdWx0Q291bnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n'
        );

        /***/
      },

    /***/ react:
      /*!************************!*\
  !*** external "react" ***!
  \************************/
      /***/ (module) => {
        module.exports = require("react");

        /***/
      },

    /***/ "react/jsx-dev-runtime":
      /*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
      /***/ (module) => {
        module.exports = require("react/jsx-dev-runtime");

        /***/
      },
  };
  // load runtime
  var __webpack_require__ = require("../webpack-runtime.js");
  __webpack_require__.C(exports);
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId));
  var __webpack_exports__ = __webpack_exec__("./src/pages/index.tsx");
  module.exports = __webpack_exports__;
})();
