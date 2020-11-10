import React, { ComponentProps, FC } from "react"
import { NumberSelect } from "./NumberSelect"

type NumberSelectProps = ComponentProps<typeof NumberSelect>

const options: NumberSelectProps["options"] = [{ value: null, label: "" }]

for (let value = 5; value >= -5; value--) {
  options.push({ value, label: value.toString() })
}

type Props = {
  value: NumberSelectProps["value"]
  onChange: NumberSelectProps["onChange"]
}

export const GoeSelect: FC<Props> = (props) => {
  const { value, onChange } = props

  return <NumberSelect options={options} value={value} onChange={onChange} />
}
