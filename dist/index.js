(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Treeviz"] = factory();
	else
		root["Treeviz"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/d3-color/src/color.js":
/*!********************************************!*\
  !*** ./node_modules/d3-color/src/color.js ***!
  \********************************************/
/*! exports provided: Color, darker, brighter, default, rgbConvert, rgb, Rgb, hslConvert, hsl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Color\", function() { return Color; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"darker\", function() { return darker; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"brighter\", function() { return brighter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return color; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rgbConvert\", function() { return rgbConvert; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rgb\", function() { return rgb; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Rgb\", function() { return Rgb; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hslConvert\", function() { return hslConvert; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hsl\", function() { return hsl; });\n/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define */ \"./node_modules/d3-color/src/define.js\");\n\n\nfunction Color() {}\n\nvar darker = 0.7;\nvar brighter = 1 / darker;\n\nvar reI = \"\\\\s*([+-]?\\\\d+)\\\\s*\",\n    reN = \"\\\\s*([+-]?\\\\d*\\\\.?\\\\d+(?:[eE][+-]?\\\\d+)?)\\\\s*\",\n    reP = \"\\\\s*([+-]?\\\\d*\\\\.?\\\\d+(?:[eE][+-]?\\\\d+)?)%\\\\s*\",\n    reHex3 = /^#([0-9a-f]{3})$/,\n    reHex6 = /^#([0-9a-f]{6})$/,\n    reRgbInteger = new RegExp(\"^rgb\\\\(\" + [reI, reI, reI] + \"\\\\)$\"),\n    reRgbPercent = new RegExp(\"^rgb\\\\(\" + [reP, reP, reP] + \"\\\\)$\"),\n    reRgbaInteger = new RegExp(\"^rgba\\\\(\" + [reI, reI, reI, reN] + \"\\\\)$\"),\n    reRgbaPercent = new RegExp(\"^rgba\\\\(\" + [reP, reP, reP, reN] + \"\\\\)$\"),\n    reHslPercent = new RegExp(\"^hsl\\\\(\" + [reN, reP, reP] + \"\\\\)$\"),\n    reHslaPercent = new RegExp(\"^hsla\\\\(\" + [reN, reP, reP, reN] + \"\\\\)$\");\n\nvar named = {\n  aliceblue: 0xf0f8ff,\n  antiquewhite: 0xfaebd7,\n  aqua: 0x00ffff,\n  aquamarine: 0x7fffd4,\n  azure: 0xf0ffff,\n  beige: 0xf5f5dc,\n  bisque: 0xffe4c4,\n  black: 0x000000,\n  blanchedalmond: 0xffebcd,\n  blue: 0x0000ff,\n  blueviolet: 0x8a2be2,\n  brown: 0xa52a2a,\n  burlywood: 0xdeb887,\n  cadetblue: 0x5f9ea0,\n  chartreuse: 0x7fff00,\n  chocolate: 0xd2691e,\n  coral: 0xff7f50,\n  cornflowerblue: 0x6495ed,\n  cornsilk: 0xfff8dc,\n  crimson: 0xdc143c,\n  cyan: 0x00ffff,\n  darkblue: 0x00008b,\n  darkcyan: 0x008b8b,\n  darkgoldenrod: 0xb8860b,\n  darkgray: 0xa9a9a9,\n  darkgreen: 0x006400,\n  darkgrey: 0xa9a9a9,\n  darkkhaki: 0xbdb76b,\n  darkmagenta: 0x8b008b,\n  darkolivegreen: 0x556b2f,\n  darkorange: 0xff8c00,\n  darkorchid: 0x9932cc,\n  darkred: 0x8b0000,\n  darksalmon: 0xe9967a,\n  darkseagreen: 0x8fbc8f,\n  darkslateblue: 0x483d8b,\n  darkslategray: 0x2f4f4f,\n  darkslategrey: 0x2f4f4f,\n  darkturquoise: 0x00ced1,\n  darkviolet: 0x9400d3,\n  deeppink: 0xff1493,\n  deepskyblue: 0x00bfff,\n  dimgray: 0x696969,\n  dimgrey: 0x696969,\n  dodgerblue: 0x1e90ff,\n  firebrick: 0xb22222,\n  floralwhite: 0xfffaf0,\n  forestgreen: 0x228b22,\n  fuchsia: 0xff00ff,\n  gainsboro: 0xdcdcdc,\n  ghostwhite: 0xf8f8ff,\n  gold: 0xffd700,\n  goldenrod: 0xdaa520,\n  gray: 0x808080,\n  green: 0x008000,\n  greenyellow: 0xadff2f,\n  grey: 0x808080,\n  honeydew: 0xf0fff0,\n  hotpink: 0xff69b4,\n  indianred: 0xcd5c5c,\n  indigo: 0x4b0082,\n  ivory: 0xfffff0,\n  khaki: 0xf0e68c,\n  lavender: 0xe6e6fa,\n  lavenderblush: 0xfff0f5,\n  lawngreen: 0x7cfc00,\n  lemonchiffon: 0xfffacd,\n  lightblue: 0xadd8e6,\n  lightcoral: 0xf08080,\n  lightcyan: 0xe0ffff,\n  lightgoldenrodyellow: 0xfafad2,\n  lightgray: 0xd3d3d3,\n  lightgreen: 0x90ee90,\n  lightgrey: 0xd3d3d3,\n  lightpink: 0xffb6c1,\n  lightsalmon: 0xffa07a,\n  lightseagreen: 0x20b2aa,\n  lightskyblue: 0x87cefa,\n  lightslategray: 0x778899,\n  lightslategrey: 0x778899,\n  lightsteelblue: 0xb0c4de,\n  lightyellow: 0xffffe0,\n  lime: 0x00ff00,\n  limegreen: 0x32cd32,\n  linen: 0xfaf0e6,\n  magenta: 0xff00ff,\n  maroon: 0x800000,\n  mediumaquamarine: 0x66cdaa,\n  mediumblue: 0x0000cd,\n  mediumorchid: 0xba55d3,\n  mediumpurple: 0x9370db,\n  mediumseagreen: 0x3cb371,\n  mediumslateblue: 0x7b68ee,\n  mediumspringgreen: 0x00fa9a,\n  mediumturquoise: 0x48d1cc,\n  mediumvioletred: 0xc71585,\n  midnightblue: 0x191970,\n  mintcream: 0xf5fffa,\n  mistyrose: 0xffe4e1,\n  moccasin: 0xffe4b5,\n  navajowhite: 0xffdead,\n  navy: 0x000080,\n  oldlace: 0xfdf5e6,\n  olive: 0x808000,\n  olivedrab: 0x6b8e23,\n  orange: 0xffa500,\n  orangered: 0xff4500,\n  orchid: 0xda70d6,\n  palegoldenrod: 0xeee8aa,\n  palegreen: 0x98fb98,\n  paleturquoise: 0xafeeee,\n  palevioletred: 0xdb7093,\n  papayawhip: 0xffefd5,\n  peachpuff: 0xffdab9,\n  peru: 0xcd853f,\n  pink: 0xffc0cb,\n  plum: 0xdda0dd,\n  powderblue: 0xb0e0e6,\n  purple: 0x800080,\n  rebeccapurple: 0x663399,\n  red: 0xff0000,\n  rosybrown: 0xbc8f8f,\n  royalblue: 0x4169e1,\n  saddlebrown: 0x8b4513,\n  salmon: 0xfa8072,\n  sandybrown: 0xf4a460,\n  seagreen: 0x2e8b57,\n  seashell: 0xfff5ee,\n  sienna: 0xa0522d,\n  silver: 0xc0c0c0,\n  skyblue: 0x87ceeb,\n  slateblue: 0x6a5acd,\n  slategray: 0x708090,\n  slategrey: 0x708090,\n  snow: 0xfffafa,\n  springgreen: 0x00ff7f,\n  steelblue: 0x4682b4,\n  tan: 0xd2b48c,\n  teal: 0x008080,\n  thistle: 0xd8bfd8,\n  tomato: 0xff6347,\n  turquoise: 0x40e0d0,\n  violet: 0xee82ee,\n  wheat: 0xf5deb3,\n  white: 0xffffff,\n  whitesmoke: 0xf5f5f5,\n  yellow: 0xffff00,\n  yellowgreen: 0x9acd32\n};\n\nObject(_define__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Color, color, {\n  displayable: function() {\n    return this.rgb().displayable();\n  },\n  hex: function() {\n    return this.rgb().hex();\n  },\n  toString: function() {\n    return this.rgb() + \"\";\n  }\n});\n\nfunction color(format) {\n  var m;\n  format = (format + \"\").trim().toLowerCase();\n  return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb((m >> 8 & 0xf) | (m >> 4 & 0x0f0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1)) // #f00\n      : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000\n      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)\n      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)\n      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)\n      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)\n      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)\n      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)\n      : named.hasOwnProperty(format) ? rgbn(named[format])\n      : format === \"transparent\" ? new Rgb(NaN, NaN, NaN, 0)\n      : null;\n}\n\nfunction rgbn(n) {\n  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);\n}\n\nfunction rgba(r, g, b, a) {\n  if (a <= 0) r = g = b = NaN;\n  return new Rgb(r, g, b, a);\n}\n\nfunction rgbConvert(o) {\n  if (!(o instanceof Color)) o = color(o);\n  if (!o) return new Rgb;\n  o = o.rgb();\n  return new Rgb(o.r, o.g, o.b, o.opacity);\n}\n\nfunction rgb(r, g, b, opacity) {\n  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);\n}\n\nfunction Rgb(r, g, b, opacity) {\n  this.r = +r;\n  this.g = +g;\n  this.b = +b;\n  this.opacity = +opacity;\n}\n\nObject(_define__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Rgb, rgb, Object(_define__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(Color, {\n  brighter: function(k) {\n    k = k == null ? brighter : Math.pow(brighter, k);\n    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);\n  },\n  darker: function(k) {\n    k = k == null ? darker : Math.pow(darker, k);\n    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);\n  },\n  rgb: function() {\n    return this;\n  },\n  displayable: function() {\n    return (0 <= this.r && this.r <= 255)\n        && (0 <= this.g && this.g <= 255)\n        && (0 <= this.b && this.b <= 255)\n        && (0 <= this.opacity && this.opacity <= 1);\n  },\n  hex: function() {\n    return \"#\" + hex(this.r) + hex(this.g) + hex(this.b);\n  },\n  toString: function() {\n    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));\n    return (a === 1 ? \"rgb(\" : \"rgba(\")\n        + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + \", \"\n        + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + \", \"\n        + Math.max(0, Math.min(255, Math.round(this.b) || 0))\n        + (a === 1 ? \")\" : \", \" + a + \")\");\n  }\n}));\n\nfunction hex(value) {\n  value = Math.max(0, Math.min(255, Math.round(value) || 0));\n  return (value < 16 ? \"0\" : \"\") + value.toString(16);\n}\n\nfunction hsla(h, s, l, a) {\n  if (a <= 0) h = s = l = NaN;\n  else if (l <= 0 || l >= 1) h = s = NaN;\n  else if (s <= 0) h = NaN;\n  return new Hsl(h, s, l, a);\n}\n\nfunction hslConvert(o) {\n  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);\n  if (!(o instanceof Color)) o = color(o);\n  if (!o) return new Hsl;\n  if (o instanceof Hsl) return o;\n  o = o.rgb();\n  var r = o.r / 255,\n      g = o.g / 255,\n      b = o.b / 255,\n      min = Math.min(r, g, b),\n      max = Math.max(r, g, b),\n      h = NaN,\n      s = max - min,\n      l = (max + min) / 2;\n  if (s) {\n    if (r === max) h = (g - b) / s + (g < b) * 6;\n    else if (g === max) h = (b - r) / s + 2;\n    else h = (r - g) / s + 4;\n    s /= l < 0.5 ? max + min : 2 - max - min;\n    h *= 60;\n  } else {\n    s = l > 0 && l < 1 ? 0 : h;\n  }\n  return new Hsl(h, s, l, o.opacity);\n}\n\nfunction hsl(h, s, l, opacity) {\n  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);\n}\n\nfunction Hsl(h, s, l, opacity) {\n  this.h = +h;\n  this.s = +s;\n  this.l = +l;\n  this.opacity = +opacity;\n}\n\nObject(_define__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Hsl, hsl, Object(_define__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(Color, {\n  brighter: function(k) {\n    k = k == null ? brighter : Math.pow(brighter, k);\n    return new Hsl(this.h, this.s, this.l * k, this.opacity);\n  },\n  darker: function(k) {\n    k = k == null ? darker : Math.pow(darker, k);\n    return new Hsl(this.h, this.s, this.l * k, this.opacity);\n  },\n  rgb: function() {\n    var h = this.h % 360 + (this.h < 0) * 360,\n        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,\n        l = this.l,\n        m2 = l + (l < 0.5 ? l : 1 - l) * s,\n        m1 = 2 * l - m2;\n    return new Rgb(\n      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),\n      hsl2rgb(h, m1, m2),\n      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),\n      this.opacity\n    );\n  },\n  displayable: function() {\n    return (0 <= this.s && this.s <= 1 || isNaN(this.s))\n        && (0 <= this.l && this.l <= 1)\n        && (0 <= this.opacity && this.opacity <= 1);\n  }\n}));\n\n/* From FvD 13.37, CSS Color Module Level 3 */\nfunction hsl2rgb(h, m1, m2) {\n  return (h < 60 ? m1 + (m2 - m1) * h / 60\n      : h < 180 ? m2\n      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60\n      : m1) * 255;\n}\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-color/src/color.js?");

/***/ }),

/***/ "./node_modules/d3-color/src/cubehelix.js":
/*!************************************************!*\
  !*** ./node_modules/d3-color/src/cubehelix.js ***!
  \************************************************/
/*! exports provided: default, Cubehelix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return cubehelix; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cubehelix\", function() { return Cubehelix; });\n/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define */ \"./node_modules/d3-color/src/define.js\");\n/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ \"./node_modules/d3-color/src/color.js\");\n/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math */ \"./node_modules/d3-color/src/math.js\");\n\n\n\n\nvar A = -0.14861,\n    B = +1.78277,\n    C = -0.29227,\n    D = -0.90649,\n    E = +1.97294,\n    ED = E * D,\n    EB = E * B,\n    BC_DA = B * C - D * A;\n\nfunction cubehelixConvert(o) {\n  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);\n  if (!(o instanceof _color__WEBPACK_IMPORTED_MODULE_1__[\"Rgb\"])) o = Object(_color__WEBPACK_IMPORTED_MODULE_1__[\"rgbConvert\"])(o);\n  var r = o.r / 255,\n      g = o.g / 255,\n      b = o.b / 255,\n      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),\n      bl = b - l,\n      k = (E * (g - l) - C * bl) / D,\n      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1\n      h = s ? Math.atan2(k, bl) * _math__WEBPACK_IMPORTED_MODULE_2__[\"rad2deg\"] - 120 : NaN;\n  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);\n}\n\nfunction cubehelix(h, s, l, opacity) {\n  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);\n}\n\nfunction Cubehelix(h, s, l, opacity) {\n  this.h = +h;\n  this.s = +s;\n  this.l = +l;\n  this.opacity = +opacity;\n}\n\nObject(_define__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Cubehelix, cubehelix, Object(_define__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(_color__WEBPACK_IMPORTED_MODULE_1__[\"Color\"], {\n  brighter: function(k) {\n    k = k == null ? _color__WEBPACK_IMPORTED_MODULE_1__[\"brighter\"] : Math.pow(_color__WEBPACK_IMPORTED_MODULE_1__[\"brighter\"], k);\n    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);\n  },\n  darker: function(k) {\n    k = k == null ? _color__WEBPACK_IMPORTED_MODULE_1__[\"darker\"] : Math.pow(_color__WEBPACK_IMPORTED_MODULE_1__[\"darker\"], k);\n    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);\n  },\n  rgb: function() {\n    var h = isNaN(this.h) ? 0 : (this.h + 120) * _math__WEBPACK_IMPORTED_MODULE_2__[\"deg2rad\"],\n        l = +this.l,\n        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),\n        cosh = Math.cos(h),\n        sinh = Math.sin(h);\n    return new _color__WEBPACK_IMPORTED_MODULE_1__[\"Rgb\"](\n      255 * (l + a * (A * cosh + B * sinh)),\n      255 * (l + a * (C * cosh + D * sinh)),\n      255 * (l + a * (E * cosh)),\n      this.opacity\n    );\n  }\n}));\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-color/src/cubehelix.js?");

/***/ }),

/***/ "./node_modules/d3-color/src/define.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-color/src/define.js ***!
  \*********************************************/
/*! exports provided: default, extend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"extend\", function() { return extend; });\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(constructor, factory, prototype) {\n  constructor.prototype = factory.prototype = prototype;\n  prototype.constructor = constructor;\n});\n\nfunction extend(parent, definition) {\n  var prototype = Object.create(parent.prototype);\n  for (var key in definition) prototype[key] = definition[key];\n  return prototype;\n}\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-color/src/define.js?");

/***/ }),

/***/ "./node_modules/d3-color/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-color/src/index.js ***!
  \********************************************/
/*! exports provided: color, rgb, hsl, lab, hcl, lch, gray, cubehelix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color */ \"./node_modules/d3-color/src/color.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"color\", function() { return _color__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"rgb\", function() { return _color__WEBPACK_IMPORTED_MODULE_0__[\"rgb\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"hsl\", function() { return _color__WEBPACK_IMPORTED_MODULE_0__[\"hsl\"]; });\n\n/* harmony import */ var _lab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lab */ \"./node_modules/d3-color/src/lab.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"lab\", function() { return _lab__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"hcl\", function() { return _lab__WEBPACK_IMPORTED_MODULE_1__[\"hcl\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"lch\", function() { return _lab__WEBPACK_IMPORTED_MODULE_1__[\"lch\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"gray\", function() { return _lab__WEBPACK_IMPORTED_MODULE_1__[\"gray\"]; });\n\n/* harmony import */ var _cubehelix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cubehelix */ \"./node_modules/d3-color/src/cubehelix.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"cubehelix\", function() { return _cubehelix__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n\n\n\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-color/src/index.js?");

/***/ }),

/***/ "./node_modules/d3-color/src/lab.js":
/*!******************************************!*\
  !*** ./node_modules/d3-color/src/lab.js ***!
  \******************************************/
/*! exports provided: gray, default, Lab, lch, hcl, Hcl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gray\", function() { return gray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return lab; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Lab\", function() { return Lab; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lch\", function() { return lch; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hcl\", function() { return hcl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Hcl\", function() { return Hcl; });\n/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define */ \"./node_modules/d3-color/src/define.js\");\n/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ \"./node_modules/d3-color/src/color.js\");\n/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math */ \"./node_modules/d3-color/src/math.js\");\n\n\n\n\n// https://beta.observablehq.com/@mbostock/lab-and-rgb\nvar K = 18,\n    Xn = 0.96422,\n    Yn = 1,\n    Zn = 0.82521,\n    t0 = 4 / 29,\n    t1 = 6 / 29,\n    t2 = 3 * t1 * t1,\n    t3 = t1 * t1 * t1;\n\nfunction labConvert(o) {\n  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);\n  if (o instanceof Hcl) {\n    if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);\n    var h = o.h * _math__WEBPACK_IMPORTED_MODULE_2__[\"deg2rad\"];\n    return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);\n  }\n  if (!(o instanceof _color__WEBPACK_IMPORTED_MODULE_1__[\"Rgb\"])) o = Object(_color__WEBPACK_IMPORTED_MODULE_1__[\"rgbConvert\"])(o);\n  var r = rgb2lrgb(o.r),\n      g = rgb2lrgb(o.g),\n      b = rgb2lrgb(o.b),\n      y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn), x, z;\n  if (r === g && g === b) x = z = y; else {\n    x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);\n    z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);\n  }\n  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);\n}\n\nfunction gray(l, opacity) {\n  return new Lab(l, 0, 0, opacity == null ? 1 : opacity);\n}\n\nfunction lab(l, a, b, opacity) {\n  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);\n}\n\nfunction Lab(l, a, b, opacity) {\n  this.l = +l;\n  this.a = +a;\n  this.b = +b;\n  this.opacity = +opacity;\n}\n\nObject(_define__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Lab, lab, Object(_define__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(_color__WEBPACK_IMPORTED_MODULE_1__[\"Color\"], {\n  brighter: function(k) {\n    return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);\n  },\n  darker: function(k) {\n    return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);\n  },\n  rgb: function() {\n    var y = (this.l + 16) / 116,\n        x = isNaN(this.a) ? y : y + this.a / 500,\n        z = isNaN(this.b) ? y : y - this.b / 200;\n    x = Xn * lab2xyz(x);\n    y = Yn * lab2xyz(y);\n    z = Zn * lab2xyz(z);\n    return new _color__WEBPACK_IMPORTED_MODULE_1__[\"Rgb\"](\n      lrgb2rgb( 3.1338561 * x - 1.6168667 * y - 0.4906146 * z),\n      lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z),\n      lrgb2rgb( 0.0719453 * x - 0.2289914 * y + 1.4052427 * z),\n      this.opacity\n    );\n  }\n}));\n\nfunction xyz2lab(t) {\n  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;\n}\n\nfunction lab2xyz(t) {\n  return t > t1 ? t * t * t : t2 * (t - t0);\n}\n\nfunction lrgb2rgb(x) {\n  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);\n}\n\nfunction rgb2lrgb(x) {\n  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);\n}\n\nfunction hclConvert(o) {\n  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);\n  if (!(o instanceof Lab)) o = labConvert(o);\n  if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0, o.l, o.opacity);\n  var h = Math.atan2(o.b, o.a) * _math__WEBPACK_IMPORTED_MODULE_2__[\"rad2deg\"];\n  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);\n}\n\nfunction lch(l, c, h, opacity) {\n  return arguments.length === 1 ? hclConvert(l) : new Hcl(h, c, l, opacity == null ? 1 : opacity);\n}\n\nfunction hcl(h, c, l, opacity) {\n  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);\n}\n\nfunction Hcl(h, c, l, opacity) {\n  this.h = +h;\n  this.c = +c;\n  this.l = +l;\n  this.opacity = +opacity;\n}\n\nObject(_define__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Hcl, hcl, Object(_define__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(_color__WEBPACK_IMPORTED_MODULE_1__[\"Color\"], {\n  brighter: function(k) {\n    return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);\n  },\n  darker: function(k) {\n    return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);\n  },\n  rgb: function() {\n    return labConvert(this).rgb();\n  }\n}));\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-color/src/lab.js?");

/***/ }),

/***/ "./node_modules/d3-color/src/math.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-color/src/math.js ***!
  \*******************************************/
/*! exports provided: deg2rad, rad2deg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deg2rad\", function() { return deg2rad; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rad2deg\", function() { return rad2deg; });\nvar deg2rad = Math.PI / 180;\nvar rad2deg = 180 / Math.PI;\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-color/src/math.js?");

/***/ }),

/***/ "./node_modules/d3-dispatch/src/dispatch.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-dispatch/src/dispatch.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar noop = {value: function() {}};\n\nfunction dispatch() {\n  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {\n    if (!(t = arguments[i] + \"\") || (t in _)) throw new Error(\"illegal type: \" + t);\n    _[t] = [];\n  }\n  return new Dispatch(_);\n}\n\nfunction Dispatch(_) {\n  this._ = _;\n}\n\nfunction parseTypenames(typenames, types) {\n  return typenames.trim().split(/^|\\s+/).map(function(t) {\n    var name = \"\", i = t.indexOf(\".\");\n    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);\n    if (t && !types.hasOwnProperty(t)) throw new Error(\"unknown type: \" + t);\n    return {type: t, name: name};\n  });\n}\n\nDispatch.prototype = dispatch.prototype = {\n  constructor: Dispatch,\n  on: function(typename, callback) {\n    var _ = this._,\n        T = parseTypenames(typename + \"\", _),\n        t,\n        i = -1,\n        n = T.length;\n\n    // If no callback was specified, return the callback of the given type and name.\n    if (arguments.length < 2) {\n      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;\n      return;\n    }\n\n    // If a type was specified, set the callback for the given type and name.\n    // Otherwise, if a null callback was specified, remove callbacks of the given name.\n    if (callback != null && typeof callback !== \"function\") throw new Error(\"invalid callback: \" + callback);\n    while (++i < n) {\n      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);\n      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);\n    }\n\n    return this;\n  },\n  copy: function() {\n    var copy = {}, _ = this._;\n    for (var t in _) copy[t] = _[t].slice();\n    return new Dispatch(copy);\n  },\n  call: function(type, that) {\n    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];\n    if (!this._.hasOwnProperty(type)) throw new Error(\"unknown type: \" + type);\n    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);\n  },\n  apply: function(type, that, args) {\n    if (!this._.hasOwnProperty(type)) throw new Error(\"unknown type: \" + type);\n    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);\n  }\n};\n\nfunction get(type, name) {\n  for (var i = 0, n = type.length, c; i < n; ++i) {\n    if ((c = type[i]).name === name) {\n      return c.value;\n    }\n  }\n}\n\nfunction set(type, name, callback) {\n  for (var i = 0, n = type.length; i < n; ++i) {\n    if (type[i].name === name) {\n      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));\n      break;\n    }\n  }\n  if (callback != null) type.push({name: name, value: callback});\n  return type;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dispatch);\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-dispatch/src/dispatch.js?");

/***/ }),

/***/ "./node_modules/d3-dispatch/src/index.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-dispatch/src/index.js ***!
  \***********************************************/
/*! exports provided: dispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dispatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dispatch */ \"./node_modules/d3-dispatch/src/dispatch.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"dispatch\", function() { return _dispatch__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-dispatch/src/index.js?");

/***/ }),

/***/ "./node_modules/d3-drag/src/constant.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-drag/src/constant.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(x) {\n  return function() {\n    return x;\n  };\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-drag/src/constant.js?");

/***/ }),

/***/ "./node_modules/d3-drag/src/drag.js":
/*!******************************************!*\
  !*** ./node_modules/d3-drag/src/drag.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-dispatch */ \"./node_modules/d3-dispatch/src/index.js\");\n/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection */ \"./node_modules/d3-selection/src/index.js\");\n/* harmony import */ var _nodrag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nodrag */ \"./node_modules/d3-drag/src/nodrag.js\");\n/* harmony import */ var _noevent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./noevent */ \"./node_modules/d3-drag/src/noevent.js\");\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constant */ \"./node_modules/d3-drag/src/constant.js\");\n/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event */ \"./node_modules/d3-drag/src/event.js\");\n\n\n\n\n\n\n\n// Ignore right-click, since that should open the context menu.\nfunction defaultFilter() {\n  return !d3_selection__WEBPACK_IMPORTED_MODULE_1__[\"event\"].button;\n}\n\nfunction defaultContainer() {\n  return this.parentNode;\n}\n\nfunction defaultSubject(d) {\n  return d == null ? {x: d3_selection__WEBPACK_IMPORTED_MODULE_1__[\"event\"].x, y: d3_selection__WEBPACK_IMPORTED_MODULE_1__[\"event\"].y} : d;\n}\n\nfunction defaultTouchable() {\n  return \"ontouchstart\" in this;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  var filter = defaultFilter,\n      container = defaultContainer,\n      subject = defaultSubject,\n      touchable = defaultTouchable,\n      gestures = {},\n      listeners = Object(d3_dispatch__WEBPACK_IMPORTED_MODULE_0__[\"dispatch\"])(\"start\", \"drag\", \"end\"),\n      active = 0,\n      mousedownx,\n      mousedowny,\n      mousemoving,\n      touchending,\n      clickDistance2 = 0;\n\n  function drag(selection) {\n    selection\n        .on(\"mousedown.drag\", mousedowned)\n      .filter(touchable)\n        .on(\"touchstart.drag\", touchstarted)\n        .on(\"touchmove.drag\", touchmoved)\n        .on(\"touchend.drag touchcancel.drag\", touchended)\n        .style(\"touch-action\", \"none\")\n        .style(\"-webkit-tap-highlight-color\", \"rgba(0,0,0,0)\");\n  }\n\n  function mousedowned() {\n    if (touchending || !filter.apply(this, arguments)) return;\n    var gesture = beforestart(\"mouse\", container.apply(this, arguments), d3_selection__WEBPACK_IMPORTED_MODULE_1__[\"mouse\"], this, arguments);\n    if (!gesture) return;\n    Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__[\"select\"])(d3_selection__WEBPACK_IMPORTED_MODULE_1__[\"event\"].view).on(\"mousemove.drag\", mousemoved, true).on(\"mouseup.drag\", mouseupped, true);\n    Object(_nodrag__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(d3_selection__WEBPACK_IMPORTED_MODULE_1__[\"event\"].view);\n    Object(_noevent__WEBPACK_IMPORTED_MODULE_3__[\"nopropagation\"])();\n    mousemoving = false;\n    mousedownx = d3_selection__WEBPACK_IMPORTED_MODULE_1__[\"event\"].clientX;\n    mousedowny = d3_selection__WEBPACK_IMPORTED_MODULE_1__[\"event\"].clientY;\n    gesture(\"start\");\n  }\n\n  function mousemoved() {\n    Object(_noevent__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    if (!mousemoving) {\n      var dx = d3_selection__WEBPACK_IMPORTED_MODULE_1__[\"event\"].clientX - mousedownx, dy = d3_selection__WEBPACK_IMPORTED_MODULE_1__[\"event\"].clientY - mousedowny;\n      mousemoving = dx * dx + dy * dy > clickDistance2;\n    }\n    gestures.mouse(\"drag\");\n  }\n\n  function mouseupped() {\n    Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__[\"select\"])(d3_selection__WEBPACK_IMPORTED_MODULE_1__[\"event\"].view).on(\"mousemove.drag mouseup.drag\", null);\n    Object(_nodrag__WEBPACK_IMPORTED_MODULE_2__[\"yesdrag\"])(d3_selection__WEBPACK_IMPORTED_MODULE_1__[\"event\"].view, mousemoving);\n    Object(_noevent__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    gestures.mouse(\"end\");\n  }\n\n  function touchstarted() {\n    if (!filter.apply(this, arguments)) return;\n    var touches = d3_selection__WEBPACK_IMPORTED_MODULE_1__[\"event\"].changedTouches,\n        c = container.apply(this, arguments),\n        n = touches.length, i, gesture;\n\n    for (i = 0; i < n; ++i) {\n      if (gesture = beforestart(touches[i].identifier, c, d3_selection__WEBPACK_IMPORTED_MODULE_1__[\"touch\"], this, arguments)) {\n        Object(_noevent__WEBPACK_IMPORTED_MODULE_3__[\"nopropagation\"])();\n        gesture(\"start\");\n      }\n    }\n  }\n\n  function touchmoved() {\n    var touches = d3_selection__WEBPACK_IMPORTED_MODULE_1__[\"event\"].changedTouches,\n        n = touches.length, i, gesture;\n\n    for (i = 0; i < n; ++i) {\n      if (gesture = gestures[touches[i].identifier]) {\n        Object(_noevent__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n        gesture(\"drag\");\n      }\n    }\n  }\n\n  function touchended() {\n    var touches = d3_selection__WEBPACK_IMPORTED_MODULE_1__[\"event\"].changedTouches,\n        n = touches.length, i, gesture;\n\n    if (touchending) clearTimeout(touchending);\n    touchending = setTimeout(function() { touchending = null; }, 500); // Ghost clicks are delayed!\n    for (i = 0; i < n; ++i) {\n      if (gesture = gestures[touches[i].identifier]) {\n        Object(_noevent__WEBPACK_IMPORTED_MODULE_3__[\"nopropagation\"])();\n        gesture(\"end\");\n      }\n    }\n  }\n\n  function beforestart(id, container, point, that, args) {\n    var p = point(container, id), s, dx, dy,\n        sublisteners = listeners.copy();\n\n    if (!Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__[\"customEvent\"])(new _event__WEBPACK_IMPORTED_MODULE_5__[\"default\"](drag, \"beforestart\", s, id, active, p[0], p[1], 0, 0, sublisteners), function() {\n      if ((d3_selection__WEBPACK_IMPORTED_MODULE_1__[\"event\"].subject = s = subject.apply(that, args)) == null) return false;\n      dx = s.x - p[0] || 0;\n      dy = s.y - p[1] || 0;\n      return true;\n    })) return;\n\n    return function gesture(type) {\n      var p0 = p, n;\n      switch (type) {\n        case \"start\": gestures[id] = gesture, n = active++; break;\n        case \"end\": delete gestures[id], --active; // nobreak\n        case \"drag\": p = point(container, id), n = active; break;\n      }\n      Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__[\"customEvent\"])(new _event__WEBPACK_IMPORTED_MODULE_5__[\"default\"](drag, type, s, id, n, p[0] + dx, p[1] + dy, p[0] - p0[0], p[1] - p0[1], sublisteners), sublisteners.apply, sublisteners, [type, that, args]);\n    };\n  }\n\n  drag.filter = function(_) {\n    return arguments.length ? (filter = typeof _ === \"function\" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(!!_), drag) : filter;\n  };\n\n  drag.container = function(_) {\n    return arguments.length ? (container = typeof _ === \"function\" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_), drag) : container;\n  };\n\n  drag.subject = function(_) {\n    return arguments.length ? (subject = typeof _ === \"function\" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_), drag) : subject;\n  };\n\n  drag.touchable = function(_) {\n    return arguments.length ? (touchable = typeof _ === \"function\" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(!!_), drag) : touchable;\n  };\n\n  drag.on = function() {\n    var value = listeners.on.apply(listeners, arguments);\n    return value === listeners ? drag : value;\n  };\n\n  drag.clickDistance = function(_) {\n    return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);\n  };\n\n  return drag;\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-drag/src/drag.js?");

