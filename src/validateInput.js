import { TYPE_ERROR, UNIT_ERROR } from "./constants";

export const validatePurchaseAmount = (input) => {
  if (isNaN(input)) {
    throw new Error(TYPE_ERROR);
  } else if (input === 0) {
    throw new Error(MIN_INPUT_ERROR);
  } else if (input % 1000 !== 0) {
    throw new Error(UNIT_ERROR);
  }
  return true;
};
