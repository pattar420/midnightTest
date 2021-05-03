/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/components/Body.js":
/*!***************************************!*\
  !*** ./src/client/components/Body.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./src/client/components/data.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./src/client/components/Header.js\");\n/* harmony import */ var _mainRouter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainRouter */ \"./src/client/components/mainRouter.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ \"./src/client/components/Footer.js\");\n\n\n\n\n\n\nconst Body = props => {\n  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    headerComponents: _data__WEBPACK_IMPORTED_MODULE_1__.headerCards,\n    facebook: _data__WEBPACK_IMPORTED_MODULE_1__.social[0],\n    instagram: _data__WEBPACK_IMPORTED_MODULE_1__.social[1],\n    youtube: _data__WEBPACK_IMPORTED_MODULE_1__.social[2],\n    rss: 'https://anchor.fm/patrick-thurston'\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header__WEBPACK_IMPORTED_MODULE_2__.default, {\n    headerData: state.headerComponents\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mainRouter__WEBPACK_IMPORTED_MODULE_3__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_4__.default, {\n    facebook: state.facebook,\n    instagram: state.instagram,\n    youtube: state.youtube,\n    rss: state.rss\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Body);\n\n//# sourceURL=webpack://mern-boiler/./src/client/components/Body.js?");

/***/ }),

/***/ "./src/client/components/Card.js":
/*!***************************************!*\
  !*** ./src/client/components/Card.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Card = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: `slideshow-card ${props.wrapperClasses}`\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: `card-image ${props.imageClasses}`,\n    src: __webpack_require__(\"./public/img sync recursive ^\\\\.\\\\/.*$\")(\"./\" + props.src),\n    alt: props.name\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);\n\n//# sourceURL=webpack://mern-boiler/./src/client/components/Card.js?");

/***/ }),

/***/ "./src/client/components/ContactPage.js":
/*!**********************************************!*\
  !*** ./src/client/components/ContactPage.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst ContactPage = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactPage);\n\n//# sourceURL=webpack://mern-boiler/./src/client/components/ContactPage.js?");

/***/ }),

/***/ "./src/client/components/Events.js":
/*!*****************************************!*\
  !*** ./src/client/components/Events.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./src/client/components/data.js\");\n/* harmony import */ var _PageSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageSection */ \"./src/client/components/PageSection.js\");\n/* harmony import */ var _Slideshow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Slideshow */ \"./src/client/components/Slideshow.js\");\n\n\n\n\n\nconst Events = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"events-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageSection__WEBPACK_IMPORTED_MODULE_2__.default, {\n    extraStyles: \"page-banner\",\n    title: \"EVENTS\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"event-logo-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: __webpack_require__(/*! ../../public/img/Midnight-West-Fest-Logo-patfix.jpg */ \"./public/img/Midnight-West-Fest-Logo-patfix.jpg\"),\n    alt: \"midnight west fest logo\",\n    className: \"events-logo\"\n  })), props.events ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"current-events\"\n  }, _data__WEBPACK_IMPORTED_MODULE_1__.eventCards) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"previous-events\"\n  }, previousEvents));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Events);\n\n//# sourceURL=webpack://mern-boiler/./src/client/components/Events.js?");

/***/ }),

/***/ "./src/client/components/Footer.js":
/*!*****************************************!*\
  !*** ./src/client/components/Footer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SocialBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SocialBar */ \"./src/client/components/SocialBar.js\");\n\n\n\nconst Footer = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SocialBar__WEBPACK_IMPORTED_MODULE_1__.default, {\n    facebook: props.facebook,\n    instagram: props.instagram,\n    youtube: props.youtube,\n    rss: props.rss\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);\n\n//# sourceURL=webpack://mern-boiler/./src/client/components/Footer.js?");

/***/ }),

