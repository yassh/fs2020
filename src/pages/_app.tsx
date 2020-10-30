import { AppProps } from "next/app"
import { createGlobalStyle } from "styled-components"
import { resetStyle } from "../styles/resetStyle"
import { baseStyle } from "../styles/baseStyle"

export const GlobalStyle = createGlobalStyle`
  ${resetStyle}
  ${baseStyle}
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
