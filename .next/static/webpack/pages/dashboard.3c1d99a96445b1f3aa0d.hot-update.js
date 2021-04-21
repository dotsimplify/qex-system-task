webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js":
/*!***************************************************************!*\
  !*** ./node_modules/isomorphic-fetch/fetch-npm-browserify.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(/*! whatwg-fetch */ "./node_modules/next/dist/build/polyfills/fetch/whatwg-fetch.js");
module.exports = self.fetch.bind(self);


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/fetch/whatwg-fetch.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/fetch/whatwg-fetch.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals self */exports.Headers=self.Headers;exports.Request=self.Request;exports.Response=self.Response;exports.fetch=self.fetch;
//# sourceMappingURL=whatwg-fetch.js.map

/***/ }),

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var C_Users_Subhash_Kumar_Desktop_Projects_qex_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Subhash_Kumar_Desktop_Projects_qex_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Subhash_Kumar_Desktop_Projects_qex_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Subhash_Kumar_Desktop_Projects_qex_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/AuthContext */ "./context/AuthContext.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/dashboard */ "./components/dashboard.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "C:\\Users\\Subhash Kumar\\Desktop\\Projects\\qex-frontend\\pages\\dashboard.js",
    _this = undefined;






var page = function page() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__["AuthProvider"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_dashboard__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_components_dashboard__WEBPACK_IMPORTED_MODULE_5__["default"].getInitialProps = /*#__PURE__*/Object(C_Users_Subhash_Kumar_Desktop_Projects_qex_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_Subhash_Kumar_Desktop_Projects_qex_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var url, apiKey, ab, res, data;
  return C_Users_Subhash_Kumar_Desktop_Projects_qex_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          url = process.env.NEXT_PUBLIC_API_URL;
          apiKey = process.env.NEXT_PUBLIC_API_KEY;
          ab = "https://newsapi.org/v2/top-headlines?country=ru&apiKey=e0ce93ba8b3f4a06816e35f9e4bc3ede";
          _context.next = 5;
          return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6___default()("https://newsapi.org/v2/top-headlines?country=ru&apiKey=e0ce93ba8b3f4a06816e35f9e4bc3ede");

        case 5:
          res = _context.sent;
          _context.next = 8;
          return res.json();

        case 8:
          data = _context.sent;
          console.log(data); //   if (!data) {
          //     return {
          //       notFound: true,
          //     };
          //   }

          return _context.abrupt("return", {
            props: data // will be passed to the page component as props

          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (page);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtZmV0Y2gvZmV0Y2gtbnBtLWJyb3dzZXJpZnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL2ZldGNoL3doYXR3Zy1mZXRjaC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLmpzIl0sIm5hbWVzIjpbInBhZ2UiLCJEYXNoYm9hcmQiLCJnZXRJbml0aWFsUHJvcHMiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsImFwaUtleSIsIk5FWFRfUFVCTElDX0FQSV9LRVkiLCJhYiIsImZldGNoIiwicmVzIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQU8sQ0FBQyxvRkFBYztBQUN0Qjs7Ozs7Ozs7Ozs7OztBQ0xhLCtDQUErQyw2QkFBNkIsK0JBQStCO0FBQ3hILHdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNqQixzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLGlFQUFEO0FBQUEsOEJBQ0UscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBUUQsQ0FURDs7QUFVQUMsNkRBQVMsQ0FBQ0MsZUFBVixpVUFBNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3BCQyxhQURvQixHQUNkQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsbUJBREU7QUFFcEJDLGdCQUZvQixHQUVYSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUcsbUJBRkQ7QUFHcEJDLFlBSG9CLEdBSXhCLHlGQUp3QjtBQUFBO0FBQUEsaUJBS1JDLHVEQUFLLENBQ3JCLHlGQURxQixDQUxHOztBQUFBO0FBS3BCQyxhQUxvQjtBQUFBO0FBQUEsaUJBUVBBLEdBQUcsQ0FBQ0MsSUFBSixFQVJPOztBQUFBO0FBUXBCQyxjQVJvQjtBQVMxQkMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaLEVBVDBCLENBVTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBZDBCLDJDQWdCbkI7QUFDTEcsaUJBQUssRUFBRUgsSUFERixDQUNROztBQURSLFdBaEJtQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUE1QjtBQW9CZWIsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLjNjMWQ5OWE5NjQ0NWIxZjNhYTBkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0aGUgd2hhdHdnLWZldGNoIHBvbHlmaWxsIGluc3RhbGxzIHRoZSBmZXRjaCgpIGZ1bmN0aW9uXG4vLyBvbiB0aGUgZ2xvYmFsIG9iamVjdCAod2luZG93IG9yIHNlbGYpXG4vL1xuLy8gUmV0dXJuIHRoYXQgYXMgdGhlIGV4cG9ydCBmb3IgdXNlIGluIFdlYnBhY2ssIEJyb3dzZXJpZnkgZXRjLlxucmVxdWlyZSgnd2hhdHdnLWZldGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHNlbGYuZmV0Y2guYmluZChzZWxmKTtcbiIsIlwidXNlIHN0cmljdFwiOy8qIGdsb2JhbHMgc2VsZiAqL2V4cG9ydHMuSGVhZGVycz1zZWxmLkhlYWRlcnM7ZXhwb3J0cy5SZXF1ZXN0PXNlbGYuUmVxdWVzdDtleHBvcnRzLlJlc3BvbnNlPXNlbGYuUmVzcG9uc2U7ZXhwb3J0cy5mZXRjaD1zZWxmLmZldGNoO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2hhdHdnLWZldGNoLmpzLm1hcCIsImltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0L0F1dGhDb250ZXh0XCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyXCI7XHJcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvZGFzaGJvYXJkXCI7XHJcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy1mZXRjaFwiO1xyXG5jb25zdCBwYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8QXV0aFByb3ZpZGVyPlxyXG4gICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICA8RGFzaGJvYXJkIC8+XHJcbiAgICAgIDwvQXV0aFByb3ZpZGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuRGFzaGJvYXJkLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCB1cmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMO1xyXG4gIGNvbnN0IGFwaUtleSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9LRVk7XHJcbiAgY29uc3QgYWIgPVxyXG4gICAgXCJodHRwczovL25ld3NhcGkub3JnL3YyL3RvcC1oZWFkbGluZXM/Y291bnRyeT1ydSZhcGlLZXk9ZTBjZTkzYmE4YjNmNGEwNjgxNmUzNWY5ZTRiYzNlZGVcIjtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgIFwiaHR0cHM6Ly9uZXdzYXBpLm9yZy92Mi90b3AtaGVhZGxpbmVzP2NvdW50cnk9cnUmYXBpS2V5PWUwY2U5M2JhOGIzZjRhMDY4MTZlMzVmOWU0YmMzZWRlXCJcclxuICApO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIC8vICAgaWYgKCFkYXRhKSB7XHJcbiAgLy8gICAgIHJldHVybiB7XHJcbiAgLy8gICAgICAgbm90Rm91bmQ6IHRydWUsXHJcbiAgLy8gICAgIH07XHJcbiAgLy8gICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogZGF0YSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXHJcbiAgfTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgcGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==