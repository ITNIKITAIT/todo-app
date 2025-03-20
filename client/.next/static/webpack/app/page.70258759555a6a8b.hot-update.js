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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CollaboratorModal)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/useQuery.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/useMutation.js\");\n/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/api */ \"(app-pages-browser)/./src/app/api.ts\");\n/* harmony import */ var _hooks_useTodos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useTodos */ \"(app-pages-browser)/./src/hooks/useTodos.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction CollaboratorModal(param) {\n    let { todoListId, isOpen, onClose } = param;\n    _s();\n    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQueryClient)();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [role, setRole] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_hooks_useTodos__WEBPACK_IMPORTED_MODULE_3__.USER_ROLE.VIEWER);\n    const { data: collaborators = [], isLoading } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery)({\n        queryKey: [\n            'collaborators',\n            todoListId\n        ],\n        queryFn: {\n            \"CollaboratorModal.useQuery\": async ()=>{\n                const response = await _app_api__WEBPACK_IMPORTED_MODULE_2__.api.get(\"/todos/\".concat(todoListId, \"/collaborators\"));\n                return response.data;\n            }\n        }[\"CollaboratorModal.useQuery\"]\n    });\n    const addCollaboratorMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useMutation)({\n        mutationFn: {\n            \"CollaboratorModal.useMutation[addCollaboratorMutation]\": async ()=>{\n                await _app_api__WEBPACK_IMPORTED_MODULE_2__.api.post(\"/todos/\".concat(todoListId, \"/collaborators\"), {\n                    email,\n                    role\n                });\n            }\n        }[\"CollaboratorModal.useMutation[addCollaboratorMutation]\"],\n        onSuccess: {\n            \"CollaboratorModal.useMutation[addCollaboratorMutation]\": ()=>{\n                queryClient.invalidateQueries({\n                    queryKey: [\n                        'collaborators',\n                        todoListId\n                    ]\n                });\n                setEmail('');\n                setRole(_hooks_useTodos__WEBPACK_IMPORTED_MODULE_3__.USER_ROLE.ADMIN);\n            }\n        }[\"CollaboratorModal.useMutation[addCollaboratorMutation]\"]\n    });\n    const removeCollaboratorMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useMutation)({\n        mutationFn: {\n            \"CollaboratorModal.useMutation[removeCollaboratorMutation]\": async (collaboratorId)=>{\n                await _app_api__WEBPACK_IMPORTED_MODULE_2__.api.delete(\"/todos/\".concat(todoListId, \"/collaborators/\").concat(collaboratorId));\n            }\n        }[\"CollaboratorModal.useMutation[removeCollaboratorMutation]\"],\n        onSuccess: {\n            \"CollaboratorModal.useMutation[removeCollaboratorMutation]\": ()=>{\n                queryClient.invalidateQueries({\n                    queryKey: [\n                        'collaborators',\n                        todoListId\n                    ]\n                });\n            }\n        }[\"CollaboratorModal.useMutation[removeCollaboratorMutation]\"]\n    });\n    if (!isOpen) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 flex items-center justify-center bg-opacity-50 bg-opacity-50 z-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white p-6 rounded-lg w-96\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-xl font-semibold mb-4\",\n                    children: \"Добавить коллаборатора\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"email\",\n                            placeholder: \"Email\",\n                            className: \"w-full p-2 border rounded-md mb-2\",\n                            value: email,\n                            onChange: (e)=>setEmail(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            className: \"w-full p-2 border rounded-md\",\n                            value: role,\n                            onChange: (e)=>setRole(e.target.value),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"editor\",\n                                    children: \"Редактор\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"viewer\",\n                                    children: \"Просмотр\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"w-full bg-blue-500 text-white py-2 rounded-md\",\n                    onClick: ()=>addCollaboratorMutation.mutate(),\n                    children: \"Добавить\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                    lineNumber: 93,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-lg font-semibold mt-4\",\n                    children: \"Коллабораторы:\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 17\n                }, this),\n                isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Загрузка...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                    lineNumber: 101,\n                    columnNumber: 21\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"mt-2 space-y-2\",\n                    children: collaborators.map((collaborator)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"flex justify-between items-center p-2 border rounded-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        collaborator.email,\n                                        \" (\",\n                                        collaborator.role,\n                                        \")\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                                    lineNumber: 108,\n                                    columnNumber: 33\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"text-red-500\",\n                                    onClick: ()=>removeCollaboratorMutation.mutate(collaborator.id),\n                                    children: \"Удалить\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                                    lineNumber: 111,\n                                    columnNumber: 33\n                                }, this)\n                            ]\n                        }, collaborator.id, true, {\n                            fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 29\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                    lineNumber: 103,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"mt-4 w-full bg-gray-300 py-2 rounded-md\",\n                    onClick: onClose,\n                    children: \"Закрыть\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                    lineNumber: 125,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n            lineNumber: 70,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n        lineNumber: 69,\n        columnNumber: 9\n    }, this);\n}\n_s(CollaboratorModal, \"POcGtuAAjPh6b92xJ/89KoS61LI=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQueryClient,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useMutation,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useMutation\n    ];\n});\n_c = CollaboratorModal;\nvar _c;\n$RefreshReg$(_c, \"CollaboratorModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NvbGxhYm9yYXRvck1vZGFsLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFpQztBQUM2QztBQUM5QztBQUNhO0FBYzlCLFNBQVNNLGtCQUFrQixLQUlsQztRQUprQyxFQUN0Q0MsVUFBVSxFQUNWQyxNQUFNLEVBQ05DLE9BQU8sRUFDSCxHQUprQzs7SUFLdEMsTUFBTUMsY0FBY1AscUVBQWNBO0lBQ2xDLE1BQU0sQ0FBQ1EsT0FBT0MsU0FBUyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNhLE1BQU1DLFFBQVEsR0FBR2QsK0NBQVFBLENBQVlLLHNEQUFTQSxDQUFDVSxNQUFNO0lBRTVELE1BQU0sRUFBRUMsTUFBTUMsZ0JBQWdCLEVBQUUsRUFBRUMsU0FBUyxFQUFFLEdBQUdoQiwrREFBUUEsQ0FBQztRQUNyRGlCLFVBQVU7WUFBQztZQUFpQlo7U0FBVztRQUN2Q2EsT0FBTzswQ0FBRTtnQkFDTCxNQUFNQyxXQUFXLE1BQU1qQix5Q0FBR0EsQ0FBQ2tCLEdBQUcsQ0FDMUIsVUFBcUIsT0FBWGYsWUFBVztnQkFFekIsT0FBT2MsU0FBU0wsSUFBSTtZQUN4Qjs7SUFDSjtJQUVBLE1BQU1PLDBCQUEwQnRCLGtFQUFXQSxDQUFDO1FBQ3hDdUIsVUFBVTtzRUFBRTtnQkFDUixNQUFNcEIseUNBQUdBLENBQUNxQixJQUFJLENBQUMsVUFBcUIsT0FBWGxCLFlBQVcsbUJBQWlCO29CQUNqREk7b0JBQ0FFO2dCQUNKO1lBQ0o7O1FBQ0FhLFNBQVM7c0VBQUU7Z0JBQ1BoQixZQUFZaUIsaUJBQWlCLENBQUM7b0JBQzFCUixVQUFVO3dCQUFDO3dCQUFpQlo7cUJBQVc7Z0JBQzNDO2dCQUNBSyxTQUFTO2dCQUNURSxRQUFRVCxzREFBU0EsQ0FBQ3VCLEtBQUs7WUFDM0I7O0lBQ0o7SUFFQSxNQUFNQyw2QkFBNkI1QixrRUFBV0EsQ0FBQztRQUMzQ3VCLFVBQVU7eUVBQUUsT0FBT007Z0JBQ2YsTUFBTTFCLHlDQUFHQSxDQUFDMkIsTUFBTSxDQUNaLFVBQXNDRCxPQUE1QnZCLFlBQVcsbUJBQWdDLE9BQWZ1QjtZQUU5Qzs7UUFDQUosU0FBUzt5RUFBRTtnQkFDUGhCLFlBQVlpQixpQkFBaUIsQ0FBQztvQkFDMUJSLFVBQVU7d0JBQUM7d0JBQWlCWjtxQkFBVztnQkFDM0M7WUFDSjs7SUFDSjtJQUVBLElBQUksQ0FBQ0MsUUFBUSxPQUFPO0lBRXBCLHFCQUNJLDhEQUFDd0I7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNDO29CQUFHRCxXQUFVOzhCQUE2Qjs7Ozs7OzhCQUszQyw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDRTs0QkFDR0MsTUFBSzs0QkFDTEMsYUFBWTs0QkFDWkosV0FBVTs0QkFDVkssT0FBTzNCOzRCQUNQNEIsVUFBVSxDQUFDQyxJQUFNNUIsU0FBUzRCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7O3NDQUU1Qyw4REFBQ0k7NEJBQ0dULFdBQVU7NEJBQ1ZLLE9BQU96Qjs0QkFDUDBCLFVBQVUsQ0FBQ0MsSUFBTTFCLFFBQVEwQixFQUFFQyxNQUFNLENBQUNILEtBQUs7OzhDQUN2Qyw4REFBQ0s7b0NBQU9MLE9BQU07OENBQVM7Ozs7Ozs4Q0FDdkIsOERBQUNLO29DQUFPTCxPQUFNOzhDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBSS9CLDhEQUFDTTtvQkFDR1gsV0FBVTtvQkFDVlksU0FBUyxJQUFNdEIsd0JBQXdCdUIsTUFBTTs4QkFBSTs7Ozs7OzhCQUlyRCw4REFBQ0M7b0JBQUdkLFdBQVU7OEJBQTZCOzs7Ozs7Z0JBQzFDZiwwQkFDRyw4REFBQzhCOzhCQUFFOzs7Ozt5Q0FFSCw4REFBQ0M7b0JBQUdoQixXQUFVOzhCQUNUaEIsY0FBY2lDLEdBQUcsQ0FBQyxDQUFDQyw2QkFDaEIsOERBQUNDOzRCQUVHbkIsV0FBVTs7OENBQ1YsOERBQUNvQjs7d0NBQ0lGLGFBQWF4QyxLQUFLO3dDQUFDO3dDQUFHd0MsYUFBYXRDLElBQUk7d0NBQUM7Ozs7Ozs7OENBRTdDLDhEQUFDK0I7b0NBQ0dYLFdBQVU7b0NBQ1ZZLFNBQVMsSUFDTGhCLDJCQUEyQmlCLE1BQU0sQ0FDN0JLLGFBQWFHLEVBQUU7OENBRXJCOzs7Ozs7OzJCQVhESCxhQUFhRyxFQUFFOzs7Ozs7Ozs7OzhCQW1CcEMsOERBQUNWO29CQUNHWCxXQUFVO29CQUNWWSxTQUFTcEM7OEJBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXRDO0dBbkh3Qkg7O1FBS0FILGlFQUFjQTtRQUljRCwyREFBUUE7UUFVeEJELDhEQUFXQTtRQWdCUkEsOERBQVdBOzs7S0FuQzFCSyIsInNvdXJjZXMiOlsiQzpcXEFwcGxpY2F0aW9uc1xcUHJvamVjdHNcXE5leHRcXHRvZG8tYXBwXFxjbGllbnRcXHNyY1xcY29tcG9uZW50c1xcQ29sbGFib3JhdG9yTW9kYWwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnksIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JztcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnQC9hcHAvYXBpJztcclxuaW1wb3J0IHsgVVNFUl9ST0xFIH0gZnJvbSAnQC9ob29rcy91c2VUb2Rvcyc7XHJcblxyXG5pbnRlcmZhY2UgQ29sbGFib3JhdG9yIHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgcm9sZTogVVNFUl9ST0xFO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgdG9kb0xpc3RJZDogc3RyaW5nO1xyXG4gICAgaXNPcGVuOiBib29sZWFuO1xyXG4gICAgb25DbG9zZTogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29sbGFib3JhdG9yTW9kYWwoe1xyXG4gICAgdG9kb0xpc3RJZCxcclxuICAgIGlzT3BlbixcclxuICAgIG9uQ2xvc2UsXHJcbn06IFByb3BzKSB7XHJcbiAgICBjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtyb2xlLCBzZXRSb2xlXSA9IHVzZVN0YXRlPFVTRVJfUk9MRT4oVVNFUl9ST0xFLlZJRVdFUik7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBjb2xsYWJvcmF0b3JzID0gW10sIGlzTG9hZGluZyB9ID0gdXNlUXVlcnkoe1xyXG4gICAgICAgIHF1ZXJ5S2V5OiBbJ2NvbGxhYm9yYXRvcnMnLCB0b2RvTGlzdElkXSxcclxuICAgICAgICBxdWVyeUZuOiBhc3luYyAoKTogUHJvbWlzZTxDb2xsYWJvcmF0b3JbXT4gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQoXHJcbiAgICAgICAgICAgICAgICBgL3RvZG9zLyR7dG9kb0xpc3RJZH0vY29sbGFib3JhdG9yc2BcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGFkZENvbGxhYm9yYXRvck11dGF0aW9uID0gdXNlTXV0YXRpb24oe1xyXG4gICAgICAgIG11dGF0aW9uRm46IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgYXBpLnBvc3QoYC90b2Rvcy8ke3RvZG9MaXN0SWR9L2NvbGxhYm9yYXRvcnNgLCB7XHJcbiAgICAgICAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgICAgICAgIHJvbGUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25TdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5S2V5OiBbJ2NvbGxhYm9yYXRvcnMnLCB0b2RvTGlzdElkXSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNldEVtYWlsKCcnKTtcclxuICAgICAgICAgICAgc2V0Um9sZShVU0VSX1JPTEUuQURNSU4pO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByZW1vdmVDb2xsYWJvcmF0b3JNdXRhdGlvbiA9IHVzZU11dGF0aW9uKHtcclxuICAgICAgICBtdXRhdGlvbkZuOiBhc3luYyAoY29sbGFib3JhdG9ySWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCBhcGkuZGVsZXRlKFxyXG4gICAgICAgICAgICAgICAgYC90b2Rvcy8ke3RvZG9MaXN0SWR9L2NvbGxhYm9yYXRvcnMvJHtjb2xsYWJvcmF0b3JJZH1gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICAgICAgcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoe1xyXG4gICAgICAgICAgICAgICAgcXVlcnlLZXk6IFsnY29sbGFib3JhdG9ycycsIHRvZG9MaXN0SWRdLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFpc09wZW4pIHJldHVybiBudWxsO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLW9wYWNpdHktNTAgYmctb3BhY2l0eS01MCB6LTEwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC02IHJvdW5kZWQtbGcgdy05NlwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAg0JTQvtCx0LDQstC40YLRjCDQutC+0LvQu9Cw0LHQvtGA0LDRgtC+0YDQsFxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICB7Lyog0KTQvtGA0LzQsCDQtNC+0LHQsNCy0LvQtdC90LjRjyAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtMiBib3JkZXIgcm91bmRlZC1tZCBtYi0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtMiBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyb2xlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJvbGUoZS50YXJnZXQudmFsdWUgYXMgVVNFUl9ST0xFKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJlZGl0b3JcIj7QoNC10LTQsNC60YLQvtGAPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ2aWV3ZXJcIj7Qn9GA0L7RgdC80L7RgtGAPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHktMiByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRDb2xsYWJvcmF0b3JNdXRhdGlvbi5tdXRhdGUoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAg0JTQvtCx0LDQstC40YLRjFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCBtdC00XCI+0JrQvtC70LvQsNCx0L7RgNCw0YLQvtGA0Ys6PC9oMz5cclxuICAgICAgICAgICAgICAgIHtpc0xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHA+0JfQsNCz0YDRg9C30LrQsC4uLjwvcD5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm10LTIgc3BhY2UteS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb2xsYWJvcmF0b3JzLm1hcCgoY29sbGFib3JhdG9yKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbGxhYm9yYXRvci5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcC0yIGJvcmRlciByb3VuZGVkLW1kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2xsYWJvcmF0b3IuZW1haWx9ICh7Y29sbGFib3JhdG9yLnJvbGV9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVDb2xsYWJvcmF0b3JNdXRhdGlvbi5tdXRhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFib3JhdG9yLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNCB3LWZ1bGwgYmctZ3JheS0zMDAgcHktMiByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICDQl9Cw0LrRgNGL0YLRjFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VNdXRhdGlvbiIsInVzZVF1ZXJ5IiwidXNlUXVlcnlDbGllbnQiLCJhcGkiLCJVU0VSX1JPTEUiLCJDb2xsYWJvcmF0b3JNb2RhbCIsInRvZG9MaXN0SWQiLCJpc09wZW4iLCJvbkNsb3NlIiwicXVlcnlDbGllbnQiLCJlbWFpbCIsInNldEVtYWlsIiwicm9sZSIsInNldFJvbGUiLCJWSUVXRVIiLCJkYXRhIiwiY29sbGFib3JhdG9ycyIsImlzTG9hZGluZyIsInF1ZXJ5S2V5IiwicXVlcnlGbiIsInJlc3BvbnNlIiwiZ2V0IiwiYWRkQ29sbGFib3JhdG9yTXV0YXRpb24iLCJtdXRhdGlvbkZuIiwicG9zdCIsIm9uU3VjY2VzcyIsImludmFsaWRhdGVRdWVyaWVzIiwiQURNSU4iLCJyZW1vdmVDb2xsYWJvcmF0b3JNdXRhdGlvbiIsImNvbGxhYm9yYXRvcklkIiwiZGVsZXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwic2VsZWN0Iiwib3B0aW9uIiwiYnV0dG9uIiwib25DbGljayIsIm11dGF0ZSIsImgzIiwicCIsInVsIiwibWFwIiwiY29sbGFib3JhdG9yIiwibGkiLCJzcGFuIiwiaWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/CollaboratorModal.tsx\n"));

/***/ })

});