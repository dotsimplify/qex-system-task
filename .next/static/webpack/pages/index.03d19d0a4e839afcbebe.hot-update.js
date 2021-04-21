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

              return _context.abrupt("return", setError("Пароль должен состоять не менее чем из 7 символов."));

            case 3:
              if (!(passwordRef.current.value != confPasswordRef.current.value)) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return", setError("Пароль не подходит"));

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
              emailRef.current.value = "";
              passwordRef.current.value = "";
              confPasswordRef.current.value = "";
              _context.next = 21;
              break;

            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](5);
              setError("failed to create user");

            case 21:
              setLoading(false);

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[5, 18]]);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "grid grid-cols-1 md:grid-cols-2 grid-flow-row bg-white  ",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex ",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "data-aos": "fade-right",
          className: "p-4 m-8 mb-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "text-3xl  font-bold m-4 mb-2  p-2",
            children: "\u0411\u0443\u0434\u044C\u0442\u0435 \u0432 \u043A\u0443\u0440\u0441\u0435 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0445 \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439 !!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "font-semibold text-lg  m-4 mt-0 p-2",
            children: ["\u0423\u0437\u043D\u0430\u0432\u0430\u0439\u0442\u0435 \u0432\u0441\u0435 \u043E \u0441\u043E\u0431\u044B\u0442\u0438\u044F\u0445 \u0432 \u043C\u0438\u0440\u0435, \u0434\u0435\u043B\u043E\u0432\u044B\u0445 \u043D\u043E\u0432\u043E\u0441\u0442\u044F\u0445 \u0438 \u0432\u0441\u0435\u0445 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F\u0445 \u043E\u0434\u043D\u0438\u043C \u0449\u0435\u043B\u0447\u043A\u043E\u043C \u043C\u044B\u0448\u0438.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "m-4 ml-0 text-gray-800 text-sm",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_hi__WEBPACK_IMPORTED_MODULE_7__["HiOutlineBadgeCheck"], {
                className: "inline m-2 text-green-600 text-2xl"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 17
              }, _this), "\u041F\u043E\u043B\u0443\u0447\u0430\u0439\u0442\u0435 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0438 \u043E \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u0435, \u0431\u0438\u0437\u043D\u0435\u0441\u0435 \u0438 \u0444\u043E\u043D\u0434\u043E\u0432\u043E\u0439 \u0431\u0438\u0440\u0436\u0435."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "m-4 ml-0 text-gray-800 text-sm",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_hi__WEBPACK_IMPORTED_MODULE_7__["HiOutlineBadgeCheck"], {
                className: "inline m-2 text-green-600 text-2xl"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 17
              }, _this), "\u041D\u0435 \u043F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u0432\u0430\u0436\u043D\u044B\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u0432 \u043D\u0430\u0448\u0435\u0439 \u043B\u0435\u043D\u0442\u0435 ."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        "data-aos": "fade-left",
        className: "m-4 mt-4 mb-0 p-8",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "m-auto rounded-lg mt-2 p-4 mb-8",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "font-bold text-3xl m-8 mt-0 ml-0 text-red-800 ",
            children: "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, _this), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: " text-blue-500 text-xl font-semibold",
            children: error
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 15
          }, _this), message && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: " text-green-600 text-xl font-semibold",
            children: message
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "m-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "name",
                className: "text-lg m-2 ml-0 text-blue-500 font-semibold",
                children: "Email Address"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
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
                lineNumber: 92,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "m-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "name",
                className: "text-lg m-2 ml-0 text-gray-500 font-semibold",
                children: "Password"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
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
                lineNumber: 108,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "m-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "name",
                className: "text-lg m-2 ml-0 text-gray-500 font-semibold",
                children: "Confirm Password"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
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
                lineNumber: 124,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              disabled: loading,
              id: "submit",
              type: "submit",
              className: "focus:outline-none p-2 m-4 border-2 border-red-700 hover:bg-white hover:text-black bg-red-700 font-semibold text-white rounded-lg",
              children: "Register"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Already Registered ?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
              href: "/login",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                id: "login",
                className: " m-4 hover:text-blue-800 text-blue-600 font-semibold t rounded-lg",
                children: "Login here"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWdpc3Rlci5qcyJdLCJuYW1lcyI6WyJSZWdpc3RlciIsImVtYWlsUmVmIiwidXNlUmVmIiwicGFzc3dvcmRSZWYiLCJjb25mUGFzc3dvcmRSZWYiLCJ1c2VBdXRoIiwic2lnbnVwIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VFZmZlY3QiLCJBT1MiLCJpbml0IiwiZHVyYXRpb24iLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50IiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQixNQUFNQyxRQUFRLEdBQUdDLG9EQUFNLEVBQXZCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHRCxvREFBTSxFQUExQjtBQUNBLE1BQU1FLGVBQWUsR0FBR0Ysb0RBQU0sRUFBOUI7O0FBSHFCLGlCQUlGRyxvRUFBTyxFQUpMO0FBQUEsTUFJYkMsTUFKYSxZQUliQSxNQUphOztBQUFBLGtCQUtLQyxzREFBUSxDQUFDLEVBQUQsQ0FMYjtBQUFBLE1BS2RDLEtBTGM7QUFBQSxNQUtQQyxRQUxPOztBQUFBLG1CQU1TRixzREFBUSxDQUFDLEVBQUQsQ0FOakI7QUFBQSxNQU1kRyxPQU5jO0FBQUEsTUFNTEMsVUFOSzs7QUFBQSxtQkFPU0osc0RBQVEsQ0FBQyxLQUFELENBUGpCO0FBQUEsTUFPZEssT0FQYztBQUFBLE1BT0xDLFVBUEs7O0FBQUEsbUJBUUtOLHNEQUFRLEVBUmI7QUFBQSxNQVFkTyxLQVJjO0FBQUEsTUFRUEMsUUFSTzs7QUFTckJD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R0Usb0JBQUksRUFBQyxrQkFIUDtBQUlFLG1CQUFHLEVBQUVDLGVBSlA7QUFLRSwyQkFBVyxFQUFDLCtCQUxkO0FBTUUseUJBQVMsRUFBQztBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWpDRixlQWlERTtBQUNFLHNCQUFRLEVBQUVRLE9BRFo7QUFFRSxnQkFBRSxFQUFDLFFBRkw7QUFHRSxrQkFBSSxFQUFDLFFBSFA7QUFJRSx1QkFBUyxFQUFDLG1JQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWpERixlQXlERTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF6REYsZUEwREUscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFDLFFBQVg7QUFBQSxxQ0FDRTtBQUNFLGtCQUFFLEVBQUMsT0FETDtBQUVFLHlCQUFTLEVBQUMsbUVBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQThHRCxDQXJKRDs7R0FBTVosUTtVQUllSyw0RDs7O0tBSmZMLFE7QUF1SlNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjAzZDE5ZDBhNGU4MzlhZmNiZWJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEFPUyBmcm9tIFwiYW9zXCI7XHJcbmltcG9ydCBcImFvcy9kaXN0L2Fvcy5jc3NcIjtcclxuaW1wb3J0IHsgSGlPdXRsaW5lQmFkZ2VDaGVjayB9IGZyb20gXCJyZWFjdC1pY29ucy9oaVwiO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uL2NvbnRleHQvQXV0aENvbnRleHRcIjtcclxuY29uc3QgUmVnaXN0ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgZW1haWxSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBwYXNzd29yZFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGNvbmZQYXNzd29yZFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHsgc2lnbnVwIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBBT1MuaW5pdCh7XHJcbiAgICAgIGR1cmF0aW9uOiAyNTAwLFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAocGFzc3dvcmRSZWYuY3VycmVudC52YWx1ZS5sZW5ndGggPCA3KSB7XHJcbiAgICAgIHJldHVybiBzZXRFcnJvcihcItCf0LDRgNC+0LvRjCDQtNC+0LvQttC10L0g0YHQvtGB0YLQvtGP0YLRjCDQvdC1INC80LXQvdC10LUg0YfQtdC8INC40LcgNyDRgdC40LzQstC+0LvQvtCyLlwiKTtcclxuICAgIH1cclxuICAgIGlmIChwYXNzd29yZFJlZi5jdXJyZW50LnZhbHVlICE9IGNvbmZQYXNzd29yZFJlZi5jdXJyZW50LnZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBzZXRFcnJvcihcItCf0LDRgNC+0LvRjCDQvdC1INC/0L7QtNGF0L7QtNC40YJcIik7XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRFcnJvcihcIlwiKTtcclxuICAgICAgc2V0TWVzc2FnZShcIlwiKTtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgYXdhaXQgc2lnbnVwKGVtYWlsUmVmLmN1cnJlbnQudmFsdWUsIHBhc3N3b3JkUmVmLmN1cnJlbnQudmFsdWUpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInJlZ2lzdGVyIHN1Y2Nlc3NcIik7XHJcbiAgICAgIHNldE1lc3NhZ2UoXCJTaWduZWQgVXAgU3VjY2Vzc2Z1bGx5ICEhIFBsZWFzZSBsb2dpblwiKTtcclxuICAgICAgZW1haWxSZWYuY3VycmVudC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIHBhc3N3b3JkUmVmLmN1cnJlbnQudmFsdWUgPSBcIlwiO1xyXG4gICAgICBjb25mUGFzc3dvcmRSZWYuY3VycmVudC52YWx1ZSA9IFwiXCI7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRFcnJvcihcImZhaWxlZCB0byBjcmVhdGUgdXNlclwiKTtcclxuICAgIH1cclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ3JpZC1mbG93LXJvdyBiZy13aGl0ZSAgXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IFwiPlxyXG4gICAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtcmlnaHRcIiBjbGFzc05hbWU9XCJwLTQgbS04IG1iLTJcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsICBmb250LWJvbGQgbS00IG1iLTIgIHAtMlwiPlxyXG4gICAgICAgICAgICAgINCR0YPQtNGM0YLQtSDQsiDQutGD0YDRgdC1INC/0L7RgdC70LXQtNC90LjRhSDQvdC+0LLQvtGB0YLQtdC5ICEhXHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWxnICBtLTQgbXQtMCBwLTJcIj5cclxuICAgICAgICAgICAgICDQo9C30L3QsNCy0LDQudGC0LUg0LLRgdC1INC+INGB0L7QsdGL0YLQuNGP0YUg0LIg0LzQuNGA0LUsINC00LXQu9C+0LLRi9GFINC90L7QstC+0YHRgtGP0YUg0Lgg0LLRgdC10YVcclxuICAgICAgICAgICAgICDQvtCx0L3QvtCy0LvQtdC90LjRj9GFINC+0LTQvdC40Lwg0YnQtdC70YfQutC+0Lwg0LzRi9GI0LguXHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS00IG1sLTAgdGV4dC1ncmF5LTgwMCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICA8SGlPdXRsaW5lQmFkZ2VDaGVjayBjbGFzc05hbWU9XCJpbmxpbmUgbS0yIHRleHQtZ3JlZW4tNjAwIHRleHQtMnhsXCIgLz5cclxuICAgICAgICAgICAgICAgINCf0L7Qu9GD0YfQsNC50YLQtSDQv9C+0YHQu9C10LTQvdC40LUg0L3QvtCy0L7RgdGC0Lgg0L4g0L/QvtC70LjRgtC40LrQtSwg0LHQuNC30L3QtdGB0LUg0Lgg0YTQvtC90LTQvtCy0L7QuVxyXG4gICAgICAgICAgICAgICAg0LHQuNGA0LbQtS5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS00IG1sLTAgdGV4dC1ncmF5LTgwMCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICA8SGlPdXRsaW5lQmFkZ2VDaGVjayBjbGFzc05hbWU9XCJpbmxpbmUgbS0yIHRleHQtZ3JlZW4tNjAwIHRleHQtMnhsXCIgLz5cclxuICAgICAgICAgICAgICAgINCd0LUg0L/RgNC+0L/Rg9GB0YLQuNGC0LUg0LLQsNC20L3Ri9C1INC+0LHQvdC+0LLQu9C10L3QuNGPINCyINC90LDRiNC10Lkg0LvQtdC90YLQtSAuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLWxlZnRcIiBjbGFzc05hbWU9XCJtLTQgbXQtNCBtYi0wIHAtOFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLWF1dG8gcm91bmRlZC1sZyBtdC0yIHAtNCBtYi04XCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0zeGwgbS04IG10LTAgbWwtMCB0ZXh0LXJlZC04MDAgXCI+XHJcbiAgICAgICAgICAgICAg0JfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPXHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIHtlcnJvciAmJiAoXHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiIHRleHQtYmx1ZS01MDAgdGV4dC14bCBmb250LXNlbWlib2xkXCI+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3J9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7bWVzc2FnZSAmJiAoXHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiIHRleHQtZ3JlZW4tNjAwIHRleHQteGwgZm9udC1zZW1pYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAge21lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMlwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1sZyBtLTIgbWwtMCB0ZXh0LWJsdWUtNTAwIGZvbnQtc2VtaWJvbGRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBFbWFpbCBBZGRyZXNzXHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsIGFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIHJlZj17ZW1haWxSZWZ9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItZ3JheS02MDAgdy05NiBtLTIgbWwtMCBwLTQgaC0xMiBib3JkZXItMiBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZ1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0yXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxnIG0tMiBtbC0wIHRleHQtZ3JheS01MDAgZm9udC1zZW1pYm9sZFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICByZWY9e3Bhc3N3b3JkUmVmfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgc2VjdXJlIHBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ncmF5LTYwMCB3LTk2IG0tMiBtbC0wIHAtNCBoLTEyIGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICBodG1sRm9yPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGcgbS0yIG1sLTAgdGV4dC1ncmF5LTUwMCBmb250LXNlbWlib2xkXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgQ29uZmlybSBQYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiY29uZmlybVBhc3Nzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgIHJlZj17Y29uZlBhc3N3b3JkUmVmfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJlLWVudGVyIHlvdXIgc2VjdXJlIHBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ncmF5LTYwMCB3LTk2IG0tMiBtbC0wIHAtNCBoLTEyIGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICBpZD1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvY3VzOm91dGxpbmUtbm9uZSBwLTIgbS00IGJvcmRlci0yIGJvcmRlci1yZWQtNzAwIGhvdmVyOmJnLXdoaXRlIGhvdmVyOnRleHQtYmxhY2sgYmctcmVkLTcwMCBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgcm91bmRlZC1sZ1wiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgUmVnaXN0ZXJcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5BbHJlYWR5IFJlZ2lzdGVyZWQgPzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBpZD1cImxvZ2luXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIG0tNCBob3Zlcjp0ZXh0LWJsdWUtODAwIHRleHQtYmx1ZS02MDAgZm9udC1zZW1pYm9sZCB0IHJvdW5kZWQtbGdcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBMb2dpbiBoZXJlXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=