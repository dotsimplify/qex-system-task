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
                  className: "mb-4"
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
                        lineNumber: 338,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 336,
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
                            lineNumber: 345,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            children: "Create wireframe"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 346,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 344,
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
                            lineNumber: 355,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                            d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z",
                            fill: "currentColor"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 359,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 348,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 343,
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
                            lineNumber: 367,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            children: "Dashboard design"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 368,
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
                                lineNumber: 378,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 371,
                              columnNumber: 31
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 369,
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
                                lineNumber: 393,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 386,
                              columnNumber: 31
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 384,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 366,
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
                            lineNumber: 407,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                            d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z",
                            fill: "currentColor"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 411,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 400,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 365,
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
                            lineNumber: 419,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            children: "Components card"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 420,
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
                                lineNumber: 430,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 423,
                              columnNumber: 31
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 421,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 418,
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
                            lineNumber: 444,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                            d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z",
                            fill: "currentColor"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 448,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 437,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 417,
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
                            lineNumber: 456,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "line-through",
                            children: "Google logo design"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 457,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 455,
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
                            lineNumber: 468,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 461,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 454,
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
                            lineNumber: 476,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "line-through",
                            children: "Header navigation"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 477,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 475,
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
                            lineNumber: 488,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 481,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 474,
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
                            lineNumber: 496,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            children: "International"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 497,
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
                                lineNumber: 507,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 500,
                              columnNumber: 31
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 498,
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
                                lineNumber: 522,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 515,
                              columnNumber: 31
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 513,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 495,
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
                            lineNumber: 536,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                            d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z",
                            fill: "currentColor"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 540,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 529,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 494,
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
                            lineNumber: 548,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            children: "Production data"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 549,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 547,
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
                            lineNumber: 558,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                            d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z",
                            fill: "currentColor"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 562,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 551,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 546,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 342,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 335,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 334,
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
                        lineNumber: 574,
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
                              lineNumber: 585,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 584,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 578,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 577,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 573,
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
                              lineNumber: 603,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 602,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 595,
                          columnNumber: 27
                        }, _this), "Create wireframe"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 594,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "font-bold text-xs dark:text-gray-200 mr-2 ml-2 md:ml-4",
                          children: "25 min 20s"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 612,
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
                                lineNumber: 624,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 623,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 616,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 615,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 611,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 593,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "flex items-center p-4 justify-between border-b-2 border-gray-100",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        className: "font-bold text-md text-black dark:text-white",
                        children: "Slack"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 634,
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
                              lineNumber: 645,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 644,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 638,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 637,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 633,
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
                              lineNumber: 663,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 662,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 655,
                          columnNumber: 27
                        }, _this), "International"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 654,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "text-xs text-gray-400 mr-2 ml-2 md:ml-4",
                          children: "30 min"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 672,
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
                                lineNumber: 683,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 682,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 676,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 675,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 671,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 653,
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
                              lineNumber: 702,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 701,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 694,
                          columnNumber: 27
                        }, _this), "Slack logo design"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 693,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "text-xs text-gray-400 mr-2 ml-2 md:ml-4",
                          children: "30 min"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 711,
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
                                lineNumber: 722,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 721,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 715,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 714,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 710,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 692,
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
                              lineNumber: 741,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 740,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 733,
                          columnNumber: 27
                        }, _this), "Dahboard template"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 732,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "text-xs text-gray-400 mr-2 ml-2 md:ml-4",
                          children: "30 min"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 750,
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
                                lineNumber: 761,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 760,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 754,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 753,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 749,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 731,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 572,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 571,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 333,
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
                            lineNumber: 779,
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
                                  lineNumber: 790,
                                  columnNumber: 35
                                }, _this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 784,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 783,
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
                                  lineNumber: 803,
                                  columnNumber: 35
                                }, _this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 797,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 796,
                              columnNumber: 31
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 782,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 778,
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
                                lineNumber: 814,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                                className: "py-3 px-2 md:px-3 ",
                                children: "M"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 815,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                                className: "py-3 px-2 md:px-3 ",
                                children: "T"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 816,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                                className: "py-3 px-2 md:px-3 ",
                                children: "W"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 817,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                                className: "py-3 px-2 md:px-3 ",
                                children: "T"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 818,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                                className: "py-3 px-2 md:px-3 ",
                                children: "F"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 819,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                                className: "py-3 px-2 md:px-3 ",
                                children: "S"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 820,
                                columnNumber: 33
                              }, _this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 813,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                              className: "text-gray-400 dark:text-gray-500",
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500",
                                children: "25"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 823,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500",
                                children: "26"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 826,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500",
                                children: "27"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 829,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500",
                                children: "28"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 832,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500",
                                children: "29"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 835,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500",
                                children: "30"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 838,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center text-gray-800 cursor-pointer",
                                children: "1"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 841,
                                columnNumber: 33
                              }, _this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 822,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "2"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 846,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 relative px-1  hover:text-blue-500 text-center cursor-pointer",
                                children: ["3", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                  className: "absolute rounded-full h-2 w-2 bg-blue-500 bottom-0 left-1/2 transform -translate-x-1/2"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 851,
                                  columnNumber: 35
                                }, _this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 849,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "4"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 853,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "5"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 856,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "6"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 859,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "7"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 862,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3 md:px-2 relative lg:px-3 hover:text-blue-500 text-center cursor-pointer",
                                children: ["8", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                  className: "absolute rounded-full h-2 w-2 bg-yellow-500 bottom-0 left-1/2 transform -translate-x-1/2"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 867,
                                  columnNumber: 35
                                }, _this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 865,
                                columnNumber: 33
                              }, _this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 845,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "9"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 871,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "10"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 874,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "11"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 877,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "12"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 880,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  text-center text-white cursor-pointer",
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                  className: "p-2 rounded-full bg-blue-500",
                                  children: "13"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 884,
                                  columnNumber: 35
                                }, _this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 883,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "14"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 888,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "15"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 891,
                                columnNumber: 33
                              }, _this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 870,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "16"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 896,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "17"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 899,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "18"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 902,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "19"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 905,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "20"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 908,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "21"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 911,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "22"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 914,
                                columnNumber: 33
                              }, _this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 895,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "23"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 919,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "24"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 922,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 relative text-center cursor-pointer",
                                children: ["25", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                  className: "absolute rounded-full h-2 w-2 bg-red-500 bottom-0 left-1/2 transform -translate-x-1/2"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 927,
                                  columnNumber: 35
                                }, _this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 925,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "26"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 929,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "27"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 932,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "28"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 935,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "29"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 938,
                                columnNumber: 33
                              }, _this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 918,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "30"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 943,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                className: "py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer",
                                children: "31"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 946,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 949,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 950,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 951,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 952,
                                columnNumber: 33
                              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 953,
                                columnNumber: 33
                              }, _this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 942,
                              columnNumber: 31
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 812,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 811,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 777,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 776,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 775,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 774,
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
                      lineNumber: 963,
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
                            lineNumber: 969,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 968,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "flex flex-col",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "text-sm text-gray-900 font-semibold dark:text-white ml-2",
                            children: "Charlie Rabiller"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 976,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "text-sm text-gray-400 dark:text-gray-300 ml-2",
                            children: "Hey John ! Do you read the NextJS doc ?"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 979,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 975,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 967,
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
                            lineNumber: 986,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 985,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "flex flex-col",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "text-sm text-gray-900 font-semibold dark:text-white ml-2",
                            children: "Marie Lou"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 993,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "text-sm text-gray-400 dark:text-gray-300 ml-2",
                            children: "No I think the dog is better..."
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 996,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 992,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 984,
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
                            lineNumber: 1003,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1002,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "flex flex-col",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "text-sm text-gray-900 font-semibold dark:text-white ml-2",
                            children: "Ivan Buck"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1010,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "text-sm text-gray-400 dark:text-gray-300 ml-2",
                            children: "Seriously ? haha Bob is not a children !"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1013,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 1009,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 1001,
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
                            lineNumber: 1020,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1019,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "flex flex-col",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "text-sm text-gray-900 font-semibold dark:text-white ml-2",
                            children: "Marina Farga"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1027,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "text-sm text-gray-400 dark:text-gray-300 ml-2",
                            children: "Do you need that deisgn ?"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1030,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 1026,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 1018,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 966,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 962,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 961,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 773,
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
        lineNumber: 1047,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1045,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQuanMiXSwibmFtZXMiOlsiZGFzaGJvYXJkIiwidXNlQXV0aCIsImxvZ291dCIsImN1cnJlbnRVc2VyIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwicm91dGVyIiwidXNlUm91dGVyIiwibG9nT3V0IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiZW1haWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUEsaUJBQ1VDLG9FQUFPLEVBRGpCO0FBQUEsTUFDZEMsTUFEYyxZQUNkQSxNQURjO0FBQUEsTUFDTkMsV0FETSxZQUNOQSxXQURNOztBQUFBLGtCQUVJQyxzREFBUSxDQUFDLEVBQUQsQ0FGWjtBQUFBLE1BRWZDLEtBRmU7QUFBQSxNQUVSQyxRQUZROztBQUd0QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUNBLE1BQU1DLE1BQU07QUFBQSxnVUFBRyxpQkFBT0MsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFWEosc0JBQVEsQ0FBQyxFQUFELENBQVI7QUFGVztBQUFBLHFCQUdMSixNQUFNLEVBSEQ7O0FBQUE7QUFJWFMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaO0FBQ0FMLG9CQUFNLENBQUNNLElBQVAsQ0FBWSxRQUFaO0FBTFc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFPWFAsc0JBQVEsQ0FBQyxxQ0FBRCxDQUFSOztBQVBXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQU5HLE1BQU07QUFBQTtBQUFBO0FBQUEsS0FBWjs7QUFVQSxzQkFDRTtBQUFBLDRCQUNFO0FBQU0sZUFBUyxFQUFDLHFGQUFoQjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxrQ0FB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QUFBO0FBQUE7QUFBQSxtQ0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQXBERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkE1TEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXhnQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFoREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXZMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFrZ0NFO0FBQUssbUJBQWEsRUFBQyxFQUFuQjtBQUFBLGlCQUNHTixXQUFXLElBQUlBLFdBQVcsQ0FBQ1csS0FEOUIsZUFFRTtBQUFRLGVBQU8sRUFBRUwsTUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsZ0NGO0FBQUEsa0JBREY7QUF5Z0NELENBdmhDRDs7R0FBTVQsUztVQUM0QkMsNEQsRUFFakJPLHFEOzs7QUFzaENGUix3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQuOWU1YmU0YzMzN2VkNjcwODNiYzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi9jb250ZXh0L0F1dGhDb250ZXh0XCI7XHJcbmNvbnN0IGRhc2hib2FyZCA9ICgpID0+IHtcclxuICBjb25zdCB7IGxvZ291dCwgY3VycmVudFVzZXIgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGxvZ091dCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRFcnJvcihcIlwiKTtcclxuICAgICAgYXdhaXQgbG9nb3V0KCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibG9nIG91dCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0RXJyb3IoXCJFcnJvciB3aGlsZSBsb2dnaW5nIG91dCAsIFRyeSBhZ2FpblwiKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCBkYXJrOmJnLWdyYXktODAwIHJvdW5kZWQtMnhsIHJlbGF0aXZlIGgtc2NyZWVuIG92ZXJmbG93LWhpZGRlbiByZWxhdGl2ZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gaGlkZGVuIGxnOmJsb2NrIG15LTQgbWwtNCBzaGFkb3ctbGcgcmVsYXRpdmUgdy04MFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIGgtZnVsbCByb3VuZGVkLTJ4bCBkYXJrOmJnLWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwdC02XCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzVcIlxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMFwiXHJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjU2IDM2NlwiXHJcbiAgICAgICAgICAgICAgICAgIHZlcnNpb249XCIxLjFcIlxyXG4gICAgICAgICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgICAgICAgICAgICAgIHgxPVwiMTIuNTE4OTUzNCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgeTE9XCI4NS4yMTI4NjExJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB4Mj1cIjg4LjIyODI5NTklXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHkyPVwiMTAuMDIyNTQ5NyVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJsaW5lYXJHcmFkaWVudC0xXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3RvcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9wLWNvbG9yPVwiI0ZGMDA1N1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3Atb3BhY2l0eT1cIjAuMTZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ9XCIwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9zdG9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj1cIiNGRjAwNTdcIiBvZmZzZXQ9XCI4Ni4xMzU0JVwiPjwvc3RvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTAsNjAuODUzODAwNiBDMCwyNy4yNDUyNjEgMjcuMjQ1MzA0LDAgNjAuODU0MjEyMSwwIEwxMTcuMDI3MDE5LDAgTDI1NS45OTY1NDksMCBMMjU1Ljk5NjU0OSw4Ni41OTk5Nzc2IEMyNTUuOTk2NTQ5LDEwMy40MDQxNTUgMjQyLjM3NDA5NiwxMTcuMDI3MjIyIDIyNS41Njk5MTksMTE3LjAyNzIyMiBMMTQ1LjgwODEyLDExNy4wMjcyMjIgQzEzMC4wMDMyOTksMTE3LjI3NzgyOSAxMTcuMjQyNjE1LDEzMC4wNjAwMTEgMTE3LjAyNzAxOSwxNDUuODcyODE3IEwxMTcuMDI3MDE5LDMzNS4yODI1MiBDMTE3LjAyNzAxOSwzNTIuMDg3MzEyIDEwMy40MDQ1NjcsMzY1LjcwOTc2NCA4Ni41OTk3NzQ5LDM2NS43MDk3NjQgTDAsMzY1LjcwOTc2NCBMMCwxMTcuMDI3MjIyIEwwLDYwLjg1MzgwMDYgWlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzAwMUIzOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNsaW5lYXJHcmFkaWVudC0xKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTQ3LjAxMzI0NCwgMTQ3LjAxNDY3NSkgcm90YXRlKDkwLjAwMDAwMCkgdHJhbnNsYXRlKC0xNDcuMDEzMjQ0LCAtMTQ3LjAxNDY3NSkgXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGN4PVwiMTQ3LjAxMzI0NFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjeT1cIjE0Ny4wMTQ2NzVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcj1cIjc4Ljk5MzM5MzhcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2NpcmNsZT5cclxuICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNsaW5lYXJHcmFkaWVudC0xKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5PVwiMC41XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNDcuMDEzMjQ0LCAxNDcuMDE0Njc1KSByb3RhdGUoOTAuMDAwMDAwKSB0cmFuc2xhdGUoLTE0Ny4wMTMyNDQsIC0xNDcuMDE0Njc1KSBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY3g9XCIxNDcuMDEzMjQ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGN5PVwiMTQ3LjAxNDY3NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICByPVwiNzguOTkzMzkzOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvY2lyY2xlPlxyXG4gICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm10LTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGZvbnQtdGhpbiB1cHBlcmNhc2UgdGV4dC1ibHVlLTUwMCBmbGV4IGl0ZW1zLWNlbnRlciBwLTQgbXktMiB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAganVzdGlmeS1zdGFydCBiZy1ncmFkaWVudC10by1yIGZyb20td2hpdGUgdG8tYmx1ZS0xMDAgYm9yZGVyLXItNCBib3JkZXItYmx1ZS01MDAgZGFyazpmcm9tLWdyYXktNzAwIGRhcms6dG8tZ3JheS04MDAgYm9yZGVyLXItNCBib3JkZXItYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMDQ4IDE3OTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMDcwIDExNzhsMzA2LTU2NGgtNjU0bC0zMDYgNTY0aDY1NHptNzIyLTI4MnEwIDE4Mi03MSAzNDh0LTE5MSAyODYtMjg2IDE5MS0zNDggNzEtMzQ4LTcxLTI4Ni0xOTEtMTkxLTI4Ni03MS0zNDggNzEtMzQ4IDE5MS0yODYgMjg2LTE5MSAzNDgtNzEgMzQ4IDcxIDI4NiAxOTEgMTkxIDI4NiA3MSAzNDh6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm14LTQgdGV4dC1zbSBmb250LW5vcm1hbFwiPkRhc2hib2FyZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBmb250LXRoaW4gdXBwZXJjYXNlIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktMjAwIGZsZXggaXRlbXMtY2VudGVyIHAtNCBteS0yIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBqdXN0aWZ5LXN0YXJ0IGhvdmVyOnRleHQtYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibS1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMDQ4IDE3OTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMDI0IDExMzFxMC02NC05LTExNy41dC0yOS41LTEwMy02MC41LTc4LTk3LTI4LjVxLTYgNC0zMCAxOHQtMzcuNSAyMS41LTM1LjUgMTcuNS00MyAxNC41LTQyIDQuNS00Mi00LjUtNDMtMTQuNS0zNS41LTE3LjUtMzcuNS0yMS41LTMwLTE4cS01NyAwLTk3IDI4LjV0LTYwLjUgNzgtMjkuNSAxMDMtOSAxMTcuNSAzNyAxMDYuNSA5MSA0Mi41aDUxMnE1NCAwIDkxLTQyLjV0MzctMTA2LjV6bS0xNTctNTIwcTAtOTQtNjYuNS0xNjAuNXQtMTYwLjUtNjYuNS0xNjAuNSA2Ni41LTY2LjUgMTYwLjUgNjYuNSAxNjAuNSAxNjAuNSA2Ni41IDE2MC41LTY2LjUgNjYuNS0xNjAuNXptOTI1IDUwOXYtNjRxMC0xNC05LTIzdC0yMy05aC01NzZxLTE0IDAtMjMgOXQtOSAyM3Y2NHEwIDE0IDkgMjN0MjMgOWg1NzZxMTQgMCAyMy05dDktMjN6bTAtMjYwdi01NnEwLTE1LTEwLjUtMjUuNXQtMjUuNS0xMC41aC01NjhxLTE1IDAtMjUuNSAxMC41dC0xMC41IDI1LjV2NTZxMCAxNSAxMC41IDI1LjV0MjUuNSAxMC41aDU2OHExNSAwIDI1LjUtMTAuNXQxMC41LTI1LjV6bTAtMjUydi02NHEwLTE0LTktMjN0LTIzLTloLTU3NnEtMTQgMC0yMyA5dC05IDIzdjY0cTAgMTQgOSAyM3QyMyA5aDU3NnExNCAwIDIzLTl0OS0yM3ptMjU2LTMyMHYxMjE2cTAgNjYtNDcgMTEzdC0xMTMgNDdoLTM1MnYtOTZxMC0xNC05LTIzdC0yMy05aC02NHEtMTQgMC0yMyA5dC05IDIzdjk2aC03Njh2LTk2cTAtMTQtOS0yM3QtMjMtOWgtNjRxLTE0IDAtMjMgOXQtOSAyM3Y5NmgtMzUycS02NiAwLTExMy00N3QtNDctMTEzdi0xMjE2cTAtNjYgNDctMTEzdDExMy00N2gxNzI4cTY2IDAgMTEzIDQ3dDQ3IDExM3pcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXgtNCB0ZXh0LXNtIGZvbnQtbm9ybWFsXCI+UHJvamVjdHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZm9udC10aGluIHVwcGVyY2FzZSB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTIwMCBmbGV4IGl0ZW1zLWNlbnRlciBwLTQgbXktMiB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAganVzdGlmeS1zdGFydCBob3Zlcjp0ZXh0LWJsdWUtNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm0tYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjA0OCAxNzkyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNjg1IDQ4M3ExNiAwIDI3LjUtMTEuNXQxMS41LTI3LjUtMTEuNS0yNy41LTI3LjUtMTEuNS0yNyAxMS41LTExIDI3LjUgMTEgMjcuNSAyNyAxMS41em00MjIgMHExNiAwIDI3LTExLjV0MTEtMjcuNS0xMS0yNy41LTI3LTExLjUtMjcuNSAxMS41LTExLjUgMjcuNSAxMS41IDI3LjUgMjcuNSAxMS41em0tODEyIDE4NHE0MiAwIDcyIDMwdDMwIDcydjQzMHEwIDQzLTI5LjUgNzN0LTcyLjUgMzAtNzMtMzAtMzAtNzN2LTQzMHEwLTQyIDMwLTcydDczLTMwem0xMDYwIDE5djY2NnEwIDQ2LTMyIDc4dC03NyAzMmgtNzV2MjI3cTAgNDMtMzAgNzN0LTczIDMwLTczLTMwLTMwLTczdi0yMjdoLTEzOHYyMjdxMCA0My0zMCA3M3QtNzMgMzBxLTQyIDAtNzItMzB0LTMwLTczbC0xLTIyN2gtNzRxLTQ2IDAtNzgtMzJ0LTMyLTc4di02NjZoOTE4em0tMjMyLTQwNXExMDcgNTUgMTcxIDE1My41dDY0IDIxNS41aC05MjVxMC0xMTcgNjQtMjE1LjV0MTcyLTE1My41bC03MS0xMzFxLTctMTMgNS0yMCAxMy02IDIwIDZsNzIgMTMycTk1LTQyIDIwMS00MnQyMDEgNDJsNzItMTMycTctMTIgMjAtNiAxMiA3IDUgMjB6bTQ3NyA0ODh2NDMwcTAgNDMtMzAgNzN0LTczIDMwcS00MiAwLTcyLTMwdC0zMC03M3YtNDMwcTAtNDMgMzAtNzIuNXQ3Mi0yOS41cTQzIDAgNzMgMjkuNXQzMCA3Mi41elwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJteC00IHRleHQtc20gZm9udC1ub3JtYWxcIj5NeSB0YXNrczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBmb250LXRoaW4gdXBwZXJjYXNlIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktMjAwIGZsZXggaXRlbXMtY2VudGVyIHAtNCBteS0yIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBqdXN0aWZ5LXN0YXJ0IGhvdmVyOnRleHQtYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibS1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMDQ4IDE3OTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk05NjAgMGw5NjAgMzg0djEyOGgtMTI4cTAgMjYtMjAuNSA0NXQtNDguNSAxOWgtMTUyNnEtMjggMC00OC41LTE5dC0yMC41LTQ1aC0xMjh2LTEyOHptLTcwNCA2NDBoMjU2djc2OGgxMjh2LTc2OGgyNTZ2NzY4aDEyOHYtNzY4aDI1NnY3NjhoMTI4di03NjhoMjU2djc2OGg1OXEyOCAwIDQ4LjUgMTl0MjAuNSA0NXY2NGgtMTY2NHYtNjRxMC0yNiAyMC41LTQ1dDQ4LjUtMTloNTl2LTc2OHptMTU5NSA5NjBxMjggMCA0OC41IDE5dDIwLjUgNDV2MTI4aC0xOTIwdi0xMjhxMC0yNiAyMC41LTQ1dDQ4LjUtMTloMTc4MnpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXgtNCB0ZXh0LXNtIGZvbnQtbm9ybWFsXCI+Q2FsZW5kYXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZm9udC10aGluIHVwcGVyY2FzZSB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTIwMCBmbGV4IGl0ZW1zLWNlbnRlciBwLTQgbXktMiB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAganVzdGlmeS1zdGFydCBob3Zlcjp0ZXh0LWJsdWUtNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibS1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjA0OCAxNzkyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTA3MCAxMTc4bDMwNi01NjRoLTY1NGwtMzA2IDU2NGg2NTR6bTcyMi0yODJxMCAxODItNzEgMzQ4dC0xOTEgMjg2LTI4NiAxOTEtMzQ4IDcxLTM0OC03MS0yODYtMTkxLTE5MS0yODYtNzEtMzQ4IDcxLTM0OCAxOTEtMjg2IDI4Ni0xOTEgMzQ4LTcxIDM0OCA3MSAyODYgMTkxIDE5MSAyODYgNzEgMzQ4elwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJteC00IHRleHQtc20gZm9udC1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFRpbWUgbWFuYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGZvbnQtdGhpbiB1cHBlcmNhc2UgdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS0yMDAgZmxleCBpdGVtcy1jZW50ZXIgcC00IG15LTIgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGp1c3RpZnktc3RhcnQgaG92ZXI6dGV4dC1ibHVlLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtLWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwNDggMTc5MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEwMjQgMTEzMXEwLTY0LTktMTE3LjV0LTI5LjUtMTAzLTYwLjUtNzgtOTctMjguNXEtNiA0LTMwIDE4dC0zNy41IDIxLjUtMzUuNSAxNy41LTQzIDE0LjUtNDIgNC41LTQyLTQuNS00My0xNC41LTM1LjUtMTcuNS0zNy41LTIxLjUtMzAtMThxLTU3IDAtOTcgMjguNXQtNjAuNSA3OC0yOS41IDEwMy05IDExNy41IDM3IDEwNi41IDkxIDQyLjVoNTEycTU0IDAgOTEtNDIuNXQzNy0xMDYuNXptLTE1Ny01MjBxMC05NC02Ni41LTE2MC41dC0xNjAuNS02Ni41LTE2MC41IDY2LjUtNjYuNSAxNjAuNSA2Ni41IDE2MC41IDE2MC41IDY2LjUgMTYwLjUtNjYuNSA2Ni41LTE2MC41em05MjUgNTA5di02NHEwLTE0LTktMjN0LTIzLTloLTU3NnEtMTQgMC0yMyA5dC05IDIzdjY0cTAgMTQgOSAyM3QyMyA5aDU3NnExNCAwIDIzLTl0OS0yM3ptMC0yNjB2LTU2cTAtMTUtMTAuNS0yNS41dC0yNS41LTEwLjVoLTU2OHEtMTUgMC0yNS41IDEwLjV0LTEwLjUgMjUuNXY1NnEwIDE1IDEwLjUgMjUuNXQyNS41IDEwLjVoNTY4cTE1IDAgMjUuNS0xMC41dDEwLjUtMjUuNXptMC0yNTJ2LTY0cTAtMTQtOS0yM3QtMjMtOWgtNTc2cS0xNCAwLTIzIDl0LTkgMjN2NjRxMCAxNCA5IDIzdDIzIDloNTc2cTE0IDAgMjMtOXQ5LTIzem0yNTYtMzIwdjEyMTZxMCA2Ni00NyAxMTN0LTExMyA0N2gtMzUydi05NnEwLTE0LTktMjN0LTIzLTloLTY0cS0xNCAwLTIzIDl0LTkgMjN2OTZoLTc2OHYtOTZxMC0xNC05LTIzdC0yMy05aC02NHEtMTQgMC0yMyA5dC05IDIzdjk2aC0zNTJxLTY2IDAtMTEzLTQ3dC00Ny0xMTN2LTEyMTZxMC02NiA0Ny0xMTN0MTEzLTQ3aDE3MjhxNjYgMCAxMTMgNDd0NDcgMTEzelwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJteC00IHRleHQtc20gZm9udC1ub3JtYWxcIj5SZXBvcnRzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGZvbnQtdGhpbiB1cHBlcmNhc2UgdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS0yMDAgZmxleCBpdGVtcy1jZW50ZXIgcC00IG15LTIgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGp1c3RpZnktc3RhcnQgaG92ZXI6dGV4dC1ibHVlLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTUgdy01XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMDg4IDEyNTZ2MjQwcTAgMTYtMTIgMjh0LTI4IDEyaC0yNDBxLTE2IDAtMjgtMTJ0LTEyLTI4di0yNDBxMC0xNiAxMi0yOHQyOC0xMmgyNDBxMTYgMCAyOCAxMnQxMiAyOHptMzE2LTYwMHEwIDU0LTE1LjUgMTAxdC0zNSA3Ni41LTU1IDU5LjUtNTcuNSA0My41LTYxIDM1LjVxLTQxIDIzLTY4LjUgNjV0LTI3LjUgNjdxMCAxNy0xMiAzMi41dC0yOCAxNS41aC0yNDBxLTE1IDAtMjUuNS0xOC41dC0xMC41LTM3LjV2LTQ1cTAtODMgNjUtMTU2LjV0MTQzLTEwOC41cTU5LTI3IDg0LTU2dDI1LTc2cTAtNDItNDYuNS03NHQtMTA3LjUtMzJxLTY1IDAtMTA4IDI5LTM1IDI1LTEwNyAxMTUtMTMgMTYtMzEgMTYtMTIgMC0yNS04bC0xNjQtMTI1cS0xMy0xMC0xNS41LTI1dDUuNS0yOHExNjAtMjY2IDQ2NC0yNjYgODAgMCAxNjEgMzF0MTQ2IDgzIDEwNiAxMjcuNSA0MSAxNTguNXpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXgtNCB0ZXh0LXNtIGZvbnQtbm9ybWFsXCI+U2V0dGluZ3M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbCBwbC0wIG1kOnAtNCBtZDpzcGFjZS15LTRcIj5cclxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJ3LWZ1bGwgc2hhZG93LWxnIGJnLXdoaXRlIGRhcms6YmctZ3JheS03MDAgaXRlbXMtY2VudGVyIGgtMTYgcm91bmRlZC0yeGwgei00MFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0yMCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGgtZnVsbCBweC0zIG14LWF1dG8gZmxleC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaXRlbXMtY2VudGVyIHBsLTEgZmxleCB3LWZ1bGwgbGc6bWF4LXctNjggc206cHItMiBzbTptbC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHJlbGF0aXZlIGxlZnQtMCB6LTUwIGZsZXggdy0zLzQgaC1hdXRvIGgtZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXIgdy1mdWxsIGxnOnctNjQgaC1mdWxsIGdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHotNTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmxvY2sgdy1hdXRvIGgtMTAgcC0zIHByLTIgdGV4dC1zbSB0ZXh0LWdyYXktNTAwIHVwcGVyY2FzZSBjdXJzb3ItcG9pbnRlciBzbTpoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LTUgaC01XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTAgMTRsMi0ybTAgMGwyLTJtLTIgMmwtMi0ybTIgMmwyIDJtNy0yYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0wIHotMjAgaGlkZGVuIHctNCBoLTQgbWwtNCB0ZXh0LWdyYXktNTAwIHBvaW50ZXItZXZlbnRzLW5vbmUgZmlsbC1jdXJyZW50IGdyb3VwLWhvdmVyOnRleHQtZ3JheS00MDAgc206YmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIuOSAxNC4zMmE4IDggMCAxIDEgMS40MS0xLjQxbDUuMzUgNS4zMy0xLjQyIDEuNDItNS4zMy01LjM0ek04IDE0QTYgNiAwIDEgMCA4IDJhNiA2IDAgMCAwIDAgMTJ6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgcHktMS41IHBsLTEwIHByLTQgbGVhZGluZy1ub3JtYWwgcm91bmRlZC0yeGwgZm9jdXM6Ym9yZGVyLXRyYW5zcGFyZW50IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTUwMCByaW5nLW9wYWNpdHktOTAgYmctZ3JheS0xMDAgZGFyazpiZy1ncmF5LTgwMCB0ZXh0LWdyYXktNDAwIGFhLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCBoaWRkZW4gaC1hdXRvIHB4LTIgcHktMSBtci0yIHRleHQteHMgdGV4dC1ncmF5LTQwMCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtMnhsIG1kOmJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICtcclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBwLTEgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmQgdy0xLzQgbWwtNSBtci00IHNtOm1yLTAgc206cmlnaHQtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmxvY2sgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwicHJvZmlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9wZXJzb24vMS5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvIG9iamVjdC1jb3ZlciByb3VuZGVkLWZ1bGwgaC0xMCB3LTEwIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctYXV0byBoLXNjcmVlbiBwYi0yNCBwdC0yIHByLTIgcGwtMiBtZDpwdC0wIG1kOnByLTAgbWQ6cGwtMFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBmbGV4LXdyYXAgc206ZmxleC1yb3cgXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LTEvMiB4bDp3LTEvM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy1sZyByb3VuZGVkLTJ4bCBwLTQgYmctd2hpdGUgZGFyazpiZy1ncmF5LTcwMCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJvdW5kZWQteGwgcmVsYXRpdmUgcC0yIGJnLWJsdWUtMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjU2IDI2MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMjU1Ljg3OCAxMzMuNDUxYzAtMTAuNzM0LS44NzEtMTguNTY3LTIuNzU2LTI2LjY5SDEzMC41NXY0OC40NDhoNzEuOTQ3Yy0xLjQ1IDEyLjA0LTkuMjgzIDMwLjE3Mi0yNi42OSA0Mi4zNTZsLS4yNDQgMS42MjIgMzguNzU1IDMwLjAyMyAyLjY4NS4yNjhjMjQuNjU5LTIyLjc3NCAzOC44NzUtNTYuMjgyIDM4Ljg3NS05Ni4wMjdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjNDI4NUY0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEzMC41NSAyNjEuMWMzNS4yNDggMCA2NC44MzktMTEuNjA1IDg2LjQ1My0zMS42MjJsLTQxLjE5Ni0zMS45MTNjLTExLjAyNCA3LjY4OC0yNS44MiAxMy4wNTUtNDUuMjU3IDEzLjA1NS0zNC41MjMgMC02My44MjQtMjIuNzczLTc0LjI2OS01NC4yNWwtMS41MzEuMTMtNDAuMjk4IDMxLjE4Ny0uNTI3IDEuNDY1QzM1LjM5MyAyMzEuNzk4IDc5LjQ5IDI2MS4xIDEzMC41NSAyNjEuMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiMzNEE4NTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNTYuMjgxIDE1Ni4zN2MtMi43NTYtOC4xMjMtNC4zNTEtMTYuODI3LTQuMzUxLTI1LjgyIDAtOC45OTQgMS41OTUtMTcuNjk3IDQuMjA2LTI1LjgybC0uMDczLTEuNzNMMTUuMjYgNzEuMzEybC0xLjMzNS42MzVDNS4wNzcgODkuNjQ0IDAgMTA5LjUxNyAwIDEzMC41NXM1LjA3NyA0MC45MDUgMTMuOTI1IDU4LjYwMmw0Mi4zNTYtMzIuNzgyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0ZCQkMwNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMzAuNTUgNTAuNDc5YzI0LjUxNCAwIDQxLjA1IDEwLjU4OSA1MC40NzkgMTkuNDM4bDM2Ljg0NC0zNS45NzRDMTk1LjI0NSAxMi45MSAxNjUuNzk4IDAgMTMwLjU1IDAgNzkuNDkgMCAzNS4zOTMgMjkuMzAxIDEzLjkyNSA3MS45NDdsNDIuMjExIDMyLjc4M2MxMC41OS0zMS40NzcgMzkuODkxLTU0LjI1MSA3NC40MTQtNTQuMjUxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0VCNDMzNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1tZCB0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZSBtbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvb2dsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC13aGl0ZSBtbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvb2dsZSBJbmMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib3JkZXIgcC0xIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkLWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC15ZWxsb3ctNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNzI4IDY0N3EwIDIyLTI2IDQ4bC0zNjMgMzU0IDg2IDUwMHExIDcgMSAyMCAwIDIxLTEwLjUgMzUuNXQtMzAuNSAxNC41cS0xOSAwLTQwLTEybC00NDktMjM2LTQ0OSAyMzZxLTIyIDEyLTQwIDEyLTIxIDAtMzEuNS0xNC41dC0xMC41LTM1LjVxMC02IDItMjBsODYtNTAwLTM2NC0zNTRxLTI1LTI3LTI1LTQ4IDAtMzcgNTYtNDZsNTAyLTczIDIyNS00NTVxMTktNDEgNDktNDF0NDkgNDFsMjI1IDQ1NSA1MDIgNzNxNTYgOSA1NiA0NnpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtZ3JheS0yMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTA4OCAxMjQ4djE5MnEwIDQwLTI4IDY4dC02OCAyOGgtMTkycS00MCAwLTY4LTI4dC0yOC02OHYtMTkycTAtNDAgMjgtNjh0NjgtMjhoMTkycTQwIDAgNjggMjh0MjggNjh6bTAtNTEydjE5MnEwIDQwLTI4IDY4dC02OCAyOGgtMTkycS00MCAwLTY4LTI4dC0yOC02OHYtMTkycTAtNDAgMjgtNjh0NjgtMjhoMTkycTQwIDAgNjggMjh0MjggNjh6bTAtNTEydjE5MnEwIDQwLTI4IDY4dC02OCAyOGgtMTkycS00MCAwLTY4LTI4dC0yOC02OHYtMTkycTAtNDAgMjgtNjh0NjgtMjhoMTkycTQwIDAgNjggMjh0MjggNjh6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggLXNwYWNlLXgtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBoLTEwIHctMTAgcm91bmRlZC1mdWxsIG9iamVjdC1jb3ZlciByaW5nLTIgcmluZy13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3BlcnNvbi8zLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJDaGFybGVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LTEvMiB4bDp3LTEvM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgbXgtMCBzbTptbC00IHhsOm1yLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy1sZyByb3VuZGVkLTJ4bCBiZy13aGl0ZSBkYXJrOmJnLWdyYXktNzAwIHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtbWQgcC00IHRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE15IFRhc2tzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS0zMDAgZGFyazp0ZXh0LXdoaXRlIG1sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAoMDUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHRleHQtZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktMjAwIGp1c3RpZnktYmV0d2VlbiBweS0zIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMTAwIGRhcms6Ym9yZGVyLWdyYXktODAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0IHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm14LTRcIj4wMTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkNyZWF0ZSB3aXJlZnJhbWU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LTQgdGV4dC1ncmF5LTQwMCBkYXJrOnRleHQtZ3JheS0zMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNjk5IDM1M2gtNDYuOWMtMTAuMiAwLTE5LjkgNC45LTI1LjkgMTMuM0w0NjkgNTg0LjNsLTcxLjItOTguOGMtNi04LjMtMTUuNi0xMy4zLTI1LjktMTMuM0gzMjVjLTYuNSAwLTEwLjMgNy40LTYuNSAxMi43bDEyNC42IDE3Mi44YTMxLjggMzEuOCAwIDAgMCA1MS43IDBsMjEwLjYtMjkyYzMuOS01LjMuMS0xMi43LTYuNC0xMi43elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNTEyIDY0QzI2NC42IDY0IDY0IDI2NC42IDY0IDUxMnMyMDAuNiA0NDggNDQ4IDQ0OHM0NDgtMjAwLjYgNDQ4LTQ0OFM3NTkuNCA2NCA1MTIgNjR6bTAgODIwYy0yMDUuNCAwLTM3Mi0xNjYuNi0zNzItMzcyczE2Ni42LTM3MiAzNzItMzcyczM3MiAxNjYuNiAzNzIgMzcycy0xNjYuNiAzNzItMzcyIDM3MnpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTIwMCBqdXN0aWZ5LWJldHdlZW4gcHktMyBib3JkZXItYi0yIGJvcmRlci1ncmF5LTEwMCBkYXJrOmJvcmRlci1ncmF5LTgwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJteC00XCI+MDI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5EYXNoYm9hcmQgZGVzaWduPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGc6bWwtNiBtbC0yIGZsZXggaXRlbXMtY2VudGVyIHRleHQtZ3JheS00MDAgZGFyazp0ZXh0LWdyYXktMzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMjU2IDMyQzExNC42IDMyIDAgMTI1LjEgMCAyNDBjMCA0Ny42IDE5LjkgOTEuMiA1Mi45IDEyNi4zQzM4IDQwNS43IDcgNDM5LjEgNi41IDQzOS41Yy02LjYgNy04LjQgMTcuMi00LjYgMjZTMTQuNCA0ODAgMjQgNDgwYzYxLjUgMCAxMTAtMjUuNyAxMzkuMS00Ni4zQzE5MiA0NDIuOCAyMjMuMiA0NDggMjU2IDQ0OGMxNDEuNCAwIDI1Ni05My4xIDI1Ni0yMDhTMzk3LjQgMzIgMjU2IDMyem0wIDM2OGMtMjYuNyAwLTUzLjEtNC4xLTc4LjQtMTIuMWwtMjIuNy03LjJsLTE5LjUgMTMuOGMtMTQuMyAxMC4xLTMzLjkgMjEuNC01Ny41IDI5YzcuMy0xMi4xIDE0LjQtMjUuNyAxOS45LTQwLjJsMTAuNi0yOC4xbC0yMC42LTIxLjhDNjkuNyAzMTQuMSA0OCAyODIuMiA0OCAyNDBjMC04OC4yIDkzLjMtMTYwIDIwOC0xNjBzMjA4IDcxLjggMjA4IDE2MHMtOTMuMyAxNjAtMjA4IDE2MHpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJteC00IGZsZXggaXRlbXMtY2VudGVyIHRleHQtZ3JheS00MDAgZGFyazp0ZXh0LWdyYXktMzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDM4NCA1MTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMzg0IDE0NGMwLTQ0LjItMzUuOC04MC04MC04MHMtODAgMzUuOC04MCA4MGMwIDM2LjQgMjQuMyA2Ny4xIDU3LjUgNzYuOGMtLjYgMTYuMS00LjIgMjguNS0xMSAzNi45Yy0xNS40IDE5LjItNDkuMyAyMi40LTg1LjIgMjUuN2MtMjguMiAyLjYtNTcuNCA1LjQtODEuMyAxNi45di0xNDRjMzIuNS0xMC4yIDU2LTQwLjUgNTYtNzYuM2MwLTQ0LjItMzUuOC04MC04MC04MFMwIDM1LjggMCA4MGMwIDM1LjggMjMuNSA2Ni4xIDU2IDc2LjN2MTk5LjNDMjMuNSAzNjUuOSAwIDM5Ni4yIDAgNDMyYzAgNDQuMiAzNS44IDgwIDgwIDgwczgwLTM1LjggODAtODBjMC0zNC0yMS4yLTYzLjEtNTEuMi03NC42YzMuMS01LjIgNy44LTkuOCAxNC45LTEzLjRjMTYuMi04LjIgNDAuNC0xMC40IDY2LjEtMTIuOGM0Mi4yLTMuOSA5MC04LjQgMTE4LjItNDMuNGMxNC0xNy40IDIxLjEtMzkuOCAyMS42LTY3LjljMzEuNi0xMC44IDU0LjQtNDAuNyA1NC40LTc1Ljl6TTgwIDY0YzguOCAwIDE2IDcuMiAxNiAxNnMtNy4yIDE2LTE2IDE2cy0xNi03LjItMTYtMTZzNy4yLTE2IDE2LTE2em0wIDM4NGMtOC44IDAtMTYtNy4yLTE2LTE2czcuMi0xNiAxNi0xNnMxNiA3LjIgMTYgMTZzLTcuMiAxNi0xNiAxNnptMjI0LTMyMGM4LjggMCAxNiA3LjIgMTYgMTZzLTcuMiAxNi0xNiAxNnMtMTYtNy4yLTE2LTE2czcuMi0xNiAxNi0xNnpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LTQgdGV4dC1ncmF5LTQwMCBkYXJrOnRleHQtZ3JheS0zMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNjk5IDM1M2gtNDYuOWMtMTAuMiAwLTE5LjkgNC45LTI1LjkgMTMuM0w0NjkgNTg0LjNsLTcxLjItOTguOGMtNi04LjMtMTUuNi0xMy4zLTI1LjktMTMuM0gzMjVjLTYuNSAwLTEwLjMgNy40LTYuNSAxMi43bDEyNC42IDE3Mi44YTMxLjggMzEuOCAwIDAgMCA1MS43IDBsMjEwLjYtMjkyYzMuOS01LjMuMS0xMi43LTYuNC0xMi43elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNTEyIDY0QzI2NC42IDY0IDY0IDI2NC42IDY0IDUxMnMyMDAuNiA0NDggNDQ4IDQ0OHM0NDgtMjAwLjYgNDQ4LTQ0OFM3NTkuNCA2NCA1MTIgNjR6bTAgODIwYy0yMDUuNCAwLTM3Mi0xNjYuNi0zNzItMzcyczE2Ni42LTM3MiAzNzItMzcyczM3MiAxNjYuNiAzNzIgMzcycy0xNjYuNiAzNzItMzcyIDM3MnpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTIwMCBqdXN0aWZ5LWJldHdlZW4gcHktMyBib3JkZXItYi0yIGJvcmRlci1ncmF5LTEwMCBkYXJrOmJvcmRlci1ncmF5LTgwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJteC00XCI+MDM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Db21wb25lbnRzIGNhcmQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsZzptbC02IG1sLTIgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTQwMCBkYXJrOnRleHQtZ3JheS0zMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0yNTYgMzJDMTE0LjYgMzIgMCAxMjUuMSAwIDI0MGMwIDQ3LjYgMTkuOSA5MS4yIDUyLjkgMTI2LjNDMzggNDA1LjcgNyA0MzkuMSA2LjUgNDM5LjVjLTYuNiA3LTguNCAxNy4yLTQuNiAyNlMxNC40IDQ4MCAyNCA0ODBjNjEuNSAwIDExMC0yNS43IDEzOS4xLTQ2LjNDMTkyIDQ0Mi44IDIyMy4yIDQ0OCAyNTYgNDQ4YzE0MS40IDAgMjU2LTkzLjEgMjU2LTIwOFMzOTcuNCAzMiAyNTYgMzJ6bTAgMzY4Yy0yNi43IDAtNTMuMS00LjEtNzguNC0xMi4xbC0yMi43LTcuMmwtMTkuNSAxMy44Yy0xNC4zIDEwLjEtMzMuOSAyMS40LTU3LjUgMjljNy4zLTEyLjEgMTQuNC0yNS43IDE5LjktNDAuMmwxMC42LTI4LjFsLTIwLjYtMjEuOEM2OS43IDMxNC4xIDQ4IDI4Mi4yIDQ4IDI0MGMwLTg4LjIgOTMuMy0xNjAgMjA4LTE2MHMyMDggNzEuOCAyMDggMTYwcy05My4zIDE2MC0yMDggMTYwelwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtNCB0ZXh0LWdyYXktNDAwIGRhcms6dGV4dC1ncmF5LTMwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk02OTkgMzUzaC00Ni45Yy0xMC4yIDAtMTkuOSA0LjktMjUuOSAxMy4zTDQ2OSA1ODQuM2wtNzEuMi05OC44Yy02LTguMy0xNS42LTEzLjMtMjUuOS0xMy4zSDMyNWMtNi41IDAtMTAuMyA3LjQtNi41IDEyLjdsMTI0LjYgMTcyLjhhMzEuOCAzMS44IDAgMCAwIDUxLjcgMGwyMTAuNi0yOTJjMy45LTUuMy4xLTEyLjctNi40LTEyLjd6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk01MTIgNjRDMjY0LjYgNjQgNjQgMjY0LjYgNjQgNTEyczIwMC42IDQ0OCA0NDggNDQ4czQ0OC0yMDAuNiA0NDgtNDQ4Uzc1OS40IDY0IDUxMiA2NHptMCA4MjBjLTIwNS40IDAtMzcyLTE2Ni42LTM3Mi0zNzJzMTY2LjYtMzcyIDM3Mi0zNzJzMzcyIDE2Ni42IDM3MiAzNzJzLTE2Ni42IDM3Mi0zNzIgMzcyelwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHRleHQtZ3JheS00MDAganVzdGlmeS1iZXR3ZWVuIHB5LTMgYm9yZGVyLWItMiBib3JkZXItZ3JheS0xMDAgZGFyazpib3JkZXItZ3JheS04MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXgtNFwiPjA0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGluZS10aHJvdWdoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvb2dsZSBsb2dvIGRlc2lnblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTUwMCBteC00XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTUxMiA2NEMyNjQuNiA2NCA2NCAyNjQuNiA2NCA1MTJzMjAwLjYgNDQ4IDQ0OCA0NDhzNDQ4LTIwMC42IDQ0OC00NDhTNzU5LjQgNjQgNTEyIDY0em0xOTMuNSAzMDEuN2wtMjEwLjYgMjkyYTMxLjggMzEuOCAwIDAgMS01MS43IDBMMzE4LjUgNDg0LjljLTMuOC01LjMgMC0xMi43IDYuNS0xMi43aDQ2LjljMTAuMiAwIDE5LjkgNC45IDI1LjkgMTMuM2w3MS4yIDk4LjhsMTU3LjItMjE4YzYtOC4zIDE1LjYtMTMuMyAyNS45LTEzLjNINjk5YzYuNSAwIDEwLjMgNy40IDYuNSAxMi43elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHRleHQtZ3JheS00MDAgIGp1c3RpZnktYmV0d2VlbiBweS0zIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMTAwIGRhcms6Ym9yZGVyLWdyYXktODAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0IHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm14LTRcIj4wNTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpbmUtdGhyb3VnaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZWFkZXIgbmF2aWdhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTUwMCBteC00XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTUxMiA2NEMyNjQuNiA2NCA2NCAyNjQuNiA2NCA1MTJzMjAwLjYgNDQ4IDQ0OCA0NDhzNDQ4LTIwMC42IDQ0OC00NDhTNzU5LjQgNjQgNTEyIDY0em0xOTMuNSAzMDEuN2wtMjEwLjYgMjkyYTMxLjggMzEuOCAwIDAgMS01MS43IDBMMzE4LjUgNDg0LjljLTMuOC01LjMgMC0xMi43IDYuNS0xMi43aDQ2LjljMTAuMiAwIDE5LjkgNC45IDI1LjkgMTMuM2w3MS4yIDk4LjhsMTU3LjItMjE4YzYtOC4zIDE1LjYtMTMuMyAyNS45LTEzLjNINjk5YzYuNSAwIDEwLjMgNy40IDYuNSAxMi43elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHRleHQtZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktMjAwIGp1c3RpZnktYmV0d2VlbiBweS0zIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMTAwIGRhcms6Ym9yZGVyLWdyYXktODAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0IHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm14LTRcIj4wNjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkludGVybmF0aW9uYWw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsZzptbC02IG1sLTIgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTQwMCBkYXJrOnRleHQtZ3JheS0zMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0yNTYgMzJDMTE0LjYgMzIgMCAxMjUuMSAwIDI0MGMwIDQ3LjYgMTkuOSA5MS4yIDUyLjkgMTI2LjNDMzggNDA1LjcgNyA0MzkuMSA2LjUgNDM5LjVjLTYuNiA3LTguNCAxNy4yLTQuNiAyNlMxNC40IDQ4MCAyNCA0ODBjNjEuNSAwIDExMC0yNS43IDEzOS4xLTQ2LjNDMTkyIDQ0Mi44IDIyMy4yIDQ0OCAyNTYgNDQ4YzE0MS40IDAgMjU2LTkzLjEgMjU2LTIwOFMzOTcuNCAzMiAyNTYgMzJ6bTAgMzY4Yy0yNi43IDAtNTMuMS00LjEtNzguNC0xMi4xbC0yMi43LTcuMmwtMTkuNSAxMy44Yy0xNC4zIDEwLjEtMzMuOSAyMS40LTU3LjUgMjljNy4zLTEyLjEgMTQuNC0yNS43IDE5LjktNDAuMmwxMC42LTI4LjFsLTIwLjYtMjEuOEM2OS43IDMxNC4xIDQ4IDI4Mi4yIDQ4IDI0MGMwLTg4LjIgOTMuMy0xNjAgMjA4LTE2MHMyMDggNzEuOCAyMDggMTYwcy05My4zIDE2MC0yMDggMTYwelwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm14LTQgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTQwMCBkYXJrOnRleHQtZ3JheS0zMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMzg0IDUxMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0zODQgMTQ0YzAtNDQuMi0zNS44LTgwLTgwLTgwcy04MCAzNS44LTgwIDgwYzAgMzYuNCAyNC4zIDY3LjEgNTcuNSA3Ni44Yy0uNiAxNi4xLTQuMiAyOC41LTExIDM2LjljLTE1LjQgMTkuMi00OS4zIDIyLjQtODUuMiAyNS43Yy0yOC4yIDIuNi01Ny40IDUuNC04MS4zIDE2Ljl2LTE0NGMzMi41LTEwLjIgNTYtNDAuNSA1Ni03Ni4zYzAtNDQuMi0zNS44LTgwLTgwLTgwUzAgMzUuOCAwIDgwYzAgMzUuOCAyMy41IDY2LjEgNTYgNzYuM3YxOTkuM0MyMy41IDM2NS45IDAgMzk2LjIgMCA0MzJjMCA0NC4yIDM1LjggODAgODAgODBzODAtMzUuOCA4MC04MGMwLTM0LTIxLjItNjMuMS01MS4yLTc0LjZjMy4xLTUuMiA3LjgtOS44IDE0LjktMTMuNGMxNi4yLTguMiA0MC40LTEwLjQgNjYuMS0xMi44YzQyLjItMy45IDkwLTguNCAxMTguMi00My40YzE0LTE3LjQgMjEuMS0zOS44IDIxLjYtNjcuOWMzMS42LTEwLjggNTQuNC00MC43IDU0LjQtNzUuOXpNODAgNjRjOC44IDAgMTYgNy4yIDE2IDE2cy03LjIgMTYtMTYgMTZzLTE2LTcuMi0xNi0xNnM3LjItMTYgMTYtMTZ6bTAgMzg0Yy04LjggMC0xNi03LjItMTYtMTZzNy4yLTE2IDE2LTE2czE2IDcuMiAxNiAxNnMtNy4yIDE2LTE2IDE2em0yMjQtMzIwYzguOCAwIDE2IDcuMiAxNiAxNnMtNy4yIDE2LTE2IDE2cy0xNi03LjItMTYtMTZzNy4yLTE2IDE2LTE2elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtNCB0ZXh0LWdyYXktNDAwIGRhcms6dGV4dC1ncmF5LTMwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk02OTkgMzUzaC00Ni45Yy0xMC4yIDAtMTkuOSA0LjktMjUuOSAxMy4zTDQ2OSA1ODQuM2wtNzEuMi05OC44Yy02LTguMy0xNS42LTEzLjMtMjUuOS0xMy4zSDMyNWMtNi41IDAtMTAuMyA3LjQtNi41IDEyLjdsMTI0LjYgMTcyLjhhMzEuOCAzMS44IDAgMCAwIDUxLjcgMGwyMTAuNi0yOTJjMy45LTUuMy4xLTEyLjctNi40LTEyLjd6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk01MTIgNjRDMjY0LjYgNjQgNjQgMjY0LjYgNjQgNTEyczIwMC42IDQ0OCA0NDggNDQ4czQ0OC0yMDAuNiA0NDgtNDQ4Uzc1OS40IDY0IDUxMiA2NHptMCA4MjBjLTIwNS40IDAtMzcyLTE2Ni42LTM3Mi0zNzJzMTY2LjYtMzcyIDM3Mi0zNzJzMzcyIDE2Ni42IDM3MiAzNzJzLTE2Ni42IDM3Mi0zNzIgMzcyelwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHRleHQtZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktMjAwIGp1c3RpZnktYmV0d2VlbiBweS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0IHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm14LTRcIj4wNzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlByb2R1Y3Rpb24gZGF0YTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtNCB0ZXh0LWdyYXktNDAwIGRhcms6dGV4dC1ncmF5LTMwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk02OTkgMzUzaC00Ni45Yy0xMC4yIDAtMTkuOSA0LjktMjUuOSAxMy4zTDQ2OSA1ODQuM2wtNzEuMi05OC44Yy02LTguMy0xNS42LTEzLjMtMjUuOS0xMy4zSDMyNWMtNi41IDAtMTAuMyA3LjQtNi41IDEyLjdsMTI0LjYgMTcyLjhhMzEuOCAzMS44IDAgMCAwIDUxLjcgMGwyMTAuNi0yOTJjMy45LTUuMy4xLTEyLjctNi40LTEyLjd6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk01MTIgNjRDMjY0LjYgNjQgNjQgMjY0LjYgNjQgNTEyczIwMC42IDQ0OCA0NDggNDQ4czQ0OC0yMDAuNiA0NDgtNDQ4Uzc1OS40IDY0IDUxMiA2NHptMCA4MjBjLTIwNS40IDAtMzcyLTE2Ni42LTM3Mi0zNzJzMTY2LjYtMzcyIDM3Mi0zNzJzMzcyIDE2Ni42IDM3MiAzNzJzLTE2Ni42IDM3Mi0zNzIgMzcyelwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgc206bWwtNCB4bDptci00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3ctbGcgcm91bmRlZC0yeGwgYmctd2hpdGUgZGFyazpiZy1ncmF5LTcwMCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcC00IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1tZCB0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEdvb2dsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC1zbSBwLTEgdGV4dC1ncmF5LTQwMCBib3JkZXIgcm91bmRlZCBib3JkZXItZ3JheS00MDAgbXItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBmaWxsPVwibm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTcuMjIyIDguNjg1YTEuNSAxLjUgMCAwIDEgMCAyLjYyOGwtMTAgNS40OThBMS41IDEuNSAwIDAgMSA1IDE1LjQ5NlY0LjUwMmExLjUgMS41IDAgMCAxIDIuMjIzLTEuMzE0bDEwIDUuNDk3elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTIgcHgtNCBiZy1ibHVlLTEwMCBkYXJrOmJnLWdyYXktODAwIHRleHQtZ3JheS02MDAgYm9yZGVyLWwtNCBib3JkZXItYmx1ZS01MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZmxleCBpdGVtcy1jZW50ZXIgZGFyazp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDAgbXItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBmaWxsPVwibm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTIgNWE4LjUgOC41IDAgMSAxIDAgMTdhOC41IDguNSAwIDAgMSAwLTE3em0wIDNhLjc1Ljc1IDAgMCAwLS43NDMuNjQ4bC0uMDA3LjEwMnY0LjVsLjAwNy4xMDJhLjc1Ljc1IDAgMCAwIDEuNDg2IDBsLjAwNy0uMTAydi00LjVsLS4wMDctLjEwMkEuNzUuNzUgMCAwIDAgMTIgOHptNy4xNy0yLjg3N2wuMDgyLjA2MWwxLjE0OSAxYS43NS43NSAwIDAgMS0uOTA0IDEuMTkzbC0uMDgxLS4wNjFsLTEuMTQ5LTFhLjc1Ljc1IDAgMCAxIC45MDMtMS4xOTN6TTE0LjI1IDIuNWEuNzUuNzUgMCAwIDEgLjEwMiAxLjQ5M0wxNC4yNSA0aC00LjVhLjc1Ljc1IDAgMCAxLS4xMDItMS40OTNMOS43NSAyLjVoNC41elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIHdpcmVmcmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC14cyBkYXJrOnRleHQtZ3JheS0yMDAgbXItMiBtbC0yIG1kOm1sLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI1IG1pbiAyMHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHAtMSB0ZXh0LWdyYXktNDAwIGJvcmRlciByb3VuZGVkIGJnLWJsdWUtNTAwIG1yLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxN1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgZmlsbD1cIm5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk05IDZhMSAxIDAgMCAxIDEgMXYxMGExIDEgMCAxIDEtMiAwVjdhMSAxIDAgMCAxIDEtMXptNiAwYTEgMSAwIDAgMSAxIDF2MTBhMSAxIDAgMSAxLTIgMFY3YTEgMSAwIDAgMSAxLTF6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBwLTQganVzdGlmeS1iZXR3ZWVuIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LW1kIHRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgU2xhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtc20gcC0xIHRleHQtZ3JheS00MDAgYm9yZGVyIHJvdW5kZWQgYm9yZGVyLWdyYXktNDAwIG1yLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgZmlsbD1cIm5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTE3LjIyMiA4LjY4NWExLjUgMS41IDAgMCAxIDAgMi42MjhsLTEwIDUuNDk4QTEuNSAxLjUgMCAwIDEgNSAxNS40OTZWNC41MDJhMS41IDEuNSAwIDAgMSAyLjIyMy0xLjMxNGwxMCA1LjQ5N3pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yIHB4LTQgdGV4dC1ncmF5LTYwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyLWItMiBib3JkZXItZ3JheS0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmbGV4IGl0ZW1zLWNlbnRlciBkYXJrOnRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBmaWxsPVwibm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTIgNWE4LjUgOC41IDAgMSAxIDAgMTdhOC41IDguNSAwIDAgMSAwLTE3em0wIDNhLjc1Ljc1IDAgMCAwLS43NDMuNjQ4bC0uMDA3LjEwMnY0LjVsLjAwNy4xMDJhLjc1Ljc1IDAgMCAwIDEuNDg2IDBsLjAwNy0uMTAydi00LjVsLS4wMDctLjEwMkEuNzUuNzUgMCAwIDAgMTIgOHptNy4xNy0yLjg3N2wuMDgyLjA2MWwxLjE0OSAxYS43NS43NSAwIDAgMS0uOTA0IDEuMTkzbC0uMDgxLS4wNjFsLTEuMTQ5LTFhLjc1Ljc1IDAgMCAxIC45MDMtMS4xOTN6TTE0LjI1IDIuNWEuNzUuNzUgMCAwIDEgLjEwMiAxLjQ5M0wxNC4yNSA0aC00LjVhLjc1Ljc1IDAgMCAxLS4xMDItMS40OTNMOS43NSAyLjVoNC41elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ZXJuYXRpb25hbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS00MDAgbXItMiBtbC0yIG1kOm1sLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMwIG1pblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtc20gcC0xIHRleHQtZ3JheS00MDAgYm9yZGVyIHJvdW5kZWQgYm9yZGVyLWdyYXktNDAwIG1yLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBmaWxsPVwibm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTE3LjIyMiA4LjY4NWExLjUgMS41IDAgMCAxIDAgMi42MjhsLTEwIDUuNDk4QTEuNSAxLjUgMCAwIDEgNSAxNS40OTZWNC41MDJhMS41IDEuNSAwIDAgMSAyLjIyMy0xLjMxNGwxMCA1LjQ5N3pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTIgcHgtNCB0ZXh0LWdyYXktNjAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBib3JkZXItYi0yIGJvcmRlci1ncmF5LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZsZXggaXRlbXMtY2VudGVyIGRhcms6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGZpbGw9XCJub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMiA1YTguNSA4LjUgMCAxIDEgMCAxN2E4LjUgOC41IDAgMCAxIDAtMTd6bTAgM2EuNzUuNzUgMCAwIDAtLjc0My42NDhsLS4wMDcuMTAydjQuNWwuMDA3LjEwMmEuNzUuNzUgMCAwIDAgMS40ODYgMGwuMDA3LS4xMDJ2LTQuNWwtLjAwNy0uMTAyQS43NS43NSAwIDAgMCAxMiA4em03LjE3LTIuODc3bC4wODIuMDYxbDEuMTQ5IDFhLjc1Ljc1IDAgMCAxLS45MDQgMS4xOTNsLS4wODEtLjA2MWwtMS4xNDktMWEuNzUuNzUgMCAwIDEgLjkwMy0xLjE5M3pNMTQuMjUgMi41YS43NS43NSAwIDAgMSAuMTAyIDEuNDkzTDE0LjI1IDRoLTQuNWEuNzUuNzUgMCAwIDEtLjEwMi0xLjQ5M0w5Ljc1IDIuNWg0LjV6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBTbGFjayBsb2dvIGRlc2lnblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS00MDAgbXItMiBtbC0yIG1kOm1sLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMwIG1pblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtc20gcC0xIHRleHQtZ3JheS00MDAgYm9yZGVyIHJvdW5kZWQgYm9yZGVyLWdyYXktNDAwIG1yLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBmaWxsPVwibm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTE3LjIyMiA4LjY4NWExLjUgMS41IDAgMCAxIDAgMi42MjhsLTEwIDUuNDk4QTEuNSAxLjUgMCAwIDEgNSAxNS40OTZWNC41MDJhMS41IDEuNSAwIDAgMSAyLjIyMy0xLjMxNGwxMCA1LjQ5N3pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTIgcHgtNCB0ZXh0LWdyYXktNjAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZsZXggaXRlbXMtY2VudGVyIGRhcms6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGZpbGw9XCJub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMiA1YTguNSA4LjUgMCAxIDEgMCAxN2E4LjUgOC41IDAgMCAxIDAtMTd6bTAgM2EuNzUuNzUgMCAwIDAtLjc0My42NDhsLS4wMDcuMTAydjQuNWwuMDA3LjEwMmEuNzUuNzUgMCAwIDAgMS40ODYgMGwuMDA3LS4xMDJ2LTQuNWwtLjAwNy0uMTAyQS43NS43NSAwIDAgMCAxMiA4em03LjE3LTIuODc3bC4wODIuMDYxbDEuMTQ5IDFhLjc1Ljc1IDAgMCAxLS45MDQgMS4xOTNsLS4wODEtLjA2MWwtMS4xNDktMWEuNzUuNzUgMCAwIDEgLjkwMy0xLjE5M3pNMTQuMjUgMi41YS43NS43NSAwIDAgMSAuMTAyIDEuNDkzTDE0LjI1IDRoLTQuNWEuNzUuNzUgMCAwIDEtLjEwMi0xLjQ5M0w5Ljc1IDIuNWg0LjV6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBEYWhib2FyZCB0ZW1wbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS00MDAgbXItMiBtbC0yIG1kOm1sLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMwIG1pblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtc20gcC0xIHRleHQtZ3JheS00MDAgYm9yZGVyIHJvdW5kZWQgYm9yZGVyLWdyYXktNDAwIG1yLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBmaWxsPVwibm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTE3LjIyMiA4LjY4NWExLjUgMS41IDAgMCAxIDAgMi42MjhsLTEwIDUuNDk4QTEuNSAxLjUgMCAwIDEgNSAxNS40OTZWNC41MDJhMS41IDEuNSAwIDAgMSAyLjIyMy0xLjMxNGwxMCA1LjQ5N3pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LTEvMiB4bDp3LTEvM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy1sZyByb3VuZGVkLTJ4bCBwLTQgYmctd2hpdGUgZGFyazpiZy1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZCBzaGFkb3ctc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGVmdCBmb250LWJvbGQgdGV4dC14bCB0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWMgMjAyMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicC0yIHJvdW5kZWQtZnVsbCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEzLjgzIDE5YTEgMSAwIDAgMS0uNzgtLjM3bC00LjgzLTZhMSAxIDAgMCAxIDAtMS4yN2w1LTZhMSAxIDAgMCAxIDEuNTQgMS4yOEwxMC4yOSAxMmw0LjMyIDUuMzZhMSAxIDAgMCAxLS43OCAxLjY0elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwLTIgcm91bmRlZC1mdWxsIGJnLWJsdWUtNTAwIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTAgMTlhMSAxIDAgMCAxLS42NC0uMjNhMSAxIDAgMCAxLS4xMy0xLjQxTDEzLjcxIDEyTDkuMzkgNi42M2ExIDEgMCAwIDEgLjE1LTEuNDFhMSAxIDAgMCAxIDEuNDYuMTVsNC44MyA2YTEgMSAwIDAgMSAwIDEuMjdsLTUgNkExIDEgMCAwIDEgMTAgMTl6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItbXgtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInctZnVsbCBkYXJrOnRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyBcIj5TPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgXCI+TTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zIFwiPlQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyBcIj5XPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgXCI+VDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zIFwiPkY8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyBcIj5TPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgZGFyazp0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zICB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktMzAwIGRhcms6dGV4dC1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyAgdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTMwMCBkYXJrOnRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgIHRleHQtY2VudGVyIHRleHQtZ3JheS0zMDAgZGFyazp0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyN1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zICB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktMzAwIGRhcms6dGV4dC1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyAgdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTMwMCBkYXJrOnRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgIHRleHQtY2VudGVyIHRleHQtZ3JheS0zMDAgZGFyazp0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zICBob3Zlcjp0ZXh0LWJsdWUtNTAwIHRleHQtY2VudGVyIHRleHQtZ3JheS04MDAgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zICBob3Zlcjp0ZXh0LWJsdWUtNTAwIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyByZWxhdGl2ZSBweC0xICBob3Zlcjp0ZXh0LWJsdWUtNTAwIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSByb3VuZGVkLWZ1bGwgaC0yIHctMiBiZy1ibHVlLTUwMCBib3R0b20tMCBsZWZ0LTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMlwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyAgaG92ZXI6dGV4dC1ibHVlLTUwMCB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zICBob3Zlcjp0ZXh0LWJsdWUtNTAwIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgIGhvdmVyOnRleHQtYmx1ZS01MDAgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyAgaG92ZXI6dGV4dC1ibHVlLTUwMCB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgN1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zIG1kOnB4LTIgcmVsYXRpdmUgbGc6cHgtMyBob3Zlcjp0ZXh0LWJsdWUtNTAwIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSByb3VuZGVkLWZ1bGwgaC0yIHctMiBiZy15ZWxsb3ctNTAwIGJvdHRvbS0wIGxlZnQtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgIGhvdmVyOnRleHQtYmx1ZS01MDAgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyAgaG92ZXI6dGV4dC1ibHVlLTUwMCB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyAgaG92ZXI6dGV4dC1ibHVlLTUwMCB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyAgaG92ZXI6dGV4dC1ibHVlLTUwMCB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyAgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZSBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicC0yIHJvdW5kZWQtZnVsbCBiZy1ibHVlLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zICBob3Zlcjp0ZXh0LWJsdWUtNTAwIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtMiBtZDpweC0zICBob3Zlcjp0ZXh0LWJsdWUtNTAwIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxNVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgIGhvdmVyOnRleHQtYmx1ZS01MDAgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgIGhvdmVyOnRleHQtYmx1ZS01MDAgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgIGhvdmVyOnRleHQtYmx1ZS01MDAgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgIGhvdmVyOnRleHQtYmx1ZS01MDAgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgIGhvdmVyOnRleHQtYmx1ZS01MDAgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgIGhvdmVyOnRleHQtYmx1ZS01MDAgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgIGhvdmVyOnRleHQtYmx1ZS01MDAgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyAgaG92ZXI6dGV4dC1ibHVlLTUwMCB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyAgaG92ZXI6dGV4dC1ibHVlLTUwMCB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyAgaG92ZXI6dGV4dC1ibHVlLTUwMCByZWxhdGl2ZSB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIHJvdW5kZWQtZnVsbCBoLTIgdy0yIGJnLXJlZC01MDAgYm90dG9tLTAgbGVmdC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgIGhvdmVyOnRleHQtYmx1ZS01MDAgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgIGhvdmVyOnRleHQtYmx1ZS01MDAgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgIGhvdmVyOnRleHQtYmx1ZS01MDAgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC0yIG1kOnB4LTMgIGhvdmVyOnRleHQtYmx1ZS01MDAgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyAgaG92ZXI6dGV4dC1ibHVlLTUwMCB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMzBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHB4LTIgbWQ6cHgtMyAgaG92ZXI6dGV4dC1ibHVlLTUwMCB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMzFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LWxnIHJvdW5kZWQtMnhsIHAtNCBiZy13aGl0ZSBkYXJrOmJnLWdyYXktNzAwIHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtbWQgdGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG15LTYgc3BhY2UteC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJibG9jayByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJwcm9maWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3BlcnNvbi8xLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LWF1dG8gb2JqZWN0LWNvdmVyIHJvdW5kZWQtZnVsbCBoLTEwIHctMTAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktOTAwIGZvbnQtc2VtaWJvbGQgZGFyazp0ZXh0LXdoaXRlIG1sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hhcmxpZSBSYWJpbGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNDAwIGRhcms6dGV4dC1ncmF5LTMwMCBtbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhleSBKb2huICEgRG8geW91IHJlYWQgdGhlIE5leHRKUyBkb2MgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbXktNiBzcGFjZS14LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJsb2NrIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInByb2ZpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvcGVyc29uLzUuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtYXV0byBvYmplY3QtY292ZXIgcm91bmRlZC1mdWxsIGgtMTAgdy0xMCBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS05MDAgZm9udC1zZW1pYm9sZCBkYXJrOnRleHQtd2hpdGUgbWwtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXJpZSBMb3VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTQwMCBkYXJrOnRleHQtZ3JheS0zMDAgbWwtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBObyBJIHRoaW5rIHRoZSBkb2cgaXMgYmV0dGVyLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBteS02IHNwYWNlLXgtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmxvY2sgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwicHJvZmlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9wZXJzb24vNi5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvIG9iamVjdC1jb3ZlciByb3VuZGVkLWZ1bGwgaC0xMCB3LTEwIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTkwMCBmb250LXNlbWlib2xkIGRhcms6dGV4dC13aGl0ZSBtbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl2YW4gQnVja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNDAwIGRhcms6dGV4dC1ncmF5LTMwMCBtbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcmlvdXNseSA/IGhhaGEgQm9iIGlzIG5vdCBhIGNoaWxkcmVuICFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG15LTYgc3BhY2UteC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJibG9jayByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJwcm9maWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3BlcnNvbi83LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LWF1dG8gb2JqZWN0LWNvdmVyIHJvdW5kZWQtZnVsbCBoLTEwIHctMTAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktOTAwIGZvbnQtc2VtaWJvbGQgZGFyazp0ZXh0LXdoaXRlIG1sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFyaW5hIEZhcmdhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS00MDAgZGFyazp0ZXh0LWdyYXktMzAwIG1sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRG8geW91IG5lZWQgdGhhdCBkZWlzZ24gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWVOYW1lPVwiXCI+XHJcbiAgICAgICAge2N1cnJlbnRVc2VyICYmIGN1cnJlbnRVc2VyLmVtYWlsfVxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17bG9nT3V0fT5sb2dvdXQ8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGFzaGJvYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9