import React, { useState, useEffect } from 'react'
import * as S from './Styled'
import axios from 'axios'

function Search({
  weather,
  setWeather,
  setError,
  isLoading,
  setIsLoading,
  isMetric,
  setIsMetric
}) {
  const [searchInput, setSearchInput] = useState('')
  const [coords, setCoords] = useState({
    latitude: '',
    longitude: ''
  })

  //FetchWeather functions

  const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?appid=663029cb2aadee4306a7d1c145e4e370&units=${
    isMetric ? 'metric' : 'imperial'
  }`

  const fetchWeatherBySearchInput = async () => {
    const customURL = `${BASE_URL}&q=${searchInput}`
    try {
      let res = await axios.get(customURL)
      console.log(res)
      return res
    } catch (e) {
      console.log(e)
    }
  }

  const getCoords = () => {
    setIsLoading(true)
    function success(pos) {
      setCoords({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude
      })
    }
    function error() {
      alert(
        'Unable to retrieve your location. Try enabling geolocation on your browser.'
      )
    }
    if (!navigator.geolocation) {
      alert('Your browser does not support Geolocation')
    } else {
      navigator.geolocation.getCurrentPosition(success, error)
    }
  }

  async function fetchWeatherByCoords() {
    const customURL = `${BASE_URL}&lat=${coords.latitude}&lon=${coords.longitude}`
    try {
      let res = await axios.get(customURL)
      console.log(res)
      return res
    } catch (e) {
      console.log(e)
    }
  }

  const fetchWeatherByLocation = async () => {
    const customURL = `${BASE_URL}&q=${weather.city}`
    try {
      let res = await axios.get(customURL)
      return res
    } catch (e) {
      console.log(e)
    }
  }

  const updateWeather = async fetchWeatherFunction => {
    setError(null)
    setIsLoading(true)
    try {
      let weatherInfo = await fetchWeatherFunction()
      setWeather({
        temperature: Math.round(weatherInfo.data.main.temp),
        wind: Math.round(weatherInfo.data.wind.speed),
        conditionId: weatherInfo.data.weather[0].id,
        humidity: weatherInfo.data.main.humidity,
        overcast: weatherInfo.data.clouds.all,
        feelsLike: Math.round(weatherInfo.data.main.feels_like),
        city: weatherInfo.data.name,
        countryCode: weatherInfo.data.sys.country
      })
    } catch (e) {
      setError(e)
    }
    setIsLoading(false)
  }

  //Event handlers

  const handleSubmit = async event => {
    event.preventDefault()
    updateWeather(fetchWeatherBySearchInput)
    setSearchInput('')
  }

  const handleChange = event => {
    event.preventDefault()
    const { value } = event.target
    setSearchInput(value)
  }

  const handleClick = bool => {
    if (isMetric === bool) {
      return
    }
    setIsMetric(bool)
  }

  //UseEffects

  useEffect(() => {
    if (!coords.latitude || !coords.longitude) {
      return
    }
    updateWeather(fetchWeatherByCoords)
    // setIsLoading(false)
  }, [coords])

  useEffect(() => {
    if (!weather.city) {
      return
    }
    updateWeather(fetchWeatherByLocation)
  }, [isMetric])

  return (
    <S.SearchBar>
      <S.SearchForm onSubmit={handleSubmit}>
        <S.LocationIcon onClick={getCoords} />
        <S.SearchInput
          name="searchInput"
          placeholder="Type the name of your city"
          id="searchInput"
          type="text"
          value={searchInput}
          onChange={handleChange}
        />
        <S.SearchButton disabled={isLoading || !searchInput}>
          Search
        </S.SearchButton>
      </S.SearchForm>
      <S.UnitSelectorWrapper>
        <S.UnitSelector onClick={() => handleClick(true)} selected={isMetric}>
          Metric
        </S.UnitSelector>
        <S.UnitSelector onClick={() => handleClick(false)} selected={!isMetric}>
          Imperial
        </S.UnitSelector>
      </S.UnitSelectorWrapper>
    </S.SearchBar>
  )
}

export default Search
