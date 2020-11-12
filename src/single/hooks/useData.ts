import { useCallback, useState } from "react"
import { times } from "../../utils/times"

export type Data = {
  title: string
  segment: "msp" | "mfs" | "wsp" | "wfs"
  ee: Array<{
    abbr: string
    x: boolean
    goe: Array<number | null>
  }>
  pc: {
    skatingSkills: Array<number | null>
    transitions: Array<number | null>
  }
}

const initialState: Data = {
  title: "",
  segment: "msp",
  ee: times(
    () => ({
      abbr: "",
      x: false,
      goe: times(() => null, 9),
    }),
    13,
  ),
  pc: {
    skatingSkills: times(() => null, 9),
    transitions: times(() => null, 9),
  },
}

export const useData = () => {
  const [data, setData] = useState<Data>(initialState)

  const setTitle = useCallback((value: Data["title"]) => {
    setData((oldState) => {
      return {
        ...oldState,
        title: value,
      }
    })
  }, [])

  const setSegment = useCallback((value: Data["segment"]) => {
    setData((oldState) => {
      return {
        ...oldState,
        segment: value,
      }
    })
  }, [])

  const setElementAbbr = useCallback((value: string, index: number) => {
    setData((oldState) => {
      return {
        ...oldState,
        ee: oldState.ee.map((element, i) =>
          i !== index
            ? element
            : {
                ...element,
                abbr: value,
              },
        ),
      }
    })
  }, [])

  const setElementX = useCallback((value: boolean, index: number) => {
    setData((oldState) => {
      return {
        ...oldState,
        ee: oldState.ee.map((element, i) =>
          i !== index
            ? element
            : {
                ...element,
                x: value,
              },
        ),
      }
    })
  }, [])

  const setElementGoe = useCallback(
    (value: number | null, index: number, judge: number) => {
      setData((oldState) => {
        return {
          ...oldState,
          ee: oldState.ee.map((element, i) =>
            i !== index
              ? element
              : {
                  ...element,
                  goe: element.goe.map((v, j) => (j !== judge ? v : value)),
                },
          ),
        }
      })
    },
    [],
  )

  const setPcs = useCallback(
    (key: keyof Data["pc"], value: number | null, index: number) => {
      setData((oldState) => {
        return {
          ...oldState,
          pc: {
            ...oldState.pc,
            [key]: oldState.pc[key].map((v, i) => (i !== index ? v : value)),
          },
        }
      })
    },
    [],
  )

  return {
    data,
    setData,
    setTitle,
    setSegment,
    setElementAbbr,
    setElementX,
    setElementGoe,
    setPcs,
  }
}
