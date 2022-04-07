/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/constants/index.js":
/*!***********************************!*\
  !*** ./src/js/constants/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PRODUCT_RULES": () => (/* binding */ PRODUCT_RULES),
/* harmony export */   "VENDING_MACHINE_RULES": () => (/* binding */ VENDING_MACHINE_RULES),
/* harmony export */   "COIN_500": () => (/* binding */ COIN_500),
/* harmony export */   "COIN_100": () => (/* binding */ COIN_100),
/* harmony export */   "COIN_50": () => (/* binding */ COIN_50),
/* harmony export */   "COIN_10": () => (/* binding */ COIN_10),
/* harmony export */   "ERROR_MESSAGE": () => (/* binding */ ERROR_MESSAGE),
/* harmony export */   "CONFIRM_MESSAGE": () => (/* binding */ CONFIRM_MESSAGE),
/* harmony export */   "ERROR": () => (/* binding */ ERROR),
/* harmony export */   "SNACKBAR_MESSAGE": () => (/* binding */ SNACKBAR_MESSAGE),
/* harmony export */   "SNACKBAR_DELAY_TIME": () => (/* binding */ SNACKBAR_DELAY_TIME),
/* harmony export */   "STORAGE_KEY": () => (/* binding */ STORAGE_KEY)
/* harmony export */ });
var PRODUCT_RULES = {
  MAX_NAME_LENGTH: 10,
  MIN_PRICE: 100,
  MAX_PRICE: 10000,
  PRICE_UNIT: 10,
  MIN_STOCK: 1,
  MAX_STOCK: 20
};
var VENDING_MACHINE_RULES = {
  CHANGE_UNIT: 10,
  MAX_TOTAL_CHANGE: 100000
};
var COIN_500 = {
  NAME: 'FIVE_HUNDRED_WON',
  VALUE: 500
};
var COIN_100 = {
  NAME: 'ONE_HUNDRED_WON',
  VALUE: 100
};
var COIN_50 = {
  NAME: 'FIFTY_WON',
  VALUE: 50
};
var COIN_10 = {
  NAME: 'TEN_WON',
  VALUE: 10
};
var ERROR_MESSAGE = {
  CONTAIN_EMPTY_FIELD_IN_FORM: '상품명, 가격, 수량을 모두 입력해주세요.',
  EXCEED_MAX_PRODUCT_NAME_LENGTH: "\uC0C1\uD488\uBA85\uC740 ".concat(PRODUCT_RULES.MAX_NAME_LENGTH, "\uAE00\uC790\uB97C \uCD08\uACFC\uD574\uC11C\uB294 \uC548\uB429\uB2C8\uB2E4."),
  DUPLICATE_PRODUCT_NAME: '중복된 상품명의 상품은 등록할 수 없습니다.',
  OUT_OF_PRODUCT_PRICE_RANGE: "\uC0C1\uD488 \uAC00\uACA9\uC740 ".concat(PRODUCT_RULES.MIN_PRICE, "\uC6D0 \uBBF8\uB9CC\uC774\uAC70\uB098 ").concat(PRODUCT_RULES.MAX_PRICE, "\uC6D0 \uCD08\uACFC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."),
  INVALID_UNIT_PRODUCT_PRICE: "\uC0C1\uD488 \uAC00\uACA9\uC740 ".concat(PRODUCT_RULES.PRICE_UNIT, "\uC6D0 \uB2E8\uC704\uC5EC\uC57C \uD569\uB2C8\uB2E4."),
  INVALID_PRODUCT_STOCK: '올바른 수량을 입력해주세요',
  OUT_OF_PRODUCT_STOCK_RANGE: "\uC0C1\uD488 \uC218\uB7C9\uC740 ".concat(PRODUCT_RULES.MIN_STOCK, "\uAC1C \uBBF8\uB9CC\uC774\uAC70\uB098 ").concat(PRODUCT_RULES.MAX_STOCK, "\uAC1C \uCD08\uACFC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."),
  NOT_FOUND_PRODUCT_ID: '존재하지 않는 상품 아이디입니다.',
  BELOW_MIN_CHANGE: '충전 금액은 0원 이하일 수 없습니다.',
  INVALID_UNIT_CHANGE: "\uCDA9\uC804 \uAE08\uC561\uC740 ".concat(VENDING_MACHINE_RULES.CHANGE_UNIT, "\uC6D0 \uB2E8\uC704\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4."),
  EXCEED_MAX_TOTAL_CHANGE: "\uCD5C\uB300 \uBCF4\uC720 \uAE08\uC561\uC740 ".concat(VENDING_MACHINE_RULES.MAX_TOTAL_CHANGE, "\uC6D0\uC744 \uCD08\uACFC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")
};
var CONFIRM_MESSAGE = '상품을 정말 삭제하시겠습니까?';
var ERROR = 'error';
var SNACKBAR_MESSAGE = {
  LOGOUT_SUCCESS: '정상적으로 로그아웃되었습니다.',
  REGISTER_SUCCESS: '정상적으로 회원가입되었습니다.',
  LOGIN_SUCCESS: '정상적으로 로그인되었습니다.',
  MODIFY_MY_INFO_SUCCESS: '내 정보가 정상적으로 수정되었습니다.',
  ADD_CHANGE_SUCCESS: '잔돈이 정상적으로 충전되었습니다.',
  RETURN_CHAGNE_SUCCESS: '잔돈이 정상적으로 반환되었습니다.',
  ADD_PRODUCT_SUCCESS: '상품이 정상적으로 추가되었습니다.',
  REMOVE_PRODUCT_SUCCESS: '상품이 정상적으로 삭제되었습니다.',
  MODIFY_PRODUCT_SUCCESS: '상품이 정상적으로 수정되었습니다.',
  PURCHASE_PRODUCT_SUCCESS: '상품이 정상적으로 구매되었습니다.',
  INSERT_MONEY_SUCCESS: '금액이 정상적으로 투입되었습니다.'
};
var SNACKBAR_DELAY_TIME = 1000;
var STORAGE_KEY = {
  USER_ID: 'userId',
  ACCESS_TOKEN: 'accessToken'
};

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_Router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/Router */ "./src/js/view/Router.js");

new _view_Router__WEBPACK_IMPORTED_MODULE_0__["default"]();

/***/ }),

/***/ "./src/js/utils/dom.js":
/*!*****************************!*\
  !*** ./src/js/utils/dom.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectDom": () => (/* binding */ selectDom),
/* harmony export */   "createMainElement": () => (/* binding */ createMainElement),
/* harmony export */   "createDivElement": () => (/* binding */ createDivElement)
/* harmony export */ });
function selectDom(selector) {
  var baseElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return baseElement.querySelector(selector);
}
function createMainElement(template) {
  var mainElement = document.createElement('main');
  mainElement.insertAdjacentHTML('beforeend', template);
  return mainElement;
}
function createDivElement(template) {
  var divElement = document.createElement('div');
  divElement.id = 'app-inner';
  divElement.insertAdjacentHTML('beforeend', template);
  return divElement;
}

/***/ }),

/***/ "./src/js/utils/index.js":
/*!*******************************!*\
  !*** ./src/js/utils/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pickNumberInRange": () => (/* binding */ pickNumberInRange),
/* harmony export */   "generateUniqueId": () => (/* binding */ generateUniqueId),
/* harmony export */   "deepCopy": () => (/* binding */ deepCopy),
/* harmony export */   "deepCopyList": () => (/* binding */ deepCopyList)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function pickNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateRandomHexString() {
  return Array.from({
    length: 3
  }).reduce(function (prev) {
    return "".concat(prev).concat(pickNumberInRange(0, 255).toString(16));
  }, '');
}

function generateUniqueId(list) {
  var newId = generateRandomHexString();

  while (list.includes(newId)) {
    newId = generateRandomHexString();
  }

  return newId;
}
function deepCopy(obj) {
  var cloneObject = {};

  for (var key in obj) {
    if (_typeof(obj[key]) === 'object' && obj[key] !== null) {
      cloneObject[key] = deepCopy(obj[key]);
      continue;
    }

    cloneObject[key] = obj[key];
  }

  return cloneObject;
}
function deepCopyList(list) {
  var cloneList = [];

  var _iterator = _createForOfIteratorHelper(list),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      cloneList.push(deepCopy(item));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return cloneList;
}

/***/ }),

/***/ "./src/js/view/Router.js":
/*!*******************************!*\
  !*** ./src/js/view/Router.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var _domain_vendingMachine_VendingMachine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domain/vendingMachine/VendingMachine */ "./src/js/domain/vendingMachine/VendingMachine.ts");
/* harmony import */ var _domain_auth_Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain/auth/Auth */ "./src/js/domain/auth/Auth.ts");
/* harmony import */ var _vendingMachine_PurchaseProductTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vendingMachine/PurchaseProductTab */ "./src/js/view/vendingMachine/PurchaseProductTab.js");
/* harmony import */ var _vendingMachine_AddChangeTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendingMachine/AddChangeTab */ "./src/js/view/vendingMachine/AddChangeTab.js");
/* harmony import */ var _vendingMachine_ManageProductTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vendingMachine/ManageProductTab */ "./src/js/view/vendingMachine/ManageProductTab.js");
/* harmony import */ var _auth_LoginView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/LoginView */ "./src/js/view/auth/LoginView.js");
/* harmony import */ var _auth_RegisterView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/RegisterView */ "./src/js/view/auth/RegisterView.js");
/* harmony import */ var _auth_ModifyMyInfoView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/ModifyMyInfoView */ "./src/js/view/auth/ModifyMyInfoView.js");
/* harmony import */ var _SnackBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SnackBar */ "./src/js/view/SnackBar.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./template */ "./src/js/view/template.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../constants */ "./src/js/constants/index.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }














var _vendingMachine = /*#__PURE__*/new WeakMap();

var _renderList = /*#__PURE__*/new WeakMap();

var _app = /*#__PURE__*/new WeakMap();

var _body = /*#__PURE__*/new WeakMap();

var _tabMenuNavigation = /*#__PURE__*/new WeakMap();

var _adminHeaderContainer = /*#__PURE__*/new WeakMap();

var _main = /*#__PURE__*/new WeakMap();

var _userProfile = /*#__PURE__*/new WeakMap();

var _adminProfile = /*#__PURE__*/new WeakMap();

var _logoutTabMenu = /*#__PURE__*/new WeakMap();

var _nickname = /*#__PURE__*/new WeakMap();

var _render = /*#__PURE__*/new WeakMap();

var _renderAdminHeader = /*#__PURE__*/new WeakSet();

var _renderMain = /*#__PURE__*/new WeakSet();

var _handleProfile = /*#__PURE__*/new WeakSet();

var _handleProfileThumbnail = /*#__PURE__*/new WeakSet();

var _updateCurrentTabMenu = /*#__PURE__*/new WeakSet();

var _handleTabMenuChange = /*#__PURE__*/new WeakMap();

var _handleAdminDetailMenu = /*#__PURE__*/new WeakMap();

var _handleLogout = /*#__PURE__*/new WeakMap();

var _isAdmin = /*#__PURE__*/new WeakSet();

var Router = /*#__PURE__*/_createClass(function Router() {
  var _this = this;

  _classCallCheck(this, Router);

  _classPrivateMethodInitSpec(this, _isAdmin);

  _classPrivateMethodInitSpec(this, _updateCurrentTabMenu);

  _classPrivateMethodInitSpec(this, _handleProfileThumbnail);

  _classPrivateMethodInitSpec(this, _handleProfile);

  _classPrivateMethodInitSpec(this, _renderMain);

  _classPrivateMethodInitSpec(this, _renderAdminHeader);

  _classPrivateFieldInitSpec(this, _vendingMachine, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _renderList, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _app, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _body, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _tabMenuNavigation, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _adminHeaderContainer, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _main, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _userProfile, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _adminProfile, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _logoutTabMenu, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _nickname, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _render, {
    writable: true,
    value: function value() {
      _classPrivateFieldGet(_this, _app).replaceChildren();

      var path = window.location.hash || '#/manage';

      if (path === '#/register' || path === '#/login' | path === '#/modify') {
        _classPrivateFieldGet(_this, _app).insertAdjacentElement('beforeend', _classPrivateFieldGet(_this, _renderList)[path].template);

        return;
      }

      _classPrivateMethodGet(_this, _renderAdminHeader, _renderAdminHeader2).call(_this, path);

      if (!localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_11__.STORAGE_KEY.ACCESS_TOKEN)) {
        path = '#/purchase';

        _classPrivateFieldGet(_this, _tabMenuNavigation).classList.add('hide');
      }

      _classPrivateMethodGet(_this, _renderMain, _renderMain2).call(_this, path);
    }
  });

  _classPrivateFieldInitSpec(this, _handleTabMenuChange, {
    writable: true,
    value: function value(e) {
      e.preventDefault();
      var newHash = e.target.hash;
      var previousHash = window.location.hash;
      if (!Object.keys(_classPrivateFieldGet(_this, _renderList)).includes(newHash) || newHash === previousHash) return;
      window.history.pushState({}, null, newHash);

      _classPrivateFieldGet(_this, _render).call(_this);
    }
  });

  _classPrivateFieldInitSpec(this, _handleAdminDetailMenu, {
    writable: true,
    value: function value() {
      var $adminDetail = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_10__.selectDom)('.admin-detail', _classPrivateFieldGet(_this, _app));
      $adminDetail.classList.toggle('hide');
    }
  });

  _classPrivateFieldInitSpec(this, _handleLogout, {
    writable: true,
    value: function value() {
      localStorage.removeItem(_constants__WEBPACK_IMPORTED_MODULE_11__.STORAGE_KEY.ACCESS_TOKEN);
      localStorage.removeItem(_constants__WEBPACK_IMPORTED_MODULE_11__.STORAGE_KEY.USER_ID);
      _SnackBar__WEBPACK_IMPORTED_MODULE_8__["default"].dispatch(_constants__WEBPACK_IMPORTED_MODULE_11__.SNACKBAR_MESSAGE.LOGOUT_SUCCESS);
    }
  });

  //멤버변수 생성
  _classPrivateFieldSet(this, _vendingMachine, new _domain_vendingMachine_VendingMachine__WEBPACK_IMPORTED_MODULE_0__["default"]());

  _classPrivateFieldSet(this, _renderList, {
    '#/manage': new _vendingMachine_ManageProductTab__WEBPACK_IMPORTED_MODULE_4__["default"](_classPrivateFieldGet(this, _vendingMachine)),
    '#/charge': new _vendingMachine_AddChangeTab__WEBPACK_IMPORTED_MODULE_3__["default"](_classPrivateFieldGet(this, _vendingMachine)),
    '#/purchase': new _vendingMachine_PurchaseProductTab__WEBPACK_IMPORTED_MODULE_2__["default"](_classPrivateFieldGet(this, _vendingMachine)),
    '#/login': new _auth_LoginView__WEBPACK_IMPORTED_MODULE_5__["default"](),
    '#/register': new _auth_RegisterView__WEBPACK_IMPORTED_MODULE_6__["default"](),
    '#/modify': new _auth_ModifyMyInfoView__WEBPACK_IMPORTED_MODULE_7__["default"]()
  });

  _classPrivateFieldSet(this, _adminHeaderContainer, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_10__.createDivElement)(_template__WEBPACK_IMPORTED_MODULE_9__.TEMPLATE.ADMIN_HEADER));

  _classPrivateFieldSet(this, _body, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_10__.selectDom)('body'));

  _classPrivateFieldSet(this, _app, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_10__.selectDom)('#app'));

  _classPrivateFieldSet(this, _main, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_10__.selectDom)('main', _classPrivateFieldGet(this, _adminHeaderContainer)));

  _classPrivateFieldSet(this, _tabMenuNavigation, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_10__.selectDom)('#tab-menu-navigation', _classPrivateFieldGet(this, _adminHeaderContainer)));

  _classPrivateFieldSet(this, _userProfile, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_10__.selectDom)('#user', _classPrivateFieldGet(this, _adminHeaderContainer)));

  _classPrivateFieldSet(this, _adminProfile, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_10__.selectDom)('#admin', _classPrivateFieldGet(this, _adminHeaderContainer)));

  _classPrivateFieldSet(this, _logoutTabMenu, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_10__.selectDom)('#logout-tab-menu', _classPrivateFieldGet(this, _adminHeaderContainer)));

  _classPrivateFieldSet(this, _nickname, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_10__.selectDom)('#nickname', _classPrivateFieldGet(this, _adminHeaderContainer))); //이벤트 바인딩


  window.addEventListener('popstate', _classPrivateFieldGet(this, _render));
  window.addEventListener('DOMContentLoaded', _classPrivateFieldGet(this, _render));

  _classPrivateFieldGet(this, _adminProfile).addEventListener('click', _classPrivateFieldGet(this, _handleAdminDetailMenu));

  _classPrivateFieldGet(this, _tabMenuNavigation).addEventListener('click', _classPrivateFieldGet(this, _handleTabMenuChange));

  _classPrivateFieldGet(this, _logoutTabMenu).addEventListener('click', _classPrivateFieldGet(this, _handleLogout)); //초기 화면 렌더링


  _classPrivateFieldGet(this, _body).insertAdjacentHTML('beforeend', _template__WEBPACK_IMPORTED_MODULE_9__.TEMPLATE.SNACK_BAR);
});

