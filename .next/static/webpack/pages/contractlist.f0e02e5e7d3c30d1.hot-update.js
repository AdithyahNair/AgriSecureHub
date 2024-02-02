"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contractlist",{

/***/ "./pages/contractlist/index.js":
/*!*************************************!*\
  !*** ./pages/contractlist/index.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nvar ContractList = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(ContractList, Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(ContractList);\n    function ContractList() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, ContractList);\n        return _super.apply(this, arguments);\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(ContractList, [\n        {\n            key: \"renderCardGroup\",\n            value: function renderCardGroup() {\n                var _this = this;\n                var items = this.props.contracts.map(function(address) {\n                    return {\n                        header: address,\n                        meta: \"Created: 2024\",\n                        description: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: \"View Contract\"\n                        }, void 0, false, {\n                            fileName: \"/Users/adithyahnair/capstone/pages/contractlist/index.js\",\n                            lineNumber: 19,\n                            columnNumber: 22\n                        }, _this),\n                        fluid: true,\n                        link: true\n                    };\n                });\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Card.Group, {\n                    items: items\n                }, void 0, false, {\n                    fileName: \"/Users/adithyahnair/capstone/pages/contractlist/index.js\",\n                    lineNumber: 24,\n                    columnNumber: 12\n                }, this);\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Contract List\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adithyahnair/capstone/pages/contractlist/index.js\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, this),\n                            this.renderCardGroup()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adithyahnair/capstone/pages/contractlist/index.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/adithyahnair/capstone/pages/contractlist/index.js\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                }, this);\n            }\n        }\n    ], [\n        {\n            key: \"getInitialProps\",\n            value: function getInitialProps() {\n                return (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(function() {\n                    var contracts;\n                    return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(this, function(_state) {\n                        switch(_state.label){\n                            case 0:\n                                return [\n                                    4,\n                                    _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.getDeployedContracts().call()\n                                ];\n                            case 1:\n                                contracts = _state.sent();\n                                console.log(contracts);\n                                return [\n                                    2,\n                                    {\n                                        contracts: contracts\n                                    }\n                                ];\n                        }\n                    });\n                })();\n            }\n        }\n    ]);\n    return ContractList;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContractList);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250cmFjdGxpc3QvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7QUFBeUM7QUFDSTtBQUNKO0FBQ0k7QUFDTjtBQUV2QyxnQkFBa0IsaUJBK0JmOzs4RUEvQkdNLFlBQVk7K0ZBQVpBLFlBQVk7YUFBWkEsWUFBWTtnR0FBWkEsWUFBWTs7O2tGQUFaQSxZQUFZOztZQU9oQkMsR0FBZSxFQUFmQSxpQkFBZTttQkFBZkEsU0FBQUEsZUFBZSxHQUFHOztnQkFDaEIsSUFBTUMsS0FBSyxHQUFHLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFDQyxPQUFPLEVBQUs7b0JBQ2xELE9BQU87d0JBQ0xDLE1BQU0sRUFBRUQsT0FBTzt3QkFDZkUsSUFBSSxFQUFFLGVBQWU7d0JBQ3JCQyxXQUFXLGdCQUFFLDhEQUFDQyxHQUFDO3NDQUFDLGVBQWE7Ozs7O2lDQUFJO3dCQUNqQ0MsS0FBSyxFQUFFLElBQUk7d0JBQ1hDLElBQUksRUFBRSxJQUFJO3FCQUNYLENBQUM7Z0JBQ0osQ0FBQyxDQUFDO2dCQUNGLHFCQUFPLDhEQUFDZix5REFBVTtvQkFBQ0ssS0FBSyxFQUFFQSxLQUFLOzs7Ozt3QkFBSSxDQUFDO1lBQ3RDLENBQUM7OztZQUNEWSxHQUFNLEVBQU5BLFFBQU07bUJBQU5BLFNBQUFBLE1BQU0sR0FBRztnQkFDUCxxQkFDRSw4REFBQ0MsS0FBRzs4QkFDRiw0RUFBQ25CLDBEQUFNOzswQ0FDTCw4REFBQ29CLElBQUU7MENBQUMsZUFBYTs7Ozs7b0NBQUs7NEJBQ3JCLElBQUksQ0FBQ2YsZUFBZSxFQUFFOzs7Ozs7NEJBQ2hCOzs7Ozt3QkFDTCxDQUNOO1lBQ0osQ0FBQzs7OztZQTNCWWdCLEdBQWUsRUFBZkEsaUJBQWU7bUJBQTVCLFNBQWFBLGVBQWU7dUJBQTVCLGdHQUErQjt3QkFDdkJiLFNBQVM7Ozs7Z0NBQUc7O29DQUFNTixzRkFBb0MsRUFBRSxDQUFDc0IsSUFBSSxFQUFFO2tDQUFBOztnQ0FBL0RoQixTQUFTLEdBQUcsYUFBbUQ7Z0NBQ3JFaUIsT0FBTyxDQUFDQyxHQUFHLENBQUNsQixTQUFTLENBQUMsQ0FBQztnQ0FDdkI7O29DQUFPO3dDQUFFQSxTQUFTLEVBQVRBLFNBQVM7cUNBQUU7a0NBQUM7OztnQkFDdkIsQ0FBQzthQUFBOzs7V0FMR0osWUFBWTtDQTZCakIsQ0E3QjBCTCw0Q0FBUyxDQTZCbkM7QUFFRCwrREFBZUssWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbnRyYWN0bGlzdC9pbmRleC5qcz9mN2U0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgZmFjdG9yeSBmcm9tIFwiLi4vLi4vZXRoZXJldW0vZmFjdG9yeVwiO1xuaW1wb3J0IHdlYjMgZnJvbSBcIi4uLy4uL2V0aGVyZXVtL3dlYjNcIjtcblxuY2xhc3MgQ29udHJhY3RMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICBjb25zdCBjb250cmFjdHMgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0RGVwbG95ZWRDb250cmFjdHMoKS5jYWxsKCk7XG4gICAgY29uc29sZS5sb2coY29udHJhY3RzKTtcbiAgICByZXR1cm4geyBjb250cmFjdHMgfTtcbiAgfVxuXG4gIHJlbmRlckNhcmRHcm91cCgpIHtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMucHJvcHMuY29udHJhY3RzLm1hcCgoYWRkcmVzcykgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGVhZGVyOiBhZGRyZXNzLFxuICAgICAgICBtZXRhOiBcIkNyZWF0ZWQ6IDIwMjRcIixcbiAgICAgICAgZGVzY3JpcHRpb246IDxhPlZpZXcgQ29udHJhY3Q8L2E+LFxuICAgICAgICBmbHVpZDogdHJ1ZSxcbiAgICAgICAgbGluazogdHJ1ZSxcbiAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgIDxoMz5Db250cmFjdCBMaXN0PC9oMz5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJDYXJkR3JvdXAoKX1cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyYWN0TGlzdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkNhcmQiLCJmYWN0b3J5Iiwid2ViMyIsIkNvbnRyYWN0TGlzdCIsInJlbmRlckNhcmRHcm91cCIsIml0ZW1zIiwicHJvcHMiLCJjb250cmFjdHMiLCJtYXAiLCJhZGRyZXNzIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwiYSIsImZsdWlkIiwibGluayIsIkdyb3VwIiwicmVuZGVyIiwiZGl2IiwiaDMiLCJnZXRJbml0aWFsUHJvcHMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDb250cmFjdHMiLCJjYWxsIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/contractlist/index.js\n"));

/***/ })

});