/***/ }),

/***/ "./node_modules/d3-drag/src/event.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-drag/src/event.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DragEvent; });\nfunction DragEvent(target, type, subject, id, active, x, y, dx, dy, dispatch) {\n  this.target = target;\n  this.type = type;\n  this.subject = subject;\n  this.identifier = id;\n  this.active = active;\n  this.x = x;\n  this.y = y;\n  this.dx = dx;\n  this.dy = dy;\n  this._ = dispatch;\n}\n\nDragEvent.prototype.on = function() {\n  var value = this._.on.apply(this._, arguments);\n  return value === this._ ? this : value;\n};\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-drag/src/event.js?");

/***/ }),

/***/ "./node_modules/d3-drag/src/index.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-drag/src/index.js ***!
  \*******************************************/
/*! exports provided: drag, dragDisable, dragEnable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _drag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag */ \"./node_modules/d3-drag/src/drag.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"drag\", function() { return _drag__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _nodrag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nodrag */ \"./node_modules/d3-drag/src/nodrag.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"dragDisable\", function() { return _nodrag__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"dragEnable\", function() { return _nodrag__WEBPACK_IMPORTED_MODULE_1__[\"yesdrag\"]; });\n\n\n\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-drag/src/index.js?");

/***/ }),

/***/ "./node_modules/d3-drag/src/nodrag.js":
/*!********************************************!*\
  !*** ./node_modules/d3-drag/src/nodrag.js ***!
  \********************************************/
/*! exports provided: default, yesdrag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"yesdrag\", function() { return yesdrag; });\n/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ \"./node_modules/d3-selection/src/index.js\");\n/* harmony import */ var _noevent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noevent */ \"./node_modules/d3-drag/src/noevent.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(view) {\n  var root = view.document.documentElement,\n      selection = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__[\"select\"])(view).on(\"dragstart.drag\", _noevent__WEBPACK_IMPORTED_MODULE_1__[\"default\"], true);\n  if (\"onselectstart\" in root) {\n    selection.on(\"selectstart.drag\", _noevent__WEBPACK_IMPORTED_MODULE_1__[\"default\"], true);\n  } else {\n    root.__noselect = root.style.MozUserSelect;\n    root.style.MozUserSelect = \"none\";\n  }\n});\n\nfunction yesdrag(view, noclick) {\n  var root = view.document.documentElement,\n      selection = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__[\"select\"])(view).on(\"dragstart.drag\", null);\n  if (noclick) {\n    selection.on(\"click.drag\", _noevent__WEBPACK_IMPORTED_MODULE_1__[\"default\"], true);\n    setTimeout(function() { selection.on(\"click.drag\", null); }, 0);\n  }\n  if (\"onselectstart\" in root) {\n    selection.on(\"selectstart.drag\", null);\n  } else {\n    root.style.MozUserSelect = root.__noselect;\n    delete root.__noselect;\n  }\n}\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-drag/src/nodrag.js?");

/***/ }),

/***/ "./node_modules/d3-drag/src/noevent.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-drag/src/noevent.js ***!
  \*********************************************/
/*! exports provided: nopropagation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nopropagation\", function() { return nopropagation; });\n/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ \"./node_modules/d3-selection/src/index.js\");\n\n\nfunction nopropagation() {\n  d3_selection__WEBPACK_IMPORTED_MODULE_0__[\"event\"].stopImmediatePropagation();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  d3_selection__WEBPACK_IMPORTED_MODULE_0__[\"event\"].preventDefault();\n  d3_selection__WEBPACK_IMPORTED_MODULE_0__[\"event\"].stopImmediatePropagation();\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-drag/src/noevent.js?");

/***/ }),

/***/ "./node_modules/d3-ease/src/back.js":
/*!******************************************!*\
  !*** ./node_modules/d3-ease/src/back.js ***!
  \******************************************/
/*! exports provided: backIn, backOut, backInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"backIn\", function() { return backIn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"backOut\", function() { return backOut; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"backInOut\", function() { return backInOut; });\nvar overshoot = 1.70158;\n\nvar backIn = (function custom(s) {\n  s = +s;\n\n  function backIn(t) {\n    return t * t * ((s + 1) * t - s);\n  }\n\n  backIn.overshoot = custom;\n\n  return backIn;\n})(overshoot);\n\nvar backOut = (function custom(s) {\n  s = +s;\n\n  function backOut(t) {\n    return --t * t * ((s + 1) * t + s) + 1;\n  }\n\n  backOut.overshoot = custom;\n\n  return backOut;\n})(overshoot);\n\nvar backInOut = (function custom(s) {\n  s = +s;\n\n  function backInOut(t) {\n    return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;\n  }\n\n  backInOut.overshoot = custom;\n\n  return backInOut;\n})(overshoot);\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-ease/src/back.js?");

/***/ }),

/***/ "./node_modules/d3-ease/src/bounce.js":
/*!********************************************!*\
  !*** ./node_modules/d3-ease/src/bounce.js ***!
  \********************************************/
/*! exports provided: bounceIn, bounceOut, bounceInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bounceIn\", function() { return bounceIn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bounceOut\", function() { return bounceOut; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bounceInOut\", function() { return bounceInOut; });\nvar b1 = 4 / 11,\n    b2 = 6 / 11,\n    b3 = 8 / 11,\n    b4 = 3 / 4,\n    b5 = 9 / 11,\n    b6 = 10 / 11,\n    b7 = 15 / 16,\n    b8 = 21 / 22,\n    b9 = 63 / 64,\n    b0 = 1 / b1 / b1;\n\nfunction bounceIn(t) {\n  return 1 - bounceOut(1 - t);\n}\n\nfunction bounceOut(t) {\n  return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;\n}\n\nfunction bounceInOut(t) {\n  return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;\n}\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-ease/src/bounce.js?");

/***/ }),

/***/ "./node_modules/d3-ease/src/circle.js":
/*!********************************************!*\
  !*** ./node_modules/d3-ease/src/circle.js ***!
  \********************************************/
/*! exports provided: circleIn, circleOut, circleInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"circleIn\", function() { return circleIn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"circleOut\", function() { return circleOut; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"circleInOut\", function() { return circleInOut; });\nfunction circleIn(t) {\n  return 1 - Math.sqrt(1 - t * t);\n}\n\nfunction circleOut(t) {\n  return Math.sqrt(1 - --t * t);\n}\n\nfunction circleInOut(t) {\n  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;\n}\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-ease/src/circle.js?");

/***/ }),

/***/ "./node_modules/d3-ease/src/cubic.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-ease/src/cubic.js ***!
  \*******************************************/
/*! exports provided: cubicIn, cubicOut, cubicInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cubicIn\", function() { return cubicIn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cubicOut\", function() { return cubicOut; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cubicInOut\", function() { return cubicInOut; });\nfunction cubicIn(t) {\n  return t * t * t;\n}\n\nfunction cubicOut(t) {\n  return --t * t * t + 1;\n}\n\nfunction cubicInOut(t) {\n  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;\n}\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-ease/src/cubic.js?");

/***/ }),

/***/ "./node_modules/d3-ease/src/elastic.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-ease/src/elastic.js ***!
  \*********************************************/
/*! exports provided: elasticIn, elasticOut, elasticInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elasticIn\", function() { return elasticIn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elasticOut\", function() { return elasticOut; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elasticInOut\", function() { return elasticInOut; });\nvar tau = 2 * Math.PI,\n    amplitude = 1,\n    period = 0.3;\n\nvar elasticIn = (function custom(a, p) {\n  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);\n\n  function elasticIn(t) {\n    return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);\n  }\n\n  elasticIn.amplitude = function(a) { return custom(a, p * tau); };\n  elasticIn.period = function(p) { return custom(a, p); };\n\n  return elasticIn;\n})(amplitude, period);\n\nvar elasticOut = (function custom(a, p) {\n  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);\n\n  function elasticOut(t) {\n    return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);\n  }\n\n  elasticOut.amplitude = function(a) { return custom(a, p * tau); };\n  elasticOut.period = function(p) { return custom(a, p); };\n\n  return elasticOut;\n})(amplitude, period);\n\nvar elasticInOut = (function custom(a, p) {\n  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);\n\n  function elasticInOut(t) {\n    return ((t = t * 2 - 1) < 0\n        ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p)\n        : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;\n  }\n\n  elasticInOut.amplitude = function(a) { return custom(a, p * tau); };\n  elasticInOut.period = function(p) { return custom(a, p); };\n\n  return elasticInOut;\n})(amplitude, period);\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-ease/src/elastic.js?");

/***/ }),

/***/ "./node_modules/d3-ease/src/exp.js":
/*!*****************************************!*\
  !*** ./node_modules/d3-ease/src/exp.js ***!
  \*****************************************/
/*! exports provided: expIn, expOut, expInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"expIn\", function() { return expIn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"expOut\", function() { return expOut; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"expInOut\", function() { return expInOut; });\nfunction expIn(t) {\n  return Math.pow(2, 10 * t - 10);\n}\n\nfunction expOut(t) {\n  return 1 - Math.pow(2, -10 * t);\n}\n\nfunction expInOut(t) {\n  return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;\n}\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-ease/src/exp.js?");

/***/ }),

/***/ "./node_modules/d3-ease/src/index.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-ease/src/index.js ***!
  \*******************************************/
/*! exports provided: easeLinear, easeQuad, easeQuadIn, easeQuadOut, easeQuadInOut, easeCubic, easeCubicIn, easeCubicOut, easeCubicInOut, easePoly, easePolyIn, easePolyOut, easePolyInOut, easeSin, easeSinIn, easeSinOut, easeSinInOut, easeExp, easeExpIn, easeExpOut, easeExpInOut, easeCircle, easeCircleIn, easeCircleOut, easeCircleInOut, easeBounce, easeBounceIn, easeBounceOut, easeBounceInOut, easeBack, easeBackIn, easeBackOut, easeBackInOut, easeElastic, easeElasticIn, easeElasticOut, easeElasticInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear */ \"./node_modules/d3-ease/src/linear.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeLinear\", function() { return _linear__WEBPACK_IMPORTED_MODULE_0__[\"linear\"]; });\n\n/* harmony import */ var _quad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quad */ \"./node_modules/d3-ease/src/quad.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeQuad\", function() { return _quad__WEBPACK_IMPORTED_MODULE_1__[\"quadInOut\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeQuadIn\", function() { return _quad__WEBPACK_IMPORTED_MODULE_1__[\"quadIn\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeQuadOut\", function() { return _quad__WEBPACK_IMPORTED_MODULE_1__[\"quadOut\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeQuadInOut\", function() { return _quad__WEBPACK_IMPORTED_MODULE_1__[\"quadInOut\"]; });\n\n/* harmony import */ var _cubic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cubic */ \"./node_modules/d3-ease/src/cubic.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeCubic\", function() { return _cubic__WEBPACK_IMPORTED_MODULE_2__[\"cubicInOut\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeCubicIn\", function() { return _cubic__WEBPACK_IMPORTED_MODULE_2__[\"cubicIn\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeCubicOut\", function() { return _cubic__WEBPACK_IMPORTED_MODULE_2__[\"cubicOut\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeCubicInOut\", function() { return _cubic__WEBPACK_IMPORTED_MODULE_2__[\"cubicInOut\"]; });\n\n/* harmony import */ var _poly__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./poly */ \"./node_modules/d3-ease/src/poly.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easePoly\", function() { return _poly__WEBPACK_IMPORTED_MODULE_3__[\"polyInOut\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easePolyIn\", function() { return _poly__WEBPACK_IMPORTED_MODULE_3__[\"polyIn\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easePolyOut\", function() { return _poly__WEBPACK_IMPORTED_MODULE_3__[\"polyOut\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easePolyInOut\", function() { return _poly__WEBPACK_IMPORTED_MODULE_3__[\"polyInOut\"]; });\n\n/* harmony import */ var _sin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sin */ \"./node_modules/d3-ease/src/sin.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeSin\", function() { return _sin__WEBPACK_IMPORTED_MODULE_4__[\"sinInOut\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeSinIn\", function() { return _sin__WEBPACK_IMPORTED_MODULE_4__[\"sinIn\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeSinOut\", function() { return _sin__WEBPACK_IMPORTED_MODULE_4__[\"sinOut\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeSinInOut\", function() { return _sin__WEBPACK_IMPORTED_MODULE_4__[\"sinInOut\"]; });\n\n/* harmony import */ var _exp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exp */ \"./node_modules/d3-ease/src/exp.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeExp\", function() { return _exp__WEBPACK_IMPORTED_MODULE_5__[\"expInOut\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeExpIn\", function() { return _exp__WEBPACK_IMPORTED_MODULE_5__[\"expIn\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeExpOut\", function() { return _exp__WEBPACK_IMPORTED_MODULE_5__[\"expOut\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeExpInOut\", function() { return _exp__WEBPACK_IMPORTED_MODULE_5__[\"expInOut\"]; });\n\n/* harmony import */ var _circle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./circle */ \"./node_modules/d3-ease/src/circle.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeCircle\", function() { return _circle__WEBPACK_IMPORTED_MODULE_6__[\"circleInOut\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeCircleIn\", function() { return _circle__WEBPACK_IMPORTED_MODULE_6__[\"circleIn\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeCircleOut\", function() { return _circle__WEBPACK_IMPORTED_MODULE_6__[\"circleOut\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeCircleInOut\", function() { return _circle__WEBPACK_IMPORTED_MODULE_6__[\"circleInOut\"]; });\n\n/* harmony import */ var _bounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bounce */ \"./node_modules/d3-ease/src/bounce.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeBounce\", function() { return _bounce__WEBPACK_IMPORTED_MODULE_7__[\"bounceOut\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeBounceIn\", function() { return _bounce__WEBPACK_IMPORTED_MODULE_7__[\"bounceIn\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeBounceOut\", function() { return _bounce__WEBPACK_IMPORTED_MODULE_7__[\"bounceOut\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeBounceInOut\", function() { return _bounce__WEBPACK_IMPORTED_MODULE_7__[\"bounceInOut\"]; });\n\n/* harmony import */ var _back__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./back */ \"./node_modules/d3-ease/src/back.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeBack\", function() { return _back__WEBPACK_IMPORTED_MODULE_8__[\"backInOut\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeBackIn\", function() { return _back__WEBPACK_IMPORTED_MODULE_8__[\"backIn\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeBackOut\", function() { return _back__WEBPACK_IMPORTED_MODULE_8__[\"backOut\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeBackInOut\", function() { return _back__WEBPACK_IMPORTED_MODULE_8__[\"backInOut\"]; });\n\n/* harmony import */ var _elastic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./elastic */ \"./node_modules/d3-ease/src/elastic.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeElastic\", function() { return _elastic__WEBPACK_IMPORTED_MODULE_9__[\"elasticOut\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeElasticIn\", function() { return _elastic__WEBPACK_IMPORTED_MODULE_9__[\"elasticIn\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeElasticOut\", function() { return _elastic__WEBPACK_IMPORTED_MODULE_9__[\"elasticOut\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeElasticInOut\", function() { return _elastic__WEBPACK_IMPORTED_MODULE_9__[\"elasticInOut\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-ease/src/index.js?");

/***/ }),

/***/ "./node_modules/d3-ease/src/linear.js":
/*!********************************************!*\
  !*** ./node_modules/d3-ease/src/linear.js ***!
  \********************************************/
/*! exports provided: linear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"linear\", function() { return linear; });\nfunction linear(t) {\n  return +t;\n}\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-ease/src/linear.js?");

/***/ }),

/***/ "./node_modules/d3-ease/src/poly.js":
/*!******************************************!*\
  !*** ./node_modules/d3-ease/src/poly.js ***!
  \******************************************/
/*! exports provided: polyIn, polyOut, polyInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"polyIn\", function() { return polyIn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"polyOut\", function() { return polyOut; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"polyInOut\", function() { return polyInOut; });\nvar exponent = 3;\n\nvar polyIn = (function custom(e) {\n  e = +e;\n\n  function polyIn(t) {\n    return Math.pow(t, e);\n  }\n\n  polyIn.exponent = custom;\n\n  return polyIn;\n})(exponent);\n\nvar polyOut = (function custom(e) {\n  e = +e;\n\n  function polyOut(t) {\n    return 1 - Math.pow(1 - t, e);\n  }\n\n  polyOut.exponent = custom;\n\n  return polyOut;\n})(exponent);\n\nvar polyInOut = (function custom(e) {\n  e = +e;\n\n  function polyInOut(t) {\n    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;\n  }\n\n  polyInOut.exponent = custom;\n\n  return polyInOut;\n})(exponent);\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-ease/src/poly.js?");

/***/ }),

/***/ "./node_modules/d3-ease/src/quad.js":
/*!******************************************!*\
  !*** ./node_modules/d3-ease/src/quad.js ***!
  \******************************************/
/*! exports provided: quadIn, quadOut, quadInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"quadIn\", function() { return quadIn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"quadOut\", function() { return quadOut; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"quadInOut\", function() { return quadInOut; });\nfunction quadIn(t) {\n  return t * t;\n}\n\nfunction quadOut(t) {\n  return t * (2 - t);\n}\n\nfunction quadInOut(t) {\n  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;\n}\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-ease/src/quad.js?");

/***/ }),

/***/ "./node_modules/d3-ease/src/sin.js":
/*!*****************************************!*\
  !*** ./node_modules/d3-ease/src/sin.js ***!
  \*****************************************/
/*! exports provided: sinIn, sinOut, sinInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sinIn\", function() { return sinIn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sinOut\", function() { return sinOut; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sinInOut\", function() { return sinInOut; });\nvar pi = Math.PI,\n    halfPi = pi / 2;\n\nfunction sinIn(t) {\n  return 1 - Math.cos(t * halfPi);\n}\n\nfunction sinOut(t) {\n  return Math.sin(t * halfPi);\n}\n\nfunction sinInOut(t) {\n  return (1 - Math.cos(pi * t)) / 2;\n}\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-ease/src/sin.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/accessors.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/accessors.js ***!
  \****************************************************/
/*! exports provided: optional, required */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"optional\", function() { return optional; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"required\", function() { return required; });\nfunction optional(f) {\n  return f == null ? null : required(f);\n}\n\nfunction required(f) {\n  if (typeof f !== \"function\") throw new Error;\n  return f;\n}\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-hierarchy/src/accessors.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/array.js":
/*!************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/array.js ***!
  \************************************************/
/*! exports provided: slice, shuffle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"slice\", function() { return slice; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shuffle\", function() { return shuffle; });\nvar slice = Array.prototype.slice;\n\nfunction shuffle(array) {\n  var m = array.length,\n      t,\n      i;\n\n  while (m) {\n    i = Math.random() * m-- | 0;\n    t = array[m];\n    array[m] = array[i];\n    array[i] = t;\n  }\n\n  return array;\n}\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-hierarchy/src/array.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/cluster.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/cluster.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction defaultSeparation(a, b) {\n  return a.parent === b.parent ? 1 : 2;\n}\n\nfunction meanX(children) {\n  return children.reduce(meanXReduce, 0) / children.length;\n}\n\nfunction meanXReduce(x, c) {\n  return x + c.x;\n}\n\nfunction maxY(children) {\n  return 1 + children.reduce(maxYReduce, 0);\n}\n\nfunction maxYReduce(y, c) {\n  return Math.max(y, c.y);\n}\n\nfunction leafLeft(node) {\n  var children;\n  while (children = node.children) node = children[0];\n  return node;\n}\n\nfunction leafRight(node) {\n  var children;\n  while (children = node.children) node = children[children.length - 1];\n  return node;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  var separation = defaultSeparation,\n      dx = 1,\n      dy = 1,\n      nodeSize = false;\n\n  function cluster(root) {\n    var previousNode,\n        x = 0;\n\n    // First walk, computing the initial x & y values.\n    root.eachAfter(function(node) {\n      var children = node.children;\n      if (children) {\n        node.x = meanX(children);\n        node.y = maxY(children);\n      } else {\n        node.x = previousNode ? x += separation(node, previousNode) : 0;\n        node.y = 0;\n        previousNode = node;\n      }\n    });\n\n    var left = leafLeft(root),\n        right = leafRight(root),\n        x0 = left.x - separation(left, right) / 2,\n        x1 = right.x + separation(right, left) / 2;\n\n    // Second walk, normalizing x & y to the desired size.\n    return root.eachAfter(nodeSize ? function(node) {\n      node.x = (node.x - root.x) * dx;\n      node.y = (root.y - node.y) * dy;\n    } : function(node) {\n      node.x = (node.x - x0) / (x1 - x0) * dx;\n      node.y = (1 - (root.y ? node.y / root.y : 1)) * dy;\n    });\n  }\n\n  cluster.separation = function(x) {\n    return arguments.length ? (separation = x, cluster) : separation;\n  };\n\n  cluster.size = function(x) {\n    return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], cluster) : (nodeSize ? null : [dx, dy]);\n  };\n\n  cluster.nodeSize = function(x) {\n    return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], cluster) : (nodeSize ? [dx, dy] : null);\n  };\n\n  return cluster;\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-hierarchy/src/cluster.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/constant.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/constant.js ***!
  \***************************************************/
/*! exports provided: constantZero, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"constantZero\", function() { return constantZero; });\nfunction constantZero() {\n  return 0;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(x) {\n  return function() {\n    return x;\n  };\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-hierarchy/src/constant.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/ancestors.js":
/*!**************************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/ancestors.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  var node = this, nodes = [node];\n  while (node = node.parent) {\n    nodes.push(node);\n  }\n  return nodes;\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-hierarchy/src/hierarchy/ancestors.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/count.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/count.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction count(node) {\n  var sum = 0,\n      children = node.children,\n      i = children && children.length;\n  if (!i) sum = 1;\n  else while (--i >= 0) sum += children[i].value;\n  node.value = sum;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  return this.eachAfter(count);\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-hierarchy/src/hierarchy/count.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/descendants.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/descendants.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  var nodes = [];\n  this.each(function(node) {\n    nodes.push(node);\n  });\n  return nodes;\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-hierarchy/src/hierarchy/descendants.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/each.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/each.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(callback) {\n  var node = this, current, next = [node], children, i, n;\n  do {\n    current = next.reverse(), next = [];\n    while (node = current.pop()) {\n      callback(node), children = node.children;\n      if (children) for (i = 0, n = children.length; i < n; ++i) {\n        next.push(children[i]);\n      }\n    }\n  } while (next.length);\n  return this;\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-hierarchy/src/hierarchy/each.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/eachAfter.js":
/*!**************************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/eachAfter.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(callback) {\n  var node = this, nodes = [node], next = [], children, i, n;\n  while (node = nodes.pop()) {\n    next.push(node), children = node.children;\n    if (children) for (i = 0, n = children.length; i < n; ++i) {\n      nodes.push(children[i]);\n    }\n  }\n  while (node = next.pop()) {\n    callback(node);\n  }\n  return this;\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-hierarchy/src/hierarchy/eachAfter.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/eachBefore.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/eachBefore.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(callback) {\n  var node = this, nodes = [node], children, i;\n  while (node = nodes.pop()) {\n    callback(node), children = node.children;\n    if (children) for (i = children.length - 1; i >= 0; --i) {\n      nodes.push(children[i]);\n    }\n  }\n  return this;\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-hierarchy/src/hierarchy/eachBefore.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/index.js ***!
  \**********************************************************/
/*! exports provided: default, computeHeight, Node */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return hierarchy; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"computeHeight\", function() { return computeHeight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Node\", function() { return Node; });\n/* harmony import */ var _count__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./count */ \"./node_modules/d3-hierarchy/src/hierarchy/count.js\");\n/* harmony import */ var _each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./each */ \"./node_modules/d3-hierarchy/src/hierarchy/each.js\");\n/* harmony import */ var _eachBefore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eachBefore */ \"./node_modules/d3-hierarchy/src/hierarchy/eachBefore.js\");\n/* harmony import */ var _eachAfter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eachAfter */ \"./node_modules/d3-hierarchy/src/hierarchy/eachAfter.js\");\n/* harmony import */ var _sum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sum */ \"./node_modules/d3-hierarchy/src/hierarchy/sum.js\");\n/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sort */ \"./node_modules/d3-hierarchy/src/hierarchy/sort.js\");\n/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./path */ \"./node_modules/d3-hierarchy/src/hierarchy/path.js\");\n/* harmony import */ var _ancestors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ancestors */ \"./node_modules/d3-hierarchy/src/hierarchy/ancestors.js\");\n/* harmony import */ var _descendants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./descendants */ \"./node_modules/d3-hierarchy/src/hierarchy/descendants.js\");\n/* harmony import */ var _leaves__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./leaves */ \"./node_modules/d3-hierarchy/src/hierarchy/leaves.js\");\n/* harmony import */ var _links__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./links */ \"./node_modules/d3-hierarchy/src/hierarchy/links.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nfunction hierarchy(data, children) {\n  var root = new Node(data),\n      valued = +data.value && (root.value = data.value),\n      node,\n      nodes = [root],\n      child,\n      childs,\n      i,\n      n;\n\n  if (children == null) children = defaultChildren;\n\n  while (node = nodes.pop()) {\n    if (valued) node.value = +node.data.value;\n    if ((childs = children(node.data)) && (n = childs.length)) {\n      node.children = new Array(n);\n      for (i = n - 1; i >= 0; --i) {\n        nodes.push(child = node.children[i] = new Node(childs[i]));\n        child.parent = node;\n        child.depth = node.depth + 1;\n      }\n    }\n  }\n\n  return root.eachBefore(computeHeight);\n}\n\nfunction node_copy() {\n  return hierarchy(this).eachBefore(copyData);\n}\n\nfunction defaultChildren(d) {\n  return d.children;\n}\n\nfunction copyData(node) {\n  node.data = node.data.data;\n}\n\nfunction computeHeight(node) {\n  var height = 0;\n  do node.height = height;\n  while ((node = node.parent) && (node.height < ++height));\n}\n\nfunction Node(data) {\n  this.data = data;\n  this.depth =\n  this.height = 0;\n  this.parent = null;\n}\n\nNode.prototype = hierarchy.prototype = {\n  constructor: Node,\n  count: _count__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  each: _each__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  eachAfter: _eachAfter__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  eachBefore: _eachBefore__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  sum: _sum__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  sort: _sort__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  path: _path__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  ancestors: _ancestors__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  descendants: _descendants__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n  leaves: _leaves__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n  links: _links__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n  copy: node_copy\n};\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-hierarchy/src/hierarchy/index.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/leaves.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/leaves.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  var leaves = [];\n  this.eachBefore(function(node) {\n    if (!node.children) {\n      leaves.push(node);\n    }\n  });\n  return leaves;\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-hierarchy/src/hierarchy/leaves.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/links.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/links.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  var root = this, links = [];\n  root.each(function(node) {\n    if (node !== root) { // Don’t include the root’s parent, if any.\n      links.push({source: node.parent, target: node});\n    }\n  });\n  return links;\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-hierarchy/src/hierarchy/links.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/path.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/path.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(end) {\n  var start = this,\n      ancestor = leastCommonAncestor(start, end),\n      nodes = [start];\n  while (start !== ancestor) {\n    start = start.parent;\n    nodes.push(start);\n  }\n  var k = nodes.length;\n  while (end !== ancestor) {\n    nodes.splice(k, 0, end);\n    end = end.parent;\n  }\n  return nodes;\n});\n\nfunction leastCommonAncestor(a, b) {\n  if (a === b) return a;\n  var aNodes = a.ancestors(),\n      bNodes = b.ancestors(),\n      c = null;\n  a = aNodes.pop();\n  b = bNodes.pop();\n  while (a === b) {\n    c = a;\n    a = aNodes.pop();\n    b = bNodes.pop();\n  }\n  return c;\n}\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-hierarchy/src/hierarchy/path.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/sort.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/sort.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(compare) {\n  return this.eachBefore(function(node) {\n    if (node.children) {\n      node.children.sort(compare);\n    }\n  });\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-hierarchy/src/hierarchy/sort.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/sum.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/sum.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(value) {\n  return this.eachAfter(function(node) {\n    var sum = +value(node.data) || 0,\n        children = node.children,\n        i = children && children.length;\n    while (--i >= 0) sum += children[i].value;\n    node.value = sum;\n  });\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-hierarchy/src/hierarchy/sum.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/index.js":
/*!************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/index.js ***!
  \************************************************/
