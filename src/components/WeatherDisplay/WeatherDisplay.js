import React, { useRef, useEffect } from 'react'
import * as S from './Styled'
import lottie from 'lottie-web'
import { Wind } from '@styled-icons/bootstrap/Wind'
import { Drop } from '@styled-icons/entypo/Drop'
import { CloudsFill } from '@styled-icons/bootstrap/CloudsFill'
import { Sunset } from '@styled-icons/feather/Sunset'
import { Sunrise } from '@styled-icons/feather/Sunrise'

const WeatherDisplay = ({ weather, error, isMetric }) => {
  const countryName = new Intl.DisplayNames(['en'], { type: 'region' })
  const lottieCondition = useRef(null)
  const lottieLocationNotFound = useRef(null)

  useEffect(() => {
    if (lottieCondition.current) {
      lottie.destroy()
      lottie.loadAnimation({
        container: lottieCondition.current,
        path: getImagePath(),
        renderer: 'svg',
        autoplay: true,
        loop: true
      })
    }
  })

  useEffect(() => {
    if (lottieLocationNotFound.current) {
      lottie.destroy()
      lottie.loadAnimation({
        container: lottieLocationNotFound.current,
        path: '/clima-app/assets/location_not_found.json',
        renderer: 'svg',
        autoplay: true,
        loop: true
      })
    }
  })

  const getImagePath = () => {
    const conditionId = weather.conditionId
    console.log(conditionId)
    switch (true) {
      case conditionId >= 200 && conditionId <= 232:
        return 'clima-app/assets/weather_files/2xx_thunderstorm.json'
      case conditionId >= 300 && conditionId <= 321:
        return 'clima-app/assets/weather_files/3xx_drizzle.json'
      case conditionId >= 500 && conditionId <= 531:
        return 'clima-app/assets/weather_files/5xx_rain.json'
      case conditionId >= 600 && conditionId <= 622:
        return 'clima-app/assets/weather_files/6xx_snow.json'
      case conditionId >= 701 && conditionId <= 781:
        return 'clima-app/assets/weather_files/7xx_fog.json'
      case conditionId === 800:
        return 'clima-app/assets/weather_files/800_clear.json'
      case conditionId >= 801 && conditionId <= 804:
        return 'clima-app/assets/weather_files/80x_clouds.json'
      default:
        return
    }
  }

  const formatDateAndTime = (seconds, bool) => {
    const sec = seconds
    let fullDate = new Date(sec * 1000)
    const timeString = fullDate.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: bool
    })
    const dateString = fullDate.toString()
    const splitDate = dateString.split(' ')

    const hours = fullDate.getHours()
    const splitTime = timeString.split(':')
    const formattedTime = hours + ':' + splitTime[1]
    const formattedDate =
      splitDate[0] +
      ' ' +
      splitDate[1] +
      ' ' +
      splitDate[2] +
      ',' +
      ' ' +
      splitDate[3]
    console.log(formattedDate)
    return [formattedDate, formattedTime]
  }

  const [, sunriseTime] = formatDateAndTime(weather.sunrise, !isMetric)
  const [, sunsetTime] = formatDateAndTime(weather.sunset, !isMetric)
  const [currentDate] = formatDateAndTime(weather.date, !isMetric)
  const [, currentTime] = formatDateAndTime(weather.date, !isMetric)

  return (
    <S.WeatherDisplayWrapper>
      {error ? (
        <>
          <S.LocationNotFoundWrapper>
            <S.LocationNotFoundDescription>
              Oops... we couldn't find your location. Try again.
            </S.LocationNotFoundDescription>
            <div ref={lottieLocationNotFound}></div>
          </S.LocationNotFoundWrapper>
        </>
      ) : (
        <>
          <S.WeatherWrapper>
            <S.MainCard>
              <S.LocationWrapper>
                <S.LocationTitle>{weather.city}</S.LocationTitle>
                <S.LocationSubtitle>
                  {countryName.of(weather.countryCode)}
                </S.LocationSubtitle>
                <S.MainCardDescription>{currentDate}</S.MainCardDescription>
                <S.MainCardDescription>{currentTime}</S.MainCardDescription>
              </S.LocationWrapper>
              <div ref={lottieCondition}></div>
              <S.MainCardTitle>{`${weather.temperature} ${
                isMetric ? '°C' : '°F'
              }`}</S.MainCardTitle>
              <S.MainCardDescription>{`Feels like ${weather.feelsLike} ${
                isMetric ? '°C' : '°F'
              }`}</S.MainCardDescription>
            </S.MainCard>
            <S.SecondaryCard>
              <ul style={{ paddingLeft: '0' }}>
                <S.SecondaryCardItem>
                  <Sunrise />
                  {` sunrise: ${sunriseTime}`}
                </S.SecondaryCardItem>
                <S.SecondaryCardItem>
                  <Sunset />
                  {` sunset: ${sunsetTime}`}
                </S.SecondaryCardItem>
                <S.SecondaryCardItem>
                  <Wind />
                  {` wind: ${weather.wind} ${isMetric ? 'km/h' : 'mph'}`}
                </S.SecondaryCardItem>
                <S.SecondaryCardItem>
                  <CloudsFill />
                  {` overcast: ${weather.overcast}%`}
                </S.SecondaryCardItem>
                <S.SecondaryCardItem>
                  <Drop />
                  {` humidity: ${weather.humidity}%`}
                </S.SecondaryCardItem>
              </ul>
            </S.SecondaryCard>
          </S.WeatherWrapper>
        </>
      )}
    </S.WeatherDisplayWrapper>
  )
}

export default WeatherDisplay