/***/ "./src/client/components/Header.js":
/*!*****************************************!*\
  !*** ./src/client/components/Header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _HeaderElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderElement */ \"./src/client/components/HeaderElement.js\");\n/* harmony import */ var _public_img_mwLogoFix1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/img/mwLogoFix1.png */ \"./public/img/mwLogoFix1.png\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons */ \"@material-ui/icons\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst Header = props => {\n  const [menuVis, setVisibility] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    setVisibility(false);\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const headerElements = document.getElementsByClassName('header-element');\n\n    for (let el of headerElements) {\n      el.addEventListener('click', changeVisibility);\n    }\n  }, []);\n  let vis = menuVis ? 'none' : 'flex';\n\n  let changeVisibility = () => {\n    console.log('header elements: ', headerElements);\n    setVisibility(!menuVis);\n    console.log('vis: ', vis);\n\n    for (let e of headerElements) {\n      e.style.display = vis;\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"header-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: \"/\",\n    className: \"header-logo\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: _public_img_mwLogoFix1_png__WEBPACK_IMPORTED_MODULE_2__,\n    alt: \"midnight west logo\",\n    className: \"logo\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"dropdownArrow\",\n    onClick: changeVisibility\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__.ArrowDropDown, null)), props.headerData.map((element, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HeaderElement__WEBPACK_IMPORTED_MODULE_1__.default, {\n    title: element.body,\n    link: element.link,\n    key: index\n  })));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://mern-boiler/./src/client/components/Header.js?");

/***/ }),

/***/ "./src/client/components/HeaderElement.js":
/*!************************************************!*\
  !*** ./src/client/components/HeaderElement.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst HeaderElement = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"header-element\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {\n    to: props.link\n  }, props.title));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderElement);\n\n//# sourceURL=webpack://mern-boiler/./src/client/components/HeaderElement.js?");

/***/ }),

/***/ "./src/client/components/Homepage.js":
/*!*******************************************!*\
  !*** ./src/client/components/Homepage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _PageSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageSection */ \"./src/client/components/PageSection.js\");\n/* harmony import */ var _PageSubSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageSubSection */ \"./src/client/components/PageSubSection.js\");\n/* harmony import */ var _Slideshow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Slideshow */ \"./src/client/components/Slideshow.js\");\n\n\n\n\n\nconst Homepage = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageSection__WEBPACK_IMPORTED_MODULE_1__.default, {\n    title: \"MIDNIGHT WEST PRODUCTIONS\",\n    extraStyles: \"companyBanner\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageSection__WEBPACK_IMPORTED_MODULE_1__.default, {\n    title: \"EVENTS\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageSubSection__WEBPACK_IMPORTED_MODULE_2__.default, {\n    body: \"More events in the works\",\n    extraStyles: \"sectionSubBanner\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageSection__WEBPACK_IMPORTED_MODULE_1__.default, {\n    title: \"Projects\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageSubSection__WEBPACK_IMPORTED_MODULE_2__.default, {\n    extraStyles: \"slide-section\",\n    psExtra: \"slide-extra\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Slideshow__WEBPACK_IMPORTED_MODULE_3__.default, {\n    extraStyles: \"projectSlideshow\"\n  })));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage);\n\n//# sourceURL=webpack://mern-boiler/./src/client/components/Homepage.js?");

/***/ }),

/***/ "./src/client/components/PageSection.js":
/*!**********************************************!*\
  !*** ./src/client/components/PageSection.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst PageSection = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: `page-section ${props.extraStyles}`\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"ps-title\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"b\", null, props.title)));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageSection);\n\n//# sourceURL=webpack://mern-boiler/./src/client/components/PageSection.js?");

/***/ }),

/***/ "./src/client/components/PageSubSection.js":
/*!*************************************************!*\
  !*** ./src/client/components/PageSubSection.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst PageSubSection = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: `page-section page-sub ${props.extraStyles}`\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: `ps-body ${props.psExtra}`\n  }, props.body), props.children);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageSubSection);\n\n//# sourceURL=webpack://mern-boiler/./src/client/components/PageSubSection.js?");

/***/ }),

/***/ "./src/client/components/Projects.js":
/*!*******************************************!*\
  !*** ./src/client/components/Projects.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _PageSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageSection */ \"./src/client/components/PageSection.js\");\n\n\n\nconst Projects = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageSection__WEBPACK_IMPORTED_MODULE_1__.default, {\n    extraStyles: \"page-banner\",\n    title: \"Projects\"\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);\n\n//# sourceURL=webpack://mern-boiler/./src/client/components/Projects.js?");