/*! exports provided: cluster, hierarchy, pack, packSiblings, packEnclose, partition, stratify, tree, treemap, treemapBinary, treemapDice, treemapSlice, treemapSliceDice, treemapSquarify, treemapResquarify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cluster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cluster */ \"./node_modules/d3-hierarchy/src/cluster.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"cluster\", function() { return _cluster__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _hierarchy_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hierarchy/index */ \"./node_modules/d3-hierarchy/src/hierarchy/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"hierarchy\", function() { return _hierarchy_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _pack_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pack/index */ \"./node_modules/d3-hierarchy/src/pack/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pack\", function() { return _pack_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _pack_siblings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pack/siblings */ \"./node_modules/d3-hierarchy/src/pack/siblings.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"packSiblings\", function() { return _pack_siblings__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _pack_enclose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pack/enclose */ \"./node_modules/d3-hierarchy/src/pack/enclose.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"packEnclose\", function() { return _pack_enclose__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _partition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./partition */ \"./node_modules/d3-hierarchy/src/partition.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"partition\", function() { return _partition__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _stratify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stratify */ \"./node_modules/d3-hierarchy/src/stratify.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"stratify\", function() { return _stratify__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tree */ \"./node_modules/d3-hierarchy/src/tree.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"tree\", function() { return _tree__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n/* harmony import */ var _treemap_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./treemap/index */ \"./node_modules/d3-hierarchy/src/treemap/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"treemap\", function() { return _treemap_index__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; });\n\n/* harmony import */ var _treemap_binary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./treemap/binary */ \"./node_modules/d3-hierarchy/src/treemap/binary.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"treemapBinary\", function() { return _treemap_binary__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; });\n\n/* harmony import */ var _treemap_dice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./treemap/dice */ \"./node_modules/d3-hierarchy/src/treemap/dice.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"treemapDice\", function() { return _treemap_dice__WEBPACK_IMPORTED_MODULE_10__[\"default\"]; });\n\n/* harmony import */ var _treemap_slice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./treemap/slice */ \"./node_modules/d3-hierarchy/src/treemap/slice.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"treemapSlice\", function() { return _treemap_slice__WEBPACK_IMPORTED_MODULE_11__[\"default\"]; });\n\n/* harmony import */ var _treemap_sliceDice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./treemap/sliceDice */ \"./node_modules/d3-hierarchy/src/treemap/sliceDice.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"treemapSliceDice\", function() { return _treemap_sliceDice__WEBPACK_IMPORTED_MODULE_12__[\"default\"]; });\n\n/* harmony import */ var _treemap_squarify__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./treemap/squarify */ \"./node_modules/d3-hierarchy/src/treemap/squarify.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"treemapSquarify\", function() { return _treemap_squarify__WEBPACK_IMPORTED_MODULE_13__[\"default\"]; });\n\n/* harmony import */ var _treemap_resquarify__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./treemap/resquarify */ \"./node_modules/d3-hierarchy/src/treemap/resquarify.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"treemapResquarify\", function() { return _treemap_resquarify__WEBPACK_IMPORTED_MODULE_14__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-hierarchy/src/index.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/pack/enclose.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/pack/enclose.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array */ \"./node_modules/d3-hierarchy/src/array.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(circles) {\n  var i = 0, n = (circles = Object(_array__WEBPACK_IMPORTED_MODULE_0__[\"shuffle\"])(_array__WEBPACK_IMPORTED_MODULE_0__[\"slice\"].call(circles))).length, B = [], p, e;\n\n  while (i < n) {\n    p = circles[i];\n    if (e && enclosesWeak(e, p)) ++i;\n    else e = encloseBasis(B = extendBasis(B, p)), i = 0;\n  }\n\n  return e;\n});\n\nfunction extendBasis(B, p) {\n  var i, j;\n\n  if (enclosesWeakAll(p, B)) return [p];\n\n  // If we get here then B must have at least one element.\n  for (i = 0; i < B.length; ++i) {\n    if (enclosesNot(p, B[i])\n        && enclosesWeakAll(encloseBasis2(B[i], p), B)) {\n      return [B[i], p];\n    }\n  }\n\n  // If we get here then B must have at least two elements.\n  for (i = 0; i < B.length - 1; ++i) {\n    for (j = i + 1; j < B.length; ++j) {\n      if (enclosesNot(encloseBasis2(B[i], B[j]), p)\n          && enclosesNot(encloseBasis2(B[i], p), B[j])\n          && enclosesNot(encloseBasis2(B[j], p), B[i])\n          && enclosesWeakAll(encloseBasis3(B[i], B[j], p), B)) {\n        return [B[i], B[j], p];\n      }\n    }\n  }\n\n  // If we get here then something is very wrong.\n  throw new Error;\n}\n\nfunction enclosesNot(a, b) {\n  var dr = a.r - b.r, dx = b.x - a.x, dy = b.y - a.y;\n  return dr < 0 || dr * dr < dx * dx + dy * dy;\n}\n\nfunction enclosesWeak(a, b) {\n  var dr = a.r - b.r + 1e-6, dx = b.x - a.x, dy = b.y - a.y;\n  return dr > 0 && dr * dr > dx * dx + dy * dy;\n}\n\nfunction enclosesWeakAll(a, B) {\n  for (var i = 0; i < B.length; ++i) {\n    if (!enclosesWeak(a, B[i])) {\n      return false;\n    }\n  }\n  return true;\n}\n\nfunction encloseBasis(B) {\n  switch (B.length) {\n    case 1: return encloseBasis1(B[0]);\n    case 2: return encloseBasis2(B[0], B[1]);\n    case 3: return encloseBasis3(B[0], B[1], B[2]);\n  }\n}\n\nfunction encloseBasis1(a) {\n  return {\n    x: a.x,\n    y: a.y,\n    r: a.r\n  };\n}\n\nfunction encloseBasis2(a, b) {\n  var x1 = a.x, y1 = a.y, r1 = a.r,\n      x2 = b.x, y2 = b.y, r2 = b.r,\n      x21 = x2 - x1, y21 = y2 - y1, r21 = r2 - r1,\n      l = Math.sqrt(x21 * x21 + y21 * y21);\n  return {\n    x: (x1 + x2 + x21 / l * r21) / 2,\n    y: (y1 + y2 + y21 / l * r21) / 2,\n    r: (l + r1 + r2) / 2\n  };\n}\n\nfunction encloseBasis3(a, b, c) {\n  var x1 = a.x, y1 = a.y, r1 = a.r,\n      x2 = b.x, y2 = b.y, r2 = b.r,\n      x3 = c.x, y3 = c.y, r3 = c.r,\n      a2 = x1 - x2,\n      a3 = x1 - x3,\n      b2 = y1 - y2,\n      b3 = y1 - y3,\n      c2 = r2 - r1,\n      c3 = r3 - r1,\n      d1 = x1 * x1 + y1 * y1 - r1 * r1,\n      d2 = d1 - x2 * x2 - y2 * y2 + r2 * r2,\n      d3 = d1 - x3 * x3 - y3 * y3 + r3 * r3,\n      ab = a3 * b2 - a2 * b3,\n      xa = (b2 * d3 - b3 * d2) / (ab * 2) - x1,\n      xb = (b3 * c2 - b2 * c3) / ab,\n      ya = (a3 * d2 - a2 * d3) / (ab * 2) - y1,\n      yb = (a2 * c3 - a3 * c2) / ab,\n      A = xb * xb + yb * yb - 1,\n      B = 2 * (r1 + xa * xb + ya * yb),\n      C = xa * xa + ya * ya - r1 * r1,\n      r = -(A ? (B + Math.sqrt(B * B - 4 * A * C)) / (2 * A) : C / B);\n  return {\n    x: x1 + xa + xb * r,\n    y: y1 + ya + yb * r,\n    r: r\n  };\n}\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-hierarchy/src/pack/enclose.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/pack/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/pack/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _siblings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./siblings */ \"./node_modules/d3-hierarchy/src/pack/siblings.js\");\n/* harmony import */ var _accessors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessors */ \"./node_modules/d3-hierarchy/src/accessors.js\");\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant */ \"./node_modules/d3-hierarchy/src/constant.js\");\n\n\n\n\nfunction defaultRadius(d) {\n  return Math.sqrt(d.value);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  var radius = null,\n      dx = 1,\n      dy = 1,\n      padding = _constant__WEBPACK_IMPORTED_MODULE_2__[\"constantZero\"];\n\n  function pack(root) {\n    root.x = dx / 2, root.y = dy / 2;\n    if (radius) {\n      root.eachBefore(radiusLeaf(radius))\n          .eachAfter(packChildren(padding, 0.5))\n          .eachBefore(translateChild(1));\n    } else {\n      root.eachBefore(radiusLeaf(defaultRadius))\n          .eachAfter(packChildren(_constant__WEBPACK_IMPORTED_MODULE_2__[\"constantZero\"], 1))\n          .eachAfter(packChildren(padding, root.r / Math.min(dx, dy)))\n          .eachBefore(translateChild(Math.min(dx, dy) / (2 * root.r)));\n    }\n    return root;\n  }\n\n  pack.radius = function(x) {\n    return arguments.length ? (radius = Object(_accessors__WEBPACK_IMPORTED_MODULE_1__[\"optional\"])(x), pack) : radius;\n  };\n\n  pack.size = function(x) {\n    return arguments.length ? (dx = +x[0], dy = +x[1], pack) : [dx, dy];\n  };\n\n  pack.padding = function(x) {\n    return arguments.length ? (padding = typeof x === \"function\" ? x : Object(_constant__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(+x), pack) : padding;\n  };\n\n  return pack;\n});\n\nfunction radiusLeaf(radius) {\n  return function(node) {\n    if (!node.children) {\n      node.r = Math.max(0, +radius(node) || 0);\n    }\n  };\n}\n\nfunction packChildren(padding, k) {\n  return function(node) {\n    if (children = node.children) {\n      var children,\n          i,\n          n = children.length,\n          r = padding(node) * k || 0,\n          e;\n\n      if (r) for (i = 0; i < n; ++i) children[i].r += r;\n      e = Object(_siblings__WEBPACK_IMPORTED_MODULE_0__[\"packEnclose\"])(children);\n      if (r) for (i = 0; i < n; ++i) children[i].r -= r;\n      node.r = e + r;\n    }\n  };\n}\n\nfunction translateChild(k) {\n  return function(node) {\n    var parent = node.parent;\n    node.r *= k;\n    if (parent) {\n      node.x = parent.x + k * node.x;\n      node.y = parent.y + k * node.y;\n    }\n  };\n}\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-hierarchy/src/pack/index.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/pack/siblings.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/pack/siblings.js ***!
  \********************************************************/
/*! exports provided: packEnclose, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"packEnclose\", function() { return packEnclose; });\n/* harmony import */ var _enclose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enclose */ \"./node_modules/d3-hierarchy/src/pack/enclose.js\");\n\n\nfunction place(b, a, c) {\n  var dx = b.x - a.x, x, a2,\n      dy = b.y - a.y, y, b2,\n      d2 = dx * dx + dy * dy;\n  if (d2) {\n    a2 = a.r + c.r, a2 *= a2;\n    b2 = b.r + c.r, b2 *= b2;\n    if (a2 > b2) {\n      x = (d2 + b2 - a2) / (2 * d2);\n      y = Math.sqrt(Math.max(0, b2 / d2 - x * x));\n      c.x = b.x - x * dx - y * dy;\n      c.y = b.y - x * dy + y * dx;\n    } else {\n      x = (d2 + a2 - b2) / (2 * d2);\n      y = Math.sqrt(Math.max(0, a2 / d2 - x * x));\n      c.x = a.x + x * dx - y * dy;\n      c.y = a.y + x * dy + y * dx;\n    }\n  } else {\n    c.x = a.x + c.r;\n    c.y = a.y;\n  }\n}\n\nfunction intersects(a, b) {\n  var dr = a.r + b.r - 1e-6, dx = b.x - a.x, dy = b.y - a.y;\n  return dr > 0 && dr * dr > dx * dx + dy * dy;\n}\n\nfunction score(node) {\n  var a = node._,\n      b = node.next._,\n      ab = a.r + b.r,\n      dx = (a.x * b.r + b.x * a.r) / ab,\n      dy = (a.y * b.r + b.y * a.r) / ab;\n  return dx * dx + dy * dy;\n}\n\nfunction Node(circle) {\n  this._ = circle;\n  this.next = null;\n  this.previous = null;\n}\n\nfunction packEnclose(circles) {\n  if (!(n = circles.length)) return 0;\n\n  var a, b, c, n, aa, ca, i, j, k, sj, sk;\n\n  // Place the first circle.\n  a = circles[0], a.x = 0, a.y = 0;\n  if (!(n > 1)) return a.r;\n\n  // Place the second circle.\n  b = circles[1], a.x = -b.r, b.x = a.r, b.y = 0;\n  if (!(n > 2)) return a.r + b.r;\n\n  // Place the third circle.\n  place(b, a, c = circles[2]);\n\n  // Initialize the front-chain using the first three circles a, b and c.\n  a = new Node(a), b = new Node(b), c = new Node(c);\n  a.next = c.previous = b;\n  b.next = a.previous = c;\n  c.next = b.previous = a;\n\n  // Attempt to place each remaining circle…\n  pack: for (i = 3; i < n; ++i) {\n    place(a._, b._, c = circles[i]), c = new Node(c);\n\n    // Find the closest intersecting circle on the front-chain, if any.\n    // “Closeness” is determined by linear distance along the front-chain.\n    // “Ahead” or “behind” is likewise determined by linear distance.\n    j = b.next, k = a.previous, sj = b._.r, sk = a._.r;\n    do {\n      if (sj <= sk) {\n        if (intersects(j._, c._)) {\n          b = j, a.next = b, b.previous = a, --i;\n          continue pack;\n        }\n        sj += j._.r, j = j.next;\n      } else {\n        if (intersects(k._, c._)) {\n          a = k, a.next = b, b.previous = a, --i;\n          continue pack;\n        }\n        sk += k._.r, k = k.previous;\n      }\n    } while (j !== k.next);\n\n    // Success! Insert the new circle c between a and b.\n    c.previous = a, c.next = b, a.next = b.previous = b = c;\n\n    // Compute the new closest circle pair to the centroid.\n    aa = score(a);\n    while ((c = c.next) !== b) {\n      if ((ca = score(c)) < aa) {\n        a = c, aa = ca;\n      }\n    }\n    b = a.next;\n  }\n\n  // Compute the enclosing circle of the front chain.\n  a = [b._], c = b; while ((c = c.next) !== b) a.push(c._); c = Object(_enclose__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(a);\n\n  // Translate the circles to put the enclosing circle around the origin.\n  for (i = 0; i < n; ++i) a = circles[i], a.x -= c.x, a.y -= c.y;\n\n  return c.r;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(circles) {\n  packEnclose(circles);\n  return circles;\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-hierarchy/src/pack/siblings.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/partition.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/partition.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _treemap_round__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./treemap/round */ \"./node_modules/d3-hierarchy/src/treemap/round.js\");\n/* harmony import */ var _treemap_dice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./treemap/dice */ \"./node_modules/d3-hierarchy/src/treemap/dice.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  var dx = 1,\n      dy = 1,\n      padding = 0,\n      round = false;\n\n  function partition(root) {\n    var n = root.height + 1;\n    root.x0 =\n    root.y0 = padding;\n    root.x1 = dx;\n    root.y1 = dy / n;\n    root.eachBefore(positionNode(dy, n));\n    if (round) root.eachBefore(_treemap_round__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    return root;\n  }\n\n  function positionNode(dy, n) {\n    return function(node) {\n      if (node.children) {\n        Object(_treemap_dice__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(node, node.x0, dy * (node.depth + 1) / n, node.x1, dy * (node.depth + 2) / n);\n      }\n      var x0 = node.x0,\n          y0 = node.y0,\n          x1 = node.x1 - padding,\n          y1 = node.y1 - padding;\n      if (x1 < x0) x0 = x1 = (x0 + x1) / 2;\n      if (y1 < y0) y0 = y1 = (y0 + y1) / 2;\n      node.x0 = x0;\n      node.y0 = y0;\n      node.x1 = x1;\n      node.y1 = y1;\n    };\n  }\n\n  partition.round = function(x) {\n    return arguments.length ? (round = !!x, partition) : round;\n  };\n\n  partition.size = function(x) {\n    return arguments.length ? (dx = +x[0], dy = +x[1], partition) : [dx, dy];\n  };\n\n  partition.padding = function(x) {\n    return arguments.length ? (padding = +x, partition) : padding;\n  };\n\n  return partition;\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-hierarchy/src/partition.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/stratify.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/stratify.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _accessors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accessors */ \"./node_modules/d3-hierarchy/src/accessors.js\");\n/* harmony import */ var _hierarchy_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hierarchy/index */ \"./node_modules/d3-hierarchy/src/hierarchy/index.js\");\n\n\n\nvar keyPrefix = \"$\", // Protect against keys like “__proto__”.\n    preroot = {depth: -1},\n    ambiguous = {};\n\nfunction defaultId(d) {\n  return d.id;\n}\n\nfunction defaultParentId(d) {\n  return d.parentId;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  var id = defaultId,\n      parentId = defaultParentId;\n\n  function stratify(data) {\n    var d,\n        i,\n        n = data.length,\n        root,\n        parent,\n        node,\n        nodes = new Array(n),\n        nodeId,\n        nodeKey,\n        nodeByKey = {};\n\n    for (i = 0; i < n; ++i) {\n      d = data[i], node = nodes[i] = new _hierarchy_index__WEBPACK_IMPORTED_MODULE_1__[\"Node\"](d);\n      if ((nodeId = id(d, i, data)) != null && (nodeId += \"\")) {\n        nodeKey = keyPrefix + (node.id = nodeId);\n        nodeByKey[nodeKey] = nodeKey in nodeByKey ? ambiguous : node;\n      }\n    }\n\n    for (i = 0; i < n; ++i) {\n      node = nodes[i], nodeId = parentId(data[i], i, data);\n      if (nodeId == null || !(nodeId += \"\")) {\n        if (root) throw new Error(\"multiple roots\");\n        root = node;\n      } else {\n        parent = nodeByKey[keyPrefix + nodeId];\n        if (!parent) throw new Error(\"missing: \" + nodeId);\n        if (parent === ambiguous) throw new Error(\"ambiguous: \" + nodeId);\n        if (parent.children) parent.children.push(node);\n        else parent.children = [node];\n        node.parent = parent;\n      }\n    }\n\n    if (!root) throw new Error(\"no root\");\n    root.parent = preroot;\n    root.eachBefore(function(node) { node.depth = node.parent.depth + 1; --n; }).eachBefore(_hierarchy_index__WEBPACK_IMPORTED_MODULE_1__[\"computeHeight\"]);\n    root.parent = null;\n    if (n > 0) throw new Error(\"cycle\");\n\n    return root;\n  }\n\n  stratify.id = function(x) {\n    return arguments.length ? (id = Object(_accessors__WEBPACK_IMPORTED_MODULE_0__[\"required\"])(x), stratify) : id;\n  };\n\n  stratify.parentId = function(x) {\n    return arguments.length ? (parentId = Object(_accessors__WEBPACK_IMPORTED_MODULE_0__[\"required\"])(x), stratify) : parentId;\n  };\n\n  return stratify;\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-hierarchy/src/stratify.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/tree.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-hierarchy/src/tree.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hierarchy_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hierarchy/index */ \"./node_modules/d3-hierarchy/src/hierarchy/index.js\");\n\n\nfunction defaultSeparation(a, b) {\n  return a.parent === b.parent ? 1 : 2;\n}\n\n// function radialSeparation(a, b) {\n//   return (a.parent === b.parent ? 1 : 2) / a.depth;\n// }\n\n// This function is used to traverse the left contour of a subtree (or\n// subforest). It returns the successor of v on this contour. This successor is\n// either given by the leftmost child of v or by the thread of v. The function\n// returns null if and only if v is on the highest level of its subtree.\nfunction nextLeft(v) {\n  var children = v.children;\n  return children ? children[0] : v.t;\n}\n\n// This function works analogously to nextLeft.\nfunction nextRight(v) {\n  var children = v.children;\n  return children ? children[children.length - 1] : v.t;\n}\n\n// Shifts the current subtree rooted at w+. This is done by increasing\n// prelim(w+) and mod(w+) by shift.\nfunction moveSubtree(wm, wp, shift) {\n  var change = shift / (wp.i - wm.i);\n  wp.c -= change;\n  wp.s += shift;\n  wm.c += change;\n  wp.z += shift;\n  wp.m += shift;\n}\n\n// All other shifts, applied to the smaller subtrees between w- and w+, are\n// performed by this function. To prepare the shifts, we have to adjust\n// change(w+), shift(w+), and change(w-).\nfunction executeShifts(v) {\n  var shift = 0,\n      change = 0,\n      children = v.children,\n      i = children.length,\n      w;\n  while (--i >= 0) {\n    w = children[i];\n    w.z += shift;\n    w.m += shift;\n    shift += w.s + (change += w.c);\n  }\n}\n\n// If vi-’s ancestor is a sibling of v, returns vi-’s ancestor. Otherwise,\n// returns the specified (default) ancestor.\nfunction nextAncestor(vim, v, ancestor) {\n  return vim.a.parent === v.parent ? vim.a : ancestor;\n}\n\nfunction TreeNode(node, i) {\n  this._ = node;\n  this.parent = null;\n  this.children = null;\n  this.A = null; // default ancestor\n  this.a = this; // ancestor\n  this.z = 0; // prelim\n  this.m = 0; // mod\n  this.c = 0; // change\n  this.s = 0; // shift\n  this.t = null; // thread\n  this.i = i; // number\n}\n\nTreeNode.prototype = Object.create(_hierarchy_index__WEBPACK_IMPORTED_MODULE_0__[\"Node\"].prototype);\n\nfunction treeRoot(root) {\n  var tree = new TreeNode(root, 0),\n      node,\n      nodes = [tree],\n      child,\n      children,\n      i,\n      n;\n\n  while (node = nodes.pop()) {\n    if (children = node._.children) {\n      node.children = new Array(n = children.length);\n      for (i = n - 1; i >= 0; --i) {\n        nodes.push(child = node.children[i] = new TreeNode(children[i], i));\n        child.parent = node;\n      }\n    }\n  }\n\n  (tree.parent = new TreeNode(null, 0)).children = [tree];\n  return tree;\n}\n\n// Node-link tree diagram using the Reingold-Tilford \"tidy\" algorithm\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  var separation = defaultSeparation,\n      dx = 1,\n      dy = 1,\n      nodeSize = null;\n\n  function tree(root) {\n    var t = treeRoot(root);\n\n    // Compute the layout using Buchheim et al.’s algorithm.\n    t.eachAfter(firstWalk), t.parent.m = -t.z;\n    t.eachBefore(secondWalk);\n\n    // If a fixed node size is specified, scale x and y.\n    if (nodeSize) root.eachBefore(sizeNode);\n\n    // If a fixed tree size is specified, scale x and y based on the extent.\n    // Compute the left-most, right-most, and depth-most nodes for extents.\n    else {\n      var left = root,\n          right = root,\n          bottom = root;\n      root.eachBefore(function(node) {\n        if (node.x < left.x) left = node;\n        if (node.x > right.x) right = node;\n        if (node.depth > bottom.depth) bottom = node;\n      });\n      var s = left === right ? 1 : separation(left, right) / 2,\n          tx = s - left.x,\n          kx = dx / (right.x + s + tx),\n          ky = dy / (bottom.depth || 1);\n      root.eachBefore(function(node) {\n        node.x = (node.x + tx) * kx;\n        node.y = node.depth * ky;\n      });\n    }\n\n    return root;\n  }\n\n  // Computes a preliminary x-coordinate for v. Before that, FIRST WALK is\n  // applied recursively to the children of v, as well as the function\n  // APPORTION. After spacing out the children by calling EXECUTE SHIFTS, the\n  // node v is placed to the midpoint of its outermost children.\n  function firstWalk(v) {\n    var children = v.children,\n        siblings = v.parent.children,\n        w = v.i ? siblings[v.i - 1] : null;\n    if (children) {\n      executeShifts(v);\n      var midpoint = (children[0].z + children[children.length - 1].z) / 2;\n      if (w) {\n        v.z = w.z + separation(v._, w._);\n        v.m = v.z - midpoint;\n      } else {\n        v.z = midpoint;\n      }\n    } else if (w) {\n      v.z = w.z + separation(v._, w._);\n    }\n    v.parent.A = apportion(v, w, v.parent.A || siblings[0]);\n  }\n\n  // Computes all real x-coordinates by summing up the modifiers recursively.\n  function secondWalk(v) {\n    v._.x = v.z + v.parent.m;\n    v.m += v.parent.m;\n  }\n\n  // The core of the algorithm. Here, a new subtree is combined with the\n  // previous subtrees. Threads are used to traverse the inside and outside\n  // contours of the left and right subtree up to the highest common level. The\n  // vertices used for the traversals are vi+, vi-, vo-, and vo+, where the\n  // superscript o means outside and i means inside, the subscript - means left\n  // subtree and + means right subtree. For summing up the modifiers along the\n  // contour, we use respective variables si+, si-, so-, and so+. Whenever two\n  // nodes of the inside contours conflict, we compute the left one of the\n  // greatest uncommon ancestors using the function ANCESTOR and call MOVE\n  // SUBTREE to shift the subtree and prepare the shifts of smaller subtrees.\n  // Finally, we add a new thread (if necessary).\n  function apportion(v, w, ancestor) {\n    if (w) {\n      var vip = v,\n          vop = v,\n          vim = w,\n          vom = vip.parent.children[0],\n          sip = vip.m,\n          sop = vop.m,\n          sim = vim.m,\n          som = vom.m,\n          shift;\n      while (vim = nextRight(vim), vip = nextLeft(vip), vim && vip) {\n        vom = nextLeft(vom);\n        vop = nextRight(vop);\n        vop.a = v;\n        shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);\n        if (shift > 0) {\n          moveSubtree(nextAncestor(vim, v, ancestor), v, shift);\n          sip += shift;\n          sop += shift;\n        }\n        sim += vim.m;\n        sip += vip.m;\n        som += vom.m;\n        sop += vop.m;\n      }\n      if (vim && !nextRight(vop)) {\n        vop.t = vim;\n        vop.m += sim - sop;\n      }\n      if (vip && !nextLeft(vom)) {\n        vom.t = vip;\n        vom.m += sip - som;\n        ancestor = v;\n      }\n    }\n    return ancestor;\n  }\n\n  function sizeNode(node) {\n    node.x *= dx;\n    node.y = node.depth * dy;\n  }\n\n  tree.separation = function(x) {\n    return arguments.length ? (separation = x, tree) : separation;\n  };\n\n  tree.size = function(x) {\n    return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], tree) : (nodeSize ? null : [dx, dy]);\n  };\n\n  tree.nodeSize = function(x) {\n    return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], tree) : (nodeSize ? [dx, dy] : null);\n  };\n\n  return tree;\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-hierarchy/src/tree.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/treemap/binary.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/binary.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(parent, x0, y0, x1, y1) {\n  var nodes = parent.children,\n      i, n = nodes.length,\n      sum, sums = new Array(n + 1);\n\n  for (sums[0] = sum = i = 0; i < n; ++i) {\n    sums[i + 1] = sum += nodes[i].value;\n  }\n\n  partition(0, n, parent.value, x0, y0, x1, y1);\n\n  function partition(i, j, value, x0, y0, x1, y1) {\n    if (i >= j - 1) {\n      var node = nodes[i];\n      node.x0 = x0, node.y0 = y0;\n      node.x1 = x1, node.y1 = y1;\n      return;\n    }\n\n    var valueOffset = sums[i],\n        valueTarget = (value / 2) + valueOffset,\n        k = i + 1,\n        hi = j - 1;\n\n    while (k < hi) {\n      var mid = k + hi >>> 1;\n      if (sums[mid] < valueTarget) k = mid + 1;\n      else hi = mid;\n    }\n\n    if ((valueTarget - sums[k - 1]) < (sums[k] - valueTarget) && i + 1 < k) --k;\n\n    var valueLeft = sums[k] - valueOffset,\n        valueRight = value - valueLeft;\n\n    if ((x1 - x0) > (y1 - y0)) {\n      var xk = (x0 * valueRight + x1 * valueLeft) / value;\n      partition(i, k, valueLeft, x0, y0, xk, y1);\n      partition(k, j, valueRight, xk, y0, x1, y1);\n    } else {\n      var yk = (y0 * valueRight + y1 * valueLeft) / value;\n      partition(i, k, valueLeft, x0, y0, x1, yk);\n      partition(k, j, valueRight, x0, yk, x1, y1);\n    }\n  }\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-hierarchy/src/treemap/binary.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/treemap/dice.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/dice.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(parent, x0, y0, x1, y1) {\n  var nodes = parent.children,\n      node,\n      i = -1,\n      n = nodes.length,\n      k = parent.value && (x1 - x0) / parent.value;\n\n  while (++i < n) {\n    node = nodes[i], node.y0 = y0, node.y1 = y1;\n    node.x0 = x0, node.x1 = x0 += node.value * k;\n  }\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-hierarchy/src/treemap/dice.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/treemap/index.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _round__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./round */ \"./node_modules/d3-hierarchy/src/treemap/round.js\");\n/* harmony import */ var _squarify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./squarify */ \"./node_modules/d3-hierarchy/src/treemap/squarify.js\");\n/* harmony import */ var _accessors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../accessors */ \"./node_modules/d3-hierarchy/src/accessors.js\");\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constant */ \"./node_modules/d3-hierarchy/src/constant.js\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  var tile = _squarify__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n      round = false,\n      dx = 1,\n      dy = 1,\n      paddingStack = [0],\n      paddingInner = _constant__WEBPACK_IMPORTED_MODULE_3__[\"constantZero\"],\n      paddingTop = _constant__WEBPACK_IMPORTED_MODULE_3__[\"constantZero\"],\n      paddingRight = _constant__WEBPACK_IMPORTED_MODULE_3__[\"constantZero\"],\n      paddingBottom = _constant__WEBPACK_IMPORTED_MODULE_3__[\"constantZero\"],\n      paddingLeft = _constant__WEBPACK_IMPORTED_MODULE_3__[\"constantZero\"];\n\n  function treemap(root) {\n    root.x0 =\n    root.y0 = 0;\n    root.x1 = dx;\n    root.y1 = dy;\n    root.eachBefore(positionNode);\n    paddingStack = [0];\n    if (round) root.eachBefore(_round__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    return root;\n  }\n\n  function positionNode(node) {\n    var p = paddingStack[node.depth],\n        x0 = node.x0 + p,\n        y0 = node.y0 + p,\n        x1 = node.x1 - p,\n        y1 = node.y1 - p;\n    if (x1 < x0) x0 = x1 = (x0 + x1) / 2;\n    if (y1 < y0) y0 = y1 = (y0 + y1) / 2;\n    node.x0 = x0;\n    node.y0 = y0;\n    node.x1 = x1;\n    node.y1 = y1;\n    if (node.children) {\n      p = paddingStack[node.depth + 1] = paddingInner(node) / 2;\n      x0 += paddingLeft(node) - p;\n      y0 += paddingTop(node) - p;\n      x1 -= paddingRight(node) - p;\n      y1 -= paddingBottom(node) - p;\n      if (x1 < x0) x0 = x1 = (x0 + x1) / 2;\n      if (y1 < y0) y0 = y1 = (y0 + y1) / 2;\n      tile(node, x0, y0, x1, y1);\n    }\n  }\n\n  treemap.round = function(x) {\n    return arguments.length ? (round = !!x, treemap) : round;\n  };\n\n  treemap.size = function(x) {\n    return arguments.length ? (dx = +x[0], dy = +x[1], treemap) : [dx, dy];\n  };\n\n  treemap.tile = function(x) {\n    return arguments.length ? (tile = Object(_accessors__WEBPACK_IMPORTED_MODULE_2__[\"required\"])(x), treemap) : tile;\n  };\n\n  treemap.padding = function(x) {\n    return arguments.length ? treemap.paddingInner(x).paddingOuter(x) : treemap.paddingInner();\n  };\n\n  treemap.paddingInner = function(x) {\n    return arguments.length ? (paddingInner = typeof x === \"function\" ? x : Object(_constant__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(+x), treemap) : paddingInner;\n  };\n\n  treemap.paddingOuter = function(x) {\n    return arguments.length ? treemap.paddingTop(x).paddingRight(x).paddingBottom(x).paddingLeft(x) : treemap.paddingTop();\n  };\n\n  treemap.paddingTop = function(x) {\n    return arguments.length ? (paddingTop = typeof x === \"function\" ? x : Object(_constant__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(+x), treemap) : paddingTop;\n  };\n\n  treemap.paddingRight = function(x) {\n    return arguments.length ? (paddingRight = typeof x === \"function\" ? x : Object(_constant__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(+x), treemap) : paddingRight;\n  };\n\n  treemap.paddingBottom = function(x) {\n    return arguments.length ? (paddingBottom = typeof x === \"function\" ? x : Object(_constant__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(+x), treemap) : paddingBottom;\n  };\n\n  treemap.paddingLeft = function(x) {\n    return arguments.length ? (paddingLeft = typeof x === \"function\" ? x : Object(_constant__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(+x), treemap) : paddingLeft;\n  };\n\n  return treemap;\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-hierarchy/src/treemap/index.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/treemap/resquarify.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/resquarify.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dice */ \"./node_modules/d3-hierarchy/src/treemap/dice.js\");\n/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slice */ \"./node_modules/d3-hierarchy/src/treemap/slice.js\");\n/* harmony import */ var _squarify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./squarify */ \"./node_modules/d3-hierarchy/src/treemap/squarify.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((function custom(ratio) {\n\n  function resquarify(parent, x0, y0, x1, y1) {\n    if ((rows = parent._squarify) && (rows.ratio === ratio)) {\n      var rows,\n          row,\n          nodes,\n          i,\n          j = -1,\n          n,\n          m = rows.length,\n          value = parent.value;\n\n      while (++j < m) {\n        row = rows[j], nodes = row.children;\n        for (i = row.value = 0, n = nodes.length; i < n; ++i) row.value += nodes[i].value;\n        if (row.dice) Object(_dice__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(row, x0, y0, x1, y0 += (y1 - y0) * row.value / value);\n        else Object(_slice__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(row, x0, y0, x0 += (x1 - x0) * row.value / value, y1);\n        value -= row.value;\n      }\n    } else {\n      parent._squarify = rows = Object(_squarify__WEBPACK_IMPORTED_MODULE_2__[\"squarifyRatio\"])(ratio, parent, x0, y0, x1, y1);\n      rows.ratio = ratio;\n    }\n  }\n\n  resquarify.ratio = function(x) {\n    return custom((x = +x) > 1 ? x : 1);\n  };\n\n  return resquarify;\n})(_squarify__WEBPACK_IMPORTED_MODULE_2__[\"phi\"]));\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-hierarchy/src/treemap/resquarify.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/treemap/round.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/round.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(node) {\n  node.x0 = Math.round(node.x0);\n  node.y0 = Math.round(node.y0);\n  node.x1 = Math.round(node.x1);\n  node.y1 = Math.round(node.y1);\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-hierarchy/src/treemap/round.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/treemap/slice.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/slice.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(parent, x0, y0, x1, y1) {\n  var nodes = parent.children,\n      node,\n      i = -1,\n      n = nodes.length,\n      k = parent.value && (y1 - y0) / parent.value;\n\n  while (++i < n) {\n    node = nodes[i], node.x0 = x0, node.x1 = x1;\n    node.y0 = y0, node.y1 = y0 += node.value * k;\n  }\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-hierarchy/src/treemap/slice.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/treemap/sliceDice.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/sliceDice.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dice */ \"./node_modules/d3-hierarchy/src/treemap/dice.js\");\n/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slice */ \"./node_modules/d3-hierarchy/src/treemap/slice.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(parent, x0, y0, x1, y1) {\n  (parent.depth & 1 ? _slice__WEBPACK_IMPORTED_MODULE_1__[\"default\"] : _dice__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(parent, x0, y0, x1, y1);\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-hierarchy/src/treemap/sliceDice.js?");

