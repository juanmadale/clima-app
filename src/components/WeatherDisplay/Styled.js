import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import * as T from '../../utils/theme'
import { StyledIconBase } from '@styled-icons/styled-icon'

export const WeatherDisplayWrapper = styled.div`
  width: 100%;
  color: ${T.primaryTextColor};
  margin: 100px auto;
`
export const LocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  padding: 20px;
`
export const LocationTitle = styled.div`
  font-size: 46px;
`
export const LocationSubtitle = styled.div`
  font-size: 24px;
`
export const WeatherWrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 50px auto;
`

export const MainCard = styled.div`
  display: flex;
  padding: 2em;
  background-color: ${T.secondaryTextColor};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 30%;
  backdrop-filter: 'blur(10px)';
  background-image: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.4)
  );
  border-radius: 20px;
  box-shadow: 3px 3px 3px rgba(10, 10, 10, 0.1);
`
export const MainCardTitle = styled.div`
  font-size: 70px;
`
export const MainCardDescription = styled.div`
  font-size: 14px;
`
export const SecondaryCard = styled.div`
  display: flex;
  min-width: 30%;
  background-color: ${T.secondaryTextColor};
  align-items: center;
  backdrop-filter: 'blur(10px)';
  justify-content: center;
  background-image: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.4)
  );
  border-radius: 20px;
  box-shadow: 3px 3px 3px rgba(10, 10, 10, 0.1);
  ${StyledIconBase} {
    height: 20px;
    vertical-align: -2px;
    font-weight: bold;
  }
`

export const SecondaryCardItem = styled.li`
  display: block;
  list-style: none;
  font-size: 20px;
  margin: 0;
  padding: 0;
  margin: 2em 0;
`

export const LocationNotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 75px;
`
export const LocationNotFoundDescription = styled.div`
  font-size: 22px;
  margin: 0px auto 10px auto;
`
export const WindIcon = styled(FontAwesomeIcon).attrs({
  icon: faWind,
  size: '2xl'
})
