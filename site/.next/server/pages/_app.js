"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/layout/PreLoader.js


const PreLoader = ()=>{
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("load", ()=>{
            setLoading(false);
        });
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        id: "preloader",
        style: {
            display: loading ? "flex" : "none"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            id: "loading-center",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "object"
            })
        })
    });
};
/* harmony default export */ const layout_PreLoader = (PreLoader);

;// CONCATENATED MODULE: ./pages/_app.js




function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(layout_PreLoader, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6490));
module.exports = __webpack_exports__;

})();