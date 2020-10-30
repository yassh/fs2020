import React, { FC } from "react"
import { Select } from "./Select"

type Option = {
  value: string
  label: string
}

const options: Array<Option> = [{ value: "", label: "" }]

for (let value = 5; value >= -5; value--) {
  options.push({ value: value.toString(), label: value.toString() })
}

export const GOESelect: FC = () => {
  return (
    <Select>
      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </Select>
  )
}
