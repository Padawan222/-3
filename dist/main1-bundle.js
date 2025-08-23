/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/style.scss":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/style.scss ***!
  \*************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-family);
  color: var(--text);
  font-size: 1.6rem;
  width: 100%;
}

/* Landscape phones and down */
/* Landscape phone to portrait tablet */
/* Portrait tablet to landscape and desktop */
/* Large desktop */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --beige: #d5c2a1;
  --violet: #5f27cd;
  --bordeaux: maroon;
  --font-family: "Nunito", sans-serif;
  --ff-title: "Lavishly Yours", cursive;
}

.title {
  font-family: var(--ff-title);
  font-weight: 200;
  font-size: 3rem;
  color: white;
}

.text-deco {
  text-decoration: none;
}

.italic {
  font-style: italic;
}

.separator-1 {
  display: none;
  height: 2px;
  width: 80%;
  background: #eee;
  animation: separator-1-anim 2s;
}
@keyframes separator-1-anim {
  0% {
    transform: translateX(-100%);
  }
}

.separator-1-active {
  display: flex;
}

.separator-xs-2 {
  display: none;
  height: 1px;
  width: 60%;
  background: white;
  margin: 2rem;
}
@media (max-width: 480px) {
  .separator-xs-2 {
    display: flex;
  }
}
@media (min-width: 480px) and (max-width: 1099px) {
  .separator-xs-2 {
    display: flex;
  }
}

.separator-2 {
  height: 1px;
  width: 80%;
  background: white;
  margin: 2rem;
}

header {
  position: fixed;
  top: 0;
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8rem;
  width: 100%;
  animation: anim-start 6s;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);
  transition: 1s;
}

.header-active-1 {
  background: rgba(0, 0, 0, 0.8);
}

h1 {
  margin-top: 1rem;
  color: #eee;
  font-family: var(--ff-title);
  font-weight: 200;
  font-size: 4rem;
}

.img-header {
  height: 6rem;
  margin: 0 2rem;
}
@media (max-width: 480px) {
  .img-header {
    margin: 0 1rem;
  }
}

.container-logo-title {
  display: flex;
  animation: opacity 7s;
  text-decoration: none;
  animation: 3s logo-header;
}
@keyframes logo-header {
  0% {
    transform: translateX(-100%);
  }
}

.header-container-background-none {
  background: none;
}

.container-hc-text {
  display: flex;
  flex-direction: column;
  padding: 3rem;
  border-radius: 2rem;
  color: white;
  text-align: center;
  backdrop-filter: blur(1rem);
  margin: 2rem;
  animation: 3s hc-text;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-bottom: 25rem;
}
@media (max-width: 480px) {
  .container-hc-text {
    margin-bottom: 2rem;
  }
}
@media (min-width: 480px) and (max-width: 1099px) {
  .container-hc-text {
    margin-bottom: 2rem;
  }
}
@keyframes hc-text {
  0% {
    transform: scaleY(0%);
  }
  60% {
    transform: scaleY(0%);
  }
}

.container-hc-text-anim {
  transition: all 1s;
  opacity: 0;
}

.container-hc-text-anim-2 {
  transition: all 1s;
  opacity: 1;
}

h2 {
  font-family: var(--ff-title);
  font-weight: 200;
  font-size: 6rem;
  margin-bottom: 2rem;
  color: rgb(255, 237, 237);
}
@media (max-width: 480px) {
  h2 {
    font-size: 4rem;
  }
}

.fleche-header-container {
  width: 5rem;
  position: absolute;
  bottom: 3rem;
  left: calc(50% - 2.5rem);
  color: white;
  font-size: 4rem;
  rotate: 180deg;
  scroll-behavior: smooth;
  animation: 3s fleche-hc;
}
.fleche-header-container:hover {
  transition: 2s;
  color: var(--bordeaux);
}
@keyframes fleche-hc {
  0% {
    transform: translateY(-150%);
  }
}

.fleche-header-container-anim {
  transition: all 1s;
  opacity: 0;
}

.fleche-header-container-anim-2 {
  transition: all 1s;
  opacity: 1;
}

.hc-text {
  color: #eee;
  font-size: 2rem;
}
@media (max-width: 480px) {
  .hc-text {
    font-size: 1.6rem;
  }
}

.btn-xs {
  display: none;
}

@media (max-width: 480px) {
  .btn-xs {
    display: flex;
  }
}
@media (min-width: 480px) and (max-width: 1099px) {
  .btn-xs {
    display: flex;
  }
}
.btn-xs {
  position: absolute;
  right: 0;
  height: 2.5rem;
  width: 3rem;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transition: all 2s;
  cursor: pointer;
  margin: 1rem;
  animation: opacity 7s;
}

.bar {
  height: 2px;
  width: 2.5rem;
  background: white;
  position: absolute;
  transition: all 0.3s;
}

.bar-1 {
  top: 0;
}

.bar-1-active-1 {
  top: calc(50% - 1px);
}

.bar-1-active-2 {
  rotate: 45deg;
}

.bar-2-active {
  opacity: 0;
}

.bar-3 {
  bottom: 0;
}

.bar-3-active-1 {
  bottom: calc(50% - 1px);
}

.bar-3-active-2 {
  rotate: -45deg;
}

