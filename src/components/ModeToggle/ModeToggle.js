import { useSelector, useDispatch } from 'react-redux'
import { TOGGLE_DARKTHEME } from '../../redux/actions'
import * as S from './Styled'
import { LightMode } from '@styled-icons/material/LightMode'
import { DarkMode } from '@styled-icons/material/DarkMode'

const ModeToggle = () => {
  const dispatch = useDispatch()
  const darkThemeEnabled = useSelector(
    state => state.preferences.darkThemeEnabled
  )

  return (
    <S.ModeStyleWrapper onClick={() => dispatch({ type: TOGGLE_DARKTHEME })}>
      {darkThemeEnabled ? <DarkMode /> : <LightMode />}
    </S.ModeStyleWrapper>
  )
}

export default ModeToggle
