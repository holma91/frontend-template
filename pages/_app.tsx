import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components";
import { defaultTheme, GlobalStyle } from '../design/themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