function _renderAdminHeader2(path) {
  _classPrivateFieldGet(this, _app).insertAdjacentElement('beforeend', _classPrivateFieldGet(this, _adminHeaderContainer));

  _classPrivateFieldGet(this, _tabMenuNavigation).classList.remove('hide');

  _classPrivateMethodGet(this, _updateCurrentTabMenu, _updateCurrentTabMenu2).call(this, path);

  _classPrivateMethodGet(this, _handleProfile, _handleProfile2).call(this);
}

function _renderMain2(path) {
  _classPrivateFieldGet(this, _main).replaceChildren();

  if (!_classPrivateFieldGet(this, _renderList)[path]) {
    var notFoundContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_10__.createMainElement)(_template__WEBPACK_IMPORTED_MODULE_9__.TEMPLATE.NOT_FOUND);

    _classPrivateFieldGet(this, _main).insertAdjacentElement('beforeend', notFoundContainer);

    return;
  }

  _classPrivateFieldGet(this, _main).insertAdjacentElement('beforeend', _classPrivateFieldGet(this, _renderList)[path].tabElements);
}

function _handleProfile2() {
  _classPrivateFieldGet(this, _userProfile).classList.toggle('hide', _classPrivateMethodGet(this, _isAdmin, _isAdmin2).call(this));

  _classPrivateFieldGet(this, _adminProfile).classList.toggle('hide', !_classPrivateMethodGet(this, _isAdmin, _isAdmin2).call(this));

  _classPrivateMethodGet(this, _handleProfileThumbnail, _handleProfileThumbnail2).call(this);
}

function _handleProfileThumbnail2() {
  var _this2 = this;

  if (_classPrivateMethodGet(this, _isAdmin, _isAdmin2).call(this)) {
    var id = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_11__.STORAGE_KEY.USER_ID);
    _domain_auth_Auth__WEBPACK_IMPORTED_MODULE_1__["default"].getUserInfo(id).then(function (_ref) {
      var name = _ref.name;
      _classPrivateFieldGet(_this2, _nickname).textContent = name[0];
    });
  }
}

function _updateCurrentTabMenu2(path) {
  var previousMenuButton = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_10__.selectDom)('.current', _classPrivateFieldGet(this, _tabMenuNavigation));
  previousMenuButton === null || previousMenuButton === void 0 ? void 0 : previousMenuButton.classList.remove('current');
  var currentMenuButton = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_10__.selectDom)("[href=\"".concat(path, "\"]"), _classPrivateFieldGet(this, _tabMenuNavigation));
  currentMenuButton === null || currentMenuButton === void 0 ? void 0 : currentMenuButton.classList.add('current');
}

function _isAdmin2() {
  return localStorage.getItem('accessToken');
}



/***/ }),

/***/ "./src/js/view/SnackBar.js":
/*!*********************************!*\
  !*** ./src/js/view/SnackBar.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/js/constants/index.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom */ "./src/js/utils/dom.js");


var SnackBar = {
  dispatch: function dispatch(message) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'success';
    var snackbar = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.selectDom)('#snackbar');
    snackbar.textContent = message;
    snackbar.classList.toggle('error', type === 'error');
    snackbar.classList.toggle('show');
    setTimeout(function () {
      snackbar.classList.toggle('show');
    }, _constants__WEBPACK_IMPORTED_MODULE_0__.SNACKBAR_DELAY_TIME);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SnackBar);

/***/ }),

/***/ "./src/js/view/auth/LoginView.js":
/*!***************************************!*\
  !*** ./src/js/view/auth/LoginView.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoginView)
/* harmony export */ });
/* harmony import */ var _domain_auth_Auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/auth/Auth */ "./src/js/domain/auth/Auth.ts");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../template */ "./src/js/view/template.js");
/* harmony import */ var _SnackBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SnackBar */ "./src/js/view/SnackBar.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./src/js/constants/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }







var _loginContainer = /*#__PURE__*/new WeakMap();

var _loginForm = /*#__PURE__*/new WeakMap();

var _userEmail = /*#__PURE__*/new WeakMap();

var _userPassword = /*#__PURE__*/new WeakMap();

var _handleLogin = /*#__PURE__*/new WeakMap();

var LoginView = /*#__PURE__*/function () {
  function LoginView() {
    var _this = this;

    _classCallCheck(this, LoginView);

    _classPrivateFieldInitSpec(this, _loginContainer, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _loginForm, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _userEmail, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _userPassword, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _handleLogin, {
      writable: true,
      value: function value(e) {
        e.preventDefault();

        var email = _classPrivateFieldGet(_this, _userEmail).value;

        var password = _classPrivateFieldGet(_this, _userPassword).value;

        _domain_auth_Auth__WEBPACK_IMPORTED_MODULE_0__["default"].login({
          email: email,
          password: password
        });
        _SnackBar__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(_constants__WEBPACK_IMPORTED_MODULE_4__.SNACKBAR_MESSAGE.LOGIN_SUCCESS);
      }
    });

    //멤버변수 생성
    _classPrivateFieldSet(this, _loginContainer, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.createDivElement)(_template__WEBPACK_IMPORTED_MODULE_2__.TEMPLATE.LOGIN));

    _classPrivateFieldSet(this, _loginForm, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.selectDom)('#login-form', _classPrivateFieldGet(this, _loginContainer)));

    _classPrivateFieldSet(this, _userEmail, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.selectDom)('#user-email', _classPrivateFieldGet(this, _loginContainer)));

    _classPrivateFieldSet(this, _userPassword, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.selectDom)('#user-password', _classPrivateFieldGet(this, _loginContainer))); //이벤트 바인딩


    _classPrivateFieldGet(this, _loginForm).addEventListener('submit', _classPrivateFieldGet(this, _handleLogin));
  }

  _createClass(LoginView, [{
    key: "template",
    get: function get() {
      return _classPrivateFieldGet(this, _loginContainer);
    }
  }]);

  return LoginView;
}();



/***/ }),

/***/ "./src/js/view/auth/ModifyMyInfoView.js":
/*!**********************************************!*\
  !*** ./src/js/view/auth/ModifyMyInfoView.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ModifyMyInfoView)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./src/js/constants/index.js");
/* harmony import */ var _domain_auth_Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/auth/Auth */ "./src/js/domain/auth/Auth.ts");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _SnackBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SnackBar */ "./src/js/view/SnackBar.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../template */ "./src/js/view/template.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }







var _modifyContainer = /*#__PURE__*/new WeakMap();

var _modifyForm = /*#__PURE__*/new WeakMap();

var _email = /*#__PURE__*/new WeakMap();

var _name = /*#__PURE__*/new WeakMap();

var _password = /*#__PURE__*/new WeakMap();

var _passwordConfirm = /*#__PURE__*/new WeakMap();

var ModifyMyInfoView = /*#__PURE__*/function () {
  function ModifyMyInfoView() {
    var _this = this;

    _classCallCheck(this, ModifyMyInfoView);

    _classPrivateFieldInitSpec(this, _modifyContainer, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _modifyForm, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _email, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _name, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _password, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _passwordConfirm, {
      writable: true,
      value: void 0
    });

    _defineProperty(this, "handleModify", function (e) {
      e.preventDefault();
      var id = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEY.USER_ID);

      var email = _classPrivateFieldGet(_this, _email).value;

      var name = _classPrivateFieldGet(_this, _name).value;

      var password = _classPrivateFieldGet(_this, _password).value;

      var passwordConfirm = _classPrivateFieldGet(_this, _passwordConfirm).value;

      try {
        _domain_auth_Auth__WEBPACK_IMPORTED_MODULE_1__["default"].modify(id, {
          email: email,
          name: name,
          password: password,
          passwordConfirm: passwordConfirm
        });
        _SnackBar__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(_constants__WEBPACK_IMPORTED_MODULE_0__.SNACKBAR_MESSAGE.MODIFY_MY_INFO_SUCCESS);
      } catch (error) {
        _SnackBar__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(error, _constants__WEBPACK_IMPORTED_MODULE_0__.ERROR);
      }
    });

    //멤버변수 생성
    _classPrivateFieldSet(this, _modifyContainer, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.createDivElement)(_template__WEBPACK_IMPORTED_MODULE_4__.TEMPLATE.MODIFY));

    _classPrivateFieldSet(this, _modifyForm, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.selectDom)('#register-form', _classPrivateFieldGet(this, _modifyContainer)));

    _classPrivateFieldSet(this, _email, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.selectDom)('#email', _classPrivateFieldGet(this, _modifyContainer)));

    _classPrivateFieldSet(this, _name, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.selectDom)('#name', _classPrivateFieldGet(this, _modifyContainer)));

    _classPrivateFieldSet(this, _password, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.selectDom)('#password', _classPrivateFieldGet(this, _modifyContainer)));

    _classPrivateFieldSet(this, _passwordConfirm, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.selectDom)('#password-confirm', _classPrivateFieldGet(this, _modifyContainer))); //이벤트 등록


    _classPrivateFieldGet(this, _modifyForm).addEventListener('submit', this.handleModify);
  }

  _createClass(ModifyMyInfoView, [{
    key: "template",
    get: function get() {
      var _this2 = this;

      var id = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEY.USER_ID);
      _domain_auth_Auth__WEBPACK_IMPORTED_MODULE_1__["default"].getUserInfo(id).then(function (_ref) {
        var name = _ref.name,
            email = _ref.email;
        _classPrivateFieldGet(_this2, _email).value = email;
        _classPrivateFieldGet(_this2, _name).value = name;
      });
      return _classPrivateFieldGet(this, _modifyContainer);
    }
  }]);

  return ModifyMyInfoView;
}();



/***/ }),

/***/ "./src/js/view/auth/RegisterView.js":
/*!******************************************!*\
  !*** ./src/js/view/auth/RegisterView.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RegisterView)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./src/js/constants/index.js");
/* harmony import */ var _domain_auth_Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/auth/Auth */ "./src/js/domain/auth/Auth.ts");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _SnackBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SnackBar */ "./src/js/view/SnackBar.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../template */ "./src/js/view/template.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }







var _registerContainer = /*#__PURE__*/new WeakMap();

var _registerForm = /*#__PURE__*/new WeakMap();

var _email = /*#__PURE__*/new WeakMap();

var _name = /*#__PURE__*/new WeakMap();

var _password = /*#__PURE__*/new WeakMap();

var _passwordConfirm = /*#__PURE__*/new WeakMap();

var _handleRegister = /*#__PURE__*/new WeakMap();

var RegisterView = /*#__PURE__*/function () {
  function RegisterView() {
    var _this = this;

    _classCallCheck(this, RegisterView);

    _classPrivateFieldInitSpec(this, _registerContainer, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _registerForm, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _email, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _name, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _password, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _passwordConfirm, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _handleRegister, {
      writable: true,
      value: function value(e) {
        e.preventDefault();

        var email = _classPrivateFieldGet(_this, _email).value;

        var name = _classPrivateFieldGet(_this, _name).value;

        var password = _classPrivateFieldGet(_this, _password).value;

        var passwordConfirm = _classPrivateFieldGet(_this, _passwordConfirm).value;

        try {
          _domain_auth_Auth__WEBPACK_IMPORTED_MODULE_1__["default"].register({
            email: email,
            name: name,
            password: password,
            passwordConfirm: passwordConfirm
          });
          _SnackBar__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(_constants__WEBPACK_IMPORTED_MODULE_0__.SNACKBAR_MESSAGE.REGISTER_SUCCESS);
        } catch (error) {
          _SnackBar__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(error, _constants__WEBPACK_IMPORTED_MODULE_0__.ERROR);
        }
      }
    });

    //멤버변수 생성
    _classPrivateFieldSet(this, _registerContainer, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.createDivElement)(_template__WEBPACK_IMPORTED_MODULE_4__.TEMPLATE.REGISTER));

    _classPrivateFieldSet(this, _registerForm, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.selectDom)('#register-form', _classPrivateFieldGet(this, _registerContainer)));

    _classPrivateFieldSet(this, _email, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.selectDom)('#email', _classPrivateFieldGet(this, _registerContainer)));

    _classPrivateFieldSet(this, _name, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.selectDom)('#name', _classPrivateFieldGet(this, _registerContainer)));

    _classPrivateFieldSet(this, _password, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.selectDom)('#password', _classPrivateFieldGet(this, _registerContainer)));

    _classPrivateFieldSet(this, _passwordConfirm, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.selectDom)('#password-confirm', _classPrivateFieldGet(this, _registerContainer))); //이벤트 등록


    _classPrivateFieldGet(this, _registerForm).addEventListener('submit', _classPrivateFieldGet(this, _handleRegister));
  }

  _createClass(RegisterView, [{
    key: "template",
    get: function get() {
      return _classPrivateFieldGet(this, _registerContainer);
    }
  }]);

  return RegisterView;
}();



