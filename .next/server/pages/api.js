"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api";
exports.ids = ["pages/api"];
exports.modules = {

/***/ "./pages/api/index.ts":
/*!****************************!*\
  !*** ./pages/api/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nfunction dateFormatted(date) {\n    return new Date(date).toLocaleDateString(\"en-US\", {\n        day: \"2-digit\",\n        month: \"long\",\n        year: \"numeric\"\n    });\n}\nfunction handler(req, res) {\n    res.status(200).json({\n        message: `API is ready and running at: ${dateFormatted(new Date())}`\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDZFQUE2RTtBQVE3RSxTQUFTQSxjQUFjQyxJQUFtQixFQUFVO0lBQ2xELE9BQU8sSUFBSUMsS0FBS0QsTUFBTUUsa0JBQWtCLENBQUMsU0FBUztRQUNoREMsS0FBSztRQUNMQyxPQUFPO1FBQ1BDLE1BQU07SUFDUjtBQUNGO0FBRWUsU0FBU0MsUUFDdEJDLEdBQW1CLEVBQ25CQyxHQUEyQixFQUMzQjtJQUNBQSxJQUFJQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQ25CQyxTQUFTLENBQUMsNkJBQTZCLEVBQUVaLGNBQWMsSUFBSUUsUUFBUSxDQUFDO0lBQ3RFO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NhYXNkZXNrLWxhbmRpbmcvLi9wYWdlcy9hcGkvaW5kZXgudHM/ZjczMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICAvLyBjcmVhdGVkQXQ/OiBEYXRlIHwgc3RyaW5nO1xufTtcblxuZnVuY3Rpb24gZGF0ZUZvcm1hdHRlZChkYXRlOiBEYXRlIHwgc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIG5ldyBEYXRlKGRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIsIHtcbiAgICBkYXk6IFwiMi1kaWdpdFwiLFxuICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFByb3BzPlxuKSB7XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICBtZXNzYWdlOiBgQVBJIGlzIHJlYWR5IGFuZCBydW5uaW5nIGF0OiAke2RhdGVGb3JtYXR0ZWQobmV3IERhdGUoKSl9YCxcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiZGF0ZUZvcm1hdHRlZCIsImRhdGUiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/index.ts"));
module.exports = __webpack_exports__;

})();