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

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Navbar */ \"(app-pages-browser)/./src/components/Navbar.tsx\");\n/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useAuth */ \"(app-pages-browser)/./src/hooks/useAuth.tsx\");\n/* harmony import */ var _shared_ui_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/shared/ui/Container */ \"(app-pages-browser)/./src/shared/ui/Container.tsx\");\n/* harmony import */ var _widgets_TodoFileld__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/widgets/TodoFileld */ \"(app-pages-browser)/./src/widgets/TodoFileld.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const { isLoading, user } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 9,\n        columnNumber: 27\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_ui_Container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-3xl mt-5\",\n                        children: user ? \"Hello \".concat(user.name, \"!\") : 'Login to see todos'\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 17\n                    }, this),\n                    user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_widgets_TodoFileld__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 26\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"qk1BUVoiY7oOWOE9m+MP1HWkjDQ=\", false, function() {\n    return [\n        _hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__.useAuth\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDeUM7QUFDQztBQUNJO0FBQ0Q7QUFFOUIsU0FBU0k7O0lBQ3BCLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxJQUFJLEVBQUUsR0FBR0wsdURBQU9BO0lBQ25DLElBQUlJLFdBQVcscUJBQU8sOERBQUNFO2tCQUFFOzs7Ozs7SUFFekIscUJBQ0k7OzBCQUNJLDhEQUFDUCwwREFBTUE7Ozs7OzBCQUNQLDhEQUFDRSw0REFBU0E7O2tDQUNOLDhEQUFDSzt3QkFBRUMsV0FBVTtrQ0FDUkYsT0FBTyxTQUFtQixPQUFWQSxLQUFLRyxJQUFJLEVBQUMsT0FBSzs7Ozs7O29CQUVuQ0gsc0JBQVEsOERBQUNILDJEQUFTQTs7Ozs7Ozs7Ozs7OztBQUluQztHQWZ3QkM7O1FBQ1FILG1EQUFPQTs7O0tBRGZHIiwic291cmNlcyI6WyJDOlxcQXBwbGljYXRpb25zXFxQcm9qZWN0c1xcTmV4dFxcdG9kby1hcHBcXGNsaWVudFxcc3JjXFxhcHBcXHBhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCBOYXZiYXIgZnJvbSAnQC9jb21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnQC9ob29rcy91c2VBdXRoJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQC9zaGFyZWQvdWkvQ29udGFpbmVyJztcbmltcG9ydCBUb2RvRmllbGQgZnJvbSAnQC93aWRnZXRzL1RvZG9GaWxlbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IHsgaXNMb2FkaW5nLCB1c2VyIH0gPSB1c2VBdXRoKCk7XG4gICAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0zeGwgbXQtNVwiPlxuICAgICAgICAgICAgICAgICAgICB7dXNlciA/IGBIZWxsbyAke3VzZXIubmFtZX0hYCA6ICdMb2dpbiB0byBzZWUgdG9kb3MnfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICB7dXNlciAmJiA8VG9kb0ZpZWxkIC8+fVxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiTmF2YmFyIiwidXNlQXV0aCIsIkNvbnRhaW5lciIsIlRvZG9GaWVsZCIsIkhvbWUiLCJpc0xvYWRpbmciLCJ1c2VyIiwicCIsImNsYXNzTmFtZSIsIm5hbWUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});