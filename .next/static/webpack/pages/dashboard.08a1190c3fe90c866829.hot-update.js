webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./components/dashboard.js":
/*!*********************************!*\
  !*** ./components/dashboard.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Subhash_Kumar_Desktop_Projects_qex_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Subhash_Kumar_Desktop_Projects_qex_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Subhash_Kumar_Desktop_Projects_qex_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Subhash_Kumar_Desktop_Projects_qex_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/AuthContext */ "./context/AuthContext.js");





var _jsxFileName = "C:\\Users\\Subhash Kumar\\Desktop\\Projects\\qex-frontend\\components\\dashboard.js",
    _this = undefined,
    _s = $RefreshSig$();




var dashboard = function dashboard() {
  _s();

  var _useAuth = Object(_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__["useAuth"])(),
      logout = _useAuth.logout,
      currentUser = _useAuth.currentUser;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      error = _useState[0],
      setError = _useState[1];

  var logOut = /*#__PURE__*/function () {
    var _ref = Object(C_Users_Subhash_Kumar_Desktop_Projects_qex_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Subhash_Kumar_Desktop_Projects_qex_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
      return C_Users_Subhash_Kumar_Desktop_Projects_qex_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setError("");
              _context.next = 4;
              return logout();

            case 4:
              console.log("log out successfully");
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              setError("Error while logging out , Try again");

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function logOut(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: currentUser && currentUser.email
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: logOut,
      children: "logout"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(dashboard, "qRZMiq9koJZ9ToCyQwzKyG+MUxA=", false, function () {
  return [_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__["useAuth"]];
});

/* harmony default export */ __webpack_exports__["default"] = (dashboard);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQuanMiXSwibmFtZXMiOlsiZGFzaGJvYXJkIiwidXNlQXV0aCIsImxvZ291dCIsImN1cnJlbnRVc2VyIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwibG9nT3V0IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJlbWFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLGlCQUNVQyxvRUFBTyxFQURqQjtBQUFBLE1BQ2RDLE1BRGMsWUFDZEEsTUFEYztBQUFBLE1BQ05DLFdBRE0sWUFDTkEsV0FETTs7QUFBQSxrQkFFSUMsc0RBQVEsQ0FBQyxFQUFELENBRlo7QUFBQSxNQUVmQyxLQUZlO0FBQUEsTUFFUkMsUUFGUTs7QUFHdEIsTUFBTUMsTUFBTTtBQUFBLGdVQUFHLGlCQUFPQyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVYRixzQkFBUSxDQUFDLEVBQUQsQ0FBUjtBQUZXO0FBQUEscUJBR0xKLE1BQU0sRUFIRDs7QUFBQTtBQUlYTyxxQkFBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7QUFKVztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQU1YSixzQkFBUSxDQUFDLHFDQUFELENBQVI7O0FBTlc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBTkMsTUFBTTtBQUFBO0FBQUE7QUFBQSxLQUFaOztBQVNBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSxnQkFBS0osV0FBVyxJQUFJQSxXQUFXLENBQUNRO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQVEsYUFBTyxFQUFFSixNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUEsa0JBREY7QUFNRCxDQWxCRDs7R0FBTVAsUztVQUM0QkMsNEQ7OztBQW1CbkJELHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC4wOGExMTkwYzNmZTkwYzg2NjgyOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vY29udGV4dC9BdXRoQ29udGV4dFwiO1xyXG5jb25zdCBkYXNoYm9hcmQgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBsb2dvdXQsIGN1cnJlbnRVc2VyIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBsb2dPdXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgc2V0RXJyb3IoXCJcIik7XHJcbiAgICAgIGF3YWl0IGxvZ291dCgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImxvZyBvdXQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0RXJyb3IoXCJFcnJvciB3aGlsZSBsb2dnaW5nIG91dCAsIFRyeSBhZ2FpblwiKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDI+e2N1cnJlbnRVc2VyICYmIGN1cnJlbnRVc2VyLmVtYWlsfTwvaDI+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17bG9nT3V0fT5sb2dvdXQ8L2J1dHRvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYXNoYm9hcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=