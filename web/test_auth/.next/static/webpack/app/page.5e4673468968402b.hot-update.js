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

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-icons */ \"(app-pages-browser)/./node_modules/@radix-ui/react-icons/dist/react-icons.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nfunction Home() {\n    async function fetch_auth_url() {\n        const oauth_config = {\n            client_id: \"Ov23li7cIQwRa2GgvCAw\",\n            client_secret: \"29e384e03fa3224b08314cafbed6bd3d69bf7a32\",\n            redirect_uri: \"http://localhost:3000/api/auth/callback/github\",\n            provider: \"github\",\n            organisation: \"test_app\"\n        };\n        try {\n            const resp = await fetch(\"http://localhost:3210/auth\", {\n                method: 'POST',\n                body: JSON.stringify(oauth_config),\n                headers: {\n                    'Content-Type': \"application/json\"\n                },\n                credentials: \"include\"\n            });\n            const { auth_url } = await resp.json();\n            console.log(auth_url);\n            window.location = auth_url;\n        } catch (err) {\n            console.log(err);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col h-screen justify-center items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n            className: \"p-2\",\n            onClick: fetch_auth_url,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_2__.GitHubLogoIcon, {}, void 0, false, {\n                    fileName: \"/home/varun/Desktop/MINIPRO/auth_easy_server/web/test_auth/app/page.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this),\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: \"Login with Github\"\n                }, void 0, false, {\n                    fileName: \"/home/varun/Desktop/MINIPRO/auth_easy_server/web/test_auth/app/page.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 27\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/varun/Desktop/MINIPRO/auth_easy_server/web/test_auth/app/page.tsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/varun/Desktop/MINIPRO/auth_easy_server/web/test_auth/app/page.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNnRDtBQUNPO0FBRXhDLFNBQVNFO0lBRXRCLGVBQWVDO1FBRWIsTUFBTUMsZUFBZTtZQUNuQkMsV0FBVztZQUNYQyxlQUFlO1lBQ2ZDLGNBQWM7WUFDZEMsVUFBVTtZQUNWQyxjQUFjO1FBQ2hCO1FBRUEsSUFBRztZQUNELE1BQU1DLE9BQU8sTUFBTUMsTUFBTSw4QkFBNkI7Z0JBQ2xEQyxRQUFRO2dCQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNYO2dCQUNyQlksU0FBUztvQkFDUCxnQkFBZTtnQkFDakI7Z0JBQ0FDLGFBQWE7WUFDakI7WUFFQSxNQUFNLEVBQUNDLFFBQVEsRUFBQyxHQUFHLE1BQU1SLEtBQUtTLElBQUk7WUFFbENDLFFBQVFDLEdBQUcsQ0FBQ0g7WUFFWkksT0FBT0MsUUFBUSxHQUFHTDtRQUNwQixFQUFDLE9BQU1NLEtBQUk7WUFDVEosUUFBUUMsR0FBRyxDQUFDRztRQUNkO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQzFCLHlEQUFNQTtZQUNQMEIsV0FBVTtZQUNWQyxTQUFTeEI7OzhCQUVQLDhEQUFDRixpRUFBY0E7Ozs7O2dCQUFFOzhCQUFDLDhEQUFDMkI7OEJBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWhDO0tBekN3QjFCIiwic291cmNlcyI6WyIvaG9tZS92YXJ1bi9EZXNrdG9wL01JTklQUk8vYXV0aF9lYXN5X3NlcnZlci93ZWIvdGVzdF9hdXRoL2FwcC9wYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBHaXRIdWJMb2dvSWNvbiB9IGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtaWNvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBhc3luYyBmdW5jdGlvbiBmZXRjaF9hdXRoX3VybCgpe1xuXG4gICAgY29uc3Qgb2F1dGhfY29uZmlnID0ge1xuICAgICAgY2xpZW50X2lkOiBcIk92MjNsaTdjSVF3UmEyR2d2Q0F3XCIhLFxuICAgICAgY2xpZW50X3NlY3JldDogXCIyOWUzODRlMDNmYTMyMjRiMDgzMTRjYWZiZWQ2YmQzZDY5YmY3YTMyXCIsXG4gICAgICByZWRpcmVjdF91cmk6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9hdXRoL2NhbGxiYWNrL2dpdGh1YlwiLFxuICAgICAgcHJvdmlkZXI6IFwiZ2l0aHViXCIsXG4gICAgICBvcmdhbmlzYXRpb246IFwidGVzdF9hcHBcIixcbiAgICB9XG5cbiAgICB0cnl7XG4gICAgICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMyMTAvYXV0aFwiLHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvYXV0aF9jb25maWcpLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOlwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIsXG4gICAgICB9KTtcblxuICAgICAgY29uc3Qge2F1dGhfdXJsfSA9IGF3YWl0IHJlc3AuanNvbigpO1xuXG4gICAgICBjb25zb2xlLmxvZyhhdXRoX3VybCk7XG4gICAgICBcbiAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IGF1dGhfdXJsO1xuICAgIH1jYXRjaChlcnIpe1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaC1zY3JlZW4ganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICA8QnV0dG9uXG4gICAgICBjbGFzc05hbWU9XCJwLTJcIlxuICAgICAgb25DbGljaz17ZmV0Y2hfYXV0aF91cmx9XG4gICAgICA+XG4gICAgICAgIDxHaXRIdWJMb2dvSWNvbi8+IDxzcGFuPkxvZ2luIHdpdGggR2l0aHViPC9zcGFuPlxuICAgICAgPC9CdXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiR2l0SHViTG9nb0ljb24iLCJIb21lIiwiZmV0Y2hfYXV0aF91cmwiLCJvYXV0aF9jb25maWciLCJjbGllbnRfaWQiLCJjbGllbnRfc2VjcmV0IiwicmVkaXJlY3RfdXJpIiwicHJvdmlkZXIiLCJvcmdhbmlzYXRpb24iLCJyZXNwIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJjcmVkZW50aWFscyIsImF1dGhfdXJsIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImVyciIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJzcGFuIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});