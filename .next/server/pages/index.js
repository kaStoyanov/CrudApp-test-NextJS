"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\visual code folder\\CRUD-TODO\\pages\\index.js";


const index = () => {
  const {
    0: userInput,
    1: setUserInput
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: todoList,
    1: setTodoList
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);

  const handleChange = e => {
    e.preventDefault();
    setUserInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setTodoList([userInput, ...todoList]);
  };

  const handleDelete = todo => {
    const updatedArr = todoList.filter(todoItem => todoList.indexOf(todoItem) != todoList.indexOf(todo));
    setTodoList(updatedArr);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: "NextJS crud todo app"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        onChange: handleChange,
        type: "text"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: handleSubmit,
        children: "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: todoList.length >= 1 ? todoList.map((todo, index) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: [todo, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: e => {
              e.preventDefault();
              handleDelete(todo);
            },
            children: "Delete"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 55
          }, undefined)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 32
        }, undefined);
      }) : "Enter a todo item"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQyxLQUFLLEdBQUcsTUFBTTtBQUVoQixRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJILCtDQUFRLENBQUMsRUFBRCxDQUExQztBQUNBLFFBQU07QUFBQSxPQUFDSSxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkwsK0NBQVEsQ0FBQyxFQUFELENBQXhDOztBQUNBLFFBQU1NLFlBQVksR0FBR0MsQ0FBRCxJQUFLO0FBQ3JCQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQUwsSUFBQUEsWUFBWSxDQUFDSSxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBVixDQUFaO0FBQ0gsR0FIRDs7QUFJQSxRQUFNQyxZQUFZLEdBQUdKLENBQUQsSUFBSztBQUNyQkEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FILElBQUFBLFdBQVcsQ0FBQyxDQUNSSCxTQURRLEVBRVIsR0FBR0UsUUFGSyxDQUFELENBQVg7QUFJSCxHQU5EOztBQVFBLFFBQU1RLFlBQVksR0FBR0MsSUFBRCxJQUFRO0FBQ3hCLFVBQU1DLFVBQVUsR0FBR1YsUUFBUSxDQUFDVyxNQUFULENBQWdCQyxRQUFRLElBQUVaLFFBQVEsQ0FBQ2EsT0FBVCxDQUFpQkQsUUFBakIsS0FBNEJaLFFBQVEsQ0FBQ2EsT0FBVCxDQUFpQkosSUFBakIsQ0FBdEQsQ0FBbkI7QUFFQVIsSUFBQUEsV0FBVyxDQUFDUyxVQUFELENBQVg7QUFDSCxHQUpEOztBQUtBLHNCQUNJO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFBLDhCQUNJO0FBQU8sZ0JBQVEsRUFBRVIsWUFBakI7QUFBK0IsWUFBSSxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFRLGVBQU8sRUFBRUssWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBTUk7QUFBQSxnQkFFUVAsUUFBUSxDQUFDYyxNQUFULElBQWtCLENBQWxCLEdBQXNCZCxRQUFRLENBQUNlLEdBQVQsQ0FBYSxDQUFDTixJQUFELEVBQU1aLEtBQU4sS0FBYztBQUM3Qyw0QkFBTztBQUFBLHFCQUFpQlksSUFBakIsb0JBQXVCO0FBQVEsbUJBQU8sRUFBR04sQ0FBRCxJQUFLO0FBQ2hEQSxjQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQUksY0FBQUEsWUFBWSxDQUFDQyxJQUFELENBQVo7QUFDSCxhQUg2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBdkI7QUFBQSxXQUFTWixLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQVA7QUFJSCxPQUxxQixDQUF0QixHQU1DO0FBUlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQW9CSCxDQXpDRDs7QUEyQ0EsaUVBQWVBLEtBQWY7Ozs7Ozs7Ozs7QUM3Q0E7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL0NSVUQtVE9ETy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL0NSVUQtVE9ETy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vQ1JVRC1UT0RPL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbdXNlcklucHV0LCBzZXRVc2VySW5wdXRdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbdG9kb0xpc3QsIHNldFRvZG9MaXN0XSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0oZSk9PntcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBzZXRVc2VySW5wdXQoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPShlKT0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIHNldFRvZG9MaXN0KFtcclxuICAgICAgICAgICAgdXNlcklucHV0LFxyXG4gICAgICAgICAgICAuLi50b2RvTGlzdFxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlID0odG9kbyk9PntcclxuICAgICAgICBjb25zdCB1cGRhdGVkQXJyID0gdG9kb0xpc3QuZmlsdGVyKHRvZG9JdGVtPT50b2RvTGlzdC5pbmRleE9mKHRvZG9JdGVtKSE9dG9kb0xpc3QuaW5kZXhPZih0b2RvKSlcclxuXHJcbiAgICAgICAgc2V0VG9kb0xpc3QodXBkYXRlZEFycilcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyPk5leHRKUyBjcnVkIHRvZG8gYXBwPC9oMj5cclxuICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdHlwZT1cInRleHRcIi8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9MaXN0Lmxlbmd0aCA+PTEgPyB0b2RvTGlzdC5tYXAoKHRvZG8saW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpbmRleH0+e3RvZG99IDxidXR0b24gb25DbGljaz17KGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEZWxldGUodG9kbylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0gPkRlbGV0ZTwvYnV0dG9uPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICA6XCJFbnRlciBhIHRvZG8gaXRlbVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJpbmRleCIsInVzZXJJbnB1dCIsInNldFVzZXJJbnB1dCIsInRvZG9MaXN0Iiwic2V0VG9kb0xpc3QiLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZURlbGV0ZSIsInRvZG8iLCJ1cGRhdGVkQXJyIiwiZmlsdGVyIiwidG9kb0l0ZW0iLCJpbmRleE9mIiwibGVuZ3RoIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==