/***/ }),

/***/ "./src/client/components/Services.js":
/*!*******************************************!*\
  !*** ./src/client/components/Services.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _PageSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageSection */ \"./src/client/components/PageSection.js\");\n\n\n\nconst Services = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageSection__WEBPACK_IMPORTED_MODULE_1__.default, {\n    extraStyles: \"page-banner\",\n    title: \"Projects\"\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services);\n\n//# sourceURL=webpack://mern-boiler/./src/client/components/Services.js?");

/***/ }),

/***/ "./src/client/components/Slideshow.js":
/*!********************************************!*\
  !*** ./src/client/components/Slideshow.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons */ \"@material-ui/icons\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ \"./src/client/components/Card.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ \"./src/client/components/data.js\");\n\n\n\n\n\nconst Slideshow = props => {\n  let [cardIndex, setCardIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const phoneWidth = window.matchMedia(\"(max-width: 500px)\");\n\n    const cardContent = () => {\n      if (phoneWidth.matches) {\n        cards[cardIndex];\n      } else {\n        {\n          cards[cardIndex];\n        }\n        {\n          cards[cardIndex + 1];\n        }\n      }\n    };\n\n    const cards = phoneWidth.matches ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"slide-cards\"\n    }, cards[cardIndex]) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"slide-cards\"\n    }, cards[cardIndex], \" \", cards[cardIndex + 1]);\n  });\n  let cards = _data__WEBPACK_IMPORTED_MODULE_3__.projectCards.map((card, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Card__WEBPACK_IMPORTED_MODULE_2__.default, {\n    src: card.src,\n    name: card.name,\n    key: index\n  }));\n\n  const handleCarouselButton = direction => {\n    if (direction === -1) {\n      setCardIndex(cardIndex += direction);\n\n      if (cardIndex < 0) {\n        setCardIndex(cards.length - 1);\n      }\n    } else if (direction === 1) {\n      setCardIndex(cardIndex += direction);\n\n      if (cardIndex > cards.length - 1) {\n        setCardIndex(0);\n      }\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"slideshow-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"slide-left slideshow-button\",\n    onClick: () => handleCarouselButton(-1)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__.ChevronLeft, null)), cards, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"slide-right slideshow-button\",\n    onClick: () => handleCarouselButton(1)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__.ChevronRight, null)));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slideshow);\n\n//# sourceURL=webpack://mern-boiler/./src/client/components/Slideshow.js?");

/***/ }),

/***/ "./src/client/components/SocialBar.js":
/*!********************************************!*\
  !*** ./src/client/components/SocialBar.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons */ \"@material-ui/icons\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst SocialBar = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"social-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: props.facebook[\"link\"]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__.Facebook, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: props.youtube[\"link\"]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__.YouTube, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: props.instagram[\"link\"]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__.Instagram, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: props.rss\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__.RssFeed, null)));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialBar);\n\n//# sourceURL=webpack://mern-boiler/./src/client/components/SocialBar.js?");

/***/ }),

/***/ "./src/client/components/SponsorEntry.js":
/*!***********************************************!*\
  !*** ./src/client/components/SponsorEntry.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst SponsorEntry = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"sponsorEntry\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: props.link\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: props.sponsorLogo,\n    alt: props.name\n  }))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SponsorEntry);\n\n//# sourceURL=webpack://mern-boiler/./src/client/components/SponsorEntry.js?");

/***/ }),

/***/ "./src/client/components/Sponsors.js":
/*!*******************************************!*\
  !*** ./src/client/components/Sponsors.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _PageSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageSection */ \"./src/client/components/PageSection.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"./src/client/components/data.js\");\n/* harmony import */ var _SponsorEntry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SponsorEntry */ \"./src/client/components/SponsorEntry.js\");\n\n\n\n\n\nconst Sponsors = props => {\n  let sponsorList = [];\n\n  const populateSponsors = () => {\n    for (let s of _data__WEBPACK_IMPORTED_MODULE_2__.sponsors) {\n      let newSponsor = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SponsorEntry__WEBPACK_IMPORTED_MODULE_3__.default, {\n        name: s.name,\n        link: s.link,\n        logo: s.logo\n      });\n      sponsorList.push(newSponsor);\n    }\n  };\n\n  populateSponsors();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageSection__WEBPACK_IMPORTED_MODULE_1__.default, {\n    extraStyles: \"page-banner\",\n    title: \"Sponsors\"\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sponsors);\n\n//# sourceURL=webpack://mern-boiler/./src/client/components/Sponsors.js?");

