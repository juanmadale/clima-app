import { createGlobalStyle } from 'styled-components'
// import * as S from './Styled'
import * as T from './theme'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${T.primaryBackgroundColor};
  }
`

export default GlobalStyle