/***/ }),

/***/ "./src/js/view/template.js":
/*!*********************************!*\
  !*** ./src/js/view/template.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TEMPLATE": () => (/* binding */ TEMPLATE)
/* harmony export */ });
var TEMPLATE = {
  MANAGE_PRODUCT: "\n    <section title=\"\uC0C1\uD488 \uC815\uBCF4\">\n      <form id=\"add-product-form\">\n        <fieldset>\n          <legend>\uCD94\uAC00\uD560 \uC0C1\uD488 \uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.</legend>\n          <input type=\"text\" id=\"add-product-name-input\" placeholder=\"\uC0C1\uD488\uBA85\" required/>\n          <input type=\"number\" id=\"add-product-price-input\" placeholder=\"\uAC00\uACA9\" min=\"100\" max=\"10000\" required/>\n          <input type=\"number\" id=\"add-product-stock-input\" placeholder=\"\uC218\uB7C9\" min=\"1\" max=\"20\" required/>\n          <button type=\"submit\" class=\"submit-button\">\uCD94\uAC00</button>\n        </fieldset>\n      </form>\n    </section>\n    <section class=\"table-section\" title=\"\uC0C1\uD488 \uD604\uD669\">\n      <table id=\"product-status-table\" class=\"product-table\">\n        <caption>\n          \uC0C1\uD488 \uD604\uD669\n        </caption>\n        <tr>\n          <th>\uC0C1\uD488\uBA85</th>\n          <th>\uAC00\uACA9</th>\n          <th>\uC218\uB7C9</th>\n          <th>\uAD00\uB9AC</th>\n        </tr>\n      </table>\n    </section>\n  ",
  PRODUCT_TABLE_ROW: function PRODUCT_TABLE_ROW(_ref) {
    var name = _ref.name,
        price = _ref.price,
        stock = _ref.stock,
        id = _ref.id;
    return "\n    <tr>\n      <td class=\"product-name\">".concat(name, "</td>\n      <td class=\"product-price\">").concat(price, "</td>\n      <td class=\"product-stock\" data-product-id=").concat(id, ">").concat(stock, "</td>\n      <td>\n        <div class=\"table-button-wrapper\">\n          <button type=\"button\" class=\"update-product-button\" data-product-id=").concat(id, ">\uC218\uC815</button>\n          <button type=\"button\" class=\"remove-product-button\" data-product-id=").concat(id, ">\uC0AD\uC81C</button>\n        </div>\n      </td>\n    </tr>\n  ");
  },
  UPDATE_PRODUCT_TABLE_ROW: function UPDATE_PRODUCT_TABLE_ROW(_ref2) {
    var name = _ref2.name,
        price = _ref2.price,
        stock = _ref2.stock,
        id = _ref2.id;
    return "\n    <tr>\n      <td><input type=\"text\" class=\"update-product-name-input\" value=\"".concat(name, "\" /></td>\n      <td><input type=\"number\" class=\"update-product-price-input\" value=\"").concat(price, "\" /></td>\n      <td><input type=\"number\" class=\"update-product-stock-input\" value=\"").concat(stock, "\" /></td>\n      <td>\n        <div class=\"table-button-wrapper\">\n          <button type=\"button\" class=\"confirm-update-button\" data-product-id=").concat(id, ">\n          \uD655\uC778\n          </button>\n          <button type=\"button\" class=\"cancel-update-button\" data-product-id=").concat(id, ">\n          \uCDE8\uC18C\n          </button>\n        </div>\n      </td>\n    </tr>\n  ");
  },
  ADD_CHANGE: "\n    <section title=\"\uC794\uB3C8 \uCDA9\uC804\">\n      <form id=\"add-change-form\">\n        <label for=\"change-input\">\uC790\uD310\uAE30\uAC00 \uBCF4\uC720\uD560 \uAE08\uC561\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694</label>\n        <div>\n          <input type=\"number\" id=\"change-input\" placeholder=\"\uAE08\uC561\" />\n          <button type=\"submit\" class=\"submit-button\">\uCDA9\uC804</button>\n        </div>\n      </form>\n      <p>\uD604\uC7AC \uBCF4\uC720 \uAE08\uC561: <span id=\"total-change\">0</span>\uC6D0</p>\n    </section>\n    <section class=\"table-section\" title=\"\uC790\uD310\uAE30\uAC00 \uBCF4\uC720\uD55C \uB3D9\uC804\">\n      <table id=\"coin-status-table\" class=\"coin-table\">\n        <caption>\n          \uC790\uD310\uAE30\uAC00 \uBCF4\uC720\uD55C \uB3D9\uC804\n        </caption>\n        <tr>\n          <th>\uB3D9\uC804</th>\n          <th>\uAC1C\uC218</th>\n        </tr>\n        <tr>\n          <td>500\uC6D0</td>\n          <td data-coin-name='FIVE_HUNDRED_WON'>0\uAC1C</td>\n        </tr>\n        <tr>\n          <td>100\uC6D0</td>\n          <td data-coin-name='ONE_HUNDRED_WON'>0\uAC1C</td>\n        </tr>\n        <tr>\n          <td>50\uC6D0</td>\n          <td data-coin-name='FIFTY_WON'>0\uAC1C</td>\n        </tr>\n        <tr>\n          <td>10\uC6D0</td>\n          <td data-coin-name='TEN_WON'>0\uAC1C</td>\n        </tr>\n      </table>\n    </section>\n  ",
  PURCHASE: "\n    <section title=\"\uAD6C\uB9E4 \uAE08\uC561 \uD22C\uC785\">\n      <form id=\"insert-money-form\">\n        <label for=\"insert-money-input\">\uC0C1\uD488\uC744 \uAD6C\uB9E4\uD560 \uAE08\uC561\uC744 \uD22C\uC785\uD574\uC8FC\uC138\uC694</label>\n        <div>\n          <input type=\"number\" id=\"insert-money-input\" placeholder=\"\uAE08\uC561\" />\n          <button type=\"submit\" class=\"submit-button\">\uD22C\uC785</button>\n        </div>\n      </form>\n      <p>\uD22C\uC785\uD55C \uAE08\uC561: <span id=\"total-insert-money\">0</span>\uC6D0</p>\n    </section>\n    <section class=\"table-section\" title=\"\uAD6C\uB9E4 \uAC00\uB2A5 \uC0C1\uD488 \uD604\uD669\">\n      <table id=\"purchaseable-product-status-table\" class=\"product-table\" >\n        <caption>\n          \uAD6C\uB9E4 \uAC00\uB2A5 \uC0C1\uD488 \uD604\uD669\n        </caption>\n        <tbody id=\"purchaseable-product-status-tbody\">\n        </tbody>\n      </table>\n    </section>\n    <section class=\"table-section\" title=\"\uC794\uB3C8 \uBC18\uD658\">\n      <table id=\"return-coin-status-table\" class=\"coin-table\">\n        <caption>\n          \uC794\uB3C8 \uBC18\uD658\n        </caption>\n        <tr>\n          <th>\uB3D9\uC804</th>\n          <th>\uAC1C\uC218</th>\n        </tr>\n        <tr>\n          <td>500\uC6D0</td>\n          <td data-coin-name='FIVE_HUNDRED_WON'>0\uAC1C</td>\n        </tr>\n        <tr>\n          <td>100\uC6D0</td>\n          <td data-coin-name='ONE_HUNDRED_WON'>0\uAC1C</td>\n        </tr>\n        <tr>\n          <td>50\uC6D0</td>\n          <td data-coin-name='FIFTY_WON'>0\uAC1C</td>\n        </tr>\n        <tr>\n          <td>10\uC6D0</td>\n          <td data-coin-name='TEN_WON'>0\uAC1C</td>\n        </tr>\n      </table>\n      <button type=\"button\" id=\"return-change-button\">\uBC18\uD658</button>\n    </section>",
  PURCHASEABLE_PRODUCT_TABLE_BODY: "\n    <tr>\n      <th>\uC0C1\uD488\uBA85</th>\n      <th>\uAC00\uACA9</th>\n      <th>\uC218\uB7C9</th>\n      <th>\uAD00\uB9AC</th>\n    </tr>\n  ",
  PURCHASEABLE_PRODUCT_TABLE_ROW: function PURCHASEABLE_PRODUCT_TABLE_ROW(_ref3) {
    var name = _ref3.name,
        price = _ref3.price,
        stock = _ref3.stock,
        id = _ref3.id;
    return "\n    <tr>\n      <td class=\"product-name\">".concat(name, "</td>\n      <td class=\"product-price\">").concat(price, "</td>\n      <td class=\"product-stock\">").concat(stock, "</td>\n      <td>\n        <div class=\"table-button-wrapper\">\n          <button type=\"button\" class=\"purchase-product-button\" data-product-id=").concat(id, ">\uAD6C\uB9E4</button>\n        </div>\n      </td>\n    </tr>\n  ");
  },
  NOT_FOUND: "\n    <section title=\"\uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uD398\uC774\uC9C0\" class=\"not-found-section\">\n      <h2>\uD83D\uDED2 Page Not Found</h2>\n      <a href=\"#/manage\" class=\"tab-menu-button\">\uC2DC\uC791 \uD398\uC774\uC9C0\uB85C</a>\n    </section>\n  ",
  LOGIN: "\n  <header>\n    <h1 id=\"app-title\">\uB85C\uADF8\uC778</h1>\n  </header>\n  <main>\n    <section title=\"\uB85C\uADF8\uC778\">\n      <form id=\"login-form\">\n        <fieldset>\n          <legend hidden>\uB85C\uADF8\uC778</legend>\n          <label for=\"user-email\">\uC774\uBA54\uC77C</label>\n          <input\n            type=\"email\"\n            id=\"user-email\"\n            placeholder=\"woowacourse@gmail.com\"\n            required\n          />\n          <label for=\"user-password\">\uBE44\uBC00\uBC88\uD638</label>\n          <input\n            type=\"password\"\n            id=\"user-password\"\n            placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.\"\n            required\n          />\n          <button type=\"submit\" class=\"submit-button\">\uD655\uC778</button>\n        </fieldset>\n        <p>\uC544\uC9C1 \uD68C\uC6D0\uC774 \uC544\uB2C8\uC2E0\uAC00\uC694? <a href=\"#/register\">\uD68C\uC6D0\uAC00\uC785</a></p>\n      </form>\n    </section>\n  </main>\n  ",
  REGISTER: "\n    <header>\n      <h1 id=\"app-title\">\uD68C\uC6D0\uAC00\uC785</h1>\n    </header>\n    <main>\n      <section title=\"\uD68C\uC6D0\uAC00\uC785\">\n        <form id=\"register-form\">\n          <fieldset>\n            <legend hidden>\uD68C\uC6D0\uAC00\uC785</legend>\n            <label for=\"email\">\uC774\uBA54\uC77C</label>\n            <input\n                type=\"email\"\n                id=\"email\"\n                placeholder=\"\uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.\"\n                required\n              />\n            <label for=\"name\">\uC774\uB984</label>\n            <input\n                type=\"text\"\n                id=\"name\"\n                placeholder=\"\uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.\"\n                required\n              />\n            <label for=\"password\">\uBE44\uBC00\uBC88\uD638</label>\n            <input\n                type=\"password\"\n                id=\"password\"\n                placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.\"\n                required\n              />\n            <label for=\"password-confirm\">\uBE44\uBC00\uBC88\uD638 \uD655\uC778</label>\n            <input\n                type=\"password\"\n                id=\"password-confirm\"\n                placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.\"\n                required\n              />\n            <button type=\"submit\" class=\"submit-button\">\uD655\uC778</button>\n          </fieldset>\n        </form>\n      </section>\n    </main>\n  ",
  MODIFY: "\n    <header>\n      <h1 id=\"app-title\">\uB0B4 \uC815\uBCF4 \uC218\uC815</h1>\n    </header>\n    <main>\n      <section title=\"\uD68C\uC6D0\uAC00\uC785\">\n        <form id=\"register-form\">\n          <fieldset>\n            <legend hidden>\uD68C\uC6D0\uAC00\uC785</legend>\n            <label for=\"email\">\uC774\uBA54\uC77C</label>\n            <input\n                type=\"email\"\n                id=\"email\"\n                placeholder=\"\uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.\"\n                required\n              />\n            <label for=\"name\">\uC774\uB984</label>\n            <input\n                type=\"text\"\n                id=\"name\"\n                placeholder=\"\uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.\"\n                required\n              />\n            <label for=\"password\">\uBE44\uBC00\uBC88\uD638</label>\n            <input\n                type=\"password\"\n                id=\"password\"\n                placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.\"\n                required\n              />\n            <label for=\"password-confirm\">\uBE44\uBC00\uBC88\uD638 \uD655\uC778</label>\n            <input\n                type=\"password\"\n                id=\"password-confirm\"\n                placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.\"\n                required\n              />\n            <button type=\"submit\" class=\"submit-button\">\uD655\uC778</button>\n          </fieldset>\n        </form>\n      </section>\n    </main>\n  ",
  ADMIN_HEADER: "\n    <header>\n      <h1 id=\"app-title\">\uD83C\uDF7F \uC790\uD310\uAE30 \uD83C\uDF7F</h1>\n      <nav id=\"tab-menu-navigation\">\n        <a id=\"manage-tab-menu\" class=\"tab-menu-button\" href=\"#/manage\">\uC0C1\uD488 \uAD00\uB9AC</a>\n        <a id=\"charge-tab-menu\" class=\"tab-menu-button\" href=\"#/charge\">\uC794\uB3C8 \uCDA9\uC804</a>\n        <a id=\"purchase-tab-menu\" class=\"tab-menu-button\" href=\"#/purchase\">\n          \uC0C1\uD488 \uAD6C\uB9E4\n        </a>\n      </nav>\n      <div class=\"profile\">\n        <div id=\"user\">\n          <a class=\"tab-menu-button\" href=\"#/login\">\uB85C\uADF8\uC778</a>\n        </div>\n        <div id=\"admin\">\n          <p id=\"nickname\"></p>\n          <div class=\"admin-detail hide\">\n            <a id=\"modify-tab-menu\" class=\"tab-menu-button\" href=\"#/modify\">\uB0B4 \uC815\uBCF4 \uC218\uC815</a>\n            <a id=\"logout-tab-menu\" class=\"tab-menu-button\" href=\"#/purchase\">\uB85C\uADF8\uC544\uC6C3</a>\n          </div>\n        </div>\n      </div>\n    </header>\n    <main></main>\n  ",
  SNACK_BAR: "\n    <div id=\"snackbar\">\uC774\uACF3\uC5D0 \uBA54\uC2DC\uC9C0\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.</div>\n  "
};