/***/ }),

/***/ "./src/client/components/data.js":
/*!***************************************!*\
  !*** ./src/client/components/data.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"headerCards\": () => (/* binding */ headerCards),\n/* harmony export */   \"social\": () => (/* binding */ social),\n/* harmony export */   \"sponsors\": () => (/* binding */ sponsors),\n/* harmony export */   \"eventCards\": () => (/* binding */ eventCards),\n/* harmony export */   \"projectCards\": () => (/* binding */ projectCards),\n/* harmony export */   \"setProjectCards\": () => (/* binding */ setProjectCards)\n/* harmony export */ });\nconst headerCards = [{\n  \"body\": \"Events\",\n  \"link\": \"/events\"\n}, {\n  \"body\": \"Services\",\n  \"link\": \"/services\"\n}, {\n  \"body\": \"Projects\",\n  \"link\": \"/projects\"\n}, {\n  \"body\": \"Sponsors\",\n  \"link\": \"/sponsors\"\n}, {\n  \"body\": \"Contact us\",\n  \"link\": \"/contact\"\n}];\nconst social = [{\n  \"name\": \"facebook\",\n  \"link\": \"https://www.facebook.com/midnightwestproductions\"\n}, {\n  \"name\": \"instagram\",\n  \"link\": \"https://www.instagram.com/midnightwestproductions/\"\n}, {\n  \"name\": \"youtube\",\n  \"link\": \"https://www.youtube.com/channel/UC2z1byO3TP4p4akBpmEhVkw/videos\"\n}];\nconst sponsors = [{\n  \"name\": \"filmfreeway\",\n  \"link\": \"https://www.filmfreeway.com/\",\n  \"logo\": ''\n}];\nconst eventCards = [{}];\nconst projectCards = [{\n  \"name\": \"Mothers and Sons\",\n  \"src\": \"midnightmothers.jpg\"\n}, {\n  \"name\": \"It's a wonderful life\",\n  \"src\": \"midnightwonder.jpg\"\n}, {\n  \"name\": \"Midnight Zombie Fest\",\n  \"src\": \"midnightZfest.jpg\"\n}];\nconst setProjectCards = (action, card = '', name = '') => {\n  if (action === 'add') {\n    projectCards = [...projectCards, card];\n  } else if (action === 'remove') {\n    for (let c of projectCards) {\n      if (c[name] === name) {\n        projectCards.pop(c);\n      }\n    }\n  }\n};\n\n//# sourceURL=webpack://mern-boiler/./src/client/components/data.js?");

/***/ }),

/***/ "./src/client/components/mainRouter.js":
/*!*********************************************!*\
  !*** ./src/client/components/mainRouter.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Homepage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Homepage */ \"./src/client/components/Homepage.js\");\n/* harmony import */ var _Services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Services */ \"./src/client/components/Services.js\");\n/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Projects */ \"./src/client/components/Projects.js\");\n/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Events */ \"./src/client/components/Events.js\");\n/* harmony import */ var _Sponsors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Sponsors */ \"./src/client/components/Sponsors.js\");\n/* harmony import */ var _ContactPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ContactPage */ \"./src/client/components/ContactPage.js\");\n\n\n\n\n\n\n\n\n\nconst MainRouter = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    exact: true,\n    path: \"/\",\n    component: _Homepage__WEBPACK_IMPORTED_MODULE_2__.default\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/events?u\",\n    component: _Events__WEBPACK_IMPORTED_MODULE_5__.default\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/projects\",\n    component: _Projects__WEBPACK_IMPORTED_MODULE_4__.default\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/services\",\n    component: _Services__WEBPACK_IMPORTED_MODULE_3__.default\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/sponsors\",\n    component: _Sponsors__WEBPACK_IMPORTED_MODULE_6__.default\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/contact\",\n    component: _ContactPage__WEBPACK_IMPORTED_MODULE_7__.default\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainRouter);\n\n//# sourceURL=webpack://mern-boiler/./src/client/components/mainRouter.js?");