/***/ }),

/***/ "./node_modules/d3-hierarchy/src/treemap/squarify.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/squarify.js ***!
  \***********************************************************/
/*! exports provided: phi, squarifyRatio, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"phi\", function() { return phi; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"squarifyRatio\", function() { return squarifyRatio; });\n/* harmony import */ var _dice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dice */ \"./node_modules/d3-hierarchy/src/treemap/dice.js\");\n/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slice */ \"./node_modules/d3-hierarchy/src/treemap/slice.js\");\n\n\n\nvar phi = (1 + Math.sqrt(5)) / 2;\n\nfunction squarifyRatio(ratio, parent, x0, y0, x1, y1) {\n  var rows = [],\n      nodes = parent.children,\n      row,\n      nodeValue,\n      i0 = 0,\n      i1 = 0,\n      n = nodes.length,\n      dx, dy,\n      value = parent.value,\n      sumValue,\n      minValue,\n      maxValue,\n      newRatio,\n      minRatio,\n      alpha,\n      beta;\n\n  while (i0 < n) {\n    dx = x1 - x0, dy = y1 - y0;\n\n    // Find the next non-empty node.\n    do sumValue = nodes[i1++].value; while (!sumValue && i1 < n);\n    minValue = maxValue = sumValue;\n    alpha = Math.max(dy / dx, dx / dy) / (value * ratio);\n    beta = sumValue * sumValue * alpha;\n    minRatio = Math.max(maxValue / beta, beta / minValue);\n\n    // Keep adding nodes while the aspect ratio maintains or improves.\n    for (; i1 < n; ++i1) {\n      sumValue += nodeValue = nodes[i1].value;\n      if (nodeValue < minValue) minValue = nodeValue;\n      if (nodeValue > maxValue) maxValue = nodeValue;\n      beta = sumValue * sumValue * alpha;\n      newRatio = Math.max(maxValue / beta, beta / minValue);\n      if (newRatio > minRatio) { sumValue -= nodeValue; break; }\n      minRatio = newRatio;\n    }\n\n    // Position and record the row orientation.\n    rows.push(row = {value: sumValue, dice: dx < dy, children: nodes.slice(i0, i1)});\n    if (row.dice) Object(_dice__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(row, x0, y0, x1, value ? y0 += dy * sumValue / value : y1);\n    else Object(_slice__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(row, x0, y0, value ? x0 += dx * sumValue / value : x1, y1);\n    value -= sumValue, i0 = i1;\n  }\n\n  return rows;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((function custom(ratio) {\n\n  function squarify(parent, x0, y0, x1, y1) {\n    squarifyRatio(ratio, parent, x0, y0, x1, y1);\n  }\n\n  squarify.ratio = function(x) {\n    return custom((x = +x) > 1 ? x : 1);\n  };\n\n  return squarify;\n})(phi));\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-hierarchy/src/treemap/squarify.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/array.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/array.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value */ \"./node_modules/d3-interpolate/src/value.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(a, b) {\n  var nb = b ? b.length : 0,\n      na = a ? Math.min(nb, a.length) : 0,\n      x = new Array(na),\n      c = new Array(nb),\n      i;\n\n  for (i = 0; i < na; ++i) x[i] = Object(_value__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(a[i], b[i]);\n  for (; i < nb; ++i) c[i] = b[i];\n\n  return function(t) {\n    for (i = 0; i < na; ++i) c[i] = x[i](t);\n    return c;\n  };\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-interpolate/src/array.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/basis.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/basis.js ***!
  \**************************************************/
/*! exports provided: basis, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"basis\", function() { return basis; });\nfunction basis(t1, v0, v1, v2, v3) {\n  var t2 = t1 * t1, t3 = t2 * t1;\n  return ((1 - 3 * t1 + 3 * t2 - t3) * v0\n      + (4 - 6 * t2 + 3 * t3) * v1\n      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2\n      + t3 * v3) / 6;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(values) {\n  var n = values.length - 1;\n  return function(t) {\n    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),\n        v1 = values[i],\n        v2 = values[i + 1],\n        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,\n        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;\n    return basis((t - i / n) * n, v0, v1, v2, v3);\n  };\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-interpolate/src/basis.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/basisClosed.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-interpolate/src/basisClosed.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _basis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basis */ \"./node_modules/d3-interpolate/src/basis.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(values) {\n  var n = values.length;\n  return function(t) {\n    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),\n        v0 = values[(i + n - 1) % n],\n        v1 = values[i % n],\n        v2 = values[(i + 1) % n],\n        v3 = values[(i + 2) % n];\n    return Object(_basis__WEBPACK_IMPORTED_MODULE_0__[\"basis\"])((t - i / n) * n, v0, v1, v2, v3);\n  };\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-interpolate/src/basisClosed.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/color.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/color.js ***!
  \**************************************************/
/*! exports provided: hue, gamma, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hue\", function() { return hue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gamma\", function() { return gamma; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return nogamma; });\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ \"./node_modules/d3-interpolate/src/constant.js\");\n\n\nfunction linear(a, d) {\n  return function(t) {\n    return a + t * d;\n  };\n}\n\nfunction exponential(a, b, y) {\n  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {\n    return Math.pow(a + t * b, y);\n  };\n}\n\nfunction hue(a, b) {\n  var d = b - a;\n  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : Object(_constant__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(isNaN(a) ? b : a);\n}\n\nfunction gamma(y) {\n  return (y = +y) === 1 ? nogamma : function(a, b) {\n    return b - a ? exponential(a, b, y) : Object(_constant__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(isNaN(a) ? b : a);\n  };\n}\n\nfunction nogamma(a, b) {\n  var d = b - a;\n  return d ? linear(a, d) : Object(_constant__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(isNaN(a) ? b : a);\n}\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-interpolate/src/color.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/constant.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-interpolate/src/constant.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(x) {\n  return function() {\n    return x;\n  };\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-interpolate/src/constant.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/cubehelix.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-interpolate/src/cubehelix.js ***!
  \******************************************************/
/*! exports provided: default, cubehelixLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cubehelixLong\", function() { return cubehelixLong; });\n/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ \"./node_modules/d3-color/src/index.js\");\n/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ \"./node_modules/d3-interpolate/src/color.js\");\n\n\n\nfunction cubehelix(hue) {\n  return (function cubehelixGamma(y) {\n    y = +y;\n\n    function cubehelix(start, end) {\n      var h = hue((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__[\"cubehelix\"])(start)).h, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__[\"cubehelix\"])(end)).h),\n          s = Object(_color__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(start.s, end.s),\n          l = Object(_color__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(start.l, end.l),\n          opacity = Object(_color__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(start.opacity, end.opacity);\n      return function(t) {\n        start.h = h(t);\n        start.s = s(t);\n        start.l = l(Math.pow(t, y));\n        start.opacity = opacity(t);\n        return start + \"\";\n      };\n    }\n\n    cubehelix.gamma = cubehelixGamma;\n\n    return cubehelix;\n  })(1);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (cubehelix(_color__WEBPACK_IMPORTED_MODULE_1__[\"hue\"]));\nvar cubehelixLong = cubehelix(_color__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-interpolate/src/cubehelix.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/date.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-interpolate/src/date.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(a, b) {\n  var d = new Date;\n  return a = +a, b -= a, function(t) {\n    return d.setTime(a + b * t), d;\n  };\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-interpolate/src/date.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/discrete.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-interpolate/src/discrete.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(range) {\n  var n = range.length;\n  return function(t) {\n    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];\n  };\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-interpolate/src/discrete.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/hcl.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/hcl.js ***!
  \************************************************/
/*! exports provided: default, hclLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hclLong\", function() { return hclLong; });\n/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ \"./node_modules/d3-color/src/index.js\");\n/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ \"./node_modules/d3-interpolate/src/color.js\");\n\n\n\nfunction hcl(hue) {\n  return function(start, end) {\n    var h = hue((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__[\"hcl\"])(start)).h, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__[\"hcl\"])(end)).h),\n        c = Object(_color__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(start.c, end.c),\n        l = Object(_color__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(start.l, end.l),\n        opacity = Object(_color__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(start.opacity, end.opacity);\n    return function(t) {\n      start.h = h(t);\n      start.c = c(t);\n      start.l = l(t);\n      start.opacity = opacity(t);\n      return start + \"\";\n    };\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (hcl(_color__WEBPACK_IMPORTED_MODULE_1__[\"hue\"]));\nvar hclLong = hcl(_color__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-interpolate/src/hcl.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/hsl.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/hsl.js ***!
  \************************************************/
/*! exports provided: default, hslLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hslLong\", function() { return hslLong; });\n/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ \"./node_modules/d3-color/src/index.js\");\n/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ \"./node_modules/d3-interpolate/src/color.js\");\n\n\n\nfunction hsl(hue) {\n  return function(start, end) {\n    var h = hue((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__[\"hsl\"])(start)).h, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__[\"hsl\"])(end)).h),\n        s = Object(_color__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(start.s, end.s),\n        l = Object(_color__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(start.l, end.l),\n        opacity = Object(_color__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(start.opacity, end.opacity);\n    return function(t) {\n      start.h = h(t);\n      start.s = s(t);\n      start.l = l(t);\n      start.opacity = opacity(t);\n      return start + \"\";\n    };\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (hsl(_color__WEBPACK_IMPORTED_MODULE_1__[\"hue\"]));\nvar hslLong = hsl(_color__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-interpolate/src/hsl.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/hue.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/hue.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color */ \"./node_modules/d3-interpolate/src/color.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(a, b) {\n  var i = Object(_color__WEBPACK_IMPORTED_MODULE_0__[\"hue\"])(+a, +b);\n  return function(t) {\n    var x = i(t);\n    return x - 360 * Math.floor(x / 360);\n  };\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-interpolate/src/hue.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/index.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/index.js ***!
  \**************************************************/
/*! exports provided: interpolate, interpolateArray, interpolateBasis, interpolateBasisClosed, interpolateDate, interpolateDiscrete, interpolateHue, interpolateNumber, interpolateObject, interpolateRound, interpolateString, interpolateTransformCss, interpolateTransformSvg, interpolateZoom, interpolateRgb, interpolateRgbBasis, interpolateRgbBasisClosed, interpolateHsl, interpolateHslLong, interpolateLab, interpolateHcl, interpolateHclLong, interpolateCubehelix, interpolateCubehelixLong, piecewise, quantize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value */ \"./node_modules/d3-interpolate/src/value.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolate\", function() { return _value__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ \"./node_modules/d3-interpolate/src/array.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateArray\", function() { return _array__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _basis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basis */ \"./node_modules/d3-interpolate/src/basis.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateBasis\", function() { return _basis__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _basisClosed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basisClosed */ \"./node_modules/d3-interpolate/src/basisClosed.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateBasisClosed\", function() { return _basisClosed__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./date */ \"./node_modules/d3-interpolate/src/date.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateDate\", function() { return _date__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _discrete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./discrete */ \"./node_modules/d3-interpolate/src/discrete.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateDiscrete\", function() { return _discrete__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _hue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hue */ \"./node_modules/d3-interpolate/src/hue.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateHue\", function() { return _hue__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./number */ \"./node_modules/d3-interpolate/src/number.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateNumber\", function() { return _number__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./object */ \"./node_modules/d3-interpolate/src/object.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateObject\", function() { return _object__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; });\n\n/* harmony import */ var _round__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./round */ \"./node_modules/d3-interpolate/src/round.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateRound\", function() { return _round__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; });\n\n/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./string */ \"./node_modules/d3-interpolate/src/string.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateString\", function() { return _string__WEBPACK_IMPORTED_MODULE_10__[\"default\"]; });\n\n/* harmony import */ var _transform_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./transform/index */ \"./node_modules/d3-interpolate/src/transform/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateTransformCss\", function() { return _transform_index__WEBPACK_IMPORTED_MODULE_11__[\"interpolateTransformCss\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateTransformSvg\", function() { return _transform_index__WEBPACK_IMPORTED_MODULE_11__[\"interpolateTransformSvg\"]; });\n\n/* harmony import */ var _zoom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./zoom */ \"./node_modules/d3-interpolate/src/zoom.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateZoom\", function() { return _zoom__WEBPACK_IMPORTED_MODULE_12__[\"default\"]; });\n\n/* harmony import */ var _rgb__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./rgb */ \"./node_modules/d3-interpolate/src/rgb.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateRgb\", function() { return _rgb__WEBPACK_IMPORTED_MODULE_13__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateRgbBasis\", function() { return _rgb__WEBPACK_IMPORTED_MODULE_13__[\"rgbBasis\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateRgbBasisClosed\", function() { return _rgb__WEBPACK_IMPORTED_MODULE_13__[\"rgbBasisClosed\"]; });\n\n/* harmony import */ var _hsl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./hsl */ \"./node_modules/d3-interpolate/src/hsl.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateHsl\", function() { return _hsl__WEBPACK_IMPORTED_MODULE_14__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateHslLong\", function() { return _hsl__WEBPACK_IMPORTED_MODULE_14__[\"hslLong\"]; });\n\n/* harmony import */ var _lab__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lab */ \"./node_modules/d3-interpolate/src/lab.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateLab\", function() { return _lab__WEBPACK_IMPORTED_MODULE_15__[\"default\"]; });\n\n/* harmony import */ var _hcl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./hcl */ \"./node_modules/d3-interpolate/src/hcl.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateHcl\", function() { return _hcl__WEBPACK_IMPORTED_MODULE_16__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateHclLong\", function() { return _hcl__WEBPACK_IMPORTED_MODULE_16__[\"hclLong\"]; });\n\n/* harmony import */ var _cubehelix__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cubehelix */ \"./node_modules/d3-interpolate/src/cubehelix.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateCubehelix\", function() { return _cubehelix__WEBPACK_IMPORTED_MODULE_17__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateCubehelixLong\", function() { return _cubehelix__WEBPACK_IMPORTED_MODULE_17__[\"cubehelixLong\"]; });\n\n/* harmony import */ var _piecewise__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./piecewise */ \"./node_modules/d3-interpolate/src/piecewise.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"piecewise\", function() { return _piecewise__WEBPACK_IMPORTED_MODULE_18__[\"default\"]; });\n\n/* harmony import */ var _quantize__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./quantize */ \"./node_modules/d3-interpolate/src/quantize.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"quantize\", function() { return _quantize__WEBPACK_IMPORTED_MODULE_19__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-interpolate/src/index.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/lab.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/lab.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return lab; });\n/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ \"./node_modules/d3-color/src/index.js\");\n/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ \"./node_modules/d3-interpolate/src/color.js\");\n\n\n\nfunction lab(start, end) {\n  var l = Object(_color__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__[\"lab\"])(start)).l, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__[\"lab\"])(end)).l),\n      a = Object(_color__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(start.a, end.a),\n      b = Object(_color__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(start.b, end.b),\n      opacity = Object(_color__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(start.opacity, end.opacity);\n  return function(t) {\n    start.l = l(t);\n    start.a = a(t);\n    start.b = b(t);\n    start.opacity = opacity(t);\n    return start + \"\";\n  };\n}\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-interpolate/src/lab.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/number.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/number.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(a, b) {\n  return a = +a, b -= a, function(t) {\n    return a + b * t;\n  };\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-interpolate/src/number.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/object.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/object.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value */ \"./node_modules/d3-interpolate/src/value.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(a, b) {\n  var i = {},\n      c = {},\n      k;\n\n  if (a === null || typeof a !== \"object\") a = {};\n  if (b === null || typeof b !== \"object\") b = {};\n\n  for (k in b) {\n    if (k in a) {\n      i[k] = Object(_value__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(a[k], b[k]);\n    } else {\n      c[k] = b[k];\n    }\n  }\n\n  return function(t) {\n    for (k in i) c[k] = i[k](t);\n    return c;\n  };\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-interpolate/src/object.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/piecewise.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-interpolate/src/piecewise.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return piecewise; });\nfunction piecewise(interpolate, values) {\n  var i = 0, n = values.length - 1, v = values[0], I = new Array(n < 0 ? 0 : n);\n  while (i < n) I[i] = interpolate(v, v = values[++i]);\n  return function(t) {\n    var i = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));\n    return I[i](t - i);\n  };\n}\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-interpolate/src/piecewise.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/quantize.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-interpolate/src/quantize.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(interpolator, n) {\n  var samples = new Array(n);\n  for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));\n  return samples;\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-interpolate/src/quantize.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/rgb.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/rgb.js ***!
  \************************************************/
/*! exports provided: default, rgbBasis, rgbBasisClosed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rgbBasis\", function() { return rgbBasis; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rgbBasisClosed\", function() { return rgbBasisClosed; });\n/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ \"./node_modules/d3-color/src/index.js\");\n/* harmony import */ var _basis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basis */ \"./node_modules/d3-interpolate/src/basis.js\");\n/* harmony import */ var _basisClosed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basisClosed */ \"./node_modules/d3-interpolate/src/basisClosed.js\");\n/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color */ \"./node_modules/d3-interpolate/src/color.js\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((function rgbGamma(y) {\n  var color = Object(_color__WEBPACK_IMPORTED_MODULE_3__[\"gamma\"])(y);\n\n  function rgb(start, end) {\n    var r = color((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__[\"rgb\"])(start)).r, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__[\"rgb\"])(end)).r),\n        g = color(start.g, end.g),\n        b = color(start.b, end.b),\n        opacity = Object(_color__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(start.opacity, end.opacity);\n    return function(t) {\n      start.r = r(t);\n      start.g = g(t);\n      start.b = b(t);\n      start.opacity = opacity(t);\n      return start + \"\";\n    };\n  }\n\n  rgb.gamma = rgbGamma;\n\n  return rgb;\n})(1));\n\nfunction rgbSpline(spline) {\n  return function(colors) {\n    var n = colors.length,\n        r = new Array(n),\n        g = new Array(n),\n        b = new Array(n),\n        i, color;\n    for (i = 0; i < n; ++i) {\n      color = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__[\"rgb\"])(colors[i]);\n      r[i] = color.r || 0;\n      g[i] = color.g || 0;\n      b[i] = color.b || 0;\n    }\n    r = spline(r);\n    g = spline(g);\n    b = spline(b);\n    color.opacity = 1;\n    return function(t) {\n      color.r = r(t);\n      color.g = g(t);\n      color.b = b(t);\n      return color + \"\";\n    };\n  };\n}\n\nvar rgbBasis = rgbSpline(_basis__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar rgbBasisClosed = rgbSpline(_basisClosed__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-interpolate/src/rgb.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/round.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/round.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(a, b) {\n  return a = +a, b -= a, function(t) {\n    return Math.round(a + b * t);\n  };\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-interpolate/src/round.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/string.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/string.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number */ \"./node_modules/d3-interpolate/src/number.js\");\n\n\nvar reA = /[-+]?(?:\\d+\\.?\\d*|\\.?\\d+)(?:[eE][-+]?\\d+)?/g,\n    reB = new RegExp(reA.source, \"g\");\n\nfunction zero(b) {\n  return function() {\n    return b;\n  };\n}\n\nfunction one(b) {\n  return function(t) {\n    return b(t) + \"\";\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(a, b) {\n  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b\n      am, // current match in a\n      bm, // current match in b\n      bs, // string preceding current number in b, if any\n      i = -1, // index in s\n      s = [], // string constants and placeholders\n      q = []; // number interpolators\n\n  // Coerce inputs to strings.\n  a = a + \"\", b = b + \"\";\n\n  // Interpolate pairs of numbers in a & b.\n  while ((am = reA.exec(a))\n      && (bm = reB.exec(b))) {\n    if ((bs = bm.index) > bi) { // a string precedes the next number in b\n      bs = b.slice(bi, bs);\n      if (s[i]) s[i] += bs; // coalesce with previous string\n      else s[++i] = bs;\n    }\n    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match\n      if (s[i]) s[i] += bm; // coalesce with previous string\n      else s[++i] = bm;\n    } else { // interpolate non-matching numbers\n      s[++i] = null;\n      q.push({i: i, x: Object(_number__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(am, bm)});\n    }\n    bi = reB.lastIndex;\n  }\n\n  // Add remains of b.\n  if (bi < b.length) {\n    bs = b.slice(bi);\n    if (s[i]) s[i] += bs; // coalesce with previous string\n    else s[++i] = bs;\n  }\n\n  // Special optimization for only a single match.\n  // Otherwise, interpolate each of the numbers and rejoin the string.\n  return s.length < 2 ? (q[0]\n      ? one(q[0].x)\n      : zero(b))\n      : (b = q.length, function(t) {\n          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);\n          return s.join(\"\");\n        });\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-interpolate/src/string.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/decompose.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/decompose.js ***!
  \****************************************************************/
/*! exports provided: identity, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"identity\", function() { return identity; });\nvar degrees = 180 / Math.PI;\n\nvar identity = {\n  translateX: 0,\n  translateY: 0,\n  rotate: 0,\n  skewX: 0,\n  scaleX: 1,\n  scaleY: 1\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(a, b, c, d, e, f) {\n  var scaleX, scaleY, skewX;\n  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;\n  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;\n  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;\n  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;\n  return {\n    translateX: e,\n    translateY: f,\n    rotate: Math.atan2(b, a) * degrees,\n    skewX: Math.atan(skewX) * degrees,\n    scaleX: scaleX,\n    scaleY: scaleY\n  };\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-interpolate/src/transform/decompose.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/index.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/index.js ***!
  \************************************************************/
/*! exports provided: interpolateTransformCss, interpolateTransformSvg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"interpolateTransformCss\", function() { return interpolateTransformCss; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"interpolateTransformSvg\", function() { return interpolateTransformSvg; });\n/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../number */ \"./node_modules/d3-interpolate/src/number.js\");\n/* harmony import */ var _parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse */ \"./node_modules/d3-interpolate/src/transform/parse.js\");\n\n\n\nfunction interpolateTransform(parse, pxComma, pxParen, degParen) {\n\n  function pop(s) {\n    return s.length ? s.pop() + \" \" : \"\";\n  }\n\n  function translate(xa, ya, xb, yb, s, q) {\n    if (xa !== xb || ya !== yb) {\n      var i = s.push(\"translate(\", null, pxComma, null, pxParen);\n      q.push({i: i - 4, x: Object(_number__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(xa, xb)}, {i: i - 2, x: Object(_number__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(ya, yb)});\n    } else if (xb || yb) {\n      s.push(\"translate(\" + xb + pxComma + yb + pxParen);\n    }\n  }\n\n  function rotate(a, b, s, q) {\n    if (a !== b) {\n      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path\n      q.push({i: s.push(pop(s) + \"rotate(\", null, degParen) - 2, x: Object(_number__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(a, b)});\n    } else if (b) {\n      s.push(pop(s) + \"rotate(\" + b + degParen);\n    }\n  }\n\n  function skewX(a, b, s, q) {\n    if (a !== b) {\n      q.push({i: s.push(pop(s) + \"skewX(\", null, degParen) - 2, x: Object(_number__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(a, b)});\n    } else if (b) {\n      s.push(pop(s) + \"skewX(\" + b + degParen);\n    }\n  }\n\n  function scale(xa, ya, xb, yb, s, q) {\n    if (xa !== xb || ya !== yb) {\n      var i = s.push(pop(s) + \"scale(\", null, \",\", null, \")\");\n      q.push({i: i - 4, x: Object(_number__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(xa, xb)}, {i: i - 2, x: Object(_number__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(ya, yb)});\n    } else if (xb !== 1 || yb !== 1) {\n      s.push(pop(s) + \"scale(\" + xb + \",\" + yb + \")\");\n    }\n  }\n\n  return function(a, b) {\n    var s = [], // string constants and placeholders\n        q = []; // number interpolators\n    a = parse(a), b = parse(b);\n    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);\n    rotate(a.rotate, b.rotate, s, q);\n    skewX(a.skewX, b.skewX, s, q);\n    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);\n    a = b = null; // gc\n    return function(t) {\n      var i = -1, n = q.length, o;\n      while (++i < n) s[(o = q[i]).i] = o.x(t);\n      return s.join(\"\");\n    };\n  };\n}\n\nvar interpolateTransformCss = interpolateTransform(_parse__WEBPACK_IMPORTED_MODULE_1__[\"parseCss\"], \"px, \", \"px)\", \"deg)\");\nvar interpolateTransformSvg = interpolateTransform(_parse__WEBPACK_IMPORTED_MODULE_1__[\"parseSvg\"], \", \", \")\", \")\");\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-interpolate/src/transform/index.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/parse.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/parse.js ***!
  \************************************************************/
