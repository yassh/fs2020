import { css } from "styled-components"

export const resetStyle = css`
  * {
    font: inherit;
    margin: 0;
    padding: 0;
    text-align: inherit;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`