/***/ }),

/***/ "./src/js/view/vendingMachine/AddChangeTab.js":
/*!****************************************************!*\
  !*** ./src/js/view/vendingMachine/AddChangeTab.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddChangeTab)
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../template */ "./src/js/view/template.js");
/* harmony import */ var _SnackBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SnackBar */ "./src/js/view/SnackBar.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./src/js/constants/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }






var _vendingMachine = /*#__PURE__*/new WeakMap();

var _addChangeContainer = /*#__PURE__*/new WeakMap();

var _addChangeForm = /*#__PURE__*/new WeakMap();

var _changeInput = /*#__PURE__*/new WeakMap();

var _totalChange = /*#__PURE__*/new WeakMap();

var _coinStatusTable = /*#__PURE__*/new WeakMap();

var _handleAddChange = /*#__PURE__*/new WeakMap();

var _renderCoinStatus = /*#__PURE__*/new WeakSet();

var _resetInput = /*#__PURE__*/new WeakSet();

var AddChangeTab = /*#__PURE__*/function () {
  function AddChangeTab(machine) {
    var _this = this;

    _classCallCheck(this, AddChangeTab);

    _classPrivateMethodInitSpec(this, _resetInput);

    _classPrivateMethodInitSpec(this, _renderCoinStatus);

    _classPrivateFieldInitSpec(this, _vendingMachine, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _addChangeContainer, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _addChangeForm, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _changeInput, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _totalChange, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _coinStatusTable, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _handleAddChange, {
      writable: true,
      value: function value(e) {
        e.preventDefault();

        var money = _classPrivateFieldGet(_this, _changeInput).valueAsNumber;

        try {
          _classPrivateFieldGet(_this, _vendingMachine).addChange(money);

          _classPrivateMethodGet(_this, _renderCoinStatus, _renderCoinStatus2).call(_this);

          _classPrivateMethodGet(_this, _resetInput, _resetInput2).call(_this);

          _SnackBar__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_constants__WEBPACK_IMPORTED_MODULE_3__.SNACKBAR_MESSAGE.ADD_CHANGE_SUCCESS);
        } catch (_ref) {
          var message = _ref.message;
          _SnackBar__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(message, _constants__WEBPACK_IMPORTED_MODULE_3__.ERROR);
        }
      }
    });

    //멤버변수 생성
    _classPrivateFieldSet(this, _vendingMachine, machine);

    _classPrivateFieldSet(this, _addChangeContainer, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.createMainElement)(_template__WEBPACK_IMPORTED_MODULE_1__.TEMPLATE.ADD_CHANGE));

    _classPrivateFieldSet(this, _addChangeForm, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.selectDom)('#add-change-form', _classPrivateFieldGet(this, _addChangeContainer)));

    _classPrivateFieldSet(this, _changeInput, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.selectDom)('#change-input', _classPrivateFieldGet(this, _addChangeContainer)));

    _classPrivateFieldSet(this, _totalChange, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.selectDom)('#total-change', _classPrivateFieldGet(this, _addChangeContainer)));

    _classPrivateFieldSet(this, _coinStatusTable, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.selectDom)('#coin-status-table', _classPrivateFieldGet(this, _addChangeContainer))); //이벤트 바인딩


    _classPrivateFieldGet(this, _addChangeForm).addEventListener('submit', _classPrivateFieldGet(this, _handleAddChange));
  }

  _createClass(AddChangeTab, [{
    key: "tabElements",
    get: function get() {
      _classPrivateFieldGet(this, _totalChange).textContent = _classPrivateFieldGet(this, _vendingMachine).totalChange;

      _classPrivateMethodGet(this, _renderCoinStatus, _renderCoinStatus2).call(this);

      return _classPrivateFieldGet(this, _addChangeContainer);
    }
  }]);

  return AddChangeTab;
}();

function _renderCoinStatus2() {
  var coinCountElements = _classPrivateFieldGet(this, _coinStatusTable).querySelectorAll('td[data-coin-name]');

  var _classPrivateFieldGet2 = _classPrivateFieldGet(this, _vendingMachine),
      coinStatus = _classPrivateFieldGet2.coinStatus;

  _classPrivateFieldGet(this, _totalChange).textContent = _classPrivateFieldGet(this, _vendingMachine).totalChange;
  coinCountElements.forEach(function (element) {
    element.textContent = "".concat(coinStatus[element.dataset.coinName], "\uAC1C");
  });
}

function _resetInput2() {
  _classPrivateFieldGet(this, _changeInput).value = '';
}



/***/ }),

/***/ "./src/js/view/vendingMachine/ManageProductTab.js":
/*!********************************************************!*\
  !*** ./src/js/view/vendingMachine/ManageProductTab.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ManageProductTab)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./src/js/constants/index.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../template */ "./src/js/view/template.js");
/* harmony import */ var _SnackBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SnackBar */ "./src/js/view/SnackBar.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }






var _vendingMachine = /*#__PURE__*/new WeakMap();

var _manageContainer = /*#__PURE__*/new WeakMap();

var _addProductForm = /*#__PURE__*/new WeakMap();

var _addProductNameInput = /*#__PURE__*/new WeakMap();

var _addProductPriceInput = /*#__PURE__*/new WeakMap();

var _addProductStockInput = /*#__PURE__*/new WeakMap();

var _productStatusTable = /*#__PURE__*/new WeakMap();

var _renderStockStatus = /*#__PURE__*/new WeakSet();

var _handleAddProductForm = /*#__PURE__*/new WeakMap();

var _resetInput = /*#__PURE__*/new WeakSet();

var _handleProductStatus = /*#__PURE__*/new WeakMap();

var _handleProductUpdate = /*#__PURE__*/new WeakMap();

var _handleProductRemove = /*#__PURE__*/new WeakMap();

var _handleProductUpdateConfirm = /*#__PURE__*/new WeakMap();

var _handleProductUpdateCancel = /*#__PURE__*/new WeakMap();

var ManageProductTab = /*#__PURE__*/function () {
  function ManageProductTab(machine) {
    var _this = this;

    _classCallCheck(this, ManageProductTab);

    _classPrivateMethodInitSpec(this, _resetInput);

    _classPrivateMethodInitSpec(this, _renderStockStatus);

    _classPrivateFieldInitSpec(this, _vendingMachine, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _manageContainer, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _addProductForm, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _addProductNameInput, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _addProductPriceInput, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _addProductStockInput, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _productStatusTable, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _handleAddProductForm, {
      writable: true,
      value: function value(e) {
        e.preventDefault();

        var name = _classPrivateFieldGet(_this, _addProductNameInput).value;

        var price = _classPrivateFieldGet(_this, _addProductPriceInput).valueAsNumber;

        var stock = _classPrivateFieldGet(_this, _addProductStockInput).valueAsNumber;

        try {
          var id = _classPrivateFieldGet(_this, _vendingMachine).addProduct({
            name: name,
            price: price,
            stock: stock
          });

          _classPrivateFieldGet(_this, _productStatusTable).insertAdjacentHTML('beforeend', _template__WEBPACK_IMPORTED_MODULE_2__.TEMPLATE.PRODUCT_TABLE_ROW({
            name: name,
            price: price,
            stock: stock,
            id: id
          }));

          _classPrivateMethodGet(_this, _resetInput, _resetInput2).call(_this);

          _SnackBar__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(_constants__WEBPACK_IMPORTED_MODULE_0__.SNACKBAR_MESSAGE.ADD_PRODUCT_SUCCESS);
        } catch (_ref) {
          var message = _ref.message;
          _SnackBar__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(message, _constants__WEBPACK_IMPORTED_MODULE_0__.ERROR);
        }
      }
    });

    _classPrivateFieldInitSpec(this, _handleProductStatus, {
      writable: true,
      value: function value(_ref2) {
        var target = _ref2.target;
        var classList = target.classList;

        if (classList.contains('update-product-button')) {
          _classPrivateFieldGet(_this, _handleProductUpdate).call(_this, target);

          return;
        }

        if (classList.contains('remove-product-button')) {
          _classPrivateFieldGet(_this, _handleProductRemove).call(_this, target);

          return;
        }

        if (classList.contains('confirm-update-button')) {
          _classPrivateFieldGet(_this, _handleProductUpdateConfirm).call(_this, target);

          return;
        }

        if (classList.contains('cancel-update-button')) {
          _classPrivateFieldGet(_this, _handleProductUpdateCancel).call(_this, target);

          return;
        }
      }
    });

    _classPrivateFieldInitSpec(this, _handleProductUpdate, {
      writable: true,
      value: function value(target) {
        var targetTableRow = target.closest('tr');
        var name = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.selectDom)('.product-name', targetTableRow).textContent;
        var price = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.selectDom)('.product-price', targetTableRow).textContent;
        var stock = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.selectDom)('.product-stock', targetTableRow).textContent;
        var id = target.dataset.productId;
        targetTableRow.insertAdjacentHTML('afterend', _template__WEBPACK_IMPORTED_MODULE_2__.TEMPLATE.UPDATE_PRODUCT_TABLE_ROW({
          name: name,
          price: price,
          stock: stock,
          id: id
        }));
        targetTableRow.remove();
      }
    });

    _classPrivateFieldInitSpec(this, _handleProductRemove, {
      writable: true,
      value: function value(target) {
        var targetTableRow = target.closest('tr');
        var productName = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.selectDom)('.product-name', targetTableRow).textContent;

        if (window.confirm(productName + _constants__WEBPACK_IMPORTED_MODULE_0__.CONFIRM_MESSAGE)) {
          var id = target.dataset.productId;

          try {
            _classPrivateFieldGet(_this, _vendingMachine).removeProduct(id);

            target.closest('tr').remove();
            _SnackBar__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(_constants__WEBPACK_IMPORTED_MODULE_0__.SNACKBAR_MESSAGE.REMOVE_PRODUCT_SUCCESS);
          } catch (_ref3) {
            var message = _ref3.message;
            _SnackBar__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(message, _constants__WEBPACK_IMPORTED_MODULE_0__.ERROR);
          }
        }
      }
    });

    _classPrivateFieldInitSpec(this, _handleProductUpdateConfirm, {
      writable: true,
      value: function value(target) {
        var targetTableRow = target.closest('tr');
        var name = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.selectDom)('.update-product-name-input', targetTableRow).value;
        var price = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.selectDom)('.update-product-price-input', targetTableRow).valueAsNumber;
        var stock = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.selectDom)('.update-product-stock-input', targetTableRow).valueAsNumber;
        var id = target.dataset.productId;

        try {
          _classPrivateFieldGet(_this, _vendingMachine).updateProduct(id, {
            name: name,
            price: price,
            stock: stock
          });

          targetTableRow.insertAdjacentHTML('afterend', _template__WEBPACK_IMPORTED_MODULE_2__.TEMPLATE.PRODUCT_TABLE_ROW({
            name: name,
            price: price,
            stock: stock,
            id: id
          }));
          targetTableRow.remove();
          _SnackBar__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(_constants__WEBPACK_IMPORTED_MODULE_0__.SNACKBAR_MESSAGE.MODIFY_PRODUCT_SUCCESS);
        } catch (_ref4) {
          var message = _ref4.message;
          _SnackBar__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(message, _constants__WEBPACK_IMPORTED_MODULE_0__.ERROR);
        }
      }
    });

    _classPrivateFieldInitSpec(this, _handleProductUpdateCancel, {
      writable: true,
      value: function value(target) {
        var targetTableRow = target.closest('tr');
        var id = target.dataset.productId;

        var product = _classPrivateFieldGet(_this, _vendingMachine).productList[id];

        var name = product.name,
            price = product.price,
            stock = product.stock;
        targetTableRow.insertAdjacentHTML('afterend', _template__WEBPACK_IMPORTED_MODULE_2__.TEMPLATE.PRODUCT_TABLE_ROW({
          name: name,
          price: price,
          stock: stock,
          id: id
        }));
        targetTableRow.remove();
      }
    });

    //멤버변수 생성
    _classPrivateFieldSet(this, _vendingMachine, machine);

    _classPrivateFieldSet(this, _manageContainer, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.createMainElement)(_template__WEBPACK_IMPORTED_MODULE_2__.TEMPLATE.MANAGE_PRODUCT));

    _classPrivateFieldSet(this, _addProductForm, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.selectDom)('#add-product-form', _classPrivateFieldGet(this, _manageContainer)));

    _classPrivateFieldSet(this, _addProductNameInput, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.selectDom)('#add-product-name-input', _classPrivateFieldGet(this, _manageContainer)));

    _classPrivateFieldSet(this, _addProductPriceInput, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.selectDom)('#add-product-price-input', _classPrivateFieldGet(this, _manageContainer)));

    _classPrivateFieldSet(this, _addProductStockInput, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.selectDom)('#add-product-stock-input', _classPrivateFieldGet(this, _manageContainer)));

    _classPrivateFieldSet(this, _productStatusTable, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.selectDom)('#product-status-table', _classPrivateFieldGet(this, _manageContainer))); //이벤트 바인딩


    _classPrivateFieldGet(this, _addProductForm).addEventListener('submit', _classPrivateFieldGet(this, _handleAddProductForm));

    _classPrivateFieldGet(this, _productStatusTable).addEventListener('click', _classPrivateFieldGet(this, _handleProductStatus));
  }

  _createClass(ManageProductTab, [{
    key: "tabElements",
    get: function get() {
      _classPrivateMethodGet(this, _renderStockStatus, _renderStockStatus2).call(this);

      return _classPrivateFieldGet(this, _manageContainer);
    }
  }]);

  return ManageProductTab;
}();

