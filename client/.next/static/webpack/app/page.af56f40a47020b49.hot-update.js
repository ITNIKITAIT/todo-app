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

/***/ "(app-pages-browser)/./src/hooks/useTodos.tsx":
/*!********************************!*\
  !*** ./src/hooks/useTodos.tsx ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useTodos: () => (/* binding */ useTodos)\n/* harmony export */ });\n/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/api */ \"(app-pages-browser)/./src/app/api.ts\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/useQuery.js\");\n/* __next_internal_client_entry_do_not_use__ useTodos auto */ var _s = $RefreshSig$();\n\n\nconst fetchTodos = async ()=>{\n    try {\n        const response = await _app_api__WEBPACK_IMPORTED_MODULE_0__.api.get('/todos', {\n            withCredentials: true\n        });\n        var _response_data;\n        return (_response_data = response.data) !== null && _response_data !== void 0 ? _response_data : [];\n    } catch (error) {\n        console.error('Error fetching todos:', error);\n    }\n};\nconst useTodos = ()=>{\n    _s();\n    const { data: todos, isLoading, error } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({\n        queryKey: [\n            'todos'\n        ],\n        queryFn: fetchTodos\n    });\n    return {\n        todos,\n        isLoading,\n        error\n    };\n};\n_s(useTodos, \"sgqBHydZFjx/5ZDXcyn67MlSx+s=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy91c2VUb2Rvcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNnQztBQUNpQjtBQWlCakQsTUFBTUUsYUFBYTtJQUNmLElBQUk7UUFDQSxNQUFNQyxXQUFXLE1BQU1ILHlDQUFHQSxDQUFDSSxHQUFHLENBQVMsVUFBVTtZQUM3Q0MsaUJBQWlCO1FBQ3JCO1lBQ09GO1FBQVAsT0FBT0EsQ0FBQUEsaUJBQUFBLFNBQVNHLElBQUksY0FBYkgsNEJBQUFBLGlCQUFpQixFQUFFO0lBQzlCLEVBQUUsT0FBT0ksT0FBTztRQUNaQyxRQUFRRCxLQUFLLENBQUMseUJBQXlCQTtJQUMzQztBQUNKO0FBRU8sTUFBTUUsV0FBVzs7SUFDcEIsTUFBTSxFQUNGSCxNQUFNSSxLQUFLLEVBQ1hDLFNBQVMsRUFDVEosS0FBSyxFQUNSLEdBQUdOLCtEQUFRQSxDQUFDO1FBQ1RXLFVBQVU7WUFBQztTQUFRO1FBQ25CQyxTQUFTWDtJQUNiO0lBRUEsT0FBTztRQUFFUTtRQUFPQztRQUFXSjtJQUFNO0FBQ3JDLEVBQUU7R0FYV0U7O1FBS0xSLDJEQUFRQSIsInNvdXJjZXMiOlsiQzpcXEFwcGxpY2F0aW9uc1xcUHJvamVjdHNcXE5leHRcXHRvZG8tYXBwXFxjbGllbnRcXHNyY1xcaG9va3NcXHVzZVRvZG9zLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcbmltcG9ydCB7IGFwaSB9IGZyb20gJ0AvYXBwL2FwaSc7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JztcclxuXHJcbmludGVyZmFjZSBUYXNrIHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIHN0YXR1czogYm9vbGVhbjtcclxuICAgIGxpc3RJZDogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVG9kbyB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgb3duZXJJZDogc3RyaW5nO1xyXG4gICAgdGFza3M6IFRhc2tbXTtcclxufVxyXG5cclxuY29uc3QgZmV0Y2hUb2RvcyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0PFRvZG9bXT4oJy90b2RvcycsIHtcclxuICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhID8/IFtdO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB0b2RvczonLCBlcnJvcik7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlVG9kb3MgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZGF0YTogdG9kb3MsXHJcbiAgICAgICAgaXNMb2FkaW5nLFxyXG4gICAgICAgIGVycm9yLFxyXG4gICAgfSA9IHVzZVF1ZXJ5KHtcclxuICAgICAgICBxdWVyeUtleTogWyd0b2RvcyddLFxyXG4gICAgICAgIHF1ZXJ5Rm46IGZldGNoVG9kb3MsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4geyB0b2RvcywgaXNMb2FkaW5nLCBlcnJvciB9O1xyXG59O1xyXG4iXSwibmFtZXMiOlsiYXBpIiwidXNlUXVlcnkiLCJmZXRjaFRvZG9zIiwicmVzcG9uc2UiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwidXNlVG9kb3MiLCJ0b2RvcyIsImlzTG9hZGluZyIsInF1ZXJ5S2V5IiwicXVlcnlGbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/useTodos.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/widgets/TodoFileld.tsx":
