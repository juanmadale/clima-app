import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import * as T from '../../utils/theme'

export const SearchBar = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
`

export const SearchForm = styled.form`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
`

export const SearchInput = styled.input`
  height: 50px;
  width: 50%;
  min-wdith: 20%;
  font-size: 24px;
  padding: 0.2rem 1rem 0.2rem 1rem;
  outline: none;
  border-radius: 10px;
  border: none;
  margin-left: 20px;
  margin-right: 20px;
  background-color: ${T.secondaryBackgroundColor};
`

export const SearchButton = styled.button`
  height: 50px;
  width: 150px;
  border: none;
  border-radius: 10px;
  color: ${T.primaryTextColor};
  background-color: ${T.secondaryTextColor};
  cursor: pointer;
  &:hover {
    background-color: ${T.secondaryTextColorHover};
  }
  &:disabled {
    cursor: auto;
    background-color: 'gray';
  }
`

export const LocationIcon = styled(FontAwesomeIcon).attrs({
  icon: faLocationArrow,
  size: '2xl'
})`
  cursor: pointer;
  color: ${T.secondaryTextColor};
  &:hover {
    color: ${T.secondaryTextColorHover};
    cursor: pointer;
  }
`

export const UnitSelectorWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 10%;
`

export const UnitSelector = styled.a`
  color: ${T.primaryTextColor};
  &:hover {
    cursor: pointer;
  }
  ${props =>
    props.selected &&
    css`
      color: ${T.secondaryTextColor};
      font-weight: 700;
    `}
`
