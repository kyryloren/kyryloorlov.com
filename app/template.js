'use client'

import { ThemeProvider } from 'styled-components'
// import { Footer } from 'components'
import { GlobalStyle, normalTheme } from 'styles'

export default function Template({ children }) {
  return (
    <ThemeProvider theme={normalTheme}>
      <GlobalStyle />
      <main>
        {/* <Nav /> */}
        {children}
        {/* <Footer /> */}
      </main>
    </ThemeProvider>
  )
}
