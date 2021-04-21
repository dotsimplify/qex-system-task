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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/AuthContext */ "./context/AuthContext.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_verification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/verification */ "./components/verification.js");





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
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Navbar__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
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
                        lineNumber: 46,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("stop", {
                        stopColor: "#FF0057",
                        offset: "86.1354%"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 51,
                        columnNumber: 27
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 39,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 38,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      d: "M0,60.8538006 C0,27.245261 27.245304,0 60.8542121,0 L117.027019,0 L255.996549,0 L255.996549,86.5999776 C255.996549,103.404155 242.374096,117.027222 225.569919,117.027222 L145.80812,117.027222 C130.003299,117.277829 117.242615,130.060011 117.027019,145.872817 L117.027019,335.28252 C117.027019,352.087312 103.404567,365.709764 86.5997749,365.709764 L0,365.709764 L0,117.027222 L0,60.8538006 Z",
                      fill: "#001B38"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 55,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
                      fill: "url(#linearGradient-1)",
                      transform: "translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) ",
                      cx: "147.013244",
                      cy: "147.014675",
                      r: "78.9933938"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 59,
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
                      lineNumber: 66,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 31,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
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
                          lineNumber: 91,
                          columnNumber: 29
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 84,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 83,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "mx-4 text-sm font-normal",
                      children: "Dashboard"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 94,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 79,
                    columnNumber: 23
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
                          lineNumber: 111,
                          columnNumber: 29
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 103,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 102,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "mx-4 text-sm font-normal",
                      children: "Profile"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 114,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 98,
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
                          lineNumber: 131,
                          columnNumber: 29
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 123,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 122,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "mx-4 text-sm font-normal",
                      children: "Logout"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 134,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 118,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 15
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
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                            d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 156,
                            columnNumber: 31
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 147,
                          columnNumber: 29
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 146,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                        className: "absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                          d: "M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 164,
                          columnNumber: 29
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 159,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        type: "text",
                        className: "block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input",
                        placeholder: "Search"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 166,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "absolute right-0 hidden h-auto px-2 py-1 mr-2 text-xs text-gray-400 border border-gray-300 rounded-2xl md:block",
                        children: "+"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 171,
                        columnNumber: 27
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 145,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 144,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "text-blue-700 font-semibold",
                      children: currentUser && currentUser.email
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 177,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 176,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 143,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
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
                          lineNumber: 191,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          href: news.url,
                          target: "_blank",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                            className: "break-words font-semibold text-xl hover:text-blue-600",
                            children: news.title
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 197,
                            columnNumber: 31
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 196,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 190,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 189,
                      columnNumber: 25
                    }, _this)
                  }, news.url, false, {
                    fileName: _jsxFileName,
                    lineNumber: 188,
                    columnNumber: 23
                  }, _this);
                })]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }, _this)]
    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_verification__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 9
    }, _this)
  }, void 0, false);
};

