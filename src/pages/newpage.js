import React from "react"
import { useEffect, useState } from "react"

const NewPage = () => {
  return <div>IMMA NEW PAGE</div>

  // const [city, setCity] = useState("No City")
  // const [weather, setWeather] = useState("No weather")

  // useEffect(() => {
  //   fetch(
  //     "https://api.openweathermap.org/data/2.5/weather?q=Detroit&appid=5980a7f999d1d19e632b4d701e68a2cf"
  //   )
  //     .then(res => res.json())
  //     .then(json => {
  //       setCity(json.name)
  //       setWeather(json.weather[0].description)
  //     })
  // })

  // return <div>{`City: ${city}: Weather: ${weather}`}</div>
}

export default NewPage
