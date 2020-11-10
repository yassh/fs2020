import { getBaseValue } from "./getBaseValue"
import { getBaseValueOfJump } from "./getBaseValueOfJump"
import { isJump } from "./isJump"

export const getBaseValueOfElement = (
  abbr: string,
  x: boolean,
): number | null =>
  isJump(abbr) ? getBaseValueOfJump(abbr, x) : getBaseValue(abbr)
