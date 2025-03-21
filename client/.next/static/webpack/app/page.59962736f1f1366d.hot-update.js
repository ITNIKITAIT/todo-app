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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CollaboratorModal)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_ImCross_react_icons_im__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=ImCross!=!react-icons/im */ \"(app-pages-browser)/./node_modules/react-icons/im/index.mjs\");\n/* harmony import */ var _hooks_useTodos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/useTodos */ \"(app-pages-browser)/./src/hooks/useTodos.tsx\");\n/* harmony import */ var _hooks_useCollaborator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useCollaborator */ \"(app-pages-browser)/./src/hooks/useCollaborator.tsx\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _app_schemas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/schemas */ \"(app-pages-browser)/./src/app/schemas.ts\");\n/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hookform/resolvers/zod */ \"(app-pages-browser)/./node_modules/@hookform/resolvers/zod/dist/zod.mjs\");\n/* harmony import */ var _shared_ui_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/shared/ui/Button */ \"(app-pages-browser)/./src/shared/ui/Button.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction CollaboratorModal(param) {\n    let { todoListId, onClose } = param;\n    _s();\n    const { collaborators, isLoading, addCollaborator, removeCollaborator } = (0,_hooks_useCollaborator__WEBPACK_IMPORTED_MODULE_2__.useCollaborator)(todoListId);\n    const { register, handleSubmit, formState: { errors } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)({\n        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_4__.zodResolver)(_app_schemas__WEBPACK_IMPORTED_MODULE_3__.collaboratorSchema)\n    });\n    const onSubmit = (data)=>{\n        addCollaborator({\n            ...data,\n            listId: todoListId\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 flex items-center justify-center bg-black/35 bg-opacity-50 z-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white p-6 rounded-lg w-96 relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ImCross_react_icons_im__WEBPACK_IMPORTED_MODULE_7__.ImCross, {\n                    onClick: onClose,\n                    className: \"w-5 h-5 hover:fill-red-600 cursor-pointer absolute top-4 right-4\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-lg font-bold mb-4\",\n                    children: \"Add Collaborator\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit(onSubmit),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    placeholder: \"Email\",\n                                    className: \"w-full p-2 border rounded-md mb-1\",\n                                    ...register('email')\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 25\n                                }, this),\n                                errors.email && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-red-500 text-sm\",\n                                    children: errors.email.message\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    className: \"w-full p-2 border rounded-md mt-2\",\n                                    ...register('role'),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: _hooks_useTodos__WEBPACK_IMPORTED_MODULE_1__.USER_ROLE.ADMIN,\n                                            children: \"ADMIN\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: _hooks_useTodos__WEBPACK_IMPORTED_MODULE_1__.USER_ROLE.VIEWER,\n                                            children: \"VIEWER\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 25\n                                }, this),\n                                errors.role && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-red-500 text-sm\",\n                                    children: errors.role.message\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_ui_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            children: \"Add\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-lg font-semibold mt-4\",\n                    children: \"Collaborators:\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 17\n                }, this),\n                isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 21\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"mt-2 space-y-2\",\n                    children: collaborators === null || collaborators === void 0 ? void 0 : collaborators.map((collaborator)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"flex justify-between items-center p-2 border rounded-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        collaborator.user.email,\n                                        ' ',\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-yellow-400\",\n                                            children: collaborator.role\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                                            lineNumber: 80,\n                                            columnNumber: 37\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 33\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_ui_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    className: \"bg-red-500 w-[100px] ml-auto\",\n                                    onClick: ()=>removeCollaborator({\n                                            listId: todoListId,\n                                            userId: collaborator.user.id\n                                        }),\n                                    children: \"Delete\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 33\n                                }, this)\n                            ]\n                        }, collaborator.id, true, {\n                            fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 29\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n            lineNumber: 32,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this);\n}\n_s(CollaboratorModal, \"qtoW9/pHmacD6rmDZ/n8NzzC+ss=\", false, function() {\n    return [\n        _hooks_useCollaborator__WEBPACK_IMPORTED_MODULE_2__.useCollaborator,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm\n    ];\n});\n_c = CollaboratorModal;\nvar _c;\n$RefreshReg$(_c, \"CollaboratorModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NvbGxhYm9yYXRvck1vZGFsLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNJO0FBQ2E7QUFDaEI7QUFDaUM7QUFDckI7QUFDZDtBQU96QixTQUFTTyxrQkFBa0IsS0FBOEI7UUFBOUIsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQVMsR0FBOUI7O0lBQ3RDLE1BQU0sRUFBRUMsYUFBYSxFQUFFQyxTQUFTLEVBQUVDLGVBQWUsRUFBRUMsa0JBQWtCLEVBQUUsR0FDbkVYLHVFQUFlQSxDQUFDTTtJQUVwQixNQUFNLEVBQ0ZNLFFBQVEsRUFDUkMsWUFBWSxFQUNaQyxXQUFXLEVBQUVDLE1BQU0sRUFBRSxFQUN4QixHQUFHZCx3REFBT0EsQ0FBeUI7UUFDaENlLFVBQVViLG9FQUFXQSxDQUFDRCw0REFBa0JBO0lBQzVDO0lBRUEsTUFBTWUsV0FBVyxDQUFDQztRQUNkUixnQkFBZ0I7WUFBRSxHQUFHUSxJQUFJO1lBQUVDLFFBQVFiO1FBQVc7SUFDbEQ7SUFFQSxxQkFDSSw4REFBQ2M7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUN2QixrRkFBT0E7b0JBQ0p3QixTQUFTZjtvQkFDVGMsV0FBVTs7Ozs7OzhCQUVkLDhEQUFDRTtvQkFBR0YsV0FBVTs4QkFBeUI7Ozs7Ozs4QkFFdkMsOERBQUNHO29CQUFLUCxVQUFVSixhQUFhSTs7c0NBQ3pCLDhEQUFDRzs0QkFBSUMsV0FBVTs7OENBQ1gsOERBQUNJO29DQUNHQyxNQUFLO29DQUNMQyxhQUFZO29DQUNaTixXQUFVO29DQUNULEdBQUdULFNBQVMsUUFBUTs7Ozs7O2dDQUV4QkcsT0FBT2EsS0FBSyxrQkFDVCw4REFBQ0M7b0NBQUVSLFdBQVU7OENBQ1JOLE9BQU9hLEtBQUssQ0FBQ0UsT0FBTzs7Ozs7OzhDQUk3Qiw4REFBQ0M7b0NBQ0dWLFdBQVU7b0NBQ1QsR0FBR1QsU0FBUyxPQUFPOztzREFDcEIsOERBQUNvQjs0Q0FBT0MsT0FBT2xDLHNEQUFTQSxDQUFDbUMsS0FBSztzREFBRTs7Ozs7O3NEQUNoQyw4REFBQ0Y7NENBQU9DLE9BQU9sQyxzREFBU0EsQ0FBQ29DLE1BQU07c0RBQUU7Ozs7Ozs7Ozs7OztnQ0FFcENwQixPQUFPcUIsSUFBSSxrQkFDUiw4REFBQ1A7b0NBQUVSLFdBQVU7OENBQ1JOLE9BQU9xQixJQUFJLENBQUNOLE9BQU87Ozs7Ozs7Ozs7OztzQ0FLaEMsOERBQUMxQix5REFBTUE7c0NBQUM7Ozs7Ozs7Ozs7Ozs4QkFHWiw4REFBQ2lDO29CQUFHaEIsV0FBVTs4QkFBNkI7Ozs7OztnQkFDMUNaLDBCQUNHLDhEQUFDb0I7OEJBQUU7Ozs7O3lDQUVILDhEQUFDUztvQkFBR2pCLFdBQVU7OEJBQ1RiLDBCQUFBQSxvQ0FBQUEsY0FBZStCLEdBQUcsQ0FBQyxDQUFDQyw2QkFDakIsOERBQUNDOzRCQUVHcEIsV0FBVTs7OENBQ1YsOERBQUNxQjs7d0NBQ0lGLGFBQWFHLElBQUksQ0FBQ2YsS0FBSzt3Q0FBRTtzREFDMUIsOERBQUNjOzRDQUFLckIsV0FBVTtzREFDWG1CLGFBQWFKLElBQUk7Ozs7Ozs7Ozs7Ozs4Q0FHMUIsOERBQUNoQyx5REFBTUE7b0NBQ0hpQixXQUFVO29DQUNWQyxTQUFTLElBQ0xYLG1CQUFtQjs0Q0FDZlEsUUFBUWI7NENBQ1JzQyxRQUFRSixhQUFhRyxJQUFJLENBQUNFLEVBQUU7d0NBQ2hDOzhDQUNGOzs7Ozs7OzJCQWZETCxhQUFhSyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QnBEO0dBdkZ3QnhDOztRQUVoQkwsbUVBQWVBO1FBTWZDLG9EQUFPQTs7O0tBUlNJIiwic291cmNlcyI6WyJDOlxcQXBwbGljYXRpb25zXFxQcm9qZWN0c1xcTmV4dFxcdG9kby1hcHBcXGNsaWVudFxcc3JjXFxjb21wb25lbnRzXFxDb2xsYWJvcmF0b3JNb2RhbC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW1Dcm9zcyB9IGZyb20gJ3JlYWN0LWljb25zL2ltJztcclxuaW1wb3J0IHsgVVNFUl9ST0xFIH0gZnJvbSAnQC9ob29rcy91c2VUb2Rvcyc7XHJcbmltcG9ydCB7IHVzZUNvbGxhYm9yYXRvciB9IGZyb20gJ0AvaG9va3MvdXNlQ29sbGFib3JhdG9yJztcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCB7IENvbGxhYm9yYXRvckZvcm1WYWx1ZXMsIGNvbGxhYm9yYXRvclNjaGVtYSB9IGZyb20gJ0AvYXBwL3NjaGVtYXMnO1xyXG5pbXBvcnQgeyB6b2RSZXNvbHZlciB9IGZyb20gJ0Bob29rZm9ybS9yZXNvbHZlcnMvem9kJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAL3NoYXJlZC91aS9CdXR0b24nO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIHRvZG9MaXN0SWQ6IHN0cmluZztcclxuICAgIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbGxhYm9yYXRvck1vZGFsKHsgdG9kb0xpc3RJZCwgb25DbG9zZSB9OiBQcm9wcykge1xyXG4gICAgY29uc3QgeyBjb2xsYWJvcmF0b3JzLCBpc0xvYWRpbmcsIGFkZENvbGxhYm9yYXRvciwgcmVtb3ZlQ29sbGFib3JhdG9yIH0gPVxyXG4gICAgICAgIHVzZUNvbGxhYm9yYXRvcih0b2RvTGlzdElkKTtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgcmVnaXN0ZXIsXHJcbiAgICAgICAgaGFuZGxlU3VibWl0LFxyXG4gICAgICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcclxuICAgIH0gPSB1c2VGb3JtPENvbGxhYm9yYXRvckZvcm1WYWx1ZXM+KHtcclxuICAgICAgICByZXNvbHZlcjogem9kUmVzb2x2ZXIoY29sbGFib3JhdG9yU2NoZW1hKSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0ID0gKGRhdGE6IENvbGxhYm9yYXRvckZvcm1WYWx1ZXMpID0+IHtcclxuICAgICAgICBhZGRDb2xsYWJvcmF0b3IoeyAuLi5kYXRhLCBsaXN0SWQ6IHRvZG9MaXN0SWQgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWJsYWNrLzM1IGJnLW9wYWNpdHktNTAgei0xMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNiByb3VuZGVkLWxnIHctOTYgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgIDxJbUNyb3NzXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25DbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTUgaC01IGhvdmVyOmZpbGwtcmVkLTYwMCBjdXJzb3ItcG9pbnRlciBhYnNvbHV0ZSB0b3AtNCByaWdodC00XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgbWItNFwiPkFkZCBDb2xsYWJvcmF0b3I8L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yIGJvcmRlciByb3VuZGVkLW1kIG1iLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdlbWFpbCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLmVtYWlsICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5lbWFpbC5tZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtMiBib3JkZXIgcm91bmRlZC1tZCBtdC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3Rlcigncm9sZScpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1VTRVJfUk9MRS5BRE1JTn0+QURNSU48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1VTRVJfUk9MRS5WSUVXRVJ9PlZJRVdFUjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5yb2xlICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5yb2xlLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+QWRkPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCBtdC00XCI+Q29sbGFib3JhdG9yczo8L2gzPlxyXG4gICAgICAgICAgICAgICAge2lzTG9hZGluZyA/IChcclxuICAgICAgICAgICAgICAgICAgICA8cD5Mb2FkaW5nLi4uPC9wPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibXQtMiBzcGFjZS15LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbGxhYm9yYXRvcnM/Lm1hcCgoY29sbGFib3JhdG9yKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbGxhYm9yYXRvci5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcC0yIGJvcmRlciByb3VuZGVkLW1kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2xsYWJvcmF0b3IudXNlci5lbWFpbH17JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdy00MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2xsYWJvcmF0b3Iucm9sZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgdy1bMTAwcHhdIG1sLWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQ29sbGFib3JhdG9yKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0SWQ6IHRvZG9MaXN0SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBjb2xsYWJvcmF0b3IudXNlci5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiSW1Dcm9zcyIsIlVTRVJfUk9MRSIsInVzZUNvbGxhYm9yYXRvciIsInVzZUZvcm0iLCJjb2xsYWJvcmF0b3JTY2hlbWEiLCJ6b2RSZXNvbHZlciIsIkJ1dHRvbiIsIkNvbGxhYm9yYXRvck1vZGFsIiwidG9kb0xpc3RJZCIsIm9uQ2xvc2UiLCJjb2xsYWJvcmF0b3JzIiwiaXNMb2FkaW5nIiwiYWRkQ29sbGFib3JhdG9yIiwicmVtb3ZlQ29sbGFib3JhdG9yIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJmb3JtU3RhdGUiLCJlcnJvcnMiLCJyZXNvbHZlciIsIm9uU3VibWl0IiwiZGF0YSIsImxpc3RJZCIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJoMiIsImZvcm0iLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImVtYWlsIiwicCIsIm1lc3NhZ2UiLCJzZWxlY3QiLCJvcHRpb24iLCJ2YWx1ZSIsIkFETUlOIiwiVklFV0VSIiwicm9sZSIsImgzIiwidWwiLCJtYXAiLCJjb2xsYWJvcmF0b3IiLCJsaSIsInNwYW4iLCJ1c2VyIiwidXNlcklkIiwiaWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/CollaboratorModal.tsx\n"));

/***/ })

});