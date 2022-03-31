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
/* harmony export */   "ERROR_MESSAGE": () => (/* binding */ ERROR_MESSAGE),
/* harmony export */   "CONFIRM_MESSAGE": () => (/* binding */ CONFIRM_MESSAGE),
/* harmony export */   "PRODUCT_RULES": () => (/* binding */ PRODUCT_RULES),
/* harmony export */   "VENDING_MACHINE_RULES": () => (/* binding */ VENDING_MACHINE_RULES),
/* harmony export */   "COIN_500": () => (/* binding */ COIN_500),
/* harmony export */   "COIN_100": () => (/* binding */ COIN_100),
/* harmony export */   "COIN_50": () => (/* binding */ COIN_50),
/* harmony export */   "COIN_10": () => (/* binding */ COIN_10)
/* harmony export */ });
var ERROR_MESSAGE = {
  CONTAIN_EMPTY_FIELD_IN_FORM: '상품명, 가격, 수량을 모두 입력해주세요.',
  EXCEED_MAX_PRODUCT_NAME_LENGTH: '상품명은 10글자를 초과해서는 안됩니다.',
  DUPLICATE_PRODUCT_NAME: '중복된 상품명의 상품은 등록할 수 없습니다.',
  OUT_OF_PRODUCT_PRICE_RANGE: '상품 가격은 100원 미만이거나 10000원 초과할 수 없습니다.',
  INVALID_UNIT_PRODUCT_PRICE: '상품 가격은 10원 단위여야 합니다.',
  INVALID_PRODUCT_STOCK: '올바른 수량을 입력해주세요',
  OUT_OF_PRODUCT_STOCK_RANGE: '상품 수량은 1개 미만이거나 20개 초과할 수 없습니다.',
  NOT_FOUND_PRODUCT_ID: '존재하지 않는 상품 아이디입니다.',
  BELOW_MIN_CHANGE: '충전 금액은 0원 이하일 수 없습니다.',
  INVALID_UNIT_CHANGE: '충전 금액은 10원 단위이어야 합니다.',
  EXCEED_MAX_TOTAL_CHANGE: '최대 보유 금액은 100,000원을 초과할 수 없습니다.'
};
var CONFIRM_MESSAGE = '상품을 정말 삭제하시겠습니까?';
var PRODUCT_RULES = {
  MAX_NAME_LENGTH: 10,
  MIN_PRICE: 100,
  MAX_PRICE: 10000,
  PRICE_UNIT: 10,
  MAX_STOCK: 20,
  MIN_STOCK: 1
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
/* harmony export */   "createMainElement": () => (/* binding */ createMainElement)
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
/* harmony export */   "deepCopy": () => (/* binding */ deepCopy)
/* harmony export */ });
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

/***/ }),

/***/ "./src/js/view/AddChangeTab.js":
/*!*************************************!*\
  !*** ./src/js/view/AddChangeTab.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddChangeTab)
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template */ "./src/js/view/template.js");
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