/*! exports provided: parseCss, parseSvg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseCss\", function() { return parseCss; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseSvg\", function() { return parseSvg; });\n/* harmony import */ var _decompose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decompose */ \"./node_modules/d3-interpolate/src/transform/decompose.js\");\n\n\nvar cssNode,\n    cssRoot,\n    cssView,\n    svgNode;\n\nfunction parseCss(value) {\n  if (value === \"none\") return _decompose__WEBPACK_IMPORTED_MODULE_0__[\"identity\"];\n  if (!cssNode) cssNode = document.createElement(\"DIV\"), cssRoot = document.documentElement, cssView = document.defaultView;\n  cssNode.style.transform = value;\n  value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue(\"transform\");\n  cssRoot.removeChild(cssNode);\n  value = value.slice(7, -1).split(\",\");\n  return Object(_decompose__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);\n}\n\nfunction parseSvg(value) {\n  if (value == null) return _decompose__WEBPACK_IMPORTED_MODULE_0__[\"identity\"];\n  if (!svgNode) svgNode = document.createElementNS(\"http://www.w3.org/2000/svg\", \"g\");\n  svgNode.setAttribute(\"transform\", value);\n  if (!(value = svgNode.transform.baseVal.consolidate())) return _decompose__WEBPACK_IMPORTED_MODULE_0__[\"identity\"];\n  value = value.matrix;\n  return Object(_decompose__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value.a, value.b, value.c, value.d, value.e, value.f);\n}\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-interpolate/src/transform/parse.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/value.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/value.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ \"./node_modules/d3-color/src/index.js\");\n/* harmony import */ var _rgb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rgb */ \"./node_modules/d3-interpolate/src/rgb.js\");\n/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array */ \"./node_modules/d3-interpolate/src/array.js\");\n/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date */ \"./node_modules/d3-interpolate/src/date.js\");\n/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number */ \"./node_modules/d3-interpolate/src/number.js\");\n/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./object */ \"./node_modules/d3-interpolate/src/object.js\");\n/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./string */ \"./node_modules/d3-interpolate/src/string.js\");\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constant */ \"./node_modules/d3-interpolate/src/constant.js\");\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(a, b) {\n  var t = typeof b, c;\n  return b == null || t === \"boolean\" ? Object(_constant__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(b)\n      : (t === \"number\" ? _number__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n      : t === \"string\" ? ((c = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__[\"color\"])(b)) ? (b = c, _rgb__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) : _string__WEBPACK_IMPORTED_MODULE_6__[\"default\"])\n      : b instanceof d3_color__WEBPACK_IMPORTED_MODULE_0__[\"color\"] ? _rgb__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n      : b instanceof Date ? _date__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n      : Array.isArray(b) ? _array__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n      : typeof b.valueOf !== \"function\" && typeof b.toString !== \"function\" || isNaN(b) ? _object__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n      : _number__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(a, b);\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-interpolate/src/value.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/zoom.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-interpolate/src/zoom.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar rho = Math.SQRT2,\n    rho2 = 2,\n    rho4 = 4,\n    epsilon2 = 1e-12;\n\nfunction cosh(x) {\n  return ((x = Math.exp(x)) + 1 / x) / 2;\n}\n\nfunction sinh(x) {\n  return ((x = Math.exp(x)) - 1 / x) / 2;\n}\n\nfunction tanh(x) {\n  return ((x = Math.exp(2 * x)) - 1) / (x + 1);\n}\n\n// p0 = [ux0, uy0, w0]\n// p1 = [ux1, uy1, w1]\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(p0, p1) {\n  var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],\n      ux1 = p1[0], uy1 = p1[1], w1 = p1[2],\n      dx = ux1 - ux0,\n      dy = uy1 - uy0,\n      d2 = dx * dx + dy * dy,\n      i,\n      S;\n\n  // Special case for u0 ≅ u1.\n  if (d2 < epsilon2) {\n    S = Math.log(w1 / w0) / rho;\n    i = function(t) {\n      return [\n        ux0 + t * dx,\n        uy0 + t * dy,\n        w0 * Math.exp(rho * t * S)\n      ];\n    }\n  }\n\n  // General case.\n  else {\n    var d1 = Math.sqrt(d2),\n        b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),\n        b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),\n        r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),\n        r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);\n    S = (r1 - r0) / rho;\n    i = function(t) {\n      var s = t * S,\n          coshr0 = cosh(r0),\n          u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));\n      return [\n        ux0 + u * dx,\n        uy0 + u * dy,\n        w0 * coshr0 / cosh(rho * s + r0)\n      ];\n    }\n  }\n\n  i.duration = S * 1000;\n\n  return i;\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-interpolate/src/zoom.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/constant.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-selection/src/constant.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(x) {\n  return function() {\n    return x;\n  };\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/constant.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/create.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-selection/src/create.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creator */ \"./node_modules/d3-selection/src/creator.js\");\n/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select */ \"./node_modules/d3-selection/src/select.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(name) {\n  return Object(_select__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_creator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(name).call(document.documentElement));\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/create.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/creator.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/creator.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _namespace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./namespace */ \"./node_modules/d3-selection/src/namespace.js\");\n/* harmony import */ var _namespaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./namespaces */ \"./node_modules/d3-selection/src/namespaces.js\");\n\n\n\nfunction creatorInherit(name) {\n  return function() {\n    var document = this.ownerDocument,\n        uri = this.namespaceURI;\n    return uri === _namespaces__WEBPACK_IMPORTED_MODULE_1__[\"xhtml\"] && document.documentElement.namespaceURI === _namespaces__WEBPACK_IMPORTED_MODULE_1__[\"xhtml\"]\n        ? document.createElement(name)\n        : document.createElementNS(uri, name);\n  };\n}\n\nfunction creatorFixed(fullname) {\n  return function() {\n    return this.ownerDocument.createElementNS(fullname.space, fullname.local);\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(name) {\n  var fullname = Object(_namespace__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(name);\n  return (fullname.local\n      ? creatorFixed\n      : creatorInherit)(fullname);\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/creator.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/index.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/index.js ***!
  \************************************************/
/*! exports provided: create, creator, local, matcher, mouse, namespace, namespaces, clientPoint, select, selectAll, selection, selector, selectorAll, style, touch, touches, window, event, customEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./node_modules/d3-selection/src/create.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"create\", function() { return _create__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creator */ \"./node_modules/d3-selection/src/creator.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"creator\", function() { return _creator__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local */ \"./node_modules/d3-selection/src/local.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"local\", function() { return _local__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _matcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./matcher */ \"./node_modules/d3-selection/src/matcher.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"matcher\", function() { return _matcher__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _mouse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mouse */ \"./node_modules/d3-selection/src/mouse.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mouse\", function() { return _mouse__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _namespace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./namespace */ \"./node_modules/d3-selection/src/namespace.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"namespace\", function() { return _namespace__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _namespaces__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./namespaces */ \"./node_modules/d3-selection/src/namespaces.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"namespaces\", function() { return _namespaces__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./point */ \"./node_modules/d3-selection/src/point.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"clientPoint\", function() { return _point__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./select */ \"./node_modules/d3-selection/src/select.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"select\", function() { return _select__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; });\n\n/* harmony import */ var _selectAll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./selectAll */ \"./node_modules/d3-selection/src/selectAll.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"selectAll\", function() { return _selectAll__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; });\n\n/* harmony import */ var _selection_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./selection/index */ \"./node_modules/d3-selection/src/selection/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"selection\", function() { return _selection_index__WEBPACK_IMPORTED_MODULE_10__[\"default\"]; });\n\n/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./selector */ \"./node_modules/d3-selection/src/selector.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"selector\", function() { return _selector__WEBPACK_IMPORTED_MODULE_11__[\"default\"]; });\n\n/* harmony import */ var _selectorAll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./selectorAll */ \"./node_modules/d3-selection/src/selectorAll.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"selectorAll\", function() { return _selectorAll__WEBPACK_IMPORTED_MODULE_12__[\"default\"]; });\n\n/* harmony import */ var _selection_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./selection/style */ \"./node_modules/d3-selection/src/selection/style.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"style\", function() { return _selection_style__WEBPACK_IMPORTED_MODULE_13__[\"styleValue\"]; });\n\n/* harmony import */ var _touch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./touch */ \"./node_modules/d3-selection/src/touch.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"touch\", function() { return _touch__WEBPACK_IMPORTED_MODULE_14__[\"default\"]; });\n\n/* harmony import */ var _touches__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./touches */ \"./node_modules/d3-selection/src/touches.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"touches\", function() { return _touches__WEBPACK_IMPORTED_MODULE_15__[\"default\"]; });\n\n/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./window */ \"./node_modules/d3-selection/src/window.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"window\", function() { return _window__WEBPACK_IMPORTED_MODULE_16__[\"default\"]; });\n\n/* harmony import */ var _selection_on__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./selection/on */ \"./node_modules/d3-selection/src/selection/on.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"event\", function() { return _selection_on__WEBPACK_IMPORTED_MODULE_17__[\"event\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"customEvent\", function() { return _selection_on__WEBPACK_IMPORTED_MODULE_17__[\"customEvent\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/index.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/local.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/local.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return local; });\nvar nextId = 0;\n\nfunction local() {\n  return new Local;\n}\n\nfunction Local() {\n  this._ = \"@\" + (++nextId).toString(36);\n}\n\nLocal.prototype = local.prototype = {\n  constructor: Local,\n  get: function(node) {\n    var id = this._;\n    while (!(id in node)) if (!(node = node.parentNode)) return;\n    return node[id];\n  },\n  set: function(node, value) {\n    return node[this._] = value;\n  },\n  remove: function(node) {\n    return this._ in node && delete node[this._];\n  },\n  toString: function() {\n    return this._;\n  }\n};\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/local.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/matcher.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/matcher.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(selector) {\n  return function() {\n    return this.matches(selector);\n  };\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/matcher.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/mouse.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/mouse.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sourceEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sourceEvent */ \"./node_modules/d3-selection/src/sourceEvent.js\");\n/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point */ \"./node_modules/d3-selection/src/point.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(node) {\n  var event = Object(_sourceEvent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  if (event.changedTouches) event = event.changedTouches[0];\n  return Object(_point__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(node, event);\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/mouse.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/namespace.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-selection/src/namespace.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _namespaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./namespaces */ \"./node_modules/d3-selection/src/namespaces.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(name) {\n  var prefix = name += \"\", i = prefix.indexOf(\":\");\n  if (i >= 0 && (prefix = name.slice(0, i)) !== \"xmlns\") name = name.slice(i + 1);\n  return _namespaces__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hasOwnProperty(prefix) ? {space: _namespaces__WEBPACK_IMPORTED_MODULE_0__[\"default\"][prefix], local: name} : name;\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/namespace.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/namespaces.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-selection/src/namespaces.js ***!
  \*****************************************************/
/*! exports provided: xhtml, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"xhtml\", function() { return xhtml; });\nvar xhtml = \"http://www.w3.org/1999/xhtml\";\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  svg: \"http://www.w3.org/2000/svg\",\n  xhtml: xhtml,\n  xlink: \"http://www.w3.org/1999/xlink\",\n  xml: \"http://www.w3.org/XML/1998/namespace\",\n  xmlns: \"http://www.w3.org/2000/xmlns/\"\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/namespaces.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/point.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/point.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(node, event) {\n  var svg = node.ownerSVGElement || node;\n\n  if (svg.createSVGPoint) {\n    var point = svg.createSVGPoint();\n    point.x = event.clientX, point.y = event.clientY;\n    point = point.matrixTransform(node.getScreenCTM().inverse());\n    return [point.x, point.y];\n  }\n\n  var rect = node.getBoundingClientRect();\n  return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/point.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/select.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-selection/src/select.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _selection_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection/index */ \"./node_modules/d3-selection/src/selection/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(selector) {\n  return typeof selector === \"string\"\n      ? new _selection_index__WEBPACK_IMPORTED_MODULE_0__[\"Selection\"]([[document.querySelector(selector)]], [document.documentElement])\n      : new _selection_index__WEBPACK_IMPORTED_MODULE_0__[\"Selection\"]([[selector]], _selection_index__WEBPACK_IMPORTED_MODULE_0__[\"root\"]);\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/select.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selectAll.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-selection/src/selectAll.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _selection_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection/index */ \"./node_modules/d3-selection/src/selection/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(selector) {\n  return typeof selector === \"string\"\n      ? new _selection_index__WEBPACK_IMPORTED_MODULE_0__[\"Selection\"]([document.querySelectorAll(selector)], [document.documentElement])\n      : new _selection_index__WEBPACK_IMPORTED_MODULE_0__[\"Selection\"]([selector == null ? [] : selector], _selection_index__WEBPACK_IMPORTED_MODULE_0__[\"root\"]);\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/selectAll.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/append.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/append.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../creator */ \"./node_modules/d3-selection/src/creator.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(name) {\n  var create = typeof name === \"function\" ? name : Object(_creator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(name);\n  return this.select(function() {\n    return this.appendChild(create.apply(this, arguments));\n  });\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/selection/append.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/attr.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/attr.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _namespace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../namespace */ \"./node_modules/d3-selection/src/namespace.js\");\n\n\nfunction attrRemove(name) {\n  return function() {\n    this.removeAttribute(name);\n  };\n}\n\nfunction attrRemoveNS(fullname) {\n  return function() {\n    this.removeAttributeNS(fullname.space, fullname.local);\n  };\n}\n\nfunction attrConstant(name, value) {\n  return function() {\n    this.setAttribute(name, value);\n  };\n}\n\nfunction attrConstantNS(fullname, value) {\n  return function() {\n    this.setAttributeNS(fullname.space, fullname.local, value);\n  };\n}\n\nfunction attrFunction(name, value) {\n  return function() {\n    var v = value.apply(this, arguments);\n    if (v == null) this.removeAttribute(name);\n    else this.setAttribute(name, v);\n  };\n}\n\nfunction attrFunctionNS(fullname, value) {\n  return function() {\n    var v = value.apply(this, arguments);\n    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);\n    else this.setAttributeNS(fullname.space, fullname.local, v);\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(name, value) {\n  var fullname = Object(_namespace__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(name);\n\n  if (arguments.length < 2) {\n    var node = this.node();\n    return fullname.local\n        ? node.getAttributeNS(fullname.space, fullname.local)\n        : node.getAttribute(fullname);\n  }\n\n  return this.each((value == null\n      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === \"function\"\n      ? (fullname.local ? attrFunctionNS : attrFunction)\n      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/selection/attr.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/call.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/call.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  var callback = arguments[0];\n  arguments[0] = this;\n  callback.apply(null, arguments);\n  return this;\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/selection/call.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/classed.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/classed.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction classArray(string) {\n  return string.trim().split(/^|\\s+/);\n}\n\nfunction classList(node) {\n  return node.classList || new ClassList(node);\n}\n\nfunction ClassList(node) {\n  this._node = node;\n  this._names = classArray(node.getAttribute(\"class\") || \"\");\n}\n\nClassList.prototype = {\n  add: function(name) {\n    var i = this._names.indexOf(name);\n    if (i < 0) {\n      this._names.push(name);\n      this._node.setAttribute(\"class\", this._names.join(\" \"));\n    }\n  },\n  remove: function(name) {\n    var i = this._names.indexOf(name);\n    if (i >= 0) {\n      this._names.splice(i, 1);\n      this._node.setAttribute(\"class\", this._names.join(\" \"));\n    }\n  },\n  contains: function(name) {\n    return this._names.indexOf(name) >= 0;\n  }\n};\n\nfunction classedAdd(node, names) {\n  var list = classList(node), i = -1, n = names.length;\n  while (++i < n) list.add(names[i]);\n}\n\nfunction classedRemove(node, names) {\n  var list = classList(node), i = -1, n = names.length;\n  while (++i < n) list.remove(names[i]);\n}\n\nfunction classedTrue(names) {\n  return function() {\n    classedAdd(this, names);\n  };\n}\n\nfunction classedFalse(names) {\n  return function() {\n    classedRemove(this, names);\n  };\n}\n\nfunction classedFunction(names, value) {\n  return function() {\n    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(name, value) {\n  var names = classArray(name + \"\");\n\n  if (arguments.length < 2) {\n    var list = classList(this.node()), i = -1, n = names.length;\n    while (++i < n) if (!list.contains(names[i])) return false;\n    return true;\n  }\n\n  return this.each((typeof value === \"function\"\n      ? classedFunction : value\n      ? classedTrue\n      : classedFalse)(names, value));\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/selection/classed.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/clone.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/clone.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction selection_cloneShallow() {\n  return this.parentNode.insertBefore(this.cloneNode(false), this.nextSibling);\n}\n\nfunction selection_cloneDeep() {\n  return this.parentNode.insertBefore(this.cloneNode(true), this.nextSibling);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(deep) {\n  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/selection/clone.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/data.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/data.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./node_modules/d3-selection/src/selection/index.js\");\n/* harmony import */ var _enter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enter */ \"./node_modules/d3-selection/src/selection/enter.js\");\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant */ \"./node_modules/d3-selection/src/constant.js\");\n\n\n\n\nvar keyPrefix = \"$\"; // Protect against keys like “__proto__”.\n\nfunction bindIndex(parent, group, enter, update, exit, data) {\n  var i = 0,\n      node,\n      groupLength = group.length,\n      dataLength = data.length;\n\n  // Put any non-null nodes that fit into update.\n  // Put any null nodes into enter.\n  // Put any remaining data into enter.\n  for (; i < dataLength; ++i) {\n    if (node = group[i]) {\n      node.__data__ = data[i];\n      update[i] = node;\n    } else {\n      enter[i] = new _enter__WEBPACK_IMPORTED_MODULE_1__[\"EnterNode\"](parent, data[i]);\n    }\n  }\n\n  // Put any non-null nodes that don’t fit into exit.\n  for (; i < groupLength; ++i) {\n    if (node = group[i]) {\n      exit[i] = node;\n    }\n  }\n}\n\nfunction bindKey(parent, group, enter, update, exit, data, key) {\n  var i,\n      node,\n      nodeByKeyValue = {},\n      groupLength = group.length,\n      dataLength = data.length,\n      keyValues = new Array(groupLength),\n      keyValue;\n\n  // Compute the key for each node.\n  // If multiple nodes have the same key, the duplicates are added to exit.\n  for (i = 0; i < groupLength; ++i) {\n    if (node = group[i]) {\n      keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);\n      if (keyValue in nodeByKeyValue) {\n        exit[i] = node;\n      } else {\n        nodeByKeyValue[keyValue] = node;\n      }\n    }\n  }\n\n  // Compute the key for each datum.\n  // If there a node associated with this key, join and add it to update.\n  // If there is not (or the key is a duplicate), add it to enter.\n  for (i = 0; i < dataLength; ++i) {\n    keyValue = keyPrefix + key.call(parent, data[i], i, data);\n    if (node = nodeByKeyValue[keyValue]) {\n      update[i] = node;\n      node.__data__ = data[i];\n      nodeByKeyValue[keyValue] = null;\n    } else {\n      enter[i] = new _enter__WEBPACK_IMPORTED_MODULE_1__[\"EnterNode\"](parent, data[i]);\n    }\n  }\n\n  // Add any remaining nodes that were not bound to data to exit.\n  for (i = 0; i < groupLength; ++i) {\n    if ((node = group[i]) && (nodeByKeyValue[keyValues[i]] === node)) {\n      exit[i] = node;\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(value, key) {\n  if (!value) {\n    data = new Array(this.size()), j = -1;\n    this.each(function(d) { data[++j] = d; });\n    return data;\n  }\n\n  var bind = key ? bindKey : bindIndex,\n      parents = this._parents,\n      groups = this._groups;\n\n  if (typeof value !== \"function\") value = Object(_constant__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(value);\n\n  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {\n    var parent = parents[j],\n        group = groups[j],\n        groupLength = group.length,\n        data = value.call(parent, parent && parent.__data__, j, parents),\n        dataLength = data.length,\n        enterGroup = enter[j] = new Array(dataLength),\n        updateGroup = update[j] = new Array(dataLength),\n        exitGroup = exit[j] = new Array(groupLength);\n\n    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);\n\n    // Now connect the enter nodes to their following update node, such that\n    // appendChild can insert the materialized enter node before this node,\n    // rather than at the end of the parent node.\n    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {\n      if (previous = enterGroup[i0]) {\n        if (i0 >= i1) i1 = i0 + 1;\n        while (!(next = updateGroup[i1]) && ++i1 < dataLength);\n        previous._next = next || null;\n      }\n    }\n  }\n\n  update = new _index__WEBPACK_IMPORTED_MODULE_0__[\"Selection\"](update, parents);\n  update._enter = enter;\n  update._exit = exit;\n  return update;\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/selection/data.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/datum.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/datum.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(value) {\n  return arguments.length\n      ? this.property(\"__data__\", value)\n      : this.node().__data__;\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/selection/datum.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/dispatch.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/dispatch.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../window */ \"./node_modules/d3-selection/src/window.js\");\n\n\nfunction dispatchEvent(node, type, params) {\n  var window = Object(_window__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(node),\n      event = window.CustomEvent;\n\n  if (typeof event === \"function\") {\n    event = new event(type, params);\n  } else {\n    event = window.document.createEvent(\"Event\");\n    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;\n    else event.initEvent(type, false, false);\n  }\n\n  node.dispatchEvent(event);\n}\n\nfunction dispatchConstant(type, params) {\n  return function() {\n    return dispatchEvent(this, type, params);\n  };\n}\n\nfunction dispatchFunction(type, params) {\n  return function() {\n    return dispatchEvent(this, type, params.apply(this, arguments));\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(type, params) {\n  return this.each((typeof params === \"function\"\n      ? dispatchFunction\n      : dispatchConstant)(type, params));\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/selection/dispatch.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/each.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/each.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(callback) {\n\n  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {\n    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {\n      if (node = group[i]) callback.call(node, node.__data__, i, group);\n    }\n  }\n\n  return this;\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/selection/each.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/empty.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/empty.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  return !this.node();\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/selection/empty.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/enter.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/enter.js ***!
  \**********************************************************/
/*! exports provided: default, EnterNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EnterNode\", function() { return EnterNode; });\n/* harmony import */ var _sparse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sparse */ \"./node_modules/d3-selection/src/selection/sparse.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./node_modules/d3-selection/src/selection/index.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  return new _index__WEBPACK_IMPORTED_MODULE_1__[\"Selection\"](this._enter || this._groups.map(_sparse__WEBPACK_IMPORTED_MODULE_0__[\"default\"]), this._parents);\n});\n\nfunction EnterNode(parent, datum) {\n  this.ownerDocument = parent.ownerDocument;\n  this.namespaceURI = parent.namespaceURI;\n  this._next = null;\n  this._parent = parent;\n  this.__data__ = datum;\n}\n\nEnterNode.prototype = {\n  constructor: EnterNode,\n  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },\n  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },\n  querySelector: function(selector) { return this._parent.querySelector(selector); },\n  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }\n};\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/selection/enter.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/exit.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/exit.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sparse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sparse */ \"./node_modules/d3-selection/src/selection/sparse.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./node_modules/d3-selection/src/selection/index.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  return new _index__WEBPACK_IMPORTED_MODULE_1__[\"Selection\"](this._exit || this._groups.map(_sparse__WEBPACK_IMPORTED_MODULE_0__[\"default\"]), this._parents);\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/selection/exit.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/filter.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/filter.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./node_modules/d3-selection/src/selection/index.js\");\n/* harmony import */ var _matcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../matcher */ \"./node_modules/d3-selection/src/matcher.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(match) {\n  if (typeof match !== \"function\") match = Object(_matcher__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(match);\n\n  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {\n    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {\n      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {\n        subgroup.push(node);\n      }\n    }\n  }\n\n  return new _index__WEBPACK_IMPORTED_MODULE_0__[\"Selection\"](subgroups, this._parents);\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/selection/filter.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/html.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/html.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction htmlRemove() {\n  this.innerHTML = \"\";\n}\n\nfunction htmlConstant(value) {\n  return function() {\n    this.innerHTML = value;\n  };\n}\n\nfunction htmlFunction(value) {\n  return function() {\n    var v = value.apply(this, arguments);\n    this.innerHTML = v == null ? \"\" : v;\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(value) {\n  return arguments.length\n      ? this.each(value == null\n          ? htmlRemove : (typeof value === \"function\"\n          ? htmlFunction\n          : htmlConstant)(value))\n      : this.node().innerHTML;\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/selection/html.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/index.js ***!
  \**********************************************************/
/*! exports provided: root, Selection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"root\", function() { return root; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Selection\", function() { return Selection; });\n/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select */ \"./node_modules/d3-selection/src/selection/select.js\");\n/* harmony import */ var _selectAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectAll */ \"./node_modules/d3-selection/src/selection/selectAll.js\");\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter */ \"./node_modules/d3-selection/src/selection/filter.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ \"./node_modules/d3-selection/src/selection/data.js\");\n/* harmony import */ var _enter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enter */ \"./node_modules/d3-selection/src/selection/enter.js\");\n/* harmony import */ var _exit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exit */ \"./node_modules/d3-selection/src/selection/exit.js\");\n/* harmony import */ var _join__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./join */ \"./node_modules/d3-selection/src/selection/join.js\");\n/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./merge */ \"./node_modules/d3-selection/src/selection/merge.js\");\n/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./order */ \"./node_modules/d3-selection/src/selection/order.js\");\n/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sort */ \"./node_modules/d3-selection/src/selection/sort.js\");\n/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./call */ \"./node_modules/d3-selection/src/selection/call.js\");\n/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nodes */ \"./node_modules/d3-selection/src/selection/nodes.js\");\n/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node */ \"./node_modules/d3-selection/src/selection/node.js\");\n/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./size */ \"./node_modules/d3-selection/src/selection/size.js\");\n/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./empty */ \"./node_modules/d3-selection/src/selection/empty.js\");\n/* harmony import */ var _each__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./each */ \"./node_modules/d3-selection/src/selection/each.js\");\n/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./attr */ \"./node_modules/d3-selection/src/selection/attr.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./style */ \"./node_modules/d3-selection/src/selection/style.js\");\n/* harmony import */ var _property__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./property */ \"./node_modules/d3-selection/src/selection/property.js\");\n/* harmony import */ var _classed__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./classed */ \"./node_modules/d3-selection/src/selection/classed.js\");\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./text */ \"./node_modules/d3-selection/src/selection/text.js\");\n/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./html */ \"./node_modules/d3-selection/src/selection/html.js\");\n/* harmony import */ var _raise__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./raise */ \"./node_modules/d3-selection/src/selection/raise.js\");\n/* harmony import */ var _lower__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./lower */ \"./node_modules/d3-selection/src/selection/lower.js\");\n/* harmony import */ var _append__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./append */ \"./node_modules/d3-selection/src/selection/append.js\");\n/* harmony import */ var _insert__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./insert */ \"./node_modules/d3-selection/src/selection/insert.js\");\n/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./remove */ \"./node_modules/d3-selection/src/selection/remove.js\");\n/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./clone */ \"./node_modules/d3-selection/src/selection/clone.js\");\n/* harmony import */ var _datum__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./datum */ \"./node_modules/d3-selection/src/selection/datum.js\");\n/* harmony import */ var _on__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./on */ \"./node_modules/d3-selection/src/selection/on.js\");\n/* harmony import */ var _dispatch__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./dispatch */ \"./node_modules/d3-selection/src/selection/dispatch.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar root = [null];\n\nfunction Selection(groups, parents) {\n  this._groups = groups;\n  this._parents = parents;\n}\n\nfunction selection() {\n  return new Selection([[document.documentElement]], root);\n}\n\nSelection.prototype = selection.prototype = {\n  constructor: Selection,\n  select: _select__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  selectAll: _selectAll__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  filter: _filter__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  data: _data__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  enter: _enter__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  exit: _exit__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  join: _join__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  merge: _merge__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  order: _order__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n  sort: _sort__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n  call: _call__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n  nodes: _nodes__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n  node: _node__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n  size: _size__WEBPACK_IMPORTED_MODULE_13__[\"default\"],\n  empty: _empty__WEBPACK_IMPORTED_MODULE_14__[\"default\"],\n  each: _each__WEBPACK_IMPORTED_MODULE_15__[\"default\"],\n  attr: _attr__WEBPACK_IMPORTED_MODULE_16__[\"default\"],\n  style: _style__WEBPACK_IMPORTED_MODULE_17__[\"default\"],\n  property: _property__WEBPACK_IMPORTED_MODULE_18__[\"default\"],\n  classed: _classed__WEBPACK_IMPORTED_MODULE_19__[\"default\"],\n  text: _text__WEBPACK_IMPORTED_MODULE_20__[\"default\"],\n  html: _html__WEBPACK_IMPORTED_MODULE_21__[\"default\"],\n  raise: _raise__WEBPACK_IMPORTED_MODULE_22__[\"default\"],\n  lower: _lower__WEBPACK_IMPORTED_MODULE_23__[\"default\"],\n  append: _append__WEBPACK_IMPORTED_MODULE_24__[\"default\"],\n  insert: _insert__WEBPACK_IMPORTED_MODULE_25__[\"default\"],\n  remove: _remove__WEBPACK_IMPORTED_MODULE_26__[\"default\"],\n  clone: _clone__WEBPACK_IMPORTED_MODULE_27__[\"default\"],\n  datum: _datum__WEBPACK_IMPORTED_MODULE_28__[\"default\"],\n  on: _on__WEBPACK_IMPORTED_MODULE_29__[\"default\"],\n  dispatch: _dispatch__WEBPACK_IMPORTED_MODULE_30__[\"default\"]\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (selection);\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/selection/index.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/insert.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/insert.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../creator */ \"./node_modules/d3-selection/src/creator.js\");\n/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selector */ \"./node_modules/d3-selection/src/selector.js\");\n\n\n\nfunction constantNull() {\n  return null;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(name, before) {\n  var create = typeof name === \"function\" ? name : Object(_creator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(name),\n      select = before == null ? constantNull : typeof before === \"function\" ? before : Object(_selector__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(before);\n  return this.select(function() {\n    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);\n  });\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/selection/insert.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/join.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/join.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(onenter, onupdate, onexit) {\n  var enter = this.enter(), update = this, exit = this.exit();\n  enter = typeof onenter === \"function\" ? onenter(enter) : enter.append(onenter + \"\");\n  if (onupdate != null) update = onupdate(update);\n  if (onexit == null) exit.remove(); else onexit(exit);\n  return enter && update ? enter.merge(update).order() : update;\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/selection/join.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/lower.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/lower.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction lower() {\n  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  return this.each(lower);\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/selection/lower.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/merge.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/merge.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./node_modules/d3-selection/src/selection/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(selection) {\n\n  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {\n    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {\n      if (node = group0[i] || group1[i]) {\n        merge[i] = node;\n      }\n    }\n  }\n\n  for (; j < m0; ++j) {\n    merges[j] = groups0[j];\n  }\n\n  return new _index__WEBPACK_IMPORTED_MODULE_0__[\"Selection\"](merges, this._parents);\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/selection/merge.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/node.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/node.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n\n  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {\n    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {\n      var node = group[i];\n      if (node) return node;\n    }\n  }\n\n  return null;\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/selection/node.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/nodes.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/nodes.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  var nodes = new Array(this.size()), i = -1;\n  this.each(function() { nodes[++i] = this; });\n  return nodes;\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/selection/nodes.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/on.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/on.js ***!
  \*******************************************************/
