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
        lineNumber: 24,
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
                        lineNumber: 45,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("stop", {
                        stopColor: "#FF0057",
                        offset: "86.1354%"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 50,
                        columnNumber: 27
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 38,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 37,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      d: "M0,60.8538006 C0,27.245261 27.245304,0 60.8542121,0 L117.027019,0 L255.996549,0 L255.996549,86.5999776 C255.996549,103.404155 242.374096,117.027222 225.569919,117.027222 L145.80812,117.027222 C130.003299,117.277829 117.242615,130.060011 117.027019,145.872817 L117.027019,335.28252 C117.027019,352.087312 103.404567,365.709764 86.5997749,365.709764 L0,365.709764 L0,117.027222 L0,60.8538006 Z",
                      fill: "#001B38"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 54,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
                      fill: "url(#linearGradient-1)",
                      transform: "translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) ",
                      cx: "147.013244",
                      cy: "147.014675",
                      r: "78.9933938"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 58,
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
                      lineNumber: 65,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 53,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 30,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
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
                          lineNumber: 90,
                          columnNumber: 29
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 83,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 82,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "mx-4 text-sm font-normal",
                      children: "Dashboard"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 93,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 78,
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
                          lineNumber: 110,
                          columnNumber: 29
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 102,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 101,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "mx-4 text-sm font-normal",
                      children: "News"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 113,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 97,
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
                          lineNumber: 128,
                          columnNumber: 29
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 120,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 119,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "mx-4 text-sm font-normal",
                      children: "Logout"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 131,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 115,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
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
                            lineNumber: 153,
                            columnNumber: 31
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 144,
                          columnNumber: 29
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 143,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                        className: "absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                          d: "M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 161,
                          columnNumber: 29
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 156,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        type: "text",
                        className: "block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input",
                        placeholder: "Search"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 163,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "absolute right-0 hidden h-auto px-2 py-1 mr-2 text-xs text-gray-400 border border-gray-300 rounded-2xl md:block",
                        children: "+"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 168,
                        columnNumber: 27
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 142,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 141,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "text-blue-700 font-semibold",
                      children: currentUser && currentUser.email
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 174,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 173,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
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
                          lineNumber: 188,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          href: news.url,
                          target: "_blank",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                            className: "break-words font-semibold text-xl hover:text-blue-600",
                            children: news.title
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 194,
                            columnNumber: 31
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 193,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 187,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 186,
                      columnNumber: 25
                    }, _this)
                  }, news.url, false, {
                    fileName: _jsxFileName,
                    lineNumber: 185,
                    columnNumber: 23
                  }, _this);
                })]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 182,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }, _this)]
    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "text-center min-h-screen flex justify-center items-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "font-semibold text-blue-700 text-2xl",
        children: "Please Log in to visit this page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "font-semibold text-blue-700 text-2xl",
        children: "Please Log in to visit this page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "m-2 p-2 border-2 border-black hover:bg-black hover:text-white",
        children: "Log In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 209,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQuanMiXSwibmFtZXMiOlsiRGFzaGJvYXJkIiwicHJvcHMiLCJ1c2VBdXRoIiwibG9nb3V0IiwiY3VycmVudFVzZXIiLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJsb2dPdXQiLCJlIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJlbWFpbCIsImRhdGEiLCJuZXdzIiwiYXJ0aWNsZXMiLCJtYXAiLCJ1cmxUb0ltYWdlIiwidGl0bGUiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsaUJBQ0tDLG9FQUFPLEVBRFo7QUFBQSxNQUNuQkMsTUFEbUIsWUFDbkJBLE1BRG1CO0FBQUEsTUFDWEMsV0FEVyxZQUNYQSxXQURXOztBQUFBLGtCQUVEQyxzREFBUSxDQUFDLEVBQUQsQ0FGUDtBQUFBLE1BRXBCQyxLQUZvQjtBQUFBLE1BRWJDLFFBRmE7O0FBRzNCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBQ0EsTUFBTUMsTUFBTTtBQUFBLGdVQUFHLGlCQUFPQyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVYSixzQkFBUSxDQUFDLEVBQUQsQ0FBUjtBQUZXO0FBQUEscUJBR0xKLE1BQU0sRUFIRDs7QUFBQTtBQUlYUyxxQkFBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7QUFDQUwsb0JBQU0sQ0FBQ00sSUFBUCxDQUFZLFFBQVo7QUFMVztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQU9YUCxzQkFBUSxDQUFDLHFDQUFELENBQVI7O0FBUFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBTkcsTUFBTTtB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QUFBQTtBQUFBLHFCQTVDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBL0dGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBLG9CQURVLGdCQTJMVjtBQUFLLGVBQVMsRUFBQywyREFBZjtBQUFBLDhCQUNFO0FBQUcsaUJBQVMsRUFBQyxzQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUU7QUFBRyxpQkFBUyxFQUFDLHNDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsZUFPRTtBQUFRLGlCQUFTLEVBQUMsK0RBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBNUxKLG1CQURGO0FBMk1ELENBek5EOztHQUFNdEIsUztVQUM0QkUsNEQsRUFFakJPLHFEOzs7S0FIWFQsUztBQTJOU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLjAzOGY1ZjVjMmFkZjk5YzkyMDE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi9jb250ZXh0L0F1dGhDb250ZXh0XCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyXCI7XHJcbmNvbnN0IERhc2hib2FyZCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgbG9nb3V0LCBjdXJyZW50VXNlciB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgbG9nT3V0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHNldEVycm9yKFwiXCIpO1xyXG4gICAgICBhd2FpdCBsb2dvdXQoKTtcclxuICAgICAgY29uc29sZS5sb2coXCJsb2cgb3V0IHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRFcnJvcihcIkVycm9yIHdoaWxlIGxvZ2dpbmcgb3V0ICwgVHJ5IGFnYWluXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtjdXJyZW50VXNlciA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiYmctZ3JheS0xMDAgZGFyazpiZy1ncmF5LTgwMCByb3VuZGVkLTJ4bCByZWxhdGl2ZSBoLXNjcmVlbiBvdmVyZmxvdy1oaWRkZW4gcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gaGlkZGVuIGxnOmJsb2NrIG15LTQgbWwtNCBzaGFkb3ctbGcgcmVsYXRpdmUgdy04MFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBoLWZ1bGwgcm91bmRlZC0yeGwgZGFyazpiZy1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB0LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjM1XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjMwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjU2IDM2NlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHgxPVwiMTIuNTE4OTUzNCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHkxPVwiODUuMjEyODYxMSVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHgyPVwiODguMjI4Mjk1OSVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHkyPVwiMTAuMDIyNTQ5NyVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibGluZWFyR3JhZGllbnQtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3RvcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcENvbG9yPVwiI0ZGMDA1N1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wT3BhY2l0eT1cIjAuMTZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PVwiMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L3N0b3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI0ZGMDA1N1wiIG9mZnNldD1cIjg2LjEzNTQlXCI+PC9zdG9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0wLDYwLjg1MzgwMDYgQzAsMjcuMjQ1MjYxIDI3LjI0NTMwNCwwIDYwLjg1NDIxMjEsMCBMMTE3LjAyNzAxOSwwIEwyNTUuOTk2NTQ5LDAgTDI1NS45OTY1NDksODYuNTk5OTc3NiBDMjU1Ljk5NjU0OSwxMDMuNDA0MTU1IDI0Mi4zNzQwOTYsMTE3LjAyNzIyMiAyMjUuNTY5OTE5LDExNy4wMjcyMjIgTDE0NS44MDgxMiwxMTcuMDI3MjIyIEMxMzAuMDAzMjk5LDExNy4yNzc4MjkgMTE3LjI0MjYxNSwxMzAuMDYwMDExIDExNy4wMjcwMTksMTQ1Ljg3MjgxNyBMMTE3LjAyNzAxOSwzMzUuMjgyNTIgQzExNy4wMjcwMTksMzUyLjA4NzMxMiAxMDMuNDA0NTY3LDM2NS43MDk3NjQgODYuNTk5Nzc0OSwzNjUuNzA5NzY0IEwwLDM2NS43MDk3NjQgTDAsMTE3LjAyNzIyMiBMMCw2MC44NTM4MDA2IFpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjMDAxQjM4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI2xpbmVhckdyYWRpZW50LTEpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTQ3LjAxMzI0NCwgMTQ3LjAxNDY3NSkgcm90YXRlKDkwLjAwMDAwMCkgdHJhbnNsYXRlKC0xNDcuMDEzMjQ0LCAtMTQ3LjAxNDY3NSkgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjeD1cIjE0Ny4wMTMyNDRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGN5PVwiMTQ3LjAxNDY3NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcj1cIjc4Ljk5MzM5MzhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9jaXJjbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNsaW5lYXJHcmFkaWVudC0xKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eT1cIjAuNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE0Ny4wMTMyNDQsIDE0Ny4wMTQ2NzUpIHJvdGF0ZSg5MC4wMDAwMDApIHRyYW5zbGF0ZSgtMTQ3LjAxMzI0NCwgLTE0Ny4wMTQ2NzUpIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3g9XCIxNDcuMDEzMjQ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjeT1cIjE0Ny4wMTQ2NzVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHI9XCI3OC45OTMzOTM4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvY2lyY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJtdC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBmb250LXRoaW4gdXBwZXJjYXNlIHRleHQtYmx1ZS01MDAgZmxleCBpdGVtcy1jZW50ZXIgcC00IG15LTIgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGp1c3RpZnktc3RhcnQgYmctZ3JhZGllbnQtdG8tciBmcm9tLXdoaXRlIHRvLWJsdWUtMTAwIGJvcmRlci1yLTQgYm9yZGVyLWJsdWUtNTAwIGRhcms6ZnJvbS1ncmF5LTcwMCBkYXJrOnRvLWdyYXktODAwIGJvcmRlci1yLTQgYm9yZGVyLWJsdWUtNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMDQ4IDE3OTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMDcwIDExNzhsMzA2LTU2NGgtNjU0bC0zMDYgNTY0aDY1NHptNzIyLTI4MnEwIDE4Mi03MSAzNDh0LTE5MSAyODYtMjg2IDE5MS0zNDggNzEtMzQ4LTcxLTI4Ni0xOTEtMTkxLTI4Ni03MS0zNDggNzEtMzQ4IDE5MS0yODYgMjg2LTE5MSAzNDgtNzEgMzQ4IDcxIDI4NiAxOTEgMTkxIDI4NiA3MSAzNDh6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm14LTQgdGV4dC1zbSBmb250LW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIERhc2hib2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZm9udC10aGluIHVwcGVyY2FzZSB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTIwMCBmbGV4IGl0ZW1zLWNlbnRlciBwLTQgbXktMiB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAganVzdGlmeS1zdGFydCBob3Zlcjp0ZXh0LWJsdWUtNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibS1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjA0OCAxNzkyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTAyNCAxMTMxcTAtNjQtOS0xMTcuNXQtMjkuNS0xMDMtNjAuNS03OC05Ny0yOC41cS02IDQtMzAgMTh0LTM3LjUgMjEuNS0zNS41IDE3LjUtNDMgMTQuNS00MiA0LjUtNDItNC41LTQzLTE0LjUtMzUuNS0xNy41LTM3LjUtMjEuNS0zMC0xOHEtNTcgMC05NyAyOC41dC02MC41IDc4LTI5LjUgMTAzLTkgMTE3LjUgMzcgMTA2LjUgOTEgNDIuNWg1MTJxNTQgMCA5MS00Mi41dDM3LTEwNi41em0tMTU3LTUyMHEwLTk0LTY2LjUtMTYwLjV0LTE2MC41LTY2LjUtMTYwLjUgNjYuNS02Ni41IDE2MC41IDY2LjUgMTYwLjUgMTYwLjUgNjYuNSAxNjAuNS02Ni41IDY2LjUtMTYwLjV6bTkyNSA1MDl2LTY0cTAtMTQtOS0yM3QtMjMtOWgtNTc2cS0xNCAwLTIzIDl0LTkgMjN2NjRxMCAxNCA5IDIzdDIzIDloNTc2cTE0IDAgMjMtOXQ5LTIzem0wLTI2MHYtNTZxMC0xNS0xMC41LTI1LjV0LTI1LjUtMTAuNWgtNTY4cS0xNSAwLTI1LjUgMTAuNXQtMTAuNSAyNS41djU2cTAgMTUgMTAuNSAyNS41dDI1LjUgMTAuNWg1NjhxMTUgMCAyNS41LTEwLjV0MTAuNS0yNS41em0wLTI1MnYtNjRxMC0xNC05LTIzdC0yMy05aC01NzZxLTE0IDAtMjMgOXQtOSAyM3Y2NHEwIDE0IDkgMjN0MjMgOWg1NzZxMTQgMCAyMy05dDktMjN6bTI1Ni0zMjB2MTIxNnEwIDY2LTQ3IDExM3QtMTEzIDQ3aC0zNTJ2LTk2cTAtMTQtOS0yM3QtMjMtOWgtNjRxLTE0IDAtMjMgOXQtOSAyM3Y5NmgtNzY4di05NnEwLTE0LTktMjN0LTIzLTloLTY0cS0xNCAwLTIzIDl0LTkgMjN2OTZoLTM1MnEtNjYgMC0xMTMtNDd0LTQ3LTExM3YtMTIxNnEwLTY2IDQ3LTExM3QxMTMtNDdoMTcyOHE2NiAwIDExMyA0N3Q0NyAxMTN6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm14LTQgdGV4dC1zbSBmb250LW5vcm1hbFwiPk5ld3M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBmb250LXRoaW4gdXBwZXJjYXNlIHRleHQtZ3JheS01MDAgY3Vyc29yLXBvaW50ZXIgZGFyazp0ZXh0LWdyYXktMjAwIGZsZXggaXRlbXMtY2VudGVyIHAtNCBteS0yIGZvY3VzOm91dGxpbmUtbm9uZSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAganVzdGlmeS1zdGFydCBob3Zlcjp0ZXh0LWJsdWUtNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17bG9nT3V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibS1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjA0OCAxNzkyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNjg1IDQ4M3ExNiAwIDI3LjUtMTEuNXQxMS41LTI3LjUtMTEuNS0yNy41LTI3LjUtMTEuNS0yNyAxMS41LTExIDI3LjUgMTEgMjcuNSAyNyAxMS41em00MjIgMHExNiAwIDI3LTExLjV0MTEtMjcuNS0xMS0yNy41LTI3LTExLjUtMjcuNSAxMS41LTExLjUgMjcuNSAxMS41IDI3LjUgMjcuNSAxMS41em0tODEyIDE4NHE0MiAwIDcyIDMwdDMwIDcydjQzMHEwIDQzLTI5LjUgNzN0LTcyLjUgMzAtNzMtMzAtMzAtNzN2LTQzMHEwLTQyIDMwLTcydDczLTMwem0xMDYwIDE5djY2NnEwIDQ2LTMyIDc4dC03NyAzMmgtNzV2MjI3cTAgNDMtMzAgNzN0LTczIDMwLTczLTMwLTMwLTczdi0yMjdoLTEzOHYyMjdxMCA0My0zMCA3M3QtNzMgMzBxLTQyIDAtNzItMzB0LTMwLTczbC0xLTIyN2gtNzRxLTQ2IDAtNzgtMzJ0LTMyLTc4di02NjZoOTE4em0tMjMyLTQwNXExMDcgNTUgMTcxIDE1My41dDY0IDIxNS41aC05MjVxMC0xMTcgNjQtMjE1LjV0MTcyLTE1My41bC03MS0xMzFxLTctMTMgNS0yMCAxMy02IDIwIDZsNzIgMTMycTk1LTQyIDIwMS00MnQyMDEgNDJsNzItMTMycTctMTIgMjAtNiAxMiA3IDUgMjB6bTQ3NyA0ODh2NDMwcTAgNDMtMzAgNzN0LTczIDMwcS00MiAwLTcyLTMwdC0zMC03M3YtNDMwcTAtNDMgMzAtNzIuNXQ3Mi0yOS41cTQzIDAgNzMgMjkuNXQzMCA3Mi41elwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJteC00IHRleHQtc20gZm9udC1ub3JtYWxcIj5Mb2dvdXQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsIHBsLTAgbWQ6cC00IG1kOnNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJ3LWZ1bGwgc2hhZG93LWxnIGJnLXdoaXRlIGRhcms6YmctZ3JheS03MDAgaXRlbXMtY2VudGVyIGgtMTYgcm91bmRlZC0yeGwgei00MFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMjAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBoLWZ1bGwgcHgtMyBteC1hdXRvIGZsZXgtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBpdGVtcy1jZW50ZXIgcGwtMSBmbGV4IHctZnVsbCBsZzptYXgtdy02OCBzbTpwci0yIHNtOm1sLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHJlbGF0aXZlIGxlZnQtMCB6LTUwIGZsZXggdy0zLzQgaC1hdXRvIGgtZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyIHctZnVsbCBsZzp3LTY0IGgtZnVsbCBncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgei01MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBibG9jayB3LWF1dG8gaC0xMCBwLTMgcHItMiB0ZXh0LXNtIHRleHQtZ3JheS01MDAgdXBwZXJjYXNlIGN1cnNvci1wb2ludGVyIHNtOmhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHctNSBoLTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTAgMTRsMi0ybTAgMGwyLTJtLTIgMmwtMi0ybTIgMmwyIDJtNy0yYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMCB6LTIwIGhpZGRlbiB3LTQgaC00IG1sLTQgdGV4dC1ncmF5LTUwMCBwb2ludGVyLWV2ZW50cy1ub25lIGZpbGwtY3VycmVudCBncm91cC1ob3Zlcjp0ZXh0LWdyYXktNDAwIHNtOmJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMi45IDE0LjMyYTggOCAwIDEgMSAxLjQxLTEuNDFsNS4zNSA1LjMzLTEuNDIgMS40Mi01LjMzLTUuMzR6TTggMTRBNiA2IDAgMSAwIDggMmE2IDYgMCAwIDAgMCAxMnpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgcHktMS41IHBsLTEwIHByLTQgbGVhZGluZy1ub3JtYWwgcm91bmRlZC0yeGwgZm9jdXM6Ym9yZGVyLXRyYW5zcGFyZW50IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTUwMCByaW5nLW9wYWNpdHktOTAgYmctZ3JheS0xMDAgZGFyazpiZy1ncmF5LTgwMCB0ZXh0LWdyYXktNDAwIGFhLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCBoaWRkZW4gaC1hdXRvIHB4LTIgcHktMSBtci0yIHRleHQteHMgdGV4dC1ncmF5LTQwMCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtMnhsIG1kOmJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHAtMSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCB3LTEvNCBtbC01IG1yLTQgc206bXItMCBzbTpyaWdodC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS03MDAgZm9udC1zZW1pYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50VXNlciAmJiBjdXJyZW50VXNlci5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWF1dG8gaC1zY3JlZW4gcGItMjQgcHQtMiBwci0yIHBsLTIgbWQ6cHQtMCBtZDpwci0wIG1kOnBsLTBcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGZsZXgtd3JhcCBzbTpmbGV4LXJvdyBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y29uc29sZS5sb2cocHJvcHMuZGF0YS5uZXdzLmFydGljbGVzKX1cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZGF0YS5uZXdzLmFydGljbGVzLm1hcCgobmV3cykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e25ld3MudXJsfSBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy0xLzIgeGw6dy0xLzNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy1sZyBtLTIgcm91bmRlZC0yeGwgcC00IGJnLXdoaXRlIGRhcms6YmctZ3JheS03MDAgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e25ld3MudXJsVG9JbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtuZXdzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e25ld3MudXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYnJlYWstd29yZHMgZm9udC1zZW1pYm9sZCB0ZXh0LXhsIGhvdmVyOnRleHQtYmx1ZS02MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmV3cy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1pbi1oLXNjcmVlbiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWJsdWUtNzAwIHRleHQtMnhsXCI+XHJcbiAgICAgICAgICAgIFBsZWFzZSBMb2cgaW4gdG8gdmlzaXQgdGhpcyBwYWdlXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtYmx1ZS03MDAgdGV4dC0yeGxcIj5cclxuICAgICAgICAgICAgUGxlYXNlIExvZyBpbiB0byB2aXNpdCB0aGlzIHBhZ2VcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibS0yIHAtMiBib3JkZXItMiBib3JkZXItYmxhY2sgaG92ZXI6YmctYmxhY2sgaG92ZXI6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICBMb2cgSW5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==