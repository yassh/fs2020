import React, { FC, useCallback } from "react"
import { Select } from "./Select"

type Value = number | null

type Props = {
  options: Array<{
    value: Value
    label: string
  }>
  value: Value
  onChange: (value: Value) => void
}

export const NumberSelect: FC<Props> = (props) => {
  const { options, value, onChange } = props

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onChange(e.target.value === "" ? null : parseInt(e.target.value, 10))
    },
    [],
  )

  return (
    <Select onChange={handleChange} value={value ?? ""}>
      {options.map((option) => (
        <option value={option.value ?? ""} key={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  )
}