/*! exports provided: event, default, customEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"event\", function() { return event; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"customEvent\", function() { return customEvent; });\nvar filterEvents = {};\n\nvar event = null;\n\nif (typeof document !== \"undefined\") {\n  var element = document.documentElement;\n  if (!(\"onmouseenter\" in element)) {\n    filterEvents = {mouseenter: \"mouseover\", mouseleave: \"mouseout\"};\n  }\n}\n\nfunction filterContextListener(listener, index, group) {\n  listener = contextListener(listener, index, group);\n  return function(event) {\n    var related = event.relatedTarget;\n    if (!related || (related !== this && !(related.compareDocumentPosition(this) & 8))) {\n      listener.call(this, event);\n    }\n  };\n}\n\nfunction contextListener(listener, index, group) {\n  return function(event1) {\n    var event0 = event; // Events can be reentrant (e.g., focus).\n    event = event1;\n    try {\n      listener.call(this, this.__data__, index, group);\n    } finally {\n      event = event0;\n    }\n  };\n}\n\nfunction parseTypenames(typenames) {\n  return typenames.trim().split(/^|\\s+/).map(function(t) {\n    var name = \"\", i = t.indexOf(\".\");\n    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);\n    return {type: t, name: name};\n  });\n}\n\nfunction onRemove(typename) {\n  return function() {\n    var on = this.__on;\n    if (!on) return;\n    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {\n      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {\n        this.removeEventListener(o.type, o.listener, o.capture);\n      } else {\n        on[++i] = o;\n      }\n    }\n    if (++i) on.length = i;\n    else delete this.__on;\n  };\n}\n\nfunction onAdd(typename, value, capture) {\n  var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;\n  return function(d, i, group) {\n    var on = this.__on, o, listener = wrap(value, i, group);\n    if (on) for (var j = 0, m = on.length; j < m; ++j) {\n      if ((o = on[j]).type === typename.type && o.name === typename.name) {\n        this.removeEventListener(o.type, o.listener, o.capture);\n        this.addEventListener(o.type, o.listener = listener, o.capture = capture);\n        o.value = value;\n        return;\n      }\n    }\n    this.addEventListener(typename.type, listener, capture);\n    o = {type: typename.type, name: typename.name, value: value, listener: listener, capture: capture};\n    if (!on) this.__on = [o];\n    else on.push(o);\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(typename, value, capture) {\n  var typenames = parseTypenames(typename + \"\"), i, n = typenames.length, t;\n\n  if (arguments.length < 2) {\n    var on = this.node().__on;\n    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {\n      for (i = 0, o = on[j]; i < n; ++i) {\n        if ((t = typenames[i]).type === o.type && t.name === o.name) {\n          return o.value;\n        }\n      }\n    }\n    return;\n  }\n\n  on = value ? onAdd : onRemove;\n  if (capture == null) capture = false;\n  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, capture));\n  return this;\n});\n\nfunction customEvent(event1, listener, that, args) {\n  var event0 = event;\n  event1.sourceEvent = event;\n  event = event1;\n  try {\n    return listener.apply(that, args);\n  } finally {\n    event = event0;\n  }\n}\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/selection/on.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/order.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/order.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n\n  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {\n    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {\n      if (node = group[i]) {\n        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);\n        next = node;\n      }\n    }\n  }\n\n  return this;\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/selection/order.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/property.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/property.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction propertyRemove(name) {\n  return function() {\n    delete this[name];\n  };\n}\n\nfunction propertyConstant(name, value) {\n  return function() {\n    this[name] = value;\n  };\n}\n\nfunction propertyFunction(name, value) {\n  return function() {\n    var v = value.apply(this, arguments);\n    if (v == null) delete this[name];\n    else this[name] = v;\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(name, value) {\n  return arguments.length > 1\n      ? this.each((value == null\n          ? propertyRemove : typeof value === \"function\"\n          ? propertyFunction\n          : propertyConstant)(name, value))\n      : this.node()[name];\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/selection/property.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/raise.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/raise.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction raise() {\n  if (this.nextSibling) this.parentNode.appendChild(this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  return this.each(raise);\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/selection/raise.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/remove.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/remove.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction remove() {\n  var parent = this.parentNode;\n  if (parent) parent.removeChild(this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  return this.each(remove);\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/selection/remove.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/select.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/select.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./node_modules/d3-selection/src/selection/index.js\");\n/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selector */ \"./node_modules/d3-selection/src/selector.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(select) {\n  if (typeof select !== \"function\") select = Object(_selector__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(select);\n\n  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {\n    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {\n      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {\n        if (\"__data__\" in node) subnode.__data__ = node.__data__;\n        subgroup[i] = subnode;\n      }\n    }\n  }\n\n  return new _index__WEBPACK_IMPORTED_MODULE_0__[\"Selection\"](subgroups, this._parents);\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/selection/select.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/selectAll.js":
/*!**************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/selectAll.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./node_modules/d3-selection/src/selection/index.js\");\n/* harmony import */ var _selectorAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selectorAll */ \"./node_modules/d3-selection/src/selectorAll.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(select) {\n  if (typeof select !== \"function\") select = Object(_selectorAll__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(select);\n\n  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {\n    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {\n      if (node = group[i]) {\n        subgroups.push(select.call(node, node.__data__, i, group));\n        parents.push(node);\n      }\n    }\n  }\n\n  return new _index__WEBPACK_IMPORTED_MODULE_0__[\"Selection\"](subgroups, parents);\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/selection/selectAll.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/size.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/size.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  var size = 0;\n  this.each(function() { ++size; });\n  return size;\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/selection/size.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/sort.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/sort.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./node_modules/d3-selection/src/selection/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(compare) {\n  if (!compare) compare = ascending;\n\n  function compareNode(a, b) {\n    return a && b ? compare(a.__data__, b.__data__) : !a - !b;\n  }\n\n  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {\n    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {\n      if (node = group[i]) {\n        sortgroup[i] = node;\n      }\n    }\n    sortgroup.sort(compareNode);\n  }\n\n  return new _index__WEBPACK_IMPORTED_MODULE_0__[\"Selection\"](sortgroups, this._parents).order();\n});\n\nfunction ascending(a, b) {\n  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;\n}\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/selection/sort.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/sparse.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/sparse.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(update) {\n  return new Array(update.length);\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/selection/sparse.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/style.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/style.js ***!
  \**********************************************************/
/*! exports provided: default, styleValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"styleValue\", function() { return styleValue; });\n/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../window */ \"./node_modules/d3-selection/src/window.js\");\n\n\nfunction styleRemove(name) {\n  return function() {\n    this.style.removeProperty(name);\n  };\n}\n\nfunction styleConstant(name, value, priority) {\n  return function() {\n    this.style.setProperty(name, value, priority);\n  };\n}\n\nfunction styleFunction(name, value, priority) {\n  return function() {\n    var v = value.apply(this, arguments);\n    if (v == null) this.style.removeProperty(name);\n    else this.style.setProperty(name, v, priority);\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(name, value, priority) {\n  return arguments.length > 1\n      ? this.each((value == null\n            ? styleRemove : typeof value === \"function\"\n            ? styleFunction\n            : styleConstant)(name, value, priority == null ? \"\" : priority))\n      : styleValue(this.node(), name);\n});\n\nfunction styleValue(node, name) {\n  return node.style.getPropertyValue(name)\n      || Object(_window__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(node).getComputedStyle(node, null).getPropertyValue(name);\n}\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/selection/style.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/text.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/text.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction textRemove() {\n  this.textContent = \"\";\n}\n\nfunction textConstant(value) {\n  return function() {\n    this.textContent = value;\n  };\n}\n\nfunction textFunction(value) {\n  return function() {\n    var v = value.apply(this, arguments);\n    this.textContent = v == null ? \"\" : v;\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(value) {\n  return arguments.length\n      ? this.each(value == null\n          ? textRemove : (typeof value === \"function\"\n          ? textFunction\n          : textConstant)(value))\n      : this.node().textContent;\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/selection/text.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selector.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-selection/src/selector.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction none() {}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(selector) {\n  return selector == null ? none : function() {\n    return this.querySelector(selector);\n  };\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/selector.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selectorAll.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-selection/src/selectorAll.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction empty() {\n  return [];\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(selector) {\n  return selector == null ? empty : function() {\n    return this.querySelectorAll(selector);\n  };\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/selectorAll.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/sourceEvent.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-selection/src/sourceEvent.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _selection_on__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection/on */ \"./node_modules/d3-selection/src/selection/on.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  var current = _selection_on__WEBPACK_IMPORTED_MODULE_0__[\"event\"], source;\n  while (source = current.sourceEvent) current = source;\n  return current;\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/sourceEvent.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/touch.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/touch.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sourceEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sourceEvent */ \"./node_modules/d3-selection/src/sourceEvent.js\");\n/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point */ \"./node_modules/d3-selection/src/point.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(node, touches, identifier) {\n  if (arguments.length < 3) identifier = touches, touches = Object(_sourceEvent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().changedTouches;\n\n  for (var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i) {\n    if ((touch = touches[i]).identifier === identifier) {\n      return Object(_point__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(node, touch);\n    }\n  }\n\n  return null;\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/touch.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/touches.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/touches.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sourceEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sourceEvent */ \"./node_modules/d3-selection/src/sourceEvent.js\");\n/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point */ \"./node_modules/d3-selection/src/point.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(node, touches) {\n  if (touches == null) touches = Object(_sourceEvent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().touches;\n\n  for (var i = 0, n = touches ? touches.length : 0, points = new Array(n); i < n; ++i) {\n    points[i] = Object(_point__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(node, touches[i]);\n  }\n\n  return points;\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/touches.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/window.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-selection/src/window.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(node) {\n  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node\n      || (node.document && node) // node is a Window\n      || node.defaultView; // node is a Document\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-selection/src/window.js?");

/***/ }),

/***/ "./node_modules/d3-timer/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-timer/src/index.js ***!
  \********************************************/
/*! exports provided: now, timer, timerFlush, timeout, interval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer */ \"./node_modules/d3-timer/src/timer.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"now\", function() { return _timer__WEBPACK_IMPORTED_MODULE_0__[\"now\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timer\", function() { return _timer__WEBPACK_IMPORTED_MODULE_0__[\"timer\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timerFlush\", function() { return _timer__WEBPACK_IMPORTED_MODULE_0__[\"timerFlush\"]; });\n\n/* harmony import */ var _timeout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeout */ \"./node_modules/d3-timer/src/timeout.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timeout\", function() { return _timeout__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interval */ \"./node_modules/d3-timer/src/interval.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interval\", function() { return _interval__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-timer/src/index.js?");

/***/ }),

/***/ "./node_modules/d3-timer/src/interval.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-timer/src/interval.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer */ \"./node_modules/d3-timer/src/timer.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(callback, delay, time) {\n  var t = new _timer__WEBPACK_IMPORTED_MODULE_0__[\"Timer\"], total = delay;\n  if (delay == null) return t.restart(callback, delay, time), t;\n  delay = +delay, time = time == null ? Object(_timer__WEBPACK_IMPORTED_MODULE_0__[\"now\"])() : +time;\n  t.restart(function tick(elapsed) {\n    elapsed += total;\n    t.restart(tick, total += delay, time);\n    callback(elapsed);\n  }, delay, time);\n  return t;\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-timer/src/interval.js?");

/***/ }),

/***/ "./node_modules/d3-timer/src/timeout.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-timer/src/timeout.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer */ \"./node_modules/d3-timer/src/timer.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(callback, delay, time) {\n  var t = new _timer__WEBPACK_IMPORTED_MODULE_0__[\"Timer\"];\n  delay = delay == null ? 0 : +delay;\n  t.restart(function(elapsed) {\n    t.stop();\n    callback(elapsed + delay);\n  }, delay, time);\n  return t;\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-timer/src/timeout.js?");

/***/ }),

/***/ "./node_modules/d3-timer/src/timer.js":
/*!********************************************!*\
  !*** ./node_modules/d3-timer/src/timer.js ***!
  \********************************************/
/*! exports provided: now, Timer, timer, timerFlush */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"now\", function() { return now; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Timer\", function() { return Timer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"timer\", function() { return timer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"timerFlush\", function() { return timerFlush; });\nvar frame = 0, // is an animation frame pending?\n    timeout = 0, // is a timeout pending?\n    interval = 0, // are any timers active?\n    pokeDelay = 1000, // how frequently we check for clock skew\n    taskHead,\n    taskTail,\n    clockLast = 0,\n    clockNow = 0,\n    clockSkew = 0,\n    clock = typeof performance === \"object\" && performance.now ? performance : Date,\n    setFrame = typeof window === \"object\" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };\n\nfunction now() {\n  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);\n}\n\nfunction clearNow() {\n  clockNow = 0;\n}\n\nfunction Timer() {\n  this._call =\n  this._time =\n  this._next = null;\n}\n\nTimer.prototype = timer.prototype = {\n  constructor: Timer,\n  restart: function(callback, delay, time) {\n    if (typeof callback !== \"function\") throw new TypeError(\"callback is not a function\");\n    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);\n    if (!this._next && taskTail !== this) {\n      if (taskTail) taskTail._next = this;\n      else taskHead = this;\n      taskTail = this;\n    }\n    this._call = callback;\n    this._time = time;\n    sleep();\n  },\n  stop: function() {\n    if (this._call) {\n      this._call = null;\n      this._time = Infinity;\n      sleep();\n    }\n  }\n};\n\nfunction timer(callback, delay, time) {\n  var t = new Timer;\n  t.restart(callback, delay, time);\n  return t;\n}\n\nfunction timerFlush() {\n  now(); // Get the current time, if not already set.\n  ++frame; // Pretend we’ve set an alarm, if we haven’t already.\n  var t = taskHead, e;\n  while (t) {\n    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);\n    t = t._next;\n  }\n  --frame;\n}\n\nfunction wake() {\n  clockNow = (clockLast = clock.now()) + clockSkew;\n  frame = timeout = 0;\n  try {\n    timerFlush();\n  } finally {\n    frame = 0;\n    nap();\n    clockNow = 0;\n  }\n}\n\nfunction poke() {\n  var now = clock.now(), delay = now - clockLast;\n  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;\n}\n\nfunction nap() {\n  var t0, t1 = taskHead, t2, time = Infinity;\n  while (t1) {\n    if (t1._call) {\n      if (time > t1._time) time = t1._time;\n      t0 = t1, t1 = t1._next;\n    } else {\n      t2 = t1._next, t1._next = null;\n      t1 = t0 ? t0._next = t2 : taskHead = t2;\n    }\n  }\n  taskTail = t0;\n  sleep(time);\n}\n\nfunction sleep(time) {\n  if (frame) return; // Soonest alarm already set, or will be.\n  if (timeout) timeout = clearTimeout(timeout);\n  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.\n  if (delay > 24) {\n    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);\n    if (interval) interval = clearInterval(interval);\n  } else {\n    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);\n    frame = 1, setFrame(wake);\n  }\n}\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-timer/src/timer.js?");

/***/ }),

/***/ "./node_modules/d3-transition/src/active.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-transition/src/active.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _transition_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transition/index */ \"./node_modules/d3-transition/src/transition/index.js\");\n/* harmony import */ var _transition_schedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transition/schedule */ \"./node_modules/d3-transition/src/transition/schedule.js\");\n\n\n\nvar root = [null];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(node, name) {\n  var schedules = node.__transition,\n      schedule,\n      i;\n\n  if (schedules) {\n    name = name == null ? null : name + \"\";\n    for (i in schedules) {\n      if ((schedule = schedules[i]).state > _transition_schedule__WEBPACK_IMPORTED_MODULE_1__[\"SCHEDULED\"] && schedule.name === name) {\n        return new _transition_index__WEBPACK_IMPORTED_MODULE_0__[\"Transition\"]([[node]], root, name, +i);\n      }\n    }\n  }\n\n  return null;\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-transition/src/active.js?");

/***/ }),

/***/ "./node_modules/d3-transition/src/index.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-transition/src/index.js ***!
  \*************************************************/
/*! exports provided: transition, active, interrupt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _selection_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection/index */ \"./node_modules/d3-transition/src/selection/index.js\");\n/* harmony import */ var _transition_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transition/index */ \"./node_modules/d3-transition/src/transition/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"transition\", function() { return _transition_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _active__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./active */ \"./node_modules/d3-transition/src/active.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"active\", function() { return _active__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _interrupt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interrupt */ \"./node_modules/d3-transition/src/interrupt.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interrupt\", function() { return _interrupt__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n\n\n\n\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-transition/src/index.js?");

/***/ }),

/***/ "./node_modules/d3-transition/src/interrupt.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-transition/src/interrupt.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _transition_schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transition/schedule */ \"./node_modules/d3-transition/src/transition/schedule.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(node, name) {\n  var schedules = node.__transition,\n      schedule,\n      active,\n      empty = true,\n      i;\n\n  if (!schedules) return;\n\n  name = name == null ? null : name + \"\";\n\n  for (i in schedules) {\n    if ((schedule = schedules[i]).name !== name) { empty = false; continue; }\n    active = schedule.state > _transition_schedule__WEBPACK_IMPORTED_MODULE_0__[\"STARTING\"] && schedule.state < _transition_schedule__WEBPACK_IMPORTED_MODULE_0__[\"ENDING\"];\n    schedule.state = _transition_schedule__WEBPACK_IMPORTED_MODULE_0__[\"ENDED\"];\n    schedule.timer.stop();\n    schedule.on.call(active ? \"interrupt\" : \"cancel\", node, node.__data__, schedule.index, schedule.group);\n    delete schedules[i];\n  }\n\n  if (empty) delete node.__transition;\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-transition/src/interrupt.js?");

/***/ }),

/***/ "./node_modules/d3-transition/src/selection/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/selection/index.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ \"./node_modules/d3-selection/src/index.js\");\n/* harmony import */ var _interrupt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interrupt */ \"./node_modules/d3-transition/src/selection/interrupt.js\");\n/* harmony import */ var _transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transition */ \"./node_modules/d3-transition/src/selection/transition.js\");\n\n\n\n\nd3_selection__WEBPACK_IMPORTED_MODULE_0__[\"selection\"].prototype.interrupt = _interrupt__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nd3_selection__WEBPACK_IMPORTED_MODULE_0__[\"selection\"].prototype.transition = _transition__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-transition/src/selection/index.js?");

/***/ }),

/***/ "./node_modules/d3-transition/src/selection/interrupt.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-transition/src/selection/interrupt.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _interrupt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interrupt */ \"./node_modules/d3-transition/src/interrupt.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(name) {\n  return this.each(function() {\n    Object(_interrupt__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, name);\n  });\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-transition/src/selection/interrupt.js?");

/***/ }),

/***/ "./node_modules/d3-transition/src/selection/transition.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/selection/transition.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _transition_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../transition/index */ \"./node_modules/d3-transition/src/transition/index.js\");\n/* harmony import */ var _transition_schedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../transition/schedule */ \"./node_modules/d3-transition/src/transition/schedule.js\");\n/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-ease */ \"./node_modules/d3-ease/src/index.js\");\n/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-timer */ \"./node_modules/d3-timer/src/index.js\");\n\n\n\n\n\nvar defaultTiming = {\n  time: null, // Set on use.\n  delay: 0,\n  duration: 250,\n  ease: d3_ease__WEBPACK_IMPORTED_MODULE_2__[\"easeCubicInOut\"]\n};\n\nfunction inherit(node, id) {\n  var timing;\n  while (!(timing = node.__transition) || !(timing = timing[id])) {\n    if (!(node = node.parentNode)) {\n      return defaultTiming.time = Object(d3_timer__WEBPACK_IMPORTED_MODULE_3__[\"now\"])(), defaultTiming;\n    }\n  }\n  return timing;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(name) {\n  var id,\n      timing;\n\n  if (name instanceof _transition_index__WEBPACK_IMPORTED_MODULE_0__[\"Transition\"]) {\n    id = name._id, name = name._name;\n  } else {\n    id = Object(_transition_index__WEBPACK_IMPORTED_MODULE_0__[\"newId\"])(), (timing = defaultTiming).time = Object(d3_timer__WEBPACK_IMPORTED_MODULE_3__[\"now\"])(), name = name == null ? null : name + \"\";\n  }\n\n  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {\n    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {\n      if (node = group[i]) {\n        Object(_transition_schedule__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(node, name, id, i, group, timing || inherit(node, id));\n      }\n    }\n  }\n\n  return new _transition_index__WEBPACK_IMPORTED_MODULE_0__[\"Transition\"](groups, this._parents, name, id);\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-transition/src/selection/transition.js?");

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/attr.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/attr.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-interpolate */ \"./node_modules/d3-interpolate/src/index.js\");\n/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection */ \"./node_modules/d3-selection/src/index.js\");\n/* harmony import */ var _tween__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tween */ \"./node_modules/d3-transition/src/transition/tween.js\");\n/* harmony import */ var _interpolate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interpolate */ \"./node_modules/d3-transition/src/transition/interpolate.js\");\n\n\n\n\n\nfunction attrRemove(name) {\n  return function() {\n    this.removeAttribute(name);\n  };\n}\n\nfunction attrRemoveNS(fullname) {\n  return function() {\n    this.removeAttributeNS(fullname.space, fullname.local);\n  };\n}\n\nfunction attrConstant(name, interpolate, value1) {\n  var string00,\n      string1 = value1 + \"\",\n      interpolate0;\n  return function() {\n    var string0 = this.getAttribute(name);\n    return string0 === string1 ? null\n        : string0 === string00 ? interpolate0\n        : interpolate0 = interpolate(string00 = string0, value1);\n  };\n}\n\nfunction attrConstantNS(fullname, interpolate, value1) {\n  var string00,\n      string1 = value1 + \"\",\n      interpolate0;\n  return function() {\n    var string0 = this.getAttributeNS(fullname.space, fullname.local);\n    return string0 === string1 ? null\n        : string0 === string00 ? interpolate0\n        : interpolate0 = interpolate(string00 = string0, value1);\n  };\n}\n\nfunction attrFunction(name, interpolate, value) {\n  var string00,\n      string10,\n      interpolate0;\n  return function() {\n    var string0, value1 = value(this), string1;\n    if (value1 == null) return void this.removeAttribute(name);\n    string0 = this.getAttribute(name);\n    string1 = value1 + \"\";\n    return string0 === string1 ? null\n        : string0 === string00 && string1 === string10 ? interpolate0\n        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));\n  };\n}\n\nfunction attrFunctionNS(fullname, interpolate, value) {\n  var string00,\n      string10,\n      interpolate0;\n  return function() {\n    var string0, value1 = value(this), string1;\n    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);\n    string0 = this.getAttributeNS(fullname.space, fullname.local);\n    string1 = value1 + \"\";\n    return string0 === string1 ? null\n        : string0 === string00 && string1 === string10 ? interpolate0\n        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(name, value) {\n  var fullname = Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__[\"namespace\"])(name), i = fullname === \"transform\" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_0__[\"interpolateTransformSvg\"] : _interpolate__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n  return this.attrTween(name, typeof value === \"function\"\n      ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, Object(_tween__WEBPACK_IMPORTED_MODULE_2__[\"tweenValue\"])(this, \"attr.\" + name, value))\n      : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname)\n      : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-transition/src/transition/attr.js?");

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/attrTween.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/attrTween.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ \"./node_modules/d3-selection/src/index.js\");\n\n\nfunction attrInterpolate(name, i) {\n  return function(t) {\n    this.setAttribute(name, i(t));\n  };\n}\n\nfunction attrInterpolateNS(fullname, i) {\n  return function(t) {\n    this.setAttributeNS(fullname.space, fullname.local, i(t));\n  };\n}\n\nfunction attrTweenNS(fullname, value) {\n  var t0, i0;\n  function tween() {\n    var i = value.apply(this, arguments);\n    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);\n    return t0;\n  }\n  tween._value = value;\n  return tween;\n}\n\nfunction attrTween(name, value) {\n  var t0, i0;\n  function tween() {\n    var i = value.apply(this, arguments);\n    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);\n    return t0;\n  }\n  tween._value = value;\n  return tween;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(name, value) {\n  var key = \"attr.\" + name;\n  if (arguments.length < 2) return (key = this.tween(key)) && key._value;\n  if (value == null) return this.tween(key, null);\n  if (typeof value !== \"function\") throw new Error;\n  var fullname = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__[\"namespace\"])(name);\n  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-transition/src/transition/attrTween.js?");

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/delay.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/delay.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule */ \"./node_modules/d3-transition/src/transition/schedule.js\");\n\n\nfunction delayFunction(id, value) {\n  return function() {\n    Object(_schedule__WEBPACK_IMPORTED_MODULE_0__[\"init\"])(this, id).delay = +value.apply(this, arguments);\n  };\n}\n\nfunction delayConstant(id, value) {\n  return value = +value, function() {\n    Object(_schedule__WEBPACK_IMPORTED_MODULE_0__[\"init\"])(this, id).delay = value;\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(value) {\n  var id = this._id;\n\n  return arguments.length\n      ? this.each((typeof value === \"function\"\n          ? delayFunction\n          : delayConstant)(id, value))\n      : Object(_schedule__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(this.node(), id).delay;\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-transition/src/transition/delay.js?");

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/duration.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/duration.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule */ \"./node_modules/d3-transition/src/transition/schedule.js\");\n\n\nfunction durationFunction(id, value) {\n  return function() {\n    Object(_schedule__WEBPACK_IMPORTED_MODULE_0__[\"set\"])(this, id).duration = +value.apply(this, arguments);\n  };\n}\n\nfunction durationConstant(id, value) {\n  return value = +value, function() {\n    Object(_schedule__WEBPACK_IMPORTED_MODULE_0__[\"set\"])(this, id).duration = value;\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(value) {\n  var id = this._id;\n\n  return arguments.length\n      ? this.each((typeof value === \"function\"\n          ? durationFunction\n          : durationConstant)(id, value))\n      : Object(_schedule__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(this.node(), id).duration;\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-transition/src/transition/duration.js?");

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/ease.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/ease.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule */ \"./node_modules/d3-transition/src/transition/schedule.js\");\n\n\nfunction easeConstant(id, value) {\n  if (typeof value !== \"function\") throw new Error;\n  return function() {\n    Object(_schedule__WEBPACK_IMPORTED_MODULE_0__[\"set\"])(this, id).ease = value;\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(value) {\n  var id = this._id;\n\n  return arguments.length\n      ? this.each(easeConstant(id, value))\n      : Object(_schedule__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(this.node(), id).ease;\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-transition/src/transition/ease.js?");

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/end.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/end.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule */ \"./node_modules/d3-transition/src/transition/schedule.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  var on0, on1, that = this, id = that._id, size = that.size();\n  return new Promise(function(resolve, reject) {\n    var cancel = {value: reject},\n        end = {value: function() { if (--size === 0) resolve(); }};\n\n    that.each(function() {\n      var schedule = Object(_schedule__WEBPACK_IMPORTED_MODULE_0__[\"set\"])(this, id),\n          on = schedule.on;\n\n      // If this node shared a dispatch with the previous node,\n      // just assign the updated shared dispatch and we’re done!\n      // Otherwise, copy-on-write.\n      if (on !== on0) {\n        on1 = (on0 = on).copy();\n        on1._.cancel.push(cancel);\n        on1._.interrupt.push(cancel);\n        on1._.end.push(end);\n      }\n\n      schedule.on = on1;\n    });\n  });\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-transition/src/transition/end.js?");

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/filter.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/filter.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ \"./node_modules/d3-selection/src/index.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./node_modules/d3-transition/src/transition/index.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(match) {\n  if (typeof match !== \"function\") match = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__[\"matcher\"])(match);\n\n  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {\n    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {\n      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {\n        subgroup.push(node);\n      }\n    }\n  }\n\n  return new _index__WEBPACK_IMPORTED_MODULE_1__[\"Transition\"](subgroups, this._parents, this._name, this._id);\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-transition/src/transition/filter.js?");

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/index.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/index.js ***!
  \************************************************************/
