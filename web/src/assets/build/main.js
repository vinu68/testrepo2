/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/index.js":
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(__webpack_require__("./src/assets/svg sync recursive \\.svg$"));

/***/ }),

/***/ "./src/assets/svg sync recursive \\.svg$":
/*!************************************!*\
  !*** ./src/assets/svg sync \.svg$ ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Icon_ quote.svg": "./src/assets/svg/Icon_ quote.svg",
	"./arrow-back-to-top.svg": "./src/assets/svg/arrow-back-to-top.svg",
	"./cross-search-overlay.svg": "./src/assets/svg/cross-search-overlay.svg",
	"./emoji-happy.svg": "./src/assets/svg/emoji-happy.svg",
	"./emoji-neutral.svg": "./src/assets/svg/emoji-neutral.svg",
	"./emoji-unhappy.svg": "./src/assets/svg/emoji-unhappy.svg",
	"./facebook-share.svg": "./src/assets/svg/facebook-share.svg",
	"./facebook.svg": "./src/assets/svg/facebook.svg",
	"./flag-globe.svg": "./src/assets/svg/flag-globe.svg",
	"./global-nav-marker.svg": "./src/assets/svg/global-nav-marker.svg",
	"./icon-beauty.svg": "./src/assets/svg/icon-beauty.svg",
	"./icon-editorial.svg": "./src/assets/svg/icon-editorial.svg",
	"./icon-food.svg": "./src/assets/svg/icon-food.svg",
	"./icon-music.svg": "./src/assets/svg/icon-music.svg",
	"./icon-passion.svg": "./src/assets/svg/icon-passion.svg",
	"./icon-sports.svg": "./src/assets/svg/icon-sports.svg",
	"./instagram-share.svg": "./src/assets/svg/instagram-share.svg",
	"./instagram.svg": "./src/assets/svg/instagram.svg",
	"./pinterest.svg": "./src/assets/svg/pinterest.svg",
	"./search-input-bg.svg": "./src/assets/svg/search-input-bg.svg",
	"./search.svg": "./src/assets/svg/search.svg",
	"./twitter-share.svg": "./src/assets/svg/twitter-share.svg",
	"./twitter.svg": "./src/assets/svg/twitter.svg",
	"./whatsapp-share.svg": "./src/assets/svg/whatsapp-share.svg",
	"./youtube.svg": "./src/assets/svg/youtube.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/svg sync recursive \\.svg$";

/***/ }),

/***/ "./src/assets/svg/Icon_ quote.svg":
/*!****************************************!*\
  !*** ./src/assets/svg/Icon_ quote.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/svg/Icon_ quote.svg");

/***/ }),

/***/ "./src/assets/svg/arrow-back-to-top.svg":
/*!**********************************************!*\
  !*** ./src/assets/svg/arrow-back-to-top.svg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/svg/arrow-back-to-top.svg");

/***/ }),

/***/ "./src/assets/svg/cross-search-overlay.svg":
/*!*************************************************!*\
  !*** ./src/assets/svg/cross-search-overlay.svg ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/svg/cross-search-overlay.svg");

/***/ }),

/***/ "./src/assets/svg/emoji-happy.svg":
/*!****************************************!*\
  !*** ./src/assets/svg/emoji-happy.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/svg/emoji-happy.svg");

/***/ }),

/***/ "./src/assets/svg/emoji-neutral.svg":
/*!******************************************!*\
  !*** ./src/assets/svg/emoji-neutral.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/svg/emoji-neutral.svg");

/***/ }),

/***/ "./src/assets/svg/emoji-unhappy.svg":
/*!******************************************!*\
  !*** ./src/assets/svg/emoji-unhappy.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/svg/emoji-unhappy.svg");

/***/ }),

/***/ "./src/assets/svg/facebook-share.svg":
/*!*******************************************!*\
  !*** ./src/assets/svg/facebook-share.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/svg/facebook-share.svg");

/***/ }),

/***/ "./src/assets/svg/facebook.svg":
/*!*************************************!*\
  !*** ./src/assets/svg/facebook.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/svg/facebook.svg");

/***/ }),

