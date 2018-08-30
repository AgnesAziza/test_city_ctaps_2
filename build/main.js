require('source-map-support/register')
module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = [{"heure":1,"jour":1,"consommation":0},{"heure":2,"jour":1,"consommation":16},{"heure":3,"jour":1,"consommation":19},{"heure":4,"jour":1,"consommation":10},{"heure":5,"jour":1,"consommation":0},{"heure":6,"jour":1,"consommation":20},{"heure":7,"jour":1,"consommation":34},{"heure":8,"jour":1,"consommation":50},{"heure":9,"jour":1,"consommation":0},{"heure":10,"jour":1,"consommation":23},{"heure":11,"jour":1,"consommation":42},{"heure":12,"jour":1,"consommation":24},{"heure":13,"jour":1,"consommation":26},{"heure":14,"jour":1,"consommation":0},{"heure":15,"jour":1,"consommation":0},{"heure":16,"jour":1,"consommation":12},{"heure":17,"jour":1,"consommation":1},{"heure":18,"jour":1,"consommation":10},{"heure":19,"jour":1,"consommation":0},{"heure":20,"jour":1,"consommation":20},{"heure":21,"jour":1,"consommation":12},{"heure":22,"jour":1,"consommation":0},{"heure":23,"jour":1,"consommation":0},{"heure":24,"jour":1,"consommation":23},{"heure":1,"jour":1,"consommation":0},{"heure":2,"jour":2,"consommation":16},{"heure":3,"jour":2,"consommation":19},{"heure":4,"jour":2,"consommation":10},{"heure":5,"jour":2,"consommation":0},{"heure":6,"jour":2,"consommation":3},{"heure":7,"jour":2,"consommation":10},{"heure":8,"jour":2,"consommation":5},{"heure":9,"jour":2,"consommation":0},{"heure":10,"jour":2,"consommation":3},{"heure":11,"jour":2,"consommation":4},{"heure":12,"jour":2,"consommation":2},{"heure":13,"jour":2,"consommation":26},{"heure":14,"jour":2,"consommation":0},{"heure":15,"jour":2,"consommation":0},{"heure":16,"jour":2,"consommation":2},{"heure":17,"jour":2,"consommation":9},{"heure":18,"jour":2,"consommation":10},{"heure":19,"jour":2,"consommation":0},{"heure":20,"jour":2,"consommation":0},{"heure":21,"jour":2,"consommation":12},{"heure":22,"jour":2,"consommation":5},{"heure":23,"jour":2,"consommation":0},{"heure":24,"jour":2,"consommation":2}]

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hourly_consumption_json__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hourly_consumption_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__hourly_consumption_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fs__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__test_js__ = __webpack_require__(5);





const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
const port = 1258;

__WEBPACK_IMPORTED_MODULE_2_fs___default.a.readFile('src/hourly_consumption.json', 'utf8', function (err, contents) {
  console.log(contents);
});

Object(__WEBPACK_IMPORTED_MODULE_3__test_js__["a" /* default */])();

app.listen(port, () => {
  console.log(`express is running on port: ${port} `);
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hourly_consumption_json__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hourly_consumption_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__hourly_consumption_json__);


const test = () => {

  const limit_hourly = 15; //enter the limit not to be exceeded
  const consecutive_limit_hourly = 3; //enter consecutive hourly


  // consumption hour by hour
  function only_consumption(hourly_consumption) {
    return hourly_consumption.map(x => x.consommation);
  }

  // convert consumption to true or false (if it's true the limit has been exceeded)
  function exceed_true(only_consumption) {
    return only_consumption.map(x => x > limit_hourly);
  }

  // only get the indices equal to true
  function only_true_index(exceed_true) {
    let indices = [];
    const element = true;

    let idx = exceed_true.indexOf(element);
    while (idx != -1) {
      indices.push(idx);
      idx = exceed_true.indexOf(element, idx + 1);
    }
    return indices;
  }

  // we only recover the suites
  function suite_w_duplicate(indices) {
    let suite_w_duplicate = [];
    for (let i = 0; i < indices.length; i++) {
      if (indices[i] === indices[i + 1] - 1) {
        suite_w_duplicate.push(indices[i], indices[i + 1]);
      }
    }
    return suite_w_duplicate;
  }

  // Eliminate duplicate results

  function suite_wo_duplicate(suite_w_duplicate) {
    let suite_wo_duplicate = [];
    for (let i = 0; i < suite_w_duplicate.length; i++) {
      if (suite_w_duplicate[i] !== suite_w_duplicate[i + 1]) {
        suite_wo_duplicate.push(suite_w_duplicate[i]);
      }
    }
    return suite_wo_duplicate;
  }

  // split tab with suites
  function finalArray(suite_wo_duplicate) {
    let finalArray = [];
    let temporaryArray = [];

    for (let i = 0; i < suite_wo_duplicate.length; ++i) {
      if (i == 0) {
        temporaryArray.push(suite_wo_duplicate[i]);
        continue;
      }
      if (suite_wo_duplicate[i - 1] != suite_wo_duplicate[i] - 1) {
        finalArray.push(temporaryArray);
        temporaryArray = [];
      }
      temporaryArray.push(suite_wo_duplicate[i]);
    }
    finalArray.push(temporaryArray);

    return finalArray;
  }

  //eliminate the suites below the desired number of hours
  function keep_good_number_of_hours(finalArray) {
    let result = [];
    for (let i = 0; i <= finalArray.length - 1; i++) {
      if (finalArray[i].length >= consecutive_limit_hourly) {
        result.push(finalArray[i]);
      }
    }
    return result;
  }

  // index with object
  function get_objects_for_indexes(result) {
    let potential_leakage = [];
    let temporaryArray = [];
    for (let i = 0; i < result.length; i++) {
      result[i].forEach(x => temporaryArray.push(__WEBPACK_IMPORTED_MODULE_1__hourly_consumption_json___default.a[x]));
      potential_leakage.push(temporaryArray);
      temporaryArray = [];
    }
    return potential_leakage;
  }

  //Promises

  const get_potential_leakage = new Promise((resolve, reject) => {
    resolve(__WEBPACK_IMPORTED_MODULE_1__hourly_consumption_json___default.a);
  });

  get_potential_leakage.then(value => {
    return only_consumption(value);
  }).then(value => {
    return exceed_true(value);
  }).then(value => {
    return only_true_index(value);
  }).then(value => {
    return suite_w_duplicate(value);
  }).then(value => {
    return suite_wo_duplicate(value);
  }).then(value => {
    return finalArray(value);
  }).then(value => {
    return keep_good_number_of_hours(value);
  }).then(value => {
    return get_objects_for_indexes(value);
  }).then(value => {
    console.log(value);
  }).catch(error => {
    console.error(error);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (test);

/***/ })
/******/ ]);
//# sourceMappingURL=main.map