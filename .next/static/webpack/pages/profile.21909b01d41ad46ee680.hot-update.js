webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/Profile.js":
/*!*******************************!*\
  !*** ./components/Profile.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AuthContext */ "./context/AuthContext.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "C:\\Users\\Subhash Kumar\\Desktop\\Projects\\qex-frontend\\components\\Profile.js",
    _this = undefined,
    _s = $RefreshSig$();





var Profile = function Profile() {
  _s();

  var _useAuth = Object(_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__["useAuth"])(),
      currentUser = _useAuth.currentUser;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      openModal = _useState[0],
      setOpenModal = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: function onClick() {
        setOpenModal(true);
      },
      className: "p-2 outline-none focus:outline-none block lg:inline text-center font-semibold rounded-lg hover:bg-gray-500 bg-gray-800 text-white",
      children: "Apply for Job"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_modal__WEBPACK_IMPORTED_MODULE_3___default.a, {
      style: {
        overlay: {
          backgroundColor: "#000"
        }
      },
      isOpen: openModal,
      onRequestClose: function onRequestClose() {
        setOpenModal(false);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "min-h-screen flex",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "m-auto",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: "\u0414\u0435\u0442\u0430\u043B\u0438 \u043F\u0440\u043E\u0444\u0438\u043B\u044F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "m-auto",
          children: currentUser && currentUser.email
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Profile, "x4Yv5n0td2WS/2NLb/QNrLe0NPQ=", false, function () {
  return [_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__["useAuth"]];
});

_c = Profile;
/* harmony default export */ __webpack_exports__["default"] = (Profile);

var _c;

$RefreshReg$(_c, "Profile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlLmpzIl0sIm5hbWVzIjpbIlByb2ZpbGUiLCJ1c2VBdXRoIiwiY3VycmVudFVzZXIiLCJ1c2VTdGF0ZSIsIm9wZW5Nb2RhbCIsInNldE9wZW5Nb2RhbCIsIm92ZXJsYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJlbWFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsaUJBQ0lDLG9FQUFPLEVBRFg7QUFBQSxNQUNaQyxXQURZLFlBQ1pBLFdBRFk7O0FBQUEsa0JBRWNDLHNEQUFRLENBQUMsS0FBRCxDQUZ0QjtBQUFBLE1BRWJDLFNBRmE7QUFBQSxNQUVGQyxZQUZFOztBQUdwQixzQkFDRTtBQUFBLDRCQUNFO0FBQ0UsYUFBTyxFQUFFLG1CQUFNO0FBQ2JBLG9CQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0QsT0FISDtBQUlFLGVBQVMsRUFBQyxtSUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBUVksR0FSWixlQVNFLHFFQUFDLGtEQUFEO0FBQ0UsV0FBSyxFQUFFO0FBQ0xDLGVBQU8sRUFBRTtBQUNQQyx5QkFBZSxFQUFFO0FBRFY7QUFESixPQURUO0FBTUUsWUFBTSxFQUFFSCxTQU5WO0FBT0Usb0JBQWMsRUFBRSwwQkFBTTtBQUNwQkMsb0JBQVksQ0FBQyxLQUFELENBQVo7QUFDRDtBQVRIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFURixlQW9CRTtBQUFLLGVBQVMsRUFBQyxtQkFBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxRQUFmO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFLLG1CQUFTLEVBQUMsUUFBZjtBQUFBLG9CQUF5QkgsV0FBVyxJQUFJQSxXQUFXLENBQUNNO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXBCRjtBQUFBLGtCQURGO0FBNkJELENBaENEOztHQUFNUixPO1VBQ29CQyw0RDs7O0tBRHBCRCxPO0FBa0NTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjIxOTA5YjAxZDQxYWQ0NmVlNjgwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi9jb250ZXh0L0F1dGhDb250ZXh0XCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtbW9kYWxcIjtcclxuY29uc3QgUHJvZmlsZSA9ICgpID0+IHtcclxuICBjb25zdCB7IGN1cnJlbnRVc2VyIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgW29wZW5Nb2RhbCwgc2V0T3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIHNldE9wZW5Nb2RhbCh0cnVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInAtMiBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIGJsb2NrIGxnOmlubGluZSB0ZXh0LWNlbnRlciBmb250LXNlbWlib2xkIHJvdW5kZWQtbGcgaG92ZXI6YmctZ3JheS01MDAgYmctZ3JheS04MDAgdGV4dC13aGl0ZVwiXHJcbiAgICAgID5cclxuICAgICAgICBBcHBseSBmb3IgSm9iXHJcbiAgICAgIDwvYnV0dG9uPntcIiBcIn1cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIG92ZXJsYXk6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMDBcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfX1cclxuICAgICAgICBpc09wZW49e29wZW5Nb2RhbH1cclxuICAgICAgICBvblJlcXVlc3RDbG9zZT17KCkgPT4ge1xyXG4gICAgICAgICAgc2V0T3Blbk1vZGFsKGZhbHNlKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+PC9Nb2RhbD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZmxleFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS1hdXRvXCI+XHJcbiAgICAgICAgICA8ZGl2PtCU0LXRgtCw0LvQuCDQv9GA0L7RhNC40LvRjzwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLWF1dG9cIj57Y3VycmVudFVzZXIgJiYgY3VycmVudFVzZXIuZW1haWx9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=