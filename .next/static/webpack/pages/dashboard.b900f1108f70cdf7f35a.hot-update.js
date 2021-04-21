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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
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
                    children: "News"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 106,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 19
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
                    children: "Logout"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
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
                          lineNumber: 146,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 137,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 136,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                      className: "absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 20 20",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                        d: "M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 154,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 149,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      type: "text",
                      className: "block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input",
                      placeholder: "Search"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 156,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "absolute right-0 hidden h-auto px-2 py-1 mr-2 text-xs text-gray-400 border border-gray-300 rounded-2xl md:block",
                      children: "+"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 161,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 135,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "text-blue-700 font-semibold",
                    children: currentUser && currentUser.email
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 167,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 166,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
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
                              lineNumber: 189,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                              d: "M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1",
                              fill: "#34A853"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 193,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                              d: "M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782",
                              fill: "#FBBC05"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 197,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                              d: "M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251",
                              fill: "#EB4335"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 201,
                              columnNumber: 31
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 182,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 181,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "flex flex-col",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "font-bold text-md text-black dark:text-white ml-2",
                            children: "Google"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 208,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "text-sm text-gray-500 dark:text-white ml-2",
                            children: "Google Inc."
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 211,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 207,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 180,
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
                              lineNumber: 226,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 218,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 217,
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
                              lineNumber: 237,
                              columnNumber: 31
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 230,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 229,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 216,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 179,
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
                          lineNumber: 244,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 243,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 242,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 178,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 177,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "mb-4"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 253,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 176,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "w-full sm:w-1/2 xl:w-1/3",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "mb-4 sm:ml-4 xl:mr-4",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "shadow-lg rounded-2xl bg-white dark:bg-gray-700 w-full"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 257,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 256,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 255,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 130,
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
    }, _this)
  }, void 0, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQuanMiXSwibmFtZXMiOlsiZGFzaGJvYXJkIiwidXNlQXV0aCIsImxvZ291dCIsImN1cnJlbnRVc2VyIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwicm91dGVyIiwidXNlUm91dGVyIiwibG9nT3V0IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiZW1haWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUEsaUJBQ1VDLG9FQUFPLEVBRGpCO0FBQUEsTUFDZEMsTUFEYyxZQUNkQSxNQURjO0FBQUEsTUFDTkMsV0FETSxZQUNOQSxXQURNOztBQUFBLGtCQUVJQyxzREFBUSxDQUFDLEVBQUQsQ0FGWjtBQUFBLE1BRWZDLEtBRmU7QUFBQSxNQUVSQyxRQUZROztBQUd0QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUNBLE1BQU1DLE1BQU07QUFBQSxnVUFBRyxpQkFBT0MsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFWEosc0JBQVEsQ0FBQyxFQUFELENBQVI7QUFGVztBQUFBLHFCQUdMSixNQUFNLEVBSEQ7O0FBQUE7QUFJWFMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaO0FBQ0FMLG9CQUFNLENBQUNNLElBQVAsQ0FBWSxRQUFaO0FBTFc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFPWFAsc0JBQVEsQ0FBQyxxQ0FBRCxDQUFSOztBQVBXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQU5HLE1BQU07QUFBQTtBQUFBO0FBQUEsS0FBWjs7QUFVQSxzQkFDRTtBQUFBLDJCQUNFO0FBQU0sZUFBUyxFQUFDLHFGQUFoQjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxrQ0FB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QUFBQSx5QkFERixlQTZFRTtBQUFLLDJCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQTdFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFnRkU7QUFBSyx5QkFBUyxFQUFDLDBCQUFmO0FBQUEsdUNBQ0U7QUFBSywyQkFBUyxFQUFDLHNCQUFmO0FBQUEseUNBQ0U7QUFBSyw2QkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWhGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTVDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBN0dGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQXlQRCxDQXZRRDs7R0FBTWQsUztVQUM0QkMsNEQsRUFFakJPLHFEOzs7QUFzUUZSLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC5iOTAwZjExMDhmNzBjZGY3ZjM1YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uL2NvbnRleHQvQXV0aENvbnRleHRcIjtcclxuY29uc3QgZGFzaGJvYXJkID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgbG9nb3V0LCBjdXJyZW50VXNlciB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgbG9nT3V0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHNldEVycm9yKFwiXCIpO1xyXG4gICAgICBhd2FpdCBsb2dvdXQoKTtcclxuICAgICAgY29uc29sZS5sb2coXCJsb2cgb3V0IHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRFcnJvcihcIkVycm9yIHdoaWxlIGxvZ2dpbmcgb3V0ICwgVHJ5IGFnYWluXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImJnLWdyYXktMTAwIGRhcms6YmctZ3JheS04MDAgcm91bmRlZC0yeGwgcmVsYXRpdmUgaC1zY3JlZW4gb3ZlcmZsb3ctaGlkZGVuIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiBoaWRkZW4gbGc6YmxvY2sgbXktNCBtbC00IHNoYWRvdy1sZyByZWxhdGl2ZSB3LTgwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgaC1mdWxsIHJvdW5kZWQtMnhsIGRhcms6YmctZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB0LTZcIj5cclxuICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzNVwiXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjMwXCJcclxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNTYgMzY2XCJcclxuICAgICAgICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXHJcbiAgICAgICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgeDE9XCIxMi41MTg5NTM0JVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB5MT1cIjg1LjIxMjg2MTElXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHgyPVwiODguMjI4Mjk1OSVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgeTI9XCIxMC4wMjI1NDk3JVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImxpbmVhckdyYWRpZW50LTFcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdG9wXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3AtY29sb3I9XCIjRkYwMDU3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcC1vcGFjaXR5PVwiMC4xNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldD1cIjAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgID48L3N0b3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPVwiI0ZGMDA1N1wiIG9mZnNldD1cIjg2LjEzNTQlXCI+PC9zdG9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMCw2MC44NTM4MDA2IEMwLDI3LjI0NTI2MSAyNy4yNDUzMDQsMCA2MC44NTQyMTIxLDAgTDExNy4wMjcwMTksMCBMMjU1Ljk5NjU0OSwwIEwyNTUuOTk2NTQ5LDg2LjU5OTk3NzYgQzI1NS45OTY1NDksMTAzLjQwNDE1NSAyNDIuMzc0MDk2LDExNy4wMjcyMjIgMjI1LjU2OTkxOSwxMTcuMDI3MjIyIEwxNDUuODA4MTIsMTE3LjAyNzIyMiBDMTMwLjAwMzI5OSwxMTcuMjc3ODI5IDExNy4yNDI2MTUsMTMwLjA2MDAxMSAxMTcuMDI3MDE5LDE0NS44NzI4MTcgTDExNy4wMjcwMTksMzM1LjI4MjUyIEMxMTcuMDI3MDE5LDM1Mi4wODczMTIgMTAzLjQwNDU2NywzNjUuNzA5NzY0IDg2LjU5OTc3NDksMzY1LjcwOTc2NCBMMCwzNjUuNzA5NzY0IEwwLDExNy4wMjcyMjIgTDAsNjAuODUzODAwNiBaXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjMDAxQjM4XCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgIDxjaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI2xpbmVhckdyYWRpZW50LTEpXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNDcuMDEzMjQ0LCAxNDcuMDE0Njc1KSByb3RhdGUoOTAuMDAwMDAwKSB0cmFuc2xhdGUoLTE0Ny4wMTMyNDQsIC0xNDcuMDE0Njc1KSBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY3g9XCIxNDcuMDEzMjQ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGN5PVwiMTQ3LjAxNDY3NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICByPVwiNzguOTkzMzkzOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvY2lyY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxjaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI2xpbmVhckdyYWRpZW50LTEpXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk9XCIwLjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE0Ny4wMTMyNDQsIDE0Ny4wMTQ2NzUpIHJvdGF0ZSg5MC4wMDAwMDApIHRyYW5zbGF0ZSgtMTQ3LjAxMzI0NCwgLTE0Ny4wMTQ2NzUpIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjeD1cIjE0Ny4wMTMyNDRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY3k9XCIxNDcuMDE0Njc1XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHI9XCI3OC45OTMzOTM4XCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9jaXJjbGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibXQtNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZm9udC10aGluIHVwcGVyY2FzZSB0ZXh0LWJsdWUtNTAwIGZsZXggaXRlbXMtY2VudGVyIHAtNCBteS0yIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBqdXN0aWZ5LXN0YXJ0IGJnLWdyYWRpZW50LXRvLXIgZnJvbS13aGl0ZSB0by1ibHVlLTEwMCBib3JkZXItci00IGJvcmRlci1ibHVlLTUwMCBkYXJrOmZyb20tZ3JheS03MDAgZGFyazp0by1ncmF5LTgwMCBib3JkZXItci00IGJvcmRlci1ibHVlLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwNDggMTc5MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEwNzAgMTE3OGwzMDYtNTY0aC02NTRsLTMwNiA1NjRoNjU0em03MjItMjgycTAgMTgyLTcxIDM0OHQtMTkxIDI4Ni0yODYgMTkxLTM0OCA3MS0zNDgtNzEtMjg2LTE5MS0xOTEtMjg2LTcxLTM0OCA3MS0zNDggMTkxLTI4NiAyODYtMTkxIDM0OC03MSAzNDggNzEgMjg2IDE5MSAxOTEgMjg2IDcxIDM0OHpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXgtNCB0ZXh0LXNtIGZvbnQtbm9ybWFsXCI+RGFzaGJvYXJkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGZvbnQtdGhpbiB1cHBlcmNhc2UgdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS0yMDAgZmxleCBpdGVtcy1jZW50ZXIgcC00IG15LTIgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGp1c3RpZnktc3RhcnQgaG92ZXI6dGV4dC1ibHVlLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtLWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwNDggMTc5MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEwMjQgMTEzMXEwLTY0LTktMTE3LjV0LTI5LjUtMTAzLTYwLjUtNzgtOTctMjguNXEtNiA0LTMwIDE4dC0zNy41IDIxLjUtMzUuNSAxNy41LTQzIDE0LjUtNDIgNC41LTQyLTQuNS00My0xNC41LTM1LjUtMTcuNS0zNy41LTIxLjUtMzAtMThxLTU3IDAtOTcgMjguNXQtNjAuNSA3OC0yOS41IDEwMy05IDExNy41IDM3IDEwNi41IDkxIDQyLjVoNTEycTU0IDAgOTEtNDIuNXQzNy0xMDYuNXptLTE1Ny01MjBxMC05NC02Ni41LTE2MC41dC0xNjAuNS02Ni41LTE2MC41IDY2LjUtNjYuNSAxNjAuNSA2Ni41IDE2MC41IDE2MC41IDY2LjUgMTYwLjUtNjYuNSA2Ni41LTE2MC41em05MjUgNTA5di02NHEwLTE0LTktMjN0LTIzLTloLTU3NnEtMTQgMC0yMyA5dC05IDIzdjY0cTAgMTQgOSAyM3QyMyA5aDU3NnExNCAwIDIzLTl0OS0yM3ptMC0yNjB2LTU2cTAtMTUtMTAuNS0yNS41dC0yNS41LTEwLjVoLTU2OHEtMTUgMC0yNS41IDEwLjV0LTEwLjUgMjUuNXY1NnEwIDE1IDEwLjUgMjUuNXQyNS41IDEwLjVoNTY4cTE1IDAgMjUuNS0xMC41dDEwLjUtMjUuNXptMC0yNTJ2LTY0cTAtMTQtOS0yM3QtMjMtOWgtNTc2cS0xNCAwLTIzIDl0LTkgMjN2NjRxMCAxNCA5IDIzdDIzIDloNTc2cTE0IDAgMjMtOXQ5LTIzem0yNTYtMzIwdjEyMTZxMCA2Ni00NyAxMTN0LTExMyA0N2gtMzUydi05NnEwLTE0LTktMjN0LTIzLTloLTY0cS0xNCAwLTIzIDl0LTkgMjN2OTZoLTc2OHYtOTZxMC0xNC05LTIzdC0yMy05aC02NHEtMTQgMC0yMyA5dC05IDIzdjk2aC0zNTJxLTY2IDAtMTEzLTQ3dC00Ny0xMTN2LTEyMTZxMC02NiA0Ny0xMTN0MTEzLTQ3aDE3MjhxNjYgMCAxMTMgNDd0NDcgMTEzelwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJteC00IHRleHQtc20gZm9udC1ub3JtYWxcIj5OZXdzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZm9udC10aGluIHVwcGVyY2FzZSB0ZXh0LWdyYXktNTAwIGN1cnNvci1wb2ludGVyIGRhcms6dGV4dC1ncmF5LTIwMCBmbGV4IGl0ZW1zLWNlbnRlciBwLTQgbXktMiBmb2N1czpvdXRsaW5lLW5vbmUgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGp1c3RpZnktc3RhcnQgaG92ZXI6dGV4dC1ibHVlLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17bG9nT3V0fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtLWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwNDggMTc5MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTY4NSA0ODNxMTYgMCAyNy41LTExLjV0MTEuNS0yNy41LTExLjUtMjcuNS0yNy41LTExLjUtMjcgMTEuNS0xMSAyNy41IDExIDI3LjUgMjcgMTEuNXptNDIyIDBxMTYgMCAyNy0xMS41dDExLTI3LjUtMTEtMjcuNS0yNy0xMS41LTI3LjUgMTEuNS0xMS41IDI3LjUgMTEuNSAyNy41IDI3LjUgMTEuNXptLTgxMiAxODRxNDIgMCA3MiAzMHQzMCA3MnY0MzBxMCA0My0yOS41IDczdC03Mi41IDMwLTczLTMwLTMwLTczdi00MzBxMC00MiAzMC03MnQ3My0zMHptMTA2MCAxOXY2NjZxMCA0Ni0zMiA3OHQtNzcgMzJoLTc1djIyN3EwIDQzLTMwIDczdC03MyAzMC03My0zMC0zMC03M3YtMjI3aC0xMzh2MjI3cTAgNDMtMzAgNzN0LTczIDMwcS00MiAwLTcyLTMwdC0zMC03M2wtMS0yMjdoLTc0cS00NiAwLTc4LTMydC0zMi03OHYtNjY2aDkxOHptLTIzMi00MDVxMTA3IDU1IDE3MSAxNTMuNXQ2NCAyMTUuNWgtOTI1cTAtMTE3IDY0LTIxNS41dDE3Mi0xNTMuNWwtNzEtMTMxcS03LTEzIDUtMjAgMTMtNiAyMCA2bDcyIDEzMnE5NS00MiAyMDEtNDJ0MjAxIDQybDcyLTEzMnE3LTEyIDIwLTYgMTIgNyA1IDIwem00NzcgNDg4djQzMHEwIDQzLTMwIDczdC03MyAzMHEtNDIgMC03Mi0zMHQtMzAtNzN2LTQzMHEwLTQzIDMwLTcyLjV0NzItMjkuNXE0MyAwIDczIDI5LjV0MzAgNzIuNXpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXgtNCB0ZXh0LXNtIGZvbnQtbm9ybWFsXCI+TG9nb3V0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbCBwbC0wIG1kOnAtNCBtZDpzcGFjZS15LTRcIj5cclxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJ3LWZ1bGwgc2hhZG93LWxnIGJnLXdoaXRlIGRhcms6YmctZ3JheS03MDAgaXRlbXMtY2VudGVyIGgtMTYgcm91bmRlZC0yeGwgei00MFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0yMCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGgtZnVsbCBweC0zIG14LWF1dG8gZmxleC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaXRlbXMtY2VudGVyIHBsLTEgZmxleCB3LWZ1bGwgbGc6bWF4LXctNjggc206cHItMiBzbTptbC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHJlbGF0aXZlIGxlZnQtMCB6LTUwIGZsZXggdy0zLzQgaC1hdXRvIGgtZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXIgdy1mdWxsIGxnOnctNjQgaC1mdWxsIGdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHotNTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmxvY2sgdy1hdXRvIGgtMTAgcC0zIHByLTIgdGV4dC1zbSB0ZXh0LWdyYXktNTAwIHVwcGVyY2FzZSBjdXJzb3ItcG9pbnRlciBzbTpoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LTUgaC01XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTAgMTRsMi0ybTAgMGwyLTJtLTIgMmwtMi0ybTIgMmwyIDJtNy0yYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0wIHotMjAgaGlkZGVuIHctNCBoLTQgbWwtNCB0ZXh0LWdyYXktNTAwIHBvaW50ZXItZXZlbnRzLW5vbmUgZmlsbC1jdXJyZW50IGdyb3VwLWhvdmVyOnRleHQtZ3JheS00MDAgc206YmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIuOSAxNC4zMmE4IDggMCAxIDEgMS40MS0xLjQxbDUuMzUgNS4zMy0xLjQyIDEuNDItNS4zMy01LjM0ek04IDE0QTYgNiAwIDEgMCA4IDJhNiA2IDAgMCAwIDAgMTJ6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgcHktMS41IHBsLTEwIHByLTQgbGVhZGluZy1ub3JtYWwgcm91bmRlZC0yeGwgZm9jdXM6Ym9yZGVyLXRyYW5zcGFyZW50IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTUwMCByaW5nLW9wYWNpdHktOTAgYmctZ3JheS0xMDAgZGFyazpiZy1ncmF5LTgwMCB0ZXh0LWdyYXktNDAwIGFhLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCBoaWRkZW4gaC1hdXRvIHB4LTIgcHktMSBtci0yIHRleHQteHMgdGV4dC1ncmF5LTQwMCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtMnhsIG1kOmJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICtcclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBwLTEgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmQgdy0xLzQgbWwtNSBtci00IHNtOm1yLTAgc206cmlnaHQtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS03MDAgZm9udC1zZW1pYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRVc2VyICYmIGN1cnJlbnRVc2VyLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctYXV0byBoLXNjcmVlbiBwYi0yNCBwdC0yIHByLTIgcGwtMiBtZDpwdC0wIG1kOnByLTAgbWQ6cGwtMFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBmbGV4LXdyYXAgc206ZmxleC1yb3cgXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LTEvMiB4bDp3LTEvM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy1sZyByb3VuZGVkLTJ4bCBwLTQgYmctd2hpdGUgZGFyazpiZy1ncmF5LTcwMCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJvdW5kZWQteGwgcmVsYXRpdmUgcC0yIGJnLWJsdWUtMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjU2IDI2MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMjU1Ljg3OCAxMzMuNDUxYzAtMTAuNzM0LS44NzEtMTguNTY3LTIuNzU2LTI2LjY5SDEzMC41NXY0OC40NDhoNzEuOTQ3Yy0xLjQ1IDEyLjA0LTkuMjgzIDMwLjE3Mi0yNi42OSA0Mi4zNTZsLS4yNDQgMS42MjIgMzguNzU1IDMwLjAyMyAyLjY4NS4yNjhjMjQuNjU5LTIyLjc3NCAzOC44NzUtNTYuMjgyIDM4Ljg3NS05Ni4wMjdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjNDI4NUY0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEzMC41NSAyNjEuMWMzNS4yNDggMCA2NC44MzktMTEuNjA1IDg2LjQ1My0zMS42MjJsLTQxLjE5Ni0zMS45MTNjLTExLjAyNCA3LjY4OC0yNS44MiAxMy4wNTUtNDUuMjU3IDEzLjA1NS0zNC41MjMgMC02My44MjQtMjIuNzczLTc0LjI2OS01NC4yNWwtMS41MzEuMTMtNDAuMjk4IDMxLjE4Ny0uNTI3IDEuNDY1QzM1LjM5MyAyMzEuNzk4IDc5LjQ5IDI2MS4xIDEzMC41NSAyNjEuMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiMzNEE4NTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNTYuMjgxIDE1Ni4zN2MtMi43NTYtOC4xMjMtNC4zNTEtMTYuODI3LTQuMzUxLTI1LjgyIDAtOC45OTQgMS41OTUtMTcuNjk3IDQuMjA2LTI1LjgybC0uMDczLTEuNzNMMTUuMjYgNzEuMzEybC0xLjMzNS42MzVDNS4wNzcgODkuNjQ0IDAgMTA5LjUxNyAwIDEzMC41NXM1LjA3NyA0MC45MDUgMTMuOTI1IDU4LjYwMmw0Mi4zNTYtMzIuNzgyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0ZCQkMwNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMzAuNTUgNTAuNDc5YzI0LjUxNCAwIDQxLjA1IDEwLjU4OSA1MC40NzkgMTkuNDM4bDM2Ljg0NC0zNS45NzRDMTk1LjI0NSAxMi45MSAxNjUuNzk4IDAgMTMwLjU1IDAgNzkuNDkgMCAzNS4zOTMgMjkuMzAxIDEzLjkyNSA3MS45NDdsNDIuMjExIDMyLjc4M2MxMC41OS0zMS40NzcgMzkuODkxLTU0LjI1MSA3NC40MTQtNTQuMjUxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0VCNDMzNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1tZCB0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZSBtbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvb2dsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC13aGl0ZSBtbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvb2dsZSBJbmMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib3JkZXIgcC0xIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkLWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC15ZWxsb3ctNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNzI4IDY0N3EwIDIyLTI2IDQ4bC0zNjMgMzU0IDg2IDUwMHExIDcgMSAyMCAwIDIxLTEwLjUgMzUuNXQtMzAuNSAxNC41cS0xOSAwLTQwLTEybC00NDktMjM2LTQ0OSAyMzZxLTIyIDEyLTQwIDEyLTIxIDAtMzEuNS0xNC41dC0xMC41LTM1LjVxMC02IDItMjBsODYtNTAwLTM2NC0zNTRxLTI1LTI3LTI1LTQ4IDAtMzcgNTYtNDZsNTAyLTczIDIyNS00NTVxMTktNDEgNDktNDF0NDkgNDFsMjI1IDQ1NSA1MDIgNzNxNTYgOSA1NiA0NnpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtZ3JheS0yMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTA4OCAxMjQ4djE5MnEwIDQwLTI4IDY4dC02OCAyOGgtMTkycS00MCAwLTY4LTI4dC0yOC02OHYtMTkycTAtNDAgMjgtNjh0NjgtMjhoMTkycTQwIDAgNjggMjh0MjggNjh6bTAtNTEydjE5MnEwIDQwLTI4IDY4dC02OCAyOGgtMTkycS00MCAwLTY4LTI4dC0yOC02OHYtMTkycTAtNDAgMjgtNjh0NjgtMjhoMTkycTQwIDAgNjggMjh0MjggNjh6bTAtNTEydjE5MnEwIDQwLTI4IDY4dC02OCAyOGgtMTkycS00MCAwLTY4LTI4dC0yOC02OHYtMTkycTAtNDAgMjgtNjh0NjgtMjhoMTkycTQwIDAgNjggMjh0MjggNjh6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggLXNwYWNlLXgtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBoLTEwIHctMTAgcm91bmRlZC1mdWxsIG9iamVjdC1jb3ZlciByaW5nLTIgcmluZy13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3BlcnNvbi8zLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJDaGFybGVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LTEvMiB4bDp3LTEvM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgc206bWwtNCB4bDptci00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3ctbGcgcm91bmRlZC0yeGwgYmctd2hpdGUgZGFyazpiZy1ncmF5LTcwMCB3LWZ1bGxcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRhc2hib2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==