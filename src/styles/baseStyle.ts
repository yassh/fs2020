import { css } from "styled-components"

export const baseStyle = css`
  :root {
    font-size: clamp(10px, 1vw, 13px);
    line-height: 1.5;
    text-align: start;
  }

  body {
    margin-left: auto;
    margin-right: auto;
    padding: 1rem;
    width: 100rem;
  }
`
