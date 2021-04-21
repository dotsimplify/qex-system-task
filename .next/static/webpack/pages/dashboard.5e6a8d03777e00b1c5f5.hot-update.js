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
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#",
                        className: "",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                          className: "inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white",
                          src: "/images/person/3.jpg",
                          alt: "Charles"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 322,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 321,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 320,
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
                                lineNumber: 343,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                                d: "m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z",
                                fill: "#2eb67d"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 347,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                                d: "m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z",
                                fill: "#ecb22e"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 351,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                                d: "m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0",
                                fill: "#e01e5a"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 355,
                                columnNumber: 33
                              }, _this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 342,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 336,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 335,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "flex flex-col",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "font-bold text-md text-black dark:text-white ml-2",
                            children: "Slack"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 363,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "text-sm text-gray-500 dark:text-white ml-2",
                            children: "Slack corporation"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 366,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 362,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 334,
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
                              lineNumber: 381,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 373,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 372,
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
                              lineNumber: 392,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 385,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 384,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 371,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 333,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "flex items-center justify-between mb-4 space-x-12",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "px-2 py-1 flex items-center font-semibold text-xs rounded-md text-green-700 bg-green-50",
                        children: "COMPLETED"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 398,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "px-2 py-1 flex items-center font-semibold text-xs rounded-md text-green-600 border border-green-600 bg-white",
                        children: "MEDIUM PRIORITY"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 401,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 397,
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
                            lineNumber: 409,
                            columnNumber: 29
                          }, _this), "/50"]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 407,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 406,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "w-full h-2 bg-gray-200 rounded-full mt-2",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "w-full h-full text-center text-xs text-white bg-pink-400 rounded-full"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 416,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 415,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 405,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "flex items-center justify-start my-4 space-x-4",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "px-2 py-1 flex items-center text-xs rounded-md font-semibold text-green-500 bg-green-50",
                        children: "IOS APP"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 420,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "px-2 py-1 flex items-center text-xs rounded-md text-yellow-600 font-semibold bg-yellow-200",
                        children: "ANDROID"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 423,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 419,
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
                          lineNumber: 429,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 428,
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
                          lineNumber: 436,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 435,
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
                          lineNumber: 443,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 442,
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
                          lineNumber: 450,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 449,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 427,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "px-2 py-1 flex w-36 mt-4 items-center text-xs rounded-md font-semibold text-yellow-500 bg-yellow-100",
                      children: "DUE DATE : 18 JUN"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 457,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 332,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 331,
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
                        lineNumber: 468,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 466,
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
                            lineNumber: 475,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            children: "Create wireframe"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 476,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 474,
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
                            lineNumber: 485,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                            d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z",
                            fill: "currentColor"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 489,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 478,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 473,
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
                            lineNumber: 497,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            children: "Dashboard design"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 498,
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
                                lineNumber: 508,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 501,
                              columnNumber: 31
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 499,
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
                                lineNumber: 523,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 516,
                              columnNumber: 31
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 514,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 496,
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
                            lineNumber: 537,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                            d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z",
                            fill: "currentColor"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 541,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 530,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 495,
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
                            lineNumber: 549,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            children: "Components card"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 550,
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
                                lineNumber: 560,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 553,
                              columnNumber: 31
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 551,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 548,
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
                            lineNumber: 574,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                            d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z",
                            fill: "currentColor"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 578,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 567,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 547,
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
                            lineNumber: 586,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "line-through",
                            children: "Google logo design"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 587,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 585,
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
                            lineNumber: 598,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 591,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 584,
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
                            lineNumber: 606,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "line-through",
                            children: "Header navigation"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 607,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 605,
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
                            lineNumber: 618,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 611,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 604,
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
                            lineNumber: 626,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            children: "International"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 627,
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
                                lineNumber: 637,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 630,
                              columnNumber: 31
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 628,
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
                                lineNumber: 652,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 645,
                              columnNumber: 31
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 643,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 625,
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
                            lineNumber: 666,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                            d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z",
                            fill: "currentColor"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 670,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 659,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 624,
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
                            lineNumber: 678,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            children: "Production data"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 679,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 677,
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
                            lineNumber: 688,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                            d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z",
                            fill: "currentColor"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 692,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 681,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 676,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 472,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 465,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 464,
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
                        lineNumber: 704,
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
                              lineNumber: 715,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 714,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 708,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 707,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 703,
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
                              lineNumber: 733,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 732,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 725,
                          columnNumber: 27
                        }, _this), "Create wireframe"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 724,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "font-bold text-xs dark:text-gray-200 mr-2 ml-2 md:ml-4",
                          children: "25 min 20s"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 742,
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
                                lineNumber: 754,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 753,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 746,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 745,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 741,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 723,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "flex items-center p-4 justify-between border-b-2 border-gray-100",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        className: "font-bold text-md text-black dark:text-white",
                        children: "Slack"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 764,
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
                              lineNumber: 775,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 774,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 768,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 767,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 763,
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
                              lineNumber: 793,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 792,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 785,
                          columnNumber: 27
                        }, _this), "International"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 784,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "text-xs text-gray-400 mr-2 ml-2 md:ml-4",
                          children: "30 min"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 802,
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
                                lineNumber: 813,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 812,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 806,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 805,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 801,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 783,
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
                              lineNumber: 832,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 831,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 824,
                          columnNumber: 27
                        }, _this), "Slack logo design"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 823,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "text-xs text-gray-400 mr-2 ml-2 md:ml-4",
                          children: "30 min"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 841,
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
                                lineNumber: 852,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 851,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 845,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 844,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 840,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 822,
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
                              lineNumber: 871,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 870,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 863,
                          columnNumber: 27
                        }, _this), "Dahboard template"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 862,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "text-xs text-gray-400 mr-2 ml-2 md:ml-4",
                          children: "30 min"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 880,
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
                                lineNumber: 891,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 890,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 884,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 883,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 879,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 861,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 702,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 701,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 463,
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
                            lineNumber: 909,
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
                                  lineNumber: 920,
                                  columnNumber: 35
                                }, _this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 914,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 913,
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
                                  lineNumber: 933,
                                  columnNumber: 35
                                }, _this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 927,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 926,
                              columnNumber: 31
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 912,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 908,
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
                                lineNumber: 944,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                                className: "py-3 px-2 md:px-3 ",
                                children: "M"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 945,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                                className: "py-3 px-2 md:px-3 ",
                                children: "T"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 946,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                                className: "py-3 px-2 md:px-3 ",
                                children: "W"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 947,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                                className: "py-3 px-2 md:px-3 ",
                                children: "T"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 948,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                                className: "py-3 px-2 md:px-3 ",
                                children: "F"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 949,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                                className: "py-3 px-2 md:px-3 ",
                                children: "S"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 950,
                                columnNumber: 33
                              }, _this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 943,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                              className: "text-gray-400 dark:text-gray-500",
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500",
                                children: "25"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 953,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500",
                                children: "26"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 956,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500",
                                children: "27"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 959,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500",
                                children: "28"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 962,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500",
                                children: "29"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 965,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500",
                                children: "30"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 968,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center text-gray-800 cursor-pointer",
                                children: "1"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 971,
                                columnNumber: 33
                              }, _this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 952,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "2"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 976,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 relative px-1  hover:text-blue-500 text-center cursor-pointer",
                                children: ["3", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                  className: "absolute rounded-full h-2 w-2 bg-blue-500 bottom-0 left-1/2 transform -translate-x-1/2"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 981,
                                  columnNumber: 35
                                }, _this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 979,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "4"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 983,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "5"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 986,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "6"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 989,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "7"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 992,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3 md:px-2 relative lg:px-3 hover:text-blue-500 text-center cursor-pointer",
                                children: ["8", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                  className: "absolute rounded-full h-2 w-2 bg-yellow-500 bottom-0 left-1/2 transform -translate-x-1/2"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 997,
                                  columnNumber: 35
                                }, _this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 995,
                                columnNumber: 33
                              }, _this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 975,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "9"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1001,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "10"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1004,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "11"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1007,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "12"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1010,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  text-center text-white cursor-pointer",
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                  className: "p-2 rounded-full bg-blue-500",
                                  children: "13"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1014,
                                  columnNumber: 35
                                }, _this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1013,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "14"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1018,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "15"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1021,
                                columnNumber: 33
                              }, _this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 1000,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "16"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1026,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "17"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1029,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "18"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1032,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "19"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1035,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "20"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1038,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "21"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1041,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "22"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1044,
                                columnNumber: 33
                              }, _this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 1025,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "23"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1049,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "24"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1052,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 relative text-center cursor-pointer",
                                children: ["25", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                  className: "absolute rounded-full h-2 w-2 bg-red-500 bottom-0 left-1/2 transform -translate-x-1/2"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1057,
                                  columnNumber: 35
                                }, _this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 1055,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "26"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1059,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "27"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1062,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "28"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1065,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "29"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1068,
                                columnNumber: 33
                              }, _this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 1048,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "30"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1073,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "31"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1076,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1079,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1080,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1081,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1082,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1083,
                                columnNumber: 33
                              }, _this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 1072,
                              columnNumber: 31
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 942,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 941,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 907,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 906,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 905,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 904,
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
                      lineNumber: 1093,
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
                            lineNumber: 1099,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1098,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "flex flex-col",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "text-sm text-gray-900 font-semibold dark:text-white ml-2",
                            children: "Charlie Rabiller"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1106,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "text-sm text-gray-400 dark:text-gray-300 ml-2",
                            children: "Hey John ! Do you read the NextJS doc ?"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1109,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 1105,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 1097,
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
                            lineNumber: 1116,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1115,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "flex flex-col",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "text-sm text-gray-900 font-semibold dark:text-white ml-2",
                            children: "Marie Lou"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1123,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "text-sm text-gray-400 dark:text-gray-300 ml-2",
                            children: "No I think the dog is better..."
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1126,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 1122,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 1114,
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
                            lineNumber: 1133,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1132,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "flex flex-col",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "text-sm text-gray-900 font-semibold dark:text-white ml-2",
                            children: "Ivan Buck"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1140,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "text-sm text-gray-400 dark:text-gray-300 ml-2",
                            children: "Seriously ? haha Bob is not a children !"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1143,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 1139,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 1131,
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
                            lineNumber: 1150,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1149,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "flex flex-col",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "text-sm text-gray-900 font-semibold dark:text-white ml-2",
                            children: "Marina Farga"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1157,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "text-sm text-gray-400 dark:text-gray-300 ml-2",
                            children: "Do you need that deisgn ?"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1160,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 1156,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 1148,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 1096,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 1092,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1091,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 903,
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
        lineNumber: 1177,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1175,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQuanMiXSwibmFtZXMiOlsiZGFzaGJvYXJkIiwidXNlQXV0aCIsImxvZ291dCIsImN1cnJlbnRVc2VyIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwicm91dGVyIiwidXNlUm91dGVyIiwibG9nT3V0IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiZW1haWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUEsaUJBQ1VDLG9FQUFPLEVBRGpCO0FBQUEsTUFDZEMsTUFEYyxZQUNkQSxNQURjO0FBQUEsTUFDTkMsV0FETSxZQUNOQSxXQURNOztBQUFBLGtCQUVJQyxzREFBUSxDQUFDLEVBQUQsQ0FGWjtBQUFBLE1BRWZDLEtBRmU7QUFBQSxNQUVSQyxRQUZROztBQUd0QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUNBLE1BQU1DLE1BQU07QUFBQSxnVUFBRyxpQkFBT0MsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFWEosc0JBQVEsQ0FBQyxFQUFELENBQVI7QUFGVztBQUFBLHFCQUdMSixNQUFNLEVBSEQ7O0FBQUE7QUFJWFMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaO0FBQ0FMLG9CQUFNLENBQUNNLElBQVAsQ0FBWSxRQUFaO0FBTFc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFPWFAsc0JBQVEsQ0FBQyxxQ0FBRCxDQUFSOztBQVBXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQU5HLE1BQU07QUFBQTtBQUFBO0FBQUEsS0FBWjs7QUFVQSxzQkFDRTtBQUFBLDRCQUNFO0FBQU0sZUFBUyxFQUFDLHFGQUFoQjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxrQ0FB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QSxhQXBvQ0Y7QUFBQSxrQkFERjtBQTJvQ0QsQ0F6cENEOztHQUFNVCxTO1VBQzRCQyw0RCxFQUVqQk8scUQ7OztBQXdwQ0ZSLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC41ZTZhOGQwMzc3N2UwMGIxYzVmNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uL2NvbnRleHQvQXV0aENvbnRleHRcIjtcclxuY29uc3QgZGFzaGJvYXJkID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgbG9nb3V0LCBjdXJyZW50VXNlciB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgbG9nT3V0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHNldEVycm9yKFwiXCIpO1xyXG4gICAgICBhd2FpdCBsb2dvdXQoKTtcclxuICAgICAgY29uc29sZS5sb2coXCJsb2cgb3V0IHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRFcnJvcihcIkVycm9yIHdoaWxlIGxvZ2dpbmcgb3V0ICwgVHJ5IGFnYWluXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImJnLWdyYXktMTAwIGRhcms6YmctZ3JheS04MDAgcm91bmRlZC0yeGwgcmVsYXRpdmUgaC1zY3JlZW4gb3ZlcmZsb3ctaGlkZGVuIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiBoaWRkZW4gbGc6YmxvY2sgbXktNCBtbC00IHNoYWRvdy1sZyByZWxhdGl2ZSB3LTgwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgaC1mdWxsIHJvdW5kZWQtMnhsIGRhcms6YmctZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB0LTZcIj5cclxuICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzNVwiXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjMwXCJcclxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNTYgMzY2XCJcclxuICAgICAgICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXHJcbiAgICAgICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgeDE9XCIxMi41MTg5NTM0JVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB5MT1cIjg1LjIxMjg2MTElXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHgyPVwiODguMjI4Mjk1OSVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgeTI9XCIxMC4wMjI1NDk3JVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImxpbmVhckdyYWRpZW50LTFcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdG9wXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3AtY29sb3I9XCIjRkYwMDU3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcC1vcGFjaXR5PVwiMC4xNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldD1cIjAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgID48L3N0b3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPVwiI0ZGMDA1N1wiIG9mZnNldD1cIjg2LjEzNTQlXCI+PC9zdG9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMCw2MC44NTM4MDA2IEMwLDI3LjI0NTI2MSAyNy4yNDUzMDQsMCA2MC44NTQyMTIxLDAgTDExNy4wMjcwMTksMCBMMjU1Ljk5NjU0OSwwIEwyNTUuOTk2NTQ5LDg2LjU5OTk3NzYgQzI1NS45OTY1NDksMTAzLjQwNDE1NSAyNDIuMzc0MDk2LDExNy4wMjcyMjIgMjI1LjU2OTkxOSwxMTcuMDI3MjIyIEwxNDUuODA4MTIsMTE3LjAyNzIyMiBDMTMwLjAwMzI5OSwxMTcuMjc3ODI5IDExNy4yNDI2MTUsMTMwLjA2MDAxMSAxMTcuMDI3MDE5LDE0NS44NzI4MTcgTDExNy4wMjcwMTksMzM1LjI4MjUyIEMxMTcuMDI3MDE5LDM1Mi4wODczMTIgMTAzLjQwNDU2NywzNjUuNzA5NzY0IDg2LjU5OTc3NDksMzY1LjcwOTc2NCBMMCwzNjUuNzA5NzY0IEwwLDExNy4wMjcyMjIgTDAsNjAuODUzODAwNiBaXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjMDAxQjM4XCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgIDxjaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI2xpbmVhckdyYWRpZW50LTEpXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNDcuMDEzMjQ0LCAxNDcuMDE0Njc1KSByb3RhdGUoOTAuMDAwMDAwKSB0cmFuc2xhdGUoLTE0Ny4wMTMyNDQsIC0xNDcuMDE0Njc1KSBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY3g9XCIxNDcuMDEzMjQ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGN5PVwiMTQ3LjAxNDY3NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICByPVwiNzguOTkzMzkzOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvY2lyY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxjaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI2xpbmVhckdyYWRpZW50LTEpXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk9XCIwLjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE0Ny4wMTMyNDQsIDE0Ny4wMTQ2NzUpIHJvdGF0ZSg5MC4wMDAwMDApIHRyYW5zbGF0ZSgtMTQ3LjAxMzI0NCwgLTE0Ny4wMTQ2NzUpIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjeD1cIjE0Ny4wMTMyNDRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY3k9XCIxNDcuMDE0Njc1XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHI9XCI3OC45OTMzOTM4XCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9jaXJjbGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibXQtNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZm9udC10aGluIHVwcGVyY2FzZSB0ZXh0LWJsdWUtNTAwIGZsZXggaXRlbXMtY2VudGVyIHAtNCBteS0yIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBqdXN0aWZ5LXN0YXJ0IGJnLWdyYWRpZW50LXRvLXIgZnJvbS13aGl0ZSB0by1ibHVlLTEwMCBib3JkZXItci00IGJvcmRlci1ibHVlLTUwMCBkYXJrOmZyb20tZ3JheS03MDAgZGFyazp0by1ncmF5LTgwMCBib3JkZXItci00IGJvcmRlci1ibHVlLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwNDggMTc5MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEwNzAgMTE3OGwzMDYtNTY0aC02NTRsLTMwNiA1NjRoNjU0em03MjItMjgycTAgMTgyLTcxIDM0OHQtMTkxIDI4Ni0yODYgMTkxLTM0OCA3MS0zNDgtNzEtMjg2LTE5MS0xOTEtMjg2LTcxLTM0OCA3MS0zNDggMTkxLTI4NiAyODYtMTkxIDM0OC03MSAzNDggNzEgMjg2IDE5MSAxOTEgMjg2IDcxIDM0OHpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXgtNCB0ZXh0LXNtIGZvbnQtbm9ybWFsXCI+RGFzaGJvYXJkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGZvbnQtdGhpbiB1cHBlcmNhc2UgdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS0yMDAgZmxleCBpdGVtcy1jZW50ZXIgcC00IG15LTIgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGp1c3RpZnktc3RhcnQgaG92ZXI6dGV4dC1ibHVlLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtLWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwNDggMTc5MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEwMjQgMTEzMXEwLTY0LTktMTE3LjV0LTI5LjUtMTAzLTYwLjUtNzgtOTctMjguNXEtNiA0LTMwIDE4dC0zNy41IDIxLjUtMzUuNSAxNy41LTQzIDE0LjUtNDIgNC41LTQyLTQuNS00My0xNC41LTM1LjUtMTcuNS0zNy41LTIxLjUtMzAtMThxLTU3IDAtOTcgMjguNXQtNjAuNSA3OC0yOS41IDEwMy05IDExNy41IDM3IDEwNi41IDkxIDQyLjVoNTEycTU0IDAgOTEtNDIuNXQzNy0xMDYuNXptLTE1Ny01MjBxMC05NC02Ni41LTE2MC41dC0xNjAuNS02Ni41LTE2MC41IDY2LjUtNjYuNSAxNjAuNSA2Ni41IDE2MC41IDE2MC41IDY2LjUgMTYwLjUtNjYuNSA2Ni41LTE2MC41em05MjUgNTA5di02NHEwLTE0LTktMjN0LTIzLTloLTU3NnEtMTQgMC0yMyA5dC05IDIzdjY0cTAgMTQgOSAyM3QyMyA5aDU3NnExNCAwIDIzLTl0OS0yM3ptMC0yNjB2LTU2cTAtMTUtMTAuNS0yNS41dC0yNS41LTEwLjVoLTU2OHEtMTUgMC0yNS41IDEwLjV0LTEwLjUgMjUuNXY1NnEwIDE1IDEwLjUgMjUuNXQyNS41IDEwLjVoNTY4cTE1IDAgMjUuNS0xMC41dDEwLjUtMjUuNXptMC0yNTJ2LTY0cTAtMTQtOS0yM3QtMjMtOWgtNTc2cS0xNCAwLTIzIDl0LTkgMjN2NjRxMCAxNCA5IDIzdDIzIDloNTc2cTE0IDAgMjMtOXQ5LTIzem0yNTYtMzIwdjEyMTZxMCA2Ni00NyAxMTN0LTExMyA0N2gtMzUydi05NnEwLTE0LTktMjN0LTIzLTloLTY0cS0xNCAwLTIzIDl0LTkgMjN2OTZoLTc2OHYtOTZxMC0xNC05LTIzdC0yMy05aC02NHEtMTQgMC0yMyA5dC05IDIzdjk2aC0zNTJxLTY2IDAtMTEzLTQ3dC00Ny0xMTN2LTEyMTZxMC02NiA0Ny0xMTN0MTEzLTQ3aDE3MjhxNjYgMCAxMTMgNDd0NDcgMTEzelwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJteC00IHRleHQtc20gZm9udC1ub3JtYWxcIj5Qcm9qZWN0czwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBmb250LXRoaW4gdXBwZXJjYXNlIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktMjAwIGZsZXggaXRlbXMtY2VudGVyIHAtNCBteS0yIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBqdXN0aWZ5LXN0YXJ0IGhvdmVyOnRleHQtYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibS1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMDQ4IDE3OTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk02ODUgNDgzcTE2IDAgMjcuNS0xMS41dDExLjUtMjcuNS0xMS41LTI3LjUtMjcuNS0xMS41LTI3IDExLjUtMTEgMjcuNSAxMSAyNy41IDI3IDExLjV6bTQyMiAwcTE2IDAgMjctMTEuNXQxMS0yNy41LTExLTI3LjUtMjctMTEuNS0yNy41IDExLjUtMTEuNSAyNy41IDExLjUgMjcuNSAyNy41IDExLjV6bS04MTIgMTg0cTQyIDAgNzIgMzB0MzAgNzJ2NDMwcTAgNDMtMjkuNSA3M3QtNzIuNSAzMC03My0zMC0zMC03M3YtNDMwcTAtNDIgMzAtNzJ0NzMtMzB6bTEwNjAgMTl2NjY2cTAgNDYtMzIgNzh0LTc3IDMyaC03NXYyMjdxMCA0My0zMCA3M3QtNzMgMzAtNzMtMzAtMzAtNzN2LTIyN2gtMTM4djIyN3EwIDQzLTMwIDczdC03MyAzMHEtNDIgMC03Mi0zMHQtMzAtNzNsLTEtMjI3aC03NHEtNDYgMC03OC0zMnQtMzItNzh2LTY2Nmg5MTh6bS0yMzItNDA1cTEwNyA1NSAxNzEgMTUzLjV0NjQgMjE1LjVoLTkyNXEwLTExNyA2NC0yMTUuNXQxNzItMTUzLjVsLTcxLTEzMXEtNy0xMyA1LTIwIDEzLTYgMjAgNmw3MiAxMzJxOTUtNDIgMjAxLTQydDIwMSA0Mmw3Mi0xMzJxNy0xMiAyMC02IDEyIDcgNSAyMHptNDc3IDQ4OHY0MzBxMCA0My0zMCA3M3QtNzMgMzBxLTQyIDAtNzItMzB0LTMwLTczdi00MzBxMC00MyAzMC03Mi41dDcyLTI5LjVxNDMgMCA3MyAyOS41dDMwIDcyLjV6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm14LTQgdGV4dC1zbSBmb250LW5vcm1hbFwiPk15IHRhc2tzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGZvbnQtdGhpbiB1cHBlcmNhc2UgdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS0yMDAgZmxleCBpdGVtcy1jZW50ZXIgcC00IG15LTIgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGp1c3RpZnktc3RhcnQgaG92ZXI6dGV4dC1ibHVlLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtLWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwNDggMTc5MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTk2MCAwbDk2MCAzODR2MTI4aC0xMjhxMCAyNi0yMC41IDQ1dC00OC41IDE5aC0xNTI2cS0yOCAwLTQ4LjUtMTl0LTIwLjUtNDVoLTEyOHYtMTI4em0tNzA0IDY0MGgyNTZ2NzY4aDEyOHYtNzY4aDI1NnY3NjhoMTI4di03NjhoMjU2djc2OGgxMjh2LTc2OGgyNTZ2NzY4aDU5cTI4IDAgNDguNSAxOXQyMC41IDQ1djY0aC0xNjY0di02NHEwLTI2IDIwLjUtNDV0NDguNS0xOWg1OXYtNzY4em0xNTk1IDk2MHEyOCAwIDQ4LjUgMTl0MjAuNSA0NXYxMjhoLTE5MjB2LTEyOHEwLTI2IDIwLjUtNDV0NDguNS0xOWgxNzgyelwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJteC00IHRleHQtc20gZm9udC1ub3JtYWxcIj5DYWxlbmRhcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBmb250LXRoaW4gdXBwZXJjYXNlIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktMjAwIGZsZXggaXRlbXMtY2VudGVyIHAtNCBteS0yIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBqdXN0aWZ5LXN0YXJ0IGhvdmVyOnRleHQtYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtLWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMDQ4IDE3OTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMDcwIDExNzhsMzA2LTU2NGgtNjU0bC0zMDYgNTY0aDY1NHptNzIyLTI4MnEwIDE4Mi03MSAzNDh0LTE5MSAyODYtMjg2IDE5MS0zNDggNzEtMzQ4LTcxLTI4Ni0xOTEtMTkxLTI4Ni03MS0zNDggNzEtMzQ4IDE5MS0yODYgMjg2LTE5MSAzNDgtNzEgMzQ4IDcxIDI4NiAxOTEgMTkxIDI4NiA3MSAzNDh6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm14LTQgdGV4dC1zbSBmb250LW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgVGltZSBtYW5hZ2VcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZm9udC10aGluIHVwcGVyY2FzZSB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTIwMCBmbGV4IGl0ZW1zLWNlbnRlciBwLTQgbXktMiB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAganVzdGlmeS1zdGFydCBob3Zlcjp0ZXh0LWJsdWUtNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm0tYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjA0OCAxNzkyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTAyNCAxMTMxcTAtNjQtOS0xMTcuNXQtMjkuNS0xMDMtNjAuNS03OC05Ny0yOC41cS02IDQtMzAgMTh0LTM3LjUgMjEuNS0zNS41IDE3LjUtNDMgMTQuNS00MiA0LjUtNDItNC41LTQzLTE0LjUtMzUuNS0xNy41LTM3LjUtMjEuNS0zMC0xOHEtNTcgMC05NyAyOC41dC02MC41IDc4LTI5LjUgMTAzLTkgMTE3LjUgMzcgMTA2LjUgOTEgNDIuNWg1MTJxNTQgMCA5MS00Mi41dDM3LTEwNi41em0tMTU3LTUyMHEwLTk0LTY2LjUtMTYwLjV0LTE2MC41LTY2LjUtMTYwLjUgNjYuNS02Ni41IDE2MC41IDY2LjUgMTYwLjUgMTYwLjUgNjYuNSAxNjAuNS02Ni41IDY2LjUtMTYwLjV6bTkyNSA1MDl2LTY0cTAtMTQtOS0yM3QtMjMtOWgtNTc2cS0xNCAwLTIzIDl0LTkgMjN2NjRxMCAxNCA5IDIzdDIzIDloNTc2cTE0IDAgMjMtOXQ5LTIzem0wLTI2MHYtNTZxMC0xNS0xMC41LTI1LjV0LTI1LjUtMTAuNWgtNTY4cS0xNSAwLTI1LjUgMTAuNXQtMTAuNSAyNS41djU2cTAgMTUgMTAuNSAyNS41dDI1LjUgMTAuNWg1NjhxMTUgMCAyNS41LTEwLjV0MTAuNS0yNS41em0wLTI1MnYtNjRxMC0xNC05LTIzdC0yMy05aC01NzZxLTE0IDAtMjMgOXQtOSAyM3Y2NHEwIDE0IDkgMjN0MjMgOWg1NzZxMTQgMCAyMy05dDktMjN6bTI1Ni0zMjB2MTIxNnEwIDY2LTQ3IDExM3QtMTEzIDQ3aC0zNTJ2LTk2cTAtMTQtOS0yM3QtMjMtOWgtNjRxLTE0IDAtMjMgOXQtOSAyM3Y5NmgtNzY4di05NnEwLTE0LTktMjN0LTIzLTloLTY0cS0xNCAwLTIzIDl0LTkgMjN2OTZoLTM1MnEtNjYgMC0xMTMtNDd0LTQ3LTExM3YtMTIxNnEwLTY2IDQ3LTExM3QxMTMtNDdoMTcyOHE2NiAwIDExMyA0N3Q0NyAxMTN6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm14LTQgdGV4dC1zbSBmb250LW5vcm1hbFwiPlJlcG9ydHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZm9udC10aGluIHVwcGVyY2FzZSB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTIwMCBmbGV4IGl0ZW1zLWNlbnRlciBwLTQgbXktMiB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAganVzdGlmeS1zdGFydCBob3Zlcjp0ZXh0LWJsdWUtNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNSB3LTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEwODggMTI1NnYyNDBxMCAxNi0xMiAyOHQtMjggMTJoLTI0MHEtMTYgMC0yOC0xMnQtMTItMjh2LTI0MHEwLTE2IDEyLTI4dDI4LTEyaDI0MHExNiAwIDI4IDEydDEyIDI4em0zMTYtNjAwcTAgNTQtMTUuNSAxMDF0LTM1IDc2LjUtNTUgNTkuNS01Ny41IDQzLjUtNjEgMzUuNXEtNDEgMjMtNjguNSA2NXQtMjcuNSA2N3EwIDE3LTEyIDMyLjV0LTI4IDE1LjVoLTI0MHEtMTUgMC0yNS41LTE4LjV0LTEwLjUtMzcuNXYtNDVxMC04MyA2NS0xNTYuNXQxNDMtMTA4LjVxNTktMjcgODQtNTZ0MjUtNzZxMC00Mi00Ni41LTc0dC0xMDcuNS0zMnEtNjUgMC0xMDggMjktMzUgMjUtMTA3IDExNS0xMyAxNi0zMSAxNi0xMiAwLTI1LThsLTE2NC0xMjVxLTEzLTEwLTE1LjUtMjV0NS41LTI4cTE2MC0yNjYgNDY0LTI2NiA4MCAwIDE2MSAzMXQxNDYgODMgMTA2IDEyNy41IDQxIDE1OC41elwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJteC00IHRleHQtc20gZm9udC1ub3JtYWxcIj5TZXR0aW5nczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsIHBsLTAgbWQ6cC00IG1kOnNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInctZnVsbCBzaGFkb3ctbGcgYmctd2hpdGUgZGFyazpiZy1ncmF5LTcwMCBpdGVtcy1jZW50ZXIgaC0xNiByb3VuZGVkLTJ4bCB6LTQwXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTIwIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaC1mdWxsIHB4LTMgbXgtYXV0byBmbGV4LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBpdGVtcy1jZW50ZXIgcGwtMSBmbGV4IHctZnVsbCBsZzptYXgtdy02OCBzbTpwci0yIHNtOm1sLTBcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcmVsYXRpdmUgbGVmdC0wIHotNTAgZmxleCB3LTMvNCBoLWF1dG8gaC1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciB3LWZ1bGwgbGc6dy02NCBoLWZ1bGwgZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgei01MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBibG9jayB3LWF1dG8gaC0xMCBwLTMgcHItMiB0ZXh0LXNtIHRleHQtZ3JheS01MDAgdXBwZXJjYXNlIGN1cnNvci1wb2ludGVyIHNtOmhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHctNSBoLTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMCAxNGwyLTJtMCAwbDItMm0tMiAybC0yLTJtMiAybDIgMm03LTJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTAgei0yMCBoaWRkZW4gdy00IGgtNCBtbC00IHRleHQtZ3JheS01MDAgcG9pbnRlci1ldmVudHMtbm9uZSBmaWxsLWN1cnJlbnQgZ3JvdXAtaG92ZXI6dGV4dC1ncmF5LTQwMCBzbTpibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMi45IDE0LjMyYTggOCAwIDEgMSAxLjQxLTEuNDFsNS4zNSA1LjMzLTEuNDIgMS40Mi01LjMzLTUuMzR6TTggMTRBNiA2IDAgMSAwIDggMmE2IDYgMCAwIDAgMCAxMnpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCBweS0xLjUgcGwtMTAgcHItNCBsZWFkaW5nLW5vcm1hbCByb3VuZGVkLTJ4bCBmb2N1czpib3JkZXItdHJhbnNwYXJlbnQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWJsdWUtNTAwIHJpbmctb3BhY2l0eS05MCBiZy1ncmF5LTEwMCBkYXJrOmJnLWdyYXktODAwIHRleHQtZ3JheS00MDAgYWEtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0wIGhpZGRlbiBoLWF1dG8gcHgtMiBweS0xIG1yLTIgdGV4dC14cyB0ZXh0LWdyYXktNDAwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC0yeGwgbWQ6YmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHAtMSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCB3LTEvNCBtbC01IG1yLTQgc206bXItMCBzbTpyaWdodC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJibG9jayByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJwcm9maWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3BlcnNvbi8xLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LWF1dG8gb2JqZWN0LWNvdmVyIHJvdW5kZWQtZnVsbCBoLTEwIHctMTAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1hdXRvIGgtc2NyZWVuIHBiLTI0IHB0LTIgcHItMiBwbC0yIG1kOnB0LTAgbWQ6cHItMCBtZDpwbC0wXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGZsZXgtd3JhcCBzbTpmbGV4LXJvdyBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHNtOnctMS8yIHhsOnctMS8zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LWxnIHJvdW5kZWQtMnhsIHAtNCBiZy13aGl0ZSBkYXJrOmJnLWdyYXktNzAwIHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicm91bmRlZC14bCByZWxhdGl2ZSBwLTIgYmctYmx1ZS0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNTYgMjYyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0yNTUuODc4IDEzMy40NTFjMC0xMC43MzQtLjg3MS0xOC41NjctMi43NTYtMjYuNjlIMTMwLjU1djQ4LjQ0OGg3MS45NDdjLTEuNDUgMTIuMDQtOS4yODMgMzAuMTcyLTI2LjY5IDQyLjM1NmwtLjI0NCAxLjYyMiAzOC43NTUgMzAuMDIzIDIuNjg1LjI2OGMyNC42NTktMjIuNzc0IDM4Ljg3NS01Ni4yODIgMzguODc1LTk2LjAyN1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiM0Mjg1RjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTMwLjU1IDI2MS4xYzM1LjI0OCAwIDY0LjgzOS0xMS42MDUgODYuNDUzLTMxLjYyMmwtNDEuMTk2LTMxLjkxM2MtMTEuMDI0IDcuNjg4LTI1LjgyIDEzLjA1NS00NS4yNTcgMTMuMDU1LTM0LjUyMyAwLTYzLjgyNC0yMi43NzMtNzQuMjY5LTU0LjI1bC0xLjUzMS4xMy00MC4yOTggMzEuMTg3LS41MjcgMS40NjVDMzUuMzkzIDIzMS43OTggNzkuNDkgMjYxLjEgMTMwLjU1IDI2MS4xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzM0QTg1M1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk01Ni4yODEgMTU2LjM3Yy0yLjc1Ni04LjEyMy00LjM1MS0xNi44MjctNC4zNTEtMjUuODIgMC04Ljk5NCAxLjU5NS0xNy42OTcgNC4yMDYtMjUuODJsLS4wNzMtMS43M0wxNS4yNiA3MS4zMTJsLTEuMzM1LjYzNUM1LjA3NyA4OS42NDQgMCAxMDkuNTE3IDAgMTMwLjU1czUuMDc3IDQwLjkwNSAxMy45MjUgNTguNjAybDQyLjM1Ni0zMi43ODJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRkJCQzA1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEzMC41NSA1MC40NzljMjQuNTE0IDAgNDEuMDUgMTAuNTg5IDUwLjQ3OSAxOS40MzhsMzYuODQ0LTM1Ljk3NEMxOTUuMjQ1IDEyLjkxIDE2NS43OTggMCAxMzAuNTUgMCA3OS40OSAwIDM1LjM5MyAyOS4zMDEgMTMuOTI1IDcxLjk0N2w0Mi4yMTEgMzIuNzgzYzEwLjU5LTMxLjQ3NyAzOS44OTEtNTQuMjUxIDc0LjQxNC01NC4yNTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRUI0MzM1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LW1kIHRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlIG1sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR29vZ2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LXdoaXRlIG1sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR29vZ2xlIEluYy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlciBwLTEgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQtZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LXllbGxvdy01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE3MjggNjQ3cTAgMjItMjYgNDhsLTM2MyAzNTQgODYgNTAwcTEgNyAxIDIwIDAgMjEtMTAuNSAzNS41dC0zMC41IDE0LjVxLTE5IDAtNDAtMTJsLTQ0OS0yMzYtNDQ5IDIzNnEtMjIgMTItNDAgMTItMjEgMC0zMS41LTE0LjV0LTEwLjUtMzUuNXEwLTYgMi0yMGw4Ni01MDAtMzY0LTM1NHEtMjUtMjctMjUtNDggMC0zNyA1Ni00Nmw1MDItNzMgMjI1LTQ1NXExOS00MSA0OS00MXQ0OSA0MWwyMjUgNDU1IDUwMiA3M3E1NiA5IDU2IDQ2elwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTIwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMDg4IDEyNDh2MTkycTAgNDAtMjggNjh0LTY4IDI4aC0xOTJxLTQwIDAtNjgtMjh0LTI4LTY4di0xOTJxMC00MCAyOC02OHQ2OC0yOGgxOTJxNDAgMCA2OCAyOHQyOCA2OHptMC01MTJ2MTkycTAgNDAtMjggNjh0LTY4IDI4aC0xOTJxLTQwIDAtNjgtMjh0LTI4LTY4di0xOTJxMC00MCAyOC02OHQ2OC0yOGgxOTJxNDAgMCA2OCAyOHQyOCA2OHptMC01MTJ2MTkycTAgNDAtMjggNjh0LTY4IDI4aC0xOTJxLTQwIDAtNjgtMjh0LTI4LTY4di0xOTJxMC00MCAyOC02OHQ2OC0yOGgxOTJxNDAgMCA2OCAyOHQyOCA2OHpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCAtc3BhY2UteC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIGgtMTAgdy0xMCByb3VuZGVkLWZ1bGwgb2JqZWN0LWNvdmVyIHJpbmctMiByaW5nLXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvcGVyc29uLzMuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkNoYXJsZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3ctbGcgcm91bmRlZC0yeGwgcC00IGJnLXdoaXRlIGRhcms6YmctZ3JheS03MDAgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIHJlbGF0aXZlIHAtMiBiZy1ibHVlLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0NDcuNiAyNDUyLjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm04OTcuNCAwYy0xMzUuMy4xLTI0NC44IDEwOS45LTI0NC43IDI0NS4yLS4xIDEzNS4zIDEwOS41IDI0NS4xIDI0NC44IDI0NS4yaDI0NC44di0yNDUuMWMuMS0xMzUuMy0xMDkuNS0yNDUuMS0yNDQuOS0yNDUuMy4xIDAgLjEgMCAwIDBtMCA2NTRoLTY1Mi42Yy0xMzUuMy4xLTI0NC45IDEwOS45LTI0NC44IDI0NS4yLS4yIDEzNS4zIDEwOS40IDI0NS4xIDI0NC43IDI0NS4zaDY1Mi43YzEzNS4zLS4xIDI0NC45LTEwOS45IDI0NC44LTI0NS4yLjEtMTM1LjQtMTA5LjUtMjQ1LjItMjQ0LjgtMjQ1LjN6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjMzZjNWYwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibTI0NDcuNiA4OTkuMmMuMS0xMzUuMy0xMDkuNS0yNDUuMS0yNDQuOC0yNDUuMi0xMzUuMy4xLTI0NC45IDEwOS45LTI0NC44IDI0NS4ydjI0NS4zaDI0NC44YzEzNS4zLS4xIDI0NC45LTEwOS45IDI0NC44LTI0NS4zem0tNjUyLjcgMHYtNjU0Yy4xLTEzNS4yLTEwOS40LTI0NS0yNDQuNy0yNDUuMi0xMzUuMy4xLTI0NC45IDEwOS45LTI0NC44IDI0NS4ydjY1NGMtLjIgMTM1LjMgMTA5LjQgMjQ1LjEgMjQ0LjcgMjQ1LjMgMTM1LjMtLjEgMjQ0LjktMTA5LjkgMjQ0LjgtMjQ1LjN6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjMmViNjdkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibTE1NTAuMSAyNDUyLjVjMTM1LjMtLjEgMjQ0LjktMTA5LjkgMjQ0LjgtMjQ1LjIuMS0xMzUuMy0xMDkuNS0yNDUuMS0yNDQuOC0yNDUuMmgtMjQ0Ljh2MjQ1LjJjLS4xIDEzNS4yIDEwOS41IDI0NSAyNDQuOCAyNDUuMnptMC02NTQuMWg2NTIuN2MxMzUuMy0uMSAyNDQuOS0xMDkuOSAyNDQuOC0yNDUuMi4yLTEzNS4zLTEwOS40LTI0NS4xLTI0NC43LTI0NS4zaC02NTIuN2MtMTM1LjMuMS0yNDQuOSAxMDkuOS0yNDQuOCAyNDUuMi0uMSAxMzUuNCAxMDkuNCAyNDUuMiAyNDQuNyAyNDUuM3pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNlY2IyMmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtMCAxNTUzLjJjLS4xIDEzNS4zIDEwOS41IDI0NS4xIDI0NC44IDI0NS4yIDEzNS4zLS4xIDI0NC45LTEwOS45IDI0NC44LTI0NS4ydi0yNDUuMmgtMjQ0LjhjLTEzNS4zLjEtMjQ0LjkgMTA5LjktMjQ0LjggMjQ1LjJ6bTY1Mi43IDB2NjU0Yy0uMiAxMzUuMyAxMDkuNCAyNDUuMSAyNDQuNyAyNDUuMyAxMzUuMy0uMSAyNDQuOS0xMDkuOSAyNDQuOC0yNDUuMnYtNjUzLjljLjItMTM1LjMtMTA5LjQtMjQ1LjEtMjQ0LjctMjQ1LjMtMTM1LjQgMC0yNDQuOSAxMDkuOC0yNDQuOCAyNDUuMSAwIDAgMCAuMSAwIDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNlMDFlNWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LW1kIHRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlIG1sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2xhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtd2hpdGUgbWwtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTbGFjayBjb3Jwb3JhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYm9yZGVyIHAtMSBib3JkZXItZ3JheS0yMDAgcm91bmRlZC1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQteWVsbG93LTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTcyOCA2NDdxMCAyMi0yNiA0OGwtMzYzIDM1NCA4NiA1MDBxMSA3IDEgMjAgMCAyMS0xMC41IDM1LjV0LTMwLjUgMTQuNXEtMTkgMC00MC0xMmwtNDQ5LTIzNi00NDkgMjM2cS0yMiAxMi00MCAxMi0yMSAwLTMxLjUtMTQuNXQtMTAuNS0zNS41cTAtNiAyLTIwbDg2LTUwMC0zNjQtMzU0cS0yNS0yNy0yNS00OCAwLTM3IDU2LTQ2bDUwMi03MyAyMjUtNDU1cTE5LTQxIDQ5LTQxdDQ5IDQxbDIyNSA0NTUgNTAyIDczcTU2IDkgNTYgNDZ6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEwODggMTI0OHYxOTJxMCA0MC0yOCA2OHQtNjggMjhoLTE5MnEtNDAgMC02OC0yOHQtMjgtNjh2LTE5MnEwLTQwIDI4LTY4dDY4LTI4aDE5MnE0MCAwIDY4IDI4dDI4IDY4em0wLTUxMnYxOTJxMCA0MC0yOCA2OHQtNjggMjhoLTE5MnEtNDAgMC02OC0yOHQtMjgtNjh2LTE5MnEwLTQwIDI4LTY4dDY4LTI4aDE5MnE0MCAwIDY4IDI4dDI4IDY4em0wLTUxMnYxOTJxMCA0MC0yOCA2OHQtNjggMjhoLTE5MnEtNDAgMC02OC0yOHQtMjgtNjh2LTE5MnEwLTQwIDI4LTY4dDY4LTI4aDE5MnE0MCAwIDY4IDI4dDI4IDY4elwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItNCBzcGFjZS14LTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB4LTIgcHktMSBmbGV4IGl0ZW1zLWNlbnRlciBmb250LXNlbWlib2xkIHRleHQteHMgcm91bmRlZC1tZCB0ZXh0LWdyZWVuLTcwMCBiZy1ncmVlbi01MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIENPTVBMRVRFRFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB4LTIgcHktMSBmbGV4IGl0ZW1zLWNlbnRlciBmb250LXNlbWlib2xkIHRleHQteHMgcm91bmRlZC1tZCB0ZXh0LWdyZWVuLTYwMCBib3JkZXIgYm9yZGVyLWdyZWVuLTYwMCBiZy13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIE1FRElVTSBQUklPUklUWVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgbS1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBpbmxpbmUtYmxvY2sgdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRhc2sgZG9uZSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwIGRhcms6dGV4dC13aGl0ZSBmb250LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC81MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtMiBiZy1ncmF5LTIwMCByb3VuZGVkLWZ1bGwgbXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCB0ZXh0LWNlbnRlciB0ZXh0LXhzIHRleHQtd2hpdGUgYmctcGluay00MDAgcm91bmRlZC1mdWxsXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgbXktNCBzcGFjZS14LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHgtMiBweS0xIGZsZXggaXRlbXMtY2VudGVyIHRleHQteHMgcm91bmRlZC1tZCBmb250LXNlbWlib2xkIHRleHQtZ3JlZW4tNTAwIGJnLWdyZWVuLTUwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgSU9TIEFQUFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB4LTIgcHktMSBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXhzIHJvdW5kZWQtbWQgdGV4dC15ZWxsb3ctNjAwIGZvbnQtc2VtaWJvbGQgYmcteWVsbG93LTIwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEFORFJPSURcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggLXNwYWNlLXgtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBoLTEwIHctMTAgcm91bmRlZC1mdWxsIG9iamVjdC1jb3ZlciByaW5nLTIgcmluZy13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3BlcnNvbi8xLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJHdXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgaC0xMCB3LTEwIHJvdW5kZWQtZnVsbCBvYmplY3QtY292ZXIgcmluZy0yIHJpbmctd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9wZXJzb24vMi5qcGVnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIk1heFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBoLTEwIHctMTAgcm91bmRlZC1mdWxsIG9iamVjdC1jb3ZlciByaW5nLTIgcmluZy13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3BlcnNvbi8zLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJDaGFybGVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIGgtMTAgdy0xMCByb3VuZGVkLWZ1bGwgb2JqZWN0LWNvdmVyIHJpbmctMiByaW5nLXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvcGVyc29uLzQuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkphZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHgtMiBweS0xIGZsZXggdy0zNiBtdC00IGl0ZW1zLWNlbnRlciB0ZXh0LXhzIHJvdW5kZWQtbWQgZm9udC1zZW1pYm9sZCB0ZXh0LXllbGxvdy01MDAgYmcteWVsbG93LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEVUUgREFURSA6IDE4IEpVTlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy0xLzIgeGw6dy0xLzNcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00IG14LTAgc206bWwtNCB4bDptci00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3ctbGcgcm91bmRlZC0yeGwgYmctd2hpdGUgZGFyazpiZy1ncmF5LTcwMCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LW1kIHAtNCB0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNeSBUYXNrc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktMzAwIGRhcms6dGV4dC13aGl0ZSBtbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKDA1KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTIwMCBqdXN0aWZ5LWJldHdlZW4gcHktMyBib3JkZXItYi0yIGJvcmRlci1ncmF5LTEwMCBkYXJrOmJvcmRlci1ncmF5LTgwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJteC00XCI+MDE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5DcmVhdGUgd2lyZWZyYW1lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC00IHRleHQtZ3JheS00MDAgZGFyazp0ZXh0LWdyYXktMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTY5OSAzNTNoLTQ2LjljLTEwLjIgMC0xOS45IDQuOS0yNS45IDEzLjNMNDY5IDU4NC4zbC03MS4yLTk4LjhjLTYtOC4zLTE1LjYtMTMuMy0yNS45LTEzLjNIMzI1Yy02LjUgMC0xMC4zIDcuNC02LjUgMTIuN2wxMjQuNiAxNzIuOGEzMS44IDMxLjggMCAwIDAgNTEuNyAwbDIxMC42LTI5MmMzLjktNS4zLjEtMTIuNy02LjQtMTIuN3pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTUxMiA2NEMyNjQuNiA2NCA2NCAyNjQuNiA2NCA1MTJzMjAwLjYgNDQ4IDQ0OCA0NDhzNDQ4LTIwMC42IDQ0OC00NDhTNzU5LjQgNjQgNTEyIDY0em0wIDgyMGMtMjA1LjQgMC0zNzItMTY2LjYtMzcyLTM3MnMxNjYuNi0zNzIgMzcyLTM3MnMzNzIgMTY2LjYgMzcyIDM3MnMtMTY2LjYgMzcyLTM3MiAzNzJ6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS0yMDAganVzdGlmeS1iZXR3ZWVuIHB5LTMgYm9yZGVyLWItMiBib3JkZXItZ3JheS0xMDAgZGFyazpib3JkZXItZ3JheS04MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXgtNFwiPjAyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RGFzaGJvYXJkIGRlc2lnbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxnOm1sLTYgbWwtMiBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktNDAwIGRhcms6dGV4dC1ncmF5LTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA1MTIgNTEyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTI1NiAzMkMxMTQuNiAzMiAwIDEyNS4xIDAgMjQwYzAgNDcuNiAxOS45IDkxLjIgNTIuOSAxMjYuM0MzOCA0MDUuNyA3IDQzOS4xIDYuNSA0MzkuNWMtNi42IDctOC40IDE3LjItNC42IDI2UzE0LjQgNDgwIDI0IDQ4MGM2MS41IDAgMTEwLTI1LjcgMTM5LjEtNDYuM0MxOTIgNDQyLjggMjIzLjIgNDQ4IDI1NiA0NDhjMTQxLjQgMCAyNTYtOTMuMSAyNTYtMjA4UzM5Ny40IDMyIDI1NiAzMnptMCAzNjhjLTI2LjcgMC01My4xLTQuMS03OC40LTEyLjFsLTIyLjctNy4ybC0xOS41IDEzLjhjLTE0LjMgMTAuMS0zMy45IDIxLjQtNTcuNSAyOWM3LjMtMTIuMSAxNC40LTI1LjcgMTkuOS00MC4ybDEwLjYtMjguMWwtMjAuNi0yMS44QzY5LjcgMzE0LjEgNDggMjgyLjIgNDggMjQwYzAtODguMiA5My4zLTE2MCAyMDgtMTYwczIwOCA3MS44IDIwOCAxNjBzLTkzLjMgMTYwLTIwOCAxNjB6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXgtNCBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktNDAwIGRhcms6dGV4dC1ncmF5LTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAzODQgNTEyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTM4NCAxNDRjMC00NC4yLTM1LjgtODAtODAtODBzLTgwIDM1LjgtODAgODBjMCAzNi40IDI0LjMgNjcuMSA1Ny41IDc2LjhjLS42IDE2LjEtNC4yIDI4LjUtMTEgMzYuOWMtMTUuNCAxOS4yLTQ5LjMgMjIuNC04NS4yIDI1LjdjLTI4LjIgMi42LTU3LjQgNS40LTgxLjMgMTYuOXYtMTQ0YzMyLjUtMTAuMiA1Ni00MC41IDU2LTc2LjNjMC00NC4yLTM1LjgtODAtODAtODBTMCAzNS44IDAgODBjMCAzNS44IDIzLjUgNjYuMSA1NiA3Ni4zdjE5OS4zQzIzLjUgMzY1LjkgMCAzOTYuMiAwIDQzMmMwIDQ0LjIgMzUuOCA4MCA4MCA4MHM4MC0zNS44IDgwLTgwYzAtMzQtMjEuMi02My4xLTUxLjItNzQuNmMzLjEtNS4yIDcuOC05LjggMTQuOS0xMy40YzE2LjItOC4yIDQwLjQtMTAuNCA2Ni4xLTEyLjhjNDIuMi0zLjkgOTAtOC40IDExOC4yLTQzLjRjMTQtMTcuNCAyMS4xLTM5LjggMjEuNi02Ny45YzMxLjYtMTAuOCA1NC40LTQwLjcgNTQuNC03NS45ek04MCA2NGM4LjggMCAxNiA3LjIgMTYgMTZzLTcuMiAxNi0xNiAxNnMtMTYtNy4yLTE2LTE2czcuMi0xNiAxNi0xNnptMCAzODRjLTguOCAwLTE2LTcuMi0xNi0xNnM3LjItMTYgMTYtMTZzMTYgNy4yIDE2IDE2cy03LjIgMTYtMTYgMTZ6bTIyNC0zMjBjOC44IDAgMTYgNy4yIDE2IDE2cy03LjIgMTYtMTYgMTZzLTE2LTcuMi0xNi0xNnM3LjItMTYgMTYtMTZ6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC00IHRleHQtZ3JheS00MDAgZGFyazp0ZXh0LWdyYXktMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTY5OSAzNTNoLTQ2LjljLTEwLjIgMC0xOS45IDQuOS0yNS45IDEzLjNMNDY5IDU4NC4zbC03MS4yLTk4LjhjLTYtOC4zLTE1LjYtMTMuMy0yNS45LTEzLjNIMzI1Yy02LjUgMC0xMC4zIDcuNC02LjUgMTIuN2wxMjQuNiAxNzIuOGEzMS44IDMxLjggMCAwIDAgNTEuNyAwbDIxMC42LTI5MmMzLjktNS4zLjEtMTIuNy02LjQtMTIuN3pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTUxMiA2NEMyNjQuNiA2NCA2NCAyNjQuNiA2NCA1MTJzMjAwLjYgNDQ4IDQ0OCA0NDhzNDQ4LTIwMC42IDQ0OC00NDhTNzU5LjQgNjQgNTEyIDY0em0wIDgyMGMtMjA1LjQgMC0zNzItMTY2LjYtMzcyLTM3MnMxNjYuNi0zNzIgMzcyLTM3MnMzNzIgMTY2LjYgMzcyIDM3MnMtMTY2LjYgMzcyLTM3MiAzNzJ6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS0yMDAganVzdGlmeS1iZXR3ZWVuIHB5LTMgYm9yZGVyLWItMiBib3JkZXItZ3JheS0xMDAgZGFyazpib3JkZXItZ3JheS04MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXgtNFwiPjAzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q29tcG9uZW50cyBjYXJkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGc6bWwtNiBtbC0yIGZsZXggaXRlbXMtY2VudGVyIHRleHQtZ3JheS00MDAgZGFyazp0ZXh0LWdyYXktMzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMjU2IDMyQzExNC42IDMyIDAgMTI1LjEgMCAyNDBjMCA0Ny42IDE5LjkgOTEuMiA1Mi45IDEyNi4zQzM4IDQwNS43IDcgNDM5LjEgNi41IDQzOS41Yy02LjYgNy04LjQgMTcuMi00LjYgMjZTMTQuNCA0ODAgMjQgNDgwYzYxLjUgMCAxMTAtMjUuNyAxMzkuMS00Ni4zQzE5MiA0NDIuOCAyMjMuMiA0NDggMjU2IDQ0OGMxNDEuNCAwIDI1Ni05My4xIDI1Ni0yMDhTMzk3LjQgMzIgMjU2IDMyem0wIDM2OGMtMjYuNyAwLTUzLjEtNC4xLTc4LjQtMTIuMWwtMjIuNy03LjJsLTE5LjUgMTMuOGMtMTQuMyAxMC4xLTMzLjkgMjEuNC01Ny41IDI5YzcuMy0xMi4xIDE0LjQtMjUuNyAxOS45LTQwLjJsMTAuNi0yOC4xbC0yMC42LTIxLjhDNjkuNyAzMTQuMSA0OCAyODIuMiA0OCAyNDBjMC04OC4yIDkzLjMtMTYwIDIwOC0xNjBzMjA4IDcxLjggMjA4IDE2MHMtOTMuMyAxNjAtMjA4IDE2MHpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LTQgdGV4dC1ncmF5LTQwMCBkYXJrOnRleHQtZ3JheS0zMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNjk5IDM1M2gtNDYuOWMtMTAuMiAwLTE5LjkgNC45LTI1LjkgMTMuM0w0NjkgNTg0LjNsLTcxLjItOTguOGMtNi04LjMtMTUuNi0xMy4zLTI1LjktMTMuM0gzMjVjLTYuNSAwLTEwLjMgNy40LTYuNSAxMi43bDEyNC42IDE3Mi44YTMxLjggMzEuOCAwIDAgMCA1MS43IDBsMjEwLjYtMjkyYzMuOS01LjMuMS0xMi43LTYuNC0xMi43elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNTEyIDY0QzI2NC42IDY0IDY0IDI2NC42IDY0IDUxMnMyMDAuNiA0NDggNDQ4IDQ0OHM0NDgtMjAwLjYgNDQ4LTQ0OFM3NTkuNCA2NCA1MTIgNjR6bTAgODIwYy0yMDUuNCAwLTM3Mi0xNjYuNi0zNzItMzcyczE2Ni42LTM3MiAzNzItMzcyczM3MiAxNjYuNiAzNzIgMzcycy0xNjYuNiAzNzItMzcyIDM3MnpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktNDAwIGp1c3RpZnktYmV0d2VlbiBweS0zIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMTAwIGRhcms6Ym9yZGVyLWdyYXktODAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0IHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm14LTRcIj4wNDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpbmUtdGhyb3VnaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHb29nbGUgbG9nbyBkZXNpZ25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmVlbi01MDAgbXgtNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk01MTIgNjRDMjY0LjYgNjQgNjQgMjY0LjYgNjQgNTEyczIwMC42IDQ0OCA0NDggNDQ4czQ0OC0yMDAuNiA0NDgtNDQ4Uzc1OS40IDY0IDUxMiA2NHptMTkzLjUgMzAxLjdsLTIxMC42IDI5MmEzMS44IDMxLjggMCAwIDEtNTEuNyAwTDMxOC41IDQ4NC45Yy0zLjgtNS4zIDAtMTIuNyA2LjUtMTIuN2g0Ni45YzEwLjIgMCAxOS45IDQuOSAyNS45IDEzLjNsNzEuMiA5OC44bDE1Ny4yLTIxOGM2LTguMyAxNS42LTEzLjMgMjUuOS0xMy4zSDY5OWM2LjUgMCAxMC4zIDcuNCA2LjUgMTIuN3pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktNDAwICBqdXN0aWZ5LWJldHdlZW4gcHktMyBib3JkZXItYi0yIGJvcmRlci1ncmF5LTEwMCBkYXJrOmJvcmRlci1ncmF5LTgwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJteC00XCI+MDU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaW5lLXRocm91Z2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVhZGVyIG5hdmlnYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmVlbi01MDAgbXgtNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk01MTIgNjRDMjY0LjYgNjQgNjQgMjY0LjYgNjQgNTEyczIwMC42IDQ0OCA0NDggNDQ4czQ0OC0yMDAuNiA0NDgtNDQ4Uzc1OS40IDY0IDUxMiA2NHptMTkzLjUgMzAxLjdsLTIxMC42IDI5MmEzMS44IDMxLjggMCAwIDEtNTEuNyAwTDMxOC41IDQ4NC45Yy0zLjgtNS4zIDAtMTIuNyA2LjUtMTIuN2g0Ni45YzEwLjIgMCAxOS45IDQuOSAyNS45IDEzLjNsNzEuMiA5OC44bDE1Ny4yLTIxOGM2LTguMyAxNS42LTEzLjMgMjUuOS0xMy4zSDY5OWM2LjUgMCAxMC4zIDcuNCA2LjUgMTIuN3pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTIwMCBqdXN0aWZ5LWJldHdlZW4gcHktMyBib3JkZXItYi0yIGJvcmRlci1ncmF5LTEwMCBkYXJrOmJvcmRlci1ncmF5LTgwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJteC00XCI+MDY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5JbnRlcm5hdGlvbmFsPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGc6bWwtNiBtbC0yIGZsZXggaXRlbXMtY2VudGVyIHRleHQtZ3JheS00MDAgZGFyazp0ZXh0LWdyYXktMzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMjU2IDMyQzExNC42IDMyIDAgMTI1LjEgMCAyNDBjMCA0Ny42IDE5LjkgOTEuMiA1Mi45IDEyNi4zQzM4IDQwNS43IDcgNDM5LjEgNi41IDQzOS41Yy02LjYgNy04LjQgMTcuMi00LjYgMjZTMTQuNCA0ODAgMjQgNDgwYzYxLjUgMCAxMTAtMjUuNyAxMzkuMS00Ni4zQzE5MiA0NDIuOCAyMjMuMiA0NDggMjU2IDQ0OGMxNDEuNCAwIDI1Ni05My4xIDI1Ni0yMDhTMzk3LjQgMzIgMjU2IDMyem0wIDM2OGMtMjYuNyAwLTUzLjEtNC4xLTc4LjQtMTIuMWwtMjIuNy03LjJsLTE5LjUgMTMuOGMtMTQuMyAxMC4xLTMzLjkgMjEuNC01Ny41IDI5YzcuMy0xMi4xIDE0LjQtMjUuNyAxOS45LTQwLjJsMTAuNi0yOC4xbC0yMC42LTIxLjhDNjkuNyAzMTQuMSA0OCAyODIuMiA0OCAyNDBjMC04OC4yIDkzLjMtMTYwIDIwOC0xNjBzMjA4IDcxLjggMjA4IDE2MHMtOTMuMyAxNjAtMjA4IDE2MHpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJteC00IGZsZXggaXRlbXMtY2VudGVyIHRleHQtZ3JheS00MDAgZGFyazp0ZXh0LWdyYXktMzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDM4NCA1MTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMzg0IDE0NGMwLTQ0LjItMzUuOC04MC04MC04MHMtODAgMzUuOC04MCA4MGMwIDM2LjQgMjQuMyA2Ny4xIDU3LjUgNzYuOGMtLjYgMTYuMS00LjIgMjguNS0xMSAzNi45Yy0xNS40IDE5LjItNDkuMyAyMi40LTg1LjIgMjUuN2MtMjguMiAyLjYtNTcuNCA1LjQtODEuMyAxNi45di0xNDRjMzIuNS0xMC4yIDU2LTQwLjUgNTYtNzYuM2MwLTQ0LjItMzUuOC04MC04MC04MFMwIDM1LjggMCA4MGMwIDM1LjggMjMuNSA2Ni4xIDU2IDc2LjN2MTk5LjNDMjMuNSAzNjUuOSAwIDM5Ni4yIDAgNDMyYzAgNDQuMiAzNS44IDgwIDgwIDgwczgwLTM1LjggODAtODBjMC0zNC0yMS4yLTYzLjEtNTEuMi03NC42YzMuMS01LjIgNy44LTkuOCAxNC45LTEzLjRjMTYuMi04LjIgNDAuNC0xMC40IDY2LjEtMTIuOGM0Mi4yLTMuOSA5MC04LjQgMTE4LjItNDMuNGMxNC0xNy40IDIxLjEtMzkuOCAyMS42LTY3LjljMzEuNi0xMC44IDU0LjQtNDAuNyA1NC40LTc1Ljl6TTgwIDY0YzguOCAwIDE2IDcuMiAxNiAxNnMtNy4yIDE2LTE2IDE2cy0xNi03LjItMTYtMTZzNy4yLTE2IDE2LTE2em0wIDM4NGMtOC44IDAtMTYtNy4yLTE2LTE2czcuMi0xNiAxNi0xNnMxNiA3LjIgMTYgMTZzLTcuMiAxNi0xNiAxNnptMjI0LTMyMGM4LjggMCAxNiA3LjIgMTYgMTZzLTcuMiAxNi0xNiAxNnMtMTYtNy4yLTE2LTE2czcuMi0xNiAxNi0xNnpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LTQgdGV4dC1ncmF5LTQwMCBkYXJrOnRleHQtZ3JheS0zMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNjk5IDM1M2gtNDYuOWMtMTAuMiAwLTE5LjkgNC45LTI1LjkgMTMuM0w0NjkgNTg0LjNsLTcxLjItOTguOGMtNi04LjMtMTUuNi0xMy4zLTI1LjktMTMuM0gzMjVjLTYuNSAwLTEwLjMgNy40LTYuNSAxMi43bDEyNC42IDE3Mi44YTMxLjggMzEuOCAwIDAgMCA1MS43IDBsMjEwLjYtMjkyYzMuOS01LjMuMS0xMi43LTYuNC0xMi43elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNTEyIDY0QzI2NC42IDY0IDY0IDI2NC42IDY0IDUxMnMyMDAuNiA0NDggNDQ4IDQ0OHM0NDgtMjAwLjYgNDQ4LTQ0OFM3NTkuNCA2NCA1MTIgNjR6bTAgODIwYy0yMDUuNCAwLTM3Mi0xNjYuNi0zNzItMzcyczE2Ni42LTM3MiAzNzItMzcyczM3MiAxNjYuNiAzNzIgMzcycy0xNjYuNiAzNzItMzcyIDM3MnpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTIwMCBqdXN0aWZ5LWJldHdlZW4gcHktM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJteC00XCI+MDc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Qcm9kdWN0aW9uIGRhdGE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LTQgdGV4dC1ncmF5LTQwMCBkYXJrOnRleHQtZ3JheS0zMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNjk5IDM1M2gtNDYuOWMtMTAuMiAwLTE5LjkgNC45LTI1LjkgMTMuM0w0NjkgNTg0LjNsLTcxLjItOTguOGMtNi04LjMtMTUuNi0xMy4zLTI1LjktMTMuM0gzMjVjLTYuNSAwLTEwLjMgNy40LTYuNSAxMi43bDEyNC42IDE3Mi44YTMxLjggMzEuOCAwIDAgMCA1MS43IDBsMjEwLjYtMjkyYzMuOS01LjMuMS0xMi43LTYuNC0xMi43elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNTEyIDY0QzI2NC42IDY0IDY0IDI2NC42IDY0IDUxMnMyMDAuNiA0NDggNDQ4IDQ0OHM0NDgtMjAwLjYgNDQ4LTQ0OFM3NTkuNCA2NCA1MTIgNjR6bTAgODIwYy0yMDUuNCAwLTM3Mi0xNjYuNi0zNzItMzcyczE2Ni42LTM3MiAzNzItMzcyczM3MiAxNjYuNiAzNzIgMzcycy0xNjYuNiAzNzItMzcyIDM3MnpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00IHNtOm1sLTQgeGw6bXItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LWxnIHJvdW5kZWQtMnhsIGJnLXdoaXRlIGRhcms6YmctZ3JheS03MDAgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHAtNCBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtbWQgdGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBHb29nbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtc20gcC0xIHRleHQtZ3JheS00MDAgYm9yZGVyIHJvdW5kZWQgYm9yZGVyLWdyYXktNDAwIG1yLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgZmlsbD1cIm5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTE3LjIyMiA4LjY4NWExLjUgMS41IDAgMCAxIDAgMi42MjhsLTEwIDUuNDk4QTEuNSAxLjUgMCAwIDEgNSAxNS40OTZWNC41MDJhMS41IDEuNSAwIDAgMSAyLjIyMy0xLjMxNGwxMCA1LjQ5N3pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yIHB4LTQgYmctYmx1ZS0xMDAgZGFyazpiZy1ncmF5LTgwMCB0ZXh0LWdyYXktNjAwIGJvcmRlci1sLTQgYm9yZGVyLWJsdWUtNTAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZsZXggaXRlbXMtY2VudGVyIGRhcms6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwIG1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgZmlsbD1cIm5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEyIDVhOC41IDguNSAwIDEgMSAwIDE3YTguNSA4LjUgMCAwIDEgMC0xN3ptMCAzYS43NS43NSAwIDAgMC0uNzQzLjY0OGwtLjAwNy4xMDJ2NC41bC4wMDcuMTAyYS43NS43NSAwIDAgMCAxLjQ4NiAwbC4wMDctLjEwMnYtNC41bC0uMDA3LS4xMDJBLjc1Ljc1IDAgMCAwIDEyIDh6bTcuMTctMi44NzdsLjA4Mi4wNjFsMS4xNDkgMWEuNzUuNzUgMCAwIDEtLjkwNCAxLjE5M2wtLjA4MS0uMDYxbC0xLjE0OS0xYS43NS43NSAwIDAgMSAuOTAzLTEuMTkzek0xNC4yNSAyLjVhLjc1Ljc1IDAgMCAxIC4xMDIgMS40OTNMMTQuMjUgNGgtNC41YS43NS43NSAwIDAgMS0uMTAyLTEuNDkzTDkuNzUgMi41aDQuNXpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSB3aXJlZnJhbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQteHMgZGFyazp0ZXh0LWdyYXktMjAwIG1yLTIgbWwtMiBtZDptbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyNSBtaW4gMjBzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC1zbSBwLTEgdGV4dC1ncmF5LTQwMCBib3JkZXIgcm91bmRlZCBiZy1ibHVlLTUwMCBtci00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxN1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGZpbGw9XCJub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNOSA2YTEgMSAwIDAgMSAxIDF2MTBhMSAxIDAgMSAxLTIgMFY3YTEgMSAwIDAgMSAxLTF6bTYgMGExIDEgMCAwIDEgMSAxdjEwYTEgMSAwIDEgMS0yIDBWN2ExIDEgMCAwIDEgMS0xelwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcC00IGp1c3RpZnktYmV0d2VlbiBib3JkZXItYi0yIGJvcmRlci1ncmF5LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1tZCB0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFNsYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHAtMSB0ZXh0LWdyYXktNDAwIGJvcmRlciByb3VuZGVkIGJvcmRlci1ncmF5LTQwMCBtci00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGZpbGw9XCJub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xNy4yMjIgOC42ODVhMS41IDEuNSAwIDAgMSAwIDIuNjI4bC0xMCA1LjQ5OEExLjUgMS41IDAgMCAxIDUgMTUuNDk2VjQuNTAyYTEuNSAxLjUgMCAwIDEgMi4yMjMtMS4zMTRsMTAgNS40OTd6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMiBweC00IHRleHQtZ3JheS02MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZmxleCBpdGVtcy1jZW50ZXIgZGFyazp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgZmlsbD1cIm5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEyIDVhOC41IDguNSAwIDEgMSAwIDE3YTguNSA4LjUgMCAwIDEgMC0xN3ptMCAzYS43NS43NSAwIDAgMC0uNzQzLjY0OGwtLjAwNy4xMDJ2NC41bC4wMDcuMTAyYS43NS43NSAwIDAgMCAxLjQ4NiAwbC4wMDctLjEwMnYtNC41bC0uMDA3LS4xMDJBLjc1Ljc1IDAgMCAwIDEyIDh6bTcuMTctMi44NzdsLjA4Mi4wNjFsMS4xNDkgMWEuNzUuNzUgMCAwIDEtLjkwNCAxLjE5M2wtLjA4MS0uMDYxbC0xLjE0OS0xYS43NS43NSAwIDAgMSAuOTAzLTEuMTkzek0xNC4yNSAyLjVhLjc1Ljc1IDAgMCAxIC4xMDIgMS40OTNMMTQuMjUgNGgtNC41YS43NS43NSAwIDAgMS0uMTAyLTEuNDkzTDkuNzUgMi41aDQuNXpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEludGVybmF0aW9uYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNDAwIG1yLTIgbWwtMiBtZDptbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAzMCBtaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHAtMSB0ZXh0LWdyYXktNDAwIGJvcmRlciByb3VuZGVkIGJvcmRlci1ncmF5LTQwMCBtci00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgZmlsbD1cIm5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xNy4yMjIgOC42ODVhMS41IDEuNSAwIDAgMSAwIDIuNjI4bC0xMCA1LjQ5OEExLjUgMS41IDAgMCAxIDUgMTUuNDk2VjQuNTAyYTEuNSAxLjUgMCAwIDEgMi4yMjMtMS4zMTRsMTAgNS40OTd6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yIHB4LTQgdGV4dC1ncmF5LTYwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyLWItMiBib3JkZXItZ3JheS0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmbGV4IGl0ZW1zLWNlbnRlciBkYXJrOnRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBmaWxsPVwibm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTIgNWE4LjUgOC41IDAgMSAxIDAgMTdhOC41IDguNSAwIDAgMSAwLTE3em0wIDNhLjc1Ljc1IDAgMCAwLS43NDMuNjQ4bC0uMDA3LjEwMnY0LjVsLjAwNy4xMDJhLjc1Ljc1IDAgMCAwIDEuNDg2IDBsLjAwNy0uMTAydi00LjVsLS4wMDctLjEwMkEuNzUuNzUgMCAwIDAgMTIgOHptNy4xNy0yLjg3N2wuMDgyLjA2MWwxLjE0OSAxYS43NS43NSAwIDAgMS0uOTA0IDEuMTkzbC0uMDgxLS4wNjFsLTEuMTQ5LTFhLjc1Ljc1IDAgMCAxIC45MDMtMS4xOTN6TTE0LjI1IDIuNWEuNzUuNzUgMCAwIDEgLjEwMiAxLjQ5M0wxNC4yNSA0aC00LjVhLjc1Ljc1IDAgMCAxLS4xMDItMS40OTNMOS43NSAyLjVoNC41elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgU2xhY2sgbG9nbyBkZXNpZ25cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNDAwIG1yLTIgbWwtMiBtZDptbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAzMCBtaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHAtMSB0ZXh0LWdyYXktNDAwIGJvcmRlciByb3VuZGVkIGJvcmRlci1ncmF5LTQwMCBtci00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgZmlsbD1cIm5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xNy4yMjIgOC42ODVhMS41IDEuNSAwIDAgMSAwIDIuNjI4bC0xMCA1LjQ5OEExLjUgMS41IDAgMCAxIDUgMTUuNDk2VjQuNTAyYTEuNSAxLjUgMCAwIDEgMi4yMjMtMS4zMTRsMTAgNS40OTd6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yIHB4LTQgdGV4dC1ncmF5LTYwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmbGV4IGl0ZW1zLWNlbnRlciBkYXJrOnRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBmaWxsPVwibm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTIgNWE4LjUgOC41IDAgMSAxIDAgMTdhOC41IDguNSAwIDAgMSAwLTE3em0wIDNhLjc1Ljc1IDAgMCAwLS43NDMuNjQ4bC0uMDA3LjEwMnY0LjVsLjAwNy4xMDJhLjc1Ljc1IDAgMCAwIDEuNDg2IDBsLjAwNy0uMTAydi00LjVsLS4wMDctLjEwMkEuNzUuNzUgMCAwIDAgMTIgOHptNy4xNy0yLjg3N2wuMDgyLjA2MWwxLjE0OSAxYS43NS43NSAwIDAgMS0uOTA0IDEuMTkzbC0uMDgxLS4wNjFsLTEuMTQ5LTFhLjc1Ljc1IDAgMCAxIC45MDMtMS4xOTN6TTE0LjI1IDIuNWEuNzUuNzUgMCAwIDEgLjEwMiAxLjQ5M0wxNC4yNSA0aC00LjVhLjc1Ljc1IDAgMCAxLS4xMDItMS40OTNMOS43NSAyLjVoNC41elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRGFoYm9hcmQgdGVtcGxhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNDAwIG1yLTIgbWwtMiBtZDptbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAzMCBtaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHAtMSB0ZXh0LWdyYXktNDAwIGJvcmRlciByb3VuZGVkIGJvcmRlci1ncmF5LTQwMCBtci00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgZmlsbD1cIm5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xNy4yMjIgOC42ODVhMS41IDEuNSAwIDAgMSAwIDIuNjI4bC0xMCA1LjQ5OEExLjUgMS41IDAgMCAxIDUgMTUuNDk2VjQuNTAyYTEuNSAxLjUgMCAwIDEgMi4yMjMtMS4zMTRsMTAgNS40OTd6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy0xLzIgeGw6dy0xLzNcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3ctbGcgcm91bmRlZC0yeGwgcC00IGJnLXdoaXRlIGRhcms6YmctZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQgc2hhZG93LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgZm9udC1ib2xkIHRleHQteGwgdGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVjIDIwMjFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInAtMiByb3VuZGVkLWZ1bGwgYmctYmx1ZS01MDAgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMy44MyAxOWExIDEgMCAwIDEtLjc4LS4zN2wtNC44My02YTEgMSAwIDAgMSAwLTEuMjdsNS02YTEgMSAwIDAgMSAxLjU0IDEuMjhMMTAuMjkgMTJsNC4zMiA1LjM2YTEgMSAwIDAgMS0uNzggMS42NHpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicC0yIHJvdW5kZWQtZnVsbCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEwIDE5YTEgMSAwIDAgMS0uNjQtLjIzYTEgMSAwIDAgMS0uMTMtMS40MUwxMy43MSAxMkw5LjM5IDYuNjNhMSAxIDAgMCAxIC4xNS0xLjQxYTEgMSAwIDAgMSAxLjQ2LjE1bDQuODMgNmExIDEgMCAwIDEgMCAxLjI3bC01IDZBMSAxIDAgMCAxIDEwIDE5elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLW14LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ3LWZ1bGwgZGFyazp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgXCI+UzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zIFwiPk08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyBcIj5UPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgXCI+VzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zIFwiPlQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyBcIj5GPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgXCI+UzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIGRhcms6dGV4dC1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyAgdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTMwMCBkYXJrOnRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgIHRleHQtY2VudGVyIHRleHQtZ3JheS0zMDAgZGFyazp0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyNlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zICB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktMzAwIGRhcms6dGV4dC1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyAgdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTMwMCBkYXJrOnRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgIHRleHQtY2VudGVyIHRleHQtZ3JheS0zMDAgZGFyazp0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyOVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zICB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktMzAwIGRhcms6dGV4dC1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMzBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyAgaG92ZXI6dGV4dC1ibHVlLTUwMCB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktODAwIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyAgaG92ZXI6dGV4dC1ibHVlLTUwMCB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcmVsYXRpdmUgcHgtMSAgaG92ZXI6dGV4dC1ibHVlLTUwMCB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgcm91bmRlZC1mdWxsIGgtMiB3LTIgYmctYmx1ZS01MDAgYm90dG9tLTAgbGVmdC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgIGhvdmVyOnRleHQtYmx1ZS01MDAgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyAgaG92ZXI6dGV4dC1ibHVlLTUwMCB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zICBob3Zlcjp0ZXh0LWJsdWUtNTAwIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgIGhvdmVyOnRleHQtYmx1ZS01MDAgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyBtZDpweC0yIHJlbGF0aXZlIGxnOnB4LTMgaG92ZXI6dGV4dC1ibHVlLTUwMCB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgcm91bmRlZC1mdWxsIGgtMiB3LTIgYmcteWVsbG93LTUwMCBib3R0b20tMCBsZWZ0LTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMlwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zICBob3Zlcjp0ZXh0LWJsdWUtNTAwIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgIGhvdmVyOnRleHQtYmx1ZS01MDAgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgIGhvdmVyOnRleHQtYmx1ZS01MDAgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDExXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgIGhvdmVyOnRleHQtYmx1ZS01MDAgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgIHRleHQtY2VudGVyIHRleHQtd2hpdGUgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInAtMiByb3VuZGVkLWZ1bGwgYmctYmx1ZS01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyAgaG92ZXI6dGV4dC1ibHVlLTUwMCB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyAgaG92ZXI6dGV4dC1ibHVlLTUwMCB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zICBob3Zlcjp0ZXh0LWJsdWUtNTAwIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxNlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zICBob3Zlcjp0ZXh0LWJsdWUtNTAwIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxN1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zICBob3Zlcjp0ZXh0LWJsdWUtNTAwIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxOFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zICBob3Zlcjp0ZXh0LWJsdWUtNTAwIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxOVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zICBob3Zlcjp0ZXh0LWJsdWUtNTAwIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zICBob3Zlcjp0ZXh0LWJsdWUtNTAwIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zICBob3Zlcjp0ZXh0LWJsdWUtNTAwIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgIGhvdmVyOnRleHQtYmx1ZS01MDAgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgIGhvdmVyOnRleHQtYmx1ZS01MDAgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgIGhvdmVyOnRleHQtYmx1ZS01MDAgcmVsYXRpdmUgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSByb3VuZGVkLWZ1bGwgaC0yIHctMiBiZy1yZWQtNTAwIGJvdHRvbS0wIGxlZnQtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zICBob3Zlcjp0ZXh0LWJsdWUtNTAwIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyNlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zICBob3Zlcjp0ZXh0LWJsdWUtNTAwIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyN1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zICBob3Zlcjp0ZXh0LWJsdWUtNTAwIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyOFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zICBob3Zlcjp0ZXh0LWJsdWUtNTAwIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyOVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgIGhvdmVyOnRleHQtYmx1ZS01MDAgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgIGhvdmVyOnRleHQtYmx1ZS01MDAgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy1sZyByb3VuZGVkLTJ4bCBwLTQgYmctd2hpdGUgZGFyazpiZy1ncmF5LTcwMCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LW1kIHRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBteS02IHNwYWNlLXgtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmxvY2sgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwicHJvZmlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9wZXJzb24vMS5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvIG9iamVjdC1jb3ZlciByb3VuZGVkLWZ1bGwgaC0xMCB3LTEwIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTkwMCBmb250LXNlbWlib2xkIGRhcms6dGV4dC13aGl0ZSBtbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoYXJsaWUgUmFiaWxsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTQwMCBkYXJrOnRleHQtZ3JheS0zMDAgbWwtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZXkgSm9obiAhIERvIHlvdSByZWFkIHRoZSBOZXh0SlMgZG9jID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG15LTYgc3BhY2UteC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJibG9jayByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJwcm9maWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3BlcnNvbi81LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LWF1dG8gb2JqZWN0LWNvdmVyIHJvdW5kZWQtZnVsbCBoLTEwIHctMTAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktOTAwIGZvbnQtc2VtaWJvbGQgZGFyazp0ZXh0LXdoaXRlIG1sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFyaWUgTG91XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS00MDAgZGFyazp0ZXh0LWdyYXktMzAwIG1sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm8gSSB0aGluayB0aGUgZG9nIGlzIGJldHRlci4uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbXktNiBzcGFjZS14LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJsb2NrIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInByb2ZpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvcGVyc29uLzYuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtYXV0byBvYmplY3QtY292ZXIgcm91bmRlZC1mdWxsIGgtMTAgdy0xMCBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS05MDAgZm9udC1zZW1pYm9sZCBkYXJrOnRleHQtd2hpdGUgbWwtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJdmFuIEJ1Y2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTQwMCBkYXJrOnRleHQtZ3JheS0zMDAgbWwtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJpb3VzbHkgPyBoYWhhIEJvYiBpcyBub3QgYSBjaGlsZHJlbiAhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBteS02IHNwYWNlLXgtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmxvY2sgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwicHJvZmlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9wZXJzb24vNy5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvIG9iamVjdC1jb3ZlciByb3VuZGVkLWZ1bGwgaC0xMCB3LTEwIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTkwMCBmb250LXNlbWlib2xkIGRhcms6dGV4dC13aGl0ZSBtbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hcmluYSBGYXJnYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNDAwIGRhcms6dGV4dC1ncmF5LTMwMCBtbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvIHlvdSBuZWVkIHRoYXQgZGVpc2duID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lTmFtZT1cIlwiPlxyXG4gICAgICAgIHtjdXJyZW50VXNlciAmJiBjdXJyZW50VXNlci5lbWFpbH1cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2xvZ091dH0+bG9nb3V0PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRhc2hib2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==