import { Console } from "@woowacourse/mission-utils";
import { validatePurchaseAmount } from "./ValidateInput.js";

export const getPurchaseAmount = async () => {
  const INPUT = await Console.readLineAsync("");
  const IS_VALID = validatePurchaseAmount(INPUT);
  if (IS_VALID) return INPUT;
};
