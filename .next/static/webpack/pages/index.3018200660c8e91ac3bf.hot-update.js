webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Register.js":
/*!********************************!*\
  !*** ./components/Register.js ***!
  \********************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/hi */ "./node_modules/react-icons/hi/index.esm.js");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context/AuthContext */ "./context/AuthContext.js");





var _jsxFileName = "C:\\Users\\Subhash Kumar\\Desktop\\Projects\\qex-frontend\\components\\Register.js",
    _this = undefined,
    _s = $RefreshSig$();








var Register = function Register() {
  _s();

  var emailRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var passwordRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var confPasswordRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  var _useAuth = Object(_context_AuthContext__WEBPACK_IMPORTED_MODULE_8__["useAuth"])(),
      signup = _useAuth.signup;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      error = _useState[0],
      setError = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      message = _useState2[0],
      setMessage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      loading = _useState3[0],
      setLoading = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      value = _useState4[0],
      setValue = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    aos__WEBPACK_IMPORTED_MODULE_5___default.a.init({
      duration: 2500
    });
  });

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = Object(C_Users_Subhash_Kumar_Desktop_Projects_qex_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Subhash_Kumar_Desktop_Projects_qex_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
      return C_Users_Subhash_Kumar_Desktop_Projects_qex_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();

              if (!(passwordRef.current.value.length < 7)) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return", setError("Password must be at least 7 characters long"));

            case 3:
              if (!(passwordRef.current.value != confPasswordRef.current.value)) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return", setError("Password does not match"));

            case 5:
              _context.prev = 5;
              setError("");
              setMessage("");
              setLoading(true);
              _context.next = 11;
              return signup(emailRef.current.value, passwordRef.current.value);

            case 11:
              console.log("register success");
              setMessage("Signed Up Successfully !! Please login");
              _context.next = 18;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](5);
              setError("failed to create user");

            case 18:
              setLoading(false);

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[5, 15]]);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "grid grid-cols-1 md:grid-cols-2 grid-flow-row bg-gradient-to-r from-pink-100 via-purple-50 to-gray-200  ",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex ",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "data-aos": "fade-right",
          className: "p-4 m-8 mb-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "text-4xl font-bold m-4 mb-2 text-red-800 p-2",
            children: "Be Updated with latest news !!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "font-semibold text-lg text-gray-600 m-4 mt-0 p-2",
            children: ["Get to know all about world's affairs , business news and all updates at single click", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "m-4 ml-0 text-gray-800 text-sm",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_hi__WEBPACK_IMPORTED_MODULE_7__["HiOutlineBadgeCheck"], {
                className: "inline m-2 text-green-600 text-2xl"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 17
              }, _this), "Get latest news about politics , business and stock exchange."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "m-4 ml-0 text-gray-800 text-sm",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_hi__WEBPACK_IMPORTED_MODULE_7__["HiOutlineBadgeCheck"], {
                className: "inline m-2 text-green-600 text-2xl"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 17
              }, _this), "Never miss major updates with our news feed."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        "data-aos": "fade-left",
        className: "m-4 mt-4 mb-0 p-8",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "m-auto rounded-lg mt-2 p-4 mb-8",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "font-bold text-5xl m-8 mt-0 ml-0 text-red-800 ",
            children: "Register here"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, _this), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: " text-blue-500 text-xl font-semibold",
            children: error
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 15
          }, _this), message && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: " text-green-600 text-xl font-semibold",
            children: message
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "m-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "name",
                className: "text-lg m-2 ml-0 text-gray-500 font-semibold",
                children: "Email Address"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                required: true,
                type: "text",
                placeholder: "Enter your email address",
                name: "name",
                ref: emailRef,
                className: "block focus:outline-none focus:border-gray-600 w-96 m-2 ml-0 p-4 h-12 border-2 border-gray-300 rounded-lg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "m-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "name",
                className: "text-lg m-2 ml-0 text-gray-500 font-semibold",
                children: "Password"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                required: true,
                type: "password",
                name: "passsword",
                ref: passwordRef,
                placeholder: "Enter your secure password",
                className: "block focus:outline-none focus:border-gray-600 w-96 m-2 ml-0 p-4 h-12 border-2 border-gray-300 rounded-lg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "m-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "name",
                className: "text-lg m-2 ml-0 text-gray-500 font-semibold",
                children: "Confirm Password"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                required: true,
                type: "password",
                name: "confirmPasssword",
                ref: confPasswordRef,
                placeholder: "Re-enter your secure password",
                className: "block focus:outline-none focus:border-gray-600 w-96 m-2 ml-0 p-4 h-12 border-2 border-gray-300 rounded-lg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              disabled: loading,
              id: "submit",
              type: "submit",
              className: "focus:outline-none p-2 m-4 border-2 border-red-700 hover:bg-white hover:text-black bg-red-700 font-semibold text-white rounded-lg",
              children: "Register"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Already Registered ?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
              href: "/login",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                id: "login",
                className: " m-4 hover:text-blue-800 text-blue-600 font-semibold t rounded-lg",
                children: "Login here"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(Register, "7KO54dJasZIaA+LTagU3XgIDI2Y=", false, function () {
  return [_context_AuthContext__WEBPACK_IMPORTED_MODULE_8__["useAuth"]];
});

