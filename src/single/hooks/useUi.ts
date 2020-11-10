import { useCallback, useState } from "react"

type Ui = {
  preview: boolean
}

const initialState: Ui = {
  preview: false,
}

export const useUi = () => {
  const [ui, setUi] = useState<Ui>(initialState)

  const setPreview = useCallback((value: Ui["preview"]) => {
    setUi((oldState) => {
      return {
        ...oldState,
        preview: value,
      }
    })
  }, [])

  return { ui, setPreview }
}
