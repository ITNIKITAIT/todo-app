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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CollaboratorModal)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/useQuery.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/useMutation.js\");\n/* harmony import */ var _barrel_optimize_names_ImCross_react_icons_im__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=ImCross!=!react-icons/im */ \"(app-pages-browser)/./node_modules/react-icons/im/index.mjs\");\n/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/api */ \"(app-pages-browser)/./src/app/api.ts\");\n/* harmony import */ var _hooks_useTodos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useTodos */ \"(app-pages-browser)/./src/hooks/useTodos.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction CollaboratorModal(param) {\n    let { todoListId, isOpen, onClose } = param;\n    _s();\n    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQueryClient)();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [role, setRole] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_hooks_useTodos__WEBPACK_IMPORTED_MODULE_3__.USER_ROLE.VIEWER);\n    const { data: collaborators = [], isLoading } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery)({\n        queryKey: [\n            'collaborators',\n            todoListId\n        ],\n        queryFn: {\n            \"CollaboratorModal.useQuery\": async ()=>{\n                const response = await _app_api__WEBPACK_IMPORTED_MODULE_2__.api.get(\"/todos/\".concat(todoListId, \"/collaborators\"));\n                return response.data;\n            }\n        }[\"CollaboratorModal.useQuery\"]\n    });\n    const addCollaboratorMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useMutation)({\n        mutationFn: {\n            \"CollaboratorModal.useMutation[addCollaboratorMutation]\": async ()=>{\n                await _app_api__WEBPACK_IMPORTED_MODULE_2__.api.post(\"/todos/\".concat(todoListId, \"/collaborators\"), {\n                    email,\n                    role\n                });\n            }\n        }[\"CollaboratorModal.useMutation[addCollaboratorMutation]\"],\n        onSuccess: {\n            \"CollaboratorModal.useMutation[addCollaboratorMutation]\": ()=>{\n                queryClient.invalidateQueries({\n                    queryKey: [\n                        'collaborators',\n                        todoListId\n                    ]\n                });\n                setEmail('');\n                setRole(_hooks_useTodos__WEBPACK_IMPORTED_MODULE_3__.USER_ROLE.ADMIN);\n            }\n        }[\"CollaboratorModal.useMutation[addCollaboratorMutation]\"]\n    });\n    const removeCollaboratorMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useMutation)({\n        mutationFn: {\n            \"CollaboratorModal.useMutation[removeCollaboratorMutation]\": async (collaboratorId)=>{\n                await _app_api__WEBPACK_IMPORTED_MODULE_2__.api.delete(\"/todos/\".concat(todoListId, \"/collaborators/\").concat(collaboratorId));\n            }\n        }[\"CollaboratorModal.useMutation[removeCollaboratorMutation]\"],\n        onSuccess: {\n            \"CollaboratorModal.useMutation[removeCollaboratorMutation]\": ()=>{\n                queryClient.invalidateQueries({\n                    queryKey: [\n                        'collaborators',\n                        todoListId\n                    ]\n                });\n            }\n        }[\"CollaboratorModal.useMutation[removeCollaboratorMutation]\"]\n    });\n    if (!isOpen) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 flex items-center justify-center bg-black/35 bg-opacity-50 z-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white p-6 rounded-lg w-96\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ImCross_react_icons_im__WEBPACK_IMPORTED_MODULE_7__.ImCross, {\n                    onClick: onClose,\n                    className: \"w-5 h-5 hover:fill-red-600 cursor-pointer absolute top-3 right-3\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-xl font-semibold mb-4\",\n                    children: \"Добавить коллаборатора\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"email\",\n                            placeholder: \"Email\",\n                            className: \"w-full p-2 border rounded-md mb-2\",\n                            value: email,\n                            onChange: (e)=>setEmail(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            className: \"w-full p-2 border rounded-md\",\n                            value: role,\n                            onChange: (e)=>setRole(e.target.value),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"editor\",\n                                    children: \"Редактор\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"viewer\",\n                                    children: \"Просмотр\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"w-full bg-blue-500 text-white py-2 rounded-md\",\n                    onClick: ()=>addCollaboratorMutation.mutate(),\n                    children: \"Добавить\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                    lineNumber: 98,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-lg font-semibold mt-4\",\n                    children: \"Коллабораторы:\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                    lineNumber: 104,\n                    columnNumber: 17\n                }, this),\n                isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Загрузка...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                    lineNumber: 106,\n                    columnNumber: 21\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"mt-2 space-y-2\",\n                    children: collaborators.map((collaborator)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"flex justify-between items-center p-2 border rounded-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        collaborator.email,\n                                        \" (\",\n                                        collaborator.role,\n                                        \")\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                                    lineNumber: 113,\n                                    columnNumber: 33\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"text-red-500\",\n                                    onClick: ()=>removeCollaboratorMutation.mutate(collaborator.id),\n                                    children: \"Удалить\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                                    lineNumber: 116,\n                                    columnNumber: 33\n                                }, this)\n                            ]\n                        }, collaborator.id, true, {\n                            fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                            lineNumber: 110,\n                            columnNumber: 29\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n                    lineNumber: 108,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n            lineNumber: 71,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\CollaboratorModal.tsx\",\n        lineNumber: 70,\n        columnNumber: 9\n    }, this);\n}\n_s(CollaboratorModal, \"POcGtuAAjPh6b92xJ/89KoS61LI=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQueryClient,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useMutation,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useMutation\n    ];\n});\n_c = CollaboratorModal;\nvar _c;\n$RefreshReg$(_c, \"CollaboratorModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NvbGxhYm9yYXRvck1vZGFsLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDNkM7QUFDckM7QUFDVDtBQUNhO0FBYzlCLFNBQVNPLGtCQUFrQixLQUlsQztRQUprQyxFQUN0Q0MsVUFBVSxFQUNWQyxNQUFNLEVBQ05DLE9BQU8sRUFDSCxHQUprQzs7SUFLdEMsTUFBTUMsY0FBY1IscUVBQWNBO0lBQ2xDLE1BQU0sQ0FBQ1MsT0FBT0MsU0FBUyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNjLE1BQU1DLFFBQVEsR0FBR2YsK0NBQVFBLENBQVlNLHNEQUFTQSxDQUFDVSxNQUFNO0lBRTVELE1BQU0sRUFBRUMsTUFBTUMsZ0JBQWdCLEVBQUUsRUFBRUMsU0FBUyxFQUFFLEdBQUdqQiwrREFBUUEsQ0FBQztRQUNyRGtCLFVBQVU7WUFBQztZQUFpQlo7U0FBVztRQUN2Q2EsT0FBTzswQ0FBRTtnQkFDTCxNQUFNQyxXQUFXLE1BQU1qQix5Q0FBR0EsQ0FBQ2tCLEdBQUcsQ0FDMUIsVUFBcUIsT0FBWGYsWUFBVztnQkFFekIsT0FBT2MsU0FBU0wsSUFBSTtZQUN4Qjs7SUFDSjtJQUVBLE1BQU1PLDBCQUEwQnZCLGtFQUFXQSxDQUFDO1FBQ3hDd0IsVUFBVTtzRUFBRTtnQkFDUixNQUFNcEIseUNBQUdBLENBQUNxQixJQUFJLENBQUMsVUFBcUIsT0FBWGxCLFlBQVcsbUJBQWlCO29CQUNqREk7b0JBQ0FFO2dCQUNKO1lBQ0o7O1FBQ0FhLFNBQVM7c0VBQUU7Z0JBQ1BoQixZQUFZaUIsaUJBQWlCLENBQUM7b0JBQzFCUixVQUFVO3dCQUFDO3dCQUFpQlo7cUJBQVc7Z0JBQzNDO2dCQUNBSyxTQUFTO2dCQUNURSxRQUFRVCxzREFBU0EsQ0FBQ3VCLEtBQUs7WUFDM0I7O0lBQ0o7SUFFQSxNQUFNQyw2QkFBNkI3QixrRUFBV0EsQ0FBQztRQUMzQ3dCLFVBQVU7eUVBQUUsT0FBT007Z0JBQ2YsTUFBTTFCLHlDQUFHQSxDQUFDMkIsTUFBTSxDQUNaLFVBQXNDRCxPQUE1QnZCLFlBQVcsbUJBQWdDLE9BQWZ1QjtZQUU5Qzs7UUFDQUosU0FBUzt5RUFBRTtnQkFDUGhCLFlBQVlpQixpQkFBaUIsQ0FBQztvQkFDMUJSLFVBQVU7d0JBQUM7d0JBQWlCWjtxQkFBVztnQkFDM0M7WUFDSjs7SUFDSjtJQUVBLElBQUksQ0FBQ0MsUUFBUSxPQUFPO0lBRXBCLHFCQUNJLDhEQUFDd0I7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUM5QixrRkFBT0E7b0JBQ0orQixTQUFTekI7b0JBQ1R3QixXQUFVOzs7Ozs7OEJBRWQsOERBQUNFO29CQUFHRixXQUFVOzhCQUE2Qjs7Ozs7OzhCQUszQyw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDRzs0QkFDR0MsTUFBSzs0QkFDTEMsYUFBWTs0QkFDWkwsV0FBVTs0QkFDVk0sT0FBTzVCOzRCQUNQNkIsVUFBVSxDQUFDQyxJQUFNN0IsU0FBUzZCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7O3NDQUU1Qyw4REFBQ0k7NEJBQ0dWLFdBQVU7NEJBQ1ZNLE9BQU8xQjs0QkFDUDJCLFVBQVUsQ0FBQ0MsSUFBTTNCLFFBQVEyQixFQUFFQyxNQUFNLENBQUNILEtBQUs7OzhDQUN2Qyw4REFBQ0s7b0NBQU9MLE9BQU07OENBQVM7Ozs7Ozs4Q0FDdkIsOERBQUNLO29DQUFPTCxPQUFNOzhDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBSS9CLDhEQUFDTTtvQkFDR1osV0FBVTtvQkFDVkMsU0FBUyxJQUFNWCx3QkFBd0J1QixNQUFNOzhCQUFJOzs7Ozs7OEJBSXJELDhEQUFDQztvQkFBR2QsV0FBVTs4QkFBNkI7Ozs7OztnQkFDMUNmLDBCQUNHLDhEQUFDOEI7OEJBQUU7Ozs7O3lDQUVILDhEQUFDQztvQkFBR2hCLFdBQVU7OEJBQ1RoQixjQUFjaUMsR0FBRyxDQUFDLENBQUNDLDZCQUNoQiw4REFBQ0M7NEJBRUduQixXQUFVOzs4Q0FDViw4REFBQ29COzt3Q0FDSUYsYUFBYXhDLEtBQUs7d0NBQUM7d0NBQUd3QyxhQUFhdEMsSUFBSTt3Q0FBQzs7Ozs7Ozs4Q0FFN0MsOERBQUNnQztvQ0FDR1osV0FBVTtvQ0FDVkMsU0FBUyxJQUNMTCwyQkFBMkJpQixNQUFNLENBQzdCSyxhQUFhRyxFQUFFOzhDQUVyQjs7Ozs7OzsyQkFYREgsYUFBYUcsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJwRDtHQWpId0JoRDs7UUFLQUosaUVBQWNBO1FBSWNELDJEQUFRQTtRQVV4QkQsOERBQVdBO1FBZ0JSQSw4REFBV0E7OztLQW5DMUJNIiwic291cmNlcyI6WyJDOlxcQXBwbGljYXRpb25zXFxQcm9qZWN0c1xcTmV4dFxcdG9kby1hcHBcXGNsaWVudFxcc3JjXFxjb21wb25lbnRzXFxDb2xsYWJvcmF0b3JNb2RhbC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknO1xyXG5pbXBvcnQgeyBJbUNyb3NzIH0gZnJvbSAncmVhY3QtaWNvbnMvaW0nO1xyXG5pbXBvcnQgeyBhcGkgfSBmcm9tICdAL2FwcC9hcGknO1xyXG5pbXBvcnQgeyBVU0VSX1JPTEUgfSBmcm9tICdAL2hvb2tzL3VzZVRvZG9zJztcclxuXHJcbmludGVyZmFjZSBDb2xsYWJvcmF0b3Ige1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICByb2xlOiBVU0VSX1JPTEU7XHJcbn1cclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICB0b2RvTGlzdElkOiBzdHJpbmc7XHJcbiAgICBpc09wZW46IGJvb2xlYW47XHJcbiAgICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2xsYWJvcmF0b3JNb2RhbCh7XHJcbiAgICB0b2RvTGlzdElkLFxyXG4gICAgaXNPcGVuLFxyXG4gICAgb25DbG9zZSxcclxufTogUHJvcHMpIHtcclxuICAgIGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcclxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3JvbGUsIHNldFJvbGVdID0gdXNlU3RhdGU8VVNFUl9ST0xFPihVU0VSX1JPTEUuVklFV0VSKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IGNvbGxhYm9yYXRvcnMgPSBbXSwgaXNMb2FkaW5nIH0gPSB1c2VRdWVyeSh7XHJcbiAgICAgICAgcXVlcnlLZXk6IFsnY29sbGFib3JhdG9ycycsIHRvZG9MaXN0SWRdLFxyXG4gICAgICAgIHF1ZXJ5Rm46IGFzeW5jICgpOiBQcm9taXNlPENvbGxhYm9yYXRvcltdPiA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChcclxuICAgICAgICAgICAgICAgIGAvdG9kb3MvJHt0b2RvTGlzdElkfS9jb2xsYWJvcmF0b3JzYFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgYWRkQ29sbGFib3JhdG9yTXV0YXRpb24gPSB1c2VNdXRhdGlvbih7XHJcbiAgICAgICAgbXV0YXRpb25GbjogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCBhcGkucG9zdChgL3RvZG9zLyR7dG9kb0xpc3RJZH0vY29sbGFib3JhdG9yc2AsIHtcclxuICAgICAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcm9sZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICAgICAgcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoe1xyXG4gICAgICAgICAgICAgICAgcXVlcnlLZXk6IFsnY29sbGFib3JhdG9ycycsIHRvZG9MaXN0SWRdLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2V0RW1haWwoJycpO1xyXG4gICAgICAgICAgICBzZXRSb2xlKFVTRVJfUk9MRS5BRE1JTik7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlbW92ZUNvbGxhYm9yYXRvck11dGF0aW9uID0gdXNlTXV0YXRpb24oe1xyXG4gICAgICAgIG11dGF0aW9uRm46IGFzeW5jIChjb2xsYWJvcmF0b3JJZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IGFwaS5kZWxldGUoXHJcbiAgICAgICAgICAgICAgICBgL3RvZG9zLyR7dG9kb0xpc3RJZH0vY29sbGFib3JhdG9ycy8ke2NvbGxhYm9yYXRvcklkfWBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uU3VjY2VzczogKCkgPT4ge1xyXG4gICAgICAgICAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyh7XHJcbiAgICAgICAgICAgICAgICBxdWVyeUtleTogWydjb2xsYWJvcmF0b3JzJywgdG9kb0xpc3RJZF0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWlzT3BlbikgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctYmxhY2svMzUgYmctb3BhY2l0eS01MCB6LTEwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC02IHJvdW5kZWQtbGcgdy05NlwiPlxyXG4gICAgICAgICAgICAgICAgPEltQ3Jvc3NcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNSBoLTUgaG92ZXI6ZmlsbC1yZWQtNjAwIGN1cnNvci1wb2ludGVyIGFic29sdXRlIHRvcC0zIHJpZ2h0LTNcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgINCU0L7QsdCw0LLQuNGC0Ywg0LrQvtC70LvQsNCx0L7RgNCw0YLQvtGA0LBcclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qINCk0L7RgNC80LAg0LTQvtCx0LDQstC70LXQvdC40Y8gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTIgYm9yZGVyIHJvdW5kZWQtbWQgbWItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTIgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cm9sZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSb2xlKGUudGFyZ2V0LnZhbHVlIGFzIFVTRVJfUk9MRSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZWRpdG9yXCI+0KDQtdC00LDQutGC0L7RgDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidmlld2VyXCI+0J/RgNC+0YHQvNC+0YLRgDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB5LTIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkQ29sbGFib3JhdG9yTXV0YXRpb24ubXV0YXRlKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgINCU0L7QsdCw0LLQuNGC0YxcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgbXQtNFwiPtCa0L7Qu9C70LDQsdC+0YDQsNGC0L7RgNGLOjwvaDM+XHJcbiAgICAgICAgICAgICAgICB7aXNMb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxwPtCX0LDQs9GA0YPQt9C60LAuLi48L3A+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtdC0yIHNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29sbGFib3JhdG9ycy5tYXAoKGNvbGxhYm9yYXRvcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb2xsYWJvcmF0b3IuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHAtMiBib3JkZXIgcm91bmRlZC1tZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29sbGFib3JhdG9yLmVtYWlsfSAoe2NvbGxhYm9yYXRvci5yb2xlfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQ29sbGFib3JhdG9yTXV0YXRpb24ubXV0YXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhYm9yYXRvci5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQo9C00LDQu9C40YLRjFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VNdXRhdGlvbiIsInVzZVF1ZXJ5IiwidXNlUXVlcnlDbGllbnQiLCJJbUNyb3NzIiwiYXBpIiwiVVNFUl9ST0xFIiwiQ29sbGFib3JhdG9yTW9kYWwiLCJ0b2RvTGlzdElkIiwiaXNPcGVuIiwib25DbG9zZSIsInF1ZXJ5Q2xpZW50IiwiZW1haWwiLCJzZXRFbWFpbCIsInJvbGUiLCJzZXRSb2xlIiwiVklFV0VSIiwiZGF0YSIsImNvbGxhYm9yYXRvcnMiLCJpc0xvYWRpbmciLCJxdWVyeUtleSIsInF1ZXJ5Rm4iLCJyZXNwb25zZSIsImdldCIsImFkZENvbGxhYm9yYXRvck11dGF0aW9uIiwibXV0YXRpb25GbiIsInBvc3QiLCJvblN1Y2Nlc3MiLCJpbnZhbGlkYXRlUXVlcmllcyIsIkFETUlOIiwicmVtb3ZlQ29sbGFib3JhdG9yTXV0YXRpb24iLCJjb2xsYWJvcmF0b3JJZCIsImRlbGV0ZSIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJoMiIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJzZWxlY3QiLCJvcHRpb24iLCJidXR0b24iLCJtdXRhdGUiLCJoMyIsInAiLCJ1bCIsIm1hcCIsImNvbGxhYm9yYXRvciIsImxpIiwic3BhbiIsImlkIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/CollaboratorModal.tsx\n"));

/***/ })

});