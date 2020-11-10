export const times = <T>(fn: (n: number) => T, count: number): Array<T> => {
  const arr = []

  for (let i = 0; i < count; i++) {
    arr.push(fn(i))
  }

  return arr
}
