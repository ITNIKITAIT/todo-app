"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/widgets/TodoFileld.tsx":
/*!************************************!*\
  !*** ./src/widgets/TodoFileld.tsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_TodoCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/TodoCard */ \"(app-pages-browser)/./src/components/TodoCard.tsx\");\n/* harmony import */ var _hooks_useTodos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useTodos */ \"(app-pages-browser)/./src/hooks/useTodos.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n// interface Todo {\n//     id: string;\n//     title: string;\n//     description?: string;\n//     completed: boolean;\n//     ownerId: string;\n//     collaborators?: string[];\n// }\nconst TodoField = ()=>{\n    _s();\n    const { isLoading, todos } = (0,_hooks_useTodos__WEBPACK_IMPORTED_MODULE_2__.useTodos)();\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\widgets\\\\TodoFileld.tsx\",\n        lineNumber: 16,\n        columnNumber: 27\n    }, undefined);\n    console.log(todos);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-y-6 mt-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-4xl font-bold mb-3\",\n                        children: \" My tasks\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\widgets\\\\TodoFileld.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, undefined),\n                    todos ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\",\n                        children: todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TodoCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                ...todo\n                            }, todo.id, false, {\n                                fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\widgets\\\\TodoFileld.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 29\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\widgets\\\\TodoFileld.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 21\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-500\",\n                        children: \"У вас нет собственных задач.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\widgets\\\\TodoFileld.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\widgets\\\\TodoFileld.tsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-4xl font-bold mb-3\",\n                        children: \"Other tasks\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\widgets\\\\TodoFileld.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, undefined),\n                    todos ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\",\n                        children: todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TodoCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                ...todo\n                            }, todo.id, false, {\n                                fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\widgets\\\\TodoFileld.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 29\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\widgets\\\\TodoFileld.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 21\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-500\",\n                        children: \"Вы не участвуете в чужих задачах.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\widgets\\\\TodoFileld.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\widgets\\\\TodoFileld.tsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\widgets\\\\TodoFileld.tsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, undefined);\n};\n_s(TodoField, \"M//UMPDPcKBvMtaluDIFCLnEEow=\", false, function() {\n    return [\n        _hooks_useTodos__WEBPACK_IMPORTED_MODULE_2__.useTodos\n    ];\n});\n_c = TodoField;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoField);\nvar _c;\n$RefreshReg$(_c, \"TodoField\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy93aWRnZXRzL1RvZG9GaWxlbGQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTZDO0FBQ0Q7QUFDbEI7QUFFMUIsbUJBQW1CO0FBQ25CLGtCQUFrQjtBQUNsQixxQkFBcUI7QUFDckIsNEJBQTRCO0FBQzVCLDBCQUEwQjtBQUMxQix1QkFBdUI7QUFDdkIsZ0NBQWdDO0FBQ2hDLElBQUk7QUFFSixNQUFNRyxZQUFZOztJQUNkLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxLQUFLLEVBQUUsR0FBR0oseURBQVFBO0lBQ3JDLElBQUlHLFdBQVcscUJBQU8sOERBQUNFO2tCQUFJOzs7Ozs7SUFDM0JDLFFBQVFDLEdBQUcsQ0FBQ0g7SUFDWixxQkFDSSw4REFBQ0M7UUFBSUcsV0FBVTs7MEJBQ1gsOERBQUNDOztrQ0FDRyw4REFBQ0M7d0JBQUdGLFdBQVU7a0NBQTBCOzs7Ozs7b0JBQ3ZDSixzQkFDRyw4REFBQ0M7d0JBQUlHLFdBQVU7a0NBQ1ZKLE1BQU1PLEdBQUcsQ0FBQyxDQUFDQyxxQkFDUiw4REFBQ2IsNERBQVFBO2dDQUFnQixHQUFHYSxJQUFJOytCQUFqQkEsS0FBS0MsRUFBRTs7Ozs7Ozs7O2tEQUk5Qiw4REFBQ0M7d0JBQUVOLFdBQVU7a0NBQWdCOzs7Ozs7Ozs7Ozs7MEJBTXJDLDhEQUFDQzs7a0NBQ0csOERBQUNDO3dCQUFHRixXQUFVO2tDQUEwQjs7Ozs7O29CQUN2Q0osc0JBQ0csOERBQUNDO3dCQUFJRyxXQUFVO2tDQUNWSixNQUFNTyxHQUFHLENBQUMsQ0FBQ0MscUJBQ1IsOERBQUNiLDREQUFRQTtnQ0FBZ0IsR0FBR2EsSUFBSTsrQkFBakJBLEtBQUtDLEVBQUU7Ozs7Ozs7OztrREFJOUIsOERBQUNDO3dCQUFFTixXQUFVO2tDQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2pEO0dBckNNTjs7UUFDMkJGLHFEQUFRQTs7O0tBRG5DRTtBQXVDTixpRUFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsiQzpcXEFwcGxpY2F0aW9uc1xcUHJvamVjdHNcXE5leHRcXHRvZG8tYXBwXFxjbGllbnRcXHNyY1xcd2lkZ2V0c1xcVG9kb0ZpbGVsZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRvZG9DYXJkIGZyb20gJ0AvY29tcG9uZW50cy9Ub2RvQ2FyZCc7XHJcbmltcG9ydCB7IHVzZVRvZG9zIH0gZnJvbSAnQC9ob29rcy91c2VUb2Rvcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBpbnRlcmZhY2UgVG9kbyB7XHJcbi8vICAgICBpZDogc3RyaW5nO1xyXG4vLyAgICAgdGl0bGU6IHN0cmluZztcclxuLy8gICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG4vLyAgICAgY29tcGxldGVkOiBib29sZWFuO1xyXG4vLyAgICAgb3duZXJJZDogc3RyaW5nO1xyXG4vLyAgICAgY29sbGFib3JhdG9ycz86IHN0cmluZ1tdO1xyXG4vLyB9XHJcblxyXG5jb25zdCBUb2RvRmllbGQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGlzTG9hZGluZywgdG9kb3MgfSA9IHVzZVRvZG9zKCk7XHJcbiAgICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gICAgY29uc29sZS5sb2codG9kb3MpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNiBtdC0xMFwiPlxyXG4gICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbWItM1wiPiBNeSB0YXNrczwvaDI+XHJcbiAgICAgICAgICAgICAgICB7dG9kb3MgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0b2Rvcy5tYXAoKHRvZG8pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb2RvQ2FyZCBrZXk9e3RvZG8uaWR9IHsuLi50b2RvfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQoyDQstCw0YEg0L3QtdGCINGB0L7QsdGB0YLQstC10L3QvdGL0YUg0LfQsNC00LDRhy5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbWItM1wiPk90aGVyIHRhc2tzPC9oMj5cclxuICAgICAgICAgICAgICAgIHt0b2RvcyA/IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RvZG9zLm1hcCgodG9kbykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvZG9DYXJkIGtleT17dG9kby5pZH0gey4uLnRvZG99IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCS0Ysg0L3QtSDRg9GH0LDRgdGC0LLRg9C10YLQtSDQsiDRh9GD0LbQuNGFINC30LDQtNCw0YfQsNGFLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvRmllbGQ7XHJcbiJdLCJuYW1lcyI6WyJUb2RvQ2FyZCIsInVzZVRvZG9zIiwiUmVhY3QiLCJUb2RvRmllbGQiLCJpc0xvYWRpbmciLCJ0b2RvcyIsImRpdiIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc05hbWUiLCJzZWN0aW9uIiwiaDIiLCJtYXAiLCJ0b2RvIiwiaWQiLCJwIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/widgets/TodoFileld.tsx\n"));

/***/ })

});