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

/***/ "./api/queries.ts":
/*!************************!*\
  !*** ./api/queries.ts ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AUTHENTICATION\": function() { return /* binding */ AUTHENTICATION; },\n/* harmony export */   \"GET_CHALLENGE\": function() { return /* binding */ GET_CHALLENGE; },\n/* harmony export */   \"GET_PROFILES\": function() { return /* binding */ GET_PROFILES; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  fragment MediaFields on Media {\\n    url\\n    mimeType\\n    }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  query($request: DefaultProfileRequest!) {\\n    defaultProfile(request: $request) {\\n      id\\n      name\\n      bio\\n      attributes {\\n        displayType\\n        traitType\\n        key\\n        value\\n      }\\n      followNftAddress\\n      metadata\\n      isDefault\\n      picture {\\n        ... on NftImage {\\n          contractAddress\\n          tokenId\\n          uri\\n          verified\\n        }\\n        ... on MediaSet {\\n          original {\\n            url\\n            mimeType\\n          }\\n        }\\n        __typename\\n      }\\n      handle\\n      coverPicture {\\n        ... on NftImage {\\n          contractAddress\\n          tokenId\\n          uri\\n          verified\\n        }\\n        ... on MediaSet {\\n          original {\\n            url\\n            mimeType\\n          }\\n        }\\n        __typename\\n      }\\n      ownedBy\\n      dispatcher {\\n        address\\n        canUseRelay\\n      }\\n      stats {\\n        totalFollowers\\n        totalFollowing\\n        totalPosts\\n        totalComments\\n        totalMirrors\\n        totalPublications\\n        totalCollects\\n      }\\n      followModule {\\n        ... on FeeFollowModuleSettings {\\n          type\\n          amount {\\n            asset {\\n              symbol\\n              name\\n              decimals\\n              address\\n            }\\n            value\\n          }\\n          recipient\\n        }\\n        ... on ProfileFollowModuleSettings {\\n         type\\n        }\\n        ... on RevertFollowModuleSettings {\\n         type\\n        }\\n      }\\n    }\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  fragment ProfileFields on Profile {\\n    id\\n    name\\n    bio\\n    attributes {\\n      displayType\\n      traitType\\n      key\\n      value\\n    }\\n    metadata\\n    isDefault\\n    handle\\n    isFollowing\\n    isFollowedByMe\\n    picture {\\n      ... on NftImage {\\n        contractAddress\\n        tokenId\\n        uri\\n        verified\\n      }\\n      ... on MediaSet {\\n        original {\\n          ...MediaFields\\n        }\\n        small {\\n          ...MediaFields\\n        }\\n        medium {\\n          ...MediaFields\\n        }\\n      }\\n    }\\n    coverPicture {\\n      ... on NftImage {\\n        contractAddress\\n        tokenId\\n        uri\\n        verified\\n      }\\n      ... on MediaSet {\\n        original {\\n          ...MediaFields\\n        }\\n        small {\\n        ...MediaFields\\n        }\\n        medium {\\n          ...MediaFields\\n        }\\n      }\\n    }\\n    ownedBy\\n    dispatcher {\\n      address\\n    }\\n    stats {\\n      totalFollowers\\n      totalFollowing\\n      totalPosts\\n      totalComments\\n      totalMirrors\\n      totalPublications\\n      totalCollects\\n    }\\n    followModule {\\n      ... on FeeFollowModuleSettings {\\n        type\\n        amount {\\n          asset {\\n            name\\n            symbol\\n            decimals\\n            address\\n          }\\n          value\\n        }\\n        recipient\\n      }\\n      ... on ProfileFollowModuleSettings {\\n        type\\n      }\\n      ... on RevertFollowModuleSettings {\\n        type\\n      }\\n    }\\n  }\\n  \",\n        \"\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  mutation($request: SignedAuthChallenge!) { \\n    authenticate(request: $request) {\\n      accessToken\\n      refreshToken\\n    }\\n }\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  query($request: ChallengeRequest!) {\\n    challenge(request: $request) { text }\\n  }\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  query($request: ProfileQueryRequest!) {\\n    profiles(request: $request) {\\n      items {\\n        ... on Profile {\\n          ...ProfileFields\\n        }\\n      }\\n      pageInfo {\\n        prev\\n        next\\n        totalCount\\n      }\\n    }\\n  }\\n  \",\n        \"\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\n\nvar MediaFields = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject());\nvar GET_DEFAULT_PROFILES = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject1());\nvar ProfileFields = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject2(), MediaFields);\nvar AUTHENTICATION = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject3());\nvar GET_CHALLENGE = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject4());\nvar GET_PROFILES = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject5(), ProfileFields);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvcXVlcmllcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFFcEMsSUFBTUMsV0FBVyxHQUFHRCxtREFBRyxtQkFLdEI7QUFFRCxJQUFNRSxvQkFBb0IsR0FBR0YsbURBQUcsb0JBbUYvQjtBQUVELElBQU1HLGFBQWEsR0FBR0gsbURBQUcscUJBeUZyQkMsV0FBVyxDQUNkO0FBRU0sSUFBTUcsY0FBYyxHQUFHSixtREFBRyxvQkFPaEMsQ0FBQztBQUVLLElBQU1LLGFBQWEsR0FBR0wsbURBQUcsb0JBSS9CLENBQUM7QUFFSyxJQUFNTSxZQUFZLEdBQUdOLG1EQUFHLHFCQWUzQkcsYUFBYSxDQUNoQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwaS9xdWVyaWVzLnRzPzY2ZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnXG5cbmNvbnN0IE1lZGlhRmllbGRzID0gZ3FsYFxuICBmcmFnbWVudCBNZWRpYUZpZWxkcyBvbiBNZWRpYSB7XG4gICAgdXJsXG4gICAgbWltZVR5cGVcbiAgICB9XG5gXG5cbmNvbnN0IEdFVF9ERUZBVUxUX1BST0ZJTEVTID0gZ3FsYFxuICBxdWVyeSgkcmVxdWVzdDogRGVmYXVsdFByb2ZpbGVSZXF1ZXN0ISkge1xuICAgIGRlZmF1bHRQcm9maWxlKHJlcXVlc3Q6ICRyZXF1ZXN0KSB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgYmlvXG4gICAgICBhdHRyaWJ1dGVzIHtcbiAgICAgICAgZGlzcGxheVR5cGVcbiAgICAgICAgdHJhaXRUeXBlXG4gICAgICAgIGtleVxuICAgICAgICB2YWx1ZVxuICAgICAgfVxuICAgICAgZm9sbG93TmZ0QWRkcmVzc1xuICAgICAgbWV0YWRhdGFcbiAgICAgIGlzRGVmYXVsdFxuICAgICAgcGljdHVyZSB7XG4gICAgICAgIC4uLiBvbiBOZnRJbWFnZSB7XG4gICAgICAgICAgY29udHJhY3RBZGRyZXNzXG4gICAgICAgICAgdG9rZW5JZFxuICAgICAgICAgIHVyaVxuICAgICAgICAgIHZlcmlmaWVkXG4gICAgICAgIH1cbiAgICAgICAgLi4uIG9uIE1lZGlhU2V0IHtcbiAgICAgICAgICBvcmlnaW5hbCB7XG4gICAgICAgICAgICB1cmxcbiAgICAgICAgICAgIG1pbWVUeXBlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF9fdHlwZW5hbWVcbiAgICAgIH1cbiAgICAgIGhhbmRsZVxuICAgICAgY292ZXJQaWN0dXJlIHtcbiAgICAgICAgLi4uIG9uIE5mdEltYWdlIHtcbiAgICAgICAgICBjb250cmFjdEFkZHJlc3NcbiAgICAgICAgICB0b2tlbklkXG4gICAgICAgICAgdXJpXG4gICAgICAgICAgdmVyaWZpZWRcbiAgICAgICAgfVxuICAgICAgICAuLi4gb24gTWVkaWFTZXQge1xuICAgICAgICAgIG9yaWdpbmFsIHtcbiAgICAgICAgICAgIHVybFxuICAgICAgICAgICAgbWltZVR5cGVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgX190eXBlbmFtZVxuICAgICAgfVxuICAgICAgb3duZWRCeVxuICAgICAgZGlzcGF0Y2hlciB7XG4gICAgICAgIGFkZHJlc3NcbiAgICAgICAgY2FuVXNlUmVsYXlcbiAgICAgIH1cbiAgICAgIHN0YXRzIHtcbiAgICAgICAgdG90YWxGb2xsb3dlcnNcbiAgICAgICAgdG90YWxGb2xsb3dpbmdcbiAgICAgICAgdG90YWxQb3N0c1xuICAgICAgICB0b3RhbENvbW1lbnRzXG4gICAgICAgIHRvdGFsTWlycm9yc1xuICAgICAgICB0b3RhbFB1YmxpY2F0aW9uc1xuICAgICAgICB0b3RhbENvbGxlY3RzXG4gICAgICB9XG4gICAgICBmb2xsb3dNb2R1bGUge1xuICAgICAgICAuLi4gb24gRmVlRm9sbG93TW9kdWxlU2V0dGluZ3Mge1xuICAgICAgICAgIHR5cGVcbiAgICAgICAgICBhbW91bnQge1xuICAgICAgICAgICAgYXNzZXQge1xuICAgICAgICAgICAgICBzeW1ib2xcbiAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICBkZWNpbWFsc1xuICAgICAgICAgICAgICBhZGRyZXNzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICByZWNpcGllbnRcbiAgICAgICAgfVxuICAgICAgICAuLi4gb24gUHJvZmlsZUZvbGxvd01vZHVsZVNldHRpbmdzIHtcbiAgICAgICAgIHR5cGVcbiAgICAgICAgfVxuICAgICAgICAuLi4gb24gUmV2ZXJ0Rm9sbG93TW9kdWxlU2V0dGluZ3Mge1xuICAgICAgICAgdHlwZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBQcm9maWxlRmllbGRzID0gZ3FsYFxuICBmcmFnbWVudCBQcm9maWxlRmllbGRzIG9uIFByb2ZpbGUge1xuICAgIGlkXG4gICAgbmFtZVxuICAgIGJpb1xuICAgIGF0dHJpYnV0ZXMge1xuICAgICAgZGlzcGxheVR5cGVcbiAgICAgIHRyYWl0VHlwZVxuICAgICAga2V5XG4gICAgICB2YWx1ZVxuICAgIH1cbiAgICBtZXRhZGF0YVxuICAgIGlzRGVmYXVsdFxuICAgIGhhbmRsZVxuICAgIGlzRm9sbG93aW5nXG4gICAgaXNGb2xsb3dlZEJ5TWVcbiAgICBwaWN0dXJlIHtcbiAgICAgIC4uLiBvbiBOZnRJbWFnZSB7XG4gICAgICAgIGNvbnRyYWN0QWRkcmVzc1xuICAgICAgICB0b2tlbklkXG4gICAgICAgIHVyaVxuICAgICAgICB2ZXJpZmllZFxuICAgICAgfVxuICAgICAgLi4uIG9uIE1lZGlhU2V0IHtcbiAgICAgICAgb3JpZ2luYWwge1xuICAgICAgICAgIC4uLk1lZGlhRmllbGRzXG4gICAgICAgIH1cbiAgICAgICAgc21hbGwge1xuICAgICAgICAgIC4uLk1lZGlhRmllbGRzXG4gICAgICAgIH1cbiAgICAgICAgbWVkaXVtIHtcbiAgICAgICAgICAuLi5NZWRpYUZpZWxkc1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNvdmVyUGljdHVyZSB7XG4gICAgICAuLi4gb24gTmZ0SW1hZ2Uge1xuICAgICAgICBjb250cmFjdEFkZHJlc3NcbiAgICAgICAgdG9rZW5JZFxuICAgICAgICB1cmlcbiAgICAgICAgdmVyaWZpZWRcbiAgICAgIH1cbiAgICAgIC4uLiBvbiBNZWRpYVNldCB7XG4gICAgICAgIG9yaWdpbmFsIHtcbiAgICAgICAgICAuLi5NZWRpYUZpZWxkc1xuICAgICAgICB9XG4gICAgICAgIHNtYWxsIHtcbiAgICAgICAgLi4uTWVkaWFGaWVsZHNcbiAgICAgICAgfVxuICAgICAgICBtZWRpdW0ge1xuICAgICAgICAgIC4uLk1lZGlhRmllbGRzXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgb3duZWRCeVxuICAgIGRpc3BhdGNoZXIge1xuICAgICAgYWRkcmVzc1xuICAgIH1cbiAgICBzdGF0cyB7XG4gICAgICB0b3RhbEZvbGxvd2Vyc1xuICAgICAgdG90YWxGb2xsb3dpbmdcbiAgICAgIHRvdGFsUG9zdHNcbiAgICAgIHRvdGFsQ29tbWVudHNcbiAgICAgIHRvdGFsTWlycm9yc1xuICAgICAgdG90YWxQdWJsaWNhdGlvbnNcbiAgICAgIHRvdGFsQ29sbGVjdHNcbiAgICB9XG4gICAgZm9sbG93TW9kdWxlIHtcbiAgICAgIC4uLiBvbiBGZWVGb2xsb3dNb2R1bGVTZXR0aW5ncyB7XG4gICAgICAgIHR5cGVcbiAgICAgICAgYW1vdW50IHtcbiAgICAgICAgICBhc3NldCB7XG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICBzeW1ib2xcbiAgICAgICAgICAgIGRlY2ltYWxzXG4gICAgICAgICAgICBhZGRyZXNzXG4gICAgICAgICAgfVxuICAgICAgICAgIHZhbHVlXG4gICAgICAgIH1cbiAgICAgICAgcmVjaXBpZW50XG4gICAgICB9XG4gICAgICAuLi4gb24gUHJvZmlsZUZvbGxvd01vZHVsZVNldHRpbmdzIHtcbiAgICAgICAgdHlwZVxuICAgICAgfVxuICAgICAgLi4uIG9uIFJldmVydEZvbGxvd01vZHVsZVNldHRpbmdzIHtcbiAgICAgICAgdHlwZVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke01lZGlhRmllbGRzfVxuYFxuXG5leHBvcnQgY29uc3QgQVVUSEVOVElDQVRJT04gPSBncWxgXG4gIG11dGF0aW9uKCRyZXF1ZXN0OiBTaWduZWRBdXRoQ2hhbGxlbmdlISkgeyBcbiAgICBhdXRoZW50aWNhdGUocmVxdWVzdDogJHJlcXVlc3QpIHtcbiAgICAgIGFjY2Vzc1Rva2VuXG4gICAgICByZWZyZXNoVG9rZW5cbiAgICB9XG4gfVxuYDtcblxuZXhwb3J0IGNvbnN0IEdFVF9DSEFMTEVOR0UgPSBncWxgXG4gIHF1ZXJ5KCRyZXF1ZXN0OiBDaGFsbGVuZ2VSZXF1ZXN0ISkge1xuICAgIGNoYWxsZW5nZShyZXF1ZXN0OiAkcmVxdWVzdCkgeyB0ZXh0IH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEdFVF9QUk9GSUxFUyA9IGdxbGBcbiAgcXVlcnkoJHJlcXVlc3Q6IFByb2ZpbGVRdWVyeVJlcXVlc3QhKSB7XG4gICAgcHJvZmlsZXMocmVxdWVzdDogJHJlcXVlc3QpIHtcbiAgICAgIGl0ZW1zIHtcbiAgICAgICAgLi4uIG9uIFByb2ZpbGUge1xuICAgICAgICAgIC4uLlByb2ZpbGVGaWVsZHNcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcGFnZUluZm8ge1xuICAgICAgICBwcmV2XG4gICAgICAgIG5leHRcbiAgICAgICAgdG90YWxDb3VudFxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke1Byb2ZpbGVGaWVsZHN9XG5gO1xuIl0sIm5hbWVzIjpbImdxbCIsIk1lZGlhRmllbGRzIiwiR0VUX0RFRkFVTFRfUFJPRklMRVMiLCJQcm9maWxlRmllbGRzIiwiQVVUSEVOVElDQVRJT04iLCJHRVRfQ0hBTExFTkdFIiwiR0VUX1BST0ZJTEVTIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api/queries.ts\n"));

/***/ })

});