var _moneyInput = /*#__PURE__*/new WeakMap();

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

    _classPrivateFieldInitSpec(this, _moneyInput, {
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

        var money = _classPrivateFieldGet(_this, _moneyInput).valueAsNumber;

        try {
          _classPrivateFieldGet(_this, _vendingMachine).addChange(money);

          _classPrivateMethodGet(_this, _renderCoinStatus, _renderCoinStatus2).call(_this);

          _classPrivateMethodGet(_this, _resetInput, _resetInput2).call(_this);
        } catch (_ref) {
          var message = _ref.message;
          alert(message);
        }
      }
    });

    _classPrivateFieldSet(this, _vendingMachine, machine);

    _classPrivateFieldSet(this, _addChangeContainer, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.createMainElement)(_template__WEBPACK_IMPORTED_MODULE_1__.TEMPLATE.ADD_CHANGE));

    _classPrivateFieldSet(this, _addChangeForm, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.selectDom)('#add-change-form', _classPrivateFieldGet(this, _addChangeContainer)));

    _classPrivateFieldSet(this, _moneyInput, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.selectDom)('#money-input', _classPrivateFieldGet(this, _addChangeContainer)));

    _classPrivateFieldSet(this, _totalChange, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.selectDom)('#total-change', _classPrivateFieldGet(this, _addChangeContainer)));

    _classPrivateFieldSet(this, _coinStatusTable, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.selectDom)('#coin-status-table', _classPrivateFieldGet(this, _addChangeContainer)));

    _classPrivateFieldGet(this, _addChangeForm).addEventListener('submit', _classPrivateFieldGet(this, _handleAddChange));
  }

  _createClass(AddChangeTab, [{
    key: "tabElements",
    get: function get() {
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
  _classPrivateFieldGet(this, _moneyInput).value = '';
}



/***/ }),

/***/ "./src/js/view/ManageProductTab.js":
/*!*****************************************!*\
  !*** ./src/js/view/ManageProductTab.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ManageProductTab)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/js/constants/index.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template */ "./src/js/view/template.js");
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
        } catch (_ref) {
          var message = _ref.message;
          alert(message);
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
        }

        if (classList.contains('remove-product-button')) {
          _classPrivateFieldGet(_this, _handleProductRemove).call(_this, target);
        }

        if (classList.contains('confirm-update-button')) {
          _classPrivateFieldGet(_this, _handleProductUpdateConfirm).call(_this, target);
        }

        if (classList.contains('cancel-update-button')) {
          _classPrivateFieldGet(_this, _handleProductUpdateCancel).call(_this, target);
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
          } catch (_ref3) {
            var message = _ref3.message;
            alert(message);
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
        } catch (_ref4) {
          var message = _ref4.message;
          alert(message);
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

    _classPrivateFieldSet(this, _vendingMachine, machine);

    _classPrivateFieldSet(this, _manageContainer, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.createMainElement)(_template__WEBPACK_IMPORTED_MODULE_2__.TEMPLATE.MANAGE_PRODUCT));

    _classPrivateFieldSet(this, _addProductForm, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.selectDom)('#add-product-form', _classPrivateFieldGet(this, _manageContainer)));

    _classPrivateFieldSet(this, _addProductNameInput, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.selectDom)('#add-product-name-input', _classPrivateFieldGet(this, _manageContainer)));

    _classPrivateFieldSet(this, _addProductPriceInput, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.selectDom)('#add-product-price-input', _classPrivateFieldGet(this, _manageContainer)));

    _classPrivateFieldSet(this, _addProductStockInput, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.selectDom)('#add-product-stock-input', _classPrivateFieldGet(this, _manageContainer)));

    _classPrivateFieldSet(this, _productStatusTable, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.selectDom)('#product-status-table', _classPrivateFieldGet(this, _manageContainer)));

    _classPrivateFieldGet(this, _addProductForm).addEventListener('submit', _classPrivateFieldGet(this, _handleAddProductForm));

    _classPrivateFieldGet(this, _productStatusTable).addEventListener('click', _classPrivateFieldGet(this, _handleProductStatus));
  }

  _createClass(ManageProductTab, [{
    key: "tabElements",
    get: function get() {
      return _classPrivateFieldGet(this, _manageContainer);
    }
  }]);

  return ManageProductTab;
}();

function _resetInput2() {
  _classPrivateFieldGet(this, _addProductNameInput).value = '';
  _classPrivateFieldGet(this, _addProductPriceInput).value = '';
  _classPrivateFieldGet(this, _addProductStockInput).value = '';

  _classPrivateFieldGet(this, _addProductNameInput).focus();
}



/***/ }),

/***/ "./src/js/view/PurchaseProductTab.js":
/*!*******************************************!*\
  !*** ./src/js/view/PurchaseProductTab.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PurchaseProductTab)
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template */ "./src/js/view/template.js");
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




var _purchaseContainer = /*#__PURE__*/new WeakMap();

var PurchaseProductTab = /*#__PURE__*/function () {
  function PurchaseProductTab() {
    _classCallCheck(this, PurchaseProductTab);

    _classPrivateFieldInitSpec(this, _purchaseContainer, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _purchaseContainer, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.createMainElement)(_template__WEBPACK_IMPORTED_MODULE_1__.TEMPLATE.PURCHASE));
  }

  _createClass(PurchaseProductTab, [{
    key: "tabElements",
    get: function get() {
      return _classPrivateFieldGet(this, _purchaseContainer);
    }
  }]);

  return PurchaseProductTab;
}();



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
/* harmony import */ var _domain_VendingMachine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domain/VendingMachine */ "./src/js/domain/VendingMachine.ts");
/* harmony import */ var _PurchaseProductTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PurchaseProductTab */ "./src/js/view/PurchaseProductTab.js");
/* harmony import */ var _AddChangeTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddChangeTab */ "./src/js/view/AddChangeTab.js");
/* harmony import */ var _ManageProductTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ManageProductTab */ "./src/js/view/ManageProductTab.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template */ "./src/js/view/template.js");
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

var _tabMenuNavigation = /*#__PURE__*/new WeakMap();