function _renderStockStatus2() {
  var _classPrivateFieldGet2 = _classPrivateFieldGet(this, _vendingMachine),
      productList = _classPrivateFieldGet2.productList;

  for (var _i = 0, _Object$keys = Object.keys(productList); _i < _Object$keys.length; _i++) {
    var id = _Object$keys[_i];
    var stock = productList[id].stock;
    var productStock = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.selectDom)(".product-stock[data-product-id=\"".concat(id, "\"]"), _classPrivateFieldGet(this, _manageContainer));
    productStock.textContent = stock;
  }
}

function _resetInput2() {
  _classPrivateFieldGet(this, _addProductNameInput).value = '';
  _classPrivateFieldGet(this, _addProductPriceInput).value = '';
  _classPrivateFieldGet(this, _addProductStockInput).value = '';

  _classPrivateFieldGet(this, _addProductNameInput).focus();
}



/***/ }),

/***/ "./src/js/view/vendingMachine/PurchaseProductTab.js":
/*!**********************************************************!*\
  !*** ./src/js/view/vendingMachine/PurchaseProductTab.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PurchaseProductTab)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./src/js/constants/index.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _SnackBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SnackBar */ "./src/js/view/SnackBar.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../template */ "./src/js/view/template.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }






var _vendingMachine = /*#__PURE__*/new WeakMap();

var _purchaseContainer = /*#__PURE__*/new WeakMap();

var _insertMoneyForm = /*#__PURE__*/new WeakMap();

var _insertMoneyInput = /*#__PURE__*/new WeakMap();

var _totalInsertMoney = /*#__PURE__*/new WeakMap();

var _purchaseableProductStatusTbody = /*#__PURE__*/new WeakMap();

var _returnChangeButton = /*#__PURE__*/new WeakMap();

var _returnCoinStatusTable = /*#__PURE__*/new WeakMap();

var _renderPurchaseableProductList = /*#__PURE__*/new WeakSet();

var _handleReturnChange = /*#__PURE__*/new WeakMap();

var _handleInsertMoney = /*#__PURE__*/new WeakMap();

var _handlePurchaseProduct = /*#__PURE__*/new WeakMap();

var _resetInput = /*#__PURE__*/new WeakSet();

var PurchaseProductTab = /*#__PURE__*/function () {
  function PurchaseProductTab(machine) {
    var _this = this;

    _classCallCheck(this, PurchaseProductTab);

    _classPrivateMethodInitSpec(this, _resetInput);

    _classPrivateMethodInitSpec(this, _renderPurchaseableProductList);

    _classPrivateFieldInitSpec(this, _vendingMachine, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _purchaseContainer, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _insertMoneyForm, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _insertMoneyInput, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _totalInsertMoney, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _purchaseableProductStatusTbody, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _returnChangeButton, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _returnCoinStatusTable, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _handleReturnChange, {
      writable: true,
      value: function value() {
        _classPrivateFieldGet(_this, _vendingMachine).returnChange();

        var _classPrivateFieldGet2 = _classPrivateFieldGet(_this, _vendingMachine),
            returnCoinStatus = _classPrivateFieldGet2.returnCoinStatus;

        var coinCountElements = _classPrivateFieldGet(_this, _returnCoinStatusTable).querySelectorAll('td[data-coin-name]');

        coinCountElements.forEach(function (element) {
          element.textContent = "".concat(returnCoinStatus[element.dataset.coinName], "\uAC1C");
        });
        _classPrivateFieldGet(_this, _totalInsertMoney).textContent = _classPrivateFieldGet(_this, _vendingMachine).totalInsertMoney;
        _SnackBar__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_constants__WEBPACK_IMPORTED_MODULE_0__.SNACKBAR_MESSAGE.RETURN_CHAGNE_SUCCESS);
      }
    });

    _classPrivateFieldInitSpec(this, _handleInsertMoney, {
      writable: true,
      value: function value(e) {
        e.preventDefault();

        var money = _classPrivateFieldGet(_this, _insertMoneyInput).valueAsNumber;

        try {
          _classPrivateFieldGet(_this, _vendingMachine).insertMoney(money);

          _classPrivateFieldGet(_this, _totalInsertMoney).textContent = _classPrivateFieldGet(_this, _vendingMachine).totalInsertMoney;

          _classPrivateMethodGet(_this, _resetInput, _resetInput2).call(_this);

          _SnackBar__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_constants__WEBPACK_IMPORTED_MODULE_0__.SNACKBAR_MESSAGE.INSERT_MONEY_SUCCESS);
        } catch (_ref) {
          var message = _ref.message;
          _SnackBar__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(message, _constants__WEBPACK_IMPORTED_MODULE_0__.ERROR);
        }
      }
    });

    _classPrivateFieldInitSpec(this, _handlePurchaseProduct, {
      writable: true,
      value: function value(_ref2) {
        var target = _ref2.target;
        if (!target.classList.contains('purchase-product-button')) return;
        var parent = target.closest('tr');
        var productId = target.dataset.productId;
        var productStock = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.selectDom)('.product-stock', parent);

        try {
          _classPrivateFieldGet(_this, _vendingMachine).purchaseProduct(productId);

          _classPrivateFieldGet(_this, _totalInsertMoney).textContent = _classPrivateFieldGet(_this, _vendingMachine).totalInsertMoney;
          productStock.textContent = productStock.textContent - 1;
          _SnackBar__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_constants__WEBPACK_IMPORTED_MODULE_0__.SNACKBAR_MESSAGE.PURCHASE_PRODUCT_SUCCESS);
        } catch (_ref3) {
          var message = _ref3.message;
          _SnackBar__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(message, _constants__WEBPACK_IMPORTED_MODULE_0__.ERROR);
        }
      }
    });

    //멤버변수 생성
    _classPrivateFieldSet(this, _vendingMachine, machine);

    _classPrivateFieldSet(this, _purchaseContainer, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.createMainElement)(_template__WEBPACK_IMPORTED_MODULE_3__.TEMPLATE.PURCHASE));

    _classPrivateFieldSet(this, _insertMoneyForm, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.selectDom)('#insert-money-form', _classPrivateFieldGet(this, _purchaseContainer)));

    _classPrivateFieldSet(this, _insertMoneyInput, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.selectDom)('#insert-money-input', _classPrivateFieldGet(this, _purchaseContainer)));

    _classPrivateFieldSet(this, _totalInsertMoney, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.selectDom)('#total-insert-money', _classPrivateFieldGet(this, _purchaseContainer)));

    _classPrivateFieldSet(this, _purchaseableProductStatusTbody, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.selectDom)('#purchaseable-product-status-tbody', _classPrivateFieldGet(this, _purchaseContainer)));

    _classPrivateFieldSet(this, _returnChangeButton, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.selectDom)('#return-change-button', _classPrivateFieldGet(this, _purchaseContainer)));

    _classPrivateFieldSet(this, _returnCoinStatusTable, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.selectDom)('#return-coin-status-table', _classPrivateFieldGet(this, _purchaseContainer))); //이벤트 바인딩


    _classPrivateFieldGet(this, _insertMoneyForm).addEventListener('submit', _classPrivateFieldGet(this, _handleInsertMoney));

    _classPrivateFieldGet(this, _purchaseableProductStatusTbody).addEventListener('click', _classPrivateFieldGet(this, _handlePurchaseProduct));

    _classPrivateFieldGet(this, _returnChangeButton).addEventListener('click', _classPrivateFieldGet(this, _handleReturnChange));
  }

  _createClass(PurchaseProductTab, [{
    key: "tabElements",
    get: function get() {
      _classPrivateMethodGet(this, _renderPurchaseableProductList, _renderPurchaseableProductList2).call(this);

      return _classPrivateFieldGet(this, _purchaseContainer);
    }
  }]);

  return PurchaseProductTab;
}();

function _renderPurchaseableProductList2() {
  var productTableBody = _template__WEBPACK_IMPORTED_MODULE_3__.TEMPLATE.PURCHASEABLE_PRODUCT_TABLE_BODY;

  var _classPrivateFieldGet3 = _classPrivateFieldGet(this, _vendingMachine),
      productList = _classPrivateFieldGet3.productList;

  for (var _i = 0, _Object$keys = Object.keys(productList); _i < _Object$keys.length; _i++) {
    var id = _Object$keys[_i];
    var _productList$id = productList[id],
        name = _productList$id.name,
        price = _productList$id.price,
        stock = _productList$id.stock;
    var data = {
      name: name,
      price: price,
      stock: stock,
      id: id
    };
    productTableBody += _template__WEBPACK_IMPORTED_MODULE_3__.TEMPLATE.PURCHASEABLE_PRODUCT_TABLE_ROW(data);
  }

  _classPrivateFieldGet(this, _purchaseableProductStatusTbody).replaceChildren();

  _classPrivateFieldGet(this, _purchaseableProductStatusTbody).insertAdjacentHTML('beforeend', productTableBody);
}

function _resetInput2() {
  _classPrivateFieldGet(this, _insertMoneyInput).value = '';
}



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/base.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/base.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n\n  box-sizing: border-box;\n\n  word-break: keep-all;\n  line-height: 1.5;\n  /* 다양한 환경에서 동일한 글꼴 환경 세팅 */\n  font-family: 'Pretendard Variable', -apple-system, BlinkMacSystemFont, system-ui, Roboto,\n    'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',\n    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n\n  background-color: var(--default-bg-color);\n}\n\n#app {\n  width: 600px;\n  min-height: 675px;\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 52px;\n\n  margin-top: 32px;\n  padding: 45px 60px;\n\n  background-color: var(--default--white-color);\n  border: 1px solid var(--main-border-color);\n}\n\n#app-inner {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 52px;\n}\n\nmain {\n  width: 100%;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 52px;\n}\n\nbutton {\n  background-color: var(--default-button-bg-color);\n  border: none;\n  border-radius: 4px;\n\n  padding: 0 8px;\n  height: 32px;\n\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: var(--default-button-hover-bg-color);\n}\n\ninput:focus {\n  outline: none;\n}\n\n/* 숫자 입력란 화살표 숨김 */\n/* Chrome, Safari, Edge, Opera */\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n/* Firefox */\ninput[type='number'] {\n  -moz-appearance: textfield;\n}\n\n.not-found-section {\n  width: 100%;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n", "",{"version":3,"sources":["webpack://./src/css/base.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;;EAEV,sBAAsB;;EAEtB,oBAAoB;EACpB,gBAAgB;EAChB,0BAA0B;EAC1B;;wEAEsE;AACxE;;AAEA;EACE,aAAa;EACb,uBAAuB;;EAEvB,yCAAyC;AAC3C;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;;EAElB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;;EAET,gBAAgB;EAChB,kBAAkB;;EAElB,6CAA6C;EAC7C,0CAA0C;AAC5C;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,WAAW;;EAEX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,gDAAgD;EAChD,YAAY;EACZ,kBAAkB;;EAElB,cAAc;EACd,YAAY;;EAEZ,eAAe;AACjB;;AAEA;EACE,sDAAsD;AACxD;;AAEA;EACE,aAAa;AACf;;AAEA,kBAAkB;AAClB,gCAAgC;AAChC;;EAEE,wBAAwB;EACxB,SAAS;AACX;;AAEA,YAAY;AACZ;EACE,0BAA0B;AAC5B;;AAEA;EACE,WAAW;;EAEX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX","sourcesContent":["@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');\n\n* {\n  margin: 0;\n  padding: 0;\n\n  box-sizing: border-box;\n\n  word-break: keep-all;\n  line-height: 1.5;\n  /* 다양한 환경에서 동일한 글꼴 환경 세팅 */\n  font-family: 'Pretendard Variable', -apple-system, BlinkMacSystemFont, system-ui, Roboto,\n    'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',\n    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n\n  background-color: var(--default-bg-color);\n}\n\n#app {\n  width: 600px;\n  min-height: 675px;\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 52px;\n\n  margin-top: 32px;\n  padding: 45px 60px;\n\n  background-color: var(--default--white-color);\n  border: 1px solid var(--main-border-color);\n}\n\n#app-inner {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 52px;\n}\n\nmain {\n  width: 100%;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 52px;\n}\n\nbutton {\n  background-color: var(--default-button-bg-color);\n  border: none;\n  border-radius: 4px;\n\n  padding: 0 8px;\n  height: 32px;\n\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: var(--default-button-hover-bg-color);\n}\n\ninput:focus {\n  outline: none;\n}\n\n/* 숫자 입력란 화살표 숨김 */\n/* Chrome, Safari, Edge, Opera */\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n/* Firefox */\ninput[type='number'] {\n  -moz-appearance: textfield;\n}\n\n.not-found-section {\n  width: 100%;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/form.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/form.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "fieldset {\n  display: flex;\n  gap: 5px;\n\n  border: none;\n}\n\nlegend {\n  margin-bottom: 5px;\n}\n\ninput {\n  width: 120px;\n\n  padding: 8px;\n\n  border: 1px solid var(--input-border-color);\n  border-radius: 4px;\n}\n\n.submit-button {\n  height: 38px;\n\n  padding: 0 15px;\n  margin-left: 7px;\n\n  background-color: var(--submit-button-bg-color);\n\n  color: var(--default--white-color);\n  font-weight: bold;\n}\n\n.submit-button:hover {\n  background-color: var(--submit-button-hover-bg-color);\n  color: var(--submit-button-hover-text-color);\n}\n\n#add-change-form {\n  width: 100%;\n\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n\n  margin-bottom: 5px;\n}\n\n#add-change-form input {\n  width: 300px;\n}\n\n#login-form fieldset {\n  width: 100%;\n\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n\n  margin-bottom: 14px;\n}\n\n#login-form input {\n  width: 300px;\n\n  margin-bottom: 16px;\n}\n\n#login-form input:last-of-type {\n  margin-bottom: 30px;\n}\n\n#login-form a {\n  color: #3581d7;\n}\n\n#register-form fieldset {\n  width: 100%;\n\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n\n  margin-bottom: 14px;\n}\n\n#register-form input {\n  width: 300px;\n\n  margin-bottom: 16px;\n}\n\n#register-form input:last-of-type {\n  margin-bottom: 30px;\n}\n\n#insert-money-form {\n  width: 100%;\n\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n\n  margin-bottom: 5px;\n}\n\n#insert-money-form input {\n  width: 300px;\n}\n", "",{"version":3,"sources":["webpack://./src/css/form.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,QAAQ;;EAER,YAAY;AACd;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;;EAEZ,YAAY;;EAEZ,2CAA2C;EAC3C,kBAAkB;AACpB;;AAEA;EACE,YAAY;;EAEZ,eAAe;EACf,gBAAgB;;EAEhB,+CAA+C;;EAE/C,kCAAkC;EAClC,iBAAiB;AACnB;;AAEA;EACE,qDAAqD;EACrD,4CAA4C;AAC9C;;AAEA;EACE,WAAW;;EAEX,aAAa;EACb,sBAAsB;EACtB,QAAQ;;EAER,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;;EAEX,aAAa;EACb,sBAAsB;EACtB,QAAQ;;EAER,mBAAmB;AACrB;;AAEA;EACE,YAAY;;EAEZ,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,WAAW;;EAEX,aAAa;EACb,sBAAsB;EACtB,QAAQ;;EAER,mBAAmB;AACrB;;AAEA;EACE,YAAY;;EAEZ,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,WAAW;;EAEX,aAAa;EACb,sBAAsB;EACtB,QAAQ;;EAER,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd","sourcesContent":["fieldset {\n  display: flex;\n  gap: 5px;\n\n  border: none;\n}\n\nlegend {\n  margin-bottom: 5px;\n}\n\ninput {\n  width: 120px;\n\n  padding: 8px;\n\n  border: 1px solid var(--input-border-color);\n  border-radius: 4px;\n}\n\n.submit-button {\n  height: 38px;\n\n  padding: 0 15px;\n  margin-left: 7px;\n\n  background-color: var(--submit-button-bg-color);\n\n  color: var(--default--white-color);\n  font-weight: bold;\n}\n\n.submit-button:hover {\n  background-color: var(--submit-button-hover-bg-color);\n  color: var(--submit-button-hover-text-color);\n}\n\n#add-change-form {\n  width: 100%;\n\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n\n  margin-bottom: 5px;\n}\n\n#add-change-form input {\n  width: 300px;\n}\n\n#login-form fieldset {\n  width: 100%;\n\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n\n  margin-bottom: 14px;\n}\n\n#login-form input {\n  width: 300px;\n\n  margin-bottom: 16px;\n}\n\n#login-form input:last-of-type {\n  margin-bottom: 30px;\n}\n\n#login-form a {\n  color: #3581d7;\n}\n\n#register-form fieldset {\n  width: 100%;\n\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n\n  margin-bottom: 14px;\n}\n\n#register-form input {\n  width: 300px;\n\n  margin-bottom: 16px;\n}\n\n#register-form input:last-of-type {\n  margin-bottom: 30px;\n}\n\n#insert-money-form {\n  width: 100%;\n\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n\n  margin-bottom: 5px;\n}\n\n#insert-money-form input {\n  width: 300px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./base.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/base.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./form.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/form.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./nav.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/nav.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_table_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./table.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/table.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./variables.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/variables.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_snackbar_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./snackbar.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/snackbar.css");
// Imports








