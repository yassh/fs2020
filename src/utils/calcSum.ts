/**
 * 与えられた数値の配列から、総和を算出する。
 */
export const calcSum = (values: Array<number>): number => {
  return values.reduce((acc, value) => acc + value, 0)
}