var _render = /*#__PURE__*/new WeakMap();

var _updateCurrentTabMenu = /*#__PURE__*/new WeakSet();

var _handleTabMenuChange = /*#__PURE__*/new WeakMap();

var Router = /*#__PURE__*/_createClass(function Router() {
  var _this = this;

  _classCallCheck(this, Router);

  _classPrivateMethodInitSpec(this, _updateCurrentTabMenu);

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

  _classPrivateFieldInitSpec(this, _tabMenuNavigation, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _render, {
    writable: true,
    value: function value() {
      var path = window.location.hash || '#/manage';

      _classPrivateMethodGet(_this, _updateCurrentTabMenu, _updateCurrentTabMenu2).call(_this, path);

      var main = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.selectDom)('main');

      if (!_classPrivateFieldGet(_this, _renderList)[path]) {
        var notFoundContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.createMainElement)(_template__WEBPACK_IMPORTED_MODULE_5__.TEMPLATE.NOT_FOUND);

        _classPrivateFieldGet(_this, _app).replaceChild(notFoundContainer, main);

        return;
      }

      _classPrivateFieldGet(_this, _app).replaceChild(_classPrivateFieldGet(_this, _renderList)[path].tabElements, main);
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

  _classPrivateFieldSet(this, _vendingMachine, new _domain_VendingMachine__WEBPACK_IMPORTED_MODULE_0__["default"]());

  _classPrivateFieldSet(this, _renderList, {
    '#/manage': new _ManageProductTab__WEBPACK_IMPORTED_MODULE_3__["default"](_classPrivateFieldGet(this, _vendingMachine)),
    '#/charge': new _AddChangeTab__WEBPACK_IMPORTED_MODULE_2__["default"](_classPrivateFieldGet(this, _vendingMachine)),
    '#/purchase': new _PurchaseProductTab__WEBPACK_IMPORTED_MODULE_1__["default"]()
  });

  _classPrivateFieldSet(this, _app, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.selectDom)('#app'));

  _classPrivateFieldSet(this, _tabMenuNavigation, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.selectDom)('#tab-menu-navigation'));

  window.addEventListener('popstate', _classPrivateFieldGet(this, _render));
  window.addEventListener('DOMContentLoaded', _classPrivateFieldGet(this, _render));

  _classPrivateFieldGet(this, _tabMenuNavigation).addEventListener('click', _classPrivateFieldGet(this, _handleTabMenuChange));
});

