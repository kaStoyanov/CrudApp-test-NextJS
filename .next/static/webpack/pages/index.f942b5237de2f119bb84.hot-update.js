"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_visual_code_folder_CRUD_TODO_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\visual code folder\\CRUD-TODO\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();



var index = function index() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      userInput = _useState[0],
      setUserInput = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      todoList = _useState2[0],
      setTodoList = _useState2[1];

  var handleChange = function handleChange(e) {
    e.preventDefault();
    setUserInput(e.target.value);
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    setTodoList([userInput].concat((0,D_visual_code_folder_CRUD_TODO_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(todoList)));
  };

  var handleDelete = function handleDelete(todo) {
    var updatedArr = todoList.filter(function (todoItem) {
      return todoList.indexOf(todoItem) != todoList.indexOf(todo);
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: "NextJS crud todo app"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        onChange: handleChange,
        type: "text"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: handleSubmit,
        children: "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: todoList.length >= 1 ? todoList.map(function (todo, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: [todo, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: function onClick(e) {
              e.preventDefault();
              handleDelete(todo);
            },
            children: "Delete"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 55
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 32
        }, _this);
      }) : "Enter a todo item"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, _this);
};

_s(index, "In0CfmjzHYwZeIgaI5r9wD0TDjs=");

/* harmony default export */ __webpack_exports__["default"] = (index);

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjk0MmI1MjM3ZGUyZjExOWJiODQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFFa0JELCtDQUFRLENBQUMsRUFBRCxDQUYxQjtBQUFBLE1BRVRFLFNBRlM7QUFBQSxNQUVFQyxZQUZGOztBQUFBLG1CQUdnQkgsK0NBQVEsQ0FBQyxFQUFELENBSHhCO0FBQUEsTUFHVEksUUFIUztBQUFBLE1BR0NDLFdBSEQ7O0FBSWhCLE1BQU1DLFlBQVksR0FBRSxTQUFkQSxZQUFjLENBQUNDLENBQUQsRUFBSztBQUNyQkEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FMLElBQUFBLFlBQVksQ0FBQ0ksQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVYsQ0FBWjtBQUNILEdBSEQ7O0FBSUEsTUFBTUMsWUFBWSxHQUFFLFNBQWRBLFlBQWMsQ0FBQ0osQ0FBRCxFQUFLO0FBQ3JCQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQUgsSUFBQUEsV0FBVyxFQUNQSCxTQURPLDBJQUVKRSxRQUZJLEdBQVg7QUFJSCxHQU5EOztBQVFBLE1BQU1RLFlBQVksR0FBRSxTQUFkQSxZQUFjLENBQUNDLElBQUQsRUFBUTtBQUN4QixRQUFNQyxVQUFVLEdBQUdWLFFBQVEsQ0FBQ1csTUFBVCxDQUFnQixVQUFBQyxRQUFRO0FBQUEsYUFBRVosUUFBUSxDQUFDYSxPQUFULENBQWlCRCxRQUFqQixLQUE0QlosUUFBUSxDQUFDYSxPQUFULENBQWlCSixJQUFqQixDQUE5QjtBQUFBLEtBQXhCLENBQW5CO0FBRUgsR0FIRDs7QUFJQSxzQkFDSTtBQUFBLDRCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFBLDhCQUNJO0FBQU8sZ0JBQVEsRUFBRVAsWUFBakI7QUFBK0IsWUFBSSxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQVEsZUFBTyxFQUFFSyxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBTUk7QUFBQSxnQkFFUVAsUUFBUSxDQUFDYyxNQUFULElBQWtCLENBQWxCLEdBQXNCZCxRQUFRLENBQUNlLEdBQVQsQ0FBYSxVQUFDTixJQUFELEVBQU1aLEtBQU4sRUFBYztBQUM3Qyw0QkFBTztBQUFBLHFCQUFpQlksSUFBakIsb0JBQXVCO0FBQVEsbUJBQU8sRUFBRSxpQkFBQ04sQ0FBRCxFQUFLO0FBQ2hEQSxjQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQUksY0FBQUEsWUFBWSxDQUFDQyxJQUFELENBQVo7QUFDSCxhQUg2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBdkI7QUFBQSxXQUFTWixLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFJSCxPQUxxQixDQUF0QixHQU1DO0FBUlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBb0JILENBeENEOztHQUFNQTs7QUEwQ04sK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbdXNlcklucHV0LCBzZXRVc2VySW5wdXRdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbdG9kb0xpc3QsIHNldFRvZG9MaXN0XSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0oZSk9PntcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBzZXRVc2VySW5wdXQoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPShlKT0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIHNldFRvZG9MaXN0KFtcclxuICAgICAgICAgICAgdXNlcklucHV0LFxyXG4gICAgICAgICAgICAuLi50b2RvTGlzdFxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlID0odG9kbyk9PntcclxuICAgICAgICBjb25zdCB1cGRhdGVkQXJyID0gdG9kb0xpc3QuZmlsdGVyKHRvZG9JdGVtPT50b2RvTGlzdC5pbmRleE9mKHRvZG9JdGVtKSE9dG9kb0xpc3QuaW5kZXhPZih0b2RvKSlcclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMj5OZXh0SlMgY3J1ZCB0b2RvIGFwcDwvaDI+XHJcbiAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHR5cGU9XCJ0ZXh0XCIvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2RvTGlzdC5sZW5ndGggPj0xID8gdG9kb0xpc3QubWFwKCh0b2RvLGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aW5kZXh9Pnt0b2RvfSA8YnV0dG9uIG9uQ2xpY2s9eyhlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGVsZXRlKHRvZG8pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19ID5EZWxldGU8L2J1dHRvbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgOlwiRW50ZXIgYSB0b2RvIGl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleFxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJpbmRleCIsInVzZXJJbnB1dCIsInNldFVzZXJJbnB1dCIsInRvZG9MaXN0Iiwic2V0VG9kb0xpc3QiLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZURlbGV0ZSIsInRvZG8iLCJ1cGRhdGVkQXJyIiwiZmlsdGVyIiwidG9kb0l0ZW0iLCJpbmRleE9mIiwibGVuZ3RoIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==