var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_table_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_snackbar_css__WEBPACK_IMPORTED_MODULE_7__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/nav.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/nav.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 32px;\n}\n\n#app-title {\n  font-size: 34px;\n  font-weight: 600;\n}\n\nnav {\n  display: flex;\n  gap: 10px;\n}\n\nnav.hide {\n  display: none;\n}\n\n.tab-menu-button {\n  width: 120px;\n\n  padding: 8px 0;\n\n  background-color: var(--tab-menu-button-bg-color);\n  border: none;\n  border-radius: 4px;\n\n  font-size: 1rem;\n  text-align: center;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.tab-menu-button.current {\n  background-color: var(--tab-menu-button-stress-bg-color);\n  cursor: default;\n}\n\n.tab-menu-button:hover {\n  background-color: var(--tab-menu-button-stress-bg-color);\n}\n\n.tab-menu-button:visited {\n  color: var(--default--black-color);\n}\n\n.profile #user {\n  display: flex;\n  position: absolute;\n  right: 11px;\n  top: 12px;\n}\n\n#user.hide {\n  display: none;\n}\n\n.profile #admin {\n  width: 40px;\n  height: 40px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  position: absolute;\n  right: 11px;\n  top: 12px;\n\n  background: #d6f4f8;\n  border-radius: 50%;\n\n  font-size: 20px;\n  cursor: pointer;\n}\n\n#admin.hide {\n  display: none;\n}\n\n.admin-detail {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  position: absolute;\n\n  top: 40px;\n  right: 0;\n}\n\n.admin-detail.hide {\n  display: none;\n}\n\n.admin-detail a {\n  width: 90px;\n\n  font-size: 15px;\n  color: black;\n}\n", "",{"version":3,"sources":["webpack://./src/css/nav.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;;EAEZ,cAAc;;EAEd,iDAAiD;EACjD,YAAY;EACZ,kBAAkB;;EAElB,eAAe;EACf,kBAAkB;EAClB,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,wDAAwD;EACxD,eAAe;AACjB;;AAEA;EACE,wDAAwD;AAC1D;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,WAAW;EACX,SAAS;AACX;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;;EAEZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,kBAAkB;EAClB,WAAW;EACX,SAAS;;EAET,mBAAmB;EACnB,kBAAkB;;EAElB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;;EAEnB,kBAAkB;;EAElB,SAAS;EACT,QAAQ;AACV;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;;EAEX,eAAe;EACf,YAAY;AACd","sourcesContent":["header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 32px;\n}\n\n#app-title {\n  font-size: 34px;\n  font-weight: 600;\n}\n\nnav {\n  display: flex;\n  gap: 10px;\n}\n\nnav.hide {\n  display: none;\n}\n\n.tab-menu-button {\n  width: 120px;\n\n  padding: 8px 0;\n\n  background-color: var(--tab-menu-button-bg-color);\n  border: none;\n  border-radius: 4px;\n\n  font-size: 1rem;\n  text-align: center;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.tab-menu-button.current {\n  background-color: var(--tab-menu-button-stress-bg-color);\n  cursor: default;\n}\n\n.tab-menu-button:hover {\n  background-color: var(--tab-menu-button-stress-bg-color);\n}\n\n.tab-menu-button:visited {\n  color: var(--default--black-color);\n}\n\n.profile #user {\n  display: flex;\n  position: absolute;\n  right: 11px;\n  top: 12px;\n}\n\n#user.hide {\n  display: none;\n}\n\n.profile #admin {\n  width: 40px;\n  height: 40px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  position: absolute;\n  right: 11px;\n  top: 12px;\n\n  background: #d6f4f8;\n  border-radius: 50%;\n\n  font-size: 20px;\n  cursor: pointer;\n}\n\n#admin.hide {\n  display: none;\n}\n\n.admin-detail {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  position: absolute;\n\n  top: 40px;\n  right: 0;\n}\n\n.admin-detail.hide {\n  display: none;\n}\n\n.admin-detail a {\n  width: 90px;\n\n  font-size: 15px;\n  color: black;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/snackbar.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/snackbar.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#snackbar {\n  min-width: 250px;\n\n  visibility: hidden;\n  margin-left: -125px;\n\n  background-color: #333;\n\n  background-color: #37b24d;\n  color: #fff;\n  text-align: center;\n\n  border-radius: 2px;\n  padding: 16px;\n\n  position: fixed;\n  z-index: 1;\n  left: 50%;\n  bottom: 50px;\n}\n\n#snackbar.error {\n  background-color: #f03e3e;\n}\n\n.show {\n  visibility: visible !important;\n  -webkit-animation: fadeIn 0.5s;\n  animation: fadeIn 0.5s;\n}\n\n@-webkit-keyframes fadeIn {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 50px;\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 50px;\n    opacity: 1;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/css/snackbar.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;;EAEhB,kBAAkB;EAClB,mBAAmB;;EAEnB,sBAAsB;;EAEtB,yBAAyB;EACzB,WAAW;EACX,kBAAkB;;EAElB,kBAAkB;EAClB,aAAa;;EAEb,eAAe;EACf,UAAU;EACV,SAAS;EACT,YAAY;AACd;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,8BAA8B;EAC9B,8BAA8B;EAC9B,sBAAsB;AACxB;;AAEA;EACE;IACE,SAAS;IACT,UAAU;EACZ;EACA;IACE,YAAY;IACZ,UAAU;EACZ;AACF;;AAEA;EACE;IACE,SAAS;IACT,UAAU;EACZ;EACA;IACE,YAAY;IACZ,UAAU;EACZ;AACF","sourcesContent":["#snackbar {\n  min-width: 250px;\n\n  visibility: hidden;\n  margin-left: -125px;\n\n  background-color: #333;\n\n  background-color: #37b24d;\n  color: #fff;\n  text-align: center;\n\n  border-radius: 2px;\n  padding: 16px;\n\n  position: fixed;\n  z-index: 1;\n  left: 50%;\n  bottom: 50px;\n}\n\n#snackbar.error {\n  background-color: #f03e3e;\n}\n\n.show {\n  visibility: visible !important;\n  -webkit-animation: fadeIn 0.5s;\n  animation: fadeIn 0.5s;\n}\n\n@-webkit-keyframes fadeIn {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 50px;\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 50px;\n    opacity: 1;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/table.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/table.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".table-section {\n  width: 100%;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  gap: 16px;\n}\n\ncaption {\n  margin-bottom: 16px;\n\n  font-size: 20px;\n  font-weight: 600;\n}\n\ntd,\nth {\n  height: 40px;\n\n  border-bottom: 1px solid var(--table-border-color);\n\n  text-align: center;\n}\n\nth {\n  border-top: 1px solid var(--table-border-color);\n}\n\ntable {\n  margin: 0 auto;\n\n  border-collapse: collapse;\n}\n\n.table-button-wrapper {\n  width: 90px;\n\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n\n  margin: auto;\n}\n\n#product-status-table tr input {\n  width: 90%;\n  height: 32px;\n\n  margin: auto;\n\n  font-size: 1rem;\n}\n\n.product-table th:nth-child(1) {\n  width: 160px;\n}\n.product-table th:nth-child(2) {\n  width: 60px;\n}\n.product-table th:nth-child(3) {\n  width: 50px;\n}\n.product-table th:nth-child(4) {\n  width: 140px;\n}\n\n.coin-table td {\n  width: 100px;\n}\n\n.purchase-product-button {\n  width: 100%;\n}\n\n#return-change-button {\n  width: 100px;\n}\n", "",{"version":3,"sources":["webpack://./src/css/table.css"],"names":[],"mappings":"AAAA;EACE,WAAW;;EAEX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;;EAEnB,SAAS;AACX;;AAEA;EACE,mBAAmB;;EAEnB,eAAe;EACf,gBAAgB;AAClB;;AAEA;;EAEE,YAAY;;EAEZ,kDAAkD;;EAElD,kBAAkB;AACpB;;AAEA;EACE,+CAA+C;AACjD;;AAEA;EACE,cAAc;;EAEd,yBAAyB;AAC3B;;AAEA;EACE,WAAW;;EAEX,aAAa;EACb,uBAAuB;EACvB,QAAQ;;EAER,YAAY;AACd;;AAEA;EACE,UAAU;EACV,YAAY;;EAEZ,YAAY;;EAEZ,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;AACb;AACA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;AACd","sourcesContent":[".table-section {\n  width: 100%;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  gap: 16px;\n}\n\ncaption {\n  margin-bottom: 16px;\n\n  font-size: 20px;\n  font-weight: 600;\n}\n\ntd,\nth {\n  height: 40px;\n\n  border-bottom: 1px solid var(--table-border-color);\n\n  text-align: center;\n}\n\nth {\n  border-top: 1px solid var(--table-border-color);\n}\n\ntable {\n  margin: 0 auto;\n\n  border-collapse: collapse;\n}\n\n.table-button-wrapper {\n  width: 90px;\n\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n\n  margin: auto;\n}\n\n#product-status-table tr input {\n  width: 90%;\n  height: 32px;\n\n  margin: auto;\n\n  font-size: 1rem;\n}\n\n.product-table th:nth-child(1) {\n  width: 160px;\n}\n.product-table th:nth-child(2) {\n  width: 60px;\n}\n.product-table th:nth-child(3) {\n  width: 50px;\n}\n.product-table th:nth-child(4) {\n  width: 140px;\n}\n\n.coin-table td {\n  width: 100px;\n}\n\n.purchase-product-button {\n  width: 100%;\n}\n\n#return-change-button {\n  width: 100px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/variables.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/variables.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --default--white-color: #ffffff;\n  --default--black-color: #000000;\n  --default-bg-color: #f9f9f9;\n  --default-button-bg-color: #f5f5f5;\n  --default-button-hover-bg-color: #00bcd429;\n\n  --main-bg-color: #ffffff;\n  --main-border-color: #0000001f;\n\n  --input-border-color: #b4b4b4;\n\n  --submit-button-bg-color: #00bcd4;\n  --submit-button-hover-bg-color: #80deea;\n  --submit-button-hover-text-color: #424242;\n\n  --tab-menu-button-bg-color: #f5f5f5;\n  --tab-menu-button-stress-bg-color: #00bcd429;\n\n  --table-border-color: #dcdcdc;\n}\n", "",{"version":3,"sources":["webpack://./src/css/variables.css"],"names":[],"mappings":"AAAA;EACE,+BAA+B;EAC/B,+BAA+B;EAC/B,2BAA2B;EAC3B,kCAAkC;EAClC,0CAA0C;;EAE1C,wBAAwB;EACxB,8BAA8B;;EAE9B,6BAA6B;;EAE7B,iCAAiC;EACjC,uCAAuC;EACvC,yCAAyC;;EAEzC,mCAAmC;EACnC,4CAA4C;;EAE5C,6BAA6B;AAC/B","sourcesContent":[":root {\n  --default--white-color: #ffffff;\n  --default--black-color: #000000;\n  --default-bg-color: #f9f9f9;\n  --default-button-bg-color: #f5f5f5;\n  --default-button-hover-bg-color: #00bcd429;\n\n  --main-bg-color: #ffffff;\n  --main-border-color: #0000001f;\n\n  --input-border-color: #b4b4b4;\n\n  --submit-button-bg-color: #00bcd4;\n  --submit-button-hover-bg-color: #80deea;\n  --submit-button-hover-text-color: #424242;\n\n  --tab-menu-button-bg-color: #f5f5f5;\n  --tab-menu-button-stress-bg-color: #00bcd429;\n\n  --table-border-color: #dcdcdc;\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/js/domain/auth/Auth.ts":
/*!************************************!*\
  !*** ./src/js/domain/auth/Auth.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vendingMachine_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vendingMachine/validator */ "./src/js/domain/vendingMachine/validator.ts");