function _updateCurrentTabMenu2(path) {
  var previousMenuButton = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.selectDom)('.current', _classPrivateFieldGet(this, _tabMenuNavigation));
  previousMenuButton === null || previousMenuButton === void 0 ? void 0 : previousMenuButton.classList.remove('current');
  var currentMenuButton = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.selectDom)("[href=\"".concat(path, "\"]"), _classPrivateFieldGet(this, _tabMenuNavigation));
  currentMenuButton === null || currentMenuButton === void 0 ? void 0 : currentMenuButton.classList.add('current');
}



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
  MANAGE_PRODUCT: "\n    <section title=\"\uC0C1\uD488 \uC815\uBCF4\">\n      <form id=\"add-product-form\">\n        <fieldset>\n          <legend>\uCD94\uAC00\uD560 \uC0C1\uD488 \uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.</legend>\n          <input type=\"text\" id=\"add-product-name-input\" placeholder=\"\uC0C1\uD488\uBA85\" required/>\n          <input type=\"number\" id=\"add-product-price-input\" placeholder=\"\uAC00\uACA9\" min=\"100\" max=\"10000\" required/>\n          <input type=\"number\" id=\"add-product-stock-input\" placeholder=\"\uC218\uB7C9\" min=\"1\" max=\"20\" required/>\n          <button type=\"submit\" class=\"submit-button\">\uCD94\uAC00</button>\n        </fieldset>\n      </form>\n    </section>\n    <section class=\"table-section\" title=\"\uC0C1\uD488 \uD604\uD669\">\n      <table id=\"product-status-table\">\n        <caption>\n          \uC0C1\uD488 \uD604\uD669\n        </caption>\n        <tr>\n          <th>\uC0C1\uD488\uBA85</th>\n          <th>\uAC00\uACA9</th>\n          <th>\uC218\uB7C9</th>\n          <th>\uAD00\uB9AC</th>\n        </tr>\n      </table>\n    </section>\n  ",
  ADD_CHANGE: "\n    <section title=\"\uC794\uB3C8 \uCDA9\uC804\">\n      <form id=\"add-change-form\">\n        <label for=\"\">\uC790\uD310\uAE30\uAC00 \uBCF4\uC720\uD560 \uAE08\uC561\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694</label>\n        <div>\n          <input type=\"number\" id=\"money-input\" placeholder=\"\uAE08\uC561\" />\n          <button type=\"submit\" class=\"submit-button\">\uCDA9\uC804</button>\n        </div>\n      </form>\n      <p>\uD604\uC7AC \uBCF4\uC720 \uAE08\uC561: <span id=\"total-change\">0</span>\uC6D0</p>\n    </section>\n    <section class=\"table-section\" title=\"\uC790\uD310\uAE30 \uD604\uD669\">\n      <table id=\"coin-status-table\">\n        <caption>\n          \uC790\uD310\uAE30\uAC00 \uBCF4\uC720\uD55C \uB3D9\uC804\n        </caption>\n        <tr>\n          <th>\uB3D9\uC804</th>\n          <th>\uAC1C\uC218</th>\n        </tr>\n        <tr>\n          <td>500\uC6D0</td>\n          <td data-coin-name='FIVE_HUNDRED_WON'>0\uAC1C</td>\n        </tr>\n        <tr>\n          <td>100\uC6D0</td>\n          <td data-coin-name='ONE_HUNDRED_WON'>0\uAC1C</td>\n        </tr>\n        <tr>\n          <td>50\uC6D0</td>\n          <td data-coin-name='FIFTY_WON'>0\uAC1C</td>\n        </tr>\n        <tr>\n          <td>10\uC6D0</td>\n          <td data-coin-name='TEN_WON'>0\uAC1C</td>\n        </tr>\n      </table>\n    </section>\n  ",
  PRODUCT_TABLE_ROW: function PRODUCT_TABLE_ROW(_ref) {
    var name = _ref.name,
        price = _ref.price,
        stock = _ref.stock,
        id = _ref.id;
    return "\n    <tr>\n      <td class=\"product-name\">".concat(name, "</td>\n      <td class=\"product-price\">").concat(price, "</td>\n      <td class=\"product-stock\">").concat(stock, "</td>\n      <td>\n        <div class=\"table-button-wrapper\">\n          <button type=\"button\" class=\"update-product-button\" data-product-id=").concat(id, ">\uC218\uC815</button>\n          <button type=\"button\" class=\"remove-product-button\" data-product-id=").concat(id, ">\uC0AD\uC81C</button>\n        </div>\n      </td>\n    </tr>\n  ");
  },
  UPDATE_PRODUCT_TABLE_ROW: function UPDATE_PRODUCT_TABLE_ROW(_ref2) {
    var name = _ref2.name,
        price = _ref2.price,
        stock = _ref2.stock,
        id = _ref2.id;
    return "\n    <tr>\n      <td><input type=\"text\" class=\"update-product-name-input\" value=\"".concat(name, "\" /></td>\n      <td><input type=\"number\" class=\"update-product-price-input\" value=\"").concat(price, "\" /></td>\n      <td><input type=\"number\" class=\"update-product-stock-input\" value=\"").concat(stock, "\" /></td>\n      <td>\n        <div class=\"table-button-wrapper\">\n          <button type=\"button\" class=\"confirm-update-button\" data-product-id=").concat(id, ">\n          \uD655\uC778\n          </button>\n          <button type=\"button\" class=\"cancel-update-button\" data-product-id=").concat(id, ">\n          \uCDE8\uC18C\n          </button>\n        </div>\n      </td>\n    </tr>\n  ");
  },
  PURCHASE: "<div>\uC544\uC9C1 \uACF5\uC0AC\uC911\uC785\uB2C8\uB2E4 \uD83D\uDEAB </div>",
  NOT_FOUND: "\n    <section title=\"\uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uD398\uC774\uC9C0\" class=\"not-found-section\">\n      <h2>\uD83D\uDED2 Page Not Found</h2>\n      <a href=\"#/manage\" class=\"tab-menu-button\">\uC2DC\uC791 \uD398\uC774\uC9C0\uB85C</a>\n    </section>\n  "
};

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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n\n  box-sizing: border-box;\n\n  word-break: keep-all;\n  line-height: 1.5;\n  /* 다양한 환경에서 동일한 글꼴 환경 세팅 */\n  font-family: 'Pretendard Variable', -apple-system, BlinkMacSystemFont, system-ui, Roboto,\n    'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',\n    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n\n  background-color: var(--default-bg-color);\n}\n\n#app {\n  width: 600px;\n  min-height: 675px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 52px;\n\n  margin-top: 32px;\n  padding: 45px 60px;\n\n  background-color: var(--default--white-color);\n  border: 1px solid var(--main-border-color);\n}\n\nmain {\n  width: 100%;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 52px;\n}\n\nbutton {\n  background-color: var(--default-button-bg-color);\n  border: none;\n  border-radius: 4px;\n\n  padding: 8px;\n\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: var(--default-button-hover-bg-color);\n}\n\ninput:focus {\n  outline: none;\n}\n\n/* 숫자 입력란 화살표 숨김 */\n/* Chrome, Safari, Edge, Opera */\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n/* Firefox */\ninput[type='number'] {\n  -moz-appearance: textfield;\n}\n\n.not-found-section {\n  width: 100%;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n", "",{"version":3,"sources":["webpack://./src/css/base.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;;EAEV,sBAAsB;;EAEtB,oBAAoB;EACpB,gBAAgB;EAChB,0BAA0B;EAC1B;;wEAEsE;AACxE;;AAEA;EACE,aAAa;EACb,uBAAuB;;EAEvB,yCAAyC;AAC3C;;AAEA;EACE,YAAY;EACZ,iBAAiB;;EAEjB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;;EAET,gBAAgB;EAChB,kBAAkB;;EAElB,6CAA6C;EAC7C,0CAA0C;AAC5C;;AAEA;EACE,WAAW;;EAEX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,gDAAgD;EAChD,YAAY;EACZ,kBAAkB;;EAElB,YAAY;;EAEZ,eAAe;AACjB;;AAEA;EACE,sDAAsD;AACxD;;AAEA;EACE,aAAa;AACf;;AAEA,kBAAkB;AAClB,gCAAgC;AAChC;;EAEE,wBAAwB;EACxB,SAAS;AACX;;AAEA,YAAY;AACZ;EACE,0BAA0B;AAC5B;;AAEA;EACE,WAAW;;EAEX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX","sourcesContent":["@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');\n\n* {\n  margin: 0;\n  padding: 0;\n\n  box-sizing: border-box;\n\n  word-break: keep-all;\n  line-height: 1.5;\n  /* 다양한 환경에서 동일한 글꼴 환경 세팅 */\n  font-family: 'Pretendard Variable', -apple-system, BlinkMacSystemFont, system-ui, Roboto,\n    'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',\n    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n\n  background-color: var(--default-bg-color);\n}\n\n#app {\n  width: 600px;\n  min-height: 675px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 52px;\n\n  margin-top: 32px;\n  padding: 45px 60px;\n\n  background-color: var(--default--white-color);\n  border: 1px solid var(--main-border-color);\n}\n\nmain {\n  width: 100%;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 52px;\n}\n\nbutton {\n  background-color: var(--default-button-bg-color);\n  border: none;\n  border-radius: 4px;\n\n  padding: 8px;\n\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: var(--default-button-hover-bg-color);\n}\n\ninput:focus {\n  outline: none;\n}\n\n/* 숫자 입력란 화살표 숨김 */\n/* Chrome, Safari, Edge, Opera */\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n/* Firefox */\ninput[type='number'] {\n  -moz-appearance: textfield;\n}\n\n.not-found-section {\n  width: 100%;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "fieldset {\n  display: flex;\n  gap: 5px;\n\n  border: none;\n}\n\nlegend {\n  margin-bottom: 5px;\n}\n\ninput {\n  width: 120px;\n\n  padding: 8px;\n\n  border: 1px solid var(--input-border-color);\n  border-radius: 4px;\n}\n\n.submit-button {\n  background-color: var(--submit-button-bg-color);\n\n  padding: 10px 15px;\n\n  color: var(--default--white-color);\n  font-weight: bold;\n}\n\n.submit-button:hover {\n  background-color: var(--submit-button-hover-bg-color);\n  color: var(--submit-button-hover-text-color);\n}\n\n#add-change-form {\n  width: 100%;\n\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n\n  margin-bottom: 5px;\n}\n\n#add-change-form input {\n  width: 300px;\n}\n", "",{"version":3,"sources":["webpack://./src/css/form.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,QAAQ;;EAER,YAAY;AACd;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;;EAEZ,YAAY;;EAEZ,2CAA2C;EAC3C,kBAAkB;AACpB;;AAEA;EACE,+CAA+C;;EAE/C,kBAAkB;;EAElB,kCAAkC;EAClC,iBAAiB;AACnB;;AAEA;EACE,qDAAqD;EACrD,4CAA4C;AAC9C;;AAEA;EACE,WAAW;;EAEX,aAAa;EACb,sBAAsB;EACtB,QAAQ;;EAER,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd","sourcesContent":["fieldset {\n  display: flex;\n  gap: 5px;\n\n  border: none;\n}\n\nlegend {\n  margin-bottom: 5px;\n}\n\ninput {\n  width: 120px;\n\n  padding: 8px;\n\n  border: 1px solid var(--input-border-color);\n  border-radius: 4px;\n}\n\n.submit-button {\n  background-color: var(--submit-button-bg-color);\n\n  padding: 10px 15px;\n\n  color: var(--default--white-color);\n  font-weight: bold;\n}\n\n.submit-button:hover {\n  background-color: var(--submit-button-hover-bg-color);\n  color: var(--submit-button-hover-text-color);\n}\n\n#add-change-form {\n  width: 100%;\n\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n\n  margin-bottom: 5px;\n}\n\n#add-change-form input {\n  width: 300px;\n}\n"],"sourceRoot":""}]);
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
// Imports







