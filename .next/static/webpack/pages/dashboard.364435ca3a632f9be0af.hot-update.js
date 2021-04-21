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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/AuthContext */ "./context/AuthContext.js");





var _jsxFileName = "C:\\Users\\Subhash Kumar\\Desktop\\Projects\\qex-frontend\\components\\dashboard.js",
    _this = undefined,
    _s = $RefreshSig$();





var dashboard = function dashboard() {
  _s();

  var _useAuth = Object(_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__["useAuth"])(),
      logout = _useAuth.logout,
      currentUser = _useAuth.currentUser;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      error = _useState[0],
      setError = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
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
                      "stop-color": "#FF0057",
                      "stop-opacity": "0.16",
                      offset: "0%"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 40,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("stop", {
                      "stop-color": "#FF0057",
                      offset: "86.1354%"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 45,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 33,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 32,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M0,60.8538006 C0,27.245261 27.245304,0 60.8542121,0 L117.027019,0 L255.996549,0 L255.996549,86.5999776 C255.996549,103.404155 242.374096,117.027222 225.569919,117.027222 L145.80812,117.027222 C130.003299,117.277829 117.242615,130.060011 117.027019,145.872817 L117.027019,335.28252 C117.027019,352.087312 103.404567,365.709764 86.5997749,365.709764 L0,365.709764 L0,117.027222 L0,60.8538006 Z",
                    fill: "#001B38"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 49,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
                    fill: "url(#linearGradient-1)",
                    transform: "translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) ",
                    cx: "147.013244",
                    cy: "147.014675",
                    r: "78.9933938"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 53,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
                    fill: "url(#linearGradient-1)",
                    opacity: "0.5",
                    transform: "translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) ",
                    cx: "147.013244",
                    cy: "147.014675",
                    r: "78.9933938"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 60,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 15
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
                        lineNumber: 85,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 78,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 77,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "mx-4 text-sm font-normal",
                    children: "Dashboard"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 88,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: "w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500",
                  href: "#",
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
                        lineNumber: 103,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 95,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 94,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "mx-4 text-sm font-normal",
                    children: "Projects"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 106,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: "w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500",
                  href: "#",
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
                        lineNumber: 121,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 113,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 112,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "mx-4 text-sm font-normal",
                    children: "My tasks"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: "w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500",
                  href: "#",
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
                        d: "M960 0l960 384v128h-128q0 26-20.5 45t-48.5 19h-1526q-28 0-48.5-19t-20.5-45h-128v-128zm-704 640h256v768h128v-768h256v768h128v-768h256v768h128v-768h256v768h59q28 0 48.5 19t20.5 45v64h-1664v-64q0-26 20.5-45t48.5-19h59v-768zm1595 960q28 0 48.5 19t20.5 45v128h-1920v-128q0-26 20.5-45t48.5-19h1782z"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 139,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 131,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 130,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "mx-4 text-sm font-normal",
                    children: "Calendar"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 142,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: "w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500",
                  href: "#",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "text-left",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                      width: "20",
                      height: "20",
                      className: "m-auto",
                      fill: "currentColor",
                      viewBox: "0 0 2048 1792",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                        d: "M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 157,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 149,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 148,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "mx-4 text-sm font-normal",
                    children: "Time manage"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 160,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: "w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500",
                  href: "#",
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
                        lineNumber: 177,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 169,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 168,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "mx-4 text-sm font-normal",
                    children: "Reports"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 180,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 164,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: "w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500",
                  href: "#",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "text-left",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                      width: "20",
                      fill: "currentColor",
                      height: "20",
                      className: "h-5 w-5",
                      viewBox: "0 0 1792 1792",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                        d: "M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 195,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 187,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 186,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "mx-4 text-sm font-normal",
                    children: "Settings"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 198,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 182,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-col w-full pl-0 md:p-4 md:space-y-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
            className: "w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "container relative left-0 z-50 flex w-3/4 h-auto h-full",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "relative flex items-center w-full lg:w-64 h-full group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "absolute z-50 flex items-center justify-center block w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                        fill: "none",
                        className: "relative w-5 h-5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                          d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 220,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 211,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 210,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                      className: "absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 20 20",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                        d: "M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 228,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 223,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      type: "text",
                      className: "block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input",
                      placeholder: "Search"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 230,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "absolute right-0 hidden h-auto px-2 py-1 mr-2 text-xs text-gray-400 border border-gray-300 rounded-2xl md:block",
                      children: "+"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 235,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 209,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 208,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "#",
                    className: "block relative",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      alt: "profil",
                      src: "/images/person/1.jpg",
                      className: "mx-auto object-cover rounded-full h-10 w-10 "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 242,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 241,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 240,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 207,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex flex-col flex-wrap sm:flex-row ",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "w-full sm:w-1/2 xl:w-1/3",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "mb-4",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "flex items-center justify-between mb-6",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "rounded-xl relative p-2 bg-blue-100",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                            width: "25",
                            height: "25",
                            viewBox: "0 0 256 262",
                            xmlns: "http://www.w3.org/2000/svg",
                            preserveAspectRatio: "xMidYMid",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                              d: "M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027",
                              fill: "#4285F4"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 267,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                              d: "M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1",
                              fill: "#34A853"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 271,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                              d: "M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782",
                              fill: "#FBBC05"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 275,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                              d: "M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251",
                              fill: "#EB4335"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 279,
                              columnNumber: 31
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 260,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 259,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "flex flex-col",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "font-bold text-md text-black dark:text-white ml-2",
                            children: "Google"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 286,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "text-sm text-gray-500 dark:text-white ml-2",
                            children: "Google Inc."
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 289,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 285,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 258,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                          className: "border p-1 border-gray-200 rounded-full",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "20",
                            height: "20",
                            className: "w-4 h-4 text-yellow-500",
                            fill: "currentColor",
                            viewBox: "0 0 1792 1792",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                              d: "M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 304,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 296,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 295,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                          className: "text-gray-200",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                            width: "25",
                            height: "25",
                            fill: "currentColor",
                            viewBox: "0 0 1792 1792",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                              d: "M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 315,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 308,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 307,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 294,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 257,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "flex -space-x-2",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#",
                        className: "",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                          className: "inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white",
                          src: "/images/person/1.jpg",
                          alt: "Guy"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 322,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 321,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#",
                        className: "",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                          className: "inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white",
                          src: "/images/person/2.jpeg",
                          alt: "Max"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 329,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 328,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#",
                        className: "",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                          className: "inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white",
                          src: "/images/person/3.jpg",
                          alt: "Charles"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 336,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 335,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#",
                        className: "",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                          className: "inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white",
                          src: "/images/person/4.jpg",
                          alt: "Jade"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 343,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 342,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 320,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "px-2 py-1 flex w-36 mt-4 items-center text-xs rounded-md font-semibold text-yellow-500 bg-yellow-100",
                      children: "DUE DATE : 18 JUN"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 350,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 256,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 255,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "mb-4",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "flex items-center justify-between mb-6",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "rounded-xl relative p-2 bg-blue-100",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                            width: "25",
                            height: "25",
                            viewBox: "0 0 2447.6 2452.5",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
                              "clip-rule": "evenodd",
                              "fill-rule": "evenodd",
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                                d: "m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z",
                                fill: "#36c5f0"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 367,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                                d: "m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z",
                                fill: "#2eb67d"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 371,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                                d: "m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z",
                                fill: "#ecb22e"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 375,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                                d: "m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0",
                                fill: "#e01e5a"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 379,
                                columnNumber: 33
                              }, _this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 366,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 360,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 359,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "flex flex-col",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "font-bold text-md text-black dark:text-white ml-2",
                            children: "Slack"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 387,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "text-sm text-gray-500 dark:text-white ml-2",
                            children: "Slack corporation"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 390,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 386,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 358,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                          className: "border p-1 border-gray-200 rounded-full",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "20",
                            height: "20",
                            className: "w-4 h-4 text-yellow-500",
                            fill: "currentColor",
                            viewBox: "0 0 1792 1792",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                              d: "M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 405,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 397,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 396,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                          className: "text-gray-200",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                            width: "25",
                            height: "25",
                            fill: "currentColor",
                            viewBox: "0 0 1792 1792",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                              d: "M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 416,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 409,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 408,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 395,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 357,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "flex items-center justify-between mb-4 space-x-12",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "px-2 py-1 flex items-center font-semibold text-xs rounded-md text-green-700 bg-green-50",
                        children: "COMPLETED"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 422,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "px-2 py-1 flex items-center font-semibold text-xs rounded-md text-green-600 border border-green-600 bg-white",
                        children: "MEDIUM PRIORITY"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 425,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 421,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "block m-auto",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "text-sm inline-block text-gray-500 dark:text-gray-100",
                          children: ["Task done :", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "text-gray-700 dark:text-white font-bold",
                            children: "50"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 433,
                            columnNumber: 29
                          }, _this), "/50"]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 431,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 430,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "w-full h-2 bg-gray-200 rounded-full mt-2",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "w-full h-full text-center text-xs text-white bg-pink-400 rounded-full"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 440,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 439,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 429,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "flex items-center justify-start my-4 space-x-4",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "px-2 py-1 flex items-center text-xs rounded-md font-semibold text-green-500 bg-green-50",
                        children: "IOS APP"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 444,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "px-2 py-1 flex items-center text-xs rounded-md text-yellow-600 font-semibold bg-yellow-200",
                        children: "ANDROID"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 447,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 443,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "flex -space-x-2",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#",
                        className: "",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                          className: "inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white",
                          src: "/images/person/1.jpg",
                          alt: "Guy"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 453,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 452,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#",
                        className: "",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                          className: "inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white",
                          src: "/images/person/2.jpeg",
                          alt: "Max"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 460,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 459,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#",
                        className: "",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                          className: "inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white",
                          src: "/images/person/3.jpg",
                          alt: "Charles"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 467,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 466,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#",
                        className: "",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                          className: "inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white",
                          src: "/images/person/4.jpg",
                          alt: "Jade"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 474,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 473,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 451,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "px-2 py-1 flex w-36 mt-4 items-center text-xs rounded-md font-semibold text-yellow-500 bg-yellow-100",
                      children: "DUE DATE : 18 JUN"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 481,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 356,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 355,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 254,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "w-full sm:w-1/2 xl:w-1/3",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "mb-4 mx-0 sm:ml-4 xl:mr-4",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "shadow-lg rounded-2xl bg-white dark:bg-gray-700 w-full",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "font-bold text-md p-4 text-black dark:text-white",
                      children: ["My Tasks", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "text-sm text-gray-500 dark:text-gray-300 dark:text-white ml-2",
                        children: "(05)"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 492,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 490,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                        className: "flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "flex items-center justify-start text-sm",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "mx-4",
                            children: "01"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 499,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            children: "Create wireframe"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 500,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 498,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                          width: "20",
                          height: "20",
                          fill: "currentColor",
                          className: "mx-4 text-gray-400 dark:text-gray-300",
                          viewBox: "0 0 1024 1024",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                            d: "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z",
                            fill: "currentColor"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 509,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                            d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z",
                            fill: "currentColor"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 513,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 502,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 497,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                        className: "flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "flex items-center justify-start text-sm",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "mx-4",
                            children: "02"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 521,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            children: "Dashboard design"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 522,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "lg:ml-6 ml-2 flex items-center text-gray-400 dark:text-gray-300",
                            children: ["3", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                              width: "15",
                              height: "15",
                              fill: "currentColor",
                              className: "ml-1",
                              viewBox: "0 0 512 512",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                                d: "M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2l-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29c7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1l-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160s-93.3 160-208 160z",
                                fill: "currentColor"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 532,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 525,
                              columnNumber: 31
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 523,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "mx-4 flex items-center text-gray-400 dark:text-gray-300",
                            children: ["3", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                              width: "15",
                              height: "15",
                              className: "ml-1",
                              fill: "currentColor",
                              viewBox: "0 0 384 512",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                                d: "M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8c-.6 16.1-4.2 28.5-11 36.9c-15.4 19.2-49.3 22.4-85.2 25.7c-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3c0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6c3.1-5.2 7.8-9.8 14.9-13.4c16.2-8.2 40.4-10.4 66.1-12.8c42.2-3.9 90-8.4 118.2-43.4c14-17.4 21.1-39.8 21.6-67.9c31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16z",
                                fill: "currentColor"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 547,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 540,
                              columnNumber: 31
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 538,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 520,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                          width: "20",
                          height: "20",
                          fill: "currentColor",
                          className: "mx-4 text-gray-400 dark:text-gray-300",
                          viewBox: "0 0 1024 1024",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                            d: "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z",
                            fill: "currentColor"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 561,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                            d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z",
                            fill: "currentColor"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 565,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 554,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 519,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                        className: "flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "flex items-center justify-start text-sm",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "mx-4",
                            children: "03"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 573,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            children: "Components card"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 574,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "lg:ml-6 ml-2 flex items-center text-gray-400 dark:text-gray-300",
                            children: ["3", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                              width: "15",
                              height: "15",
                              fill: "currentColor",
                              className: "ml-1",
                              viewBox: "0 0 512 512",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                                d: "M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2l-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29c7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1l-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160s-93.3 160-208 160z",
                                fill: "currentColor"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 584,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 577,
                              columnNumber: 31
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 575,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 572,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                          width: "20",
                          height: "20",
                          fill: "currentColor",
                          className: "mx-4 text-gray-400 dark:text-gray-300",
                          viewBox: "0 0 1024 1024",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                            d: "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z",
                            fill: "currentColor"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 598,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                            d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z",
                            fill: "currentColor"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 602,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 591,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 571,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                        className: "flex items-center text-gray-400 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "flex items-center justify-start text-sm",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "mx-4",
                            children: "04"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 610,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "line-through",
                            children: "Google logo design"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 611,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 609,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                          width: "20",
                          height: "20",
                          fill: "currentColor",
                          viewBox: "0 0 1024 1024",
                          className: "text-green-500 mx-4",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                            d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z",
                            fill: "currentColor"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 622,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 615,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 608,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                        className: "flex items-center text-gray-400  justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "flex items-center justify-start text-sm",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "mx-4",
                            children: "05"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 630,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "line-through",
                            children: "Header navigation"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 631,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 629,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                          width: "20",
                          height: "20",
                          fill: "currentColor",
                          viewBox: "0 0 1024 1024",
                          className: "text-green-500 mx-4",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                            d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z",
                            fill: "currentColor"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 642,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 635,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 628,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                        className: "flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "flex items-center justify-start text-sm",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "mx-4",
                            children: "06"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 650,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            children: "International"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 651,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "lg:ml-6 ml-2 flex items-center text-gray-400 dark:text-gray-300",
                            children: ["3", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                              width: "15",
                              height: "15",
                              fill: "currentColor",
                              className: "ml-1",
                              viewBox: "0 0 512 512",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                                d: "M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2l-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29c7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1l-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160s-93.3 160-208 160z",
                                fill: "currentColor"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 661,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 654,
                              columnNumber: 31
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 652,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "mx-4 flex items-center text-gray-400 dark:text-gray-300",
                            children: ["3", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                              width: "15",
                              height: "15",
                              className: "ml-1",
                              fill: "currentColor",
                              viewBox: "0 0 384 512",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                                d: "M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8c-.6 16.1-4.2 28.5-11 36.9c-15.4 19.2-49.3 22.4-85.2 25.7c-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3c0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6c3.1-5.2 7.8-9.8 14.9-13.4c16.2-8.2 40.4-10.4 66.1-12.8c42.2-3.9 90-8.4 118.2-43.4c14-17.4 21.1-39.8 21.6-67.9c31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16z",
                                fill: "currentColor"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 676,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 669,
                              columnNumber: 31
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 667,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 649,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                          width: "20",
                          height: "20",
                          fill: "currentColor",
                          className: "mx-4 text-gray-400 dark:text-gray-300",
                          viewBox: "0 0 1024 1024",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                            d: "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z",
                            fill: "currentColor"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 690,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                            d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z",
                            fill: "currentColor"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 694,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 683,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 648,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                        className: "flex items-center text-gray-600 dark:text-gray-200 justify-between py-3",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "flex items-center justify-start text-sm",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "mx-4",
                            children: "07"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 702,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            children: "Production data"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 703,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 701,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                          width: "20",
                          height: "20",
                          fill: "currentColor",
                          className: "mx-4 text-gray-400 dark:text-gray-300",
                          viewBox: "0 0 1024 1024",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                            d: "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z",
                            fill: "currentColor"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 712,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                            d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z",
                            fill: "currentColor"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 716,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 705,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 700,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 496,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 489,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 488,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "mb-4 sm:ml-4 xl:mr-4",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "shadow-lg rounded-2xl bg-white dark:bg-gray-700 w-full",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "flex items-center p-4 justify-between",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        className: "font-bold text-md text-black dark:text-white",
                        children: "Google"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 728,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                        className: "text-sm p-1 text-gray-400 border rounded border-gray-400 mr-4",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                          width: "15",
                          height: "15",
                          fill: "currentColor",
                          viewBox: "0 0 20 20",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
                            fill: "none",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                              d: "M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z",
                              fill: "currentColor"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 739,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 738,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 732,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 731,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 727,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "py-2 px-4 bg-blue-100 dark:bg-gray-800 text-gray-600 border-l-4 border-blue-500 flex items-center justify-between",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        className: "text-xs flex items-center dark:text-white",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                          width: "20",
                          height: "20",
                          fill: "currentColor",
                          className: "text-blue-500 mr-2",
                          viewBox: "0 0 24 24",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
                            fill: "none",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                              d: "M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z",
                              fill: "currentColor"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 757,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 756,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 749,
                          columnNumber: 27
                        }, _this), "Create wireframe"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 748,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "font-bold text-xs dark:text-gray-200 mr-2 ml-2 md:ml-4",
                          children: "25 min 20s"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 766,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                          className: "text-sm p-1 text-gray-400 border rounded bg-blue-500 mr-4",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                            width: "17",
                            height: "17",
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                            className: "text-white",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
                              fill: "none",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                                d: "M9 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1zm6 0a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1z",
                                fill: "currentColor"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 778,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 777,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 770,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 769,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 765,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 747,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "flex items-center p-4 justify-between border-b-2 border-gray-100",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        className: "font-bold text-md text-black dark:text-white",
                        children: "Slack"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 788,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                        className: "text-sm p-1 text-gray-400 border rounded border-gray-400 mr-4",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                          width: "15",
                          height: "15",
                          fill: "currentColor",
                          viewBox: "0 0 20 20",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
                            fill: "none",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                              d: "M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z",
                              fill: "currentColor"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 799,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 798,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 792,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 791,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 787,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "py-2 px-4 text-gray-600 flex items-center justify-between border-b-2 border-gray-100",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        className: "text-xs flex items-center dark:text-white",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                          width: "20",
                          height: "20",
                          fill: "currentColor",
                          className: "mr-2",
                          viewBox: "0 0 24 24",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
                            fill: "none",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                              d: "M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z",
                              fill: "currentColor"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 817,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 816,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 809,
                          columnNumber: 27
                        }, _this), "International"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 808,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "text-xs text-gray-400 mr-2 ml-2 md:ml-4",
                          children: "30 min"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 826,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                          className: "text-sm p-1 text-gray-400 border rounded border-gray-400 mr-4",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                            width: "15",
                            height: "15",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
                              fill: "none",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                                d: "M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z",
                                fill: "currentColor"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 837,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 836,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 830,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 829,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 825,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 807,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "py-2 px-4 text-gray-600 flex items-center justify-between border-b-2 border-gray-100",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        className: "text-xs flex items-center dark:text-white",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                          width: "20",
                          height: "20",
                          fill: "currentColor",
                          className: "mr-2",
                          viewBox: "0 0 24 24",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
                            fill: "none",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                              d: "M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z",
                              fill: "currentColor"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 856,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 855,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 848,
                          columnNumber: 27
                        }, _this), "Slack logo design"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 847,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "text-xs text-gray-400 mr-2 ml-2 md:ml-4",
                          children: "30 min"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 865,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                          className: "text-sm p-1 text-gray-400 border rounded border-gray-400 mr-4",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                            width: "15",
                            height: "15",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
                              fill: "none",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                                d: "M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z",
                                fill: "currentColor"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 876,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 875,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 869,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 868,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 864,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 846,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "py-2 px-4 text-gray-600 flex items-center justify-between",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        className: "text-xs flex items-center dark:text-white",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                          width: "20",
                          height: "20",
                          fill: "currentColor",
                          className: "mr-2",
                          viewBox: "0 0 24 24",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
                            fill: "none",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                              d: "M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z",
                              fill: "currentColor"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 895,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 894,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 887,
                          columnNumber: 27
                        }, _this), "Dahboard template"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 886,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "text-xs text-gray-400 mr-2 ml-2 md:ml-4",
                          children: "30 min"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 904,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                          className: "text-sm p-1 text-gray-400 border rounded border-gray-400 mr-4",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                            width: "15",
                            height: "15",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
                              fill: "none",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                                d: "M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z",
                                fill: "currentColor"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 915,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 914,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 908,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 907,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 903,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 885,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 726,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 725,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 487,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "w-full sm:w-1/2 xl:w-1/3",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "mb-4",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "flex flex-wrap overflow-hidden",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "w-full rounded shadow-sm",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "flex items-center justify-between mb-4",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "text-left font-bold text-xl text-black dark:text-white",
                            children: "Dec 2021"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 933,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "flex space-x-4",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                              className: "p-2 rounded-full bg-blue-500 text-white",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                                width: "15",
                                height: "15",
                                fill: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                                  fill: "currentColor",
                                  d: "M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 944,
                                  columnNumber: 35
                                }, _this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 938,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 937,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                              className: "p-2 rounded-full bg-blue-500 text-white",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                                width: "15",
                                height: "15",
                                fill: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                                  fill: "currentColor",
                                  d: "M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 957,
                                  columnNumber: 35
                                }, _this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 951,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 950,
                              columnNumber: 31
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 936,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 932,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "-mx-2",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
                            className: "w-full dark:text-white",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                                className: "py-3 px-2 md:px-3 ",
                                children: "S"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 968,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                                className: "py-3 px-2 md:px-3 ",
                                children: "M"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 969,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                                className: "py-3 px-2 md:px-3 ",
                                children: "T"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 970,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                                className: "py-3 px-2 md:px-3 ",
                                children: "W"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 971,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                                className: "py-3 px-2 md:px-3 ",
                                children: "T"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 972,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                                className: "py-3 px-2 md:px-3 ",
                                children: "F"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 973,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                                className: "py-3 px-2 md:px-3 ",
                                children: "S"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 974,
                                columnNumber: 33
                              }, _this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 967,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                              className: "text-gray-400 dark:text-gray-500",
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500",
                                children: "25"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 977,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500",
                                children: "26"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 980,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500",
                                children: "27"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 983,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500",
                                children: "28"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 986,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500",
                                children: "29"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 989,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500",
                                children: "30"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 992,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center text-gray-800 cursor-pointer",
                                children: "1"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 995,
                                columnNumber: 33
                              }, _this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 976,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "2"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1000,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 relative px-1  hover:text-blue-500 text-center cursor-pointer",
                                children: ["3", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                  className: "absolute rounded-full h-2 w-2 bg-blue-500 bottom-0 left-1/2 transform -translate-x-1/2"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1005,
                                  columnNumber: 35
                                }, _this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 1003,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "4"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1007,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "5"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1010,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "6"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1013,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "7"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1016,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3 md:px-2 relative lg:px-3 hover:text-blue-500 text-center cursor-pointer",
                                children: ["8", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                  className: "absolute rounded-full h-2 w-2 bg-yellow-500 bottom-0 left-1/2 transform -translate-x-1/2"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1021,
                                  columnNumber: 35
                                }, _this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 1019,
                                columnNumber: 33
                              }, _this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 999,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "9"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1025,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "10"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1028,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "11"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1031,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "12"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1034,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  text-center text-white cursor-pointer",
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                  className: "p-2 rounded-full bg-blue-500",
                                  children: "13"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1038,
                                  columnNumber: 35
                                }, _this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1037,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "14"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1042,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "15"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1045,
                                columnNumber: 33
                              }, _this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 1024,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "16"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1050,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "17"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1053,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "18"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1056,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "19"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1059,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "20"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1062,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "21"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1065,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "22"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1068,
                                columnNumber: 33
                              }, _this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 1049,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "23"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1073,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "24"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1076,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 relative text-center cursor-pointer",
                                children: ["25", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                  className: "absolute rounded-full h-2 w-2 bg-red-500 bottom-0 left-1/2 transform -translate-x-1/2"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1081,
                                  columnNumber: 35
                                }, _this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 1079,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "26"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1083,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "27"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1086,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "28"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1089,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "29"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1092,
                                columnNumber: 33
                              }, _this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 1072,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "30"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1097,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "31"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1100,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1103,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1104,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1105,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1106,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1107,
                                columnNumber: 33
                              }, _this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 1096,
                              columnNumber: 31
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 966,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 965,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 931,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 930,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 929,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 928,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "mb-4",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "font-bold text-md text-black dark:text-white",
                      children: "Messages"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1117,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                        className: "flex items-center my-6 space-x-2",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          href: "#",
                          className: "block relative",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                            alt: "profil",
                            src: "/images/person/1.jpg",
                            className: "mx-auto object-cover rounded-full h-10 w-10 "
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1123,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1122,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "flex flex-col",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "text-sm text-gray-900 font-semibold dark:text-white ml-2",
                            children: "Charlie Rabiller"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1130,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "text-sm text-gray-400 dark:text-gray-300 ml-2",
                            children: "Hey John ! Do you read the NextJS doc ?"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1133,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 1129,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 1121,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                        className: "flex items-center my-6 space-x-2",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          href: "#",
                          className: "block relative",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                            alt: "profil",
                            src: "/images/person/5.jpg",
                            className: "mx-auto object-cover rounded-full h-10 w-10 "
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1140,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1139,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "flex flex-col",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "text-sm text-gray-900 font-semibold dark:text-white ml-2",
                            children: "Marie Lou"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1147,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "text-sm text-gray-400 dark:text-gray-300 ml-2",
                            children: "No I think the dog is better..."
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1150,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 1146,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 1138,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                        className: "flex items-center my-6 space-x-2",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          href: "#",
                          className: "block relative",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                            alt: "profil",
                            src: "/images/person/6.jpg",
                            className: "mx-auto object-cover rounded-full h-10 w-10 "
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1157,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1156,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "flex flex-col",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "text-sm text-gray-900 font-semibold dark:text-white ml-2",
                            children: "Ivan Buck"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1164,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "text-sm text-gray-400 dark:text-gray-300 ml-2",
                            children: "Seriously ? haha Bob is not a children !"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1167,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 1163,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 1155,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                        className: "flex items-center my-6 space-x-2",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          href: "#",
                          className: "block relative",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                            alt: "profil",
                            src: "/images/person/7.jpg",
                            className: "mx-auto object-cover rounded-full h-10 w-10 "
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1174,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1173,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "flex flex-col",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "text-sm text-gray-900 font-semibold dark:text-white ml-2",
                            children: "Marina Farga"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1181,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "text-sm text-gray-400 dark:text-gray-300 ml-2",
                            children: "Do you need that deisgn ?"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1184,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 1180,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 1172,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 1120,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 1116,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1115,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 927,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 253,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 252,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      classNameName: "",
      children: [currentUser && currentUser.email, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: logOut,
        children: "logout"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1201,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1199,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(dashboard, "iSi0z3iCDOuHeAljQ81Mcu7Yg+Q=", false, function () {
  return [_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__["useAuth"], next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQuanMiXSwibmFtZXMiOlsiZGFzaGJvYXJkIiwidXNlQXV0aCIsImxvZ291dCIsImN1cnJlbnRVc2VyIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwicm91dGVyIiwidXNlUm91dGVyIiwibG9nT3V0IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiZW1haWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUEsaUJBQ1VDLG9FQUFPLEVBRGpCO0FBQUEsTUFDZEMsTUFEYyxZQUNkQSxNQURjO0FBQUEsTUFDTkMsV0FETSxZQUNOQSxXQURNOztBQUFBLGtCQUVJQyxzREFBUSxDQUFDLEVBQUQsQ0FGWjtBQUFBLE1BRWZDLEtBRmU7QUFBQSxNQUVSQyxRQUZROztBQUd0QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUNBLE1BQU1DLE1BQU07QUFBQSxnVUFBRyxpQkFBT0MsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFWEosc0JBQVEsQ0FBQyxFQUFELENBQVI7QUFGVztBQUFBLHFCQUdMSixNQUFNLEVBSEQ7O0FBQUE7QUFJWFMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaO0FBQ0FMLG9CQUFNLENBQUNNLElBQVAsQ0FBWSxRQUFaO0FBTFc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFPWFAsc0JBQVEsQ0FBQyxxQ0FBRCxDQUFSOztBQVBXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQU5HLE1BQU07QUFBQTtBQUFBO0FBQUEsS0FBWjs7QUFVQSxzQkFDRTtBQUFBLDRCQUNFO0FBQU0sZUFBUyxFQUFDLHFGQUFoQjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxrQ0FB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Q0FBUyxFQUFDLDBEQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FERixlQUlFO0FBQU0scUNBQVMsRUFBQywrQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFwREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBNUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFscUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBaERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF2TEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBNHBDRTtBQUFLLG1CQUFhLEVBQUMsRUFBbkI7QUFBQSxpQkFDR04sV0FBVyxJQUFJQSxXQUFXLENBQUNXLEtBRDlCLGVBRUU7QUFBUSxlQUFPLEVBQUVMLE1BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBNXBDRjtBQUFBLGtCQURGO0FBbXFDRCxDQWpyQ0Q7O0dBQU1ULFM7VUFDNEJDLDRELEVBRWpCTyxxRDs7O0FBZ3JDRlIsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLjM2NDQzNWNhM2E2MzJmOWJlMGFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vY29udGV4dC9BdXRoQ29udGV4dFwiO1xyXG5jb25zdCBkYXNoYm9hcmQgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBsb2dvdXQsIGN1cnJlbnRVc2VyIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBsb2dPdXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgc2V0RXJyb3IoXCJcIik7XHJcbiAgICAgIGF3YWl0IGxvZ291dCgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImxvZyBvdXQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEVycm9yKFwiRXJyb3Igd2hpbGUgbG9nZ2luZyBvdXQgLCBUcnkgYWdhaW5cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiYmctZ3JheS0xMDAgZGFyazpiZy1ncmF5LTgwMCByb3VuZGVkLTJ4bCByZWxhdGl2ZSBoLXNjcmVlbiBvdmVyZmxvdy1oaWRkZW4gcmVsYXRpdmVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIGhpZGRlbiBsZzpibG9jayBteS00IG1sLTQgc2hhZG93LWxnIHJlbGF0aXZlIHctODBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBoLWZ1bGwgcm91bmRlZC0yeGwgZGFyazpiZy1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHQtNlwiPlxyXG4gICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjM1XCJcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzBcIlxyXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI1NiAzNjZcIlxyXG4gICAgICAgICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcclxuICAgICAgICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICB4MT1cIjEyLjUxODk1MzQlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHkxPVwiODUuMjEyODYxMSVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgeDI9XCI4OC4yMjgyOTU5JVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB5Mj1cIjEwLjAyMjU0OTclXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwibGluZWFyR3JhZGllbnQtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN0b3BcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcC1jb2xvcj1cIiNGRjAwNTdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9wLW9wYWNpdHk9XCIwLjE2XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PVwiMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvc3RvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9XCIjRkYwMDU3XCIgb2Zmc2V0PVwiODYuMTM1NCVcIj48L3N0b3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0wLDYwLjg1MzgwMDYgQzAsMjcuMjQ1MjYxIDI3LjI0NTMwNCwwIDYwLjg1NDIxMjEsMCBMMTE3LjAyNzAxOSwwIEwyNTUuOTk2NTQ5LDAgTDI1NS45OTY1NDksODYuNTk5OTc3NiBDMjU1Ljk5NjU0OSwxMDMuNDA0MTU1IDI0Mi4zNzQwOTYsMTE3LjAyNzIyMiAyMjUuNTY5OTE5LDExNy4wMjcyMjIgTDE0NS44MDgxMiwxMTcuMDI3MjIyIEMxMzAuMDAzMjk5LDExNy4yNzc4MjkgMTE3LjI0MjYxNSwxMzAuMDYwMDExIDExNy4wMjcwMTksMTQ1Ljg3MjgxNyBMMTE3LjAyNzAxOSwzMzUuMjgyNTIgQzExNy4wMjcwMTksMzUyLjA4NzMxMiAxMDMuNDA0NTY3LDM2NS43MDk3NjQgODYuNTk5Nzc0OSwzNjUuNzA5NzY0IEwwLDM2NS43MDk3NjQgTDAsMTE3LjAyNzIyMiBMMCw2MC44NTM4MDA2IFpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiMwMDFCMzhcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cInVybCgjbGluZWFyR3JhZGllbnQtMSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE0Ny4wMTMyNDQsIDE0Ny4wMTQ2NzUpIHJvdGF0ZSg5MC4wMDAwMDApIHRyYW5zbGF0ZSgtMTQ3LjAxMzI0NCwgLTE0Ny4wMTQ2NzUpIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjeD1cIjE0Ny4wMTMyNDRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY3k9XCIxNDcuMDE0Njc1XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHI9XCI3OC45OTMzOTM4XCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9jaXJjbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cInVybCgjbGluZWFyR3JhZGllbnQtMSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eT1cIjAuNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTQ3LjAxMzI0NCwgMTQ3LjAxNDY3NSkgcm90YXRlKDkwLjAwMDAwMCkgdHJhbnNsYXRlKC0xNDcuMDEzMjQ0LCAtMTQ3LjAxNDY3NSkgXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGN4PVwiMTQ3LjAxMzI0NFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjeT1cIjE0Ny4wMTQ2NzVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcj1cIjc4Ljk5MzM5MzhcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2NpcmNsZT5cclxuICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJtdC02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBmb250LXRoaW4gdXBwZXJjYXNlIHRleHQtYmx1ZS01MDAgZmxleCBpdGVtcy1jZW50ZXIgcC00IG15LTIgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGp1c3RpZnktc3RhcnQgYmctZ3JhZGllbnQtdG8tciBmcm9tLXdoaXRlIHRvLWJsdWUtMTAwIGJvcmRlci1yLTQgYm9yZGVyLWJsdWUtNTAwIGRhcms6ZnJvbS1ncmF5LTcwMCBkYXJrOnRvLWdyYXktODAwIGJvcmRlci1yLTQgYm9yZGVyLWJsdWUtNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjA0OCAxNzkyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTA3MCAxMTc4bDMwNi01NjRoLTY1NGwtMzA2IDU2NGg2NTR6bTcyMi0yODJxMCAxODItNzEgMzQ4dC0xOTEgMjg2LTI4NiAxOTEtMzQ4IDcxLTM0OC03MS0yODYtMTkxLTE5MS0yODYtNzEtMzQ4IDcxLTM0OCAxOTEtMjg2IDI4Ni0xOTEgMzQ4LTcxIDM0OCA3MSAyODYgMTkxIDE5MSAyODYgNzEgMzQ4elwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJteC00IHRleHQtc20gZm9udC1ub3JtYWxcIj5EYXNoYm9hcmQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZm9udC10aGluIHVwcGVyY2FzZSB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTIwMCBmbGV4IGl0ZW1zLWNlbnRlciBwLTQgbXktMiB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAganVzdGlmeS1zdGFydCBob3Zlcjp0ZXh0LWJsdWUtNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm0tYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjA0OCAxNzkyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTAyNCAxMTMxcTAtNjQtOS0xMTcuNXQtMjkuNS0xMDMtNjAuNS03OC05Ny0yOC41cS02IDQtMzAgMTh0LTM3LjUgMjEuNS0zNS41IDE3LjUtNDMgMTQuNS00MiA0LjUtNDItNC41LTQzLTE0LjUtMzUuNS0xNy41LTM3LjUtMjEuNS0zMC0xOHEtNTcgMC05NyAyOC41dC02MC41IDc4LTI5LjUgMTAzLTkgMTE3LjUgMzcgMTA2LjUgOTEgNDIuNWg1MTJxNTQgMCA5MS00Mi41dDM3LTEwNi41em0tMTU3LTUyMHEwLTk0LTY2LjUtMTYwLjV0LTE2MC41LTY2LjUtMTYwLjUgNjYuNS02Ni41IDE2MC41IDY2LjUgMTYwLjUgMTYwLjUgNjYuNSAxNjAuNS02Ni41IDY2LjUtMTYwLjV6bTkyNSA1MDl2LTY0cTAtMTQtOS0yM3QtMjMtOWgtNTc2cS0xNCAwLTIzIDl0LTkgMjN2NjRxMCAxNCA5IDIzdDIzIDloNTc2cTE0IDAgMjMtOXQ5LTIzem0wLTI2MHYtNTZxMC0xNS0xMC41LTI1LjV0LTI1LjUtMTAuNWgtNTY4cS0xNSAwLTI1LjUgMTAuNXQtMTAuNSAyNS41djU2cTAgMTUgMTAuNSAyNS41dDI1LjUgMTAuNWg1NjhxMTUgMCAyNS41LTEwLjV0MTAuNS0yNS41em0wLTI1MnYtNjRxMC0xNC05LTIzdC0yMy05aC01NzZxLTE0IDAtMjMgOXQtOSAyM3Y2NHEwIDE0IDkgMjN0MjMgOWg1NzZxMTQgMCAyMy05dDktMjN6bTI1Ni0zMjB2MTIxNnEwIDY2LTQ3IDExM3QtMTEzIDQ3aC0zNTJ2LTk2cTAtMTQtOS0yM3QtMjMtOWgtNjRxLTE0IDAtMjMgOXQtOSAyM3Y5NmgtNzY4di05NnEwLTE0LTktMjN0LTIzLTloLTY0cS0xNCAwLTIzIDl0LTkgMjN2OTZoLTM1MnEtNjYgMC0xMTMtNDd0LTQ3LTExM3YtMTIxNnEwLTY2IDQ3LTExM3QxMTMtNDdoMTcyOHE2NiAwIDExMyA0N3Q0NyAxMTN6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm14LTQgdGV4dC1zbSBmb250LW5vcm1hbFwiPlByb2plY3RzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGZvbnQtdGhpbiB1cHBlcmNhc2UgdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS0yMDAgZmxleCBpdGVtcy1jZW50ZXIgcC00IG15LTIgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGp1c3RpZnktc3RhcnQgaG92ZXI6dGV4dC1ibHVlLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtLWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwNDggMTc5MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTY4NSA0ODNxMTYgMCAyNy41LTExLjV0MTEuNS0yNy41LTExLjUtMjcuNS0yNy41LTExLjUtMjcgMTEuNS0xMSAyNy41IDExIDI3LjUgMjcgMTEuNXptNDIyIDBxMTYgMCAyNy0xMS41dDExLTI3LjUtMTEtMjcuNS0yNy0xMS41LTI3LjUgMTEuNS0xMS41IDI3LjUgMTEuNSAyNy41IDI3LjUgMTEuNXptLTgxMiAxODRxNDIgMCA3MiAzMHQzMCA3MnY0MzBxMCA0My0yOS41IDczdC03Mi41IDMwLTczLTMwLTMwLTczdi00MzBxMC00MiAzMC03MnQ3My0zMHptMTA2MCAxOXY2NjZxMCA0Ni0zMiA3OHQtNzcgMzJoLTc1djIyN3EwIDQzLTMwIDczdC03MyAzMC03My0zMC0zMC03M3YtMjI3aC0xMzh2MjI3cTAgNDMtMzAgNzN0LTczIDMwcS00MiAwLTcyLTMwdC0zMC03M2wtMS0yMjdoLTc0cS00NiAwLTc4LTMydC0zMi03OHYtNjY2aDkxOHptLTIzMi00MDVxMTA3IDU1IDE3MSAxNTMuNXQ2NCAyMTUuNWgtOTI1cTAtMTE3IDY0LTIxNS41dDE3Mi0xNTMuNWwtNzEtMTMxcS03LTEzIDUtMjAgMTMtNiAyMCA2bDcyIDEzMnE5NS00MiAyMDEtNDJ0MjAxIDQybDcyLTEzMnE3LTEyIDIwLTYgMTIgNyA1IDIwem00NzcgNDg4djQzMHEwIDQzLTMwIDczdC03MyAzMHEtNDIgMC03Mi0zMHQtMzAtNzN2LTQzMHEwLTQzIDMwLTcyLjV0NzItMjkuNXE0MyAwIDczIDI5LjV0MzAgNzIuNXpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXgtNCB0ZXh0LXNtIGZvbnQtbm9ybWFsXCI+TXkgdGFza3M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZm9udC10aGluIHVwcGVyY2FzZSB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTIwMCBmbGV4IGl0ZW1zLWNlbnRlciBwLTQgbXktMiB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAganVzdGlmeS1zdGFydCBob3Zlcjp0ZXh0LWJsdWUtNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm0tYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjA0OCAxNzkyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOTYwIDBsOTYwIDM4NHYxMjhoLTEyOHEwIDI2LTIwLjUgNDV0LTQ4LjUgMTloLTE1MjZxLTI4IDAtNDguNS0xOXQtMjAuNS00NWgtMTI4di0xMjh6bS03MDQgNjQwaDI1NnY3NjhoMTI4di03NjhoMjU2djc2OGgxMjh2LTc2OGgyNTZ2NzY4aDEyOHYtNzY4aDI1NnY3NjhoNTlxMjggMCA0OC41IDE5dDIwLjUgNDV2NjRoLTE2NjR2LTY0cTAtMjYgMjAuNS00NXQ0OC41LTE5aDU5di03Njh6bTE1OTUgOTYwcTI4IDAgNDguNSAxOXQyMC41IDQ1djEyOGgtMTkyMHYtMTI4cTAtMjYgMjAuNS00NXQ0OC41LTE5aDE3ODJ6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm14LTQgdGV4dC1zbSBmb250LW5vcm1hbFwiPkNhbGVuZGFyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGZvbnQtdGhpbiB1cHBlcmNhc2UgdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS0yMDAgZmxleCBpdGVtcy1jZW50ZXIgcC00IG15LTIgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGp1c3RpZnktc3RhcnQgaG92ZXI6dGV4dC1ibHVlLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm0tYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwNDggMTc5MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEwNzAgMTE3OGwzMDYtNTY0aC02NTRsLTMwNiA1NjRoNjU0em03MjItMjgycTAgMTgyLTcxIDM0OHQtMTkxIDI4Ni0yODYgMTkxLTM0OCA3MS0zNDgtNzEtMjg2LTE5MS0xOTEtMjg2LTcxLTM0OCA3MS0zNDggMTkxLTI4NiAyODYtMTkxIDM0OC03MSAzNDggNzEgMjg2IDE5MSAxOTEgMjg2IDcxIDM0OHpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXgtNCB0ZXh0LXNtIGZvbnQtbm9ybWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBUaW1lIG1hbmFnZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBmb250LXRoaW4gdXBwZXJjYXNlIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktMjAwIGZsZXggaXRlbXMtY2VudGVyIHAtNCBteS0yIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBqdXN0aWZ5LXN0YXJ0IGhvdmVyOnRleHQtYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibS1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMDQ4IDE3OTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMDI0IDExMzFxMC02NC05LTExNy41dC0yOS41LTEwMy02MC41LTc4LTk3LTI4LjVxLTYgNC0zMCAxOHQtMzcuNSAyMS41LTM1LjUgMTcuNS00MyAxNC41LTQyIDQuNS00Mi00LjUtNDMtMTQuNS0zNS41LTE3LjUtMzcuNS0yMS41LTMwLTE4cS01NyAwLTk3IDI4LjV0LTYwLjUgNzgtMjkuNSAxMDMtOSAxMTcuNSAzNyAxMDYuNSA5MSA0Mi41aDUxMnE1NCAwIDkxLTQyLjV0MzctMTA2LjV6bS0xNTctNTIwcTAtOTQtNjYuNS0xNjAuNXQtMTYwLjUtNjYuNS0xNjAuNSA2Ni41LTY2LjUgMTYwLjUgNjYuNSAxNjAuNSAxNjAuNSA2Ni41IDE2MC41LTY2LjUgNjYuNS0xNjAuNXptOTI1IDUwOXYtNjRxMC0xNC05LTIzdC0yMy05aC01NzZxLTE0IDAtMjMgOXQtOSAyM3Y2NHEwIDE0IDkgMjN0MjMgOWg1NzZxMTQgMCAyMy05dDktMjN6bTAtMjYwdi01NnEwLTE1LTEwLjUtMjUuNXQtMjUuNS0xMC41aC01NjhxLTE1IDAtMjUuNSAxMC41dC0xMC41IDI1LjV2NTZxMCAxNSAxMC41IDI1LjV0MjUuNSAxMC41aDU2OHExNSAwIDI1LjUtMTAuNXQxMC41LTI1LjV6bTAtMjUydi02NHEwLTE0LTktMjN0LTIzLTloLTU3NnEtMTQgMC0yMyA5dC05IDIzdjY0cTAgMTQgOSAyM3QyMyA5aDU3NnExNCAwIDIzLTl0OS0yM3ptMjU2LTMyMHYxMjE2cTAgNjYtNDcgMTEzdC0xMTMgNDdoLTM1MnYtOTZxMC0xNC05LTIzdC0yMy05aC02NHEtMTQgMC0yMyA5dC05IDIzdjk2aC03Njh2LTk2cTAtMTQtOS0yM3QtMjMtOWgtNjRxLTE0IDAtMjMgOXQtOSAyM3Y5NmgtMzUycS02NiAwLTExMy00N3QtNDctMTEzdi0xMjE2cTAtNjYgNDctMTEzdDExMy00N2gxNzI4cTY2IDAgMTEzIDQ3dDQ3IDExM3pcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXgtNCB0ZXh0LXNtIGZvbnQtbm9ybWFsXCI+UmVwb3J0czwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBmb250LXRoaW4gdXBwZXJjYXNlIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktMjAwIGZsZXggaXRlbXMtY2VudGVyIHAtNCBteS0yIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBqdXN0aWZ5LXN0YXJ0IGhvdmVyOnRleHQtYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC01IHctNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTA4OCAxMjU2djI0MHEwIDE2LTEyIDI4dC0yOCAxMmgtMjQwcS0xNiAwLTI4LTEydC0xMi0yOHYtMjQwcTAtMTYgMTItMjh0MjgtMTJoMjQwcTE2IDAgMjggMTJ0MTIgMjh6bTMxNi02MDBxMCA1NC0xNS41IDEwMXQtMzUgNzYuNS01NSA1OS41LTU3LjUgNDMuNS02MSAzNS41cS00MSAyMy02OC41IDY1dC0yNy41IDY3cTAgMTctMTIgMzIuNXQtMjggMTUuNWgtMjQwcS0xNSAwLTI1LjUtMTguNXQtMTAuNS0zNy41di00NXEwLTgzIDY1LTE1Ni41dDE0My0xMDguNXE1OS0yNyA4NC01NnQyNS03NnEwLTQyLTQ2LjUtNzR0LTEwNy41LTMycS02NSAwLTEwOCAyOS0zNSAyNS0xMDcgMTE1LTEzIDE2LTMxIDE2LTEyIDAtMjUtOGwtMTY0LTEyNXEtMTMtMTAtMTUuNS0yNXQ1LjUtMjhxMTYwLTI2NiA0NjQtMjY2IDgwIDAgMTYxIDMxdDE0NiA4MyAxMDYgMTI3LjUgNDEgMTU4LjV6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm14LTQgdGV4dC1zbSBmb250LW5vcm1hbFwiPlNldHRpbmdzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgcGwtMCBtZDpwLTQgbWQ6c3BhY2UteS00XCI+XHJcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwidy1mdWxsIHNoYWRvdy1sZyBiZy13aGl0ZSBkYXJrOmJnLWdyYXktNzAwIGl0ZW1zLWNlbnRlciBoLTE2IHJvdW5kZWQtMnhsIHotNDBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMjAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBoLWZ1bGwgcHgtMyBteC1hdXRvIGZsZXgtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGl0ZW1zLWNlbnRlciBwbC0xIGZsZXggdy1mdWxsIGxnOm1heC13LTY4IHNtOnByLTIgc206bWwtMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciByZWxhdGl2ZSBsZWZ0LTAgei01MCBmbGV4IHctMy80IGgtYXV0byBoLWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyIHctZnVsbCBsZzp3LTY0IGgtZnVsbCBncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB6LTUwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJsb2NrIHctYXV0byBoLTEwIHAtMyBwci0yIHRleHQtc20gdGV4dC1ncmF5LTUwMCB1cHBlcmNhc2UgY3Vyc29yLXBvaW50ZXIgc206aGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy01IGgtNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEwIDE0bDItMm0wIDBsMi0ybS0yIDJsLTItMm0yIDJsMiAybTctMmE5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMCB6LTIwIGhpZGRlbiB3LTQgaC00IG1sLTQgdGV4dC1ncmF5LTUwMCBwb2ludGVyLWV2ZW50cy1ub25lIGZpbGwtY3VycmVudCBncm91cC1ob3Zlcjp0ZXh0LWdyYXktNDAwIHNtOmJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyLjkgMTQuMzJhOCA4IDAgMSAxIDEuNDEtMS40MWw1LjM1IDUuMzMtMS40MiAxLjQyLTUuMzMtNS4zNHpNOCAxNEE2IDYgMCAxIDAgOCAyYTYgNiAwIDAgMCAwIDEyelwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIHB5LTEuNSBwbC0xMCBwci00IGxlYWRpbmctbm9ybWFsIHJvdW5kZWQtMnhsIGZvY3VzOmJvcmRlci10cmFuc3BhcmVudCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS01MDAgcmluZy1vcGFjaXR5LTkwIGJnLWdyYXktMTAwIGRhcms6YmctZ3JheS04MDAgdGV4dC1ncmF5LTQwMCBhYS1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgaGlkZGVuIGgtYXV0byBweC0yIHB5LTEgbXItMiB0ZXh0LXhzIHRleHQtZ3JheS00MDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLTJ4bCBtZDpibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICArXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcC0xIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIHctMS80IG1sLTUgbXItNCBzbTptci0wIHNtOnJpZ2h0LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJsb2NrIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInByb2ZpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvcGVyc29uLzEuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtYXV0byBvYmplY3QtY292ZXIgcm91bmRlZC1mdWxsIGgtMTAgdy0xMCBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWF1dG8gaC1zY3JlZW4gcGItMjQgcHQtMiBwci0yIHBsLTIgbWQ6cHQtMCBtZDpwci0wIG1kOnBsLTBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZmxleC13cmFwIHNtOmZsZXgtcm93IFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy0xLzIgeGw6dy0xLzNcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3ctbGcgcm91bmRlZC0yeGwgcC00IGJnLXdoaXRlIGRhcms6YmctZ3JheS03MDAgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIHJlbGF0aXZlIHAtMiBiZy1ibHVlLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI1NiAyNjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTI1NS44NzggMTMzLjQ1MWMwLTEwLjczNC0uODcxLTE4LjU2Ny0yLjc1Ni0yNi42OUgxMzAuNTV2NDguNDQ4aDcxLjk0N2MtMS40NSAxMi4wNC05LjI4MyAzMC4xNzItMjYuNjkgNDIuMzU2bC0uMjQ0IDEuNjIyIDM4Ljc1NSAzMC4wMjMgMi42ODUuMjY4YzI0LjY1OS0yMi43NzQgMzguODc1LTU2LjI4MiAzOC44NzUtOTYuMDI3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzQyODVGNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMzAuNTUgMjYxLjFjMzUuMjQ4IDAgNjQuODM5LTExLjYwNSA4Ni40NTMtMzEuNjIybC00MS4xOTYtMzEuOTEzYy0xMS4wMjQgNy42ODgtMjUuODIgMTMuMDU1LTQ1LjI1NyAxMy4wNTUtMzQuNTIzIDAtNjMuODI0LTIyLjc3My03NC4yNjktNTQuMjVsLTEuNTMxLjEzLTQwLjI5OCAzMS4xODctLjUyNyAxLjQ2NUMzNS4zOTMgMjMxLjc5OCA3OS40OSAyNjEuMSAxMzAuNTUgMjYxLjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjMzRBODUzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTU2LjI4MSAxNTYuMzdjLTIuNzU2LTguMTIzLTQuMzUxLTE2LjgyNy00LjM1MS0yNS44MiAwLTguOTk0IDEuNTk1LTE3LjY5NyA0LjIwNi0yNS44MmwtLjA3My0xLjczTDE1LjI2IDcxLjMxMmwtMS4zMzUuNjM1QzUuMDc3IDg5LjY0NCAwIDEwOS41MTcgMCAxMzAuNTVzNS4wNzcgNDAuOTA1IDEzLjkyNSA1OC42MDJsNDIuMzU2LTMyLjc4MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNGQkJDMDVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTMwLjU1IDUwLjQ3OWMyNC41MTQgMCA0MS4wNSAxMC41ODkgNTAuNDc5IDE5LjQzOGwzNi44NDQtMzUuOTc0QzE5NS4yNDUgMTIuOTEgMTY1Ljc5OCAwIDEzMC41NSAwIDc5LjQ5IDAgMzUuMzkzIDI5LjMwMSAxMy45MjUgNzEuOTQ3bDQyLjIxMSAzMi43ODNjMTAuNTktMzEuNDc3IDM5Ljg5MS01NC4yNTEgNzQuNDE0LTU0LjI1MVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNFQjQzMzVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtbWQgdGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGUgbWwtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHb29nbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtd2hpdGUgbWwtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHb29nbGUgSW5jLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYm9yZGVyIHAtMSBib3JkZXItZ3JheS0yMDAgcm91bmRlZC1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQteWVsbG93LTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTcyOCA2NDdxMCAyMi0yNiA0OGwtMzYzIDM1NCA4NiA1MDBxMSA3IDEgMjAgMCAyMS0xMC41IDM1LjV0LTMwLjUgMTQuNXEtMTkgMC00MC0xMmwtNDQ5LTIzNi00NDkgMjM2cS0yMiAxMi00MCAxMi0yMSAwLTMxLjUtMTQuNXQtMTAuNS0zNS41cTAtNiAyLTIwbDg2LTUwMC0zNjQtMzU0cS0yNS0yNy0yNS00OCAwLTM3IDU2LTQ2bDUwMi03MyAyMjUtNDU1cTE5LTQxIDQ5LTQxdDQ5IDQxbDIyNSA0NTUgNTAyIDczcTU2IDkgNTYgNDZ6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEwODggMTI0OHYxOTJxMCA0MC0yOCA2OHQtNjggMjhoLTE5MnEtNDAgMC02OC0yOHQtMjgtNjh2LTE5MnEwLTQwIDI4LTY4dDY4LTI4aDE5MnE0MCAwIDY4IDI4dDI4IDY4em0wLTUxMnYxOTJxMCA0MC0yOCA2OHQtNjggMjhoLTE5MnEtNDAgMC02OC0yOHQtMjgtNjh2LTE5MnEwLTQwIDI4LTY4dDY4LTI4aDE5MnE0MCAwIDY4IDI4dDI4IDY4em0wLTUxMnYxOTJxMCA0MC0yOCA2OHQtNjggMjhoLTE5MnEtNDAgMC02OC0yOHQtMjgtNjh2LTE5MnEwLTQwIDI4LTY4dDY4LTI4aDE5MnE0MCAwIDY4IDI4dDI4IDY4elwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IC1zcGFjZS14LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgaC0xMCB3LTEwIHJvdW5kZWQtZnVsbCBvYmplY3QtY292ZXIgcmluZy0yIHJpbmctd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9wZXJzb24vMS5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiR3V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIGgtMTAgdy0xMCByb3VuZGVkLWZ1bGwgb2JqZWN0LWNvdmVyIHJpbmctMiByaW5nLXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvcGVyc29uLzIuanBlZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJNYXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgaC0xMCB3LTEwIHJvdW5kZWQtZnVsbCBvYmplY3QtY292ZXIgcmluZy0yIHJpbmctd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9wZXJzb24vMy5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQ2hhcmxlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBoLTEwIHctMTAgcm91bmRlZC1mdWxsIG9iamVjdC1jb3ZlciByaW5nLTIgcmluZy13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3BlcnNvbi80LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJKYWRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB4LTIgcHktMSBmbGV4IHctMzYgbXQtNCBpdGVtcy1jZW50ZXIgdGV4dC14cyByb3VuZGVkLW1kIGZvbnQtc2VtaWJvbGQgdGV4dC15ZWxsb3ctNTAwIGJnLXllbGxvdy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRFVFIERBVEUgOiAxOCBKVU5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LWxnIHJvdW5kZWQtMnhsIHAtNCBiZy13aGl0ZSBkYXJrOmJnLWdyYXktNzAwIHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicm91bmRlZC14bCByZWxhdGl2ZSBwLTIgYmctYmx1ZS0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNDQ3LjYgMjQ1Mi41XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtODk3LjQgMGMtMTM1LjMuMS0yNDQuOCAxMDkuOS0yNDQuNyAyNDUuMi0uMSAxMzUuMyAxMDkuNSAyNDUuMSAyNDQuOCAyNDUuMmgyNDQuOHYtMjQ1LjFjLjEtMTM1LjMtMTA5LjUtMjQ1LjEtMjQ0LjktMjQ1LjMuMSAwIC4xIDAgMCAwbTAgNjU0aC02NTIuNmMtMTM1LjMuMS0yNDQuOSAxMDkuOS0yNDQuOCAyNDUuMi0uMiAxMzUuMyAxMDkuNCAyNDUuMSAyNDQuNyAyNDUuM2g2NTIuN2MxMzUuMy0uMSAyNDQuOS0xMDkuOSAyNDQuOC0yNDUuMi4xLTEzNS40LTEwOS41LTI0NS4yLTI0NC44LTI0NS4zelwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzM2YzVmMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm0yNDQ3LjYgODk5LjJjLjEtMTM1LjMtMTA5LjUtMjQ1LjEtMjQ0LjgtMjQ1LjItMTM1LjMuMS0yNDQuOSAxMDkuOS0yNDQuOCAyNDUuMnYyNDUuM2gyNDQuOGMxMzUuMy0uMSAyNDQuOS0xMDkuOSAyNDQuOC0yNDUuM3ptLTY1Mi43IDB2LTY1NGMuMS0xMzUuMi0xMDkuNC0yNDUtMjQ0LjctMjQ1LjItMTM1LjMuMS0yNDQuOSAxMDkuOS0yNDQuOCAyNDUuMnY2NTRjLS4yIDEzNS4zIDEwOS40IDI0NS4xIDI0NC43IDI0NS4zIDEzNS4zLS4xIDI0NC45LTEwOS45IDI0NC44LTI0NS4zelwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzJlYjY3ZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm0xNTUwLjEgMjQ1Mi41YzEzNS4zLS4xIDI0NC45LTEwOS45IDI0NC44LTI0NS4yLjEtMTM1LjMtMTA5LjUtMjQ1LjEtMjQ0LjgtMjQ1LjJoLTI0NC44djI0NS4yYy0uMSAxMzUuMiAxMDkuNSAyNDUgMjQ0LjggMjQ1LjJ6bTAtNjU0LjFoNjUyLjdjMTM1LjMtLjEgMjQ0LjktMTA5LjkgMjQ0LjgtMjQ1LjIuMi0xMzUuMy0xMDkuNC0yNDUuMS0yNDQuNy0yNDUuM2gtNjUyLjdjLTEzNS4zLjEtMjQ0LjkgMTA5LjktMjQ0LjggMjQ1LjItLjEgMTM1LjQgMTA5LjQgMjQ1LjIgMjQ0LjcgMjQ1LjN6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZWNiMjJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibTAgMTU1My4yYy0uMSAxMzUuMyAxMDkuNSAyNDUuMSAyNDQuOCAyNDUuMiAxMzUuMy0uMSAyNDQuOS0xMDkuOSAyNDQuOC0yNDUuMnYtMjQ1LjJoLTI0NC44Yy0xMzUuMy4xLTI0NC45IDEwOS45LTI0NC44IDI0NS4yem02NTIuNyAwdjY1NGMtLjIgMTM1LjMgMTA5LjQgMjQ1LjEgMjQ0LjcgMjQ1LjMgMTM1LjMtLjEgMjQ0LjktMTA5LjkgMjQ0LjgtMjQ1LjJ2LTY1My45Yy4yLTEzNS4zLTEwOS40LTI0NS4xLTI0NC43LTI0NS4zLTEzNS40IDAtMjQ0LjkgMTA5LjgtMjQ0LjggMjQ1LjEgMCAwIDAgLjEgMCAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZTAxZTVhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1tZCB0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZSBtbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNsYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LXdoaXRlIG1sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2xhY2sgY29ycG9yYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlciBwLTEgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQtZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LXllbGxvdy01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE3MjggNjQ3cTAgMjItMjYgNDhsLTM2MyAzNTQgODYgNTAwcTEgNyAxIDIwIDAgMjEtMTAuNSAzNS41dC0zMC41IDE0LjVxLTE5IDAtNDAtMTJsLTQ0OS0yMzYtNDQ5IDIzNnEtMjIgMTItNDAgMTItMjEgMC0zMS41LTE0LjV0LTEwLjUtMzUuNXEwLTYgMi0yMGw4Ni01MDAtMzY0LTM1NHEtMjUtMjctMjUtNDggMC0zNyA1Ni00Nmw1MDItNzMgMjI1LTQ1NXExOS00MSA0OS00MXQ0OSA0MWwyMjUgNDU1IDUwMiA3M3E1NiA5IDU2IDQ2elwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTIwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMDg4IDEyNDh2MTkycTAgNDAtMjggNjh0LTY4IDI4aC0xOTJxLTQwIDAtNjgtMjh0LTI4LTY4di0xOTJxMC00MCAyOC02OHQ2OC0yOGgxOTJxNDAgMCA2OCAyOHQyOCA2OHptMC01MTJ2MTkycTAgNDAtMjggNjh0LTY4IDI4aC0xOTJxLTQwIDAtNjgtMjh0LTI4LTY4di0xOTJxMC00MCAyOC02OHQ2OC0yOGgxOTJxNDAgMCA2OCAyOHQyOCA2OHptMC01MTJ2MTkycTAgNDAtMjggNjh0LTY4IDI4aC0xOTJxLTQwIDAtNjgtMjh0LTI4LTY4di0xOTJxMC00MCAyOC02OHQ2OC0yOGgxOTJxNDAgMCA2OCAyOHQyOCA2OHpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTQgc3BhY2UteC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweC0yIHB5LTEgZmxleCBpdGVtcy1jZW50ZXIgZm9udC1zZW1pYm9sZCB0ZXh0LXhzIHJvdW5kZWQtbWQgdGV4dC1ncmVlbi03MDAgYmctZ3JlZW4tNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBDT01QTEVURURcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweC0yIHB5LTEgZmxleCBpdGVtcy1jZW50ZXIgZm9udC1zZW1pYm9sZCB0ZXh0LXhzIHJvdW5kZWQtbWQgdGV4dC1ncmVlbi02MDAgYm9yZGVyIGJvcmRlci1ncmVlbi02MDAgYmctd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBNRURJVU0gUFJJT1JJVFlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIG0tYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gaW5saW5lLWJsb2NrIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUYXNrIGRvbmUgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMCBkYXJrOnRleHQtd2hpdGUgZm9udC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDUwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvNTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLTIgYmctZ3JheS0yMDAgcm91bmRlZC1mdWxsIG10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgdGV4dC1jZW50ZXIgdGV4dC14cyB0ZXh0LXdoaXRlIGJnLXBpbmstNDAwIHJvdW5kZWQtZnVsbFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0IG15LTQgc3BhY2UteC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB4LTIgcHktMSBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXhzIHJvdW5kZWQtbWQgZm9udC1zZW1pYm9sZCB0ZXh0LWdyZWVuLTUwMCBiZy1ncmVlbi01MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIElPUyBBUFBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweC0yIHB5LTEgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC14cyByb3VuZGVkLW1kIHRleHQteWVsbG93LTYwMCBmb250LXNlbWlib2xkIGJnLXllbGxvdy0yMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBBTkRST0lEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IC1zcGFjZS14LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgaC0xMCB3LTEwIHJvdW5kZWQtZnVsbCBvYmplY3QtY292ZXIgcmluZy0yIHJpbmctd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9wZXJzb24vMS5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiR3V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIGgtMTAgdy0xMCByb3VuZGVkLWZ1bGwgb2JqZWN0LWNvdmVyIHJpbmctMiByaW5nLXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvcGVyc29uLzIuanBlZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJNYXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgaC0xMCB3LTEwIHJvdW5kZWQtZnVsbCBvYmplY3QtY292ZXIgcmluZy0yIHJpbmctd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9wZXJzb24vMy5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQ2hhcmxlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBoLTEwIHctMTAgcm91bmRlZC1mdWxsIG9iamVjdC1jb3ZlciByaW5nLTIgcmluZy13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3BlcnNvbi80LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJKYWRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB4LTIgcHktMSBmbGV4IHctMzYgbXQtNCBpdGVtcy1jZW50ZXIgdGV4dC14cyByb3VuZGVkLW1kIGZvbnQtc2VtaWJvbGQgdGV4dC15ZWxsb3ctNTAwIGJnLXllbGxvdy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRFVFIERBVEUgOiAxOCBKVU5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHNtOnctMS8yIHhsOnctMS8zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCBteC0wIHNtOm1sLTQgeGw6bXItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LWxnIHJvdW5kZWQtMnhsIGJnLXdoaXRlIGRhcms6YmctZ3JheS03MDAgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1tZCBwLTQgdGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTXkgVGFza3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTMwMCBkYXJrOnRleHQtd2hpdGUgbWwtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICgwNSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS0yMDAganVzdGlmeS1iZXR3ZWVuIHB5LTMgYm9yZGVyLWItMiBib3JkZXItZ3JheS0xMDAgZGFyazpib3JkZXItZ3JheS04MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXgtNFwiPjAxPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q3JlYXRlIHdpcmVmcmFtZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtNCB0ZXh0LWdyYXktNDAwIGRhcms6dGV4dC1ncmF5LTMwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk02OTkgMzUzaC00Ni45Yy0xMC4yIDAtMTkuOSA0LjktMjUuOSAxMy4zTDQ2OSA1ODQuM2wtNzEuMi05OC44Yy02LTguMy0xNS42LTEzLjMtMjUuOS0xMy4zSDMyNWMtNi41IDAtMTAuMyA3LjQtNi41IDEyLjdsMTI0LjYgMTcyLjhhMzEuOCAzMS44IDAgMCAwIDUxLjcgMGwyMTAuNi0yOTJjMy45LTUuMy4xLTEyLjctNi40LTEyLjd6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk01MTIgNjRDMjY0LjYgNjQgNjQgMjY0LjYgNjQgNTEyczIwMC42IDQ0OCA0NDggNDQ4czQ0OC0yMDAuNiA0NDgtNDQ4Uzc1OS40IDY0IDUxMiA2NHptMCA4MjBjLTIwNS40IDAtMzcyLTE2Ni42LTM3Mi0zNzJzMTY2LjYtMzcyIDM3Mi0zNzJzMzcyIDE2Ni42IDM3MiAzNzJzLTE2Ni42IDM3Mi0zNzIgMzcyelwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHRleHQtZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktMjAwIGp1c3RpZnktYmV0d2VlbiBweS0zIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMTAwIGRhcms6Ym9yZGVyLWdyYXktODAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0IHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm14LTRcIj4wMjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkRhc2hib2FyZCBkZXNpZ248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsZzptbC02IG1sLTIgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTQwMCBkYXJrOnRleHQtZ3JheS0zMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0yNTYgMzJDMTE0LjYgMzIgMCAxMjUuMSAwIDI0MGMwIDQ3LjYgMTkuOSA5MS4yIDUyLjkgMTI2LjNDMzggNDA1LjcgNyA0MzkuMSA2LjUgNDM5LjVjLTYuNiA3LTguNCAxNy4yLTQuNiAyNlMxNC40IDQ4MCAyNCA0ODBjNjEuNSAwIDExMC0yNS43IDEzOS4xLTQ2LjNDMTkyIDQ0Mi44IDIyMy4yIDQ0OCAyNTYgNDQ4YzE0MS40IDAgMjU2LTkzLjEgMjU2LTIwOFMzOTcuNCAzMiAyNTYgMzJ6bTAgMzY4Yy0yNi43IDAtNTMuMS00LjEtNzguNC0xMi4xbC0yMi43LTcuMmwtMTkuNSAxMy44Yy0xNC4zIDEwLjEtMzMuOSAyMS40LTU3LjUgMjljNy4zLTEyLjEgMTQuNC0yNS43IDE5LjktNDAuMmwxMC42LTI4LjFsLTIwLjYtMjEuOEM2OS43IDMxNC4xIDQ4IDI4Mi4yIDQ4IDI0MGMwLTg4LjIgOTMuMy0xNjAgMjA4LTE2MHMyMDggNzEuOCAyMDggMTYwcy05My4zIDE2MC0yMDggMTYwelwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm14LTQgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTQwMCBkYXJrOnRleHQtZ3JheS0zMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMzg0IDUxMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0zODQgMTQ0YzAtNDQuMi0zNS44LTgwLTgwLTgwcy04MCAzNS44LTgwIDgwYzAgMzYuNCAyNC4zIDY3LjEgNTcuNSA3Ni44Yy0uNiAxNi4xLTQuMiAyOC41LTExIDM2LjljLTE1LjQgMTkuMi00OS4zIDIyLjQtODUuMiAyNS43Yy0yOC4yIDIuNi01Ny40IDUuNC04MS4zIDE2Ljl2LTE0NGMzMi41LTEwLjIgNTYtNDAuNSA1Ni03Ni4zYzAtNDQuMi0zNS44LTgwLTgwLTgwUzAgMzUuOCAwIDgwYzAgMzUuOCAyMy41IDY2LjEgNTYgNzYuM3YxOTkuM0MyMy41IDM2NS45IDAgMzk2LjIgMCA0MzJjMCA0NC4yIDM1LjggODAgODAgODBzODAtMzUuOCA4MC04MGMwLTM0LTIxLjItNjMuMS01MS4yLTc0LjZjMy4xLTUuMiA3LjgtOS44IDE0LjktMTMuNGMxNi4yLTguMiA0MC40LTEwLjQgNjYuMS0xMi44YzQyLjItMy45IDkwLTguNCAxMTguMi00My40YzE0LTE3LjQgMjEuMS0zOS44IDIxLjYtNjcuOWMzMS42LTEwLjggNTQuNC00MC43IDU0LjQtNzUuOXpNODAgNjRjOC44IDAgMTYgNy4yIDE2IDE2cy03LjIgMTYtMTYgMTZzLTE2LTcuMi0xNi0xNnM3LjItMTYgMTYtMTZ6bTAgMzg0Yy04LjggMC0xNi03LjItMTYtMTZzNy4yLTE2IDE2LTE2czE2IDcuMiAxNiAxNnMtNy4yIDE2LTE2IDE2em0yMjQtMzIwYzguOCAwIDE2IDcuMiAxNiAxNnMtNy4yIDE2LTE2IDE2cy0xNi03LjItMTYtMTZzNy4yLTE2IDE2LTE2elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtNCB0ZXh0LWdyYXktNDAwIGRhcms6dGV4dC1ncmF5LTMwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk02OTkgMzUzaC00Ni45Yy0xMC4yIDAtMTkuOSA0LjktMjUuOSAxMy4zTDQ2OSA1ODQuM2wtNzEuMi05OC44Yy02LTguMy0xNS42LTEzLjMtMjUuOS0xMy4zSDMyNWMtNi41IDAtMTAuMyA3LjQtNi41IDEyLjdsMTI0LjYgMTcyLjhhMzEuOCAzMS44IDAgMCAwIDUxLjcgMGwyMTAuNi0yOTJjMy45LTUuMy4xLTEyLjctNi40LTEyLjd6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk01MTIgNjRDMjY0LjYgNjQgNjQgMjY0LjYgNjQgNTEyczIwMC42IDQ0OCA0NDggNDQ4czQ0OC0yMDAuNiA0NDgtNDQ4Uzc1OS40IDY0IDUxMiA2NHptMCA4MjBjLTIwNS40IDAtMzcyLTE2Ni42LTM3Mi0zNzJzMTY2LjYtMzcyIDM3Mi0zNzJzMzcyIDE2Ni42IDM3MiAzNzJzLTE2Ni42IDM3Mi0zNzIgMzcyelwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHRleHQtZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktMjAwIGp1c3RpZnktYmV0d2VlbiBweS0zIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMTAwIGRhcms6Ym9yZGVyLWdyYXktODAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0IHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm14LTRcIj4wMzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkNvbXBvbmVudHMgY2FyZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxnOm1sLTYgbWwtMiBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktNDAwIGRhcms6dGV4dC1ncmF5LTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA1MTIgNTEyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTI1NiAzMkMxMTQuNiAzMiAwIDEyNS4xIDAgMjQwYzAgNDcuNiAxOS45IDkxLjIgNTIuOSAxMjYuM0MzOCA0MDUuNyA3IDQzOS4xIDYuNSA0MzkuNWMtNi42IDctOC40IDE3LjItNC42IDI2UzE0LjQgNDgwIDI0IDQ4MGM2MS41IDAgMTEwLTI1LjcgMTM5LjEtNDYuM0MxOTIgNDQyLjggMjIzLjIgNDQ4IDI1NiA0NDhjMTQxLjQgMCAyNTYtOTMuMSAyNTYtMjA4UzM5Ny40IDMyIDI1NiAzMnptMCAzNjhjLTI2LjcgMC01My4xLTQuMS03OC40LTEyLjFsLTIyLjctNy4ybC0xOS41IDEzLjhjLTE0LjMgMTAuMS0zMy45IDIxLjQtNTcuNSAyOWM3LjMtMTIuMSAxNC40LTI1LjcgMTkuOS00MC4ybDEwLjYtMjguMWwtMjAuNi0yMS44QzY5LjcgMzE0LjEgNDggMjgyLjIgNDggMjQwYzAtODguMiA5My4zLTE2MCAyMDgtMTYwczIwOCA3MS44IDIwOCAxNjBzLTkzLjMgMTYwLTIwOCAxNjB6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC00IHRleHQtZ3JheS00MDAgZGFyazp0ZXh0LWdyYXktMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTY5OSAzNTNoLTQ2LjljLTEwLjIgMC0xOS45IDQuOS0yNS45IDEzLjNMNDY5IDU4NC4zbC03MS4yLTk4LjhjLTYtOC4zLTE1LjYtMTMuMy0yNS45LTEzLjNIMzI1Yy02LjUgMC0xMC4zIDcuNC02LjUgMTIuN2wxMjQuNiAxNzIuOGEzMS44IDMxLjggMCAwIDAgNTEuNyAwbDIxMC42LTI5MmMzLjktNS4zLjEtMTIuNy02LjQtMTIuN3pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTUxMiA2NEMyNjQuNiA2NCA2NCAyNjQuNiA2NCA1MTJzMjAwLjYgNDQ4IDQ0OCA0NDhzNDQ4LTIwMC42IDQ0OC00NDhTNzU5LjQgNjQgNTEyIDY0em0wIDgyMGMtMjA1LjQgMC0zNzItMTY2LjYtMzcyLTM3MnMxNjYuNi0zNzIgMzcyLTM3MnMzNzIgMTY2LjYgMzcyIDM3MnMtMTY2LjYgMzcyLTM3MiAzNzJ6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTQwMCBqdXN0aWZ5LWJldHdlZW4gcHktMyBib3JkZXItYi0yIGJvcmRlci1ncmF5LTEwMCBkYXJrOmJvcmRlci1ncmF5LTgwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJteC00XCI+MDQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaW5lLXRocm91Z2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR29vZ2xlIGxvZ28gZGVzaWduXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNTAwIG14LTRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNTEyIDY0QzI2NC42IDY0IDY0IDI2NC42IDY0IDUxMnMyMDAuNiA0NDggNDQ4IDQ0OHM0NDgtMjAwLjYgNDQ4LTQ0OFM3NTkuNCA2NCA1MTIgNjR6bTE5My41IDMwMS43bC0yMTAuNiAyOTJhMzEuOCAzMS44IDAgMCAxLTUxLjcgMEwzMTguNSA0ODQuOWMtMy44LTUuMyAwLTEyLjcgNi41LTEyLjdoNDYuOWMxMC4yIDAgMTkuOSA0LjkgMjUuOSAxMy4zbDcxLjIgOTguOGwxNTcuMi0yMThjNi04LjMgMTUuNi0xMy4zIDI1LjktMTMuM0g2OTljNi41IDAgMTAuMyA3LjQgNi41IDEyLjd6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTQwMCAganVzdGlmeS1iZXR3ZWVuIHB5LTMgYm9yZGVyLWItMiBib3JkZXItZ3JheS0xMDAgZGFyazpib3JkZXItZ3JheS04MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXgtNFwiPjA1PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGluZS10aHJvdWdoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlYWRlciBuYXZpZ2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNTAwIG14LTRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNTEyIDY0QzI2NC42IDY0IDY0IDI2NC42IDY0IDUxMnMyMDAuNiA0NDggNDQ4IDQ0OHM0NDgtMjAwLjYgNDQ4LTQ0OFM3NTkuNCA2NCA1MTIgNjR6bTE5My41IDMwMS43bC0yMTAuNiAyOTJhMzEuOCAzMS44IDAgMCAxLTUxLjcgMEwzMTguNSA0ODQuOWMtMy44LTUuMyAwLTEyLjcgNi41LTEyLjdoNDYuOWMxMC4yIDAgMTkuOSA0LjkgMjUuOSAxMy4zbDcxLjIgOTguOGwxNTcuMi0yMThjNi04LjMgMTUuNi0xMy4zIDI1LjktMTMuM0g2OTljNi41IDAgMTAuMyA3LjQgNi41IDEyLjd6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS0yMDAganVzdGlmeS1iZXR3ZWVuIHB5LTMgYm9yZGVyLWItMiBib3JkZXItZ3JheS0xMDAgZGFyazpib3JkZXItZ3JheS04MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXgtNFwiPjA2PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+SW50ZXJuYXRpb25hbDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxnOm1sLTYgbWwtMiBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktNDAwIGRhcms6dGV4dC1ncmF5LTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA1MTIgNTEyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTI1NiAzMkMxMTQuNiAzMiAwIDEyNS4xIDAgMjQwYzAgNDcuNiAxOS45IDkxLjIgNTIuOSAxMjYuM0MzOCA0MDUuNyA3IDQzOS4xIDYuNSA0MzkuNWMtNi42IDctOC40IDE3LjItNC42IDI2UzE0LjQgNDgwIDI0IDQ4MGM2MS41IDAgMTEwLTI1LjcgMTM5LjEtNDYuM0MxOTIgNDQyLjggMjIzLjIgNDQ4IDI1NiA0NDhjMTQxLjQgMCAyNTYtOTMuMSAyNTYtMjA4UzM5Ny40IDMyIDI1NiAzMnptMCAzNjhjLTI2LjcgMC01My4xLTQuMS03OC40LTEyLjFsLTIyLjctNy4ybC0xOS41IDEzLjhjLTE0LjMgMTAuMS0zMy45IDIxLjQtNTcuNSAyOWM3LjMtMTIuMSAxNC40LTI1LjcgMTkuOS00MC4ybDEwLjYtMjguMWwtMjAuNi0yMS44QzY5LjcgMzE0LjEgNDggMjgyLjIgNDggMjQwYzAtODguMiA5My4zLTE2MCAyMDgtMTYwczIwOCA3MS44IDIwOCAxNjBzLTkzLjMgMTYwLTIwOCAxNjB6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXgtNCBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktNDAwIGRhcms6dGV4dC1ncmF5LTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAzODQgNTEyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTM4NCAxNDRjMC00NC4yLTM1LjgtODAtODAtODBzLTgwIDM1LjgtODAgODBjMCAzNi40IDI0LjMgNjcuMSA1Ny41IDc2LjhjLS42IDE2LjEtNC4yIDI4LjUtMTEgMzYuOWMtMTUuNCAxOS4yLTQ5LjMgMjIuNC04NS4yIDI1LjdjLTI4LjIgMi42LTU3LjQgNS40LTgxLjMgMTYuOXYtMTQ0YzMyLjUtMTAuMiA1Ni00MC41IDU2LTc2LjNjMC00NC4yLTM1LjgtODAtODAtODBTMCAzNS44IDAgODBjMCAzNS44IDIzLjUgNjYuMSA1NiA3Ni4zdjE5OS4zQzIzLjUgMzY1LjkgMCAzOTYuMiAwIDQzMmMwIDQ0LjIgMzUuOCA4MCA4MCA4MHM4MC0zNS44IDgwLTgwYzAtMzQtMjEuMi02My4xLTUxLjItNzQuNmMzLjEtNS4yIDcuOC05LjggMTQuOS0xMy40YzE2LjItOC4yIDQwLjQtMTAuNCA2Ni4xLTEyLjhjNDIuMi0zLjkgOTAtOC40IDExOC4yLTQzLjRjMTQtMTcuNCAyMS4xLTM5LjggMjEuNi02Ny45YzMxLjYtMTAuOCA1NC40LTQwLjcgNTQuNC03NS45ek04MCA2NGM4LjggMCAxNiA3LjIgMTYgMTZzLTcuMiAxNi0xNiAxNnMtMTYtNy4yLTE2LTE2czcuMi0xNiAxNi0xNnptMCAzODRjLTguOCAwLTE2LTcuMi0xNi0xNnM3LjItMTYgMTYtMTZzMTYgNy4yIDE2IDE2cy03LjIgMTYtMTYgMTZ6bTIyNC0zMjBjOC44IDAgMTYgNy4yIDE2IDE2cy03LjIgMTYtMTYgMTZzLTE2LTcuMi0xNi0xNnM3LjItMTYgMTYtMTZ6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC00IHRleHQtZ3JheS00MDAgZGFyazp0ZXh0LWdyYXktMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTY5OSAzNTNoLTQ2LjljLTEwLjIgMC0xOS45IDQuOS0yNS45IDEzLjNMNDY5IDU4NC4zbC03MS4yLTk4LjhjLTYtOC4zLTE1LjYtMTMuMy0yNS45LTEzLjNIMzI1Yy02LjUgMC0xMC4zIDcuNC02LjUgMTIuN2wxMjQuNiAxNzIuOGEzMS44IDMxLjggMCAwIDAgNTEuNyAwbDIxMC42LTI5MmMzLjktNS4zLjEtMTIuNy02LjQtMTIuN3pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTUxMiA2NEMyNjQuNiA2NCA2NCAyNjQuNiA2NCA1MTJzMjAwLjYgNDQ4IDQ0OCA0NDhzNDQ4LTIwMC42IDQ0OC00NDhTNzU5LjQgNjQgNTEyIDY0em0wIDgyMGMtMjA1LjQgMC0zNzItMTY2LjYtMzcyLTM3MnMxNjYuNi0zNzIgMzcyLTM3MnMzNzIgMTY2LjYgMzcyIDM3MnMtMTY2LjYgMzcyLTM3MiAzNzJ6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS0yMDAganVzdGlmeS1iZXR3ZWVuIHB5LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXgtNFwiPjA3PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+UHJvZHVjdGlvbiBkYXRhPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC00IHRleHQtZ3JheS00MDAgZGFyazp0ZXh0LWdyYXktMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTY5OSAzNTNoLTQ2LjljLTEwLjIgMC0xOS45IDQuOS0yNS45IDEzLjNMNDY5IDU4NC4zbC03MS4yLTk4LjhjLTYtOC4zLTE1LjYtMTMuMy0yNS45LTEzLjNIMzI1Yy02LjUgMC0xMC4zIDcuNC02LjUgMTIuN2wxMjQuNiAxNzIuOGEzMS44IDMxLjggMCAwIDAgNTEuNyAwbDIxMC42LTI5MmMzLjktNS4zLjEtMTIuNy02LjQtMTIuN3pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTUxMiA2NEMyNjQuNiA2NCA2NCAyNjQuNiA2NCA1MTJzMjAwLjYgNDQ4IDQ0OCA0NDhzNDQ4LTIwMC42IDQ0OC00NDhTNzU5LjQgNjQgNTEyIDY0em0wIDgyMGMtMjA1LjQgMC0zNzItMTY2LjYtMzcyLTM3MnMxNjYuNi0zNzIgMzcyLTM3MnMzNzIgMTY2LjYgMzcyIDM3MnMtMTY2LjYgMzcyLTM3MiAzNzJ6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCBzbTptbC00IHhsOm1yLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy1sZyByb3VuZGVkLTJ4bCBiZy13aGl0ZSBkYXJrOmJnLWdyYXktNzAwIHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBwLTQganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LW1kIHRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgR29vZ2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHAtMSB0ZXh0LWdyYXktNDAwIGJvcmRlciByb3VuZGVkIGJvcmRlci1ncmF5LTQwMCBtci00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGZpbGw9XCJub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xNy4yMjIgOC42ODVhMS41IDEuNSAwIDAgMSAwIDIuNjI4bC0xMCA1LjQ5OEExLjUgMS41IDAgMCAxIDUgMTUuNDk2VjQuNTAyYTEuNSAxLjUgMCAwIDEgMi4yMjMtMS4zMTRsMTAgNS40OTd6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMiBweC00IGJnLWJsdWUtMTAwIGRhcms6YmctZ3JheS04MDAgdGV4dC1ncmF5LTYwMCBib3JkZXItbC00IGJvcmRlci1ibHVlLTUwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmbGV4IGl0ZW1zLWNlbnRlciBkYXJrOnRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMCBtci0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGZpbGw9XCJub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMiA1YTguNSA4LjUgMCAxIDEgMCAxN2E4LjUgOC41IDAgMCAxIDAtMTd6bTAgM2EuNzUuNzUgMCAwIDAtLjc0My42NDhsLS4wMDcuMTAydjQuNWwuMDA3LjEwMmEuNzUuNzUgMCAwIDAgMS40ODYgMGwuMDA3LS4xMDJ2LTQuNWwtLjAwNy0uMTAyQS43NS43NSAwIDAgMCAxMiA4em03LjE3LTIuODc3bC4wODIuMDYxbDEuMTQ5IDFhLjc1Ljc1IDAgMCAxLS45MDQgMS4xOTNsLS4wODEtLjA2MWwtMS4xNDktMWEuNzUuNzUgMCAwIDEgLjkwMy0xLjE5M3pNMTQuMjUgMi41YS43NS43NSAwIDAgMSAuMTAyIDEuNDkzTDE0LjI1IDRoLTQuNWEuNzUuNzUgMCAwIDEtLjEwMi0xLjQ5M0w5Ljc1IDIuNWg0LjV6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgd2lyZWZyYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXhzIGRhcms6dGV4dC1ncmF5LTIwMCBtci0yIG1sLTIgbWQ6bWwtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjUgbWluIDIwc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtc20gcC0xIHRleHQtZ3JheS00MDAgYm9yZGVyIHJvdW5kZWQgYmctYmx1ZS01MDAgbXItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBmaWxsPVwibm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTkgNmExIDEgMCAwIDEgMSAxdjEwYTEgMSAwIDEgMS0yIDBWN2ExIDEgMCAwIDEgMS0xem02IDBhMSAxIDAgMCAxIDEgMXYxMGExIDEgMCAxIDEtMiAwVjdhMSAxIDAgMCAxIDEtMXpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHAtNCBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyLWItMiBib3JkZXItZ3JheS0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtbWQgdGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBTbGFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC1zbSBwLTEgdGV4dC1ncmF5LTQwMCBib3JkZXIgcm91bmRlZCBib3JkZXItZ3JheS00MDAgbXItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBmaWxsPVwibm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTcuMjIyIDguNjg1YTEuNSAxLjUgMCAwIDEgMCAyLjYyOGwtMTAgNS40OThBMS41IDEuNSAwIDAgMSA1IDE1LjQ5NlY0LjUwMmExLjUgMS41IDAgMCAxIDIuMjIzLTEuMzE0bDEwIDUuNDk3elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTIgcHgtNCB0ZXh0LWdyYXktNjAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBib3JkZXItYi0yIGJvcmRlci1ncmF5LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZsZXggaXRlbXMtY2VudGVyIGRhcms6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGZpbGw9XCJub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMiA1YTguNSA4LjUgMCAxIDEgMCAxN2E4LjUgOC41IDAgMCAxIDAtMTd6bTAgM2EuNzUuNzUgMCAwIDAtLjc0My42NDhsLS4wMDcuMTAydjQuNWwuMDA3LjEwMmEuNzUuNzUgMCAwIDAgMS40ODYgMGwuMDA3LS4xMDJ2LTQuNWwtLjAwNy0uMTAyQS43NS43NSAwIDAgMCAxMiA4em03LjE3LTIuODc3bC4wODIuMDYxbDEuMTQ5IDFhLjc1Ljc1IDAgMCAxLS45MDQgMS4xOTNsLS4wODEtLjA2MWwtMS4xNDktMWEuNzUuNzUgMCAwIDEgLjkwMy0xLjE5M3pNMTQuMjUgMi41YS43NS43NSAwIDAgMSAuMTAyIDEuNDkzTDE0LjI1IDRoLTQuNWEuNzUuNzUgMCAwIDEtLjEwMi0xLjQ5M0w5Ljc1IDIuNWg0LjV6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBJbnRlcm5hdGlvbmFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTQwMCBtci0yIG1sLTIgbWQ6bWwtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMzAgbWluXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC1zbSBwLTEgdGV4dC1ncmF5LTQwMCBib3JkZXIgcm91bmRlZCBib3JkZXItZ3JheS00MDAgbXItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGZpbGw9XCJub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTcuMjIyIDguNjg1YTEuNSAxLjUgMCAwIDEgMCAyLjYyOGwtMTAgNS40OThBMS41IDEuNSAwIDAgMSA1IDE1LjQ5NlY0LjUwMmExLjUgMS41IDAgMCAxIDIuMjIzLTEuMzE0bDEwIDUuNDk3elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMiBweC00IHRleHQtZ3JheS02MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZmxleCBpdGVtcy1jZW50ZXIgZGFyazp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgZmlsbD1cIm5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEyIDVhOC41IDguNSAwIDEgMSAwIDE3YTguNSA4LjUgMCAwIDEgMC0xN3ptMCAzYS43NS43NSAwIDAgMC0uNzQzLjY0OGwtLjAwNy4xMDJ2NC41bC4wMDcuMTAyYS43NS43NSAwIDAgMCAxLjQ4NiAwbC4wMDctLjEwMnYtNC41bC0uMDA3LS4xMDJBLjc1Ljc1IDAgMCAwIDEyIDh6bTcuMTctMi44NzdsLjA4Mi4wNjFsMS4xNDkgMWEuNzUuNzUgMCAwIDEtLjkwNCAxLjE5M2wtLjA4MS0uMDYxbC0xLjE0OS0xYS43NS43NSAwIDAgMSAuOTAzLTEuMTkzek0xNC4yNSAyLjVhLjc1Ljc1IDAgMCAxIC4xMDIgMS40OTNMMTQuMjUgNGgtNC41YS43NS43NSAwIDAgMS0uMTAyLTEuNDkzTDkuNzUgMi41aDQuNXpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFNsYWNrIGxvZ28gZGVzaWduXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTQwMCBtci0yIG1sLTIgbWQ6bWwtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMzAgbWluXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC1zbSBwLTEgdGV4dC1ncmF5LTQwMCBib3JkZXIgcm91bmRlZCBib3JkZXItZ3JheS00MDAgbXItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGZpbGw9XCJub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTcuMjIyIDguNjg1YTEuNSAxLjUgMCAwIDEgMCAyLjYyOGwtMTAgNS40OThBMS41IDEuNSAwIDAgMSA1IDE1LjQ5NlY0LjUwMmExLjUgMS41IDAgMCAxIDIuMjIzLTEuMzE0bDEwIDUuNDk3elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMiBweC00IHRleHQtZ3JheS02MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZmxleCBpdGVtcy1jZW50ZXIgZGFyazp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgZmlsbD1cIm5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEyIDVhOC41IDguNSAwIDEgMSAwIDE3YTguNSA4LjUgMCAwIDEgMC0xN3ptMCAzYS43NS43NSAwIDAgMC0uNzQzLjY0OGwtLjAwNy4xMDJ2NC41bC4wMDcuMTAyYS43NS43NSAwIDAgMCAxLjQ4NiAwbC4wMDctLjEwMnYtNC41bC0uMDA3LS4xMDJBLjc1Ljc1IDAgMCAwIDEyIDh6bTcuMTctMi44NzdsLjA4Mi4wNjFsMS4xNDkgMWEuNzUuNzUgMCAwIDEtLjkwNCAxLjE5M2wtLjA4MS0uMDYxbC0xLjE0OS0xYS43NS43NSAwIDAgMSAuOTAzLTEuMTkzek0xNC4yNSAyLjVhLjc1Ljc1IDAgMCAxIC4xMDIgMS40OTNMMTQuMjUgNGgtNC41YS43NS43NSAwIDAgMS0uMTAyLTEuNDkzTDkuNzUgMi41aDQuNXpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIERhaGJvYXJkIHRlbXBsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTQwMCBtci0yIG1sLTIgbWQ6bWwtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMzAgbWluXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC1zbSBwLTEgdGV4dC1ncmF5LTQwMCBib3JkZXIgcm91bmRlZCBib3JkZXItZ3JheS00MDAgbXItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGZpbGw9XCJub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTcuMjIyIDguNjg1YTEuNSAxLjUgMCAwIDEgMCAyLjYyOGwtMTAgNS40OThBMS41IDEuNSAwIDAgMSA1IDE1LjQ5NlY0LjUwMmExLjUgMS41IDAgMCAxIDIuMjIzLTEuMzE0bDEwIDUuNDk3elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHNtOnctMS8yIHhsOnctMS8zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LWxnIHJvdW5kZWQtMnhsIHAtNCBiZy13aGl0ZSBkYXJrOmJnLWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkIHNoYWRvdy1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IGZvbnQtYm9sZCB0ZXh0LXhsIHRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlYyAyMDIxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwLTIgcm91bmRlZC1mdWxsIGJnLWJsdWUtNTAwIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTMuODMgMTlhMSAxIDAgMCAxLS43OC0uMzdsLTQuODMtNmExIDEgMCAwIDEgMC0xLjI3bDUtNmExIDEgMCAwIDEgMS41NCAxLjI4TDEwLjI5IDEybDQuMzIgNS4zNmExIDEgMCAwIDEtLjc4IDEuNjR6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInAtMiByb3VuZGVkLWZ1bGwgYmctYmx1ZS01MDAgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMCAxOWExIDEgMCAwIDEtLjY0LS4yM2ExIDEgMCAwIDEtLjEzLTEuNDFMMTMuNzEgMTJMOS4zOSA2LjYzYTEgMSAwIDAgMSAuMTUtMS40MWExIDEgMCAwIDEgMS40Ni4xNWw0LjgzIDZhMSAxIDAgMCAxIDAgMS4yN2wtNSA2QTEgMSAwIDAgMSAxMCAxOXpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi1teC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidy1mdWxsIGRhcms6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zIFwiPlM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyBcIj5NPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgXCI+VDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zIFwiPlc8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyBcIj5UPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgXCI+RjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zIFwiPlM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCBkYXJrOnRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgIHRleHQtY2VudGVyIHRleHQtZ3JheS0zMDAgZGFyazp0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyNVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zICB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktMzAwIGRhcms6dGV4dC1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyAgdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTMwMCBkYXJrOnRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgIHRleHQtY2VudGVyIHRleHQtZ3JheS0zMDAgZGFyazp0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyOFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zICB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktMzAwIGRhcms6dGV4dC1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyAgdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTMwMCBkYXJrOnRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgIGhvdmVyOnRleHQtYmx1ZS01MDAgdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTgwMCBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgIGhvdmVyOnRleHQtYmx1ZS01MDAgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHJlbGF0aXZlIHB4LTEgIGhvdmVyOnRleHQtYmx1ZS01MDAgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIHJvdW5kZWQtZnVsbCBoLTIgdy0yIGJnLWJsdWUtNTAwIGJvdHRvbS0wIGxlZnQtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zICBob3Zlcjp0ZXh0LWJsdWUtNTAwIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgIGhvdmVyOnRleHQtYmx1ZS01MDAgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyAgaG92ZXI6dGV4dC1ibHVlLTUwMCB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zICBob3Zlcjp0ZXh0LWJsdWUtNTAwIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgbWQ6cHgtMiByZWxhdGl2ZSBsZzpweC0zIGhvdmVyOnRleHQtYmx1ZS01MDAgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIHJvdW5kZWQtZnVsbCBoLTIgdy0yIGJnLXllbGxvdy01MDAgYm90dG9tLTAgbGVmdC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyAgaG92ZXI6dGV4dC1ibHVlLTUwMCB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zICBob3Zlcjp0ZXh0LWJsdWUtNTAwIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zICBob3Zlcjp0ZXh0LWJsdWUtNTAwIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zICBob3Zlcjp0ZXh0LWJsdWUtNTAwIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zICB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwLTIgcm91bmRlZC1mdWxsIGJnLWJsdWUtNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgIGhvdmVyOnRleHQtYmx1ZS01MDAgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgIGhvdmVyOnRleHQtYmx1ZS01MDAgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyAgaG92ZXI6dGV4dC1ibHVlLTUwMCB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyAgaG92ZXI6dGV4dC1ibHVlLTUwMCB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyAgaG92ZXI6dGV4dC1ibHVlLTUwMCB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMThcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyAgaG92ZXI6dGV4dC1ibHVlLTUwMCB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyAgaG92ZXI6dGV4dC1ibHVlLTUwMCB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyAgaG92ZXI6dGV4dC1ibHVlLTUwMCB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyAgaG92ZXI6dGV4dC1ibHVlLTUwMCB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zICBob3Zlcjp0ZXh0LWJsdWUtNTAwIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zICBob3Zlcjp0ZXh0LWJsdWUtNTAwIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zICBob3Zlcjp0ZXh0LWJsdWUtNTAwIHJlbGF0aXZlIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyNVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgcm91bmRlZC1mdWxsIGgtMiB3LTIgYmctcmVkLTUwMCBib3R0b20tMCBsZWZ0LTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMlwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyAgaG92ZXI6dGV4dC1ibHVlLTUwMCB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyAgaG92ZXI6dGV4dC1ibHVlLTUwMCB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyAgaG92ZXI6dGV4dC1ibHVlLTUwMCB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyAgaG92ZXI6dGV4dC1ibHVlLTUwMCB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zICBob3Zlcjp0ZXh0LWJsdWUtNTAwIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zICBob3Zlcjp0ZXh0LWJsdWUtNTAwIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3ctbGcgcm91bmRlZC0yeGwgcC00IGJnLXdoaXRlIGRhcms6YmctZ3JheS03MDAgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1tZCB0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbXktNiBzcGFjZS14LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJsb2NrIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInByb2ZpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvcGVyc29uLzEuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtYXV0byBvYmplY3QtY292ZXIgcm91bmRlZC1mdWxsIGgtMTAgdy0xMCBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS05MDAgZm9udC1zZW1pYm9sZCBkYXJrOnRleHQtd2hpdGUgbWwtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGFybGllIFJhYmlsbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS00MDAgZGFyazp0ZXh0LWdyYXktMzAwIG1sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGV5IEpvaG4gISBEbyB5b3UgcmVhZCB0aGUgTmV4dEpTIGRvYyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBteS02IHNwYWNlLXgtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmxvY2sgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwicHJvZmlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9wZXJzb24vNS5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvIG9iamVjdC1jb3ZlciByb3VuZGVkLWZ1bGwgaC0xMCB3LTEwIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTkwMCBmb250LXNlbWlib2xkIGRhcms6dGV4dC13aGl0ZSBtbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hcmllIExvdVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNDAwIGRhcms6dGV4dC1ncmF5LTMwMCBtbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vIEkgdGhpbmsgdGhlIGRvZyBpcyBiZXR0ZXIuLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG15LTYgc3BhY2UteC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJibG9jayByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJwcm9maWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3BlcnNvbi82LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LWF1dG8gb2JqZWN0LWNvdmVyIHJvdW5kZWQtZnVsbCBoLTEwIHctMTAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktOTAwIGZvbnQtc2VtaWJvbGQgZGFyazp0ZXh0LXdoaXRlIG1sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXZhbiBCdWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS00MDAgZGFyazp0ZXh0LWdyYXktMzAwIG1sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VyaW91c2x5ID8gaGFoYSBCb2IgaXMgbm90IGEgY2hpbGRyZW4gIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbXktNiBzcGFjZS14LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJsb2NrIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInByb2ZpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvcGVyc29uLzcuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtYXV0byBvYmplY3QtY292ZXIgcm91bmRlZC1mdWxsIGgtMTAgdy0xMCBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS05MDAgZm9udC1zZW1pYm9sZCBkYXJrOnRleHQtd2hpdGUgbWwtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXJpbmEgRmFyZ2FcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTQwMCBkYXJrOnRleHQtZ3JheS0zMDAgbWwtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEbyB5b3UgbmVlZCB0aGF0IGRlaXNnbiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZU5hbWU9XCJcIj5cclxuICAgICAgICB7Y3VycmVudFVzZXIgJiYgY3VycmVudFVzZXIuZW1haWx9XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtsb2dPdXR9PmxvZ291dDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYXNoYm9hcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=