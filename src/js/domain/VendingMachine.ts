import {
  Coin,
  CoinStatus,
  ProductData,
  VendingMachineProductDictionary,
} from './interface';

import VendingMachineProduct from './VendingMachineProduct';
import MoneyBox from './MoneyBox';

import { ERROR_MESSAGE } from '../constants';
import { generateUniqueId } from '../utils';
import {
  inValidUnitChange,
  isBelowMinCharge,
  isExceedMaxTotalChange,
  validateData,
} from './validator';

export default class VendingMachine {
  #productList: VendingMachineProductDictionary;
  #moneyBox: MoneyBox;
  #totalInsertMoney: number;

  constructor() {
    this.#productList = {};
    this.#moneyBox = new MoneyBox();
    this.#totalInsertMoney = 0;
  }

  get productList(): VendingMachineProductDictionary {
    return this.#productList;
  }

  get totalChange(): number {
    return this.#moneyBox.totalChange;
  }

  get coinStatus(): CoinStatus {
    return this.#moneyBox.coinStatus;
  }

  get totalInsertMoney(): number {
    return this.#totalInsertMoney;
  }

  addChange(money: number): never | Coin[] {
    this.#validateChange(money);

    this.#moneyBox.addChange(money);

    return this.#moneyBox.coinStatusList;
  }

  addProduct(data: ProductData): never | string {
    this.#validateUniqueProductName(data.name);

    const newId = generateUniqueId(Object.keys(this.#productList));
    this.#productList[newId] = new VendingMachineProduct(data);

    return newId;
  }

  updateProduct(productId: string, data: ProductData): void {
    this.#validateProductIdInList(productId);
    if (data.name !== this.#productList[productId].name) {
      this.#validateUniqueProductName(data.name);
    }

    this.#productList[productId].modify(data);
  }

  removeProduct(productId: string): void {
    this.#validateProductIdInList(productId);
    delete this.#productList[productId];
  }

  insertMoney(money: number): void {
    this.#validateInsertMoney(money);

    this.#totalInsertMoney += money;
  }

  #validateInsertMoney(money: number): void {
    if (money <= 0) {
      throw Error('투입 금액은 0원 이하일 수 없습니다.');
    }

    if (money % 10 !== 0) {
      throw Error('투입 금액은 10원 단위이어야 합니다.');
    }

    if (money > 10000) {
      throw Error('최대 투입 금액은 10000원을 초과할 수 없습니다.');
    }
  }

  #validateChange(money: number): never | void {
    const changeValidator = [
      { testFunc: isBelowMinCharge, errorMsg: ERROR_MESSAGE.BELOW_MIN_CHANGE },
      { testFunc: inValidUnitChange, errorMsg: ERROR_MESSAGE.INVALID_UNIT_CHANGE },
      {
        testFunc: isExceedMaxTotalChange,
        errorMsg: ERROR_MESSAGE.EXCEED_MAX_TOTAL_CHANGE,
      },
    ];

    validateData({ money, totalChange: this.totalChange }, changeValidator);
  }

  #validateUniqueProductName(name): never | void {
    if (Object.values(this.#productList).some((product) => product.name === name)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_PRODUCT_NAME);
    }
  }

  #validateProductIdInList(productId: string): never | void {
    if (this.#productList[productId] === undefined) {
      throw new Error(ERROR_MESSAGE.NOT_FOUND_PRODUCT_ID);
    }
  }
}