/* harmony import */ var _view_SnackBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../view/SnackBar */ "./src/js/view/SnackBar.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/js/constants/index.js");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validator */ "./src/js/domain/auth/validator.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const emailValidator = [
    { testFunc: _validator__WEBPACK_IMPORTED_MODULE_3__.isEmpty, errorMsg: '이메일을 입력해주세요.' },
    { testFunc: _validator__WEBPACK_IMPORTED_MODULE_3__.hasBlank, errorMsg: '이메일은 공백을 포함할 수 없습니다.' },
];
const nameValidator = [
    { testFunc: _validator__WEBPACK_IMPORTED_MODULE_3__.isEmpty, errorMsg: '이름을 입력해주세요.' },
    { testFunc: _validator__WEBPACK_IMPORTED_MODULE_3__.hasBlank, errorMsg: '이름은 공백을 포함할 수 없습니다.' },
    {
        testFunc: _validator__WEBPACK_IMPORTED_MODULE_3__.isNameLengthOutOfRange,
        errorMsg: '이름은 2자 미만이거나 6자를 초과할 수 없습니다.',
    },
];
const passwordValidator = [
    { testFunc: _validator__WEBPACK_IMPORTED_MODULE_3__.isEmpty, errorMsg: '비밀번호를 입력해주세요.' },
    { testFunc: _validator__WEBPACK_IMPORTED_MODULE_3__.hasBlank, errorMsg: '비밀번호는 공백을 포함할 수 없습니다.' },
    {
        testFunc: _validator__WEBPACK_IMPORTED_MODULE_3__.isUnderMinLengthPassword,
        errorMsg: '비밀번호는 10자 미만일 수 없습니다.',
    },
    {
        testFunc: _validator__WEBPACK_IMPORTED_MODULE_3__.isInValidPassword,
        errorMsg: '비밀번호는 소문자, 대문자, 숫자, 특수문자 중 2가지를 혼합해야 합니다.',
    },
];
const passwordConfirmValidator = [
    { testFunc: _validator__WEBPACK_IMPORTED_MODULE_3__.isEmpty, errorMsg: '비밀번호 확인을 입력해주세요.' },
    { testFunc: _validator__WEBPACK_IMPORTED_MODULE_3__.hasBlank, errorMsg: '비밀번호 확인은 공백을 포함할 수 없습니다.' },
];
function validateUserInfo(userInfo) {
    const { email, name, password, passwordConfirm } = userInfo;
    (0,_vendingMachine_validator__WEBPACK_IMPORTED_MODULE_0__.validateData)(email, emailValidator);
    (0,_vendingMachine_validator__WEBPACK_IMPORTED_MODULE_0__.validateData)(name, nameValidator);
    (0,_vendingMachine_validator__WEBPACK_IMPORTED_MODULE_0__.validateData)(password, passwordValidator);
    (0,_vendingMachine_validator__WEBPACK_IMPORTED_MODULE_0__.validateData)(passwordConfirm, passwordConfirmValidator);
    if ((0,_validator__WEBPACK_IMPORTED_MODULE_3__.isDifferent)(password, passwordConfirm)) {
        throw Error('비밀번호와 비밀번호 확인이 일치해야 합니다.');
    }
}
const Auth = {
    register(userInfo) {
        validateUserInfo(userInfo);
        this.loadRegisterAPI(userInfo);
    },
    login(userInfo) {
        this.loadLoginAPI(userInfo);
    },
    getUserInfo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.loadUserInfoAPI(id);
        });
    },
    modify(userId, userInfo) {
        validateUserInfo(userInfo);
        this.loadModifyAPI(userId, userInfo);
    },
    loadUserInfoAPI(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`http://localhost:3000/users/${id}`).then((res) => res.json());
            return response;
        });
    },
    loadLoginAPI(userInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = userInfo;
            const payload = JSON.stringify({ email, password });
            try {
                const response = yield fetch('http://localhost:3000/signin', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: payload,
                }).then((res) => res.json());
                if (typeof response === 'string') {
                    throw Error(response);
                }
                const { accessToken, user: { id }, } = response;
                localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_2__.STORAGE_KEY.ACCESS_TOKEN, accessToken);
                localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_2__.STORAGE_KEY.USER_ID, id);
                window.location.href = '#/manage';
            }
            catch (error) {
                _view_SnackBar__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(error, _constants__WEBPACK_IMPORTED_MODULE_2__.ERROR);
            }
        });
    },
    loadRegisterAPI(userInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, name, password } = userInfo;
            const payload = JSON.stringify({ email, name, password });
            try {
                const response = yield fetch('http://localhost:3000/signup', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: payload,
                }).then((res) => res.json());
                if (typeof response === 'string') {
                    throw Error(response);
                }
                window.location.href = '#/login';
            }
            catch (error) {
                _view_SnackBar__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(error, _constants__WEBPACK_IMPORTED_MODULE_2__.ERROR);
            }
        });
    },
    loadModifyAPI(id, userInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, name, password } = userInfo;
            const payload = JSON.stringify({ email, name, password });
            try {
                const response = yield fetch(`http://localhost:3000/users/${id}`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: payload,
                }).then((res) => res.json());
                if (typeof response === 'string') {
                    throw Error(response);
                }
                window.location.href = '#/purchase';
            }
            catch (error) {
                _view_SnackBar__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(error, _constants__WEBPACK_IMPORTED_MODULE_2__.ERROR);
            }
        });
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Auth);


/***/ }),

/***/ "./src/js/domain/auth/validator.ts":
/*!*****************************************!*\
  !*** ./src/js/domain/auth/validator.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isUnderMinLengthPassword": () => (/* binding */ isUnderMinLengthPassword),
/* harmony export */   "isNameLengthOutOfRange": () => (/* binding */ isNameLengthOutOfRange),
/* harmony export */   "isDifferent": () => (/* binding */ isDifferent),
/* harmony export */   "isEmpty": () => (/* binding */ isEmpty),
/* harmony export */   "hasBlank": () => (/* binding */ hasBlank),
/* harmony export */   "isInValidPassword": () => (/* binding */ isInValidPassword),
/* harmony export */   "isSpecialCase": () => (/* binding */ isSpecialCase),
/* harmony export */   "isUpperCase": () => (/* binding */ isUpperCase),
/* harmony export */   "isLowerCase": () => (/* binding */ isLowerCase),
/* harmony export */   "isNumber": () => (/* binding */ isNumber)
/* harmony export */ });
function isUnderMinLengthPassword(password) {
    return password.length < 10;
}
function isNameLengthOutOfRange(value) {
    return value.length < 2 || value.length > 6;
}
function isDifferent(valueA, valueB) {
    return valueA !== valueB;
}
function isEmpty(value) {
    return value === '';
}
function hasBlank(value) {
    return value.includes(' ');
}
function isInValidPassword(password) {
    const testFuncs = [isSpecialCase, isUpperCase, isLowerCase, isNumber];
    for (let value of password.split('')) {
        for (let index in testFuncs) {
            if (testFuncs[index](value)) {
                testFuncs.splice(Number(index), 1);
                break;
            }
        }
        if (testFuncs.length <= 2)
            return false;
    }
    return true;
}
function isSpecialCase(value) {
    const special = ['!', '@', '#', '$', '%', '^', '&', '* '];
    return special.includes(value);
}
function isUpperCase(value) {
    const code = value.charCodeAt(0);
    return code >= 65 && code <= 90;
}
function isLowerCase(value) {
    const code = value.charCodeAt(0);
    return code >= 97 && code <= 122;
}
function isNumber(value) {
    const code = value.charCodeAt(0);
    return code >= 48 && code <= 57;
}


/***/ }),

/***/ "./src/js/domain/vendingMachine/MoneyBox.ts":
/*!**************************************************!*\
  !*** ./src/js/domain/vendingMachine/MoneyBox.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MoneyBox)
/* harmony export */ });
/* harmony import */ var _RandomStrategy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RandomStrategy */ "./src/js/domain/vendingMachine/RandomStrategy.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./src/js/constants/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/js/utils/index.js");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MoneyBox_instances, _MoneyBox_coinStatusList, _MoneyBox_returnCoinStatusList, _MoneyBox_coinDistributeStrategy, _MoneyBox_generateTotalStatus;



class MoneyBox {
    constructor() {
        _MoneyBox_instances.add(this);
        _MoneyBox_coinStatusList.set(this, void 0);
        _MoneyBox_returnCoinStatusList.set(this, void 0);
        _MoneyBox_coinDistributeStrategy.set(this, void 0);
        __classPrivateFieldSet(this, _MoneyBox_coinStatusList, [
            { name: _constants__WEBPACK_IMPORTED_MODULE_1__.COIN_500.NAME, value: _constants__WEBPACK_IMPORTED_MODULE_1__.COIN_500.VALUE, count: 0 },
            { name: _constants__WEBPACK_IMPORTED_MODULE_1__.COIN_100.NAME, value: _constants__WEBPACK_IMPORTED_MODULE_1__.COIN_100.VALUE, count: 0 },
            { name: _constants__WEBPACK_IMPORTED_MODULE_1__.COIN_50.NAME, value: _constants__WEBPACK_IMPORTED_MODULE_1__.COIN_50.VALUE, count: 0 },
            { name: _constants__WEBPACK_IMPORTED_MODULE_1__.COIN_10.NAME, value: _constants__WEBPACK_IMPORTED_MODULE_1__.COIN_10.VALUE, count: 0 },
        ], "f");
        __classPrivateFieldSet(this, _MoneyBox_returnCoinStatusList, [
            { name: _constants__WEBPACK_IMPORTED_MODULE_1__.COIN_500.NAME, value: _constants__WEBPACK_IMPORTED_MODULE_1__.COIN_500.VALUE, count: 0 },
            { name: _constants__WEBPACK_IMPORTED_MODULE_1__.COIN_100.NAME, value: _constants__WEBPACK_IMPORTED_MODULE_1__.COIN_100.VALUE, count: 0 },
            { name: _constants__WEBPACK_IMPORTED_MODULE_1__.COIN_50.NAME, value: _constants__WEBPACK_IMPORTED_MODULE_1__.COIN_50.VALUE, count: 0 },
            { name: _constants__WEBPACK_IMPORTED_MODULE_1__.COIN_10.NAME, value: _constants__WEBPACK_IMPORTED_MODULE_1__.COIN_10.VALUE, count: 0 },
        ], "f");
        __classPrivateFieldSet(this, _MoneyBox_coinDistributeStrategy, _RandomStrategy__WEBPACK_IMPORTED_MODULE_0__["default"], "f");
    }
    set strategy(strategy) {
        __classPrivateFieldSet(this, _MoneyBox_coinDistributeStrategy, strategy, "f");
    }
    get totalChange() {
        const totalChange = __classPrivateFieldGet(this, _MoneyBox_coinStatusList, "f").reduce((totalAmount, { value, count }) => totalAmount + value * count, 0);
        return totalChange;
    }
    get coinStatus() {
        return __classPrivateFieldGet(this, _MoneyBox_instances, "m", _MoneyBox_generateTotalStatus).call(this, __classPrivateFieldGet(this, _MoneyBox_coinStatusList, "f"));
    }
    get returnCoinStatus() {
        return __classPrivateFieldGet(this, _MoneyBox_instances, "m", _MoneyBox_generateTotalStatus).call(this, __classPrivateFieldGet(this, _MoneyBox_returnCoinStatusList, "f"));
    }
    addChange(inputMoney) {
        const distributedCoinStatusList = __classPrivateFieldGet(this, _MoneyBox_coinDistributeStrategy, "f").distribute(inputMoney);
        __classPrivateFieldSet(this, _MoneyBox_coinStatusList, __classPrivateFieldGet(this, _MoneyBox_coinStatusList, "f").map((coin, index) => {
            const cloneCoinObject = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.deepCopy)(coin);
            cloneCoinObject.count += distributedCoinStatusList[index].count;
            return cloneCoinObject;
        }), "f");
    }
    returnChange(totalInsertMoney) {
        const coinStatusList = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.deepCopyList)(__classPrivateFieldGet(this, _MoneyBox_coinStatusList, "f"));
        const returnCoinStatusList = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.deepCopyList)(__classPrivateFieldGet(this, _MoneyBox_returnCoinStatusList, "f"));
        let leftMoney = totalInsertMoney;
        coinStatusList.forEach(({ value, count }, index) => {
            const quotient = Math.floor(leftMoney / value);
            const number = quotient > count ? count : quotient;
            returnCoinStatusList[index].count = number;
            if (number === 0)
                return;
            leftMoney -= number * value;
            coinStatusList[index].count -= number;
        });
        __classPrivateFieldSet(this, _MoneyBox_coinStatusList, coinStatusList, "f");
        __classPrivateFieldSet(this, _MoneyBox_returnCoinStatusList, returnCoinStatusList, "f");
        return totalInsertMoney - leftMoney;
    }
}
_MoneyBox_coinStatusList = new WeakMap(), _MoneyBox_returnCoinStatusList = new WeakMap(), _MoneyBox_coinDistributeStrategy = new WeakMap(), _MoneyBox_instances = new WeakSet(), _MoneyBox_generateTotalStatus = function _MoneyBox_generateTotalStatus(statusList) {
    const totalStatus = {};
    statusList.forEach(({ name, count }) => {
        totalStatus[name] = count;
    });
    return totalStatus;
};


/***/ }),

/***/ "./src/js/domain/vendingMachine/RandomStrategy.ts":
/*!********************************************************!*\
  !*** ./src/js/domain/vendingMachine/RandomStrategy.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/js/utils/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./src/js/constants/index.js");


function getRandomCoin(moneyLeft, value) {
    const maxCount = Math.floor(moneyLeft / value);
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pickNumberInRange)(0, maxCount);
}
const RandomStrategy = {
    distribute(inputMoney) {
        const coinStatusList = [
            { name: _constants__WEBPACK_IMPORTED_MODULE_1__.COIN_500.NAME, value: _constants__WEBPACK_IMPORTED_MODULE_1__.COIN_500.VALUE, count: 0 },
            { name: _constants__WEBPACK_IMPORTED_MODULE_1__.COIN_100.NAME, value: _constants__WEBPACK_IMPORTED_MODULE_1__.COIN_100.VALUE, count: 0 },
            { name: _constants__WEBPACK_IMPORTED_MODULE_1__.COIN_50.NAME, value: _constants__WEBPACK_IMPORTED_MODULE_1__.COIN_50.VALUE, count: 0 },
            { name: _constants__WEBPACK_IMPORTED_MODULE_1__.COIN_10.NAME, value: _constants__WEBPACK_IMPORTED_MODULE_1__.COIN_10.VALUE, count: 0 },
        ];
        let moneyLeft = inputMoney;
        const distributedCoinStatusList = coinStatusList.map((coin) => {
            const cloneCoinObject = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.deepCopy)(coin);
            if (cloneCoinObject.name === 'TEN_WON') {
                cloneCoinObject.count = moneyLeft / cloneCoinObject.value;
                return cloneCoinObject;
            }
            const randomCount = getRandomCoin(moneyLeft, cloneCoinObject.value);
            moneyLeft -= cloneCoinObject.value * randomCount;
            cloneCoinObject.count = randomCount;
            return cloneCoinObject;
        });
        return distributedCoinStatusList;
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RandomStrategy);


/***/ }),

