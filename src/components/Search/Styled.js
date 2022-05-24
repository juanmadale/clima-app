import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import * as T from '../../utils/theme'

export const SearchBar = styled.div`
  height: calc(1rem + 2vw);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
`

export const SearchForm = styled.form`
  display: flex;
  height: 100%;
  width: 50%;
  justify-content: center;
  align-items: center;
  @media (min-width: 0px) {
    width: 75%;
  }
  @media (min-width: 600px) {
    width: 40%;
  }
`

export const SearchInput = styled.input`
  width: 200%;
  color: ${T.primaryColor};
  font-size: calc(0.5rem + 0.5vw);
  padding: 1rem;
  outline: none;
  border-radius: 10px;
  border: none;
  background-color: ${T.quaternaryColor};
`

export const SearchButton = styled.button`
  padding: 1rem;
  margin: 0 1rem;
  border: none;
  border-radius: 10px;
  color: ${T.primaryColor};
  background-color: ${T.secondaryColor};
  font-size: calc(0.5rem + 0.5vw);
  cursor: pointer;
  &:hover {
    background-color: ${T.secondaryColorHover};
  }
  &:disabled {
    cursor: not-allowed;
  }
`

export const LocationIcon = styled(FontAwesomeIcon).attrs({
  icon: faLocationArrow
  // size: '2xl'
})`
  cursor: pointer;
  margin-right: 1rem;
  height: 60%;
  color: ${T.secondaryColor};
  &:hover {
    color: ${T.secondaryColorHover};
    cursor: pointer;
  }
`

export const UnitSelectorWrapper = styled.div`
  display: flex;

  justtify-content: center;
  flex-direction: column;
  align-items: left;
`

export const UnitSelector = styled.a`
  color: ${T.primaryColor};
  font-size: calc(0.5rem + 0.5vw);
  &:hover {
    cursor: pointer;
  }
  ${props =>
    props.selected &&
    css`
      color: ${T.secondaryColor};
      font-weight: 700;
    `}
`
