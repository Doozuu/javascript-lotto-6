import { PURCHASE_AMOUNT_UNIT } from "../utils/constants.js";
import { PURCHASE_AMOUNT_INPUT_REQUEST } from "../utils/message.js";
import {
  TYPE_ERROR,
  UNIT_ERROR,
  MIN_INPUT_ERROR,
} from "../utils/errorMessage.js";
import { print } from "../utils/print.js";
import { Console } from "@woowacourse/mission-utils";

class Purchase {
  #printMessage() {
    print(PURCHASE_AMOUNT_INPUT_REQUEST);
  }

  #validate(input) {
    if (!Number(input)) {
      throw new Error(TYPE_ERROR);
    } else if (+input === 0) {
      throw new Error(MIN_INPUT_ERROR);
    } else if (+input % PURCHASE_AMOUNT_UNIT !== 0) {
      throw new Error(UNIT_ERROR);
    }
  }

  async #getPurchaseAmount() {
    while (true) {
      try {
        const input = await Console.readLineAsync("");
        this.#validate(input);
        return +input;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async purchase() {
    this.#printMessage();
    const purchaseAmount = await this.#getPurchaseAmount();
    return purchaseAmount;
  }
}

export default Purchase;