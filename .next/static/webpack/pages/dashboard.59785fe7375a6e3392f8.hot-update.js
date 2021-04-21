webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\Subhash Kumar\\Desktop\\Projects\\qex-frontend\\components\\Footer.js",
    _this = undefined;



var Footer = function Footer() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "h-24 bg-blue-400 flex",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "m-auto",
      children: "Made by Subhash Kumar"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, _this);
};

_c = Footer;
/* harmony default export */ __webpack_exports__["default"] = (Footer);

var _c;

$RefreshReg$(_c, "Footer");

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/AuthContext */ "./context/AuthContext.js");
/* harmony import */ var _components_DashNav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/DashNav */ "./components/DashNav.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_verification__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/verification */ "./components/verification.js");





var _jsxFileName = "C:\\Users\\Subhash Kumar\\Desktop\\Projects\\qex-frontend\\components\\dashboard.js",
    _this = undefined,
    _s = $RefreshSig$();










var Dashboard = function Dashboard(props) {
  _s();

  var _useAuth = Object(_context_AuthContext__WEBPACK_IMPORTED_MODULE_6__["useAuth"])(),
      logout = _useAuth.logout,
      currentUser = _useAuth.currentUser;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      error = _useState[0],
      setError = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      openModal = _useState2[0],
      setOpenModal = _useState2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

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
              router.push("/login");
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              setError("Error while logging out , Try again");

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function logOut(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: currentUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_DashNav__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        className: "bg-gray-100 dark:bg-gray-800 rounded-2xl relative h-screen overflow-hidden relative",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex items-start justify-between",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-screen hidden lg:block my-4 ml-4 shadow-lg relative w-80",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "bg-white h-full rounded-2xl dark:bg-gray-700",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex items-center justify-center pt-6",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  width: "35",
                  height: "30",
                  viewBox: "0 0 256 366",
                  version: "1.1",
                  preserveAspectRatio: "xMidYMid",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("linearGradient", {
                      x1: "12.5189534%",
                      y1: "85.2128611%",
                      x2: "88.2282959%",
                      y2: "10.0225497%",
                      id: "linearGradient-1",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("stop", {
                        stopColor: "#FF0057",
                        stopOpacity: "0.16",
                        offset: "0%"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 49,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("stop", {
                        stopColor: "#FF0057",
                        offset: "86.1354%"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 54,
                        columnNumber: 27
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 42,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 41,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      d: "M0,60.8538006 C0,27.245261 27.245304,0 60.8542121,0 L117.027019,0 L255.996549,0 L255.996549,86.5999776 C255.996549,103.404155 242.374096,117.027222 225.569919,117.027222 L145.80812,117.027222 C130.003299,117.277829 117.242615,130.060011 117.027019,145.872817 L117.027019,335.28252 C117.027019,352.087312 103.404567,365.709764 86.5997749,365.709764 L0,365.709764 L0,117.027222 L0,60.8538006 Z",
                      fill: "#001B38"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 58,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
                      fill: "url(#linearGradient-1)",
                      transform: "translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) ",
                      cx: "147.013244",
                      cy: "147.014675",
                      r: "78.9933938"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 62,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
                      fill: "url(#linearGradient-1)",
                      opacity: "0.5",
                      transform: "translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) ",
                      cx: "147.013244",
                      cy: "147.014675",
                      r: "78.9933938"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 69,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 57,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 34,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
                className: "mt-6",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    className: "w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500",
                    href: "#",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "text-left",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                        width: "20",
                        height: "20",
                        fill: "currentColor",
                        viewBox: "0 0 2048 1792",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                          d: "M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 94,
                          columnNumber: 29
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 87,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 86,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "mx-4 text-sm font-normal",
                      children: "\u043F\u0440\u0438\u0431\u043E\u0440\u043D\u0430\u044F \u043F\u0430\u043D\u0435\u043B\u044C"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 97,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 82,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    className: "w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500",
                    href: "#",
                    onClick: function onClick() {
                      setOpenModal(true);
                    },
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "text-left",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                        width: "20",
                        height: "20",
                        fill: "currentColor",
                        className: "m-auto",
                        viewBox: "0 0 2048 1792",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                          d: "M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 117,
                          columnNumber: 29
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 109,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 108,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "mx-4 text-sm font-normal",
                      children: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 120,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 101,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_modal__WEBPACK_IMPORTED_MODULE_9___default.a, {
                    style: {
                      overlay: {
                        backgroundColor: "#000"
                      }
                    },
                    isOpen: openModal,
                    onRequestClose: function onRequestClose() {
                      setOpenModal(false);
                    },
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "flex",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "m-auto",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: " lg:text-5xl text-2xl font-bold text-red-800",
                          children: "\u0414\u0435\u0442\u0430\u043B\u0438 \u043F\u0440\u043E\u0444\u0438\u043B\u044F"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 137,
                          columnNumber: 29
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 136,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 135,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "flex mt-8",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "m-auto text-xl text-blue-700 font-bold",
                        children: ["\u0410\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B :", " ", currentUser && currentUser.email]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 144,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 143,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "flex m-24",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        className: "m-auto text-xl text-gray-500 font-bold",
                        children: "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0443 \xABEsc\xBB, \u0447\u0442\u043E\u0431\u044B \u0432\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u043F\u0430\u043D\u0435\u043B\u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F, \u0438\u043B\u0438 \u0449\u0435\u043B\u043A\u043D\u0438\u0442\u0435 \u0434\u043B\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u043D\u0430\u043B\u043E\u0436\u0435\u043D\u0438\u044F."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 150,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 149,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    className: "w-full font-thin uppercase text-gray-500 cursor-pointer dark:text-gray-200 flex items-center p-4 my-2 focus:outline-none transition-colors duration-200 justify-start hover:text-blue-500",
                    onClick: logOut,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "text-left",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                        width: "20",
                        height: "20",
                        fill: "currentColor",
                        className: "m-auto",
                        viewBox: "0 0 2048 1792",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                          d: "M685 483q16 0 27.5-11.5t11.5-27.5-11.5-27.5-27.5-11.5-27 11.5-11 27.5 11 27.5 27 11.5zm422 0q16 0 27-11.5t11-27.5-11-27.5-27-11.5-27.5 11.5-11.5 27.5 11.5 27.5 27.5 11.5zm-812 184q42 0 72 30t30 72v430q0 43-29.5 73t-72.5 30-73-30-30-73v-430q0-42 30-72t73-30zm1060 19v666q0 46-32 78t-77 32h-75v227q0 43-30 73t-73 30-73-30-30-73v-227h-138v227q0 43-30 73t-73 30q-42 0-72-30t-30-73l-1-227h-74q-46 0-78-32t-32-78v-666h918zm-232-405q107 55 171 153.5t64 215.5h-925q0-117 64-215.5t172-153.5l-71-131q-7-13 5-20 13-6 20 6l72 132q95-42 201-42t201 42l72-132q7-12 20-6 12 7 5 20zm477 488v430q0 43-30 73t-73 30q-42 0-72-30t-30-73v-430q0-43 30-72.5t72-29.5q43 0 73 29.5t30 72.5z"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 171,
                          columnNumber: 29
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 163,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 162,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "mx-4 text-sm font-normal",
                      children: "\u0432\u044B\u0439\u0442\u0438"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 174,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 158,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex flex-col w-full pl-0 md:p-4 md:space-y-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
              className: "w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-0",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "relative z-0 flex flex-col justify-center h-full px-3 mx-auto flex-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "container relative left-0 z-0 flex w-3/4 h-auto h-full",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "relative flex items-center w-full lg:w-64 h-full group",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "absolute z-0 flex items-center justify-center block w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                          fill: "none",
                          className: "relative w-5 h-5",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                            d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 196,
                            columnNumber: 31
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 187,
                          columnNumber: 29
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 186,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                        className: "absolute left-0 z-0 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                          d: "M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 204,
                          columnNumber: 29
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 199,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        type: "text",
                        className: "block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input",
                        placeholder: "\u043F\u043E\u0438\u0441\u043A"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 206,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "absolute right-0 hidden h-auto px-2 py-1 mr-2 text-xs text-gray-400 border border-gray-300 rounded-2xl md:block",
                        children: "+"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 211,
                        columnNumber: 27
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 185,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 184,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "text-blue-700 font-semibold",
                      children: currentUser && currentUser.email
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 217,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 216,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 183,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 182,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex flex-col flex-wrap sm:flex-row ",
                children: [console.log(props.data.news.articles), props.data.news.articles.map(function (news) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "w-full sm:w-1/2 xl:w-1/3",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "m-2",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "shadow-lg m-2 rounded-2xl p-4 bg-white dark:bg-gray-700 w-full",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                          className: "rounded-lg",
                          src: news.urlToImage,
                          alt: news.title
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 231,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          href: news.url,
                          target: "_blank",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                            className: "break-words font-semibold text-xl hover:text-blue-600",
                            children: news.title
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 237,
                            columnNumber: 31
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 236,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 230,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 229,
                      columnNumber: 25
                    }, _this)
                  }, news.url, false, {
                    fileName: _jsxFileName,
                    lineNumber: 228,
                    columnNumber: 23
                  }, _this);
                })]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 225,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 224,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 11
      }, _this)]
    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_verification__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 9
    }, _this)
  }, void 0, false);
};

