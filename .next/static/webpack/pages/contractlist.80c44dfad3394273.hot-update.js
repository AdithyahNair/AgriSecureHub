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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_assert_this_initialized.mjs */ \"./node_modules/@swc/helpers/src/_assert_this_initialized.mjs\");\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ethereum_contract__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ethereum/contract */ \"./ethereum/contract.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar ContractList = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(ContractList, Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(ContractList);\n    function ContractList() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(this, ContractList);\n        var _this;\n        _this = _super.apply(this, arguments);\n        var _this1 = (0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(_this);\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(_this), \"onSubmit\", function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(function(event) {\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(this, function(_state) {\n                    event.preventDefault();\n                    _routes__WEBPACK_IMPORTED_MODULE_4__.Router.pushRoute(\"/contractlist/\".concat(_this1.props.entity, \"/\").concat(_this1.props.isCompany, \"/new\"));\n                    return [\n                        2\n                    ];\n                });\n            });\n            return function(event) {\n                return _ref.apply(this, arguments);\n            };\n        }());\n        return _this;\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_14__[\"default\"])(ContractList, [\n        {\n            key: \"renderCardGroup\",\n            value: function renderCardGroup() {\n                var _this = this;\n                var items = this.props.users.map(function(address) {\n                    return {\n                        header: address,\n                        description: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {\n                            route: \"/contractlist/\".concat(_this.props.entity, \"/\").concat(_this.props.isCompany, \"/\").concat(address),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"View Contract\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adithyahnair/capstone/pages/contractlist/index.js\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/adithyahnair/capstone/pages/contractlist/index.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, _this),\n                        fluid: true\n                    };\n                });\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.Card.Group, {\n                    items: items\n                }, void 0, false, {\n                    fileName: \"/Users/adithyahnair/capstone/pages/contractlist/index.js\",\n                    lineNumber: 51,\n                    columnNumber: 12\n                }, this);\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    children: [\n                        this.props.isCompany === \"true\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.Button, {\n                            onClick: this.onSubmit,\n                            content: \"Create Contract\",\n                            primary: true,\n                            icon: \"plus\",\n                            floated: \"right\"\n                        }, void 0, false, {\n                            fileName: \"/Users/adithyahnair/capstone/pages/contractlist/index.js\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this) : null,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Contract List\"\n                        }, void 0, false, {\n                            fileName: \"/Users/adithyahnair/capstone/pages/contractlist/index.js\",\n                            lineNumber: 65,\n                            columnNumber: 9\n                        }, this),\n                        this.renderCardGroup()\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/adithyahnair/capstone/pages/contractlist/index.js\",\n                    lineNumber: 55,\n                    columnNumber: 7\n                }, this);\n            }\n        }\n    ], [\n        {\n            key: \"getInitialProps\",\n            value: function getInitialProps(props) {\n                return (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(function() {\n                    var contracts, isCompany, entity, users, i, contract, summary, stringSummary;\n                    return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(this, function(_state) {\n                        switch(_state.label){\n                            case 0:\n                                return [\n                                    4,\n                                    _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.getDeployedContracts().call()\n                                ];\n                            case 1:\n                                contracts = _state.sent();\n                                isCompany = props.query.isCompany;\n                                entity = props.query.entity;\n                                users = [];\n                                i = 0;\n                                _state.label = 2;\n                            case 2:\n                                if (!(i < contracts.length)) return [\n                                    3,\n                                    5\n                                ];\n                                contract = (0,_ethereum_contract__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(contracts[i]);\n                                return [\n                                    4,\n                                    contract.methods.getSummary().call()\n                                ];\n                            case 3:\n                                summary = _state.sent();\n                                stringSummary = summary.map(function(address) {\n                                    return _ethereum_web3__WEBPACK_IMPORTED_MODULE_6__[\"default\"].utils.toUtf8(address);\n                                });\n                                console.log(stringSummary);\n                                if (stringSummary.includes(entity)) {\n                                    users.push(contract);\n                                    console.log(\"Contract has been pushed\");\n                                }\n                                _state.label = 4;\n                            case 4:\n                                i++;\n                                return [\n                                    3,\n                                    2\n                                ];\n                            case 5:\n                                return [\n                                    2,\n                                    {\n                                        isCompany: isCompany,\n                                        entity: entity,\n                                        users: users\n                                    }\n                                ];\n                        }\n                    });\n                })();\n            }\n        }\n    ]);\n    return ContractList;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContractList);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsR0FBR0QsU0FBUyxDQUFDUyxNQUFNOzs7O2dDQUM1QlAsUUFBUSxHQUFHL0IsOERBQVEsQ0FBQzZCLFNBQVMsQ0FBQ0MsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDeEI7O29DQUFNQyxRQUFRLENBQUNHLE9BQU8sQ0FBQ0ssVUFBVSxFQUFFLENBQUNILElBQUksRUFBRTtrQ0FBQTs7Z0NBQXBESixPQUFPLEdBQUcsYUFBMEM7Z0NBQ3BEQyxhQUFhLEdBQUdELE9BQU8sQ0FBQ25CLEdBQUcsQ0FBQyxTQUFDQyxPQUFPLEVBQUs7b0NBQzdDLE9BQU9iLG1FQUFpQixDQUFDYSxPQUFPLENBQUMsQ0FBQztnQ0FDcEMsQ0FBQyxDQUFDLENBQUM7Z0NBQ0g0QixPQUFPLENBQUNDLEdBQUcsQ0FBQ1YsYUFBYSxDQUFDLENBQUM7Z0NBQzNCLElBQUlBLGFBQWEsQ0FBQ1csUUFBUSxDQUFDcEMsTUFBTSxDQUFDLEVBQUU7b0NBQ2xDSSxLQUFLLENBQUNpQyxJQUFJLENBQUNkLFFBQVEsQ0FBQyxDQUFDO29DQUNyQlcsT0FBTyxDQUFDQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztnQ0FDMUMsQ0FBQzs7O2dDQVZtQ2IsQ0FBQyxFQUFFOzs7Ozs7Z0NBWXpDOztvQ0FBTzt3Q0FBRXJCLFNBQVMsRUFBVEEsU0FBUzt3Q0FBRUQsTUFBTSxFQUFOQSxNQUFNO3dDQUFFSSxLQUFLLEVBQUxBLEtBQUs7cUNBQUU7a0NBQUM7OztnQkFDdEMsQ0FBQzthQUFBOzs7V0FuQkdWLFlBQVk7Q0E2RGpCLENBN0QwQlQsNENBQVMsQ0E2RG5DO0FBRUQsK0RBQWVTLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb250cmFjdGxpc3QvaW5kZXguanM/ZjdlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHsgQ2FyZCwgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgZmFjdG9yeSBmcm9tIFwiLi4vLi4vZXRoZXJldW0vZmFjdG9yeVwiO1xuaW1wb3J0IHsgUm91dGVyLCBMaW5rIH0gZnJvbSBcIi4uLy4uL3JvdXRlc1wiO1xuaW1wb3J0IENvbnRyYWN0IGZyb20gXCIuLi8uLi9ldGhlcmV1bS9jb250cmFjdFwiO1xuaW1wb3J0IHdlYjMgZnJvbSBcIi4uLy4uL2V0aGVyZXVtL3dlYjNcIjtcblxuY2xhc3MgQ29udHJhY3RMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xuICAgIGNvbnN0IGNvbnRyYWN0cyA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5nZXREZXBsb3llZENvbnRyYWN0cygpLmNhbGwoKTtcbiAgICBjb25zdCBpc0NvbXBhbnkgPSBwcm9wcy5xdWVyeS5pc0NvbXBhbnk7XG4gICAgY29uc3QgZW50aXR5ID0gcHJvcHMucXVlcnkuZW50aXR5O1xuICAgIGNvbnN0IHVzZXJzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb250cmFjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvbnRyYWN0ID0gQ29udHJhY3QoY29udHJhY3RzW2ldKTtcbiAgICAgIGNvbnN0IHN1bW1hcnkgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLmdldFN1bW1hcnkoKS5jYWxsKCk7XG4gICAgICBjb25zdCBzdHJpbmdTdW1tYXJ5ID0gc3VtbWFyeS5tYXAoKGFkZHJlc3MpID0+IHtcbiAgICAgICAgcmV0dXJuIHdlYjMudXRpbHMudG9VdGY4KGFkZHJlc3MpO1xuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhzdHJpbmdTdW1tYXJ5KTtcbiAgICAgIGlmIChzdHJpbmdTdW1tYXJ5LmluY2x1ZGVzKGVudGl0eSkpIHtcbiAgICAgICAgdXNlcnMucHVzaChjb250cmFjdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ29udHJhY3QgaGFzIGJlZW4gcHVzaGVkXCIpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBpc0NvbXBhbnksIGVudGl0eSwgdXNlcnMgfTtcbiAgfVxuXG4gIG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBSb3V0ZXIucHVzaFJvdXRlKFxuICAgICAgYC9jb250cmFjdGxpc3QvJHt0aGlzLnByb3BzLmVudGl0eX0vJHt0aGlzLnByb3BzLmlzQ29tcGFueX0vbmV3YFxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyQ2FyZEdyb3VwKCkge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5wcm9wcy51c2Vycy5tYXAoKGFkZHJlc3MpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhlYWRlcjogYWRkcmVzcyxcbiAgICAgICAgZGVzY3JpcHRpb246IChcbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgcm91dGU9e2AvY29udHJhY3RsaXN0LyR7dGhpcy5wcm9wcy5lbnRpdHl9LyR7dGhpcy5wcm9wcy5pc0NvbXBhbnl9LyR7YWRkcmVzc31gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxhPlZpZXcgQ29udHJhY3Q8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApLFxuICAgICAgICBmbHVpZDogdHJ1ZSxcbiAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICB7dGhpcy5wcm9wcy5pc0NvbXBhbnkgPT09IFwidHJ1ZVwiID8gKFxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25TdWJtaXR9XG4gICAgICAgICAgICBjb250ZW50PVwiQ3JlYXRlIENvbnRyYWN0XCJcbiAgICAgICAgICAgIHByaW1hcnlcbiAgICAgICAgICAgIGljb249XCJwbHVzXCJcbiAgICAgICAgICAgIGZsb2F0ZWQ9XCJyaWdodFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDxoMj5Db250cmFjdCBMaXN0PC9oMj5cbiAgICAgICAge3RoaXMucmVuZGVyQ2FyZEdyb3VwKCl9XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyYWN0TGlzdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkNhcmQiLCJCdXR0b24iLCJmYWN0b3J5IiwiUm91dGVyIiwiTGluayIsIkNvbnRyYWN0Iiwid2ViMyIsIkNvbnRyYWN0TGlzdCIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2hSb3V0ZSIsInByb3BzIiwiZW50aXR5IiwiaXNDb21wYW55IiwicmVuZGVyQ2FyZEdyb3VwIiwiaXRlbXMiLCJ1c2VycyIsIm1hcCIsImFkZHJlc3MiLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsInJvdXRlIiwiYSIsImZsdWlkIiwiR3JvdXAiLCJyZW5kZXIiLCJvbkNsaWNrIiwiY29udGVudCIsInByaW1hcnkiLCJpY29uIiwiZmxvYXRlZCIsImgyIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udHJhY3RzIiwiaSIsImNvbnRyYWN0Iiwic3VtbWFyeSIsInN0cmluZ1N1bW1hcnkiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDb250cmFjdHMiLCJjYWxsIiwicXVlcnkiLCJsZW5ndGgiLCJnZXRTdW1tYXJ5IiwidXRpbHMiLCJ0b1V0ZjgiLCJjb25zb2xlIiwibG9nIiwiaW5jbHVkZXMiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/contractlist/index.js\n"));

/***/ })

});