/***/ "./src/assets/svg/flag-globe.svg":
/*!***************************************!*\
  !*** ./src/assets/svg/flag-globe.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/svg/flag-globe.svg");

/***/ }),

/***/ "./src/assets/svg/global-nav-marker.svg":
/*!**********************************************!*\
  !*** ./src/assets/svg/global-nav-marker.svg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/svg/global-nav-marker.svg");

/***/ }),

/***/ "./src/assets/svg/icon-beauty.svg":
/*!****************************************!*\
  !*** ./src/assets/svg/icon-beauty.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/svg/icon-beauty.svg");

/***/ }),

/***/ "./src/assets/svg/icon-editorial.svg":
/*!*******************************************!*\
  !*** ./src/assets/svg/icon-editorial.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/svg/icon-editorial.svg");

/***/ }),

/***/ "./src/assets/svg/icon-food.svg":
/*!**************************************!*\
  !*** ./src/assets/svg/icon-food.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/svg/icon-food.svg");

/***/ }),

/***/ "./src/assets/svg/icon-music.svg":
/*!***************************************!*\
  !*** ./src/assets/svg/icon-music.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/svg/icon-music.svg");

/***/ }),

/***/ "./src/assets/svg/icon-passion.svg":
/*!*****************************************!*\
  !*** ./src/assets/svg/icon-passion.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/svg/icon-passion.svg");

/***/ }),

/***/ "./src/assets/svg/icon-sports.svg":
/*!****************************************!*\
  !*** ./src/assets/svg/icon-sports.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/svg/icon-sports.svg");

/***/ }),

/***/ "./src/assets/svg/instagram-share.svg":
/*!********************************************!*\
  !*** ./src/assets/svg/instagram-share.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/svg/instagram-share.svg");

/***/ }),

/***/ "./src/assets/svg/instagram.svg":
/*!**************************************!*\
  !*** ./src/assets/svg/instagram.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/svg/instagram.svg");

/***/ }),

/***/ "./src/assets/svg/pinterest.svg":
/*!**************************************!*\
  !*** ./src/assets/svg/pinterest.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/svg/pinterest.svg");

/***/ }),

/***/ "./src/assets/svg/search-input-bg.svg":
/*!********************************************!*\
  !*** ./src/assets/svg/search-input-bg.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/svg/search-input-bg.svg");

/***/ }),

/***/ "./src/assets/svg/search.svg":
/*!***********************************!*\
  !*** ./src/assets/svg/search.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/svg/search.svg");

/***/ }),

/***/ "./src/assets/svg/twitter-share.svg":
/*!******************************************!*\
  !*** ./src/assets/svg/twitter-share.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/svg/twitter-share.svg");

/***/ }),

/***/ "./src/assets/svg/twitter.svg":
/*!************************************!*\
  !*** ./src/assets/svg/twitter.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/svg/twitter.svg");

/***/ }),

/***/ "./src/assets/svg/whatsapp-share.svg":
/*!*******************************************!*\
  !*** ./src/assets/svg/whatsapp-share.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/svg/whatsapp-share.svg");

/***/ }),

/***/ "./src/assets/svg/youtube.svg":
/*!************************************!*\
  !*** ./src/assets/svg/youtube.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/svg/youtube.svg");

/***/ }),

/***/ "./src/utils/global/localstorage.js":
/*!******************************************!*\
  !*** ./src/utils/global/localstorage.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint no-unused-vars: 0 */
const storage = () => {
  return {
    getStorage(item) {
      return localStorage.getItem(item);
    },

    setStorage(item, val) {
      localStorage.setItem(item, val);
    },

    clearStorage(item) {
      localStorage.removeItem(item);
    }

  };
};

/***/ }),

/***/ "./src/utils/global/personalize.js":
/*!*****************************************!*\
  !*** ./src/utils/global/personalize.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(() => {
  const cage = 3 * 365 * 24 * 60 * 60;
  document.cookie = `visited=true; path=/; secure; max-age= ${cage}`;
})();

/***/ }),

/***/ "./src/utils/global/xhr.js":
/*!*********************************!*\
  !*** ./src/utils/global/xhr.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint no-unused-vars: 0 */