_s(Dashboard, "Y1rINvq1/DzFhydW/DksNi9/0/M=", false, function () {
  return [_context_AuthContext__WEBPACK_IMPORTED_MODULE_6__["useAuth"], next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = Dashboard;
/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

var _c;

$RefreshReg$(_c, "Dashboard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZGFzaGJvYXJkLmpzIl0sIm5hbWVzIjpbIkZvb3RlciIsIkRhc2hib2FyZCIsInByb3BzIiwidXNlQXV0aCIsImxvZ291dCIsImN1cnJlbnRVc2VyIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwicm91dGVyIiwidXNlUm91dGVyIiwibG9nT3V0IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwib3ZlcmxheSIsImJhY2tncm91bmRDb2xvciIsImVtYWlsIiwiZGF0YSIsIm5ld3MiLCJhcnRpY2xlcyIsIm1hcCIsInVybFRvSW1hZ2UiLCJ0aXRsZSIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ25CLHNCQUNFO0FBQUssYUFBUyxFQUFDLHVCQUFmO0FBQUEsMkJBQ0U7QUFBRyxlQUFTLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBTkQ7O0tBQU1BLE07QUFRU0EscUVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGlCQUNLQyxvRUFBTyxFQURaO0FBQUEsTUFDbkJDLE1BRG1CLFlBQ25CQSxNQURtQjtBQUFBLE1BQ1hDLFdBRFcsWUFDWEEsV0FEVzs7QUFBQSxr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QUNLLEdBQWQ7QUFBbUIsZ0NBQU0sRUFBQyxRQUExQjtBQUFBLGlEQUNFO0FBQUcscUNBQVMsRUFBQyx1REFBYjtBQUFBLHNDQUNHTCxJQUFJLENBQUNJO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLHFCQUFVSixJQUFJLENBQUNLLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFENEI7QUFBQSxpQkFBN0IsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTVDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBdEpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQStORSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBL05GO0FBQUEsb0JBRFUsZ0JBbU9WLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFwT0osbUJBREY7QUF5T0QsQ0F4UEQ7O0dBQU0xQixTO1VBQzRCRSw0RCxFQUdqQlMscUQ7OztLQUpYWCxTO0FBMFBTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQuNTk3ODVmZTczNzVhNmUzMzkyZjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLTI0IGJnLWJsdWUtNDAwIGZsZXhcIj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwibS1hdXRvXCI+TWFkZSBieSBTdWJoYXNoIEt1bWFyPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vY29udGV4dC9BdXRoQ29udGV4dFwiO1xyXG5pbXBvcnQgRGFzaE5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9EYXNoTmF2XCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtbW9kYWxcIjtcclxuaW1wb3J0IFZlcmlmaWNhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy92ZXJpZmljYXRpb25cIjtcclxuY29uc3QgRGFzaGJvYXJkID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBsb2dvdXQsIGN1cnJlbnRVc2VyIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbb3Blbk1vZGFsLCBzZXRPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGxvZ091dCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRFcnJvcihcIlwiKTtcclxuICAgICAgYXdhaXQgbG9nb3V0KCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibG9nIG91dCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0RXJyb3IoXCJFcnJvciB3aGlsZSBsb2dnaW5nIG91dCAsIFRyeSBhZ2FpblwiKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7Y3VycmVudFVzZXIgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxEYXNoTmF2IC8+XHJcbiAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCBkYXJrOmJnLWdyYXktODAwIHJvdW5kZWQtMnhsIHJlbGF0aXZlIGgtc2NyZWVuIG92ZXJmbG93LWhpZGRlbiByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiBoaWRkZW4gbGc6YmxvY2sgbXktNCBtbC00IHNoYWRvdy1sZyByZWxhdGl2ZSB3LTgwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIGgtZnVsbCByb3VuZGVkLTJ4bCBkYXJrOmJnLWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNTYgMzY2XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb249XCIxLjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeDE9XCIxMi41MTg5NTM0JVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeTE9XCI4NS4yMTI4NjExJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeDI9XCI4OC4yMjgyOTU5JVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeTI9XCIxMC4wMjI1NDk3JVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJsaW5lYXJHcmFkaWVudC0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wQ29sb3I9XCIjRkYwMDU3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BPcGFjaXR5PVwiMC4xNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ9XCIwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3RvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjRkYwMDU3XCIgb2Zmc2V0PVwiODYuMTM1NCVcIj48L3N0b3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTAsNjAuODUzODAwNiBDMCwyNy4yNDUyNjEgMjcuMjQ1MzA0LDAgNjAuODU0MjEyMSwwIEwxMTcuMDI3MDE5LDAgTDI1NS45OTY1NDksMCBMMjU1Ljk5NjU0OSw4Ni41OTk5Nzc2IEMyNTUuOTk2NTQ5LDEwMy40MDQxNTUgMjQyLjM3NDA5NiwxMTcuMDI3MjIyIDIyNS41Njk5MTksMTE3LjAyNzIyMiBMMTQ1LjgwODEyLDExNy4wMjcyMjIgQzEzMC4wMDMyOTksMTE3LjI3NzgyOSAxMTcuMjQyNjE1LDEzMC4wNjAwMTEgMTE3LjAyNzAxOSwxNDUuODcyODE3IEwxMTcuMDI3MDE5LDMzNS4yODI1MiBDMTE3LjAyNzAxOSwzNTIuMDg3MzEyIDEwMy40MDQ1NjcsMzY1LjcwOTc2NCA4Ni41OTk3NzQ5LDM2NS43MDk3NjQgTDAsMzY1LjcwOTc2NCBMMCwxMTcuMDI3MjIyIEwwLDYwLjg1MzgwMDYgWlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiMwMDFCMzhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cInVybCgjbGluZWFyR3JhZGllbnQtMSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNDcuMDEzMjQ0LCAxNDcuMDE0Njc1KSByb3RhdGUoOTAuMDAwMDAwKSB0cmFuc2xhdGUoLTE0Ny4wMTMyNDQsIC0xNDcuMDE0Njc1KSBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGN4PVwiMTQ3LjAxMzI0NFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3k9XCIxNDcuMDE0Njc1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByPVwiNzguOTkzMzkzOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2NpcmNsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI2xpbmVhckdyYWRpZW50LTEpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5PVwiMC41XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTQ3LjAxMzI0NCwgMTQ3LjAxNDY3NSkgcm90YXRlKDkwLjAwMDAwMCkgdHJhbnNsYXRlKC0xNDcuMDEzMjQ0LCAtMTQ3LjAxNDY3NSkgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjeD1cIjE0Ny4wMTMyNDRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGN5PVwiMTQ3LjAxNDY3NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcj1cIjc4Ljk5MzM5MzhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9jaXJjbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm10LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGZvbnQtdGhpbiB1cHBlcmNhc2UgdGV4dC1ibHVlLTUwMCBmbGV4IGl0ZW1zLWNlbnRlciBwLTQgbXktMiB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAganVzdGlmeS1zdGFydCBiZy1ncmFkaWVudC10by1yIGZyb20td2hpdGUgdG8tYmx1ZS0xMDAgYm9yZGVyLXItNCBib3JkZXItYmx1ZS01MDAgZGFyazpmcm9tLWdyYXktNzAwIGRhcms6dG8tZ3JheS04MDAgYm9yZGVyLXItNCBib3JkZXItYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwNDggMTc5MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEwNzAgMTE3OGwzMDYtNTY0aC02NTRsLTMwNiA1NjRoNjU0em03MjItMjgycTAgMTgyLTcxIDM0OHQtMTkxIDI4Ni0yODYgMTkxLTM0OCA3MS0zNDgtNzEtMjg2LTE5MS0xOTEtMjg2LTcxLTM0OCA3MS0zNDggMTkxLTI4NiAyODYtMTkxIDM0OC03MSAzNDggNzEgMjg2IDE5MSAxOTEgMjg2IDcxIDM0OHpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXgtNCB0ZXh0LXNtIGZvbnQtbm9ybWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAg0L/RgNC40LHQvtGA0L3QsNGPINC/0LDQvdC10LvRjFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZm9udC10aGluIHVwcGVyY2FzZSB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTIwMCBmbGV4IGl0ZW1zLWNlbnRlciBwLTQgbXktMiB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAganVzdGlmeS1zdGFydCBob3Zlcjp0ZXh0LWJsdWUtNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3Blbk1vZGFsKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibS1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjA0OCAxNzkyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTAyNCAxMTMxcTAtNjQtOS0xMTcuNXQtMjkuNS0xMDMtNjAuNS03OC05Ny0yOC41cS02IDQtMzAgMTh0LTM3LjUgMjEuNS0zNS41IDE3LjUtNDMgMTQuNS00MiA0LjUtNDItNC41LTQzLTE0LjUtMzUuNS0xNy41LTM3LjUtMjEuNS0zMC0xOHEtNTcgMC05NyAyOC41dC02MC41IDc4LTI5LjUgMTAzLTkgMTE3LjUgMzcgMTA2LjUgOTEgNDIuNWg1MTJxNTQgMCA5MS00Mi41dDM3LTEwNi41em0tMTU3LTUyMHEwLTk0LTY2LjUtMTYwLjV0LTE2MC41LTY2LjUtMTYwLjUgNjYuNS02Ni41IDE2MC41IDY2LjUgMTYwLjUgMTYwLjUgNjYuNSAxNjAuNS02Ni41IDY2LjUtMTYwLjV6bTkyNSA1MDl2LTY0cTAtMTQtOS0yM3QtMjMtOWgtNTc2cS0xNCAwLTIzIDl0LTkgMjN2NjRxMCAxNCA5IDIzdDIzIDloNTc2cTE0IDAgMjMtOXQ5LTIzem0wLTI2MHYtNTZxMC0xNS0xMC41LTI1LjV0LTI1LjUtMTAuNWgtNTY4cS0xNSAwLTI1LjUgMTAuNXQtMTAuNSAyNS41djU2cTAgMTUgMTAuNSAyNS41dDI1LjUgMTAuNWg1NjhxMTUgMCAyNS41LTEwLjV0MTAuNS0yNS41em0wLTI1MnYtNjRxMC0xNC05LTIzdC0yMy05aC01NzZxLTE0IDAtMjMgOXQtOSAyM3Y2NHEwIDE0IDkgMjN0MjMgOWg1NzZxMTQgMCAyMy05dDktMjN6bTI1Ni0zMjB2MTIxNnEwIDY2LTQ3IDExM3QtMTEzIDQ3aC0zNTJ2LTk2cTAtMTQtOS0yM3QtMjMtOWgtNjRxLTE0IDAtMjMgOXQtOSAyM3Y5NmgtNzY4di05NnEwLTE0LTktMjN0LTIzLTloLTY0cS0xNCAwLTIzIDl0LTkgMjN2OTZoLTM1MnEtNjYgMC0xMTMtNDd0LTQ3LTExM3YtMTIxNnEwLTY2IDQ3LTExM3QxMTMtNDdoMTcyOHE2NiAwIDExMyA0N3Q0NyAxMTN6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm14LTQgdGV4dC1zbSBmb250LW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgINCf0YDQvtGE0LjQu9GMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNPcGVuPXtvcGVuTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3Blbk1vZGFsKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGxnOnRleHQtNXhsIHRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LXJlZC04MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JTQtdGC0LDQu9C4INC/0YDQvtGE0LjQu9GPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXQtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS1hdXRvIHRleHQteGwgdGV4dC1ibHVlLTcwMCBmb250LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCQ0LTRgNC10YEg0Y3Qu9C10LrRgtGA0L7QvdC90L7QuSDQv9C+0YfRgtGLIDp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFVzZXIgJiYgY3VycmVudFVzZXIuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbS0yNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0tYXV0byB0ZXh0LXhsIHRleHQtZ3JheS01MDAgZm9udC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQndCw0LbQvNC40YLQtSDQutC70LDQstC40YjRgyDCq0VzY8K7LCDRh9GC0L7QsdGLINCy0LXRgNC90YPRgtGM0YHRjyDQvdCwINGB0YLRgNCw0L3QuNGG0YNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINC/0LDQvdC10LvQuCDRg9C/0YDQsNCy0LvQtdC90LjRjywg0LjQu9C4INGJ0LXQu9C60L3QuNGC0LUg0LTQu9GPINC+0LHQu9Cw0YHRgtC4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQvdCw0LvQvtC20LXQvdC40Y8uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZm9udC10aGluIHVwcGVyY2FzZSB0ZXh0LWdyYXktNTAwIGN1cnNvci1wb2ludGVyIGRhcms6dGV4dC1ncmF5LTIwMCBmbGV4IGl0ZW1zLWNlbnRlciBwLTQgbXktMiBmb2N1czpvdXRsaW5lLW5vbmUgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGp1c3RpZnktc3RhcnQgaG92ZXI6dGV4dC1ibHVlLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2xvZ091dH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm0tYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwNDggMTc5MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTY4NSA0ODNxMTYgMCAyNy41LTExLjV0MTEuNS0yNy41LTExLjUtMjcuNS0yNy41LTExLjUtMjcgMTEuNS0xMSAyNy41IDExIDI3LjUgMjcgMTEuNXptNDIyIDBxMTYgMCAyNy0xMS41dDExLTI3LjUtMTEtMjcuNS0yNy0xMS41LTI3LjUgMTEuNS0xMS41IDI3LjUgMTEuNSAyNy41IDI3LjUgMTEuNXptLTgxMiAxODRxNDIgMCA3MiAzMHQzMCA3MnY0MzBxMCA0My0yOS41IDczdC03Mi41IDMwLTczLTMwLTMwLTczdi00MzBxMC00MiAzMC03MnQ3My0zMHptMTA2MCAxOXY2NjZxMCA0Ni0zMiA3OHQtNzcgMzJoLTc1djIyN3EwIDQzLTMwIDczdC03MyAzMC03My0zMC0zMC03M3YtMjI3aC0xMzh2MjI3cTAgNDMtMzAgNzN0LTczIDMwcS00MiAwLTcyLTMwdC0zMC03M2wtMS0yMjdoLTc0cS00NiAwLTc4LTMydC0zMi03OHYtNjY2aDkxOHptLTIzMi00MDVxMTA3IDU1IDE3MSAxNTMuNXQ2NCAyMTUuNWgtOTI1cTAtMTE3IDY0LTIxNS41dDE3Mi0xNTMuNWwtNzEtMTMxcS03LTEzIDUtMjAgMTMtNiAyMCA2bDcyIDEzMnE5NS00MiAyMDEtNDJ0MjAxIDQybDcyLTEzMnE3LTEyIDIwLTYgMTIgNyA1IDIwem00NzcgNDg4djQzMHEwIDQzLTMwIDczdC03MyAzMHEtNDIgMC03Mi0zMHQtMzAtNzN2LTQzMHEwLTQzIDMwLTcyLjV0NzItMjkuNXE0MyAwIDczIDI5LjV0MzAgNzIuNXpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXgtNCB0ZXh0LXNtIGZvbnQtbm9ybWFsXCI+0LLRi9C50YLQuDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgcGwtMCBtZDpwLTQgbWQ6c3BhY2UteS00XCI+XHJcbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInctZnVsbCBzaGFkb3ctbGcgYmctd2hpdGUgZGFyazpiZy1ncmF5LTcwMCBpdGVtcy1jZW50ZXIgaC0xNiByb3VuZGVkLTJ4bCB6LTBcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBoLWZ1bGwgcHgtMyBteC1hdXRvIGZsZXgtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBpdGVtcy1jZW50ZXIgcGwtMSBmbGV4IHctZnVsbCBsZzptYXgtdy02OCBzbTpwci0yIHNtOm1sLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHJlbGF0aXZlIGxlZnQtMCB6LTAgZmxleCB3LTMvNCBoLWF1dG8gaC1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXIgdy1mdWxsIGxnOnctNjQgaC1mdWxsIGdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB6LTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmxvY2sgdy1hdXRvIGgtMTAgcC0zIHByLTIgdGV4dC1zbSB0ZXh0LWdyYXktNTAwIHVwcGVyY2FzZSBjdXJzb3ItcG9pbnRlciBzbTpoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LTUgaC01XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEwIDE0bDItMm0wIDBsMi0ybS0yIDJsLTItMm0yIDJsMiAybTctMmE5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTAgei0wIGhpZGRlbiB3LTQgaC00IG1sLTQgdGV4dC1ncmF5LTUwMCBwb2ludGVyLWV2ZW50cy1ub25lIGZpbGwtY3VycmVudCBncm91cC1ob3Zlcjp0ZXh0LWdyYXktNDAwIHNtOmJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMi45IDE0LjMyYTggOCAwIDEgMSAxLjQxLTEuNDFsNS4zNSA1LjMzLTEuNDIgMS40Mi01LjMzLTUuMzR6TTggMTRBNiA2IDAgMSAwIDggMmE2IDYgMCAwIDAgMCAxMnpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgcHktMS41IHBsLTEwIHByLTQgbGVhZGluZy1ub3JtYWwgcm91bmRlZC0yeGwgZm9jdXM6Ym9yZGVyLXRyYW5zcGFyZW50IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTUwMCByaW5nLW9wYWNpdHktOTAgYmctZ3JheS0xMDAgZGFyazpiZy1ncmF5LTgwMCB0ZXh0LWdyYXktNDAwIGFhLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0L/QvtC40YHQulwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgaGlkZGVuIGgtYXV0byBweC0yIHB5LTEgbXItMiB0ZXh0LXhzIHRleHQtZ3JheS00MDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLTJ4bCBtZDpibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBwLTEgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmQgdy0xLzQgbWwtNSBtci00IHNtOm1yLTAgc206cmlnaHQtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNzAwIGZvbnQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFVzZXIgJiYgY3VycmVudFVzZXIuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1hdXRvIGgtc2NyZWVuIHBiLTI0IHB0LTIgcHItMiBwbC0yIG1kOnB0LTAgbWQ6cHItMCBtZDpwbC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBmbGV4LXdyYXAgc206ZmxleC1yb3cgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKHByb3BzLmRhdGEubmV3cy5hcnRpY2xlcyl9XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRhdGEubmV3cy5hcnRpY2xlcy5tYXAoKG5ld3MpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtuZXdzLnVybH0gY2xhc3NOYW1lPVwidy1mdWxsIHNtOnctMS8yIHhsOnctMS8zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3ctbGcgbS0yIHJvdW5kZWQtMnhsIHAtNCBiZy13aGl0ZSBkYXJrOmJnLWdyYXktNzAwIHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtuZXdzLnVybFRvSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17bmV3cy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtuZXdzLnVybH0gdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJyZWFrLXdvcmRzIGZvbnQtc2VtaWJvbGQgdGV4dC14bCBob3Zlcjp0ZXh0LWJsdWUtNjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25ld3MudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPFZlcmlmaWNhdGlvbiAvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==