/*! exports provided: Transition, default, newId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Transition\", function() { return Transition; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return transition; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newId\", function() { return newId; });\n/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ \"./node_modules/d3-selection/src/index.js\");\n/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attr */ \"./node_modules/d3-transition/src/transition/attr.js\");\n/* harmony import */ var _attrTween__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attrTween */ \"./node_modules/d3-transition/src/transition/attrTween.js\");\n/* harmony import */ var _delay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delay */ \"./node_modules/d3-transition/src/transition/delay.js\");\n/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./duration */ \"./node_modules/d3-transition/src/transition/duration.js\");\n/* harmony import */ var _ease__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ease */ \"./node_modules/d3-transition/src/transition/ease.js\");\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filter */ \"./node_modules/d3-transition/src/transition/filter.js\");\n/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./merge */ \"./node_modules/d3-transition/src/transition/merge.js\");\n/* harmony import */ var _on__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./on */ \"./node_modules/d3-transition/src/transition/on.js\");\n/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./remove */ \"./node_modules/d3-transition/src/transition/remove.js\");\n/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./select */ \"./node_modules/d3-transition/src/transition/select.js\");\n/* harmony import */ var _selectAll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./selectAll */ \"./node_modules/d3-transition/src/transition/selectAll.js\");\n/* harmony import */ var _selection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./selection */ \"./node_modules/d3-transition/src/transition/selection.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./style */ \"./node_modules/d3-transition/src/transition/style.js\");\n/* harmony import */ var _styleTween__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styleTween */ \"./node_modules/d3-transition/src/transition/styleTween.js\");\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./text */ \"./node_modules/d3-transition/src/transition/text.js\");\n/* harmony import */ var _transition__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./transition */ \"./node_modules/d3-transition/src/transition/transition.js\");\n/* harmony import */ var _tween__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tween */ \"./node_modules/d3-transition/src/transition/tween.js\");\n/* harmony import */ var _end__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./end */ \"./node_modules/d3-transition/src/transition/end.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar id = 0;\n\nfunction Transition(groups, parents, name, id) {\n  this._groups = groups;\n  this._parents = parents;\n  this._name = name;\n  this._id = id;\n}\n\nfunction transition(name) {\n  return Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__[\"selection\"])().transition(name);\n}\n\nfunction newId() {\n  return ++id;\n}\n\nvar selection_prototype = d3_selection__WEBPACK_IMPORTED_MODULE_0__[\"selection\"].prototype;\n\nTransition.prototype = transition.prototype = {\n  constructor: Transition,\n  select: _select__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n  selectAll: _selectAll__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n  filter: _filter__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  merge: _merge__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  selection: _selection__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n  transition: _transition__WEBPACK_IMPORTED_MODULE_16__[\"default\"],\n  call: selection_prototype.call,\n  nodes: selection_prototype.nodes,\n  node: selection_prototype.node,\n  size: selection_prototype.size,\n  empty: selection_prototype.empty,\n  each: selection_prototype.each,\n  on: _on__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n  attr: _attr__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  attrTween: _attrTween__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  style: _style__WEBPACK_IMPORTED_MODULE_13__[\"default\"],\n  styleTween: _styleTween__WEBPACK_IMPORTED_MODULE_14__[\"default\"],\n  text: _text__WEBPACK_IMPORTED_MODULE_15__[\"default\"],\n  remove: _remove__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n  tween: _tween__WEBPACK_IMPORTED_MODULE_17__[\"default\"],\n  delay: _delay__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  duration: _duration__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  ease: _ease__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  end: _end__WEBPACK_IMPORTED_MODULE_18__[\"default\"]\n};\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-transition/src/transition/index.js?");

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/interpolate.js":
/*!******************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/interpolate.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ \"./node_modules/d3-color/src/index.js\");\n/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ \"./node_modules/d3-interpolate/src/index.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(a, b) {\n  var c;\n  return (typeof b === \"number\" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_1__[\"interpolateNumber\"]\n      : b instanceof d3_color__WEBPACK_IMPORTED_MODULE_0__[\"color\"] ? d3_interpolate__WEBPACK_IMPORTED_MODULE_1__[\"interpolateRgb\"]\n      : (c = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__[\"color\"])(b)) ? (b = c, d3_interpolate__WEBPACK_IMPORTED_MODULE_1__[\"interpolateRgb\"])\n      : d3_interpolate__WEBPACK_IMPORTED_MODULE_1__[\"interpolateString\"])(a, b);\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-transition/src/transition/interpolate.js?");

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/merge.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/merge.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./node_modules/d3-transition/src/transition/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(transition) {\n  if (transition._id !== this._id) throw new Error;\n\n  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {\n    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {\n      if (node = group0[i] || group1[i]) {\n        merge[i] = node;\n      }\n    }\n  }\n\n  for (; j < m0; ++j) {\n    merges[j] = groups0[j];\n  }\n\n  return new _index__WEBPACK_IMPORTED_MODULE_0__[\"Transition\"](merges, this._parents, this._name, this._id);\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-transition/src/transition/merge.js?");

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/on.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/on.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule */ \"./node_modules/d3-transition/src/transition/schedule.js\");\n\n\nfunction start(name) {\n  return (name + \"\").trim().split(/^|\\s+/).every(function(t) {\n    var i = t.indexOf(\".\");\n    if (i >= 0) t = t.slice(0, i);\n    return !t || t === \"start\";\n  });\n}\n\nfunction onFunction(id, name, listener) {\n  var on0, on1, sit = start(name) ? _schedule__WEBPACK_IMPORTED_MODULE_0__[\"init\"] : _schedule__WEBPACK_IMPORTED_MODULE_0__[\"set\"];\n  return function() {\n    var schedule = sit(this, id),\n        on = schedule.on;\n\n    // If this node shared a dispatch with the previous node,\n    // just assign the updated shared dispatch and we’re done!\n    // Otherwise, copy-on-write.\n    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);\n\n    schedule.on = on1;\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(name, listener) {\n  var id = this._id;\n\n  return arguments.length < 2\n      ? Object(_schedule__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(this.node(), id).on.on(name)\n      : this.each(onFunction(id, name, listener));\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-transition/src/transition/on.js?");

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/remove.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/remove.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction removeFunction(id) {\n  return function() {\n    var parent = this.parentNode;\n    for (var i in this.__transition) if (+i !== id) return;\n    if (parent) parent.removeChild(this);\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  return this.on(\"end.remove\", removeFunction(this._id));\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-transition/src/transition/remove.js?");

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/schedule.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/schedule.js ***!
  \***************************************************************/
/*! exports provided: CREATED, SCHEDULED, STARTING, STARTED, RUNNING, ENDING, ENDED, default, init, set, get */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CREATED\", function() { return CREATED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SCHEDULED\", function() { return SCHEDULED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STARTING\", function() { return STARTING; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STARTED\", function() { return STARTED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RUNNING\", function() { return RUNNING; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ENDING\", function() { return ENDING; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ENDED\", function() { return ENDED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"set\", function() { return set; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get\", function() { return get; });\n/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-dispatch */ \"./node_modules/d3-dispatch/src/index.js\");\n/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-timer */ \"./node_modules/d3-timer/src/index.js\");\n\n\n\nvar emptyOn = Object(d3_dispatch__WEBPACK_IMPORTED_MODULE_0__[\"dispatch\"])(\"start\", \"end\", \"cancel\", \"interrupt\");\nvar emptyTween = [];\n\nvar CREATED = 0;\nvar SCHEDULED = 1;\nvar STARTING = 2;\nvar STARTED = 3;\nvar RUNNING = 4;\nvar ENDING = 5;\nvar ENDED = 6;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(node, name, id, index, group, timing) {\n  var schedules = node.__transition;\n  if (!schedules) node.__transition = {};\n  else if (id in schedules) return;\n  create(node, id, {\n    name: name,\n    index: index, // For context during callback.\n    group: group, // For context during callback.\n    on: emptyOn,\n    tween: emptyTween,\n    time: timing.time,\n    delay: timing.delay,\n    duration: timing.duration,\n    ease: timing.ease,\n    timer: null,\n    state: CREATED\n  });\n});\n\nfunction init(node, id) {\n  var schedule = get(node, id);\n  if (schedule.state > CREATED) throw new Error(\"too late; already scheduled\");\n  return schedule;\n}\n\nfunction set(node, id) {\n  var schedule = get(node, id);\n  if (schedule.state > STARTED) throw new Error(\"too late; already running\");\n  return schedule;\n}\n\nfunction get(node, id) {\n  var schedule = node.__transition;\n  if (!schedule || !(schedule = schedule[id])) throw new Error(\"transition not found\");\n  return schedule;\n}\n\nfunction create(node, id, self) {\n  var schedules = node.__transition,\n      tween;\n\n  // Initialize the self timer when the transition is created.\n  // Note the actual delay is not known until the first callback!\n  schedules[id] = self;\n  self.timer = Object(d3_timer__WEBPACK_IMPORTED_MODULE_1__[\"timer\"])(schedule, 0, self.time);\n\n  function schedule(elapsed) {\n    self.state = SCHEDULED;\n    self.timer.restart(start, self.delay, self.time);\n\n    // If the elapsed delay is less than our first sleep, start immediately.\n    if (self.delay <= elapsed) start(elapsed - self.delay);\n  }\n\n  function start(elapsed) {\n    var i, j, n, o;\n\n    // If the state is not SCHEDULED, then we previously errored on start.\n    if (self.state !== SCHEDULED) return stop();\n\n    for (i in schedules) {\n      o = schedules[i];\n      if (o.name !== self.name) continue;\n\n      // While this element already has a starting transition during this frame,\n      // defer starting an interrupting transition until that transition has a\n      // chance to tick (and possibly end); see d3/d3-transition#54!\n      if (o.state === STARTED) return Object(d3_timer__WEBPACK_IMPORTED_MODULE_1__[\"timeout\"])(start);\n\n      // Interrupt the active transition, if any.\n      if (o.state === RUNNING) {\n        o.state = ENDED;\n        o.timer.stop();\n        o.on.call(\"interrupt\", node, node.__data__, o.index, o.group);\n        delete schedules[i];\n      }\n\n      // Cancel any pre-empted transitions.\n      else if (+i < id) {\n        o.state = ENDED;\n        o.timer.stop();\n        o.on.call(\"cancel\", node, node.__data__, o.index, o.group);\n        delete schedules[i];\n      }\n    }\n\n    // Defer the first tick to end of the current frame; see d3/d3#1576.\n    // Note the transition may be canceled after start and before the first tick!\n    // Note this must be scheduled before the start event; see d3/d3-transition#16!\n    // Assuming this is successful, subsequent callbacks go straight to tick.\n    Object(d3_timer__WEBPACK_IMPORTED_MODULE_1__[\"timeout\"])(function() {\n      if (self.state === STARTED) {\n        self.state = RUNNING;\n        self.timer.restart(tick, self.delay, self.time);\n        tick(elapsed);\n      }\n    });\n\n    // Dispatch the start event.\n    // Note this must be done before the tween are initialized.\n    self.state = STARTING;\n    self.on.call(\"start\", node, node.__data__, self.index, self.group);\n    if (self.state !== STARTING) return; // interrupted\n    self.state = STARTED;\n\n    // Initialize the tween, deleting null tween.\n    tween = new Array(n = self.tween.length);\n    for (i = 0, j = -1; i < n; ++i) {\n      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {\n        tween[++j] = o;\n      }\n    }\n    tween.length = j + 1;\n  }\n\n  function tick(elapsed) {\n    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),\n        i = -1,\n        n = tween.length;\n\n    while (++i < n) {\n      tween[i].call(node, t);\n    }\n\n    // Dispatch the end event.\n    if (self.state === ENDING) {\n      self.on.call(\"end\", node, node.__data__, self.index, self.group);\n      stop();\n    }\n  }\n\n  function stop() {\n    self.state = ENDED;\n    self.timer.stop();\n    delete schedules[id];\n    for (var i in schedules) return; // eslint-disable-line no-unused-vars\n    delete node.__transition;\n  }\n}\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-transition/src/transition/schedule.js?");

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/select.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/select.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ \"./node_modules/d3-selection/src/index.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./node_modules/d3-transition/src/transition/index.js\");\n/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule */ \"./node_modules/d3-transition/src/transition/schedule.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(select) {\n  var name = this._name,\n      id = this._id;\n\n  if (typeof select !== \"function\") select = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__[\"selector\"])(select);\n\n  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {\n    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {\n      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {\n        if (\"__data__\" in node) subnode.__data__ = node.__data__;\n        subgroup[i] = subnode;\n        Object(_schedule__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(subgroup[i], name, id, i, subgroup, Object(_schedule__WEBPACK_IMPORTED_MODULE_2__[\"get\"])(node, id));\n      }\n    }\n  }\n\n  return new _index__WEBPACK_IMPORTED_MODULE_1__[\"Transition\"](subgroups, this._parents, name, id);\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-transition/src/transition/select.js?");

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/selectAll.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/selectAll.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ \"./node_modules/d3-selection/src/index.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./node_modules/d3-transition/src/transition/index.js\");\n/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule */ \"./node_modules/d3-transition/src/transition/schedule.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(select) {\n  var name = this._name,\n      id = this._id;\n\n  if (typeof select !== \"function\") select = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__[\"selectorAll\"])(select);\n\n  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {\n    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {\n      if (node = group[i]) {\n        for (var children = select.call(node, node.__data__, i, group), child, inherit = Object(_schedule__WEBPACK_IMPORTED_MODULE_2__[\"get\"])(node, id), k = 0, l = children.length; k < l; ++k) {\n          if (child = children[k]) {\n            Object(_schedule__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(child, name, id, k, children, inherit);\n          }\n        }\n        subgroups.push(children);\n        parents.push(node);\n      }\n    }\n  }\n\n  return new _index__WEBPACK_IMPORTED_MODULE_1__[\"Transition\"](subgroups, parents, name, id);\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-transition/src/transition/selectAll.js?");

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/selection.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/selection.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ \"./node_modules/d3-selection/src/index.js\");\n\n\nvar Selection = d3_selection__WEBPACK_IMPORTED_MODULE_0__[\"selection\"].prototype.constructor;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  return new Selection(this._groups, this._parents);\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-transition/src/transition/selection.js?");

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/style.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/style.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-interpolate */ \"./node_modules/d3-interpolate/src/index.js\");\n/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection */ \"./node_modules/d3-selection/src/index.js\");\n/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule */ \"./node_modules/d3-transition/src/transition/schedule.js\");\n/* harmony import */ var _tween__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tween */ \"./node_modules/d3-transition/src/transition/tween.js\");\n/* harmony import */ var _interpolate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interpolate */ \"./node_modules/d3-transition/src/transition/interpolate.js\");\n\n\n\n\n\n\nfunction styleNull(name, interpolate) {\n  var string00,\n      string10,\n      interpolate0;\n  return function() {\n    var string0 = Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__[\"style\"])(this, name),\n        string1 = (this.style.removeProperty(name), Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__[\"style\"])(this, name));\n    return string0 === string1 ? null\n        : string0 === string00 && string1 === string10 ? interpolate0\n        : interpolate0 = interpolate(string00 = string0, string10 = string1);\n  };\n}\n\nfunction styleRemove(name) {\n  return function() {\n    this.style.removeProperty(name);\n  };\n}\n\nfunction styleConstant(name, interpolate, value1) {\n  var string00,\n      string1 = value1 + \"\",\n      interpolate0;\n  return function() {\n    var string0 = Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__[\"style\"])(this, name);\n    return string0 === string1 ? null\n        : string0 === string00 ? interpolate0\n        : interpolate0 = interpolate(string00 = string0, value1);\n  };\n}\n\nfunction styleFunction(name, interpolate, value) {\n  var string00,\n      string10,\n      interpolate0;\n  return function() {\n    var string0 = Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__[\"style\"])(this, name),\n        value1 = value(this),\n        string1 = value1 + \"\";\n    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__[\"style\"])(this, name));\n    return string0 === string1 ? null\n        : string0 === string00 && string1 === string10 ? interpolate0\n        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));\n  };\n}\n\nfunction styleMaybeRemove(id, name) {\n  var on0, on1, listener0, key = \"style.\" + name, event = \"end.\" + key, remove;\n  return function() {\n    var schedule = Object(_schedule__WEBPACK_IMPORTED_MODULE_2__[\"set\"])(this, id),\n        on = schedule.on,\n        listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;\n\n    // If this node shared a dispatch with the previous node,\n    // just assign the updated shared dispatch and we’re done!\n    // Otherwise, copy-on-write.\n    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);\n\n    schedule.on = on1;\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(name, value, priority) {\n  var i = (name += \"\") === \"transform\" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_0__[\"interpolateTransformCss\"] : _interpolate__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n  return value == null ? this\n      .styleTween(name, styleNull(name, i))\n      .on(\"end.style.\" + name, styleRemove(name))\n    : typeof value === \"function\" ? this\n      .styleTween(name, styleFunction(name, i, Object(_tween__WEBPACK_IMPORTED_MODULE_3__[\"tweenValue\"])(this, \"style.\" + name, value)))\n      .each(styleMaybeRemove(this._id, name))\n    : this\n      .styleTween(name, styleConstant(name, i, value), priority)\n      .on(\"end.style.\" + name, null);\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-transition/src/transition/style.js?");

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/styleTween.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/styleTween.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction styleInterpolate(name, i, priority) {\n  return function(t) {\n    this.style.setProperty(name, i(t), priority);\n  };\n}\n\nfunction styleTween(name, value, priority) {\n  var t, i0;\n  function tween() {\n    var i = value.apply(this, arguments);\n    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);\n    return t;\n  }\n  tween._value = value;\n  return tween;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(name, value, priority) {\n  var key = \"style.\" + (name += \"\");\n  if (arguments.length < 2) return (key = this.tween(key)) && key._value;\n  if (value == null) return this.tween(key, null);\n  if (typeof value !== \"function\") throw new Error;\n  return this.tween(key, styleTween(name, value, priority == null ? \"\" : priority));\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-transition/src/transition/styleTween.js?");

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/text.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/text.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tween__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tween */ \"./node_modules/d3-transition/src/transition/tween.js\");\n\n\nfunction textConstant(value) {\n  return function() {\n    this.textContent = value;\n  };\n}\n\nfunction textFunction(value) {\n  return function() {\n    var value1 = value(this);\n    this.textContent = value1 == null ? \"\" : value1;\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(value) {\n  return this.tween(\"text\", typeof value === \"function\"\n      ? textFunction(Object(_tween__WEBPACK_IMPORTED_MODULE_0__[\"tweenValue\"])(this, \"text\", value))\n      : textConstant(value == null ? \"\" : value + \"\"));\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-transition/src/transition/text.js?");

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/transition.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/transition.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./node_modules/d3-transition/src/transition/index.js\");\n/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule */ \"./node_modules/d3-transition/src/transition/schedule.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  var name = this._name,\n      id0 = this._id,\n      id1 = Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"newId\"])();\n\n  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {\n    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {\n      if (node = group[i]) {\n        var inherit = Object(_schedule__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(node, id0);\n        Object(_schedule__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(node, name, id1, i, group, {\n          time: inherit.time + inherit.delay + inherit.duration,\n          delay: 0,\n          duration: inherit.duration,\n          ease: inherit.ease\n        });\n      }\n    }\n  }\n\n  return new _index__WEBPACK_IMPORTED_MODULE_0__[\"Transition\"](groups, this._parents, name, id1);\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-transition/src/transition/transition.js?");

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/tween.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/tween.js ***!
  \************************************************************/
/*! exports provided: default, tweenValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tweenValue\", function() { return tweenValue; });\n/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule */ \"./node_modules/d3-transition/src/transition/schedule.js\");\n\n\nfunction tweenRemove(id, name) {\n  var tween0, tween1;\n  return function() {\n    var schedule = Object(_schedule__WEBPACK_IMPORTED_MODULE_0__[\"set\"])(this, id),\n        tween = schedule.tween;\n\n    // If this node shared tween with the previous node,\n    // just assign the updated shared tween and we’re done!\n    // Otherwise, copy-on-write.\n    if (tween !== tween0) {\n      tween1 = tween0 = tween;\n      for (var i = 0, n = tween1.length; i < n; ++i) {\n        if (tween1[i].name === name) {\n          tween1 = tween1.slice();\n          tween1.splice(i, 1);\n          break;\n        }\n      }\n    }\n\n    schedule.tween = tween1;\n  };\n}\n\nfunction tweenFunction(id, name, value) {\n  var tween0, tween1;\n  if (typeof value !== \"function\") throw new Error;\n  return function() {\n    var schedule = Object(_schedule__WEBPACK_IMPORTED_MODULE_0__[\"set\"])(this, id),\n        tween = schedule.tween;\n\n    // If this node shared tween with the previous node,\n    // just assign the updated shared tween and we’re done!\n    // Otherwise, copy-on-write.\n    if (tween !== tween0) {\n      tween1 = (tween0 = tween).slice();\n      for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {\n        if (tween1[i].name === name) {\n          tween1[i] = t;\n          break;\n        }\n      }\n      if (i === n) tween1.push(t);\n    }\n\n    schedule.tween = tween1;\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(name, value) {\n  var id = this._id;\n\n  name += \"\";\n\n  if (arguments.length < 2) {\n    var tween = Object(_schedule__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(this.node(), id).tween;\n    for (var i = 0, n = tween.length, t; i < n; ++i) {\n      if ((t = tween[i]).name === name) {\n        return t.value;\n      }\n    }\n    return null;\n  }\n\n  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));\n});\n\nfunction tweenValue(transition, name, value) {\n  var id = transition._id;\n\n  transition.each(function() {\n    var schedule = Object(_schedule__WEBPACK_IMPORTED_MODULE_0__[\"set\"])(this, id);\n    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);\n  });\n\n  return function(node) {\n    return Object(_schedule__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(node, id).value[name];\n  };\n}\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-transition/src/transition/tween.js?");

/***/ }),

/***/ "./node_modules/d3-zoom/src/constant.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-zoom/src/constant.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(x) {\n  return function() {\n    return x;\n  };\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-zoom/src/constant.js?");

/***/ }),

/***/ "./node_modules/d3-zoom/src/event.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-zoom/src/event.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ZoomEvent; });\nfunction ZoomEvent(target, type, transform) {\n  this.target = target;\n  this.type = type;\n  this.transform = transform;\n}\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-zoom/src/event.js?");

/***/ }),

/***/ "./node_modules/d3-zoom/src/index.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-zoom/src/index.js ***!
  \*******************************************/
/*! exports provided: zoom, zoomTransform, zoomIdentity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _zoom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zoom */ \"./node_modules/d3-zoom/src/zoom.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"zoom\", function() { return _zoom__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transform */ \"./node_modules/d3-zoom/src/transform.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"zoomTransform\", function() { return _transform__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"zoomIdentity\", function() { return _transform__WEBPACK_IMPORTED_MODULE_1__[\"identity\"]; });\n\n\n\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-zoom/src/index.js?");

/***/ }),

/***/ "./node_modules/d3-zoom/src/noevent.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-zoom/src/noevent.js ***!
  \*********************************************/
/*! exports provided: nopropagation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nopropagation\", function() { return nopropagation; });\n/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ \"./node_modules/d3-selection/src/index.js\");\n\n\nfunction nopropagation() {\n  d3_selection__WEBPACK_IMPORTED_MODULE_0__[\"event\"].stopImmediatePropagation();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  d3_selection__WEBPACK_IMPORTED_MODULE_0__[\"event\"].preventDefault();\n  d3_selection__WEBPACK_IMPORTED_MODULE_0__[\"event\"].stopImmediatePropagation();\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-zoom/src/noevent.js?");

/***/ }),

/***/ "./node_modules/d3-zoom/src/transform.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-zoom/src/transform.js ***!
  \***********************************************/
/*! exports provided: Transform, identity, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Transform\", function() { return Transform; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"identity\", function() { return identity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return transform; });\nfunction Transform(k, x, y) {\n  this.k = k;\n  this.x = x;\n  this.y = y;\n}\n\nTransform.prototype = {\n  constructor: Transform,\n  scale: function(k) {\n    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);\n  },\n  translate: function(x, y) {\n    return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);\n  },\n  apply: function(point) {\n    return [point[0] * this.k + this.x, point[1] * this.k + this.y];\n  },\n  applyX: function(x) {\n    return x * this.k + this.x;\n  },\n  applyY: function(y) {\n    return y * this.k + this.y;\n  },\n  invert: function(location) {\n    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];\n  },\n  invertX: function(x) {\n    return (x - this.x) / this.k;\n  },\n  invertY: function(y) {\n    return (y - this.y) / this.k;\n  },\n  rescaleX: function(x) {\n    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));\n  },\n  rescaleY: function(y) {\n    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));\n  },\n  toString: function() {\n    return \"translate(\" + this.x + \",\" + this.y + \") scale(\" + this.k + \")\";\n  }\n};\n\nvar identity = new Transform(1, 0, 0);\n\ntransform.prototype = Transform.prototype;\n\nfunction transform(node) {\n  return node.__zoom || identity;\n}\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-zoom/src/transform.js?");

/***/ }),