var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_table_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
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
___CSS_LOADER_EXPORT___.push([module.id, "header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 32px;\n}\n\n#app-title {\n  font-size: 34px;\n  font-weight: 600;\n}\n\nnav {\n  display: flex;\n  gap: 10px;\n}\n\n.tab-menu-button {\n  width: 120px;\n\n  padding: 8px 0;\n\n  background-color: var(--tab-menu-button-bg-color);\n  border: none;\n  border-radius: 4px;\n\n  font-size: 1rem;\n  text-align: center;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.tab-menu-button.current {\n  background-color: var(--tab-menu-button-stress-bg-color);\n  cursor: default;\n}\n\n.tab-menu-button:hover {\n  background-color: var(--tab-menu-button-stress-bg-color);\n}\n\n.tab-menu-button:visited {\n  color: var(--default--black-color);\n}\n", "",{"version":3,"sources":["webpack://./src/css/nav.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,YAAY;;EAEZ,cAAc;;EAEd,iDAAiD;EACjD,YAAY;EACZ,kBAAkB;;EAElB,eAAe;EACf,kBAAkB;EAClB,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,wDAAwD;EACxD,eAAe;AACjB;;AAEA;EACE,wDAAwD;AAC1D;;AAEA;EACE,kCAAkC;AACpC","sourcesContent":["header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 32px;\n}\n\n#app-title {\n  font-size: 34px;\n  font-weight: 600;\n}\n\nnav {\n  display: flex;\n  gap: 10px;\n}\n\n.tab-menu-button {\n  width: 120px;\n\n  padding: 8px 0;\n\n  background-color: var(--tab-menu-button-bg-color);\n  border: none;\n  border-radius: 4px;\n\n  font-size: 1rem;\n  text-align: center;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.tab-menu-button.current {\n  background-color: var(--tab-menu-button-stress-bg-color);\n  cursor: default;\n}\n\n.tab-menu-button:hover {\n  background-color: var(--tab-menu-button-stress-bg-color);\n}\n\n.tab-menu-button:visited {\n  color: var(--default--black-color);\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".table-section {\n  width: 100%;\n}\n\ncaption {\n  margin-bottom: 16px;\n\n  font-size: 20px;\n  font-weight: 600;\n}\n\ntd,\nth {\n  padding: 8px 0;\n\n  border-bottom: 1px solid var(--table-border-color);\n\n  text-align: center;\n}\n\ntd {\n  height: 65px;\n}\n\nth {\n  border-top: 1px solid var(--table-border-color);\n}\n\ntable {\n  margin: 0 auto;\n\n  border-collapse: collapse;\n}\n\n.table-button-wrapper {\n  width: 90px;\n\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n\n  margin: auto;\n}\n\n.confirm-update-button {\n  width: 100%;\n}\n\n#product-status-table tr input {\n  width: 90%;\n\n  margin: auto;\n\n  font-size: 1rem;\n}\n\n#product-status-table th:nth-child(1) {\n  width: 160px;\n}\n#product-status-table th:nth-child(2) {\n  width: 60px;\n}\n#product-status-table th:nth-child(3) {\n  width: 50px;\n}\n#product-status-table th:nth-child(4) {\n  width: 140px;\n}\n\n#coin-status-table td {\n  width: 100px;\n}\n", "",{"version":3,"sources":["webpack://./src/css/table.css"],"names":[],"mappings":"AAAA;EACE,WAAW;AACb;;AAEA;EACE,mBAAmB;;EAEnB,eAAe;EACf,gBAAgB;AAClB;;AAEA;;EAEE,cAAc;;EAEd,kDAAkD;;EAElD,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,+CAA+C;AACjD;;AAEA;EACE,cAAc;;EAEd,yBAAyB;AAC3B;;AAEA;EACE,WAAW;;EAEX,aAAa;EACb,uBAAuB;EACvB,QAAQ;;EAER,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,UAAU;;EAEV,YAAY;;EAEZ,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;AACb;AACA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd","sourcesContent":[".table-section {\n  width: 100%;\n}\n\ncaption {\n  margin-bottom: 16px;\n\n  font-size: 20px;\n  font-weight: 600;\n}\n\ntd,\nth {\n  padding: 8px 0;\n\n  border-bottom: 1px solid var(--table-border-color);\n\n  text-align: center;\n}\n\ntd {\n  height: 65px;\n}\n\nth {\n  border-top: 1px solid var(--table-border-color);\n}\n\ntable {\n  margin: 0 auto;\n\n  border-collapse: collapse;\n}\n\n.table-button-wrapper {\n  width: 90px;\n\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n\n  margin: auto;\n}\n\n.confirm-update-button {\n  width: 100%;\n}\n\n#product-status-table tr input {\n  width: 90%;\n\n  margin: auto;\n\n  font-size: 1rem;\n}\n\n#product-status-table th:nth-child(1) {\n  width: 160px;\n}\n#product-status-table th:nth-child(2) {\n  width: 60px;\n}\n#product-status-table th:nth-child(3) {\n  width: 50px;\n}\n#product-status-table th:nth-child(4) {\n  width: 140px;\n}\n\n#coin-status-table td {\n  width: 100px;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/js/domain/MoneyBox.ts":
/*!***********************************!*\
  !*** ./src/js/domain/MoneyBox.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MoneyBox)
/* harmony export */ });
/* harmony import */ var _RandomStrategy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RandomStrategy */ "./src/js/domain/RandomStrategy.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/js/constants/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/js/utils/index.js");



class MoneyBox {
    constructor() {
        this._coinStatusList = [
            { name: _constants__WEBPACK_IMPORTED_MODULE_1__.COIN_500.NAME, value: _constants__WEBPACK_IMPORTED_MODULE_1__.COIN_500.VALUE, count: 0 },
            { name: _constants__WEBPACK_IMPORTED_MODULE_1__.COIN_100.NAME, value: _constants__WEBPACK_IMPORTED_MODULE_1__.COIN_100.VALUE, count: 0 },
            { name: _constants__WEBPACK_IMPORTED_MODULE_1__.COIN_50.NAME, value: _constants__WEBPACK_IMPORTED_MODULE_1__.COIN_50.VALUE, count: 0 },
            { name: _constants__WEBPACK_IMPORTED_MODULE_1__.COIN_10.NAME, value: _constants__WEBPACK_IMPORTED_MODULE_1__.COIN_10.VALUE, count: 0 },
        ];
        this.coinDistributeStrategy = _RandomStrategy__WEBPACK_IMPORTED_MODULE_0__["default"];
    }
    set strategy(strategy) {
        this.coinDistributeStrategy = strategy;
    }
    get totalChange() {
        return this._coinStatusList.reduce((totalAmount, { value, count }) => totalAmount + value * count, 0);
    }
    get coinStatus() {
        const totalStatus = {};
        this._coinStatusList.forEach(({ name, count }) => {
            totalStatus[name] = count;
        });
        return totalStatus;
    }
    get coinStatusList() {
        return this._coinStatusList;
    }
    addChange(inputMoney) {
        const distributedCoinStatusList = this.coinDistributeStrategy.distribute(inputMoney);
        this._coinStatusList = this._coinStatusList.map((coin, index) => {
            const cloneCoinObject = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.deepCopy)(coin);
            cloneCoinObject.count += distributedCoinStatusList[index].count;
            return cloneCoinObject;
        });
    }
}


/***/ }),

