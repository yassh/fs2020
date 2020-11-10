import sovData from "../../data/sov.json"

type Sov = Record<
  string,
  {
    abbr: string
    "-5": number
    "-4": number
    "-3": number
    "-2": number
    "-1": number
    base: number
    "+1": number
    "+2": number
    "+3": number
    "+4": number
    "+5": number
  }
>

export const sov: Sov = sovData.reduce(
  (acc, row) => ({ ...acc, [row.abbr]: row }),
  {},
)
