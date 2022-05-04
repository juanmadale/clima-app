import { useState, useEffect, useRef } from 'react'
import Search from '../Search/Search'
import * as S from './Styled'
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay'
import lottie from 'lottie-web'

function Home() {
  const [weather, setWeather] = useState({
    temperature: '',
    wind: '',
    conditionId: '',
    humidity: '',
    overcast: '',
    feelsLike: '',
    city: '',
    countryCode: ''
  })

  const [error, setError] = useState(null)

  const [isLoading, setIsLoading] = useState(false)

  const lottieLoading = useRef(null)

  const [isMetric, setIsMetric] = useState(true)

  useEffect(() => {
    if (lottieLoading.current) {
      lottie.destroy()
      lottie.loadAnimation({
        container: lottieLoading.current,
        path: 'assets/loading.json',
        renderer: 'svg',
        autoplay: true,
        loop: true
      })
    }
  })

  return (
    <>
      <Search
        weather={weather}
        setWeather={setWeather}
        setError={setError}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        isMetric={isMetric}
        setIsMetric={setIsMetric}
      />
      {isLoading ? (
        <S.loadingImage ref={lottieLoading} />
      ) : (
        weather.city && (
          <WeatherDisplay
            weather={weather}
            conditionId={weather.conditionId}
            error={error}
            isMetric={isMetric}
          />
        )
      )}
    </>
  )
}

export default Home