/***/ "./src/js/domain/RandomStrategy.ts":
/*!*****************************************!*\
  !*** ./src/js/domain/RandomStrategy.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/js/utils/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/js/constants/index.js");


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

/***/ "./src/js/domain/VendingMachine.ts":
/*!*****************************************!*\
  !*** ./src/js/domain/VendingMachine.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VendingMachine)
/* harmony export */ });
/* harmony import */ var _VendingMachineProduct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VendingMachineProduct */ "./src/js/domain/VendingMachineProduct.ts");
/* harmony import */ var _MoneyBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MoneyBox */ "./src/js/domain/MoneyBox.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/js/constants/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/js/utils/index.js");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validator */ "./src/js/domain/validator.ts");





class VendingMachine {
    constructor() {
        this._productList = {};
        this._moneyBox = new _MoneyBox__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    get productList() {
        return this._productList;
    }
    get totalChange() {
        return this._moneyBox.totalChange;
    }
    get coinStatus() {
        return this._moneyBox.coinStatus;
    }
    addChange(money) {
        this.validateChange(money);
        this._moneyBox.addChange(money);
        return this._moneyBox.coinStatusList;
    }
    addProduct(data) {
        this.validateUniqueProductName(data.name);
        const newId = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.generateUniqueId)(Object.keys(this._productList));
        this._productList[newId] = new _VendingMachineProduct__WEBPACK_IMPORTED_MODULE_0__["default"](data);
        return newId;
    }
    updateProduct(productId, data) {
        this.validateProductIdInList(productId);
        if (data.name !== this._productList[productId].name) {
            this.validateUniqueProductName(data.name);
        }
        this._productList[productId].modify(data);
    }
    removeProduct(productId) {
        this.validateProductIdInList(productId);
        delete this._productList[productId];
    }
    validateChange(money) {
        const changeValidator = [
            { testFunc: _validator__WEBPACK_IMPORTED_MODULE_4__.isBelowMinCharge, errorMsg: _constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.BELOW_MIN_CHANGE },
            { testFunc: _validator__WEBPACK_IMPORTED_MODULE_4__.inValidUnitChange, errorMsg: _constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.INVALID_UNIT_CHANGE },
            {
                testFunc: _validator__WEBPACK_IMPORTED_MODULE_4__.isExceedMaxTotalChange,
                errorMsg: _constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.EXCEED_MAX_TOTAL_CHANGE,
            },
        ];
        (0,_validator__WEBPACK_IMPORTED_MODULE_4__.validateData)({ money, totalChange: this.totalChange }, changeValidator);
    }
    validateUniqueProductName(name) {
        if (Object.values(this._productList).some((product) => product.name === name)) {
            throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.DUPLICATE_PRODUCT_NAME);
        }
    }
    validateProductIdInList(productId) {
        if (this._productList[productId] === undefined) {
            throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.NOT_FOUND_PRODUCT_ID);
        }
    }
}


