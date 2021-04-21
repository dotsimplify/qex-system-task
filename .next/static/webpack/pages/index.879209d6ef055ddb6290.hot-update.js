webpackHotUpdate_N_E("pages/index",{

/***/ "./context/AuthContext.js":
/*!********************************!*\
  !*** ./context/AuthContext.js ***!
  \********************************/
/*! exports provided: useAuth, AuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuth", function() { return useAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/firebase */ "./components/firebase.js");


var _jsxFileName = "C:\\Users\\Subhash Kumar\\Desktop\\Projects\\qex-frontend\\context\\AuthContext.js",
    _s = $RefreshSig$(),
    _this = undefined,
    _s2 = $RefreshSig$();



var AuthContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
function useAuth() {
  _s();

  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(AuthContext);
}

_s(useAuth, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

var AuthProvider = function AuthProvider(_ref) {
  _s2();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      currentUser = _useState[0],
      setCurrentUser = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      loading = _useState2[0],
      setLoading = _useState2[1];

  function signup(email, password) {
    return _components_firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return _components_firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return _components_firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].signOut();
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var unsubscribe = _components_firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].onAuthStateChanged(function (user) {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  var value = {
    currentUser: currentUser,
    signup: signup,
    login: login,
    logout: logout
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AuthContext.Provider, {
    value: value,
    children: !loading && children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, _this);
};

_s2(AuthProvider, "1cdeWWSmbSz3cOWqWLAt+Ta4DMY=");

_c = AuthProvider;

var _c;

$RefreshReg$(_c, "AuthProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9BdXRoQ29udGV4dC5qcyJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUF1dGgiLCJ1c2VDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImN1cnJlbnRVc2VyIiwic2V0Q3VycmVudFVzZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNpZ251cCIsImVtYWlsIiwicGFzc3dvcmQiLCJhdXRoIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwibG9naW4iLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsImxvZ291dCIsInNpZ25PdXQiLCJ1c2VFZmZlY3QiLCJ1bnN1YnNjcmliZSIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInVzZXIiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLGdCQUFHQyw0Q0FBSyxDQUFDQyxhQUFOLEVBQXBCO0FBQ08sU0FBU0MsT0FBVCxHQUFtQjtBQUFBOztBQUN4QixTQUFPQyx3REFBVSxDQUFDSixXQUFELENBQWpCO0FBQ0Q7O0dBRmVHLE87O0FBSVQsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsa0JBQ05DLHNEQUFRLEVBREY7QUFBQSxNQUNyQ0MsV0FEcUM7QUFBQSxNQUN4QkMsY0FEd0I7O0FBQUEsbUJBRWRGLHNEQUFRLENBQUMsSUFBRCxDQUZNO0FBQUEsTUFFckNHLE9BRnFDO0FBQUEsTUFFNUJDLFVBRjRCOztBQUc1QyxXQUFTQyxNQUFULENBQWdCQyxLQUFoQixFQUF1QkMsUUFBdkIsRUFBaUM7QUFDL0IsV0FBT0MseURBQUksQ0FBQ0MsOEJBQUwsQ0FBb0NILEtBQXBDLEVBQTJDQyxRQUEzQyxDQUFQO0FBQ0Q7O0FBQ0QsV0FBU0csS0FBVCxDQUFlSixLQUFmLEVBQXNCQyxRQUF0QixFQUFnQztBQUM5QixXQUFPQyx5REFBSSxDQUFDRywwQkFBTCxDQUFnQ0wsS0FBaEMsRUFBdUNDLFFBQXZDLENBQVA7QUFDRDs7QUFDRCxXQUFTSyxNQUFULEdBQWtCO0FBQ2hCLFdBQU9KLHlEQUFJLENBQUNLLE9BQUwsRUFBUDtBQUNEOztBQUNEQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxXQUFXLEdBQUdQLHlEQUFJLENBQUNRLGtCQUFMLENBQXdCLFVBQUNDLElBQUQsRUFBVTtBQUNwRGYsb0JBQWMsQ0FBQ2UsSUFBRCxDQUFkO0FBQ0FiLGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsS0FIbUIsQ0FBcEI7QUFJQSxXQUFPVyxXQUFQO0FBQ0QsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQU9BLE1BQU1HLEtBQUssR0FBRztBQUFFakIsZUFBVyxFQUFYQSxXQUFGO0FBQWVJLFVBQU0sRUFBTkEsTUFBZjtBQUF1QkssU0FBSyxFQUFMQSxLQUF2QjtBQUE4QkUsVUFBTSxFQUFOQTtBQUE5QixHQUFkO0FBQ0Esc0JBQ0UscUVBQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFTSxLQUE3QjtBQUFBLGNBQ0csQ0FBQ2YsT0FBRCxJQUFZSjtBQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBekJNOztJQUFNRCxZOztLQUFBQSxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg3OTIwOWQ2ZWYwNTVkZGI2MjkwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZmlyZWJhc2VcIjtcclxuXHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXV0aCgpIHtcclxuICByZXR1cm4gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnRVc2VyLCBzZXRDdXJyZW50VXNlcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGZ1bmN0aW9uIHNpZ251cChlbWFpbCwgcGFzc3dvcmQpIHtcclxuICAgIHJldHVybiBhdXRoLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBsb2dpbihlbWFpbCwgcGFzc3dvcmQpIHtcclxuICAgIHJldHVybiBhdXRoLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGxvZ291dCgpIHtcclxuICAgIHJldHVybiBhdXRoLnNpZ25PdXQoKTtcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcclxuICAgICAgc2V0Q3VycmVudFVzZXIodXNlcik7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdW5zdWJzY3JpYmU7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IHZhbHVlID0geyBjdXJyZW50VXNlciwgc2lnbnVwLCBsb2dpbiwgbG9nb3V0IH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PlxyXG4gICAgICB7IWxvYWRpbmcgJiYgY2hpbGRyZW59XHJcbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=