_s(Dashboard, "iSi0z3iCDOuHeAljQ81Mcu7Yg+Q=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQuanMiXSwibmFtZXMiOlsiRGFzaGJvYXJkIiwicHJvcHMiLCJ1c2VBdXRoIiwibG9nb3V0IiwiY3VycmVudFVzZXIiLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJsb2dPdXQiLCJlIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJlbWFpbCIsImRhdGEiLCJuZXdzIiwiYXJ0aWNsZXMiLCJtYXAiLCJ1cmxUb0ltYWdlIiwidGl0bGUiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsaUJBQ0tDLG9FQUFPLEVBRFo7QUFBQSxNQUNuQkMsTUFEbUIsWUFDbkJBLE1BRG1CO0FBQUEsTUFDWEMsV0FEVyxZQUNYQSxXQURXOztBQUFBLGtCQUVEQyxzREFBUSxDQUFDLEVBQUQsQ0FGUDtBQUFBLE1BRXBCQyxLQUZvQjtBQUFBLE1BRWJDLFFBRmE7O0FBRzNCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBQ0EsTUFBTUMsTUFBTTtBQUFBLGdVQUFHLGlCQUFPQyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVYSixzQkFBUSxDQUFDLEVBQUQsQ0FBUjtBQUZXO0FBQUEscUJBR0xKLE1BQU0sRUFIRDs7QUFBQTtBQUlYUyxxQkFBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7QUFDQUwsb0JBQU0sQ0FBQ00sSUFBUCxDQUFZLFFBQVo7QUFMVztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQU9YUCxzQkFBUSxDQUFDLHFDQUFELENBQVI7O0FBUFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBTkcs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O0FBQUE7QUFBQTtBQUFBLHFCQTVDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBakhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBLG9CQURVLGdCQTZMVixxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBOUxKLG1CQURGO0FBbU1ELENBak5EOztHQUFNdEIsUztVQUM0QkUsNEQsRUFFakJPLHFEOzs7S0FIWFQsUztBQW1OU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLmJiYjFlMzEzMTJiNzZhNDY1MjljLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi9jb250ZXh0L0F1dGhDb250ZXh0XCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyXCI7XHJcbmltcG9ydCBWZXJpZmljYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvdmVyaWZpY2F0aW9uXCI7XHJcbmNvbnN0IERhc2hib2FyZCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgbG9nb3V0LCBjdXJyZW50VXNlciB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgbG9nT3V0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHNldEVycm9yKFwiXCIpO1xyXG4gICAgICBhd2FpdCBsb2dvdXQoKTtcclxuICAgICAgY29uc29sZS5sb2coXCJsb2cgb3V0IHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRFcnJvcihcIkVycm9yIHdoaWxlIGxvZ2dpbmcgb3V0ICwgVHJ5IGFnYWluXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtjdXJyZW50VXNlciA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiYmctZ3JheS0xMDAgZGFyazpiZy1ncmF5LTgwMCByb3VuZGVkLTJ4bCByZWxhdGl2ZSBoLXNjcmVlbiBvdmVyZmxvdy1oaWRkZW4gcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gaGlkZGVuIGxnOmJsb2NrIG15LTQgbWwtNCBzaGFkb3ctbGcgcmVsYXRpdmUgdy04MFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBoLWZ1bGwgcm91bmRlZC0yeGwgZGFyazpiZy1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB0LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjM1XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjMwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjU2IDM2NlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHgxPVwiMTIuNTE4OTUzNCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHkxPVwiODUuMjEyODYxMSVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHgyPVwiODguMjI4Mjk1OSVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHkyPVwiMTAuMDIyNTQ5NyVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibGluZWFyR3JhZGllbnQtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3RvcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcENvbG9yPVwiI0ZGMDA1N1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wT3BhY2l0eT1cIjAuMTZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PVwiMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L3N0b3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI0ZGMDA1N1wiIG9mZnNldD1cIjg2LjEzNTQlXCI+PC9zdG9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0wLDYwLjg1MzgwMDYgQzAsMjcuMjQ1MjYxIDI3LjI0NTMwNCwwIDYwLjg1NDIxMjEsMCBMMTE3LjAyNzAxOSwwIEwyNTUuOTk2NTQ5LDAgTDI1NS45OTY1NDksODYuNTk5OTc3NiBDMjU1Ljk5NjU0OSwxMDMuNDA0MTU1IDI0Mi4zNzQwOTYsMTE3LjAyNzIyMiAyMjUuNTY5OTE5LDExNy4wMjcyMjIgTDE0NS44MDgxMiwxMTcuMDI3MjIyIEMxMzAuMDAzMjk5LDExNy4yNzc4MjkgMTE3LjI0MjYxNSwxMzAuMDYwMDExIDExNy4wMjcwMTksMTQ1Ljg3MjgxNyBMMTE3LjAyNzAxOSwzMzUuMjgyNTIgQzExNy4wMjcwMTksMzUyLjA4NzMxMiAxMDMuNDA0NTY3LDM2NS43MDk3NjQgODYuNTk5Nzc0OSwzNjUuNzA5NzY0IEwwLDM2NS43MDk3NjQgTDAsMTE3LjAyNzIyMiBMMCw2MC44NTM4MDA2IFpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjMDAxQjM4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI2xpbmVhckdyYWRpZW50LTEpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTQ3LjAxMzI0NCwgMTQ3LjAxNDY3NSkgcm90YXRlKDkwLjAwMDAwMCkgdHJhbnNsYXRlKC0xNDcuMDEzMjQ0LCAtMTQ3LjAxNDY3NSkgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjeD1cIjE0Ny4wMTMyNDRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGN5PVwiMTQ3LjAxNDY3NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcj1cIjc4Ljk5MzM5MzhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9jaXJjbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNsaW5lYXJHcmFkaWVudC0xKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eT1cIjAuNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE0Ny4wMTMyNDQsIDE0Ny4wMTQ2NzUpIHJvdGF0ZSg5MC4wMDAwMDApIHRyYW5zbGF0ZSgtMTQ3LjAxMzI0NCwgLTE0Ny4wMTQ2NzUpIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3g9XCIxNDcuMDEzMjQ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjeT1cIjE0Ny4wMTQ2NzVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHI9XCI3OC45OTMzOTM4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvY2lyY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJtdC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBmb250LXRoaW4gdXBwZXJjYXNlIHRleHQtYmx1ZS01MDAgZmxleCBpdGVtcy1jZW50ZXIgcC00IG15LTIgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGp1c3RpZnktc3RhcnQgYmctZ3JhZGllbnQtdG8tciBmcm9tLXdoaXRlIHRvLWJsdWUtMTAwIGJvcmRlci1yLTQgYm9yZGVyLWJsdWUtNTAwIGRhcms6ZnJvbS1ncmF5LTcwMCBkYXJrOnRvLWdyYXktODAwIGJvcmRlci1yLTQgYm9yZGVyLWJsdWUtNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMDQ4IDE3OTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMDcwIDExNzhsMzA2LTU2NGgtNjU0bC0zMDYgNTY0aDY1NHptNzIyLTI4MnEwIDE4Mi03MSAzNDh0LTE5MSAyODYtMjg2IDE5MS0zNDggNzEtMzQ4LTcxLTI4Ni0xOTEtMTkxLTI4Ni03MS0zNDggNzEtMzQ4IDE5MS0yODYgMjg2LTE5MSAzNDgtNzEgMzQ4IDcxIDI4NiAxOTEgMTkxIDI4NiA3MSAzNDh6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm14LTQgdGV4dC1zbSBmb250LW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIERhc2hib2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZm9udC10aGluIHVwcGVyY2FzZSB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTIwMCBmbGV4IGl0ZW1zLWNlbnRlciBwLTQgbXktMiB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAganVzdGlmeS1zdGFydCBob3Zlcjp0ZXh0LWJsdWUtNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibS1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjA0OCAxNzkyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTAyNCAxMTMxcTAtNjQtOS0xMTcuNXQtMjkuNS0xMDMtNjAuNS03OC05Ny0yOC41cS02IDQtMzAgMTh0LTM3LjUgMjEuNS0zNS41IDE3LjUtNDMgMTQuNS00MiA0LjUtNDItNC41LTQzLTE0LjUtMzUuNS0xNy41LTM3LjUtMjEuNS0zMC0xOHEtNTcgMC05NyAyOC41dC02MC41IDc4LTI5LjUgMTAzLTkgMTE3LjUgMzcgMTA2LjUgOTEgNDIuNWg1MTJxNTQgMCA5MS00Mi41dDM3LTEwNi41em0tMTU3LTUyMHEwLTk0LTY2LjUtMTYwLjV0LTE2MC41LTY2LjUtMTYwLjUgNjYuNS02Ni41IDE2MC41IDY2LjUgMTYwLjUgMTYwLjUgNjYuNSAxNjAuNS02Ni41IDY2LjUtMTYwLjV6bTkyNSA1MDl2LTY0cTAtMTQtOS0yM3QtMjMtOWgtNTc2cS0xNCAwLTIzIDl0LTkgMjN2NjRxMCAxNCA5IDIzdDIzIDloNTc2cTE0IDAgMjMtOXQ5LTIzem0wLTI2MHYtNTZxMC0xNS0xMC41LTI1LjV0LTI1LjUtMTAuNWgtNTY4cS0xNSAwLTI1LjUgMTAuNXQtMTAuNSAyNS41djU2cTAgMTUgMTAuNSAyNS41dDI1LjUgMTAuNWg1NjhxMTUgMCAyNS41LTEwLjV0MTAuNS0yNS41em0wLTI1MnYtNjRxMC0xNC05LTIzdC0yMy05aC01NzZxLTE0IDAtMjMgOXQtOSAyM3Y2NHEwIDE0IDkgMjN0MjMgOWg1NzZxMTQgMCAyMy05dDktMjN6bTI1Ni0zMjB2MTIxNnEwIDY2LTQ3IDExM3QtMTEzIDQ3aC0zNTJ2LTk2cTAtMTQtOS0yM3QtMjMtOWgtNjRxLTE0IDAtMjMgOXQtOSAyM3Y5NmgtNzY4di05NnEwLTE0LTktMjN0LTIzLTloLTY0cS0xNCAwLTIzIDl0LTkgMjN2OTZoLTM1MnEtNjYgMC0xMTMtNDd0LTQ3LTExM3YtMTIxNnEwLTY2IDQ3LTExM3QxMTMtNDdoMTcyOHE2NiAwIDExMyA0N3Q0NyAxMTN6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm14LTQgdGV4dC1zbSBmb250LW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFByb2ZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZm9udC10aGluIHVwcGVyY2FzZSB0ZXh0LWdyYXktNTAwIGN1cnNvci1wb2ludGVyIGRhcms6dGV4dC1ncmF5LTIwMCBmbGV4IGl0ZW1zLWNlbnRlciBwLTQgbXktMiBmb2N1czpvdXRsaW5lLW5vbmUgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGp1c3RpZnktc3RhcnQgaG92ZXI6dGV4dC1ibHVlLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2xvZ091dH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm0tYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwNDggMTc5MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTY4NSA0ODNxMTYgMCAyNy41LTExLjV0MTEuNS0yNy41LTExLjUtMjcuNS0yNy41LTExLjUtMjcgMTEuNS0xMSAyNy41IDExIDI3LjUgMjcgMTEuNXptNDIyIDBxMTYgMCAyNy0xMS41dDExLTI3LjUtMTEtMjcuNS0yNy0xMS41LTI3LjUgMTEuNS0xMS41IDI3LjUgMTEuNSAyNy41IDI3LjUgMTEuNXptLTgxMiAxODRxNDIgMCA3MiAzMHQzMCA3MnY0MzBxMCA0My0yOS41IDczdC03Mi41IDMwLTczLTMwLTMwLTczdi00MzBxMC00MiAzMC03MnQ3My0zMHptMTA2MCAxOXY2NjZxMCA0Ni0zMiA3OHQtNzcgMzJoLTc1djIyN3EwIDQzLTMwIDczdC03MyAzMC03My0zMC0zMC03M3YtMjI3aC0xMzh2MjI3cTAgNDMtMzAgNzN0LTczIDMwcS00MiAwLTcyLTMwdC0zMC03M2wtMS0yMjdoLTc0cS00NiAwLTc4LTMydC0zMi03OHYtNjY2aDkxOHptLTIzMi00MDVxMTA3IDU1IDE3MSAxNTMuNXQ2NCAyMTUuNWgtOTI1cTAtMTE3IDY0LTIxNS41dDE3Mi0xNTMuNWwtNzEtMTMxcS03LTEzIDUtMjAgMTMtNiAyMCA2bDcyIDEzMnE5NS00MiAyMDEtNDJ0MjAxIDQybDcyLTEzMnE3LTEyIDIwLTYgMTIgNyA1IDIwem00NzcgNDg4djQzMHEwIDQzLTMwIDczdC03MyAzMHEtNDIgMC03Mi0zMHQtMzAtNzN2LTQzMHEwLTQzIDMwLTcyLjV0NzItMjkuNXE0MyAwIDczIDI5LjV0MzAgNzIuNXpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXgtNCB0ZXh0LXNtIGZvbnQtbm9ybWFsXCI+TG9nb3V0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbCBwbC0wIG1kOnAtNCBtZDpzcGFjZS15LTRcIj5cclxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwidy1mdWxsIHNoYWRvdy1sZyBiZy13aGl0ZSBkYXJrOmJnLWdyYXktNzAwIGl0ZW1zLWNlbnRlciBoLTE2IHJvdW5kZWQtMnhsIHotNDBcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTIwIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaC1mdWxsIHB4LTMgbXgtYXV0byBmbGV4LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaXRlbXMtY2VudGVyIHBsLTEgZmxleCB3LWZ1bGwgbGc6bWF4LXctNjggc206cHItMiBzbTptbC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciByZWxhdGl2ZSBsZWZ0LTAgei01MCBmbGV4IHctMy80IGgtYXV0byBoLWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciB3LWZ1bGwgbGc6dy02NCBoLWZ1bGwgZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHotNTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmxvY2sgdy1hdXRvIGgtMTAgcC0zIHByLTIgdGV4dC1zbSB0ZXh0LWdyYXktNTAwIHVwcGVyY2FzZSBjdXJzb3ItcG9pbnRlciBzbTpoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LTUgaC01XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEwIDE0bDItMm0wIDBsMi0ybS0yIDJsLTItMm0yIDJsMiAybTctMmE5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTAgei0yMCBoaWRkZW4gdy00IGgtNCBtbC00IHRleHQtZ3JheS01MDAgcG9pbnRlci1ldmVudHMtbm9uZSBmaWxsLWN1cnJlbnQgZ3JvdXAtaG92ZXI6dGV4dC1ncmF5LTQwMCBzbTpibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIuOSAxNC4zMmE4IDggMCAxIDEgMS40MS0xLjQxbDUuMzUgNS4zMy0xLjQyIDEuNDItNS4zMy01LjM0ek04IDE0QTYgNiAwIDEgMCA4IDJhNiA2IDAgMCAwIDAgMTJ6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIHB5LTEuNSBwbC0xMCBwci00IGxlYWRpbmctbm9ybWFsIHJvdW5kZWQtMnhsIGZvY3VzOmJvcmRlci10cmFuc3BhcmVudCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS01MDAgcmluZy1vcGFjaXR5LTkwIGJnLWdyYXktMTAwIGRhcms6YmctZ3JheS04MDAgdGV4dC1ncmF5LTQwMCBhYS1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgaGlkZGVuIGgtYXV0byBweC0yIHB5LTEgbXItMiB0ZXh0LXhzIHRleHQtZ3JheS00MDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLTJ4bCBtZDpibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBwLTEgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmQgdy0xLzQgbWwtNSBtci00IHNtOm1yLTAgc206cmlnaHQtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNzAwIGZvbnQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFVzZXIgJiYgY3VycmVudFVzZXIuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1hdXRvIGgtc2NyZWVuIHBiLTI0IHB0LTIgcHItMiBwbC0yIG1kOnB0LTAgbWQ6cHItMCBtZDpwbC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBmbGV4LXdyYXAgc206ZmxleC1yb3cgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKHByb3BzLmRhdGEubmV3cy5hcnRpY2xlcyl9XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRhdGEubmV3cy5hcnRpY2xlcy5tYXAoKG5ld3MpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtuZXdzLnVybH0gY2xhc3NOYW1lPVwidy1mdWxsIHNtOnctMS8yIHhsOnctMS8zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3ctbGcgbS0yIHJvdW5kZWQtMnhsIHAtNCBiZy13aGl0ZSBkYXJrOmJnLWdyYXktNzAwIHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtuZXdzLnVybFRvSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17bmV3cy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtuZXdzLnVybH0gdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJyZWFrLXdvcmRzIGZvbnQtc2VtaWJvbGQgdGV4dC14bCBob3Zlcjp0ZXh0LWJsdWUtNjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25ld3MudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPFZlcmlmaWNhdGlvbiAvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==