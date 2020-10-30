import React, { FC } from "react"
import { Select } from "./Select"

type Option = {
  value: string
  label: string
}

const options: Array<Option> = [
  { value: "0.80", label: "0.80" },
  { value: "1.00", label: "1.00" },
  { value: "1.60", label: "1.60" },
  { value: "2.00", label: "2.00" },
]

export const FactorSelect: FC = () => {
  return (
    <Select>
      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </Select>
  )
}
