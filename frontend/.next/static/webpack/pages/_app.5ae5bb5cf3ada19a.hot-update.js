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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _Users_konradgnat_dev_hackathons_ethmexico_22_kmino_kmino_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_konradgnat_dev_hackathons_ethmexico_22_kmino_kmino_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_konradgnat_dev_hackathons_ethmexico_22_kmino_kmino_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var _context_appState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/appState */ \"./context/appState.tsx\");\n/* harmony import */ var _api_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/queries */ \"./api/queries.ts\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Wallet = function() {\n    _s();\n    var address = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount)().address;\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useLazyQuery)(_api_queries__WEBPACK_IMPORTED_MODULE_4__.GET_CHALLENGE), 2), getChallenge = ref[0], challengeData = ref[1];\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation)(_api_queries__WEBPACK_IMPORTED_MODULE_4__.AUTHENTICATION), 2), mutateAuth = ref1[0], authData = ref1[1];\n    var ref2 = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.useSigner)(), signer = ref2.data;\n    var ref3 = (0,_context_appState__WEBPACK_IMPORTED_MODULE_3__.useAppState)(), authToken = ref3.authToken, setAuthToken = ref3.setAuthToken;\n    console.log(\"authToken -> \", authToken);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(\"challengeData.data -> \", challengeData.data);\n        signIn();\n    }, [\n        challengeData.data\n    ]);\n    var signIn = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_Users_konradgnat_dev_hackathons_ethmexico_22_kmino_kmino_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var handleSign, response;\n            return _Users_konradgnat_dev_hackathons_ethmexico_22_kmino_kmino_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        handleSign = function() {\n                            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_Users_konradgnat_dev_hackathons_ethmexico_22_kmino_kmino_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                                var signature;\n                                return _Users_konradgnat_dev_hackathons_ethmexico_22_kmino_kmino_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                    while(1)switch(_ctx.prev = _ctx.next){\n                                        case 0:\n                                            if (!(!challengeData.data || !signer)) {\n                                                _ctx.next = 2;\n                                                break;\n                                            }\n                                            return _ctx.abrupt(\"return\");\n                                        case 2:\n                                            _ctx.next = 4;\n                                            return signer.signMessage(challengeData.data.challenge.text);\n                                        case 4:\n                                            signature = _ctx.sent;\n                                            window.sessionStorage.setItem(\"signature\", JSON.stringify({\n                                                sig: signature,\n                                                derivedVia: \"ethers.signer.signMessage\",\n                                                signedMessage: challengeData.data.challenge.text,\n                                                address: address\n                                            }));\n                                            mutateAuth({\n                                                variables: {\n                                                    request: {\n                                                        address: address,\n                                                        signature: signature\n                                                    }\n                                                }\n                                            });\n                                        case 7:\n                                        case \"end\":\n                                            return _ctx.stop();\n                                    }\n                                }, _callee);\n                            }));\n                            return function handleSign() {\n                                return _ref.apply(this, arguments);\n                            };\n                        }();\n                        _ctx.next = 3;\n                        return handleSign();\n                    case 3:\n                        response = _ctx.sent;\n                        console.log(\"response -> \", response);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function signIn() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (!authData.data) return;\n        window.sessionStorage.setItem(\"lensToken\", authData.data.authenticate.accessToken);\n        setAuthToken(true);\n        console.log(\"auth token set -> \", authData.data);\n    }, [\n        authData.data\n    ]);\n    var loginWithLens = function() {\n        if (!address) {\n            alert(\"must sign in with metamask first\");\n        }\n        console.log(\"login: address\", address);\n        getChallenge({\n            variables: {\n                request: {\n                    address: address\n                }\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Menu, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_10__.ConnectButton, {}, void 0, false, {\n                    fileName: \"/Users/konradgnat/dev/hackathons/ethmexico-22/kmino/kmino/frontend/components/wallet.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 17\n                }, _this),\n                address && authToken ? \"logged in to lens\" : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                    onClick: loginWithLens,\n                    children: \"Login to Lens\"\n                }, void 0, false, {\n                    fileName: \"/Users/konradgnat/dev/hackathons/ethmexico-22/kmino/kmino/frontend/components/wallet.tsx\",\n                    lineNumber: 88,\n                    columnNumber: 63\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/konradgnat/dev/hackathons/ethmexico-22/kmino/kmino/frontend/components/wallet.tsx\",\n            lineNumber: 86,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false);\n};\n_s(Wallet, \"zyksdStNDfTnRpA2zK1Jaw9DinE=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_7__.useLazyQuery,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation,\n        wagmi__WEBPACK_IMPORTED_MODULE_5__.useSigner,\n        _context_appState__WEBPACK_IMPORTED_MODULE_3__.useAppState\n    ];\n});\n_c = Wallet;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wallet);\nvar _c;\n$RefreshReg$(_c, \"Wallet\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7S0FFbEQsRUFBRTtRQUFDRCxRQUFRLENBQUNDLElBQUk7S0FBQyxDQUFDO0lBRXJCLElBQU15QixhQUFhLEdBQUcsV0FBTTtRQUN4QixJQUFJLENBQUM5QixPQUFPLEVBQUU7WUFDVitCLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1NBQzdDO1FBRUR0QixPQUFPLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRVYsT0FBTyxDQUFDLENBQUM7UUFFdkNDLFlBQVksQ0FBQztZQUNYeUIsU0FBUyxFQUFFO2dCQUNUQyxPQUFPLEVBQUU7b0JBQ1AzQixPQUFPLEVBQUVBLE9BQU87aUJBQ2pCO2FBQ0Y7U0FDRixDQUFDO0tBQ0w7SUFFRCxxQkFDSTtrQkFDSSw0RUFBQ1Ysa0RBQUk7OzhCQUNELDhEQUFDQyxrRUFBYTs7Ozt5QkFBRztnQkFDaEJTLE9BQU8sSUFBSU8sU0FBUyxHQUFHLG1CQUFtQixpQkFBRyw4REFBQ2xCLG9EQUFNO29CQUFDMkMsT0FBTyxFQUFFRixhQUFhOzhCQUFFLGVBQWE7Ozs7O3lCQUFTOzs7Ozs7aUJBQ2pHO3FCQUNSLENBQ047Q0FDSjtHQTFFSy9CLE1BQU07O1FBQ1lMLDZDQUFVO1FBQ1FGLHdEQUFZO1FBQ25CQyx1REFBVztRQUNqQkUsNENBQVM7UUFDRUMsMERBQVc7OztBQUw3Q0csS0FBQUEsTUFBTTtBQTRFWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvd2FsbGV0LnRzeD9iYTM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVdlYjNSZWFjdCB9IGZyb20gJ0B3ZWIzLXJlYWN0L2NvcmUnO1xuaW1wb3J0IHsgQnV0dG9uLCBCb3gsIEZsZXgsIE1lbnUsIE1lbnVCdXR0b24sIE1lbnVMaXN0LCBNZW51SXRlbSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgaW5qZWN0ZWQsIGZvcm1hdEFkZHJlc3MgfSBmcm9tICcuLi91dGlscy93ZWIzJ1xuaW1wb3J0IHsgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvaW5qZWN0ZWQtY29ubmVjdG9yJ1xuaW1wb3J0IHsgREVGQVVMVF9DT0xPUl9TQ0hFTUUgfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMnXG5pbXBvcnQgeyBDaGV2cm9uRG93bkljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCB7IENvbm5lY3RCdXR0b24gfSBmcm9tIFwiQHJhaW5ib3ctbWUvcmFpbmJvd2tpdFwiO1xuaW1wb3J0IHsgdXNlTGF6eVF1ZXJ5LCB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xuaW1wb3J0IHsgdXNlQWNjb3VudCwgdXNlU2lnbmVyIH0gZnJvbSAnd2FnbWknXG5pbXBvcnQgeyB1c2VBcHBTdGF0ZSB9IGZyb20gXCIuLi9jb250ZXh0L2FwcFN0YXRlXCI7XG5pbXBvcnQgeyBHRVRfQ0hBTExFTkdFLCBBVVRIRU5USUNBVElPTiB9IGZyb20gJy4uL2FwaS9xdWVyaWVzJztcblxuXG5jb25zdCBXYWxsZXQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBhZGRyZXNzIH0gPSB1c2VBY2NvdW50KCk7XG4gICAgY29uc3QgW2dldENoYWxsZW5nZSwgY2hhbGxlbmdlRGF0YV0gPSB1c2VMYXp5UXVlcnkoR0VUX0NIQUxMRU5HRSlcbiAgICBjb25zdCBbbXV0YXRlQXV0aCwgYXV0aERhdGFdID0gdXNlTXV0YXRpb24oQVVUSEVOVElDQVRJT04pXG4gICAgY29uc3QgeyBkYXRhOiBzaWduZXIgfSA9IHVzZVNpZ25lcigpO1xuICAgIGNvbnN0IHsgYXV0aFRva2VuLCBzZXRBdXRoVG9rZW4gfSA9IHVzZUFwcFN0YXRlKCk7XG4gICAgY29uc29sZS5sb2coJ2F1dGhUb2tlbiAtPiAnLCBhdXRoVG9rZW4pO1xuICAgIFxuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNoYWxsZW5nZURhdGEuZGF0YSAtPiBcIiwgY2hhbGxlbmdlRGF0YS5kYXRhKTtcbiAgICAgICAgc2lnbkluKCk7XG4gICAgICAgIFxuICAgIH0sIFtjaGFsbGVuZ2VEYXRhLmRhdGFdKTtcbiAgICBjb25zdCBzaWduSW4gPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgaGFuZGxlU2lnbiA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGlmICghY2hhbGxlbmdlRGF0YS5kYXRhIHx8ICFzaWduZXIpIHJldHVyblxuICAgICAgICAgICAgY29uc3Qgc2lnbmF0dXJlID0gYXdhaXQgc2lnbmVyLnNpZ25NZXNzYWdlKGNoYWxsZW5nZURhdGEuZGF0YS5jaGFsbGVuZ2UudGV4dCk7XG4gICAgICAgICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnc2lnbmF0dXJlJywgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHNpZzogc2lnbmF0dXJlLFxuICAgICAgICAgICAgICAgIGRlcml2ZWRWaWE6ICdldGhlcnMuc2lnbmVyLnNpZ25NZXNzYWdlJyxcbiAgICAgICAgICAgICAgICBzaWduZWRNZXNzYWdlOiBjaGFsbGVuZ2VEYXRhLmRhdGEuY2hhbGxlbmdlLnRleHQsXG4gICAgICAgICAgICAgICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgbXV0YXRlQXV0aCh7XG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaWduYXR1cmUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBoYW5kbGVTaWduKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZSAtPiAnLCByZXNwb25zZSk7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCFhdXRoRGF0YS5kYXRhKSByZXR1cm5cbiAgXG4gICAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdsZW5zVG9rZW4nLCBhdXRoRGF0YS5kYXRhLmF1dGhlbnRpY2F0ZS5hY2Nlc3NUb2tlbilcbiAgXG4gICAgICAgIHNldEF1dGhUb2tlbih0cnVlKVxuICAgICAgICBjb25zb2xlLmxvZygnYXV0aCB0b2tlbiBzZXQgLT4gJywgYXV0aERhdGEuZGF0YSk7XG4gIFxuICAgICAgfSwgW2F1dGhEYXRhLmRhdGFdKVxuXG4gICAgY29uc3QgbG9naW5XaXRoTGVucyA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFhZGRyZXNzKSB7XG4gICAgICAgICAgICBhbGVydCgnbXVzdCBzaWduIGluIHdpdGggbWV0YW1hc2sgZmlyc3QnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2dpbjogYWRkcmVzcycsIGFkZHJlc3MpO1xuXG4gICAgICAgIGdldENoYWxsZW5nZSh7IFxuICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgcmVxdWVzdDoge1xuICAgICAgICAgICAgICBhZGRyZXNzOiBhZGRyZXNzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TWVudT5cbiAgICAgICAgICAgICAgICA8Q29ubmVjdEJ1dHRvbiAvPlxuICAgICAgICAgICAgICAgIHthZGRyZXNzICYmIGF1dGhUb2tlbiA/ICdsb2dnZWQgaW4gdG8gbGVucycgOiA8QnV0dG9uIG9uQ2xpY2s9e2xvZ2luV2l0aExlbnN9PkxvZ2luIHRvIExlbnM8L0J1dHRvbj59XG4gICAgICAgICAgICA8L01lbnU+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2FsbGV0OyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJCdXR0b24iLCJNZW51IiwiQ29ubmVjdEJ1dHRvbiIsInVzZUxhenlRdWVyeSIsInVzZU11dGF0aW9uIiwidXNlQWNjb3VudCIsInVzZVNpZ25lciIsInVzZUFwcFN0YXRlIiwiR0VUX0NIQUxMRU5HRSIsIkFVVEhFTlRJQ0FUSU9OIiwiV2FsbGV0IiwiYWRkcmVzcyIsImdldENoYWxsZW5nZSIsImNoYWxsZW5nZURhdGEiLCJtdXRhdGVBdXRoIiwiYXV0aERhdGEiLCJkYXRhIiwic2lnbmVyIiwiYXV0aFRva2VuIiwic2V0QXV0aFRva2VuIiwiY29uc29sZSIsImxvZyIsInNpZ25JbiIsImhhbmRsZVNpZ24iLCJyZXNwb25zZSIsInNpZ25hdHVyZSIsInNpZ25NZXNzYWdlIiwiY2hhbGxlbmdlIiwidGV4dCIsIndpbmRvdyIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzaWciLCJkZXJpdmVkVmlhIiwic2lnbmVkTWVzc2FnZSIsInZhcmlhYmxlcyIsInJlcXVlc3QiLCJhdXRoZW50aWNhdGUiLCJhY2Nlc3NUb2tlbiIsImxvZ2luV2l0aExlbnMiLCJhbGVydCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/wallet.tsx\n"));

/***/ })

});