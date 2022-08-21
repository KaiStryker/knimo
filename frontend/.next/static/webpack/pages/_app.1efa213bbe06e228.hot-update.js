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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var _api_queries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/queries */ \"./api/queries.ts\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar Wallet = function() {\n    _s();\n    var address = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useAccount)().address;\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useLazyQuery)(_api_queries__WEBPACK_IMPORTED_MODULE_1__.GET_CHALLENGE), 2), getChallenge = ref[0], challengeData = ref[1];\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation)(_api_queries__WEBPACK_IMPORTED_MODULE_1__.AUTHENTICATION), 2), mutateAuth = ref1[0], authData = ref1[1];\n    var ref2 = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useSigner)(), signer = ref2.data;\n    var loginWithLens = function() {\n        if (!address) {\n            alert(\"must sign in with metamask first\");\n        }\n        console.log(\"login: address\", address);\n        getChallenge({\n            variables: {\n                request: {\n                    address: address\n                }\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Menu, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_6__.ConnectButton, {}, void 0, false, {\n                    fileName: \"/Users/konradgnat/dev/hackathons/ethmexico-22/kmino/kmino/frontend/components/wallet.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, _this),\n                address && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                    onClick: loginWithLens,\n                    children: \"Login to Lens\"\n                }, void 0, false, {\n                    fileName: \"/Users/konradgnat/dev/hackathons/ethmexico-22/kmino/kmino/frontend/components/wallet.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 29\n                }, _this),\n                \";\"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/konradgnat/dev/hackathons/ethmexico-22/kmino/kmino/frontend/components/wallet.tsx\",\n            lineNumber: 42,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false);\n};\n_s(Wallet, \"K0Gw+Gw/Pao8aVK4TNPlwcw3s68=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_2__.useAccount,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useLazyQuery,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation,\n        wagmi__WEBPACK_IMPORTED_MODULE_2__.useSigner\n    ];\n});\n_c = Wallet;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wallet);\nvar _c;\n$RefreshReg$(_c, \"Wallet\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3dhbGxldC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFFMkY7QUFRcEM7QUFDRztBQUNiO0FBRWtCO0FBRy9ELElBQU1TLE1BQU0sR0FBRyxXQUFNOztJQUNqQixJQUFNLE9BQVMsR0FBS0osaURBQVUsRUFBRSxDQUF4QkssT0FBTztJQUNmLElBQXNDUCxHQUEyQixvRkFBM0JBLDREQUFZLENBQUNJLHVEQUFhLENBQUMsTUFBMURJLFlBQVksR0FBbUJSLEdBQTJCLEdBQTlDLEVBQUVTLGFBQWEsR0FBSVQsR0FBMkIsR0FBL0I7SUFDbEMsSUFBK0JDLElBQTJCLG9GQUEzQkEsMkRBQVcsQ0FBQ0ksd0RBQWMsQ0FBQyxNQUFuREssVUFBVSxHQUFjVCxJQUEyQixHQUF6QyxFQUFFVSxRQUFRLEdBQUlWLElBQTJCLEdBQS9CO0lBQzNCLElBQXlCRSxJQUFXLEdBQVhBLGdEQUFTLEVBQUUsRUFBNUJTLE1BQVksR0FBS1QsSUFBVyxDQUE1QlMsSUFBSTtJQUVaLElBQU1FLGFBQWEsR0FBRyxXQUFNO1FBQ3hCLElBQUksQ0FBQ1AsT0FBTyxFQUFFO1lBQ1ZRLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1NBQzdDO1FBRURDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQixFQUFFVixPQUFPLENBQUMsQ0FBQztRQUV2Q0MsWUFBWSxDQUFDO1lBQ1hVLFNBQVMsRUFBRTtnQkFDVEMsT0FBTyxFQUFFO29CQUNQWixPQUFPLEVBQUVBLE9BQU87aUJBQ2pCO2FBQ0Y7U0FDRixDQUFDO0tBQ0w7SUFFRCxxQkFDSTtrQkFDSSw0RUFBQ1Qsa0RBQUk7OzhCQUNELDhEQUFDQyxpRUFBYTs7Ozt5QkFBRztnQkFDaEJRLE9BQU8sa0JBQUksOERBQUNWLG9EQUFNO29CQUFDdUIsT0FBTyxFQUFFTixhQUFhOzhCQUFFLGVBQWE7Ozs7O3lCQUFTO2dCQUFDLEdBQ3ZFOzs7Ozs7aUJBQU87cUJBQ1IsQ0FDTjtDQUNKO0dBOUJLUixNQUFNOztRQUNZSiw2Q0FBVTtRQUNRRix3REFBWTtRQUNuQkMsdURBQVc7UUFDakJFLDRDQUFTOzs7QUFKaENHLEtBQUFBLE1BQU07QUFnQ1osK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3dhbGxldC50c3g/YmEzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tICdAd2ViMy1yZWFjdC9jb3JlJztcbmltcG9ydCB7IEJ1dHRvbiwgQm94LCBGbGV4LCBNZW51LCBNZW51QnV0dG9uLCBNZW51TGlzdCwgTWVudUl0ZW0gfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IGluamVjdGVkLCBmb3JtYXRBZGRyZXNzIH0gZnJvbSAnLi4vdXRpbHMvd2ViMydcbmltcG9ydCB7IFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L2luamVjdGVkLWNvbm5lY3RvcidcbmltcG9ydCB7IERFRkFVTFRfQ09MT1JfU0NIRU1FIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJ1xuaW1wb3J0IHsgQ2hldnJvbkRvd25JY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQgeyBDb25uZWN0QnV0dG9uIH0gZnJvbSBcIkByYWluYm93LW1lL3JhaW5ib3draXRcIjtcbmltcG9ydCB7IHVzZUxhenlRdWVyeSwgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcbmltcG9ydCB7IHVzZUFjY291bnQsIHVzZVNpZ25lciB9IGZyb20gJ3dhZ21pJ1xuaW1wb3J0IHsgdXNlQXBwU3RhdGUgfSBmcm9tICcuLi9jb250ZXh0L2FwcFN0YXRlJztcbmltcG9ydCB7IEdFVF9DSEFMTEVOR0UsIEFVVEhFTlRJQ0FUSU9OIH0gZnJvbSAnLi4vYXBpL3F1ZXJpZXMnO1xuXG5cbmNvbnN0IFdhbGxldCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGFkZHJlc3MgfSA9IHVzZUFjY291bnQoKTtcbiAgICBjb25zdCBbZ2V0Q2hhbGxlbmdlLCBjaGFsbGVuZ2VEYXRhXSA9IHVzZUxhenlRdWVyeShHRVRfQ0hBTExFTkdFKVxuICAgIGNvbnN0IFttdXRhdGVBdXRoLCBhdXRoRGF0YV0gPSB1c2VNdXRhdGlvbihBVVRIRU5USUNBVElPTilcbiAgICBjb25zdCB7IGRhdGE6IHNpZ25lciB9ID0gdXNlU2lnbmVyKCk7XG5cbiAgICBjb25zdCBsb2dpbldpdGhMZW5zID0gKCkgPT4ge1xuICAgICAgICBpZiAoIWFkZHJlc3MpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdtdXN0IHNpZ24gaW4gd2l0aCBtZXRhbWFzayBmaXJzdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coJ2xvZ2luOiBhZGRyZXNzJywgYWRkcmVzcyk7XG5cbiAgICAgICAgZ2V0Q2hhbGxlbmdlKHsgXG4gICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICByZXF1ZXN0OiB7XG4gICAgICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxNZW51PlxuICAgICAgICAgICAgICAgIDxDb25uZWN0QnV0dG9uIC8+XG4gICAgICAgICAgICAgICAge2FkZHJlc3MgJiYgPEJ1dHRvbiBvbkNsaWNrPXtsb2dpbldpdGhMZW5zfT5Mb2dpbiB0byBMZW5zPC9CdXR0b24+fTtcbiAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXYWxsZXQ7Il0sIm5hbWVzIjpbIkJ1dHRvbiIsIk1lbnUiLCJDb25uZWN0QnV0dG9uIiwidXNlTGF6eVF1ZXJ5IiwidXNlTXV0YXRpb24iLCJ1c2VBY2NvdW50IiwidXNlU2lnbmVyIiwiR0VUX0NIQUxMRU5HRSIsIkFVVEhFTlRJQ0FUSU9OIiwiV2FsbGV0IiwiYWRkcmVzcyIsImdldENoYWxsZW5nZSIsImNoYWxsZW5nZURhdGEiLCJtdXRhdGVBdXRoIiwiYXV0aERhdGEiLCJkYXRhIiwic2lnbmVyIiwibG9naW5XaXRoTGVucyIsImFsZXJ0IiwiY29uc29sZSIsImxvZyIsInZhcmlhYmxlcyIsInJlcXVlc3QiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/wallet.tsx\n"));

/***/ })

});