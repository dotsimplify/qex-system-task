webpackHotUpdate_N_E("pages/login",{

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

  function resetPassword(email) {
    return _components_firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].sendPasswordResetEmail(email);
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
    logout: logout,
    resetPassword: resetPassword
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AuthContext.Provider, {
    value: value,
    children: !loading && children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9BdXRoQ29udGV4dC5qcyJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUF1dGgiLCJ1c2VDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImN1cnJlbnRVc2VyIiwic2V0Q3VycmVudFVzZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNpZ251cCIsImVtYWlsIiwicGFzc3dvcmQiLCJhdXRoIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwibG9naW4iLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInJlc2V0UGFzc3dvcmQiLCJzZW5kUGFzc3dvcmRSZXNldEVtYWlsIiwibG9nb3V0Iiwic2lnbk91dCIsInVzZUVmZmVjdCIsInVuc3Vic2NyaWJlIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwidXNlciIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFdBQVcsZ0JBQUdDLDRDQUFLLENBQUNDLGFBQU4sRUFBcEI7QUFDTyxTQUFTQyxPQUFULEdBQW1CO0FBQUE7O0FBQ3hCLFNBQU9DLHdEQUFVLENBQUNKLFdBQUQsQ0FBakI7QUFDRDs7R0FGZUcsTzs7QUFJVCxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxrQkFDTkMsc0RBQVEsRUFERjtBQUFBLE1BQ3JDQyxXQURxQztBQUFBLE1BQ3hCQyxjQUR3Qjs7QUFBQSxtQkFFZEYsc0RBQVEsQ0FBQyxJQUFELENBRk07QUFBQSxNQUVyQ0csT0FGcUM7QUFBQSxNQUU1QkMsVUFGNEI7O0FBRzVDLFdBQVNDLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCQyxRQUF2QixFQUFpQztBQUMvQixXQUFPQyx5REFBSSxDQUFDQyw4QkFBTCxDQUFvQ0gsS0FBcEMsRUFBMkNDLFFBQTNDLENBQVA7QUFDRDs7QUFDRCxXQUFTRyxLQUFULENBQWVKLEtBQWYsRUFBc0JDLFFBQXRCLEVBQWdDO0FBQzlCLFdBQU9DLHlEQUFJLENBQUNHLDBCQUFMLENBQWdDTCxLQUFoQyxFQUF1Q0MsUUFBdkMsQ0FBUDtBQUNEOztBQUNELFdBQVNLLGFBQVQsQ0FBdUJOLEtBQXZCLEVBQThCO0FBQzVCLFdBQU9FLHlEQUFJLENBQUNLLHNCQUFMLENBQTRCUCxLQUE1QixDQUFQO0FBQ0Q7O0FBQ0QsV0FBU1EsTUFBVCxHQUFrQjtBQUNoQixXQUFPTix5REFBSSxDQUFDTyxPQUFMLEVBQVA7QUFDRDs7QUFDREMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsV0FBVyxHQUFHVCx5REFBSSxDQUFDVSxrQkFBTCxDQUF3QixVQUFDQyxJQUFELEVBQVU7QUFDcERqQixvQkFBYyxDQUFDaUIsSUFBRCxDQUFkO0FBQ0FmLGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsS0FIbUIsQ0FBcEI7QUFJQSxXQUFPYSxXQUFQO0FBQ0QsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQU9BLE1BQU1HLEtBQUssR0FBRztBQUFFbkIsZUFBVyxFQUFYQSxXQUFGO0FBQWVJLFVBQU0sRUFBTkEsTUFBZjtBQUF1QkssU0FBSyxFQUFMQSxLQUF2QjtBQUE4QkksVUFBTSxFQUFOQSxNQUE5QjtBQUFzQ0YsaUJBQWEsRUFBYkE7QUFBdEMsR0FBZDtBQUNBLHNCQUNFLHFFQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRVEsS0FBN0I7QUFBQSxjQUNHLENBQUNqQixPQUFELElBQVlKO0FBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0E1Qk07O0lBQU1ELFk7O0tBQUFBLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uOTA1Y2UzZDM0NDExYWY1MGJkNTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vY29tcG9uZW50cy9maXJlYmFzZVwiO1xyXG5cclxuY29uc3QgQXV0aENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBdXRoKCkge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgZnVuY3Rpb24gc2lnbnVwKGVtYWlsLCBwYXNzd29yZCkge1xyXG4gICAgcmV0dXJuIGF1dGguY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGxvZ2luKGVtYWlsLCBwYXNzd29yZCkge1xyXG4gICAgcmV0dXJuIGF1dGguc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gcmVzZXRQYXNzd29yZChlbWFpbCkge1xyXG4gICAgcmV0dXJuIGF1dGguc2VuZFBhc3N3b3JkUmVzZXRFbWFpbChlbWFpbCk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGxvZ291dCgpIHtcclxuICAgIHJldHVybiBhdXRoLnNpZ25PdXQoKTtcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcclxuICAgICAgc2V0Q3VycmVudFVzZXIodXNlcik7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdW5zdWJzY3JpYmU7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IHZhbHVlID0geyBjdXJyZW50VXNlciwgc2lnbnVwLCBsb2dpbiwgbG9nb3V0LCByZXNldFBhc3N3b3JkIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PlxyXG4gICAgICB7IWxvYWRpbmcgJiYgY2hpbGRyZW59XHJcbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=