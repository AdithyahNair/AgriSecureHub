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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nvar ContractList = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(ContractList, Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(ContractList);\n    function ContractList() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, ContractList);\n        return _super.apply(this, arguments);\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(ContractList, [\n        {\n            key: \"renderCardGroup\",\n            value: function renderCardGroup() {\n                var items = this.props.contracts;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Card, {\n                    link: true,\n                    header: \"Rick Sanchez\",\n                    meta: \"Scientist\",\n                    description: [\n                        \"Rick is a genius scientist whose alcoholism and reckless,\",\n                        \" nihilistic behavior are a source of concern for his family.\", \n                    ].join(\"\")\n                }, void 0, false, {\n                    fileName: \"/Users/adithyahnair/capstone/pages/contractlist/index.js\",\n                    lineNumber: 16,\n                    columnNumber: 7\n                }, this);\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    children: this.renderCardGroup()\n                }, void 0, false, {\n                    fileName: \"/Users/adithyahnair/capstone/pages/contractlist/index.js\",\n                    lineNumber: 28,\n                    columnNumber: 12\n                }, this);\n            }\n        }\n    ], [\n        {\n            key: \"getInitialProps\",\n            value: function getInitialProps() {\n                return (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(function() {\n                    var contracts;\n                    return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(this, function(_state) {\n                        switch(_state.label){\n                            case 0:\n                                return [\n                                    4,\n                                    _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.getDeployedContracts().call()\n                                ];\n                            case 1:\n                                contracts = _state.sent();\n                                return [\n                                    2,\n                                    {\n                                        contracts: contracts\n                                    }\n                                ];\n                        }\n                    });\n                })();\n            }\n        }\n    ]);\n    return ContractList;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContractList);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250cmFjdGxpc3QvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7QUFBeUM7QUFDSTtBQUNKO0FBQ0k7QUFDTjtBQUV2QyxnQkFBa0IsaUJBeUJmOzs4RUF6QkdNLFlBQVk7K0ZBQVpBLFlBQVk7YUFBWkEsWUFBWTtnR0FBWkEsWUFBWTs7O2tGQUFaQSxZQUFZOztZQU1oQkMsR0FBZSxFQUFmQSxpQkFBZTttQkFBZkEsU0FBQUEsZUFBZSxHQUFHO2dCQUNoQixJQUFNQyxLQUFLLEdBQUcsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFNBQVM7Z0JBQ2xDLHFCQUNFLDhEQUFDUCxtREFBSTtvQkFDSFEsSUFBSTtvQkFDSkMsTUFBTSxFQUFDLGNBQWM7b0JBQ3JCQyxJQUFJLEVBQUMsV0FBVztvQkFDaEJDLFdBQVcsRUFBRTt3QkFDWCwyREFBMkQ7d0JBQzNELDhEQUE4RDtxQkFDL0QsQ0FBQ0MsSUFBSSxDQUFDLEVBQUUsQ0FBQzs7Ozs7d0JBQ1YsQ0FDRjtZQUNKLENBQUM7OztZQUNEQyxHQUFNLEVBQU5BLFFBQU07bUJBQU5BLFNBQUFBLE1BQU0sR0FBRztnQkFDUCxxQkFBTyw4REFBQ2QsMERBQU07OEJBQUUsSUFBSSxDQUFDSyxlQUFlLEVBQUU7Ozs7O3dCQUFVLENBQUM7WUFDbkQsQ0FBQzs7OztZQXJCWVUsR0FBZSxFQUFmQSxpQkFBZTttQkFBNUIsU0FBYUEsZUFBZTt1QkFBNUIsZ0dBQStCO3dCQUN2QlAsU0FBUzs7OztnQ0FBRzs7b0NBQU1OLHNGQUFvQyxFQUFFLENBQUNnQixJQUFJLEVBQUU7a0NBQUE7O2dDQUEvRFYsU0FBUyxHQUFHLGFBQW1EO2dDQUNyRTs7b0NBQU87d0NBQUVBLFNBQVMsRUFBVEEsU0FBUztxQ0FBRTtrQ0FBQzs7O2dCQUN2QixDQUFDO2FBQUE7OztXQUpHSixZQUFZO0NBdUJqQixDQXZCMEJMLDRDQUFTLENBdUJuQztBQUVELCtEQUFlSyxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29udHJhY3RsaXN0L2luZGV4LmpzP2Y3ZTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IENhcmQgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBmYWN0b3J5IGZyb20gXCIuLi8uLi9ldGhlcmV1bS9mYWN0b3J5XCI7XG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vLi4vZXRoZXJldW0vd2ViM1wiO1xuXG5jbGFzcyBDb250cmFjdExpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgIGNvbnN0IGNvbnRyYWN0cyA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5nZXREZXBsb3llZENvbnRyYWN0cygpLmNhbGwoKTtcbiAgICByZXR1cm4geyBjb250cmFjdHMgfTtcbiAgfVxuXG4gIHJlbmRlckNhcmRHcm91cCgpIHtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMucHJvcHMuY29udHJhY3RzO1xuICAgIHJldHVybiAoXG4gICAgICA8Q2FyZFxuICAgICAgICBsaW5rXG4gICAgICAgIGhlYWRlcj1cIlJpY2sgU2FuY2hlelwiXG4gICAgICAgIG1ldGE9XCJTY2llbnRpc3RcIlxuICAgICAgICBkZXNjcmlwdGlvbj17W1xuICAgICAgICAgIFwiUmljayBpcyBhIGdlbml1cyBzY2llbnRpc3Qgd2hvc2UgYWxjb2hvbGlzbSBhbmQgcmVja2xlc3MsXCIsXG4gICAgICAgICAgXCIgbmloaWxpc3RpYyBiZWhhdmlvciBhcmUgYSBzb3VyY2Ugb2YgY29uY2VybiBmb3IgaGlzIGZhbWlseS5cIixcbiAgICAgICAgXS5qb2luKFwiXCIpfVxuICAgICAgLz5cbiAgICApO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPExheW91dD57dGhpcy5yZW5kZXJDYXJkR3JvdXAoKX08L0xheW91dD47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udHJhY3RMaXN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQ2FyZCIsImZhY3RvcnkiLCJ3ZWIzIiwiQ29udHJhY3RMaXN0IiwicmVuZGVyQ2FyZEdyb3VwIiwiaXRlbXMiLCJwcm9wcyIsImNvbnRyYWN0cyIsImxpbmsiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJqb2luIiwicmVuZGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwibWV0aG9kcyIsImdldERlcGxveWVkQ29udHJhY3RzIiwiY2FsbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/contractlist/index.js\n"));

/***/ })

});