.nav-active-1-xs {
  transition: 1s;
  transform: translateX(100%);
}

.nav-active-2-xs {
  transition: 1s;
  transform: translateX(0%);
}

nav {
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 2rem;
  animation: 3s menu-anim;
}
@keyframes menu-anim {
  0% {
    transform: translateY(-120%);
  }
}
@media (max-width: 480px) {
  nav {
    height: auto;
    width: 100%;
    display: none;
    flex-direction: column;
    position: absolute;
    top: 8rem;
    margin: 0 0;
    animation: none;
    animation: menu-responsive 1s;
    background: rgba(0, 0, 0, 0.8);
  }
}
@media (min-width: 480px) and (max-width: 1099px) {
  nav {
    height: 8rem;
    width: 100%;
    display: none;
    justify-content: space-around;
    position: absolute;
    top: 8rem;
    margin: 0 0;
    animation: none;
    animation: menu-responsive 1s;
    background: var(--beige);
    background: rgba(0, 0, 0, 0.8);
  }
}

.element-nav-bar {
  margin: 0 2rem;
  color: #eee;
  font-size: 2.8rem;
  letter-spacing: 0.1rem;
  font-family: var(--ff-title);
  text-decoration: none;
  transition: 1s;
}
.element-nav-bar:hover {
  font-size: 3rem;
  letter-spacing: 0.2rem;
}
@media (max-width: 480px) {
  .element-nav-bar {
    margin: 1rem;
  }
}

.btn {
  height: 5rem;
  width: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3rem;
  text-decoration: none;
  color: white;
  font-size: 1.8rem;
  transition: 1s;
  z-index: 1;
}
@media (max-width: 480px) {
  .btn {
    text-decoration: underline;
  }
}
@media (min-width: 480px) and (max-width: 1099px) {
  .btn {
    text-decoration: underline;
  }
}
.btn:hover {
  width: 18rem;
  font-size: 2rem;
  letter-spacing: 0.1rem;
  cursor: pointer;
  text-decoration: none !important;
}

footer {
  grid-area: footer;
  height: auto;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--beige);
  animation: anim-start 6s;
  text-align: center;
}

