import { ascSort } from "./ascSort"
import { calcSum } from "./calcSum"

/**
 * 与えられた数値の配列から、最大値と最小値を除き、残った数値の平均を算出する。
 * 与えられた配列の要素数が3に満たない場合は、nullを返す。
 */
export const calcTrimmedMean = (values: Array<number>): number | null => {
  if (values.length < 3) return null

  const trimmedValues = ascSort(values).slice(1, -1)
  const sum = calcSum(trimmedValues)

  return sum / trimmedValues.length
}
