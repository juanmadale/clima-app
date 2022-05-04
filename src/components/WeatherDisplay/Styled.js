import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind } from '@fortawesome/free-solid-svg-icons'

export const WeatherDisplayWrapper = styled.div`
  width: 100%;
  color: #212121;
  margin: 50px auto;
`
export const LocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin-left: 10%;
  padding: 20px;
`
export const LocationTitle = styled.div`
  font-size: 46px;
`
export const LocationSubtitle = styled.div`
  font-size: 24px;
`
export const WeatherWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
`

export const MainCard = styled.div`
  display: flex;
  padding: 2em;
  background-color: #e1bee7;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 30%;
`
export const SecondaryCardItem = styled.li`
  list-style: none;
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