/***/ }),

/***/ "./src/server/express.js":
/*!*******************************!*\
  !*** ./src/server/express.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../template.js */ \"./template.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _client_components_Body__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client/components/Body */ \"./src/client/components/Body.js\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nconst port = 3000;\nconst CURRENT_WORKING_DIR = process.cwd();\napp.use('/dist', express__WEBPACK_IMPORTED_MODULE_0___default().static(path__WEBPACK_IMPORTED_MODULE_1___default().join(CURRENT_WORKING_DIR, 'dist')));\napp.use(helmet__WEBPACK_IMPORTED_MODULE_8___default()());\napp.use(cors__WEBPACK_IMPORTED_MODULE_9___default()());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_10___default().json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_10___default().urlencoded({\n  extended: true\n}));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_11___default()());\napp.use(compression__WEBPACK_IMPORTED_MODULE_7___default()());\nconst mockResponse = {\n  foo: 'bar',\n  bar: 'foo'\n};\napp.get('/api', (req, res) => {\n  res.send(mockResponse);\n});\napp.get('*', (req, res) => {\n  console.log('request url: ', req.url);\n  let context = {};\n  const body = react_dom_server__WEBPACK_IMPORTED_MODULE_3___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.StaticRouter, {\n    location: req.url,\n    context: context\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_client_components_Body__WEBPACK_IMPORTED_MODULE_6__.default, null)));\n\n  if (context.url) {\n    return res.redirect(303, context.url);\n  }\n\n  console.log((0,_template_js__WEBPACK_IMPORTED_MODULE_4__.default)(body));\n  res.status(200).send((0,_template_js__WEBPACK_IMPORTED_MODULE_4__.default)(body));\n  console.log('test 1');\n});\napp.get('/', (req, res) => {\n  console.log('test 2');\n  res.status(200).send((0,_template_js__WEBPACK_IMPORTED_MODULE_4__.default)());\n});\napp.listen(port, err => {\n  if (err) {\n    console.log('an error occured ', err);\n  }\n\n  console.log('App listening on port: ', port);\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n//# sourceURL=webpack://mern-boiler/./src/server/express.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (body => {\n  return `<!DOCTYPE html>\n        <html lang=\"en\">\n        <head>\n            <meta charset=\"UTF-8\">\n            <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n            <link rel='stylesheet' href='/src/client/styles/App.css'>\n            <title>Midnight test</title>\n        </head>\n        <body>\n            <div id='root'>${body}</div>\n            <script type=\"text/javascript\" type=\"module\" src=\"/dist/server.generated.js\">\n        </body>\n        </html>`;\n});\n\n//# sourceURL=webpack://mern-boiler/./template.js?");

/***/ }),

/***/ "./public/img/Midnight-West-Fest-Logo-patfix.jpg":
/*!*******************************************************!*\
  !*** ./public/img/Midnight-West-Fest-Logo-patfix.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c36b686bb4cd3bf18461.jpg\";\n\n//# sourceURL=webpack://mern-boiler/./public/img/Midnight-West-Fest-Logo-patfix.jpg?");

/***/ }),

/***/ "./public/img/editing-service.webp":
/*!*****************************************!*\
  !*** ./public/img/editing-service.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"6026d05bc6581ddf8b9d.webp\";\n\n//# sourceURL=webpack://mern-boiler/./public/img/editing-service.webp?");

/***/ }),

/***/ "./public/img/filmfreeway-logo.webp":
/*!******************************************!*\
  !*** ./public/img/filmfreeway-logo.webp ***!
  \******************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/webp;base64,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\";\n\n//# sourceURL=webpack://mern-boiler/./public/img/filmfreeway-logo.webp?");

/***/ }),

/***/ "./public/img/filming-service.webp":
/*!*****************************************!*\
  !*** ./public/img/filming-service.webp ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/webp;base64,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\";\n\n//# sourceURL=webpack://mern-boiler/./public/img/filming-service.webp?");

/***/ }),

