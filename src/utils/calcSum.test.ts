import { calcSum } from "./calcSum"

test.each([
  [[], 0],
  [[7], 7],
  [[5, 2, 13, 0, 17, 2, 9], 48],
])("sum(%p) => %p", (input, output) => {
  expect(calcSum(input)).toBe(output)
})