/***/ "./src/js/domain/vendingMachine/VendingMachine.ts":
/*!********************************************************!*\
  !*** ./src/js/domain/vendingMachine/VendingMachine.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VendingMachine)
/* harmony export */ });
/* harmony import */ var _VendingMachineProduct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VendingMachineProduct */ "./src/js/domain/vendingMachine/VendingMachineProduct.ts");
/* harmony import */ var _MoneyBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MoneyBox */ "./src/js/domain/vendingMachine/MoneyBox.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/js/constants/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/js/utils/index.js");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validator */ "./src/js/domain/vendingMachine/validator.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _VendingMachine_instances, _VendingMachine_productList, _VendingMachine_moneyBox, _VendingMachine_totalInsertMoney, _VendingMachine_validateChange, _VendingMachine_validateUniqueProductName, _VendingMachine_validateProductIdInList, _VendingMachine_validateInsertMoney, _VendingMachine_validatePurchaseProduct;





class VendingMachine {
    constructor() {
        _VendingMachine_instances.add(this);
        _VendingMachine_productList.set(this, void 0);
        _VendingMachine_moneyBox.set(this, void 0);
        _VendingMachine_totalInsertMoney.set(this, void 0);
        __classPrivateFieldSet(this, _VendingMachine_productList, {}, "f");
        __classPrivateFieldSet(this, _VendingMachine_moneyBox, new _MoneyBox__WEBPACK_IMPORTED_MODULE_1__["default"](), "f");
        __classPrivateFieldSet(this, _VendingMachine_totalInsertMoney, 0, "f");
    }
    get productList() {
        return __classPrivateFieldGet(this, _VendingMachine_productList, "f");
    }
    get totalChange() {
        return __classPrivateFieldGet(this, _VendingMachine_moneyBox, "f").totalChange;
    }
    get coinStatus() {
        return __classPrivateFieldGet(this, _VendingMachine_moneyBox, "f").coinStatus;
    }
    get returnCoinStatus() {
        return __classPrivateFieldGet(this, _VendingMachine_moneyBox, "f").returnCoinStatus;
    }
    get totalInsertMoney() {
        return __classPrivateFieldGet(this, _VendingMachine_totalInsertMoney, "f");
    }
    addChange(money) {
        __classPrivateFieldGet(this, _VendingMachine_instances, "m", _VendingMachine_validateChange).call(this, money);
        __classPrivateFieldGet(this, _VendingMachine_moneyBox, "f").addChange(money);
    }
    addProduct(data) {
        __classPrivateFieldGet(this, _VendingMachine_instances, "m", _VendingMachine_validateUniqueProductName).call(this, data.name);
        const newId = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.generateUniqueId)(Object.keys(__classPrivateFieldGet(this, _VendingMachine_productList, "f")));
        __classPrivateFieldGet(this, _VendingMachine_productList, "f")[newId] = new _VendingMachineProduct__WEBPACK_IMPORTED_MODULE_0__["default"](data);
        return newId;
    }
    updateProduct(productId, data) {
        __classPrivateFieldGet(this, _VendingMachine_instances, "m", _VendingMachine_validateProductIdInList).call(this, productId);
        if (data.name !== __classPrivateFieldGet(this, _VendingMachine_productList, "f")[productId].name) {
            __classPrivateFieldGet(this, _VendingMachine_instances, "m", _VendingMachine_validateUniqueProductName).call(this, data.name);
        }
        __classPrivateFieldGet(this, _VendingMachine_productList, "f")[productId].modify(data);
    }
    removeProduct(productId) {
        __classPrivateFieldGet(this, _VendingMachine_instances, "m", _VendingMachine_validateProductIdInList).call(this, productId);
        delete __classPrivateFieldGet(this, _VendingMachine_productList, "f")[productId];
    }
    insertMoney(money) {
        __classPrivateFieldGet(this, _VendingMachine_instances, "m", _VendingMachine_validateInsertMoney).call(this, money);
        __classPrivateFieldSet(this, _VendingMachine_totalInsertMoney, __classPrivateFieldGet(this, _VendingMachine_totalInsertMoney, "f") + money, "f");
    }
    purchaseProduct(productId) {
        const { price, stock } = __classPrivateFieldGet(this, _VendingMachine_productList, "f")[productId];
        __classPrivateFieldGet(this, _VendingMachine_instances, "m", _VendingMachine_validatePurchaseProduct).call(this, price, stock);
        __classPrivateFieldSet(this, _VendingMachine_totalInsertMoney, __classPrivateFieldGet(this, _VendingMachine_totalInsertMoney, "f") - price, "f");
        __classPrivateFieldGet(this, _VendingMachine_productList, "f")[productId].decreaseStock();
    }
    returnChange() {
        const returnChange = __classPrivateFieldGet(this, _VendingMachine_moneyBox, "f").returnChange(this.totalInsertMoney);
        __classPrivateFieldSet(this, _VendingMachine_totalInsertMoney, __classPrivateFieldGet(this, _VendingMachine_totalInsertMoney, "f") - returnChange, "f");
        return returnChange;
    }
}
_VendingMachine_productList = new WeakMap(), _VendingMachine_moneyBox = new WeakMap(), _VendingMachine_totalInsertMoney = new WeakMap(), _VendingMachine_instances = new WeakSet(), _VendingMachine_validateChange = function _VendingMachine_validateChange(money) {
    const changeValidator = [
        { testFunc: _validator__WEBPACK_IMPORTED_MODULE_4__.isBelowMinCharge, errorMsg: _constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.BELOW_MIN_CHANGE },
        { testFunc: _validator__WEBPACK_IMPORTED_MODULE_4__.inValidUnitChange, errorMsg: _constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.INVALID_UNIT_CHANGE },
        {
            testFunc: _validator__WEBPACK_IMPORTED_MODULE_4__.isExceedMaxTotalChange,
            errorMsg: _constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.EXCEED_MAX_TOTAL_CHANGE,
        },
    ];
    (0,_validator__WEBPACK_IMPORTED_MODULE_4__.validateData)({ money, totalChange: this.totalChange }, changeValidator);
}, _VendingMachine_validateUniqueProductName = function _VendingMachine_validateUniqueProductName(name) {
    if (Object.values(__classPrivateFieldGet(this, _VendingMachine_productList, "f")).some((product) => product.name === name)) {
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.DUPLICATE_PRODUCT_NAME);
    }
}, _VendingMachine_validateProductIdInList = function _VendingMachine_validateProductIdInList(productId) {
    if (__classPrivateFieldGet(this, _VendingMachine_productList, "f")[productId] === undefined) {
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.NOT_FOUND_PRODUCT_ID);
    }
}, _VendingMachine_validateInsertMoney = function _VendingMachine_validateInsertMoney(money) {
    if (money <= 0) {
        throw Error('투입 금액은 0원 이하일 수 없습니다.');
    }
    if (money % 10 !== 0) {
        throw Error('투입 금액은 10원 단위이어야 합니다.');
    }
    if (money > 10000) {
        throw Error('최대 투입 금액은 10000원을 초과할 수 없습니다.');
    }
}, _VendingMachine_validatePurchaseProduct = function _VendingMachine_validatePurchaseProduct(price, stock) {
    if (__classPrivateFieldGet(this, _VendingMachine_totalInsertMoney, "f") < price) {
        throw Error('투입한 금액보다 비싼 상품은 구매할 수 없습니다.');
    }
    if (stock <= 0) {
        throw Error('해당 상품은 재고가 소진되어 구매할 수 없습니다.');
    }
};


/***/ }),

/***/ "./src/js/domain/vendingMachine/VendingMachineProduct.ts":
/*!***************************************************************!*\
  !*** ./src/js/domain/vendingMachine/VendingMachineProduct.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VendingMachineProduct)
/* harmony export */ });
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validator */ "./src/js/domain/vendingMachine/validator.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./src/js/constants/index.js");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _VendingMachineProduct_instances, _VendingMachineProduct_name, _VendingMachineProduct_price, _VendingMachineProduct_stock, _VendingMachineProduct_validateProduct;


class VendingMachineProduct {
    constructor({ name, price, stock }) {
        _VendingMachineProduct_instances.add(this);
        _VendingMachineProduct_name.set(this, void 0);
        _VendingMachineProduct_price.set(this, void 0);
        _VendingMachineProduct_stock.set(this, void 0);
        __classPrivateFieldGet(this, _VendingMachineProduct_instances, "m", _VendingMachineProduct_validateProduct).call(this, { name, price, stock });
        __classPrivateFieldSet(this, _VendingMachineProduct_name, name, "f");
        __classPrivateFieldSet(this, _VendingMachineProduct_price, price, "f");
        __classPrivateFieldSet(this, _VendingMachineProduct_stock, stock, "f");
    }
    get name() {
        return __classPrivateFieldGet(this, _VendingMachineProduct_name, "f");
    }
    get price() {
        return __classPrivateFieldGet(this, _VendingMachineProduct_price, "f");
    }
    get stock() {
        return __classPrivateFieldGet(this, _VendingMachineProduct_stock, "f");
    }
    modify({ name, price, stock }) {
        __classPrivateFieldGet(this, _VendingMachineProduct_instances, "m", _VendingMachineProduct_validateProduct).call(this, { name, price, stock });
        __classPrivateFieldSet(this, _VendingMachineProduct_name, name, "f");
        __classPrivateFieldSet(this, _VendingMachineProduct_price, price, "f");
        __classPrivateFieldSet(this, _VendingMachineProduct_stock, stock, "f");
    }
    decreaseStock() {
        __classPrivateFieldSet(this, _VendingMachineProduct_stock, this.stock - 1, "f");
    }
}
_VendingMachineProduct_name = new WeakMap(), _VendingMachineProduct_price = new WeakMap(), _VendingMachineProduct_stock = new WeakMap(), _VendingMachineProduct_instances = new WeakSet(), _VendingMachineProduct_validateProduct = function _VendingMachineProduct_validateProduct(data) {
    const productValidator = [
        { testFunc: _validator__WEBPACK_IMPORTED_MODULE_0__.hasEmptyInput, errorMsg: _constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.CONTAIN_EMPTY_FIELD_IN_FORM },
        {
            testFunc: _validator__WEBPACK_IMPORTED_MODULE_0__.isOverMaxLengthName,
            errorMsg: _constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.EXCEED_MAX_PRODUCT_NAME_LENGTH,
        },
        { testFunc: _validator__WEBPACK_IMPORTED_MODULE_0__.isPriceOutOfRange, errorMsg: _constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.OUT_OF_PRODUCT_PRICE_RANGE },
        {
            testFunc: _validator__WEBPACK_IMPORTED_MODULE_0__.isInvalidUnitPrice,
            errorMsg: _constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.INVALID_UNIT_PRODUCT_PRICE,
        },
        { testFunc: _validator__WEBPACK_IMPORTED_MODULE_0__.isStockOutOfRange, errorMsg: _constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.OUT_OF_PRODUCT_STOCK_RANGE },
        { testFunc: _validator__WEBPACK_IMPORTED_MODULE_0__.isNotIntegerStock, errorMsg: _constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.INVALID_PRODUCT_STOCK },
    ];
    (0,_validator__WEBPACK_IMPORTED_MODULE_0__.validateData)(data, productValidator);
};


/***/ }),

/***/ "./src/js/domain/vendingMachine/validator.ts":
/*!***************************************************!*\
  !*** ./src/js/domain/vendingMachine/validator.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasEmptyInput": () => (/* binding */ hasEmptyInput),
/* harmony export */   "isOverMaxLengthName": () => (/* binding */ isOverMaxLengthName),
/* harmony export */   "isPriceOutOfRange": () => (/* binding */ isPriceOutOfRange),
/* harmony export */   "isInvalidUnitPrice": () => (/* binding */ isInvalidUnitPrice),
/* harmony export */   "isStockOutOfRange": () => (/* binding */ isStockOutOfRange),
/* harmony export */   "isNotIntegerStock": () => (/* binding */ isNotIntegerStock),
/* harmony export */   "isBelowMinCharge": () => (/* binding */ isBelowMinCharge),
/* harmony export */   "inValidUnitChange": () => (/* binding */ inValidUnitChange),
/* harmony export */   "isExceedMaxTotalChange": () => (/* binding */ isExceedMaxTotalChange),
/* harmony export */   "validateData": () => (/* binding */ validateData)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./src/js/constants/index.js");

// product data validation
function hasEmptyInput({ name, price, stock }) {
    return !name || !price || !stock;
}
function isOverMaxLengthName({ name }) {
    return name.length > _constants__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_RULES.MAX_NAME_LENGTH;
}
function isPriceOutOfRange({ price }) {
    return price < _constants__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_RULES.MIN_PRICE || price > _constants__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_RULES.MAX_PRICE;
}
function isInvalidUnitPrice({ price }) {
    return price % _constants__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_RULES.PRICE_UNIT !== 0;
}
function isStockOutOfRange({ stock }) {
    return stock > _constants__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_RULES.MAX_STOCK || stock < _constants__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_RULES.MIN_STOCK;
}
function isNotIntegerStock({ stock }) {
    return !Number.isInteger(stock);
}
// change data validation
function isBelowMinCharge({ money }) {
    return money <= 0;
}
function inValidUnitChange({ money }) {
    return money % _constants__WEBPACK_IMPORTED_MODULE_0__.VENDING_MACHINE_RULES.CHANGE_UNIT !== 0;
}
function isExceedMaxTotalChange({ money, totalChange, }) {
    return totalChange + money > _constants__WEBPACK_IMPORTED_MODULE_0__.VENDING_MACHINE_RULES.MAX_TOTAL_CHANGE;
}
// validator function
function validateData(data, validator) {
    validator.forEach(({ testFunc, errorMsg }) => {
        if (testFunc(data)) {
            throw new Error(errorMsg);
        }
    });
}


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.css */ "./src/css/index.css");
/* harmony import */ var _js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js */ "./src/js/index.js");



})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map