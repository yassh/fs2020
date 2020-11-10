/**
 * 要素を昇順にソートした新たな配列を返す
 */
export const ascSort = (arr: Array<number>): Array<number> => {
  return [...arr].sort((a, b) => b - a)
}
