import React, { FC } from "react"
import { Select } from "./Select"

type Option = {
  value: string
  label: string
}

const options: Array<Option> = [{ value: "", label: "" }]

for (let value = 1000; value >= 0; value -= 25) {
  options.push({ value: value.toString(), label: (value / 100).toFixed(2) })
}

export const PCSSelect: FC = () => {
  return (
    <Select>
      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </Select>
  )
}
