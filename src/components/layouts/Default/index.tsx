import * as React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle, theme } from 'styles'

import * as S from './styled'

type DefaultLayoutProps = {
  children: React.ReactNode
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <S.Wrapper role="main">{children}</S.Wrapper>
  </ThemeProvider>
)

export default DefaultLayout