/***/ "./public/img/midnight-black.jpg":
/*!***************************************!*\
  !*** ./public/img/midnight-black.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a0ef31df4f02edaff00b.jpg\";\n\n//# sourceURL=webpack://mern-boiler/./public/img/midnight-black.jpg?");

/***/ }),

/***/ "./public/img/midnight-camera.webp":
/*!*****************************************!*\
  !*** ./public/img/midnight-camera.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b500100e36703a0be1a9.webp\";\n\n//# sourceURL=webpack://mern-boiler/./public/img/midnight-camera.webp?");

/***/ }),

/***/ "./public/img/midnight-z-fest.jpg":
/*!****************************************!*\
  !*** ./public/img/midnight-z-fest.jpg ***!
  \****************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/jpeg;base64,\";\n\n//# sourceURL=webpack://mern-boiler/./public/img/midnight-z-fest.jpg?");

/***/ }),

/***/ "./public/img/midnightZfest.jpg":
/*!**************************************!*\
  !*** ./public/img/midnightZfest.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"56e9a9c67bae8c7d74a1.jpg\";\n\n//# sourceURL=webpack://mern-boiler/./public/img/midnightZfest.jpg?");

/***/ }),

/***/ "./public/img/midnightmothers.jpg":
/*!****************************************!*\
  !*** ./public/img/midnightmothers.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d2b55b23c14289b76fa9.jpg\";\n\n//# sourceURL=webpack://mern-boiler/./public/img/midnightmothers.jpg?");

/***/ }),

/***/ "./public/img/midnightwonder.jpg":
/*!***************************************!*\
  !*** ./public/img/midnightwonder.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d4ded9fdfd15d0e58133.jpg\";\n\n//# sourceURL=webpack://mern-boiler/./public/img/midnightwonder.jpg?");

/***/ }),

/***/ "./public/img/mwLogoFix1.jpg":
/*!***********************************!*\
  !*** ./public/img/mwLogoFix1.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"8d215402a2a53207b5dd.jpg\";\n\n//# sourceURL=webpack://mern-boiler/./public/img/mwLogoFix1.jpg?");

/***/ }),

/***/ "./public/img/mwLogoFix1.png":
/*!***********************************!*\
  !*** ./public/img/mwLogoFix1.png ***!
  \***********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/png;base64,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\";\n\n//# sourceURL=webpack://mern-boiler/./public/img/mwLogoFix1.png?");

/***/ }),

/***/ "./public/img sync recursive ^\\.\\/.*$":
/*!***********************************!*\
  !*** ./public/img/ sync ^\.\/.*$ ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./Midnight-West-Fest-Logo-patfix.jpg\": \"./public/img/Midnight-West-Fest-Logo-patfix.jpg\",\n\t\"./editing-service.webp\": \"./public/img/editing-service.webp\",\n\t\"./filmfreeway-logo.webp\": \"./public/img/filmfreeway-logo.webp\",\n\t\"./filming-service.webp\": \"./public/img/filming-service.webp\",\n\t\"./midnight-black.jpg\": \"./public/img/midnight-black.jpg\",\n\t\"./midnight-camera.webp\": \"./public/img/midnight-camera.webp\",\n\t\"./midnight-z-fest.jpg\": \"./public/img/midnight-z-fest.jpg\",\n\t\"./midnightZfest.jpg\": \"./public/img/midnightZfest.jpg\",\n\t\"./midnightmothers.jpg\": \"./public/img/midnightmothers.jpg\",\n\t\"./midnightwonder.jpg\": \"./public/img/midnightwonder.jpg\",\n\t\"./mwLogoFix1.jpg\": \"./public/img/mwLogoFix1.jpg\",\n\t\"./mwLogoFix1.png\": \"./public/img/mwLogoFix1.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./public/img sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack://mern-boiler/./public/img/_sync_^\\.\\/.*$?");

/***/ }),

/***/ "@material-ui/icons":
/*!*************************************!*\
  !*** external "@material-ui/icons" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons");;

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("body-parser");;

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("compression");;

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("cookie-parser");;

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("helmet");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");;

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");;

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
/******/ 			// no module.id needed
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
/******/ 		__webpack_require__.p = "/dist/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/express.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;