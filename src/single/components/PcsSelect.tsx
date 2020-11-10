import React, { ComponentProps, FC } from "react"
import { NumberSelect } from "./NumberSelect"

type NumberSelectProps = ComponentProps<typeof NumberSelect>

const options: NumberSelectProps["options"] = [{ value: null, label: "" }]

for (let value = 1000; value >= 0; value -= 25) {
  options.push({ value, label: (value / 100).toFixed(2) })
}

type Props = {
  value: NumberSelectProps["value"]
  onChange: NumberSelectProps["onChange"]
}

export const PcsSelect: FC<Props> = (props) => {
  const { value, onChange } = props

  return <NumberSelect options={options} value={value} onChange={onChange} />
}
