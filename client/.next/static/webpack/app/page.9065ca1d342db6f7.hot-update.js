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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CollaboratorModal)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_ImCross_react_icons_im__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=ImCross!=!react-icons/im */ \"(app-pages-browser)/./node_modules/react-icons/im/index.mjs\");\n/* harmony import */ var _hooks_useTodos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useTodos */ \"(app-pages-browser)/./src/hooks/useTodos.tsx\");\n/* harmony import */ var _hooks_useCollaborator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useCollaborator */ \"(app-pages-browser)/./src/hooks/useCollaborator.tsx\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _app_schemas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/schemas */ \"(app-pages-browser)/./src/app/schemas.ts\");\n/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hookform/resolvers/zod */ \"(app-pages-browser)/./node_modules/@hookform/resolvers/zod/dist/zod.mjs\");\n/* harmony import */ var _shared_ui_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/shared/ui/Button */ \"(app-pages-browser)/./src/shared/ui/Button.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction CollaboratorModal(param) {\n    let { todoListId, onClose } = param;\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [role, setRole] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_hooks_useTodos__WEBPACK_IMPORTED_MODULE_2__.USER_ROLE.VIEWER);\n    const { collaborators, isLoading, addCollaborator, removeCollaborator } = (0,_hooks_useCollaborator__WEBPACK_IMPORTED_MODULE_3__.useCollaborator)(todoListId);\n    const { register, handleSubmit, formState: { errors } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)({\n        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_5__.zodResolver)(_app_schemas__WEBPACK_IMPORTED_MODULE_4__.collaboratorSchema)\n    });\n    const onSubmit = (data)=>{\n        addCollaborator({\n            ...data,\n            listId: todoListId\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 flex items-center justify-center bg-black/35 bg-opacity-50 z-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white p-6 rounded-lg w-96 relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ImCross_react_icons_im__WEBPACK_IMPORTED_MODULE_8__.ImCross, {\n                    onClick: onClose,\n                    className: \"w-5 h-5 hover:fill-red-600 cursor-pointer absolute top-4 right-4\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-lg font-bold mb-4\",\n                    children: \"Add Collaborator\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit(onSubmit),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    placeholder: \"Email\",\n                                    className: \"w-full p-2 border rounded-md mb-1\",\n                                    ...register('email')\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 25\n                                }, this),\n                                errors.email && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-red-500 text-sm\",\n                                    children: errors.email.message\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    className: \"w-full p-2 border rounded-md mt-2\",\n                                    ...register('role'),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: _hooks_useTodos__WEBPACK_IMPORTED_MODULE_2__.USER_ROLE.ADMIN,\n                                            children: \"ADMIN\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: _hooks_useTodos__WEBPACK_IMPORTED_MODULE_2__.USER_ROLE.VIEWER,\n                                            children: \"VIEWER\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 25\n                                }, this),\n                                errors.role && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-red-500 text-sm\",\n                                    children: errors.role.message\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_ui_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            children: \"Add\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-lg font-semibold mt-4\",\n                    children: \"Collaborators:\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 17\n                }, this),\n                isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 21\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"mt-2 space-y-2\",\n                    children: collaborators === null || collaborators === void 0 ? void 0 : collaborators.map((collaborator)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"flex justify-between items-center p-2 border rounded-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        collaborator.email,\n                                        \" (\",\n                                        collaborator.role,\n                                        \")\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 33\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"text-red-500\",\n                                    onClick: ()=>removeCollaborator(collaborator.id),\n                                    children: \"Delete\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 33\n                                }, this)\n                            ]\n                        }, collaborator.id, true, {\n                            fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 29\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n            lineNumber: 36,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, this);\n}\n_s(CollaboratorModal, \"lm1OJQrcND+aGO1Psq6IQidtORk=\", false, function() {\n    return [\n        _hooks_useCollaborator__WEBPACK_IMPORTED_MODULE_3__.useCollaborator,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm\n    ];\n});\n_c = CollaboratorModal;\nvar _c;\n$RefreshReg$(_c, \"CollaboratorModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NvbGxhYm9yYXRvck1vZGFsLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ1E7QUFDSTtBQUNhO0FBQ2hCO0FBQ2lDO0FBQ3JCO0FBQ2Q7QUFPekIsU0FBU1Esa0JBQWtCLEtBQThCO1FBQTlCLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFTLEdBQTlCOztJQUN0QyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1osK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDYSxNQUFNQyxRQUFRLEdBQUdkLCtDQUFRQSxDQUFZRSxzREFBU0EsQ0FBQ2EsTUFBTTtJQUU1RCxNQUFNLEVBQUVDLGFBQWEsRUFBRUMsU0FBUyxFQUFFQyxlQUFlLEVBQUVDLGtCQUFrQixFQUFFLEdBQ25FaEIsdUVBQWVBLENBQUNNO0lBRXBCLE1BQU0sRUFDRlcsUUFBUSxFQUNSQyxZQUFZLEVBQ1pDLFdBQVcsRUFBRUMsTUFBTSxFQUFFLEVBQ3hCLEdBQUduQix3REFBT0EsQ0FBeUI7UUFDaENvQixVQUFVbEIsb0VBQVdBLENBQUNELDREQUFrQkE7SUFDNUM7SUFFQSxNQUFNb0IsV0FBVyxDQUFDQztRQUNkUixnQkFBZ0I7WUFBRSxHQUFHUSxJQUFJO1lBQUVDLFFBQVFsQjtRQUFXO0lBQ2xEO0lBRUEscUJBQ0ksOERBQUNtQjtRQUFJQyxXQUFVO2tCQUNYLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDWCw4REFBQzVCLGtGQUFPQTtvQkFDSjZCLFNBQVNwQjtvQkFDVG1CLFdBQVU7Ozs7Ozs4QkFFZCw4REFBQ0U7b0JBQUdGLFdBQVU7OEJBQXlCOzs7Ozs7OEJBRXZDLDhEQUFDRztvQkFBS1AsVUFBVUosYUFBYUk7O3NDQUN6Qiw4REFBQ0c7NEJBQUlDLFdBQVU7OzhDQUNYLDhEQUFDSTtvQ0FDR0MsTUFBSztvQ0FDTEMsYUFBWTtvQ0FDWk4sV0FBVTtvQ0FDVCxHQUFHVCxTQUFTLFFBQVE7Ozs7OztnQ0FFeEJHLE9BQU9aLEtBQUssa0JBQ1QsOERBQUN5QjtvQ0FBRVAsV0FBVTs4Q0FDUk4sT0FBT1osS0FBSyxDQUFDMEIsT0FBTzs7Ozs7OzhDQUk3Qiw4REFBQ0M7b0NBQ0dULFdBQVU7b0NBQ1QsR0FBR1QsU0FBUyxPQUFPOztzREFDcEIsOERBQUNtQjs0Q0FBT0MsT0FBT3RDLHNEQUFTQSxDQUFDdUMsS0FBSztzREFBRTs7Ozs7O3NEQUNoQyw4REFBQ0Y7NENBQU9DLE9BQU90QyxzREFBU0EsQ0FBQ2EsTUFBTTtzREFBRTs7Ozs7Ozs7Ozs7O2dDQUVwQ1EsT0FBT1YsSUFBSSxrQkFDUiw4REFBQ3VCO29DQUFFUCxXQUFVOzhDQUNSTixPQUFPVixJQUFJLENBQUN3QixPQUFPOzs7Ozs7Ozs7Ozs7c0NBS2hDLDhEQUFDOUIseURBQU1BO3NDQUFDOzs7Ozs7Ozs7Ozs7OEJBR1osOERBQUNtQztvQkFBR2IsV0FBVTs4QkFBNkI7Ozs7OztnQkFDMUNaLDBCQUNHLDhEQUFDbUI7OEJBQUU7Ozs7O3lDQUVILDhEQUFDTztvQkFBR2QsV0FBVTs4QkFDVGIsMEJBQUFBLG9DQUFBQSxjQUFlNEIsR0FBRyxDQUFDLENBQUNDLDZCQUNqQiw4REFBQ0M7NEJBRUdqQixXQUFVOzs4Q0FDViw4REFBQ2tCOzt3Q0FDSUYsYUFBYWxDLEtBQUs7d0NBQUM7d0NBQUdrQyxhQUFhaEMsSUFBSTt3Q0FBQzs7Ozs7Ozs4Q0FFN0MsOERBQUNtQztvQ0FDR25CLFdBQVU7b0NBQ1ZDLFNBQVMsSUFDTFgsbUJBQW1CMEIsYUFBYUksRUFBRTs4Q0FDcEM7Ozs7Ozs7MkJBVERKLGFBQWFJLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CcEQ7R0FwRndCekM7O1FBS2hCTCxtRUFBZUE7UUFNZkMsb0RBQU9BOzs7S0FYU0kiLCJzb3VyY2VzIjpbIkM6XFxBcHBsaWNhdGlvbnNcXFByb2plY3RzXFxOZXh0XFx0b2RvLWFwcFxcY2xpZW50XFxzcmNcXGNvbXBvbmVudHNcXENvbGxhYm9yYXRvck1vZGFsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSW1Dcm9zcyB9IGZyb20gJ3JlYWN0LWljb25zL2ltJztcclxuaW1wb3J0IHsgVVNFUl9ST0xFIH0gZnJvbSAnQC9ob29rcy91c2VUb2Rvcyc7XHJcbmltcG9ydCB7IHVzZUNvbGxhYm9yYXRvciB9IGZyb20gJ0AvaG9va3MvdXNlQ29sbGFib3JhdG9yJztcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCB7IENvbGxhYm9yYXRvckZvcm1WYWx1ZXMsIGNvbGxhYm9yYXRvclNjaGVtYSB9IGZyb20gJ0AvYXBwL3NjaGVtYXMnO1xyXG5pbXBvcnQgeyB6b2RSZXNvbHZlciB9IGZyb20gJ0Bob29rZm9ybS9yZXNvbHZlcnMvem9kJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAL3NoYXJlZC91aS9CdXR0b24nO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIHRvZG9MaXN0SWQ6IHN0cmluZztcclxuICAgIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbGxhYm9yYXRvck1vZGFsKHsgdG9kb0xpc3RJZCwgb25DbG9zZSB9OiBQcm9wcykge1xyXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbcm9sZSwgc2V0Um9sZV0gPSB1c2VTdGF0ZTxVU0VSX1JPTEU+KFVTRVJfUk9MRS5WSUVXRVIpO1xyXG5cclxuICAgIGNvbnN0IHsgY29sbGFib3JhdG9ycywgaXNMb2FkaW5nLCBhZGRDb2xsYWJvcmF0b3IsIHJlbW92ZUNvbGxhYm9yYXRvciB9ID1cclxuICAgICAgICB1c2VDb2xsYWJvcmF0b3IodG9kb0xpc3RJZCk7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIHJlZ2lzdGVyLFxyXG4gICAgICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgICAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXHJcbiAgICB9ID0gdXNlRm9ybTxDb2xsYWJvcmF0b3JGb3JtVmFsdWVzPih7XHJcbiAgICAgICAgcmVzb2x2ZXI6IHpvZFJlc29sdmVyKGNvbGxhYm9yYXRvclNjaGVtYSksXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IChkYXRhOiBDb2xsYWJvcmF0b3JGb3JtVmFsdWVzKSA9PiB7XHJcbiAgICAgICAgYWRkQ29sbGFib3JhdG9yKHsgLi4uZGF0YSwgbGlzdElkOiB0b2RvTGlzdElkIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ibGFjay8zNSBiZy1vcGFjaXR5LTUwIHotMTBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTYgcm91bmRlZC1sZyB3LTk2IHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1Dcm9zc1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy01IGgtNSBob3ZlcjpmaWxsLXJlZC02MDAgY3Vyc29yLXBvaW50ZXIgYWJzb2x1dGUgdG9wLTQgcmlnaHQtNFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIG1iLTRcIj5BZGQgQ29sbGFib3JhdG9yPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtMiBib3JkZXIgcm91bmRlZC1tZCBtYi0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignZW1haWwnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5lbWFpbCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuZW1haWwubWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTIgYm9yZGVyIHJvdW5kZWQtbWQgbXQtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ3JvbGUnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtVU0VSX1JPTEUuQURNSU59PkFETUlOPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtVU0VSX1JPTEUuVklFV0VSfT5WSUVXRVI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMucm9sZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMucm9sZS5tZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPkFkZDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgbXQtNFwiPkNvbGxhYm9yYXRvcnM6PC9oMz5cclxuICAgICAgICAgICAgICAgIHtpc0xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHA+TG9hZGluZy4uLjwvcD5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm10LTIgc3BhY2UteS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb2xsYWJvcmF0b3JzPy5tYXAoKGNvbGxhYm9yYXRvcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb2xsYWJvcmF0b3IuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHAtMiBib3JkZXIgcm91bmRlZC1tZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29sbGFib3JhdG9yLmVtYWlsfSAoe2NvbGxhYm9yYXRvci5yb2xlfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQ29sbGFib3JhdG9yKGNvbGxhYm9yYXRvci5pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkltQ3Jvc3MiLCJVU0VSX1JPTEUiLCJ1c2VDb2xsYWJvcmF0b3IiLCJ1c2VGb3JtIiwiY29sbGFib3JhdG9yU2NoZW1hIiwiem9kUmVzb2x2ZXIiLCJCdXR0b24iLCJDb2xsYWJvcmF0b3JNb2RhbCIsInRvZG9MaXN0SWQiLCJvbkNsb3NlIiwiZW1haWwiLCJzZXRFbWFpbCIsInJvbGUiLCJzZXRSb2xlIiwiVklFV0VSIiwiY29sbGFib3JhdG9ycyIsImlzTG9hZGluZyIsImFkZENvbGxhYm9yYXRvciIsInJlbW92ZUNvbGxhYm9yYXRvciIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwicmVzb2x2ZXIiLCJvblN1Ym1pdCIsImRhdGEiLCJsaXN0SWQiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaDIiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJwIiwibWVzc2FnZSIsInNlbGVjdCIsIm9wdGlvbiIsInZhbHVlIiwiQURNSU4iLCJoMyIsInVsIiwibWFwIiwiY29sbGFib3JhdG9yIiwibGkiLCJzcGFuIiwiYnV0dG9uIiwiaWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/CollaboratorModal.tsx\n"));

/***/ })

});