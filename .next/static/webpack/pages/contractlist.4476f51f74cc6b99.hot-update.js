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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_assert_this_initialized.mjs */ \"./node_modules/@swc/helpers/src/_assert_this_initialized.mjs\");\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ethereum_contract__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ethereum/contract */ \"./ethereum/contract.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar ContractList = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(ContractList, Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(ContractList);\n    function ContractList() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(this, ContractList);\n        var _this;\n        _this = _super.apply(this, arguments);\n        var _this1 = (0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(_this);\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(_this), \"onSubmit\", function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(function(event) {\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(this, function(_state) {\n                    event.preventDefault();\n                    _routes__WEBPACK_IMPORTED_MODULE_4__.Router.pushRoute(\"/contractlist/\".concat(_this1.props.entity, \"/\").concat(_this1.props.isCompany, \"/new\"));\n                    return [\n                        2\n                    ];\n                });\n            });\n            return function(event) {\n                return _ref.apply(this, arguments);\n            };\n        }());\n        return _this;\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_14__[\"default\"])(ContractList, [\n        {\n            key: \"renderCardGroup\",\n            value: function renderCardGroup() {\n                var _this = this;\n                console.log(this.props.users);\n                var items = this.props.users.map(function(address) {\n                    return {\n                        header: address,\n                        description: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {\n                            route: \"/contractlist/\".concat(_this.props.entity, \"/\").concat(_this.props.isCompany, \"/\").concat(address),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"View Contract\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adithyahnair/capstone/pages/contractlist/index.js\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/adithyahnair/capstone/pages/contractlist/index.js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, _this),\n                        fluid: true\n                    };\n                });\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.Card.Group, {\n                    items: items\n                }, void 0, false, {\n                    fileName: \"/Users/adithyahnair/capstone/pages/contractlist/index.js\",\n                    lineNumber: 64,\n                    columnNumber: 12\n                }, this);\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    children: [\n                        this.props.isCompany === \"true\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.Button, {\n                            onClick: this.onSubmit,\n                            content: \"Create Contract\",\n                            primary: true,\n                            icon: \"plus\",\n                            floated: \"right\"\n                        }, void 0, false, {\n                            fileName: \"/Users/adithyahnair/capstone/pages/contractlist/index.js\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this) : null,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Contract List\"\n                        }, void 0, false, {\n                            fileName: \"/Users/adithyahnair/capstone/pages/contractlist/index.js\",\n                            lineNumber: 78,\n                            columnNumber: 9\n                        }, this),\n                        this.renderCardGroup()\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/adithyahnair/capstone/pages/contractlist/index.js\",\n                    lineNumber: 68,\n                    columnNumber: 7\n                }, this);\n            }\n        }\n    ], [\n        {\n            key: \"getInitialProps\",\n            value: function getInitialProps(props) {\n                return (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(function() {\n                    var contracts, isCompany, entity, users, i, contract, summary, values;\n                    return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(this, function(_state) {\n                        switch(_state.label){\n                            case 0:\n                                return [\n                                    4,\n                                    _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.getDeployedContracts().call()\n                                ];\n                            case 1:\n                                contracts = _state.sent();\n                                isCompany = props.query.isCompany;\n                                entity = props.query.entity;\n                                users = [];\n                                i = 0;\n                                _state.label = 2;\n                            case 2:\n                                if (!(i < contracts.length)) return [\n                                    3,\n                                    5\n                                ];\n                                contract = (0,_ethereum_contract__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(contracts[i]);\n                                return [\n                                    4,\n                                    contract.methods.getSummary().call()\n                                ];\n                            case 3:\n                                summary = _state.sent();\n                                values = [\n                                    _ethereum_web3__WEBPACK_IMPORTED_MODULE_6__[\"default\"].utils.toChecksumAddress(summary[0]),\n                                    _ethereum_web3__WEBPACK_IMPORTED_MODULE_6__[\"default\"].utils.toChecksumAddress(summary[1]),\n                                    _ethereum_web3__WEBPACK_IMPORTED_MODULE_6__[\"default\"].utils.toChecksumAddress(summary[2]),\n                                    _ethereum_web3__WEBPACK_IMPORTED_MODULE_6__[\"default\"].utils.toChecksumAddress(summary[3]),\n                                    _ethereum_web3__WEBPACK_IMPORTED_MODULE_6__[\"default\"].utils.toChecksumAddress(summary[4]),\n                                    _ethereum_web3__WEBPACK_IMPORTED_MODULE_6__[\"default\"].utils.toChecksumAddress(summary[5])\n                                ];\n                                console.log(values[0]);\n                                if (entity == values[0] || entity == values[1] || entity == values[2] || entity == values[3] || entity == values[4] || entity == values[5]) {\n                                    users.push(contract);\n                                    console.log(\"Contract has been pushed\");\n                                }\n                                _state.label = 4;\n                            case 4:\n                                i++;\n                                return [\n                                    3,\n                                    2\n                                ];\n                            case 5:\n                                return [\n                                    2,\n                                    {\n                                        isCompany: isCompany,\n                                        entity: entity,\n                                        users: users\n                                    }\n                                ];\n                        }\n                    });\n                })();\n            }\n        }\n    ]);\n    return ContractList;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContractList);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxDQUFDWCxRQUFRLENBQUMsQ0FBQztvQ0FDckJ0QixPQUFPLENBQUNDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO2dDQUMxQyxDQUFDOzs7Z0NBdEJtQ29CLENBQUMsRUFBRTs7Ozs7O2dDQXdCekM7O29DQUFPO3dDQUFFdkIsU0FBUyxFQUFUQSxTQUFTO3dDQUFFRCxNQUFNLEVBQU5BLE1BQU07d0NBQUVLLEtBQUssRUFBTEEsS0FBSztxQ0FBRTtrQ0FBQzs7O2dCQUN0QyxDQUFDO2FBQUE7OztXQS9CR1gsWUFBWTtDQTBFakIsQ0ExRTBCVCw0Q0FBUyxDQTBFbkM7QUFFRCwrREFBZVMsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbnRyYWN0bGlzdC9pbmRleC5qcz9mN2U0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBDYXJkLCBCdXR0b24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBmYWN0b3J5IGZyb20gXCIuLi8uLi9ldGhlcmV1bS9mYWN0b3J5XCI7XG5pbXBvcnQgeyBSb3V0ZXIsIExpbmsgfSBmcm9tIFwiLi4vLi4vcm91dGVzXCI7XG5pbXBvcnQgQ29udHJhY3QgZnJvbSBcIi4uLy4uL2V0aGVyZXVtL2NvbnRyYWN0XCI7XG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vLi4vZXRoZXJldW0vd2ViM1wiO1xuXG5jbGFzcyBDb250cmFjdExpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKSB7XG4gICAgY29uc3QgY29udHJhY3RzID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkQ29udHJhY3RzKCkuY2FsbCgpO1xuICAgIGNvbnN0IGlzQ29tcGFueSA9IHByb3BzLnF1ZXJ5LmlzQ29tcGFueTtcbiAgICBjb25zdCBlbnRpdHkgPSBwcm9wcy5xdWVyeS5lbnRpdHk7XG4gICAgdmFyIHVzZXJzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb250cmFjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvbnRyYWN0ID0gQ29udHJhY3QoY29udHJhY3RzW2ldKTtcbiAgICAgIGNvbnN0IHN1bW1hcnkgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLmdldFN1bW1hcnkoKS5jYWxsKCk7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBbXG4gICAgICAgIHdlYjMudXRpbHMudG9DaGVja3N1bUFkZHJlc3Moc3VtbWFyeVswXSksXG4gICAgICAgIHdlYjMudXRpbHMudG9DaGVja3N1bUFkZHJlc3Moc3VtbWFyeVsxXSksXG4gICAgICAgIHdlYjMudXRpbHMudG9DaGVja3N1bUFkZHJlc3Moc3VtbWFyeVsyXSksXG4gICAgICAgIHdlYjMudXRpbHMudG9DaGVja3N1bUFkZHJlc3Moc3VtbWFyeVszXSksXG4gICAgICAgIHdlYjMudXRpbHMudG9DaGVja3N1bUFkZHJlc3Moc3VtbWFyeVs0XSksXG4gICAgICAgIHdlYjMudXRpbHMudG9DaGVja3N1bUFkZHJlc3Moc3VtbWFyeVs1XSksXG4gICAgICBdO1xuICAgICAgY29uc29sZS5sb2codmFsdWVzWzBdKTtcbiAgICAgIGlmIChcbiAgICAgICAgZW50aXR5ID09IHZhbHVlc1swXSB8fFxuICAgICAgICBlbnRpdHkgPT0gdmFsdWVzWzFdIHx8XG4gICAgICAgIGVudGl0eSA9PSB2YWx1ZXNbMl0gfHxcbiAgICAgICAgZW50aXR5ID09IHZhbHVlc1szXSB8fFxuICAgICAgICBlbnRpdHkgPT0gdmFsdWVzWzRdIHx8XG4gICAgICAgIGVudGl0eSA9PSB2YWx1ZXNbNV1cbiAgICAgICkge1xuICAgICAgICB1c2Vycy5wdXNoKGNvbnRyYWN0KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJDb250cmFjdCBoYXMgYmVlbiBwdXNoZWRcIik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IGlzQ29tcGFueSwgZW50aXR5LCB1c2VycyB9O1xuICB9XG5cbiAgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFJvdXRlci5wdXNoUm91dGUoXG4gICAgICBgL2NvbnRyYWN0bGlzdC8ke3RoaXMucHJvcHMuZW50aXR5fS8ke3RoaXMucHJvcHMuaXNDb21wYW55fS9uZXdgXG4gICAgKTtcbiAgfTtcblxuICByZW5kZXJDYXJkR3JvdXAoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy51c2Vycyk7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLnByb3BzLnVzZXJzLm1hcCgoYWRkcmVzcykgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGVhZGVyOiBhZGRyZXNzLFxuICAgICAgICBkZXNjcmlwdGlvbjogKFxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICByb3V0ZT17YC9jb250cmFjdGxpc3QvJHt0aGlzLnByb3BzLmVudGl0eX0vJHt0aGlzLnByb3BzLmlzQ29tcGFueX0vJHthZGRyZXNzfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGE+VmlldyBDb250cmFjdDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICksXG4gICAgICAgIGZsdWlkOiB0cnVlLFxuICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfSAvPjtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIHt0aGlzLnByb3BzLmlzQ29tcGFueSA9PT0gXCJ0cnVlXCIgPyAoXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblN1Ym1pdH1cbiAgICAgICAgICAgIGNvbnRlbnQ9XCJDcmVhdGUgQ29udHJhY3RcIlxuICAgICAgICAgICAgcHJpbWFyeVxuICAgICAgICAgICAgaWNvbj1cInBsdXNcIlxuICAgICAgICAgICAgZmxvYXRlZD1cInJpZ2h0XCJcbiAgICAgICAgICAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPGgyPkNvbnRyYWN0IExpc3Q8L2gyPlxuICAgICAgICB7dGhpcy5yZW5kZXJDYXJkR3JvdXAoKX1cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udHJhY3RMaXN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQ2FyZCIsIkJ1dHRvbiIsImZhY3RvcnkiLCJSb3V0ZXIiLCJMaW5rIiwiQ29udHJhY3QiLCJ3ZWIzIiwiQ29udHJhY3RMaXN0Iiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicHVzaFJvdXRlIiwicHJvcHMiLCJlbnRpdHkiLCJpc0NvbXBhbnkiLCJyZW5kZXJDYXJkR3JvdXAiLCJjb25zb2xlIiwibG9nIiwidXNlcnMiLCJpdGVtcyIsIm1hcCIsImFkZHJlc3MiLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsInJvdXRlIiwiYSIsImZsdWlkIiwiR3JvdXAiLCJyZW5kZXIiLCJvbkNsaWNrIiwiY29udGVudCIsInByaW1hcnkiLCJpY29uIiwiZmxvYXRlZCIsImgyIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udHJhY3RzIiwiaSIsImNvbnRyYWN0Iiwic3VtbWFyeSIsInZhbHVlcyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENvbnRyYWN0cyIsImNhbGwiLCJxdWVyeSIsImxlbmd0aCIsImdldFN1bW1hcnkiLCJ1dGlscyIsInRvQ2hlY2tzdW1BZGRyZXNzIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/contractlist/index.js\n"));

/***/ })

});