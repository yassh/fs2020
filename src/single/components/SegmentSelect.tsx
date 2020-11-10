import React, { FC } from "react"
import { Data } from "../hooks/useData"
import { Select } from "./Select"

type Value = Data["segment"]

type Options = Array<{
  value: Value
  label: string
}>

export const options: Options = [
  { value: "msp", label: "MEN SHORT PROGRAM" },
  { value: "mfs", label: "MEN FREE SKATING" },
  { value: "wsp", label: "LADIES SHORT PROGRAM" },
  { value: "wfs", label: "LADIES FREE SKATING" },
]

type Props = {
  value: Value
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const SegmentSelect: FC<Props> = (props) => {
  const { value, onChange } = props

  return (
    <Select value={value} onChange={onChange}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  )
}
