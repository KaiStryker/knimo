"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/wallet.tsx":
/*!*******************************!*\
  !*** ./components/wallet.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _Users_konradgnat_dev_hackathons_ethmexico_22_kmino_kmino_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_konradgnat_dev_hackathons_ethmexico_22_kmino_kmino_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_konradgnat_dev_hackathons_ethmexico_22_kmino_kmino_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var _context_appState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/appState */ \"./context/appState.tsx\");\n/* harmony import */ var _api_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/queries */ \"./api/queries.ts\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Wallet = function() {\n    _s();\n    var address = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount)().address;\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useLazyQuery)(_api_queries__WEBPACK_IMPORTED_MODULE_4__.GET_CHALLENGE), 2), getChallenge = ref[0], challengeData = ref[1];\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation)(_api_queries__WEBPACK_IMPORTED_MODULE_4__.AUTHENTICATION), 2), mutateAuth = ref1[0], authData = ref1[1];\n    var ref2 = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.useSigner)(), signer = ref2.data;\n    var ref3 = (0,_context_appState__WEBPACK_IMPORTED_MODULE_3__.useAppState)(), authToken = ref3.authToken, setAuthToken = ref3.setAuthToken;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(\"challengeData.data -> \", challengeData.data);\n        signIn();\n    }, [\n        challengeData.data\n    ]);\n    var signIn = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_Users_konradgnat_dev_hackathons_ethmexico_22_kmino_kmino_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var handleSign, response;\n            return _Users_konradgnat_dev_hackathons_ethmexico_22_kmino_kmino_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        handleSign = function() {\n                            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_Users_konradgnat_dev_hackathons_ethmexico_22_kmino_kmino_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                                var signature;\n                                return _Users_konradgnat_dev_hackathons_ethmexico_22_kmino_kmino_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                    while(1)switch(_ctx.prev = _ctx.next){\n                                        case 0:\n                                            if (!(!challengeData.data || !signer)) {\n                                                _ctx.next = 2;\n                                                break;\n                                            }\n                                            return _ctx.abrupt(\"return\");\n                                        case 2:\n                                            _ctx.next = 4;\n                                            return signer.signMessage(challengeData.data.challenge.text);\n                                        case 4:\n                                            signature = _ctx.sent;\n                                            window.sessionStorage.setItem(\"signature\", JSON.stringify({\n                                                sig: signature,\n                                                derivedVia: \"ethers.signer.signMessage\",\n                                                signedMessage: challengeData.data.challenge.text,\n                                                address: address\n                                            }));\n                                            mutateAuth({\n                                                variables: {\n                                                    request: {\n                                                        address: address,\n                                                        signature: signature\n                                                    }\n                                                }\n                                            });\n                                        case 7:\n                                        case \"end\":\n                                            return _ctx.stop();\n                                    }\n                                }, _callee);\n                            }));\n                            return function handleSign() {\n                                return _ref.apply(this, arguments);\n                            };\n                        }();\n                        _ctx.next = 3;\n                        return handleSign();\n                    case 3:\n                        response = _ctx.sent;\n                        console.log(\"response -> \", response);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function signIn() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (!authData.data) return;\n        window.sessionStorage.setItem(\"lensToken\", authData.data.authenticate.accessToken);\n        setAuthToken(true);\n        console.log(\"auth token set -> \", authData.data);\n    }, [\n        authData.data\n    ]);\n    var loginWithLens = function() {\n        if (!address) {\n            alert(\"must sign in with metamask first\");\n        }\n        console.log(\"login: address\", address);\n        getChallenge({\n            variables: {\n                request: {\n                    address: address\n                }\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Menu, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_10__.ConnectButton, {}, void 0, false, {\n                    fileName: \"/Users/konradgnat/dev/hackathons/ethmexico-22/kmino/kmino/frontend/components/wallet.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 17\n                }, _this),\n                address && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                    onClick: loginWithLens,\n                    children: \"Login to Lens\"\n                }, void 0, false, {\n                    fileName: \"/Users/konradgnat/dev/hackathons/ethmexico-22/kmino/kmino/frontend/components/wallet.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 29\n                }, _this),\n                \";\"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/konradgnat/dev/hackathons/ethmexico-22/kmino/kmino/frontend/components/wallet.tsx\",\n            lineNumber: 85,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false);\n};\n_s(Wallet, \"zyksdStNDfTnRpA2zK1Jaw9DinE=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_7__.useLazyQuery,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation,\n        wagmi__WEBPACK_IMPORTED_MODULE_5__.useSigner,\n        _context_appState__WEBPACK_IMPORTED_MODULE_3__.useAppState\n    ];\n});\n_c = Wallet;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wallet);\nvar _c;\n$RefreshReg$(_c, \"Wallet\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQU15QixhQUFhLEdBQUcsV0FBTTtRQUN4QixJQUFJLENBQUM5QixPQUFPLEVBQUU7WUFDVitCLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1NBQzdDO1FBRUR0QixPQUFPLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRVYsT0FBTyxDQUFDLENBQUM7UUFFdkNDLFlBQVksQ0FBQztZQUNYeUIsU0FBUyxFQUFFO2dCQUNUQyxPQUFPLEVBQUU7b0JBQ1AzQixPQUFPLEVBQUVBLE9BQU87aUJBQ2pCO2FBQ0Y7U0FDRixDQUFDO0tBQ0w7SUFFRCxxQkFDSTtrQkFDSSw0RUFBQ1Ysa0RBQUk7OzhCQUNELDhEQUFDQyxrRUFBYTs7Ozt5QkFBRztnQkFDaEJTLE9BQU8sa0JBQUksOERBQUNYLG9EQUFNO29CQUFDMkMsT0FBTyxFQUFFRixhQUFhOzhCQUFFLGVBQWE7Ozs7O3lCQUFTO2dCQUFDLEdBQ3ZFOzs7Ozs7aUJBQU87cUJBQ1IsQ0FDTjtDQUNKO0dBekVLL0IsTUFBTTs7UUFDWUwsNkNBQVU7UUFDUUYsd0RBQVk7UUFDbkJDLHVEQUFXO1FBQ2pCRSw0Q0FBUztRQUNFQywwREFBVzs7O0FBTDdDRyxLQUFBQSxNQUFNO0FBMkVaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy93YWxsZXQudHN4P2JhMzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlV2ViM1JlYWN0IH0gZnJvbSAnQHdlYjMtcmVhY3QvY29yZSc7XG5pbXBvcnQgeyBCdXR0b24sIEJveCwgRmxleCwgTWVudSwgTWVudUJ1dHRvbiwgTWVudUxpc3QsIE1lbnVJdGVtIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyBpbmplY3RlZCwgZm9ybWF0QWRkcmVzcyB9IGZyb20gJy4uL3V0aWxzL3dlYjMnXG5pbXBvcnQgeyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IgfSBmcm9tICdAd2ViMy1yZWFjdC9pbmplY3RlZC1jb25uZWN0b3InXG5pbXBvcnQgeyBERUZBVUxUX0NPTE9SX1NDSEVNRSB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cydcbmltcG9ydCB7IENoZXZyb25Eb3duSWNvbiB9IGZyb20gJ0BjaGFrcmEtdWkvaWNvbnMnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IHsgQ29ubmVjdEJ1dHRvbiB9IGZyb20gXCJAcmFpbmJvdy1tZS9yYWluYm93a2l0XCI7XG5pbXBvcnQgeyB1c2VMYXp5UXVlcnksIHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnXG5pbXBvcnQgeyB1c2VBY2NvdW50LCB1c2VTaWduZXIgfSBmcm9tICd3YWdtaSdcbmltcG9ydCB7IHVzZUFwcFN0YXRlIH0gZnJvbSBcIi4uL2NvbnRleHQvYXBwU3RhdGVcIjtcbmltcG9ydCB7IEdFVF9DSEFMTEVOR0UsIEFVVEhFTlRJQ0FUSU9OIH0gZnJvbSAnLi4vYXBpL3F1ZXJpZXMnO1xuXG5cbmNvbnN0IFdhbGxldCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGFkZHJlc3MgfSA9IHVzZUFjY291bnQoKTtcbiAgICBjb25zdCBbZ2V0Q2hhbGxlbmdlLCBjaGFsbGVuZ2VEYXRhXSA9IHVzZUxhenlRdWVyeShHRVRfQ0hBTExFTkdFKVxuICAgIGNvbnN0IFttdXRhdGVBdXRoLCBhdXRoRGF0YV0gPSB1c2VNdXRhdGlvbihBVVRIRU5USUNBVElPTilcbiAgICBjb25zdCB7IGRhdGE6IHNpZ25lciB9ID0gdXNlU2lnbmVyKCk7XG4gICAgY29uc3QgeyBhdXRoVG9rZW4sIHNldEF1dGhUb2tlbiB9ID0gdXNlQXBwU3RhdGUoKTtcbiAgICBcblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGFsbGVuZ2VEYXRhLmRhdGEgLT4gXCIsIGNoYWxsZW5nZURhdGEuZGF0YSk7XG4gICAgICAgIHNpZ25JbigpO1xuICAgICAgICBcbiAgICB9LCBbY2hhbGxlbmdlRGF0YS5kYXRhXSk7XG4gICAgY29uc3Qgc2lnbkluID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGhhbmRsZVNpZ24gPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWNoYWxsZW5nZURhdGEuZGF0YSB8fCAhc2lnbmVyKSByZXR1cm5cbiAgICAgICAgICAgIGNvbnN0IHNpZ25hdHVyZSA9IGF3YWl0IHNpZ25lci5zaWduTWVzc2FnZShjaGFsbGVuZ2VEYXRhLmRhdGEuY2hhbGxlbmdlLnRleHQpO1xuICAgICAgICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3NpZ25hdHVyZScsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBzaWc6IHNpZ25hdHVyZSxcbiAgICAgICAgICAgICAgICBkZXJpdmVkVmlhOiAnZXRoZXJzLnNpZ25lci5zaWduTWVzc2FnZScsXG4gICAgICAgICAgICAgICAgc2lnbmVkTWVzc2FnZTogY2hhbGxlbmdlRGF0YS5kYXRhLmNoYWxsZW5nZS50ZXh0LFxuICAgICAgICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIG11dGF0ZUF1dGgoe1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiBhZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmF0dXJlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgaGFuZGxlU2lnbigpO1xuICAgICAgICBjb25zb2xlLmxvZygncmVzcG9uc2UgLT4gJywgcmVzcG9uc2UpO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghYXV0aERhdGEuZGF0YSkgcmV0dXJuXG4gIFxuICAgICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbGVuc1Rva2VuJywgYXV0aERhdGEuZGF0YS5hdXRoZW50aWNhdGUuYWNjZXNzVG9rZW4pXG4gIFxuICAgICAgICBzZXRBdXRoVG9rZW4odHJ1ZSlcbiAgICAgICAgY29uc29sZS5sb2coJ2F1dGggdG9rZW4gc2V0IC0+ICcsIGF1dGhEYXRhLmRhdGEpO1xuICBcbiAgICAgIH0sIFthdXRoRGF0YS5kYXRhXSlcblxuICAgIGNvbnN0IGxvZ2luV2l0aExlbnMgPSAoKSA9PiB7XG4gICAgICAgIGlmICghYWRkcmVzcykge1xuICAgICAgICAgICAgYWxlcnQoJ211c3Qgc2lnbiBpbiB3aXRoIG1ldGFtYXNrIGZpcnN0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZygnbG9naW46IGFkZHJlc3MnLCBhZGRyZXNzKTtcblxuICAgICAgICBnZXRDaGFsbGVuZ2UoeyBcbiAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgIHJlcXVlc3Q6IHtcbiAgICAgICAgICAgICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPE1lbnU+XG4gICAgICAgICAgICAgICAgPENvbm5lY3RCdXR0b24gLz5cbiAgICAgICAgICAgICAgICB7YWRkcmVzcyAmJiA8QnV0dG9uIG9uQ2xpY2s9e2xvZ2luV2l0aExlbnN9PkxvZ2luIHRvIExlbnM8L0J1dHRvbj59O1xuICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdhbGxldDsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiQnV0dG9uIiwiTWVudSIsIkNvbm5lY3RCdXR0b24iLCJ1c2VMYXp5UXVlcnkiLCJ1c2VNdXRhdGlvbiIsInVzZUFjY291bnQiLCJ1c2VTaWduZXIiLCJ1c2VBcHBTdGF0ZSIsIkdFVF9DSEFMTEVOR0UiLCJBVVRIRU5USUNBVElPTiIsIldhbGxldCIsImFkZHJlc3MiLCJnZXRDaGFsbGVuZ2UiLCJjaGFsbGVuZ2VEYXRhIiwibXV0YXRlQXV0aCIsImF1dGhEYXRhIiwiZGF0YSIsInNpZ25lciIsImF1dGhUb2tlbiIsInNldEF1dGhUb2tlbiIsImNvbnNvbGUiLCJsb2ciLCJzaWduSW4iLCJoYW5kbGVTaWduIiwicmVzcG9uc2UiLCJzaWduYXR1cmUiLCJzaWduTWVzc2FnZSIsImNoYWxsZW5nZSIsInRleHQiLCJ3aW5kb3ciLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5Iiwic2lnIiwiZGVyaXZlZFZpYSIsInNpZ25lZE1lc3NhZ2UiLCJ2YXJpYWJsZXMiLCJyZXF1ZXN0IiwiYXV0aGVudGljYXRlIiwiYWNjZXNzVG9rZW4iLCJsb2dpbldpdGhMZW5zIiwiYWxlcnQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/wallet.tsx\n"));

/***/ })

});