import { Data } from "../hooks/useData"

const map: Record<Data["segment"], number> = {
  msp: 1,
  mfs: 2,
  wsp: 0.8,
  wfs: 1.6,
}

export const segmentToFactor = (segment: Data["segment"]) => {
  return map[segment]
}
