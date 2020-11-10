import { ascSort } from "./ascSort"

test.each([
  [[], []],
  [[7], [7]],
  [
    [5, 2, 13, 0, 17, 2, 9],
    [0, 2, 2, 5, 9, 13, 17],
  ],
])("ascSort(%p) => %p", (input, output) => {
  expect(ascSort(input)).toEqual(output)
})