/***/ }),

/***/ "./src/js/domain/VendingMachineProduct.ts":
/*!************************************************!*\
  !*** ./src/js/domain/VendingMachineProduct.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VendingMachineProduct)
/* harmony export */ });
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validator */ "./src/js/domain/validator.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/js/constants/index.js");


class VendingMachineProduct {
    constructor({ name, price, stock }) {
        this.validateProduct({ name, price, stock });
        this._name = name;
        this._price = price;
        this._stock = stock;
    }
    get name() {
        return this._name;
    }
    get price() {
        return this._price;
    }
    get stock() {
        return this._stock;
    }
    modify({ name, price, stock }) {
        this.validateProduct({ name, price, stock });
        this._name = name;
        this._price = price;
        this._stock = stock;
    }
    validateProduct(data) {
        const productValidator = [
            { testFunc: _validator__WEBPACK_IMPORTED_MODULE_0__.hasEmptyInput, errorMsg: _constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.CONTAIN_EMPTY_FIELD_IN_FORM },
            {
                testFunc: _validator__WEBPACK_IMPORTED_MODULE_0__.isOverMaxLengthName,
                errorMsg: _constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.EXCEED_MAX_PRODUCT_NAME_LENGTH,
            },
            { testFunc: _validator__WEBPACK_IMPORTED_MODULE_0__.isPriceOutOfRange, errorMsg: _constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.OUT_OF_PRODUCT_PRICE_RANGE },
            { testFunc: _validator__WEBPACK_IMPORTED_MODULE_0__.isInvalidUnitPrice, errorMsg: _constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.INVALID_UNIT_PRODUCT_PRICE },
            { testFunc: _validator__WEBPACK_IMPORTED_MODULE_0__.isStockOutOfRange, errorMsg: _constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.OUT_OF_PRODUCT_STOCK_RANGE },
            { testFunc: _validator__WEBPACK_IMPORTED_MODULE_0__.isNotIntegerStock, errorMsg: _constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.INVALID_PRODUCT_STOCK },
        ];
        (0,_validator__WEBPACK_IMPORTED_MODULE_0__.validateData)(data, productValidator);
    }
}


/***/ }),

/***/ "./src/js/domain/validator.ts":
/*!************************************!*\
  !*** ./src/js/domain/validator.ts ***!
  \************************************/
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/js/constants/index.js");

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