import { sov } from "./sov"

export const getBaseValue = (abbr: string): number | null =>
  sov[abbr] ? sov[abbr].base : null
