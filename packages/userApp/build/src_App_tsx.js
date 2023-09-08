"use strict";
(self["webpackChunkuserApp"] = self["webpackChunkuserApp"] || []).push([["src_App_tsx"],{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _Counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Counter */ "./src/Counter.tsx");

// import Header from 'nav/Header'

var App = function App() {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      children: "Hello world"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Counter__WEBPACK_IMPORTED_MODULE_1__.Counter, {})
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/Counter.tsx":
/*!*************************!*\
  !*** ./src/Counter.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Counter: () => (/* binding */ Counter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var Counter = function Counter() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    count = _useState2[0],
    setCount = _useState2[1];
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
      children: count
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
      onClick: function onClick() {
        return setCount(count + 1);
      },
      children: "Increment"
    })]
  });
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX0FwcF90c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQStEO0FBQy9EO0FBQ29DO0FBQ3BDLElBQU1LLEdBQUcsR0FBRyxTQUFOQSxHQUFHQSxDQUFBLEVBQVM7RUFDZCxPQUFRRix1REFBSyxDQUFDLEtBQUssRUFBRTtJQUFFRyxRQUFRLEVBQUUsQ0FBQ0wsc0RBQUksQ0FBQyxLQUFLLEVBQUU7TUFBRUssUUFBUSxFQUFFO0lBQWMsQ0FBQyxDQUFDLEVBQUVMLHNEQUFJLENBQUMsS0FBSyxFQUFFO01BQUVLLFFBQVEsRUFBRUwsc0RBQUksQ0FBQ0csNkNBQU8sRUFBRSxDQUFDLENBQUM7SUFBRSxDQUFDLENBQUM7RUFBRSxDQUFDLENBQUM7QUFDaEksQ0FBQztBQUNELGlFQUFlQyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ042QztBQUM5QjtBQUMxQixJQUFNRCxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQSxFQUFTO0VBQ3pCLElBQUFJLFNBQUEsR0FBMEJELCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUFFLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTlCRyxLQUFLLEdBQUFGLFVBQUE7SUFBRUcsUUFBUSxHQUFBSCxVQUFBO0VBQ3RCLE9BQVFOLHVEQUFLLENBQUMsS0FBSyxFQUFFO0lBQUVHLFFBQVEsRUFBRSxDQUFDTCxzREFBSSxDQUFDLElBQUksRUFBRTtNQUFFSyxRQUFRLEVBQUVLO0lBQU0sQ0FBQyxDQUFDLEVBQUVWLHNEQUFJLENBQUMsUUFBUSxFQUFFO01BQUVZLE9BQU8sRUFBRSxTQUFBQSxRQUFBO1FBQUEsT0FBTUQsUUFBUSxDQUFDRCxLQUFLLEdBQUcsQ0FBQyxDQUFDO01BQUE7TUFBRUwsUUFBUSxFQUFFO0lBQVksQ0FBQyxDQUFDO0VBQUUsQ0FBQyxDQUFDO0FBQ3hKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2VyQXBwLy4vc3JjL0FwcC50c3giLCJ3ZWJwYWNrOi8vdXNlckFwcC8uL3NyYy9Db3VudGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuLy8gaW1wb3J0IEhlYWRlciBmcm9tICduYXYvSGVhZGVyJ1xuaW1wb3J0IHsgQ291bnRlciB9IGZyb20gXCIuL0NvdW50ZXJcIjtcbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIHsgY2hpbGRyZW46IFwiSGVsbG8gd29ybGRcIiB9KSwgX2pzeChcImRpdlwiLCB7IGNoaWxkcmVuOiBfanN4KENvdW50ZXIsIHt9KSB9KV0gfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGNvbnN0IENvdW50ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIHsgY2hpbGRyZW46IFtfanN4KFwiaDFcIiwgeyBjaGlsZHJlbjogY291bnQgfSksIF9qc3goXCJidXR0b25cIiwgeyBvbkNsaWNrOiAoKSA9PiBzZXRDb3VudChjb3VudCArIDEpLCBjaGlsZHJlbjogXCJJbmNyZW1lbnRcIiB9KV0gfSkpO1xufTtcbiJdLCJuYW1lcyI6WyJqc3giLCJfanN4IiwianN4cyIsIl9qc3hzIiwiQ291bnRlciIsIkFwcCIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJjb3VudCIsInNldENvdW50Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=