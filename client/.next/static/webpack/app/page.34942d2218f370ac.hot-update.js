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

/***/ "(app-pages-browser)/./src/components/TodoCard.tsx":
/*!*************************************!*\
  !*** ./src/components/TodoCard.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useTodos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useTodos */ \"(app-pages-browser)/./src/hooks/useTodos.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nconst TodoCard = (param)=>{\n    let { id, name, ownerId, tasks } = param;\n    _s();\n    const { addTask, deleteTask, updateTaskStatus } = (0,_hooks_useTodos__WEBPACK_IMPORTED_MODULE_2__.useTodos)();\n    const [newTaskTitle, setNewTaskTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [newTaskDescription, setNewTaskDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const handleAddTask = ()=>{\n        if (!newTaskTitle.trim()) return;\n        addTask({\n            title: newTaskTitle,\n            description: newTaskDescription,\n            status: false,\n            listId: id\n        });\n        setNewTaskTitle('');\n        setNewTaskDescription('');\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white shadow-lg rounded-xl p-5 w-full max-w-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-xl font-bold mb-2\",\n                children: name\n            }, void 0, false, {\n                fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\TodoCard.tsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"space-y-2\",\n                children: tasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"p-3 rounded-lg border flex justify-between items-center \".concat(task.status ? 'border-green-500 bg-green-100' : 'border-gray-300'),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-3 items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"text-green-600 hover:text-green-800\",\n                                        onClick: ()=>updateTaskStatus({\n                                                taskId: task.id,\n                                                status: !task.status\n                                            }),\n                                        children: task.status ? '✅' : '⬜'\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\TodoCard.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"font-semibold\",\n                                                children: task.title\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\TodoCard.tsx\",\n                                                lineNumber: 60,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-sm text-gray-600\",\n                                                children: task.description\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\TodoCard.tsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 33\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\TodoCard.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\TodoCard.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"text-red-600 hover:text-red-900 cursor-pointer\",\n                                    onClick: ()=>deleteTask(task.id),\n                                    children: \"❌\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\TodoCard.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\TodoCard.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, task.id, true, {\n                        fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\TodoCard.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\TodoCard.tsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Название задачи\",\n                        value: newTaskTitle,\n                        onChange: (e)=>setNewTaskTitle(e.target.value),\n                        className: \"border p-2 w-full rounded-md mb-2\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\TodoCard.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Описание\",\n                        value: newTaskDescription,\n                        onChange: (e)=>setNewTaskDescription(e.target.value),\n                        className: \"border p-2 w-full rounded-md mb-2\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\TodoCard.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleAddTask,\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded-lg w-full\",\n                        children: \"Добавить задачу\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\TodoCard.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\TodoCard.tsx\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Applications\\\\Projects\\\\Next\\\\todo-app\\\\client\\\\src\\\\components\\\\TodoCard.tsx\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, undefined);\n};\n_s(TodoCard, \"IslF+2fcEbVit40Zzb+0VwQlLJ0=\", false, function() {\n    return [\n        _hooks_useTodos__WEBPACK_IMPORTED_MODULE_2__.useTodos\n    ];\n});\n_c = TodoCard;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoCard);\nvar _c;\n$RefreshReg$(_c, \"TodoCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1RvZG9DYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXdDO0FBQ0k7QUFnQjVDLE1BQU1HLFdBQW9DO1FBQUMsRUFBRUMsRUFBRSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsS0FBSyxFQUFFOztJQUNuRSxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFQyxnQkFBZ0IsRUFBRSxHQUFHUix5REFBUUE7SUFDMUQsTUFBTSxDQUFDUyxjQUFjQyxnQkFBZ0IsR0FBR1gsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDWSxvQkFBb0JDLHNCQUFzQixHQUFHYiwrQ0FBUUEsQ0FBQztJQUU3RCxNQUFNYyxnQkFBZ0I7UUFDbEIsSUFBSSxDQUFDSixhQUFhSyxJQUFJLElBQUk7UUFDMUJSLFFBQVE7WUFDSlMsT0FBT047WUFDUE8sYUFBYUw7WUFDYk0sUUFBUTtZQUNSQyxRQUFRaEI7UUFDWjtRQUNBUSxnQkFBZ0I7UUFDaEJFLHNCQUFzQjtJQUMxQjtJQUVBLHFCQUNJLDhEQUFDTztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQTBCakI7Ozs7OzswQkFFeEMsOERBQUNtQjtnQkFBR0YsV0FBVTswQkFDVGYsTUFBTWtCLEdBQUcsQ0FBQyxDQUFDQyxxQkFDUiw4REFBQ0M7d0JBRUdMLFdBQVcsMkRBSVYsT0FIR0ksS0FBS1AsTUFBTSxHQUNMLGtDQUNBOzswQ0FFViw4REFBQ0U7Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDTTt3Q0FDR04sV0FBVTt3Q0FDVk8sU0FBUyxJQUNMbkIsaUJBQWlCO2dEQUNib0IsUUFBUUosS0FBS3RCLEVBQUU7Z0RBQ2ZlLFFBQVEsQ0FBQ08sS0FBS1AsTUFBTTs0Q0FDeEI7a0RBRUhPLEtBQUtQLE1BQU0sR0FBRyxNQUFNOzs7Ozs7a0RBRXpCLDhEQUFDRTs7MERBQ0csOERBQUNVO2dEQUFHVCxXQUFVOzBEQUFpQkksS0FBS1QsS0FBSzs7Ozs7OzBEQUN6Qyw4REFBQ2U7Z0RBQUVWLFdBQVU7MERBQ1JJLEtBQUtSLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FJN0IsOERBQUNHO2dDQUFJQyxXQUFVOzBDQUNYLDRFQUFDTTtvQ0FDR04sV0FBVTtvQ0FDVk8sU0FBUyxJQUFNcEIsV0FBV2lCLEtBQUt0QixFQUFFOzhDQUFHOzs7Ozs7Ozs7Ozs7dUJBM0J2Q3NCLEtBQUt0QixFQUFFOzs7Ozs7Ozs7OzBCQW1DeEIsOERBQUNpQjtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNXO3dCQUNHQyxNQUFLO3dCQUNMQyxhQUFZO3dCQUNaQyxPQUFPekI7d0JBQ1AwQixVQUFVLENBQUNDLElBQU0xQixnQkFBZ0IwQixFQUFFQyxNQUFNLENBQUNILEtBQUs7d0JBQy9DZCxXQUFVOzs7Ozs7a0NBRWQsOERBQUNXO3dCQUNHQyxNQUFLO3dCQUNMQyxhQUFZO3dCQUNaQyxPQUFPdkI7d0JBQ1B3QixVQUFVLENBQUNDLElBQU14QixzQkFBc0J3QixFQUFFQyxNQUFNLENBQUNILEtBQUs7d0JBQ3JEZCxXQUFVOzs7Ozs7a0NBRWQsOERBQUNNO3dCQUNHQyxTQUFTZDt3QkFDVE8sV0FBVTtrQ0FBcUQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1uRjtHQWxGTW5COztRQUNnREQscURBQVFBOzs7S0FEeERDO0FBb0ZOLGlFQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJDOlxcQXBwbGljYXRpb25zXFxQcm9qZWN0c1xcTmV4dFxcdG9kby1hcHBcXGNsaWVudFxcc3JjXFxjb21wb25lbnRzXFxUb2RvQ2FyZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VUb2RvcyB9IGZyb20gJ0AvaG9va3MvdXNlVG9kb3MnO1xyXG5cclxuaW50ZXJmYWNlIFRhc2sge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgc3RhdHVzOiBib29sZWFuO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVG9kb0NhcmRQcm9wcyB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgb3duZXJJZDogc3RyaW5nO1xyXG4gICAgdGFza3M6IFRhc2tbXTtcclxufVxyXG5cclxuY29uc3QgVG9kb0NhcmQ6IFJlYWN0LkZDPFRvZG9DYXJkUHJvcHM+ID0gKHsgaWQsIG5hbWUsIG93bmVySWQsIHRhc2tzIH0pID0+IHtcclxuICAgIGNvbnN0IHsgYWRkVGFzaywgZGVsZXRlVGFzaywgdXBkYXRlVGFza1N0YXR1cyB9ID0gdXNlVG9kb3MoKTtcclxuICAgIGNvbnN0IFtuZXdUYXNrVGl0bGUsIHNldE5ld1Rhc2tUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbmV3VGFza0Rlc2NyaXB0aW9uLCBzZXROZXdUYXNrRGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUFkZFRhc2sgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFuZXdUYXNrVGl0bGUudHJpbSgpKSByZXR1cm47XHJcbiAgICAgICAgYWRkVGFzayh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBuZXdUYXNrVGl0bGUsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBuZXdUYXNrRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIHN0YXR1czogZmFsc2UsXHJcbiAgICAgICAgICAgIGxpc3RJZDogaWQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0TmV3VGFza1RpdGxlKCcnKTtcclxuICAgICAgICBzZXROZXdUYXNrRGVzY3JpcHRpb24oJycpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93LWxnIHJvdW5kZWQteGwgcC01IHctZnVsbCBtYXgtdy1tZFwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbWItMlwiPntuYW1lfTwvaDI+XHJcblxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XHJcbiAgICAgICAgICAgICAgICB7dGFza3MubWFwKCh0YXNrKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dGFzay5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcC0zIHJvdW5kZWQtbGcgYm9yZGVyIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5zdGF0dXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdib3JkZXItZ3JlZW4tNTAwIGJnLWdyZWVuLTEwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdib3JkZXItZ3JheS0zMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNjAwIGhvdmVyOnRleHQtZ3JlZW4tODAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVUYXNrU3RhdHVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tJZDogdGFzay5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogIXRhc2suc3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Rhc2suc3RhdHVzID8gJ+KchScgOiAn4qycJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPnt0YXNrLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YXNrLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwIGhvdmVyOnRleHQtcmVkLTkwMCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlVGFzayh0YXNrLmlkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4p2MXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQndCw0LfQstCw0L3QuNC1INC30LDQtNCw0YfQuFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld1Rhc2tUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld1Rhc2tUaXRsZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIHAtMiB3LWZ1bGwgcm91bmRlZC1tZCBtYi0yXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQntC/0LjRgdCw0L3QuNC1XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3VGFza0Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3VGFza0Rlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgcC0yIHctZnVsbCByb3VuZGVkLW1kIG1iLTJcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVBZGRUYXNrfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWQtbGcgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg0JTQvtCx0LDQstC40YLRjCDQt9Cw0LTQsNGH0YNcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvQ2FyZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VUb2RvcyIsIlRvZG9DYXJkIiwiaWQiLCJuYW1lIiwib3duZXJJZCIsInRhc2tzIiwiYWRkVGFzayIsImRlbGV0ZVRhc2siLCJ1cGRhdGVUYXNrU3RhdHVzIiwibmV3VGFza1RpdGxlIiwic2V0TmV3VGFza1RpdGxlIiwibmV3VGFza0Rlc2NyaXB0aW9uIiwic2V0TmV3VGFza0Rlc2NyaXB0aW9uIiwiaGFuZGxlQWRkVGFzayIsInRyaW0iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic3RhdHVzIiwibGlzdElkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJ1bCIsIm1hcCIsInRhc2siLCJsaSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ0YXNrSWQiLCJoMyIsInAiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/TodoCard.tsx\n"));

/***/ })

});