/***/ "./node_modules/d3-zoom/src/zoom.js":
/*!******************************************!*\
  !*** ./node_modules/d3-zoom/src/zoom.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-dispatch */ \"./node_modules/d3-dispatch/src/index.js\");\n/* harmony import */ var d3_drag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-drag */ \"./node_modules/d3-drag/src/index.js\");\n/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-interpolate */ \"./node_modules/d3-interpolate/src/index.js\");\n/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-selection */ \"./node_modules/d3-selection/src/index.js\");\n/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-transition */ \"./node_modules/d3-transition/src/index.js\");\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constant */ \"./node_modules/d3-zoom/src/constant.js\");\n/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event */ \"./node_modules/d3-zoom/src/event.js\");\n/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transform */ \"./node_modules/d3-zoom/src/transform.js\");\n/* harmony import */ var _noevent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./noevent */ \"./node_modules/d3-zoom/src/noevent.js\");\n\n\n\n\n\n\n\n\n\n\n// Ignore right-click, since that should open the context menu.\nfunction defaultFilter() {\n  return !d3_selection__WEBPACK_IMPORTED_MODULE_3__[\"event\"].button;\n}\n\nfunction defaultExtent() {\n  var e = this, w, h;\n  if (e instanceof SVGElement) {\n    e = e.ownerSVGElement || e;\n    w = e.width.baseVal.value;\n    h = e.height.baseVal.value;\n  } else {\n    w = e.clientWidth;\n    h = e.clientHeight;\n  }\n  return [[0, 0], [w, h]];\n}\n\nfunction defaultTransform() {\n  return this.__zoom || _transform__WEBPACK_IMPORTED_MODULE_7__[\"identity\"];\n}\n\nfunction defaultWheelDelta() {\n  return -d3_selection__WEBPACK_IMPORTED_MODULE_3__[\"event\"].deltaY * (d3_selection__WEBPACK_IMPORTED_MODULE_3__[\"event\"].deltaMode ? 120 : 1) / 500;\n}\n\nfunction defaultTouchable() {\n  return \"ontouchstart\" in this;\n}\n\nfunction defaultConstrain(transform, extent, translateExtent) {\n  var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0],\n      dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0],\n      dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1],\n      dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];\n  return transform.translate(\n    dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),\n    dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)\n  );\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  var filter = defaultFilter,\n      extent = defaultExtent,\n      constrain = defaultConstrain,\n      wheelDelta = defaultWheelDelta,\n      touchable = defaultTouchable,\n      scaleExtent = [0, Infinity],\n      translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]],\n      duration = 250,\n      interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_2__[\"interpolateZoom\"],\n      gestures = [],\n      listeners = Object(d3_dispatch__WEBPACK_IMPORTED_MODULE_0__[\"dispatch\"])(\"start\", \"zoom\", \"end\"),\n      touchstarting,\n      touchending,\n      touchDelay = 500,\n      wheelDelay = 150,\n      clickDistance2 = 0;\n\n  function zoom(selection) {\n    selection\n        .property(\"__zoom\", defaultTransform)\n        .on(\"wheel.zoom\", wheeled)\n        .on(\"mousedown.zoom\", mousedowned)\n        .on(\"dblclick.zoom\", dblclicked)\n      .filter(touchable)\n        .on(\"touchstart.zoom\", touchstarted)\n        .on(\"touchmove.zoom\", touchmoved)\n        .on(\"touchend.zoom touchcancel.zoom\", touchended)\n        .style(\"touch-action\", \"none\")\n        .style(\"-webkit-tap-highlight-color\", \"rgba(0,0,0,0)\");\n  }\n\n  zoom.transform = function(collection, transform) {\n    var selection = collection.selection ? collection.selection() : collection;\n    selection.property(\"__zoom\", defaultTransform);\n    if (collection !== selection) {\n      schedule(collection, transform);\n    } else {\n      selection.interrupt().each(function() {\n        gesture(this, arguments)\n            .start()\n            .zoom(null, typeof transform === \"function\" ? transform.apply(this, arguments) : transform)\n            .end();\n      });\n    }\n  };\n\n  zoom.scaleBy = function(selection, k) {\n    zoom.scaleTo(selection, function() {\n      var k0 = this.__zoom.k,\n          k1 = typeof k === \"function\" ? k.apply(this, arguments) : k;\n      return k0 * k1;\n    });\n  };\n\n  zoom.scaleTo = function(selection, k) {\n    zoom.transform(selection, function() {\n      var e = extent.apply(this, arguments),\n          t0 = this.__zoom,\n          p0 = centroid(e),\n          p1 = t0.invert(p0),\n          k1 = typeof k === \"function\" ? k.apply(this, arguments) : k;\n      return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);\n    });\n  };\n\n  zoom.translateBy = function(selection, x, y) {\n    zoom.transform(selection, function() {\n      return constrain(this.__zoom.translate(\n        typeof x === \"function\" ? x.apply(this, arguments) : x,\n        typeof y === \"function\" ? y.apply(this, arguments) : y\n      ), extent.apply(this, arguments), translateExtent);\n    });\n  };\n\n  zoom.translateTo = function(selection, x, y) {\n    zoom.transform(selection, function() {\n      var e = extent.apply(this, arguments),\n          t = this.__zoom,\n          p = centroid(e);\n      return constrain(_transform__WEBPACK_IMPORTED_MODULE_7__[\"identity\"].translate(p[0], p[1]).scale(t.k).translate(\n        typeof x === \"function\" ? -x.apply(this, arguments) : -x,\n        typeof y === \"function\" ? -y.apply(this, arguments) : -y\n      ), e, translateExtent);\n    });\n  };\n\n  function scale(transform, k) {\n    k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));\n    return k === transform.k ? transform : new _transform__WEBPACK_IMPORTED_MODULE_7__[\"Transform\"](k, transform.x, transform.y);\n  }\n\n  function translate(transform, p0, p1) {\n    var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;\n    return x === transform.x && y === transform.y ? transform : new _transform__WEBPACK_IMPORTED_MODULE_7__[\"Transform\"](transform.k, x, y);\n  }\n\n  function centroid(extent) {\n    return [(+extent[0][0] + +extent[1][0]) / 2, (+extent[0][1] + +extent[1][1]) / 2];\n  }\n\n  function schedule(transition, transform, center) {\n    transition\n        .on(\"start.zoom\", function() { gesture(this, arguments).start(); })\n        .on(\"interrupt.zoom end.zoom\", function() { gesture(this, arguments).end(); })\n        .tween(\"zoom\", function() {\n          var that = this,\n              args = arguments,\n              g = gesture(that, args),\n              e = extent.apply(that, args),\n              p = center || centroid(e),\n              w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]),\n              a = that.__zoom,\n              b = typeof transform === \"function\" ? transform.apply(that, args) : transform,\n              i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));\n          return function(t) {\n            if (t === 1) t = b; // Avoid rounding error on end.\n            else { var l = i(t), k = w / l[2]; t = new _transform__WEBPACK_IMPORTED_MODULE_7__[\"Transform\"](k, p[0] - l[0] * k, p[1] - l[1] * k); }\n            g.zoom(null, t);\n          };\n        });\n  }\n\n  function gesture(that, args) {\n    for (var i = 0, n = gestures.length, g; i < n; ++i) {\n      if ((g = gestures[i]).that === that) {\n        return g;\n      }\n    }\n    return new Gesture(that, args);\n  }\n\n  function Gesture(that, args) {\n    this.that = that;\n    this.args = args;\n    this.index = -1;\n    this.active = 0;\n    this.extent = extent.apply(that, args);\n  }\n\n  Gesture.prototype = {\n    start: function() {\n      if (++this.active === 1) {\n        this.index = gestures.push(this) - 1;\n        this.emit(\"start\");\n      }\n      return this;\n    },\n    zoom: function(key, transform) {\n      if (this.mouse && key !== \"mouse\") this.mouse[1] = transform.invert(this.mouse[0]);\n      if (this.touch0 && key !== \"touch\") this.touch0[1] = transform.invert(this.touch0[0]);\n      if (this.touch1 && key !== \"touch\") this.touch1[1] = transform.invert(this.touch1[0]);\n      this.that.__zoom = transform;\n      this.emit(\"zoom\");\n      return this;\n    },\n    end: function() {\n      if (--this.active === 0) {\n        gestures.splice(this.index, 1);\n        this.index = -1;\n        this.emit(\"end\");\n      }\n      return this;\n    },\n    emit: function(type) {\n      Object(d3_selection__WEBPACK_IMPORTED_MODULE_3__[\"customEvent\"])(new _event__WEBPACK_IMPORTED_MODULE_6__[\"default\"](zoom, type, this.that.__zoom), listeners.apply, listeners, [type, this.that, this.args]);\n    }\n  };\n\n  function wheeled() {\n    if (!filter.apply(this, arguments)) return;\n    var g = gesture(this, arguments),\n        t = this.__zoom,\n        k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))),\n        p = Object(d3_selection__WEBPACK_IMPORTED_MODULE_3__[\"mouse\"])(this);\n\n    // If the mouse is in the same location as before, reuse it.\n    // If there were recent wheel events, reset the wheel idle timeout.\n    if (g.wheel) {\n      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {\n        g.mouse[1] = t.invert(g.mouse[0] = p);\n      }\n      clearTimeout(g.wheel);\n    }\n\n    // If this wheel event won’t trigger a transform change, ignore it.\n    else if (t.k === k) return;\n\n    // Otherwise, capture the mouse point and location at the start.\n    else {\n      g.mouse = [p, t.invert(p)];\n      Object(d3_transition__WEBPACK_IMPORTED_MODULE_4__[\"interrupt\"])(this);\n      g.start();\n    }\n\n    Object(_noevent__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n    g.wheel = setTimeout(wheelidled, wheelDelay);\n    g.zoom(\"mouse\", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));\n\n    function wheelidled() {\n      g.wheel = null;\n      g.end();\n    }\n  }\n\n  function mousedowned() {\n    if (touchending || !filter.apply(this, arguments)) return;\n    var g = gesture(this, arguments),\n        v = Object(d3_selection__WEBPACK_IMPORTED_MODULE_3__[\"select\"])(d3_selection__WEBPACK_IMPORTED_MODULE_3__[\"event\"].view).on(\"mousemove.zoom\", mousemoved, true).on(\"mouseup.zoom\", mouseupped, true),\n        p = Object(d3_selection__WEBPACK_IMPORTED_MODULE_3__[\"mouse\"])(this),\n        x0 = d3_selection__WEBPACK_IMPORTED_MODULE_3__[\"event\"].clientX,\n        y0 = d3_selection__WEBPACK_IMPORTED_MODULE_3__[\"event\"].clientY;\n\n    Object(d3_drag__WEBPACK_IMPORTED_MODULE_1__[\"dragDisable\"])(d3_selection__WEBPACK_IMPORTED_MODULE_3__[\"event\"].view);\n    Object(_noevent__WEBPACK_IMPORTED_MODULE_8__[\"nopropagation\"])();\n    g.mouse = [p, this.__zoom.invert(p)];\n    Object(d3_transition__WEBPACK_IMPORTED_MODULE_4__[\"interrupt\"])(this);\n    g.start();\n\n    function mousemoved() {\n      Object(_noevent__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n      if (!g.moved) {\n        var dx = d3_selection__WEBPACK_IMPORTED_MODULE_3__[\"event\"].clientX - x0, dy = d3_selection__WEBPACK_IMPORTED_MODULE_3__[\"event\"].clientY - y0;\n        g.moved = dx * dx + dy * dy > clickDistance2;\n      }\n      g.zoom(\"mouse\", constrain(translate(g.that.__zoom, g.mouse[0] = Object(d3_selection__WEBPACK_IMPORTED_MODULE_3__[\"mouse\"])(g.that), g.mouse[1]), g.extent, translateExtent));\n    }\n\n    function mouseupped() {\n      v.on(\"mousemove.zoom mouseup.zoom\", null);\n      Object(d3_drag__WEBPACK_IMPORTED_MODULE_1__[\"dragEnable\"])(d3_selection__WEBPACK_IMPORTED_MODULE_3__[\"event\"].view, g.moved);\n      Object(_noevent__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n      g.end();\n    }\n  }\n\n  function dblclicked() {\n    if (!filter.apply(this, arguments)) return;\n    var t0 = this.__zoom,\n        p0 = Object(d3_selection__WEBPACK_IMPORTED_MODULE_3__[\"mouse\"])(this),\n        p1 = t0.invert(p0),\n        k1 = t0.k * (d3_selection__WEBPACK_IMPORTED_MODULE_3__[\"event\"].shiftKey ? 0.5 : 2),\n        t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, arguments), translateExtent);\n\n    Object(_noevent__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n    if (duration > 0) Object(d3_selection__WEBPACK_IMPORTED_MODULE_3__[\"select\"])(this).transition().duration(duration).call(schedule, t1, p0);\n    else Object(d3_selection__WEBPACK_IMPORTED_MODULE_3__[\"select\"])(this).call(zoom.transform, t1);\n  }\n\n  function touchstarted() {\n    if (!filter.apply(this, arguments)) return;\n    var g = gesture(this, arguments),\n        touches = d3_selection__WEBPACK_IMPORTED_MODULE_3__[\"event\"].changedTouches,\n        started,\n        n = touches.length, i, t, p;\n\n    Object(_noevent__WEBPACK_IMPORTED_MODULE_8__[\"nopropagation\"])();\n    for (i = 0; i < n; ++i) {\n      t = touches[i], p = Object(d3_selection__WEBPACK_IMPORTED_MODULE_3__[\"touch\"])(this, touches, t.identifier);\n      p = [p, this.__zoom.invert(p), t.identifier];\n      if (!g.touch0) g.touch0 = p, started = true;\n      else if (!g.touch1) g.touch1 = p;\n    }\n\n    // If this is a dbltap, reroute to the (optional) dblclick.zoom handler.\n    if (touchstarting) {\n      touchstarting = clearTimeout(touchstarting);\n      if (!g.touch1) {\n        g.end();\n        p = Object(d3_selection__WEBPACK_IMPORTED_MODULE_3__[\"select\"])(this).on(\"dblclick.zoom\");\n        if (p) p.apply(this, arguments);\n        return;\n      }\n    }\n\n    if (started) {\n      touchstarting = setTimeout(function() { touchstarting = null; }, touchDelay);\n      Object(d3_transition__WEBPACK_IMPORTED_MODULE_4__[\"interrupt\"])(this);\n      g.start();\n    }\n  }\n\n  function touchmoved() {\n    var g = gesture(this, arguments),\n        touches = d3_selection__WEBPACK_IMPORTED_MODULE_3__[\"event\"].changedTouches,\n        n = touches.length, i, t, p, l;\n\n    Object(_noevent__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n    if (touchstarting) touchstarting = clearTimeout(touchstarting);\n    for (i = 0; i < n; ++i) {\n      t = touches[i], p = Object(d3_selection__WEBPACK_IMPORTED_MODULE_3__[\"touch\"])(this, touches, t.identifier);\n      if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;\n      else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;\n    }\n    t = g.that.__zoom;\n    if (g.touch1) {\n      var p0 = g.touch0[0], l0 = g.touch0[1],\n          p1 = g.touch1[0], l1 = g.touch1[1],\n          dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp,\n          dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;\n      t = scale(t, Math.sqrt(dp / dl));\n      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];\n      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];\n    }\n    else if (g.touch0) p = g.touch0[0], l = g.touch0[1];\n    else return;\n    g.zoom(\"touch\", constrain(translate(t, p, l), g.extent, translateExtent));\n  }\n\n  function touchended() {\n    var g = gesture(this, arguments),\n        touches = d3_selection__WEBPACK_IMPORTED_MODULE_3__[\"event\"].changedTouches,\n        n = touches.length, i, t;\n\n    Object(_noevent__WEBPACK_IMPORTED_MODULE_8__[\"nopropagation\"])();\n    if (touchending) clearTimeout(touchending);\n    touchending = setTimeout(function() { touchending = null; }, touchDelay);\n    for (i = 0; i < n; ++i) {\n      t = touches[i];\n      if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;\n      else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;\n    }\n    if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;\n    if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);\n    else g.end();\n  }\n\n  zoom.wheelDelta = function(_) {\n    return arguments.length ? (wheelDelta = typeof _ === \"function\" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(+_), zoom) : wheelDelta;\n  };\n\n  zoom.filter = function(_) {\n    return arguments.length ? (filter = typeof _ === \"function\" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(!!_), zoom) : filter;\n  };\n\n  zoom.touchable = function(_) {\n    return arguments.length ? (touchable = typeof _ === \"function\" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(!!_), zoom) : touchable;\n  };\n\n  zoom.extent = function(_) {\n    return arguments.length ? (extent = typeof _ === \"function\" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_5__[\"default\"])([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;\n  };\n\n  zoom.scaleExtent = function(_) {\n    return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];\n  };\n\n  zoom.translateExtent = function(_) {\n    return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];\n  };\n\n  zoom.constrain = function(_) {\n    return arguments.length ? (constrain = _, zoom) : constrain;\n  };\n\n  zoom.duration = function(_) {\n    return arguments.length ? (duration = +_, zoom) : duration;\n  };\n\n  zoom.interpolate = function(_) {\n    return arguments.length ? (interpolate = _, zoom) : interpolate;\n  };\n\n  zoom.on = function() {\n    var value = listeners.on.apply(listeners, arguments);\n    return value === listeners ? zoom : value;\n  };\n\n  zoom.clickDistance = function(_) {\n    return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);\n  };\n\n  return zoom;\n});\n\n\n//# sourceURL=webpack://Treeviz/./node_modules/d3-zoom/src/zoom.js?");

/***/ }),

/***/ "./src/d3.ts":
/*!*******************!*\
  !*** ./src/d3.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar d3_hierarchy_1 = __webpack_require__(/*! d3-hierarchy */ \"./node_modules/d3-hierarchy/src/index.js\");\nvar d3_selection_1 = __webpack_require__(/*! d3-selection */ \"./node_modules/d3-selection/src/index.js\");\nvar d3_zoom_1 = __webpack_require__(/*! d3-zoom */ \"./node_modules/d3-zoom/src/index.js\");\nexports.default = {\n    hierarchy: d3_hierarchy_1.hierarchy,\n    stratify: d3_hierarchy_1.stratify,\n    tree: d3_hierarchy_1.tree,\n    treemap: d3_hierarchy_1.treemap,\n    select: d3_selection_1.select,\n    selectAll: d3_selection_1.selectAll,\n    event: d3_selection_1.event,\n    zoom: d3_zoom_1.zoom,\n};\n\n\n//# sourceURL=webpack://Treeviz/./src/d3.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar initializeSVG_1 = __webpack_require__(/*! ./initializeSVG */ \"./src/initializeSVG.ts\");\nvar link_enter_1 = __webpack_require__(/*! ./links/link-enter */ \"./src/links/link-enter.ts\");\nvar link_exit_1 = __webpack_require__(/*! ./links/link-exit */ \"./src/links/link-exit.ts\");\nvar link_update_1 = __webpack_require__(/*! ./links/link-update */ \"./src/links/link-update.ts\");\nvar node_enter_1 = __webpack_require__(/*! ./nodes/node-enter */ \"./src/nodes/node-enter.ts\");\nvar node_exit_1 = __webpack_require__(/*! ./nodes/node-exit */ \"./src/nodes/node-exit.ts\");\nvar node_update_1 = __webpack_require__(/*! ./nodes/node-update */ \"./src/nodes/node-update.ts\");\nvar prepare_data_1 = __webpack_require__(/*! ./prepare-data */ \"./src/prepare-data.ts\");\nfunction create(userSettings) {\n    var defaultSettings = {\n        htmlId: \"\",\n        idKey: \"\",\n        relationnalField: \"father\",\n        hasFlatData: true,\n        nodeWidth: 160,\n        nodeHeight: 100,\n        mainAxisNodeSpacing: 300,\n        renderNode: function () { return \"Node\"; },\n        linkColor: function () { return \"#ffcc80\"; },\n        linkWidth: function () { return 10; },\n        linkShape: \"quadraticBeziers\",\n        isHorizontal: true,\n        hasPanAndZoom: false,\n        duration: 600,\n        onNodeClick: function () { return undefined; },\n        onNodeMouseEnter: function () { return undefined; },\n        onNodeMouseLeave: function () { return undefined; },\n        marginBottom: 0,\n        marginLeft: 0,\n        marginRight: 0,\n        marginTop: 0,\n        secondaryAxisNodeSpacing: 1.25,\n    };\n    var settings = __assign({}, defaultSettings, userSettings);\n    var oldNodes = [];\n    function draw(svg, computedTree) {\n        var nodes = computedTree.descendants();\n        var links = computedTree.descendants().slice(1);\n        var mainAxisNodeSpacing = settings.mainAxisNodeSpacing;\n        if (mainAxisNodeSpacing !== \"auto\") {\n            // Normalize for fixed-depth.\n            nodes.forEach(function (d) {\n                d.y = d.depth * settings.nodeWidth * mainAxisNodeSpacing;\n            });\n        }\n        nodes.forEach(function (currentNode) {\n            var currentNodeOldPosition = oldNodes.find(function (node) { return node.id === currentNode.id; });\n            currentNode.x0 = currentNodeOldPosition\n                ? currentNodeOldPosition.x0\n                : currentNode.x;\n            currentNode.y0 = currentNodeOldPosition\n                ? currentNodeOldPosition.y0\n                : currentNode.y;\n        });\n        // ****************** Nodes section ***************************\n        var node = svg.selectAll(\"g.node\").data(nodes, function (d) {\n            return d[settings.idKey];\n        });\n        var nodeEnter = node_enter_1.drawNodeEnter(node, settings, nodes, oldNodes);\n        node_update_1.drawNodeUpdate(nodeEnter, node, settings);\n        node_exit_1.drawNodeExit(node, settings, nodes, oldNodes);\n        // ****************** links section ***************************\n        var link = svg.selectAll(\"path.link\").data(links, function (d) {\n            return d.id;\n        });\n        var linkEnter = link_enter_1.drawLinkEnter(link, settings, nodes, oldNodes);\n        link_update_1.drawLinkUpdate(linkEnter, link, settings);\n        link_exit_1.drawLinkExit(link, settings, nodes, oldNodes);\n        oldNodes = nodes.slice();\n    }\n    function refresh(data, newSettings) {\n        if (newSettings) {\n            settings = __assign({}, settings, newSettings);\n        }\n        var nestedData = prepare_data_1.generateNestedData(data, settings);\n        var treemap = prepare_data_1.generateBasicTreemap(settings);\n        var computedTree = treemap(nestedData); // mutation\n        // @ts-ignore\n        draw(svg, computedTree);\n    }\n    function clean(keepConfig) {\n        var myNode = keepConfig\n            ? document.querySelector(\"#\" + settings.htmlId + \" svg g\")\n            : document.querySelector(\"#\" + settings.htmlId);\n        if (myNode) {\n            while (myNode.firstChild) {\n                myNode.removeChild(myNode.firstChild);\n            }\n        }\n        oldNodes = [];\n    }\n    var treeObject = { refresh: refresh, clean: clean };\n    var svg = initializeSVG_1.initiliazeSVG(settings);\n    return treeObject;\n}\nexports.create = create;\n\n\n//# sourceURL=webpack://Treeviz/./src/index.ts?");

/***/ }),

/***/ "./src/initializeSVG.ts":
/*!******************************!*\
  !*** ./src/initializeSVG.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar _this = this;\nObject.defineProperty(exports, \"__esModule\", { value: true });\n// Got to import d3 two times because of an issue with Webpack/Babel with d3.event\nvar d3 = __importStar(__webpack_require__(/*! d3-selection */ \"./node_modules/d3-selection/src/index.js\"));\nvar d3_1 = __importDefault(__webpack_require__(/*! ./d3 */ \"./src/d3.ts\"));\nvar utils_1 = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\nexports.initiliazeSVG = function (treeConfig) {\n    var htmlId = treeConfig.htmlId, isHorizontal = treeConfig.isHorizontal, hasPanAndZoom = treeConfig.hasPanAndZoom, mainAxisNodeSpacing = treeConfig.mainAxisNodeSpacing, nodeHeight = treeConfig.nodeHeight, nodeWidth = treeConfig.nodeWidth, marginBottom = treeConfig.marginBottom, marginLeft = treeConfig.marginLeft, marginRight = treeConfig.marginRight, marginTop = treeConfig.marginTop;\n    var margin = {\n        top: marginTop,\n        right: marginRight,\n        bottom: marginBottom,\n        left: marginLeft,\n    };\n    var _a = utils_1.getAreaSize(treeConfig.htmlId), areaHeight = _a.areaHeight, areaWidth = _a.areaWidth;\n    var width = areaWidth - margin.left - margin.right;\n    var height = areaHeight - margin.top - margin.bottom;\n    var zoom = d3_1.default\n        .zoom()\n        .scaleExtent([0.2, 20])\n        .on(\"zoom\", function () {\n        svg.attr(\"transform\", function () {\n            return mainAxisNodeSpacing === \"auto\"\n                ? \"translate(\" +\n                    (margin.left + d3.event.transform.x) +\n                    \",\" +\n                    (margin.top + d3.event.transform.y) +\n                    \")\" +\n                    \"scale(\" +\n                    d3.event.transform.k +\n                    \")\"\n                : isHorizontal\n                    ? \"translate(\" +\n                        (margin.left + d3.event.transform.x) +\n                        \",\" +\n                        (margin.top + height / 2 - nodeHeight / 2 + d3.event.transform.y) +\n                        \")\" +\n                        \"scale(\" +\n                        d3.event.transform.k +\n                        \")\"\n                    : \"translate(\" +\n                        (margin.left + width / 2 - nodeWidth / 2 + d3.event.transform.x) +\n                        \",\" +\n                        (margin.top + d3.event.transform.y) +\n                        \")\" +\n                        \"scale(\" +\n                        d3.event.transform.k +\n                        \")\";\n        });\n    });\n    var svg = d3\n        .select(\"#\" + htmlId)\n        .append(\"svg\")\n        .attr(\"width\", areaWidth)\n        .attr(\"height\", areaHeight)\n        // @ts-ignore\n        .call(hasPanAndZoom ? zoom : function () { return _this; })\n        .append(\"g\")\n        .attr(\"transform\", mainAxisNodeSpacing === \"auto\"\n        ? \"translate(0,0)\"\n        : isHorizontal\n            ? \"translate(\" +\n                margin.left +\n                \",\" +\n                (margin.top + height / 2 - nodeHeight / 2) +\n                \")\"\n            : \"translate(\" +\n                (margin.left + width / 2 - nodeWidth / 2) +\n                \",\" +\n                margin.top +\n                \")\");\n    return svg;\n};\n\n\n//# sourceURL=webpack://Treeviz/./src/initializeSVG.ts?");

/***/ }),

/***/ "./src/links/draw-links.ts":
/*!*********************************!*\
  !*** ./src/links/draw-links.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.generateLinkLayout = function (s, d, treeConfig) {\n    var isHorizontal = treeConfig.isHorizontal, nodeHeight = treeConfig.nodeHeight, nodeWidth = treeConfig.nodeWidth, linkShape = treeConfig.linkShape;\n    if (linkShape === \"orthogonal\") {\n        if (isHorizontal) {\n            return \"M \" + s.y + \" \" + (s.x + nodeHeight / 2) + \"\\n        L \" + (s.y + d.y + nodeWidth) / 2 + \" \" + (s.x + nodeHeight / 2) + \",\\n        L  \" + (s.y + d.y + nodeWidth) / 2 + \" \" + (d.x + nodeHeight / 2) + \",\\n          \" + (d.y + nodeWidth) + \" \" + (d.x + nodeHeight / 2);\n        }\n        else {\n            return \"M \" + (s.x + nodeWidth / 2) + \" \" + s.y + \"\\n        L \" + (s.x + nodeWidth / 2) + \" \" + (s.y + d.y + nodeHeight) / 2 + \",\\n        L  \" + (d.x + nodeWidth / 2) + \" \" + (s.y + d.y + nodeHeight) / 2 + \",\\n          \" + (d.x + nodeWidth / 2) + \" \" + (d.y + nodeHeight) + \" \";\n        }\n    }\n    else {\n        if (isHorizontal) {\n            return \"M \" + s.y + \" \" + (s.x + nodeHeight / 2) + \"\\n        C \" + (s.y + d.y + nodeWidth) / 2 + \" \" + (s.x + nodeHeight / 2) + \",\\n          \" + (s.y + d.y + nodeWidth) / 2 + \" \" + (d.x + nodeHeight / 2) + \",\\n          \" + (d.y + nodeWidth) + \" \" + (d.x + nodeHeight / 2);\n        }\n        else {\n            return \"M \" + (s.x + nodeWidth / 2) + \" \" + s.y + \"\\n        C \" + (s.x + nodeWidth / 2) + \" \" + (s.y + d.y + nodeHeight) / 2 + \",\\n          \" + (d.x + nodeWidth / 2) + \" \" + (s.y + d.y + nodeHeight) / 2 + \",\\n          \" + (d.x + nodeWidth / 2) + \" \" + (d.y + nodeHeight) + \" \";\n        }\n    }\n};\n\n\n//# sourceURL=webpack://Treeviz/./src/links/draw-links.ts?");

/***/ }),

/***/ "./src/links/link-enter.ts":
/*!*********************************!*\
  !*** ./src/links/link-enter.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar draw_links_1 = __webpack_require__(/*! ./draw-links */ \"./src/links/draw-links.ts\");\nvar utils_1 = __webpack_require__(/*! ../utils */ \"./src/utils.ts\");\nexports.drawLinkEnter = function (link, settings, nodes, oldNodes) {\n    return link\n        .enter()\n        .insert(\"path\", \"g\")\n        .attr(\"class\", \"link\")\n        .attr(\"d\", function (d) {\n        var firstDisplayedParentNode = utils_1.getFirstDisplayedAncestor(nodes, oldNodes, d.id);\n        var o = { x: firstDisplayedParentNode.x0, y: firstDisplayedParentNode.y0 };\n        return draw_links_1.generateLinkLayout(o, o, settings);\n    })\n        .attr(\"fill\", \"none\")\n        .attr(\"stroke-width\", function (_a) {\n        var data = _a.data;\n        return settings.linkWidth(data);\n    })\n        .attr(\"stroke\", function (_a) {\n        var data = _a.data;\n        return settings.linkColor(data);\n    });\n};\n\n\n//# sourceURL=webpack://Treeviz/./src/links/link-enter.ts?");

/***/ }),

/***/ "./src/links/link-exit.ts":
/*!********************************!*\
  !*** ./src/links/link-exit.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar draw_links_1 = __webpack_require__(/*! ./draw-links */ \"./src/links/draw-links.ts\");\nvar utils_1 = __webpack_require__(/*! ../utils */ \"./src/utils.ts\");\nexports.drawLinkExit = function (link, settings, nodes, oldNodes) {\n    link\n        .exit()\n        .transition()\n        .duration(settings.duration)\n        .style(\"opacity\", 0)\n        .attr(\"d\", function (d) {\n        var firstDisplayedParentNode = utils_1.getFirstDisplayedAncestor(oldNodes, nodes, d.id);\n        var o = { x: firstDisplayedParentNode.x0, y: firstDisplayedParentNode.y0 };\n        return draw_links_1.generateLinkLayout(o, o, settings);\n    })\n        .remove();\n};\n\n\n//# sourceURL=webpack://Treeviz/./src/links/link-exit.ts?");

/***/ }),

/***/ "./src/links/link-update.ts":
/*!**********************************!*\
  !*** ./src/links/link-update.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar draw_links_1 = __webpack_require__(/*! ./draw-links */ \"./src/links/draw-links.ts\");\nexports.drawLinkUpdate = function (linkEnter, link, settings) {\n    // @ts-ignore\n    var linkUpdate = linkEnter.merge(link);\n    linkUpdate\n        .transition()\n        .duration(settings.duration)\n        .attr(\"d\", function (d) {\n        return draw_links_1.generateLinkLayout(d, d.parent, settings);\n    });\n};\n\n\n//# sourceURL=webpack://Treeviz/./src/links/link-update.ts?");

/***/ }),

/***/ "./src/nodes/node-enter.ts":
/*!*********************************!*\
  !*** ./src/nodes/node-enter.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar utils_1 = __webpack_require__(/*! ../utils */ \"./src/utils.ts\");\nexports.drawNodeEnter = function (node, settings, nodes, oldNodes) {\n    var nodeEnter = node\n        .enter()\n        .append(\"g\")\n        .attr(\"class\", \"node\")\n        .attr(\"transform\", function (d) {\n        var firstDisplayedParentNode = utils_1.getFirstDisplayedAncestor(nodes, oldNodes, d.id);\n        return utils_1.setNodeLocation(firstDisplayedParentNode.x0, firstDisplayedParentNode.y0, settings);\n    });\n    nodeEnter\n        .append(\"foreignObject\")\n        .attr(\"width\", settings.nodeWidth)\n        .attr(\"height\", settings.nodeHeight);\n    return nodeEnter;\n};\n\n\n//# sourceURL=webpack://Treeviz/./src/nodes/node-enter.ts?");

/***/ }),

/***/ "./src/nodes/node-exit.ts":
/*!********************************!*\
  !*** ./src/nodes/node-exit.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar utils_1 = __webpack_require__(/*! ../utils */ \"./src/utils.ts\");\nexports.drawNodeExit = function (node, settings, nodes, oldNodes) {\n    var nodeExit = node\n        .exit()\n        .transition()\n        .duration(settings.duration)\n        .style(\"opacity\", 0)\n        .attr(\"transform\", function (d) {\n        var firstDisplayedParentNode = utils_1.getFirstDisplayedAncestor(oldNodes, nodes, d.id);\n        return utils_1.setNodeLocation(firstDisplayedParentNode.x0, firstDisplayedParentNode.y0, settings);\n    })\n        .remove();\n    nodeExit.select(\"rect\").style(\"fill-opacity\", 1e-6);\n    nodeExit.select(\"circle\").attr(\"r\", 1e-6);\n    nodeExit.select(\"text\").style(\"fill-opacity\", 1e-6);\n};\n\n\n//# sourceURL=webpack://Treeviz/./src/nodes/node-exit.ts?");

/***/ }),

/***/ "./src/nodes/node-update.ts":
/*!**********************************!*\
  !*** ./src/nodes/node-update.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.drawNodeUpdate = function (nodeEnter, node, settings) {\n    // @ts-ignore\n    var nodeUpdate = nodeEnter.merge(node);\n    nodeUpdate\n        .transition()\n        .duration(settings.duration)\n        .attr(\"transform\", function (d) {\n        return settings.isHorizontal\n            ? \"translate(\" + d.y + \",\" + d.x + \")\"\n            : \"translate(\" + d.x + \",\" + d.y + \")\";\n    });\n    nodeUpdate\n        .select(\"foreignObject\")\n        .attr(\"width\", settings.nodeWidth)\n        .attr(\"height\", settings.nodeHeight)\n        .style(\"overflow\", \"visible\")\n        .on(\"click\", settings.onNodeClick)\n        .on(\"mouseenter\", settings.onNodeMouseEnter)\n        .on(\"mouseleave\", settings.onNodeMouseLeave)\n        .html(function (d) { return settings.renderNode(__assign({}, d, { settings: settings })); });\n};\n\n\n//# sourceURL=webpack://Treeviz/./src/nodes/node-update.ts?");

/***/ }),

/***/ "./src/prepare-data.ts":
/*!*****************************!*\
  !*** ./src/prepare-data.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar d3_1 = __importDefault(__webpack_require__(/*! ./d3 */ \"./src/d3.ts\"));\nvar utils_1 = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\nexports.generateNestedData = function (data, treeConfig) {\n    var idKey = treeConfig.idKey, relationnalField = treeConfig.relationnalField, hasFlatData = treeConfig.hasFlatData;\n    return hasFlatData\n        ? d3_1.default\n            .stratify()\n            .id(function (d) { return d[idKey]; })\n            .parentId(function (d) { return d[relationnalField]; })(data)\n        : d3_1.default.hierarchy(data, function (d) { return d[relationnalField]; });\n};\nexports.generateBasicTreemap = function (treeConfig) {\n    var _a = utils_1.getAreaSize(treeConfig.htmlId), areaHeight = _a.areaHeight, areaWidth = _a.areaWidth;\n    return treeConfig.mainAxisNodeSpacing === \"auto\" && treeConfig.isHorizontal\n        ? d3_1.default\n            .tree()\n            .size([\n            areaHeight - treeConfig.nodeHeight,\n            areaWidth - treeConfig.nodeWidth,\n        ])\n        : treeConfig.mainAxisNodeSpacing === \"auto\" && !treeConfig.isHorizontal\n            ? d3_1.default\n                .tree()\n                .size([\n                areaWidth - treeConfig.nodeWidth,\n                areaHeight - treeConfig.nodeHeight,\n            ])\n            : treeConfig.isHorizontal === true\n                ? d3_1.default\n                    .tree()\n                    .nodeSize([\n                    treeConfig.nodeHeight * treeConfig.secondaryAxisNodeSpacing,\n                    treeConfig.nodeWidth,\n                ])\n                : d3_1.default\n                    .tree()\n                    .nodeSize([\n                    treeConfig.nodeWidth * treeConfig.secondaryAxisNodeSpacing,\n                    treeConfig.nodeHeight,\n                ]);\n};\n\n\n//# sourceURL=webpack://Treeviz/./src/prepare-data.ts?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.getAreaSize = function (htmlID) {\n    var SVGContainer = document.querySelector(\"#\" + htmlID);\n    if (SVGContainer === null) {\n        throw new Error(\"Cannot find dom element with id:\" + htmlID);\n    }\n    var areaWidth = SVGContainer.clientWidth;\n    var areaHeight = SVGContainer.clientHeight;\n    if (areaHeight === 0 || areaWidth === 0) {\n        throw new Error(\"The tree can't be display because the svg height or width of the container is null\");\n    }\n    return { areaWidth: areaWidth, areaHeight: areaHeight };\n};\nexports.getFirstDisplayedAncestor = function (ghostNodes, viewableNodes, id) {\n    try {\n        // @ts-ignore\n        var parentNode = ghostNodes.find(function (node) { return node.id === id; });\n        // @ts-ignore\n        var parentNodeId_1 = parentNode.ancestors()[1].id;\n        var isPresentInOldNodes = viewableNodes.some(function (oldNode) { return oldNode.id === parentNodeId_1; });\n        if (isPresentInOldNodes) {\n            return parentNode.ancestors()[1];\n        }\n        else {\n            return exports.getFirstDisplayedAncestor(ghostNodes, viewableNodes, parentNodeId_1);\n        }\n    }\n    catch (e) {\n        // @ts-ignore\n        return ghostNodes.find(function (node) { return node.id === id; });\n    }\n};\nexports.setNodeLocation = function (xPosition, yPosition, settings) {\n    if (settings.isHorizontal) {\n        return \"translate(\" + yPosition + \",\" + xPosition + \")\";\n    }\n    else {\n        return \"translate(\" + xPosition + \",\" + yPosition + \")\";\n    }\n};\n\n\n//# sourceURL=webpack://Treeviz/./src/utils.ts?");

/***/ })

/******/ });
});