_c = Register;
/* harmony default export */ __webpack_exports__["default"] = (Register);

var _c;

$RefreshReg$(_c, "Register");

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

/***/ }),

/***/ "./node_modules/next/router.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWdpc3Rlci5qcyJdLCJuYW1lcyI6WyJSZWdpc3RlciIsImVtYWlsUmVmIiwidXNlUmVmIiwicGFzc3dvcmRSZWYiLCJjb25mUGFzc3dvcmRSZWYiLCJ1c2VBdXRoIiwic2lnbnVwIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VFZmZlY3QiLCJBT1MiLCJpbml0IiwiZHVyYXRpb24iLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50IiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQixNQUFNQyxRQUFRLEdBQUdDLG9EQUFNLEVBQXZCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHRCxvREFBTSxFQUExQjtBQUNBLE1BQU1FLGVBQWUsR0FBR0Ysb0RBQU0sRUFBOUI7O0FBSHFCLGlCQUlGRyxvRUFBTyxFQUpMO0FBQUEsTUFJYkMsTUFKYSxZQUliQSxNQUphOztBQUFBLGtCQUtLQyxzREFBUSxDQUFDLEVBQUQsQ0FMYjtBQUFBLE1BS2RDLEtBTGM7QUFBQSxNQUtQQyxRQUxPOztBQUFBLG1CQU1TRixzREFBUSxDQUFDLEVBQUQsQ0FOakI7QUFBQSxNQU1kRyxPQU5jO0FBQUEsTUFNTEMsVUFOSzs7QUFBQSxtQkFPU0osc0RBQVEsQ0FBQyxLQUFELENBUGpCO0FBQUEsTUFPZEssT0FQYztBQUFBLE1BT0xDLFVBUEs7O0FBQUEsbUJBUUtOLHNEQUFRLEVBUmI7QUFBQSxNQVFkTyxLQVJjO0FBQUEsTUFRUEMsUUFSTzs7QUFTckJD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QUFDRSxzQkFBUSxFQUFFUSxPQURaO0FBRUUsZ0JBQUUsRUFBQyxRQUZMO0FBR0Usa0JBQUksRUFBQyxRQUhQO0FBSUUsdUJBQVMsRUFBQyxtSUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFqREYsZUF5REU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBekRGLGVBMERFLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBQyxRQUFYO0FBQUEscUNBQ0U7QUFDRSxrQkFBRSxFQUFDLE9BREw7QUFFRSx5QkFBUyxFQUFDLG1FQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkExREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUE2R0QsQ0FqSkQ7O0dBQU1aLFE7VUFJZUssNEQ7OztLQUpmTCxRO0FBbUpTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zMDE4MjAwNjYwYzhlOTFhYzNiZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBBT1MgZnJvbSBcImFvc1wiO1xyXG5pbXBvcnQgXCJhb3MvZGlzdC9hb3MuY3NzXCI7XHJcbmltcG9ydCB7IEhpT3V0bGluZUJhZGdlQ2hlY2sgfSBmcm9tIFwicmVhY3QtaWNvbnMvaGlcIjtcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi9jb250ZXh0L0F1dGhDb250ZXh0XCI7XHJcbmNvbnN0IFJlZ2lzdGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGVtYWlsUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgcGFzc3dvcmRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBjb25mUGFzc3dvcmRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCB7IHNpZ251cCB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgQU9TLmluaXQoe1xyXG4gICAgICBkdXJhdGlvbjogMjUwMCxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHBhc3N3b3JkUmVmLmN1cnJlbnQudmFsdWUubGVuZ3RoIDwgNykge1xyXG4gICAgICByZXR1cm4gc2V0RXJyb3IoXCJQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDcgY2hhcmFjdGVycyBsb25nXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHBhc3N3b3JkUmVmLmN1cnJlbnQudmFsdWUgIT0gY29uZlBhc3N3b3JkUmVmLmN1cnJlbnQudmFsdWUpIHtcclxuICAgICAgcmV0dXJuIHNldEVycm9yKFwiUGFzc3dvcmQgZG9lcyBub3QgbWF0Y2hcIik7XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRFcnJvcihcIlwiKTtcclxuICAgICAgc2V0TWVzc2FnZShcIlwiKTtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgYXdhaXQgc2lnbnVwKGVtYWlsUmVmLmN1cnJlbnQudmFsdWUsIHBhc3N3b3JkUmVmLmN1cnJlbnQudmFsdWUpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInJlZ2lzdGVyIHN1Y2Nlc3NcIik7XHJcbiAgICAgIHNldE1lc3NhZ2UoXCJTaWduZWQgVXAgU3VjY2Vzc2Z1bGx5ICEhIFBsZWFzZSBsb2dpblwiKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEVycm9yKFwiZmFpbGVkIHRvIGNyZWF0ZSB1c2VyXCIpO1xyXG4gICAgfVxyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBncmlkLWZsb3ctcm93IGJnLWdyYWRpZW50LXRvLXIgZnJvbS1waW5rLTEwMCB2aWEtcHVycGxlLTUwIHRvLWdyYXktMjAwICBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggXCI+XHJcbiAgICAgICAgICA8ZGl2IGRhdGEtYW9zPVwiZmFkZS1yaWdodFwiIGNsYXNzTmFtZT1cInAtNCBtLTggbWItMlwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIG0tNCBtYi0yIHRleHQtcmVkLTgwMCBwLTJcIj5cclxuICAgICAgICAgICAgICBCZSBVcGRhdGVkIHdpdGggbGF0ZXN0IG5ld3MgISFcclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtbGcgdGV4dC1ncmF5LTYwMCBtLTQgbXQtMCBwLTJcIj5cclxuICAgICAgICAgICAgICBHZXQgdG8ga25vdyBhbGwgYWJvdXQgd29ybGQncyBhZmZhaXJzICwgYnVzaW5lc3MgbmV3cyBhbmQgYWxsXHJcbiAgICAgICAgICAgICAgdXBkYXRlcyBhdCBzaW5nbGUgY2xpY2tcclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTQgbWwtMCB0ZXh0LWdyYXktODAwIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgIDxIaU91dGxpbmVCYWRnZUNoZWNrIGNsYXNzTmFtZT1cImlubGluZSBtLTIgdGV4dC1ncmVlbi02MDAgdGV4dC0yeGxcIiAvPlxyXG4gICAgICAgICAgICAgICAgR2V0IGxhdGVzdCBuZXdzIGFib3V0IHBvbGl0aWNzICwgYnVzaW5lc3MgYW5kIHN0b2NrIGV4Y2hhbmdlLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTQgbWwtMCB0ZXh0LWdyYXktODAwIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgIDxIaU91dGxpbmVCYWRnZUNoZWNrIGNsYXNzTmFtZT1cImlubGluZSBtLTIgdGV4dC1ncmVlbi02MDAgdGV4dC0yeGxcIiAvPlxyXG4gICAgICAgICAgICAgICAgTmV2ZXIgbWlzcyBtYWpvciB1cGRhdGVzIHdpdGggb3VyIG5ld3MgZmVlZC5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtbGVmdFwiIGNsYXNzTmFtZT1cIm0tNCBtdC00IG1iLTAgcC04XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tYXV0byByb3VuZGVkLWxnIG10LTIgcC00IG1iLThcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTV4bCBtLTggbXQtMCBtbC0wIHRleHQtcmVkLTgwMCBcIj5cclxuICAgICAgICAgICAgICBSZWdpc3RlciBoZXJlXHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIHtlcnJvciAmJiAoXHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiIHRleHQtYmx1ZS01MDAgdGV4dC14bCBmb250LXNlbWlib2xkXCI+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3J9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7bWVzc2FnZSAmJiAoXHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiIHRleHQtZ3JlZW4tNjAwIHRleHQteGwgZm9udC1zZW1pYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAge21lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMlwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1sZyBtLTIgbWwtMCB0ZXh0LWdyYXktNTAwIGZvbnQtc2VtaWJvbGRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBFbWFpbCBBZGRyZXNzXHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsIGFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIHJlZj17ZW1haWxSZWZ9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItZ3JheS02MDAgdy05NiBtLTIgbWwtMCBwLTQgaC0xMiBib3JkZXItMiBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZ1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0yXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxnIG0tMiBtbC0wIHRleHQtZ3JheS01MDAgZm9udC1zZW1pYm9sZFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICByZWY9e3Bhc3N3b3JkUmVmfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgc2VjdXJlIHBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ncmF5LTYwMCB3LTk2IG0tMiBtbC0wIHAtNCBoLTEyIGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICBodG1sRm9yPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGcgbS0yIG1sLTAgdGV4dC1ncmF5LTUwMCBmb250LXNlbWlib2xkXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgQ29uZmlybSBQYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiY29uZmlybVBhc3Nzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgIHJlZj17Y29uZlBhc3N3b3JkUmVmfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJlLWVudGVyIHlvdXIgc2VjdXJlIHBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ncmF5LTYwMCB3LTk2IG0tMiBtbC0wIHAtNCBoLTEyIGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICBpZD1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvY3VzOm91dGxpbmUtbm9uZSBwLTIgbS00IGJvcmRlci0yIGJvcmRlci1yZWQtNzAwIGhvdmVyOmJnLXdoaXRlIGhvdmVyOnRleHQtYmxhY2sgYmctcmVkLTcwMCBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgcm91bmRlZC1sZ1wiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgUmVnaXN0ZXJcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5BbHJlYWR5IFJlZ2lzdGVyZWQgPzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBpZD1cImxvZ2luXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIG0tNCBob3Zlcjp0ZXh0LWJsdWUtODAwIHRleHQtYmx1ZS02MDAgZm9udC1zZW1pYm9sZCB0IHJvdW5kZWQtbGdcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBMb2dpbiBoZXJlXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=