/*!************************************!*\
  !*** ./src/widgets/TodoFileld.tsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _hooks_useTodos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/useTodos */ \"(app-pages-browser)/./src/hooks/useTodos.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n// interface Todo {\n//     id: string;\n//     title: string;\n//     description?: string;\n//     completed: boolean;\n//     ownerId: string;\n//     collaborators?: string[];\n// }\nconst TodoField = ()=>{\n    _s();\n    const myTodos = [\n        {\n            title: 'Task',\n            description: 'Do it now',\n            completed: false,\n            id: 'fdfdsfds'\n        }\n    ];\n    const otherTodos = [\n        {\n            title: 'Task2',\n            description: 'Do it now',\n            completed: false,\n            id: 'fdfdsfds'\n        }\n    ];\n    const { isLoading, todos } = (0,_hooks_useTodos__WEBPACK_IMPORTED_MODULE_1__.useTodos)();\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\widgets\\\\TodoFileld.tsx\",\n        lineNumber: 32,\n        columnNumber: 27\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-y-6 mt-10\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\widgets\\\\TodoFileld.tsx\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, undefined);\n};\n_s(TodoField, \"M//UMPDPcKBvMtaluDIFCLnEEow=\", false, function() {\n    return [\n        _hooks_useTodos__WEBPACK_IMPORTED_MODULE_1__.useTodos\n    ];\n});\n_c = TodoField;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoField);\nvar _c;\n$RefreshReg$(_c, \"TodoField\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy93aWRnZXRzL1RvZG9GaWxlbGQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDNEM7QUFDbEI7QUFFMUIsbUJBQW1CO0FBQ25CLGtCQUFrQjtBQUNsQixxQkFBcUI7QUFDckIsNEJBQTRCO0FBQzVCLDBCQUEwQjtBQUMxQix1QkFBdUI7QUFDdkIsZ0NBQWdDO0FBQ2hDLElBQUk7QUFFSixNQUFNRSxZQUFZOztJQUNkLE1BQU1DLFVBQVU7UUFDWjtZQUNJQyxPQUFPO1lBQ1BDLGFBQWE7WUFDYkMsV0FBVztZQUNYQyxJQUFJO1FBQ1I7S0FDSDtJQUNELE1BQU1DLGFBQWE7UUFDZjtZQUNJSixPQUFPO1lBQ1BDLGFBQWE7WUFDYkMsV0FBVztZQUNYQyxJQUFJO1FBQ1I7S0FDSDtJQUNELE1BQU0sRUFBRUUsU0FBUyxFQUFFQyxLQUFLLEVBQUUsR0FBR1YseURBQVFBO0lBQ3JDLElBQUlTLFdBQVcscUJBQU8sOERBQUNFO2tCQUFJOzs7Ozs7SUFFM0IscUJBQ0ksOERBQUNBO1FBQUlDLFdBQVU7Ozs7OztBQThDdkI7R0FuRU1WOztRQWlCMkJGLHFEQUFRQTs7O0tBakJuQ0U7QUFxRU4saUVBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxBcHBsaWNhdGlvbnNcXFByb2plY3RzXFxOZXh0XFx0b2RvLWFwcFxcY2xpZW50XFxzcmNcXHdpZGdldHNcXFRvZG9GaWxlbGQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUb2RvQ2FyZCBmcm9tICdAL2NvbXBvbmVudHMvVG9kb0NhcmQnO1xyXG5pbXBvcnQgeyB1c2VUb2RvcyB9IGZyb20gJ0AvaG9va3MvdXNlVG9kb3MnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gaW50ZXJmYWNlIFRvZG8ge1xyXG4vLyAgICAgaWQ6IHN0cmluZztcclxuLy8gICAgIHRpdGxlOiBzdHJpbmc7XHJcbi8vICAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcclxuLy8gICAgIGNvbXBsZXRlZDogYm9vbGVhbjtcclxuLy8gICAgIG93bmVySWQ6IHN0cmluZztcclxuLy8gICAgIGNvbGxhYm9yYXRvcnM/OiBzdHJpbmdbXTtcclxuLy8gfVxyXG5cclxuY29uc3QgVG9kb0ZpZWxkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbXlUb2RvcyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnVGFzaycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRG8gaXQgbm93JyxcclxuICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgaWQ6ICdmZGZkc2ZkcycsXHJcbiAgICAgICAgfSxcclxuICAgIF07XHJcbiAgICBjb25zdCBvdGhlclRvZG9zID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdUYXNrMicsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRG8gaXQgbm93JyxcclxuICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgaWQ6ICdmZGZkc2ZkcycsXHJcbiAgICAgICAgfSxcclxuICAgIF07XHJcbiAgICBjb25zdCB7IGlzTG9hZGluZywgdG9kb3MgfSA9IHVzZVRvZG9zKCk7XHJcbiAgICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTYgbXQtMTBcIj5cclxuICAgICAgICAgICAgey8qIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCBtYi0zXCI+IE15IHRhc2tzPC9oMj5cclxuICAgICAgICAgICAgICAgIHt0b2Rvcy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dG9kb3MubWFwKCh0b2RvKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9kb0NhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RvZG8uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RvZG8udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3RvZG8uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkPXt0b2RvLmNvbXBsZXRlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkVkaXQ9eygpID0+IHt9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiB7fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCjINCy0LDRgSDQvdC10YIg0YHQvtCx0YHRgtCy0LXQvdC90YvRhSDQt9Cw0LTQsNGHLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCBtYi0zXCI+T3RoZXIgdGFza3M8L2gyPlxyXG4gICAgICAgICAgICAgICAge3RvZG9zLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0b2Rvcy5tYXAoKHRvZG8pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb2RvQ2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dG9kby5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dG9kby50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17dG9kby5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQ9e3RvZG8uY29tcGxldGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRWRpdD17KCkgPT4ge319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EZWxldGU9eygpID0+IHt9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0JLRiyDQvdC1INGD0YfQsNGB0YLQstGD0LXRgtC1INCyINGH0YPQttC40YUg0LfQsNC00LDRh9Cw0YUuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9zZWN0aW9uPiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvRmllbGQ7XHJcbiJdLCJuYW1lcyI6WyJ1c2VUb2RvcyIsIlJlYWN0IiwiVG9kb0ZpZWxkIiwibXlUb2RvcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjb21wbGV0ZWQiLCJpZCIsIm90aGVyVG9kb3MiLCJpc0xvYWRpbmciLCJ0b2RvcyIsImRpdiIsImNsYXNzTmFtZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/widgets/TodoFileld.tsx\n"));

/***/ })

});