import React from 'react'
import * as S from './Styled'
import ModeToggle from '../ModeToggle/ModeToggle'

const Header = () => {
  return (
    <S.HeaderWrapper>
      <ModeToggle />
    </S.HeaderWrapper>
  )
}

export default Header
