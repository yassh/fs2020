import { calcTrimmedMean } from "./calcTrimmedMean"

test.each([
  [[], null],
  [[1, 7], null],
  [[1, 3, 7], 3],
  [[6, 29, 5, 3, 11, 3], 6.25],
])("calcTrimmedMean(%p) => %p", (input, output) => {
  expect(calcTrimmedMean(input)).toBe(output)
})
