import { getBaseValue } from "./getBaseValue"

export const getBaseValueOfJump = (abbr: string, x: boolean) =>
  abbr.split("+").reduce((acc, abbr) => {
    if (abbr === "REP") return Math.round(acc * 0.7)

    return acc + Math.round((getBaseValue(abbr) ?? 0) * (x ? 1.1 : 1))
  }, 0)