const request = () => {
  return {
    getData(url) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.responseType = 'json';
      xhr.send();

      xhr.onload = () => {
        if (xhr.status === 200) {
          return xhr.response;
        }

        return xhr.statusText;
      };
    },

    postData(jsonData, url) {
      const xhr = new XMLHttpRequest();
      const json = JSON.stringify(jsonData);
      xhr.open('POST', url);
      xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
      xhr.send(json);
    }

  };
};

/***/ }),

/***/ 0:
/*!*************************************************************************************************************************************!*\
  !*** multi ./src/assets/js/index.js ./src/utils/global/localstorage.js ./src/utils/global/personalize.js ./src/utils/global/xhr.js ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/assets/js/index.js */"./src/assets/js/index.js");
__webpack_require__(/*! ./src/utils/global/localstorage.js */"./src/utils/global/localstorage.js");
__webpack_require__(/*! ./src/utils/global/personalize.js */"./src/utils/global/personalize.js");
module.exports = __webpack_require__(/*! ./src/utils/global/xhr.js */"./src/utils/global/xhr.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N2ZyBzeW5jIFxcLnN2ZyQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zdmcvSWNvbl8gcXVvdGUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc3ZnL2Fycm93LWJhY2stdG8tdG9wLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N2Zy9jcm9zcy1zZWFyY2gtb3ZlcmxheS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zdmcvZW1vamktaGFwcHkuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc3ZnL2Vtb2ppLW5ldXRyYWwuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc3ZnL2Vtb2ppLXVuaGFwcHkuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc3ZnL2ZhY2Vib29rLXNoYXJlLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N2Zy9mYWNlYm9vay5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zdmcvZmxhZy1nbG9iZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zdmcvZ2xvYmFsLW5hdi1tYXJrZXIuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc3ZnL2ljb24tYmVhdXR5LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N2Zy9pY29uLWVkaXRvcmlhbC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zdmcvaWNvbi1mb29kLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N2Zy9pY29uLW11c2ljLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N2Zy9pY29uLXBhc3Npb24uc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc3ZnL2ljb24tc3BvcnRzLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N2Zy9pbnN0YWdyYW0tc2hhcmUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc3ZnL2luc3RhZ3JhbS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zdmcvcGludGVyZXN0LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N2Zy9zZWFyY2gtaW5wdXQtYmcuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc3ZnL3NlYXJjaC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zdmcvdHdpdHRlci1zaGFyZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zdmcvdHdpdHRlci5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zdmcvd2hhdHNhcHAtc2hhcmUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc3ZnL3lvdXR1YmUuc3ZnIiwid2VicGFjazovLy8uL3NyYy91dGlscy9nbG9iYWwvbG9jYWxzdG9yYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9nbG9iYWwvcGVyc29uYWxpemUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2dsb2JhbC94aHIuanMiXSwibmFtZXMiOlsicmVxdWlyZUFsbCIsInIiLCJrZXlzIiwiZm9yRWFjaCIsInJlcXVpcmUiLCJzdG9yYWdlIiwiZ2V0U3RvcmFnZSIsIml0ZW0iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0U3RvcmFnZSIsInZhbCIsInNldEl0ZW0iLCJjbGVhclN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiY2FnZSIsImRvY3VtZW50IiwiY29va2llIiwicmVxdWVzdCIsImdldERhdGEiLCJ1cmwiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJyZXNwb25zZVR5cGUiLCJzZW5kIiwib25sb2FkIiwic3RhdHVzIiwicmVzcG9uc2UiLCJzdGF0dXNUZXh0IiwicG9zdERhdGEiLCJqc29uRGF0YSIsImpzb24iLCJKU09OIiwic3RyaW5naWZ5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Q2MsZ0JBQUosQ0FBcUIsY0FBckIsRUFBcUMsaUNBQXJDO0FBQ0FkLFNBQUcsQ0FBQ0ksSUFBSixDQUFTTyxJQUFUO0FBQ0Q7O0FBckJJLEdBQVA7QUF1QkQsQ0F4QkQsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZnVuY3Rpb24gcmVxdWlyZUFsbChyKSB7XHJcbiAgci5rZXlzKCkuZm9yRWFjaChyKTtcclxufVxyXG5cclxucmVxdWlyZUFsbChyZXF1aXJlLmNvbnRleHQoJy4uL3N2Zy8nLCB0cnVlLCAvXFwuc3ZnJC8pKTtcclxuIiwidmFyIG1hcCA9IHtcblx0XCIuL0ljb25fIHF1b3RlLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9zdmcvSWNvbl8gcXVvdGUuc3ZnXCIsXG5cdFwiLi9hcnJvdy1iYWNrLXRvLXRvcC5zdmdcIjogXCIuL3NyYy9hc3NldHMvc3ZnL2Fycm93LWJhY2stdG8tdG9wLnN2Z1wiLFxuXHRcIi4vY3Jvc3Mtc2VhcmNoLW92ZXJsYXkuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL3N2Zy9jcm9zcy1zZWFyY2gtb3ZlcmxheS5zdmdcIixcblx0XCIuL2Vtb2ppLWhhcHB5LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9zdmcvZW1vamktaGFwcHkuc3ZnXCIsXG5cdFwiLi9lbW9qaS1uZXV0cmFsLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9zdmcvZW1vamktbmV1dHJhbC5zdmdcIixcblx0XCIuL2Vtb2ppLXVuaGFwcHkuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL3N2Zy9lbW9qaS11bmhhcHB5LnN2Z1wiLFxuXHRcIi4vZmFjZWJvb2stc2hhcmUuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL3N2Zy9mYWNlYm9vay1zaGFyZS5zdmdcIixcblx0XCIuL2ZhY2Vib29rLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9zdmcvZmFjZWJvb2suc3ZnXCIsXG5cdFwiLi9mbGFnLWdsb2JlLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9zdmcvZmxhZy1nbG9iZS5zdmdcIixcblx0XCIuL2dsb2JhbC1uYXYtbWFya2VyLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9zdmcvZ2xvYmFsLW5hdi1tYXJrZXIuc3ZnXCIsXG5cdFwiLi9pY29uLWJlYXV0eS5zdmdcIjogXCIuL3NyYy9hc3NldHMvc3ZnL2ljb24tYmVhdXR5LnN2Z1wiLFxuXHRcIi4vaWNvbi1lZGl0b3JpYWwuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL3N2Zy9pY29uLWVkaXRvcmlhbC5zdmdcIixcblx0XCIuL2ljb24tZm9vZC5zdmdcIjogXCIuL3NyYy9hc3NldHMvc3ZnL2ljb24tZm9vZC5zdmdcIixcblx0XCIuL2ljb24tbXVzaWMuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL3N2Zy9pY29uLW11c2ljLnN2Z1wiLFxuXHRcIi4vaWNvbi1wYXNzaW9uLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9zdmcvaWNvbi1wYXNzaW9uLnN2Z1wiLFxuXHRcIi4vaWNvbi1zcG9ydHMuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL3N2Zy9pY29uLXNwb3J0cy5zdmdcIixcblx0XCIuL2luc3RhZ3JhbS1zaGFyZS5zdmdcIjogXCIuL3NyYy9hc3NldHMvc3ZnL2luc3RhZ3JhbS1zaGFyZS5zdmdcIixcblx0XCIuL2luc3RhZ3JhbS5zdmdcIjogXCIuL3NyYy9hc3NldHMvc3ZnL2luc3RhZ3JhbS5zdmdcIixcblx0XCIuL3BpbnRlcmVzdC5zdmdcIjogXCIuL3NyYy9hc3NldHMvc3ZnL3BpbnRlcmVzdC5zdmdcIixcblx0XCIuL3NlYXJjaC1pbnB1dC1iZy5zdmdcIjogXCIuL3NyYy9hc3NldHMvc3ZnL3NlYXJjaC1pbnB1dC1iZy5zdmdcIixcblx0XCIuL3NlYXJjaC5zdmdcIjogXCIuL3NyYy9hc3NldHMvc3ZnL3NlYXJjaC5zdmdcIixcblx0XCIuL3R3aXR0ZXItc2hhcmUuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL3N2Zy90d2l0dGVyLXNoYXJlLnN2Z1wiLFxuXHRcIi4vdHdpdHRlci5zdmdcIjogXCIuL3NyYy9hc3NldHMvc3ZnL3R3aXR0ZXIuc3ZnXCIsXG5cdFwiLi93aGF0c2FwcC1zaGFyZS5zdmdcIjogXCIuL3NyYy9hc3NldHMvc3ZnL3doYXRzYXBwLXNoYXJlLnN2Z1wiLFxuXHRcIi4veW91dHViZS5zdmdcIjogXCIuL3NyYy9hc3NldHMvc3ZnL3lvdXR1YmUuc3ZnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9zdmcgc3luYyByZWN1cnNpdmUgXFxcXC5zdmckXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvc3ZnL0ljb25fIHF1b3RlLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL3N2Zy9hcnJvdy1iYWNrLXRvLXRvcC5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9zdmcvY3Jvc3Mtc2VhcmNoLW92ZXJsYXkuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvc3ZnL2Vtb2ppLWhhcHB5LnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL3N2Zy9lbW9qaS1uZXV0cmFsLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL3N2Zy9lbW9qaS11bmhhcHB5LnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL3N2Zy9mYWNlYm9vay1zaGFyZS5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9zdmcvZmFjZWJvb2suc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvc3ZnL2ZsYWctZ2xvYmUuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvc3ZnL2dsb2JhbC1uYXYtbWFya2VyLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL3N2Zy9pY29uLWJlYXV0eS5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9zdmcvaWNvbi1lZGl0b3JpYWwuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvc3ZnL2ljb24tZm9vZC5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9zdmcvaWNvbi1tdXNpYy5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9zdmcvaWNvbi1wYXNzaW9uLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL3N2Zy9pY29uLXNwb3J0cy5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9zdmcvaW5zdGFncmFtLXNoYXJlLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL3N2Zy9pbnN0YWdyYW0uc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvc3ZnL3BpbnRlcmVzdC5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9zdmcvc2VhcmNoLWlucHV0LWJnLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL3N2Zy9zZWFyY2guc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvc3ZnL3R3aXR0ZXItc2hhcmUuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvc3ZnL3R3aXR0ZXIuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvc3ZnL3doYXRzYXBwLXNoYXJlLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL3N2Zy95b3V0dWJlLnN2Z1wiOyIsIi8qIGVzbGludCBuby11bnVzZWQtdmFyczogMCAqL1xyXG5jb25zdCBzdG9yYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBnZXRTdG9yYWdlKGl0ZW0pIHtcclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGl0ZW0pO1xyXG4gICAgfSxcclxuICAgIHNldFN0b3JhZ2UoaXRlbSwgdmFsKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGl0ZW0sIHZhbCk7XHJcbiAgICB9LFxyXG4gICAgY2xlYXJTdG9yYWdlKGl0ZW0pIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oaXRlbSk7XHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcbiIsIigoKSA9PiB7XHJcbiAgY29uc3QgY2FnZSA9IDMgKiAzNjUgKiAyNCAqIDYwICogNjA7XHJcbiAgZG9jdW1lbnQuY29va2llID0gYHZpc2l0ZWQ9dHJ1ZTsgcGF0aD0vOyBzZWN1cmU7IG1heC1hZ2U9ICR7Y2FnZX1gO1xyXG59KSgpO1xyXG4iLCIvKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IDAgKi9cclxuY29uc3QgcmVxdWVzdCA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZ2V0RGF0YSh1cmwpIHtcclxuICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwpO1xyXG4gICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xyXG4gICAgICB4aHIuc2VuZCgpO1xyXG5cclxuICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICByZXR1cm4geGhyLnJlc3BvbnNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geGhyLnN0YXR1c1RleHQ7XHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIHBvc3REYXRhKGpzb25EYXRhLCB1cmwpIHtcclxuICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeShqc29uRGF0YSk7XHJcbiAgICAgIHhoci5vcGVuKCdQT1NUJywgdXJsKTtcclxuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XHJcbiAgICAgIHhoci5zZW5kKGpzb24pO1xyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9