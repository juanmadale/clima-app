import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

export const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0px 50px 0px;
`

export const SearchForm = styled.form`
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: center;
`

export const SearchInput = styled.input`
  height: 50px;
  width: 40%;
  font-size: 24px;
  padding: 0.2rem 1rem 0.2rem 1rem;
  outline: none;
  border-radius: 10px;
  border: none;
  margin-left: 20px;
  margin-right: 20px;
`

export const SearchButton = styled.button`
  height: 50px;
  width: 150px;
  border: none;
  border-radius: 10px;
  background-color: #ce93d8;
  &:hover {
    background-color: #e1bee7;
    cursor: pointer;
  }
  &:disabled {
    cursor: auto;
    background-color: #e1bee7;
  }
`

export const LocationIcon = styled(FontAwesomeIcon).attrs({
  icon: faLocationArrow,
  size: '2xl'
})`
  color: #ce93d8;
  &:hover {
    color: #e1bee7;
    cursor: pointer;
  }
`

export const UnitSelectorWrapper = styled.div`
  justify-content: center;
  align-items: center;
`

export const UnitSelector = styled.a`
  &:hover {
    cursor: pointer;
  }
  ${props =>
    props.selected &&
    css`
      color: #018786;
      font-weight: 700;
    `}
`
