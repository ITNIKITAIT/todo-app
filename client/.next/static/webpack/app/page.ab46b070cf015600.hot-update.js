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

/***/ "(app-pages-browser)/./src/components/CollaboratorModal.tsx":
/*!**********************************************!*\
  !*** ./src/components/CollaboratorModal.tsx ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CollaboratorModal)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_ImCross_react_icons_im__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=ImCross!=!react-icons/im */ \"(app-pages-browser)/./node_modules/react-icons/im/index.mjs\");\n/* harmony import */ var _hooks_useTodos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useTodos */ \"(app-pages-browser)/./src/hooks/useTodos.tsx\");\n/* harmony import */ var _hooks_useCollaborator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useCollaborator */ \"(app-pages-browser)/./src/hooks/useCollaborator.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction CollaboratorModal(param) {\n    let { todoListId, onClose } = param;\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [role, setRole] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_hooks_useTodos__WEBPACK_IMPORTED_MODULE_2__.USER_ROLE.VIEWER);\n    const { collaborators, isLoading, addCollaborator, removeCollaborator } = (0,_hooks_useCollaborator__WEBPACK_IMPORTED_MODULE_3__.useCollaborator)(todoListId);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 flex items-center justify-center bg-black/35 bg-opacity-50 z-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white p-6 rounded-lg w-96 relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ImCross_react_icons_im__WEBPACK_IMPORTED_MODULE_4__.ImCross, {\n                    onClick: onClose,\n                    className: \"w-5 h-5 hover:fill-red-600 cursor-pointer absolute top-4 right-4\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-lg font-bold mb-4\",\n                    children: \"Add Collaborator\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"email\",\n                            placeholder: \"Email\",\n                            className: \"w-full p-2 border rounded-md mb-2\",\n                            value: email,\n                            onChange: (e)=>setEmail(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            className: \"w-full p-2 border rounded-md\",\n                            value: role,\n                            onChange: (e)=>setRole(e.target.value),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"editor\",\n                                    children: \"ADMIN\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"viewer\",\n                                    children: \"VIEWER\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"w-full bg-blue-500 text-white py-2 rounded-md\",\n                    onClick: ()=>addCollaborator({\n                            email,\n                            role,\n                            listId: todoListId\n                        }),\n                    children: \"Add\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-lg font-semibold mt-4\",\n                    children: \"Collaborators:\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 17\n                }, this),\n                isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 21\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"mt-2 space-y-2\",\n                    children: collaborators === null || collaborators === void 0 ? void 0 : collaborators.map((collaborator)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"flex justify-between items-center p-2 border rounded-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        collaborator.email,\n                                        \" (\",\n                                        collaborator.role,\n                                        \")\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 33\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"text-red-500\",\n                                    onClick: ()=>removeCollaborator(collaborator.id),\n                                    children: \"Delete\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 33\n                                }, this)\n                            ]\n                        }, collaborator.id, true, {\n                            fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 29\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n            lineNumber: 20,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, this);\n}\n_s(CollaboratorModal, \"X+pN52bsAfzcopf+v4BiHhLlX7k=\", false, function() {\n    return [\n        _hooks_useCollaborator__WEBPACK_IMPORTED_MODULE_3__.useCollaborator\n    ];\n});\n_c = CollaboratorModal;\nvar _c;\n$RefreshReg$(_c, \"CollaboratorModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NvbGxhYm9yYXRvck1vZGFsLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBaUM7QUFDUTtBQUNJO0FBQ2E7QUFPM0MsU0FBU0ksa0JBQWtCLEtBQThCO1FBQTlCLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFTLEdBQTlCOztJQUN0QyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUyxNQUFNQyxRQUFRLEdBQUdWLCtDQUFRQSxDQUFZRSxzREFBU0EsQ0FBQ1MsTUFBTTtJQUU1RCxNQUFNLEVBQUVDLGFBQWEsRUFBRUMsU0FBUyxFQUFFQyxlQUFlLEVBQUVDLGtCQUFrQixFQUFFLEdBQ25FWix1RUFBZUEsQ0FBQ0U7SUFFcEIscUJBQ0ksOERBQUNXO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDaEIsa0ZBQU9BO29CQUNKaUIsU0FBU1o7b0JBQ1RXLFdBQVU7Ozs7Ozs4QkFFZCw4REFBQ0U7b0JBQUdGLFdBQVU7OEJBQXlCOzs7Ozs7OEJBQ3ZDLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNHOzRCQUNHQyxNQUFLOzRCQUNMQyxhQUFZOzRCQUNaTCxXQUFVOzRCQUNWTSxPQUFPaEI7NEJBQ1BpQixVQUFVLENBQUNDLElBQU1qQixTQUFTaUIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7c0NBRTVDLDhEQUFDSTs0QkFDR1YsV0FBVTs0QkFDVk0sT0FBT2Q7NEJBQ1BlLFVBQVUsQ0FBQ0MsSUFBTWYsUUFBUWUsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs4Q0FDdkMsOERBQUNLO29DQUFPTCxPQUFNOzhDQUFTOzs7Ozs7OENBQ3ZCLDhEQUFDSztvQ0FBT0wsT0FBTTs4Q0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUkvQiw4REFBQ007b0JBQ0daLFdBQVU7b0JBQ1ZDLFNBQVMsSUFDTEosZ0JBQWdCOzRCQUFFUDs0QkFBT0U7NEJBQU1xQixRQUFRekI7d0JBQVc7OEJBQ3BEOzs7Ozs7OEJBSU4sOERBQUMwQjtvQkFBR2QsV0FBVTs4QkFBNkI7Ozs7OztnQkFDMUNKLDBCQUNHLDhEQUFDbUI7OEJBQUU7Ozs7O3lDQUVILDhEQUFDQztvQkFBR2hCLFdBQVU7OEJBQ1RMLDBCQUFBQSxvQ0FBQUEsY0FBZXNCLEdBQUcsQ0FBQyxDQUFDQyw2QkFDakIsOERBQUNDOzRCQUVHbkIsV0FBVTs7OENBQ1YsOERBQUNvQjs7d0NBQ0lGLGFBQWE1QixLQUFLO3dDQUFDO3dDQUFHNEIsYUFBYTFCLElBQUk7d0NBQUM7Ozs7Ozs7OENBRTdDLDhEQUFDb0I7b0NBQ0daLFdBQVU7b0NBQ1ZDLFNBQVMsSUFDTEgsbUJBQW1Cb0IsYUFBYUcsRUFBRTs4Q0FDcEM7Ozs7Ozs7MkJBVERILGFBQWFHLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CcEQ7R0FsRXdCbEM7O1FBS2hCRCxtRUFBZUE7OztLQUxDQyIsInNvdXJjZXMiOlsiQzpcXEFwcGxpY2F0aW9uc1xcUHJvamVjdHNcXE5leHRcXHRvZG8tYXBwXFxjbGllbnRcXHNyY1xcY29tcG9uZW50c1xcQ29sbGFib3JhdG9yTW9kYWwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJbUNyb3NzIH0gZnJvbSAncmVhY3QtaWNvbnMvaW0nO1xyXG5pbXBvcnQgeyBVU0VSX1JPTEUgfSBmcm9tICdAL2hvb2tzL3VzZVRvZG9zJztcclxuaW1wb3J0IHsgdXNlQ29sbGFib3JhdG9yIH0gZnJvbSAnQC9ob29rcy91c2VDb2xsYWJvcmF0b3InO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIHRvZG9MaXN0SWQ6IHN0cmluZztcclxuICAgIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbGxhYm9yYXRvck1vZGFsKHsgdG9kb0xpc3RJZCwgb25DbG9zZSB9OiBQcm9wcykge1xyXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbcm9sZSwgc2V0Um9sZV0gPSB1c2VTdGF0ZTxVU0VSX1JPTEU+KFVTRVJfUk9MRS5WSUVXRVIpO1xyXG5cclxuICAgIGNvbnN0IHsgY29sbGFib3JhdG9ycywgaXNMb2FkaW5nLCBhZGRDb2xsYWJvcmF0b3IsIHJlbW92ZUNvbGxhYm9yYXRvciB9ID1cclxuICAgICAgICB1c2VDb2xsYWJvcmF0b3IodG9kb0xpc3RJZCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctYmxhY2svMzUgYmctb3BhY2l0eS01MCB6LTEwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC02IHJvdW5kZWQtbGcgdy05NiByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgPEltQ3Jvc3NcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNSBoLTUgaG92ZXI6ZmlsbC1yZWQtNjAwIGN1cnNvci1wb2ludGVyIGFic29sdXRlIHRvcC00IHJpZ2h0LTRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCBtYi00XCI+QWRkIENvbGxhYm9yYXRvcjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTIgYm9yZGVyIHJvdW5kZWQtbWQgbWItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTIgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cm9sZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSb2xlKGUudGFyZ2V0LnZhbHVlIGFzIFVTRVJfUk9MRSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZWRpdG9yXCI+QURNSU48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInZpZXdlclwiPlZJRVdFUjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB5LTIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkQ29sbGFib3JhdG9yKHsgZW1haWwsIHJvbGUsIGxpc3RJZDogdG9kb0xpc3RJZCB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIG10LTRcIj5Db2xsYWJvcmF0b3JzOjwvaDM+XHJcbiAgICAgICAgICAgICAgICB7aXNMb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkxvYWRpbmcuLi48L3A+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtdC0yIHNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29sbGFib3JhdG9ycz8ubWFwKChjb2xsYWJvcmF0b3IpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29sbGFib3JhdG9yLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBwLTIgYm9yZGVyIHJvdW5kZWQtbWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbGxhYm9yYXRvci5lbWFpbH0gKHtjb2xsYWJvcmF0b3Iucm9sZX0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUNvbGxhYm9yYXRvcihjb2xsYWJvcmF0b3IuaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJJbUNyb3NzIiwiVVNFUl9ST0xFIiwidXNlQ29sbGFib3JhdG9yIiwiQ29sbGFib3JhdG9yTW9kYWwiLCJ0b2RvTGlzdElkIiwib25DbG9zZSIsImVtYWlsIiwic2V0RW1haWwiLCJyb2xlIiwic2V0Um9sZSIsIlZJRVdFUiIsImNvbGxhYm9yYXRvcnMiLCJpc0xvYWRpbmciLCJhZGRDb2xsYWJvcmF0b3IiLCJyZW1vdmVDb2xsYWJvcmF0b3IiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaDIiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwic2VsZWN0Iiwib3B0aW9uIiwiYnV0dG9uIiwibGlzdElkIiwiaDMiLCJwIiwidWwiLCJtYXAiLCJjb2xsYWJvcmF0b3IiLCJsaSIsInNwYW4iLCJpZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/CollaboratorModal.tsx\n"));

/***/ })

});