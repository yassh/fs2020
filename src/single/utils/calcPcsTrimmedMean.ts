import { calcTrimmedMean } from "../../utils/calcTrimmedMean"

export const calcPcsTrimmedMean = (
  values: Array<number | null>,
): [number | null, string] => {
  const validValues = values.filter((v): v is number => typeof v === "number")
  const trimmedMean = calcTrimmedMean(validValues)

  if (trimmedMean === null) return [null, ""]

  const roundedTrimmedMean = Math.round(trimmedMean)
  return [roundedTrimmedMean, (roundedTrimmedMean / 100).toFixed(2)]
}
