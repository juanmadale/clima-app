import styled from 'styled-components'
import * as T from '../../utils/theme'
import { StyledIconBase } from '@styled-icons/styled-icon'

export const ModeStyleWrapper = styled.div`
  margin-right: 10px;
  ${StyledIconBase} {
    height: 50px;
    color: ${T.primaryTextColor};
    cursor: pointer;
  }
`