.footer-content {
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
@media (max-width: 480px) {
  .footer-content {
    flex-direction: column;
  }
}
@media (min-width: 480px) and (max-width: 1099px) {
  .footer-content {
    flex-direction: column;
  }
}

.ft {
  height: auto;
  width: 24rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

a {
  font-style: italic;
  color: var(--bordeaux);
}

.link-page {
  transition: all 1s;
}
.link-page:hover {
  width: 22rem;
  font-size: 2rem;
  letter-spacing: 0.1rem;
  cursor: pointer;
}

h5 {
  display: flex;
  align-items: center;
  color: var(--bordeaux);
  font-size: 1.8rem;
  font-weight: 200;
}

.link-h5 {
  font-family: var(--ff-title);
  font-style: none;
  text-decoration: none;
  font-weight: 200;
  font-size: 2.5rem;
  letter-spacing: 0.1rem;
  margin-left: 0.5rem;
  color: var(--bordeaux);
}

.title-footer {
  color: var(--bordeaux);
}

.img-footer {
  height: 8rem;
  margin: 0 2rem;
}
@media (max-width: 480px) {
  .img-footer {
    margin: 0 1rem;
  }
}

@media (max-width: 480px) {
  .ft-logo {
    display: none;
  }
}
@media (min-width: 480px) and (max-width: 1099px) {
  .ft-logo {
    display: none;
  }
}

.ft-logo-xs {
  display: none;
}
@media (max-width: 480px) {
  .ft-logo-xs {
    display: flex;
    margin-bottom: 2rem;
  }
}
@media (min-width: 480px) and (max-width: 1099px) {
  .ft-logo-xs {
    display: flex;
    margin-bottom: 2rem;
  }
}

@keyframes menu-responsive {
  0% {
    transform: translateX(-100%);
  }
}`, "",{"version":3,"sources":["webpack://./src/assets/styles/_base.scss","webpack://./src/assets/styles/style.scss","webpack://./src/assets/styles/_media-queries.scss","webpack://./src/assets/styles/_reset.scss","webpack://./src/assets/styles/_variables.scss","webpack://./src/assets/styles/_utils.scss","webpack://./src/assets/styles/_separator.scss","webpack://./src/assets/styles/_header.scss","webpack://./src/assets/styles/_header-container.scss","webpack://./src/assets/styles/_menu-responsive.scss","webpack://./src/assets/styles/_menu.scss","webpack://./src/assets/styles/_btn.scss","webpack://./src/assets/styles/_footer.scss","webpack://./src/assets/styles/_animations.scss"],"names":[],"mappings":"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","sourcesContent":["html {\n  font-size: 62.5%;\n  scroll-behavior: smooth;\n}\nbody {\n  font-family: var(--font-family);\n  color: var(--text);\n  font-size: 1.6rem;\n  width: 100%;\n}\n","html {\n  font-size: 62.5%;\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: var(--font-family);\n  color: var(--text);\n  font-size: 1.6rem;\n  width: 100%;\n}\n\n/* Landscape phones and down */\n/* Landscape phone to portrait tablet */\n/* Portrait tablet to landscape and desktop */\n/* Large desktop */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --beige: #d5c2a1;\n  --violet: #5f27cd;\n  --bordeaux: maroon;\n  --font-family: \"Nunito\", sans-serif;\n  --ff-title: \"Lavishly Yours\", cursive;\n}\n\n.title {\n  font-family: var(--ff-title);\n  font-weight: 200;\n  font-size: 3rem;\n  color: white;\n}\n\n.text-deco {\n  text-decoration: none;\n}\n\n.italic {\n  font-style: italic;\n}\n\n.separator-1 {\n  display: none;\n  height: 2px;\n  width: 80%;\n  background: #eee;\n  animation: separator-1-anim 2s;\n}\n@keyframes separator-1-anim {\n  0% {\n    transform: translateX(-100%);\n  }\n}\n\n.separator-1-active {\n  display: flex;\n}\n\n.separator-xs-2 {\n  display: none;\n  height: 1px;\n  width: 60%;\n  background: white;\n  margin: 2rem;\n}\n@media (max-width: 480px) {\n  .separator-xs-2 {\n    display: flex;\n  }\n}\n@media (min-width: 480px) and (max-width: 1099px) {\n  .separator-xs-2 {\n    display: flex;\n  }\n}\n\n.separator-2 {\n  height: 1px;\n  width: 80%;\n  background: white;\n  margin: 2rem;\n}\n\nheader {\n  position: fixed;\n  top: 0;\n  grid-area: header;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 8rem;\n  width: 100%;\n  animation: anim-start 6s;\n  z-index: 1000;\n  background: rgba(0, 0, 0, 0.5);\n  transition: 1s;\n}\n\n.header-active-1 {\n  background: rgba(0, 0, 0, 0.8);\n}\n\nh1 {\n  margin-top: 1rem;\n  color: #eee;\n  font-family: var(--ff-title);\n  font-weight: 200;\n  font-size: 4rem;\n}\n\n.img-header {\n  height: 6rem;\n  margin: 0 2rem;\n}\n@media (max-width: 480px) {\n  .img-header {\n    margin: 0 1rem;\n  }\n}\n\n.container-logo-title {\n  display: flex;\n  animation: opacity 7s;\n  text-decoration: none;\n  animation: 3s logo-header;\n}\n@keyframes logo-header {\n  0% {\n    transform: translateX(-100%);\n  }\n}\n\n.header-container-background-none {\n  background: none;\n}\n\n.container-hc-text {\n  display: flex;\n  flex-direction: column;\n  padding: 3rem;\n  border-radius: 2rem;\n  color: white;\n  text-align: center;\n  backdrop-filter: blur(1rem);\n  margin: 2rem;\n  animation: 3s hc-text;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  margin-bottom: 25rem;\n}\n@media (max-width: 480px) {\n  .container-hc-text {\n    margin-bottom: 2rem;\n  }\n}\n@media (min-width: 480px) and (max-width: 1099px) {\n  .container-hc-text {\n    margin-bottom: 2rem;\n  }\n}\n@keyframes hc-text {\n  0% {\n    transform: scaleY(0%);\n  }\n  60% {\n    transform: scaleY(0%);\n  }\n}\n\n.container-hc-text-anim {\n  transition: all 1s;\n  opacity: 0;\n}\n\n.container-hc-text-anim-2 {\n  transition: all 1s;\n  opacity: 1;\n}\n\nh2 {\n  font-family: var(--ff-title);\n  font-weight: 200;\n  font-size: 6rem;\n  margin-bottom: 2rem;\n  color: rgb(255, 237, 237);\n}\n@media (max-width: 480px) {\n  h2 {\n    font-size: 4rem;\n  }\n}\n\n.fleche-header-container {\n  width: 5rem;\n  position: absolute;\n  bottom: 3rem;\n  left: calc(50% - 2.5rem);\n  color: white;\n  font-size: 4rem;\n  rotate: 180deg;\n  scroll-behavior: smooth;\n  animation: 3s fleche-hc;\n}\n.fleche-header-container:hover {\n  transition: 2s;\n  color: var(--bordeaux);\n}\n@keyframes fleche-hc {\n  0% {\n    transform: translateY(-150%);\n  }\n}\n\n.fleche-header-container-anim {\n  transition: all 1s;\n  opacity: 0;\n}\n\n.fleche-header-container-anim-2 {\n  transition: all 1s;\n  opacity: 1;\n}\n\n.hc-text {\n  color: #eee;\n  font-size: 2rem;\n}\n@media (max-width: 480px) {\n  .hc-text {\n    font-size: 1.6rem;\n  }\n}\n\n.btn-xs {\n  display: none;\n}\n\n@media (max-width: 480px) {\n  .btn-xs {\n    display: flex;\n  }\n}\n@media (min-width: 480px) and (max-width: 1099px) {\n  .btn-xs {\n    display: flex;\n  }\n}\n.btn-xs {\n  position: absolute;\n  right: 0;\n  height: 2.5rem;\n  width: 3rem;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  transition: all 2s;\n  cursor: pointer;\n  margin: 1rem;\n  animation: opacity 7s;\n}\n\n.bar {\n  height: 2px;\n  width: 2.5rem;\n  background: white;\n  position: absolute;\n  transition: all 0.3s;\n}\n\n.bar-1 {\n  top: 0;\n}\n\n.bar-1-active-1 {\n  top: calc(50% - 1px);\n}\n\n.bar-1-active-2 {\n  rotate: 45deg;\n}\n\n.bar-2-active {\n  opacity: 0;\n}\n\n.bar-3 {\n  bottom: 0;\n}\n\n.bar-3-active-1 {\n  bottom: calc(50% - 1px);\n}\n\n.bar-3-active-2 {\n  rotate: -45deg;\n}\n\n.nav-active-1-xs {\n  transition: 1s;\n  transform: translateX(100%);\n}\n\n.nav-active-2-xs {\n  transition: 1s;\n  transform: translateX(0%);\n}\n\nnav {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  margin: 0 2rem;\n  animation: 3s menu-anim;\n}\n@keyframes menu-anim {\n  0% {\n    transform: translateY(-120%);\n  }\n}\n@media (max-width: 480px) {\n  nav {\n    height: auto;\n    width: 100%;\n    display: none;\n    flex-direction: column;\n    position: absolute;\n    top: 8rem;\n    margin: 0 0;\n    animation: none;\n    animation: menu-responsive 1s;\n    background: rgba(0, 0, 0, 0.8);\n  }\n}\n@media (min-width: 480px) and (max-width: 1099px) {\n  nav {\n    height: 8rem;\n    width: 100%;\n    display: none;\n    justify-content: space-around;\n    position: absolute;\n    top: 8rem;\n    margin: 0 0;\n    animation: none;\n    animation: menu-responsive 1s;\n    background: var(--beige);\n    background: rgba(0, 0, 0, 0.8);\n  }\n}\n\n.element-nav-bar {\n  margin: 0 2rem;\n  color: #eee;\n  font-size: 2.8rem;\n  letter-spacing: 0.1rem;\n  font-family: var(--ff-title);\n  text-decoration: none;\n  transition: 1s;\n}\n.element-nav-bar:hover {\n  font-size: 3rem;\n  letter-spacing: 0.2rem;\n}\n@media (max-width: 480px) {\n  .element-nav-bar {\n    margin: 1rem;\n  }\n}\n\n.btn {\n  height: 5rem;\n  width: 15rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 3rem;\n  text-decoration: none;\n  color: white;\n  font-size: 1.8rem;\n  transition: 1s;\n  z-index: 1;\n}\n@media (max-width: 480px) {\n  .btn {\n    text-decoration: underline;\n  }\n}\n@media (min-width: 480px) and (max-width: 1099px) {\n  .btn {\n    text-decoration: underline;\n  }\n}\n.btn:hover {\n  width: 18rem;\n  font-size: 2rem;\n  letter-spacing: 0.1rem;\n  cursor: pointer;\n  text-decoration: none !important;\n}\n\nfooter {\n  grid-area: footer;\n  height: auto;\n  width: 100%;\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: var(--beige);\n  animation: anim-start 6s;\n  text-align: center;\n}\n\n.footer-content {\n  height: auto;\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n@media (max-width: 480px) {\n  .footer-content {\n    flex-direction: column;\n  }\n}\n@media (min-width: 480px) and (max-width: 1099px) {\n  .footer-content {\n    flex-direction: column;\n  }\n}\n\n.ft {\n  height: auto;\n  width: 24rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\na {\n  font-style: italic;\n  color: var(--bordeaux);\n}\n\n.link-page {\n  transition: all 1s;\n}\n.link-page:hover {\n  width: 22rem;\n  font-size: 2rem;\n  letter-spacing: 0.1rem;\n  cursor: pointer;\n}\n\nh5 {\n  display: flex;\n  align-items: center;\n  color: var(--bordeaux);\n  font-size: 1.8rem;\n  font-weight: 200;\n}\n\n.link-h5 {\n  font-family: var(--ff-title);\n  font-style: none;\n  text-decoration: none;\n  font-weight: 200;\n  font-size: 2.5rem;\n  letter-spacing: 0.1rem;\n  margin-left: 0.5rem;\n  color: var(--bordeaux);\n}\n\n.title-footer {\n  color: var(--bordeaux);\n}\n\n.img-footer {\n  height: 8rem;\n  margin: 0 2rem;\n}\n@media (max-width: 480px) {\n  .img-footer {\n    margin: 0 1rem;\n  }\n}\n\n@media (max-width: 480px) {\n  .ft-logo {\n    display: none;\n  }\n}\n@media (min-width: 480px) and (max-width: 1099px) {\n  .ft-logo {\n    display: none;\n  }\n}\n\n.ft-logo-xs {\n  display: none;\n}\n@media (max-width: 480px) {\n  .ft-logo-xs {\n    display: flex;\n    margin-bottom: 2rem;\n  }\n}\n@media (min-width: 480px) and (max-width: 1099px) {\n  .ft-logo-xs {\n    display: flex;\n    margin-bottom: 2rem;\n  }\n}\n\n@keyframes menu-responsive {\n  0% {\n    transform: translateX(-100%);\n  }\n}","/* Landscape phones and down */\r\n@mixin xs {\r\n  @media (max-width: 480px) {\r\n    @content;\r\n  }\r\n}\r\n/* Landscape phone to portrait tablet */\r\n@mixin sm {\r\n  @media (min-width: 480px) and (max-width: 1099px) {\r\n    @content;\r\n  }\r\n}\r\n/* Portrait tablet to landscape and desktop */\r\n@mixin md {\r\n  @media (min-width: 1100px) and (max-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n/* Large desktop */\r\n@mixin xl {\r\n  @media (min-width: 1200px) and (max-width: 2559px) {\r\n    @content;\r\n  }\r\n}\r\n@mixin xxl {\r\n  @media (min-width: 2559px) {\r\n    @content;\r\n  }\r\n}\r\n","* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n",":root {\r\n  //color\r\n  --beige: #d5c2a1;\r\n  --violet: #5f27cd;\r\n  --bordeaux: maroon;\r\n\r\n  // font family\r\n  --font-family: \"Nunito\", sans-serif;\r\n  --ff-title: \"Lavishly Yours\", cursive;\r\n}\r\n",".title {\r\n  font-family: var(--ff-title);\r\n  font-weight: 200;\r\n  font-size: 3rem;\r\n  // letter-spacing: 0.1rem;\r\n  color: white;\r\n}\r\n.text-deco {\r\n  text-decoration: none;\r\n}\r\n.italic {\r\n  font-style: italic;\r\n}\r\n","@use \"media-queries\" as *;\n\n// .separator-xs-1 {\n//   display: none;\n//   height: 1px;\n//   width: 80%;\n//   background: white;\n//   margin: 2rem;\n//   @include xs {\n//     display: flex;\n//   }\n// }\n.separator-1 {\n  display: none;\n  height: 2px;\n  width: 80%;\n  background: #eee;\n  animation: separator-1-anim 2s;\n  @keyframes separator-1-anim {\n    0% {\n      transform: translateX(-100%);\n    }\n  }\n}\n.separator-1-active {\n  display: flex;\n}\n.separator-xs-2 {\n  display: none;\n  height: 1px;\n  width: 60%;\n  background: white;\n  margin: 2rem;\n  @include xs {\n    display: flex;\n  }\n  @include sm {\n    display: flex;\n  }\n}\n.separator-2 {\n  height: 1px;\n  width: 80%;\n  background: white;\n  margin: 2rem;\n}\n","@use \"media-queries\" as *;\r\nheader {\r\n  position: fixed;\r\n  top: 0;\r\n  grid-area: header;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  height: 8rem;\r\n  width: 100%;\r\n  animation: anim-start 6s;\r\n  z-index: 1000;\r\n  // background: var(--beige);\r\n  background: rgba(0, 0, 0, 0.5);\r\n  transition: 1s;\r\n}\r\n.header-active-1 {\r\n  background: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\nh1 {\r\n  margin-top: 1rem;\r\n  color: #eee;\r\n  font-family: var(--ff-title);\r\n  font-weight: 200;\r\n  font-size: 4rem;\r\n}\r\n.img-header {\r\n  height: 6rem;\r\n  margin: 0 2rem;\r\n  @include xs {\r\n    margin: 0 1rem;\r\n  }\r\n}\r\n.container-logo-title {\r\n  display: flex;\r\n  animation: opacity 7s;\r\n  text-decoration: none;\r\n  animation: 3s logo-header;\r\n  @keyframes logo-header {\r\n    0% {\r\n      transform: translateX(-100%);\r\n    }\r\n  }\r\n}\r\n","@use \"media-queries\" as *;\n\n.header-container-background-none {\n  background: none;\n}\n.container-hc-text {\n  display: flex;\n  flex-direction: column;\n  padding: 3rem;\n  border-radius: 2rem;\n  color: white;\n  text-align: center;\n  backdrop-filter: blur(1rem);\n  margin: 2rem;\n  animation: 3s hc-text;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  margin-bottom: 25rem;\n  @include xs {\n    margin-bottom: 2rem;\n  }\n  @include sm {\n    margin-bottom: 2rem;\n  }\n  @keyframes hc-text {\n    0% {\n      transform: scaleY(0%);\n    }\n    60% {\n      transform: scaleY(0%);\n    }\n  }\n}\n.container-hc-text-anim {\n  transition: all 1s;\n  opacity: 0;\n}\n.container-hc-text-anim-2 {\n  transition: all 1s;\n  opacity: 1;\n}\nh2 {\n  font-family: var(--ff-title);\n  font-weight: 200;\n  font-size: 6rem;\n  margin-bottom: 2rem;\n  color: rgb(255, 237, 237);\n  @include xs {\n    font-size: 4rem;\n  }\n}\n.fleche-header-container {\n  width: 5rem;\n  position: absolute;\n  bottom: 3rem;\n  left: calc(50% - 2.5rem);\n  color: white;\n  font-size: 4rem;\n  rotate: 180deg;\n  scroll-behavior: smooth;\n  animation: 3s fleche-hc;\n  &:hover {\n    transition: 2s;\n    color: var(--bordeaux);\n  }\n  @keyframes fleche-hc {\n    0% {\n      transform: translateY(-150%);\n    }\n  }\n}\n.fleche-header-container-anim {\n  transition: all 1s;\n  opacity: 0;\n}\n.fleche-header-container-anim-2 {\n  transition: all 1s;\n  opacity: 1;\n}\n.hc-text {\n  color: #eee;\n  font-size: 2rem;\n  @include xs {\n    font-size: 1.6rem;\n  }\n}\n// .container-link-hc {\n//   height: auto;\n//   width: 40%;\n//   display: flex;\n//   justify-content: space-between;\n// }\n// .link-hc {\n//   height: auto;\n//   width: auto;\n//   text-decoration: none;\n//   color: #eee;\n//   backdrop-filter: blur(10rem);\n// }\n","@use \"media-queries\" as *;\r\n\r\n// btn xs\r\n\r\n.btn-xs {\r\n  display: none;\r\n}\r\n@include xs {\r\n  .btn-xs {\r\n    display: flex;\r\n  }\r\n}\r\n@include sm {\r\n  .btn-xs {\r\n    display: flex;\r\n  }\r\n}\r\n\r\n.btn-xs {\r\n  position: absolute;\r\n  right: 0;\r\n  height: 2.5rem;\r\n  width: 3rem;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  transition: all 2s;\r\n  cursor: pointer;\r\n  margin: 1rem;\r\n  animation: opacity 7s;\r\n}\r\n\r\n.bar {\r\n  height: 2px;\r\n  width: 2.5rem;\r\n  background: white;\r\n  position: absolute;\r\n  transition: all 0.3s;\r\n}\r\n.bar-1 {\r\n  top: 0;\r\n}\r\n.bar-1-active-1 {\r\n  top: calc(50% - 1px);\r\n}\r\n.bar-1-active-2 {\r\n  rotate: 45deg;\r\n}\r\n\r\n.bar-2-active {\r\n  opacity: 0;\r\n}\r\n.bar-3 {\r\n  bottom: 0;\r\n}\r\n.bar-3-active-1 {\r\n  bottom: calc(50% - 1px);\r\n}\r\n.bar-3-active-2 {\r\n  rotate: -45deg;\r\n}\r\n.nav-active-1-xs {\r\n  transition: 1s;\r\n  transform: translateX(100%);\r\n}\r\n.nav-active-2-xs {\r\n  transition: 1s;\r\n  transform: translateX(0%);\r\n}\r\n","@use \"media-queries\" as *;\r\n\r\nnav {\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  margin: 0 2rem;\r\n  // animation: opacity 7s;\r\n  animation: 3s menu-anim;\r\n  @keyframes menu-anim {\r\n    0% {\r\n      transform: translateY(-120%);\r\n    }\r\n  }\r\n\r\n  @include xs {\r\n    height: auto;\r\n    width: 100%;\r\n    display: none;\r\n    flex-direction: column;\r\n    position: absolute;\r\n    top: 8rem;\r\n    margin: 0 0;\r\n    animation: none;\r\n    animation: menu-responsive 1s;\r\n    background: rgba(0, 0, 0, 0.8);\r\n  }\r\n  @include sm {\r\n    height: 8rem;\r\n    width: 100%;\r\n    display: none;\r\n    justify-content: space-around;\r\n    position: absolute;\r\n    top: 8rem;\r\n    margin: 0 0;\r\n    animation: none;\r\n    animation: menu-responsive 1s;\r\n    background: var(--beige);\r\n    background: rgba(0, 0, 0, 0.8);\r\n  }\r\n}\r\n.element-nav-bar {\r\n  margin: 0 2rem;\r\n  color: #eee;\r\n  font-size: 2.8rem;\r\n  letter-spacing: 0.1rem;\r\n  font-family: var(--ff-title);\r\n  text-decoration: none;\r\n  transition: 1s;\r\n  &:hover {\r\n    font-size: 3rem;\r\n    letter-spacing: 0.2rem;\r\n    // color: var(--violet);\r\n  }\r\n\r\n  @include xs {\r\n    margin: 1rem;\r\n  }\r\n}\r\n","@use \"media-queries\" as *;\r\n\r\n.btn {\r\n  height: 5rem;\r\n  width: 15rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 3rem;\r\n  // backdrop-filter: blur(1rem);\r\n  text-decoration: none;\r\n  color: white;\r\n  font-size: 1.8rem;\r\n  transition: 1s;\r\n  z-index: 1;\r\n  @include xs {\r\n    text-decoration: underline;\r\n  }\r\n  @include sm {\r\n    text-decoration: underline;\r\n  }\r\n  &:hover {\r\n    width: 18rem;\r\n    font-size: 2rem;\r\n    letter-spacing: 0.1rem;\r\n    cursor: pointer;\r\n    text-decoration: none !important;\r\n  }\r\n}\r\n","@use \"media-queries\" as *;\r\n\r\nfooter {\r\n  grid-area: footer;\r\n  height: auto;\r\n  width: 100%;\r\n  padding: 2rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background: var(--beige);\r\n  animation: anim-start 6s;\r\n  text-align: center;\r\n}\r\n.footer-content {\r\n  height: auto;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  @include xs {\r\n    flex-direction: column;\r\n  }\r\n  @include sm {\r\n    flex-direction: column;\r\n  }\r\n}\r\n.ft {\r\n  height: auto;\r\n  width: 24rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\na {\r\n  font-style: italic;\r\n  color: var(--bordeaux);\r\n}\r\n\r\n.link-page {\r\n  transition: all 1s;\r\n\r\n  &:hover {\r\n    width: 22rem;\r\n    font-size: 2rem;\r\n    letter-spacing: 0.1rem;\r\n    cursor: pointer;\r\n  }\r\n}\r\nh5 {\r\n  display: flex;\r\n  align-items: center;\r\n  color: var(--bordeaux);\r\n  font-size: 1.8rem;\r\n  font-weight: 200;\r\n}\r\n.link-h5 {\r\n  font-family: var(--ff-title);\r\n  font-style: none;\r\n  text-decoration: none;\r\n  font-weight: 200;\r\n  font-size: 2.5rem;\r\n  letter-spacing: 0.1rem;\r\n  margin-left: 0.5rem;\r\n  color: var(--bordeaux);\r\n}\r\n.title-footer {\r\n  color: var(--bordeaux);\r\n}\r\n.img-footer {\r\n  height: 8rem;\r\n  margin: 0 2rem;\r\n  @include xs {\r\n    margin: 0 1rem;\r\n  }\r\n}\r\n.ft-logo {\r\n  @include xs {\r\n    display: none;\r\n  }\r\n  @include sm {\r\n    display: none;\r\n  }\r\n}\r\n.ft-logo-xs {\r\n  display: none;\r\n  @include xs {\r\n    display: flex;\r\n    margin-bottom: 2rem;\r\n  }\r\n  @include sm {\r\n    display: flex;\r\n    margin-bottom: 2rem;\r\n  }\r\n}\r\n","// @keyframes anim-start {\r\n//   0% {\r\n//     height: 50%;\r\n//   }\r\n//   50% {\r\n//     height: 50%;\r\n//   }\r\n// }\r\n// @keyframes text-anim-start-p1 {\r\n//   0% {\r\n//     opacity: 1;\r\n//   }\r\n//   80% {\r\n//     opacity: 1;\r\n//   }\r\n//   100% {\r\n//     opacity: 0;\r\n//   }\r\n// }\r\n// @keyframes text-anim-start-p2 {\r\n//   0% {\r\n//     opacity: 0;\r\n//   }\r\n//   55% {\r\n//     opacity: 0;\r\n//   }\r\n//   56% {\r\n//     opacity: 1;\r\n//   }\r\n//   80% {\r\n//     opacity: 1;\r\n//   }\r\n//   100% {\r\n//     opacity: 0;\r\n//   }\r\n// }\r\n// @keyframes text-anim-start {\r\n//   0% {\r\n//     opacity: 1;\r\n//   }\r\n//   100% {\r\n//     opacity: 1;\r\n//   }\r\n// }\r\n// @keyframes opacity {\r\n//   0% {\r\n//     opacity: 0;\r\n//   }\r\n//   80% {\r\n//     opacity: 0;\r\n//   }\r\n//   100% {\r\n//     opacity: 1;\r\n//   }\r\n// }\r\n// @keyframes container-start {\r\n//   0% {\r\n//     background: var(--beige);\r\n//   }\r\n//   100% {\r\n//     background: var(--beige);\r\n//   }\r\n// }\r\n@keyframes menu-responsive {\r\n  0% {\r\n    transform: translateX(-100%);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index/index.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index/index.scss ***!
  \*****************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/img_2.jpeg */ "./src/assets/images/img_2.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.container-fond-decran {
  height: 100vh;
  width: auto;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-position: bottom;
}

.container-blur {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  backdrop-filter: brightness(0);
}
.container-blur.no-blur {
  transition: backdrop-filter 3s ease;
  backdrop-filter: brightness(1);
}

.test-active {
  display: none;
}

.opacity {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.opacity-active {
  opacity: 0;
  animation: all 1s;
}

input {
  height: 4rem;
  background: none;
  border-top: none;
  border-right: none;
  border-left: none;
  border-color: white;
  color: white;
  padding: 0.3rem 0.5rem;
  font-size: 1rem;
  outline: none;
  text-align: center;
  font-size: 2.5rem;
  font-family: var(--ff-title);
}

::placeholder {
  color: white;
  text-align: center;
  font-family: var(--ff-title);
  font-size: 2.5rem;
}

.text-1 {
  color: white;
  font-family: var(--ff-title);
  font-size: 5rem;
  text-align: center;
}

.text-2 {
  display: none;
  color: white;
  font-family: var(--ff-title);
  font-size: 5rem;
  text-align: center;
}

.text-3 {
  color: white;
  font-family: var(--ff-title);
  font-size: 5rem;
  text-align: center;
}

.div-1 {
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  opacity: 0;
}

.div-1-active {
  opacity: 1;
}

.countdown {
  font-size: 2rem;
  font-weight: bold;
  color: white;
  text-align: center;
  margin-top: 2rem;
}`, "",{"version":3,"sources":["webpack://./src/index/index.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,WAAA;EACA,mDAAA;EACA,sBAAA;EACA,2BAAA;AACF;;AACA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,sBAAA;EACA,aAAA;EACA,8BAAA;AAEF;AAAE;EACE,mCAAA;EACA,8BAAA;AAEJ;;AACA;EACE,aAAA;AAEF;;AAAA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AAGF;;AADA;EACE,UAAA;EACA,iBAAA;AAIF;;AAFA;EACE,YAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,iBAAA;EACA,mBAAA;EACA,YAAA;EACA,sBAAA;EACA,eAAA;EACA,aAAA;EACA,kBAAA;EACA,iBAAA;EACA,4BAAA;AAKF;;AAFA;EACE,YAAA;EACA,kBAAA;EACA,4BAAA;EACA,iBAAA;AAKF;;AAFA;EACE,YAAA;EACA,4BAAA;EACA,eAAA;EACA,kBAAA;AAKF;;AAFA;EACE,aAAA;EACA,YAAA;EACA,4BAAA;EACA,eAAA;EACA,kBAAA;AAKF;;AAHA;EACE,YAAA;EACA,4BAAA;EACA,eAAA;EACA,kBAAA;AAMF;;AAJA;EACE,aAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,YAAA;EACA,UAAA;AAOF;;AALA;EACE,UAAA;AAQF;;AANA;EACE,eAAA;EACA,iBAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;AASF","sourcesContent":[".container-fond-decran {\n  height: 100vh;\n  width: auto;\n  background: url(../assets/images/img_2.jpeg);\n  background-size: cover;\n  background-position: bottom;\n}\n.container-blur {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  height: 100vh;\n  backdrop-filter: brightness(0);\n\n  &.no-blur {\n    transition: backdrop-filter 3s ease;\n    backdrop-filter: brightness(1);\n  }\n}\n.test-active {\n  display: none;\n}\n.opacity {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.opacity-active {\n  opacity: 0;\n  animation: all 1s;\n}\ninput {\n  height: 4rem;\n  background: none;\n  border-top: none;\n  border-right: none;\n  border-left: none;\n  border-color: white;\n  color: white;\n  padding: 0.3rem 0.5rem;\n  font-size: 1rem;\n  outline: none;\n  text-align: center;\n  font-size: 2.5rem;\n  font-family: var(--ff-title);\n}\n\n::placeholder {\n  color: white;\n  text-align: center;\n  font-family: var(--ff-title);\n  font-size: 2.5rem;\n}\n\n.text-1 {\n  color: white;\n  font-family: var(--ff-title);\n  font-size: 5rem;\n  text-align: center;\n}\n\n.text-2 {\n  display: none;\n  color: white;\n  font-family: var(--ff-title);\n  font-size: 5rem;\n  text-align: center;\n}\n.text-3 {\n  color: white;\n  font-family: var(--ff-title);\n  font-size: 5rem;\n  text-align: center;\n}\n.div-1 {\n  height: 10rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 2rem;\n  opacity: 0;\n}\n.div-1-active {\n  opacity: 1;\n}\n.countdown {\n  font-size: 2rem;\n  font-weight: bold;\n  color: white;\n  text-align: center;\n  margin-top: 2rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/images/img_2.jpeg":
/*!**************************************!*\
  !*** ./src/assets/images/img_2.jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7c8c59c0757b72f14f4f.jpeg";

/***/ }),

/***/ "./src/assets/styles/style.scss":
/*!**************************************!*\
  !*** ./src/assets/styles/style.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/index/index.scss":
/*!******************************!*\
  !*** ./src/index/index.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main1": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/index/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_assets_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/assets/styles/style.scss */ "./src/assets/styles/style.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index/index.scss");


const input = document.querySelector(".container-blur input");
const containerBlur = document.querySelector(".container-blur");
const opacity = document.querySelector('.opacity');
const text1 = document.querySelector('.text-1');
const text2 = document.querySelector('.text-2');
const div1 = document.querySelector(".div-1");
const countdown = document.querySelector(".countdown");

// ✅ Phrases valides
const validPhrases1 = ["182 jours"];
const validPhrases2 = ["test password", " Moi c'est toi", "moi c'est toi"];

// Gestion des phrases 1
input.addEventListener("input", () => {
  const value = input.value.trim().toLowerCase();
  if (validPhrases1.includes(value)) {
    text1.style.display = "none";
    text2.style.display = "block";
    div1.classList.add('div-1-active');
    // input.disabled = true; 
    input.value = ""; // supprime le texte de l’input
  }
});

// Gestion des phrases 2
input.addEventListener("input", () => {
  const value = input.value.trim().toLowerCase();
  if (validPhrases2.includes(value)) {
    containerBlur.classList.add("no-blur");
    opacity.classList.add('opacity-active');
    setTimeout(() => {
      containerBlur.classList.add("test-active");
    }, 3000);
  } else {
    containerBlur.classList.remove("no-blur");
  }
});

// // Compte à rebours vers 26 août 2025
// const targetDate = new Date("2025-08-26T00:00:00").getTime();

// const interval = setInterval(() => {
//   const now = new Date().getTime();
//   const distance = targetDate - now;

//   if (distance <= 0) {
//     countdown.innerHTML = "❤️✨❤️";
//     input.disabled = false; // 🔥 réactive l'input à la fin du chrono
//     clearInterval(interval);
//     return;
//   }

//   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   countdown.innerHTML = `${days}j ${hours}h ${minutes}m ${seconds}s`;
// }, 1000);
})();

/******/ })()
;
//# sourceMappingURL=main1-bundle.js.map