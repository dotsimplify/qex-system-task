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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);





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

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();
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
            lineNumber: 50,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "font-semibold text-lg text-gray-600 m-4 mt-0 p-2",
            children: ["Get to know all about world's affairs , business news and all updates at single click", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "m-4 ml-0 text-gray-800 text-sm",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_hi__WEBPACK_IMPORTED_MODULE_7__["HiOutlineBadgeCheck"], {
                className: "inline m-2 text-green-600 text-2xl"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 17
              }, _this), "Get latest news about politics , business and stock exchange."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "m-4 ml-0 text-gray-800 text-sm",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_hi__WEBPACK_IMPORTED_MODULE_7__["HiOutlineBadgeCheck"], {
                className: "inline m-2 text-green-600 text-2xl"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 17
              }, _this), "Never miss major updates with our news feed."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
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
            lineNumber: 69,
            columnNumber: 13
          }, _this), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: " text-blue-500 text-xl font-semibold",
            children: error
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
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
                lineNumber: 79,
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
                lineNumber: 85,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "m-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "name",
                className: "text-lg m-2 ml-0 text-gray-500 font-semibold",
                children: "Password"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
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
                lineNumber: 101,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "m-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "name",
                className: "text-lg m-2 ml-0 text-gray-500 font-semibold",
                children: "Confirm Password"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
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
                lineNumber: 117,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              disabled: loading,
              id: "submit",
              type: "submit",
              className: "focus:outline-none p-2 m-4 border-2 border-red-700 hover:bg-white hover:text-black bg-red-700 font-semibold text-white rounded-lg",
              children: "Register"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Already Registered ?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
              href: "/login",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                id: "login",
                className: " m-4 hover:text-blue-800 text-blue-600 font-semibold t rounded-lg",
                children: "Login here"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(Register, "r6pxQi/jRoPaDBWQoONeVSLmteA=", false, function () {
  return [_context_AuthContext__WEBPACK_IMPORTED_MODULE_8__["useAuth"], next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"]];
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWdpc3Rlci5qcyJdLCJuYW1lcyI6WyJSZWdpc3RlciIsImVtYWlsUmVmIiwidXNlUmVmIiwicGFzc3dvcmRSZWYiLCJjb25mUGFzc3dvcmRSZWYiLCJ1c2VBdXRoIiwic2lnbnVwIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInZhbHVlIiwic2V0VmFsdWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJBT1MiLCJpbml0IiwiZHVyYXRpb24iLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50IiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFDckIsTUFBTUMsUUFBUSxHQUFHQyxvREFBTSxFQUF2QjtBQUNBLE1BQU1DLFdBQVcsR0FBR0Qsb0RBQU0sRUFBMUI7QUFDQSxNQUFNRSxlQUFlLEdBQUdGLG9EQUFNLEVBQTlCOztBQUhxQixpQkFJRkcsb0VBQU8sRUFKTDtBQUFBLE1BSWJDLE1BSmEsWUFJYkEsTUFKYTs7QUFBQSxrQkFLS0Msc0RBQVEsQ0FBQyxFQUFELENBTGI7QUFBQSxNQUtkQyxLQUxjO0FBQUEsTUFLUEMsUUFMTzs7QUFBQSxtQkFNU0Ysc0RBQVEsQ0FBQyxFQUFELENBTmpCO0FBQUEsTUFNZEcsT0FOYztBQUFBLE1BTUxDLFVBTks7O0FBQUEsbUJBT1NKLHNEQUFRLENBQUMsS0FBRCxDQVBqQjtBQUFBLE1BT2RLLE9BUGM7QUFBQSxNQU9MQyxVQVBLOztBQUFBLG1CQVFLTixzREFBUSxFQVJiO0FBQUEsTUFRZE8s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RFo7QUFFRSxnQkFBRSxFQUFDLFFBRkw7QUFHRSxrQkFBSSxFQUFDLFFBSFA7QUFJRSx1QkFBUyxFQUFDLG1JQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWpERixlQXlERTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF6REYsZUEwREUscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFDLFFBQVg7QUFBQSxxQ0FDRTtBQUNFLGtCQUFFLEVBQUMsT0FETDtBQUVFLHlCQUFTLEVBQUMsbUVBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQXdHRCxDQTdJRDs7R0FBTVosUTtVQUllSyw0RCxFQUtKWSxxRDs7O0tBVFhqQixRO0FBK0lTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hYTZlOWNkZDRhZGM2ZjI3MTc1Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBBT1MgZnJvbSBcImFvc1wiO1xyXG5pbXBvcnQgXCJhb3MvZGlzdC9hb3MuY3NzXCI7XHJcbmltcG9ydCB7IEhpT3V0bGluZUJhZGdlQ2hlY2sgfSBmcm9tIFwicmVhY3QtaWNvbnMvaGlcIjtcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi9jb250ZXh0L0F1dGhDb250ZXh0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5jb25zdCBSZWdpc3RlciA9ICgpID0+IHtcclxuICBjb25zdCBlbWFpbFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHBhc3N3b3JkUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgY29uZlBhc3N3b3JkUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgeyBzaWdudXAgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIEFPUy5pbml0KHtcclxuICAgICAgZHVyYXRpb246IDI1MDAsXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChwYXNzd29yZFJlZi5jdXJyZW50LnZhbHVlLmxlbmd0aCA8IDcpIHtcclxuICAgICAgcmV0dXJuIHNldEVycm9yKFwiUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA3IGNoYXJhY3RlcnMgbG9uZ1wiKTtcclxuICAgIH1cclxuICAgIGlmIChwYXNzd29yZFJlZi5jdXJyZW50LnZhbHVlICE9IGNvbmZQYXNzd29yZFJlZi5jdXJyZW50LnZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBzZXRFcnJvcihcIlBhc3N3b3JkIGRvZXMgbm90IG1hdGNoXCIpO1xyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgc2V0RXJyb3IoXCJcIik7XHJcbiAgICAgIHNldE1lc3NhZ2UoXCJcIik7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgIGF3YWl0IHNpZ251cChlbWFpbFJlZi5jdXJyZW50LnZhbHVlLCBwYXNzd29yZFJlZi5jdXJyZW50LnZhbHVlKTtcclxuICAgICAgY29uc29sZS5sb2coXCJyZWdpc3RlciBzdWNjZXNzXCIpO1xyXG4gICAgICBzZXRNZXNzYWdlKFwiU2lnbmVkIFVwIFN1Y2Nlc3NmdWxseSAhISBQbGVhc2UgbG9naW5cIik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRFcnJvcihcImZhaWxlZCB0byBjcmVhdGUgdXNlclwiKTtcclxuICAgIH1cclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ3JpZC1mbG93LXJvdyBiZy1ncmFkaWVudC10by1yIGZyb20tcGluay0xMDAgdmlhLXB1cnBsZS01MCB0by1ncmF5LTIwMCAgXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IFwiPlxyXG4gICAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtcmlnaHRcIiBjbGFzc05hbWU9XCJwLTQgbS04IG1iLTJcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCBtLTQgbWItMiB0ZXh0LXJlZC04MDAgcC0yXCI+XHJcbiAgICAgICAgICAgICAgQmUgVXBkYXRlZCB3aXRoIGxhdGVzdCBuZXdzICEhXHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWxnIHRleHQtZ3JheS02MDAgbS00IG10LTAgcC0yXCI+XHJcbiAgICAgICAgICAgICAgR2V0IHRvIGtub3cgYWxsIGFib3V0IHdvcmxkJ3MgYWZmYWlycyAsIGJ1c2luZXNzIG5ld3MgYW5kIGFsbFxyXG4gICAgICAgICAgICAgIHVwZGF0ZXMgYXQgc2luZ2xlIGNsaWNrXHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS00IG1sLTAgdGV4dC1ncmF5LTgwMCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICA8SGlPdXRsaW5lQmFkZ2VDaGVjayBjbGFzc05hbWU9XCJpbmxpbmUgbS0yIHRleHQtZ3JlZW4tNjAwIHRleHQtMnhsXCIgLz5cclxuICAgICAgICAgICAgICAgIEdldCBsYXRlc3QgbmV3cyBhYm91dCBwb2xpdGljcyAsIGJ1c2luZXNzIGFuZCBzdG9jayBleGNoYW5nZS5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS00IG1sLTAgdGV4dC1ncmF5LTgwMCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICA8SGlPdXRsaW5lQmFkZ2VDaGVjayBjbGFzc05hbWU9XCJpbmxpbmUgbS0yIHRleHQtZ3JlZW4tNjAwIHRleHQtMnhsXCIgLz5cclxuICAgICAgICAgICAgICAgIE5ldmVyIG1pc3MgbWFqb3IgdXBkYXRlcyB3aXRoIG91ciBuZXdzIGZlZWQuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLWxlZnRcIiBjbGFzc05hbWU9XCJtLTQgbXQtNCBtYi0wIHAtOFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLWF1dG8gcm91bmRlZC1sZyBtdC0yIHAtNCBtYi04XCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC01eGwgbS04IG10LTAgbWwtMCB0ZXh0LXJlZC04MDAgXCI+XHJcbiAgICAgICAgICAgICAgUmVnaXN0ZXIgaGVyZVxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICB7ZXJyb3IgJiYgKFxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIiB0ZXh0LWJsdWUtNTAwIHRleHQteGwgZm9udC1zZW1pYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAge2Vycm9yfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICBodG1sRm9yPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGcgbS0yIG1sLTAgdGV4dC1ncmF5LTUwMCBmb250LXNlbWlib2xkXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgRW1haWwgQWRkcmVzc1xyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICByZWY9e2VtYWlsUmVmfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWdyYXktNjAwIHctOTYgbS0yIG1sLTAgcC00IGgtMTIgYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGdcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMlwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1sZyBtLTIgbWwtMCB0ZXh0LWdyYXktNTAwIGZvbnQtc2VtaWJvbGRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBQYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgcmVmPXtwYXNzd29yZFJlZn1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHNlY3VyZSBwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItZ3JheS02MDAgdy05NiBtLTIgbWwtMCBwLTQgaC0xMiBib3JkZXItMiBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZ1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0yXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxnIG0tMiBtbC0wIHRleHQtZ3JheS01MDAgZm9udC1zZW1pYm9sZFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIENvbmZpcm0gUGFzc3dvcmRcclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbmZpcm1QYXNzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICByZWY9e2NvbmZQYXNzd29yZFJlZn1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSZS1lbnRlciB5b3VyIHNlY3VyZSBwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItZ3JheS02MDAgdy05NiBtLTIgbWwtMCBwLTQgaC0xMiBib3JkZXItMiBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZ1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb2N1czpvdXRsaW5lLW5vbmUgcC0yIG0tNCBib3JkZXItMiBib3JkZXItcmVkLTcwMCBob3ZlcjpiZy13aGl0ZSBob3Zlcjp0ZXh0LWJsYWNrIGJnLXJlZC03MDAgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIHJvdW5kZWQtbGdcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFJlZ2lzdGVyXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPHNwYW4+QWxyZWFkeSBSZWdpc3RlcmVkID88L3NwYW4+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJsb2dpblwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBtLTQgaG92ZXI6dGV4dC1ibHVlLTgwMCB0ZXh0LWJsdWUtNjAwIGZvbnQtc2VtaWJvbGQgdCByb3VuZGVkLWxnXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgTG9naW4gaGVyZVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9