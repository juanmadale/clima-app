import React, { useRef, useEffect } from 'react'
import * as S from './Styled'
import lottie from 'lottie-web'

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
        path: 'assets/location_not_found.json',
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
                <S.SecondaryCardItem>{`Wind: ${weather.wind} ${
                  isMetric ? 'km/h' : 'mph'
                }`}</S.SecondaryCardItem>
                <S.SecondaryCardItem>{`Overcast: ${weather.overcast}%`}</S.SecondaryCardItem>
                <S.SecondaryCardItem>{`Humidity: ${weather.humidity}%`}</S.SecondaryCardItem>
              </ul>
            </S.SecondaryCard>
          </S.WeatherWrapper>
        </>
      )}
    </S.WeatherDisplayWrapper>
  )
}

export default WeatherDisplay
