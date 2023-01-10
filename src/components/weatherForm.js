import React, { useState } from "react";
import style from './weatherForm.css';

const WeatherForm = () => {
  const [input, setInput] = useState({
    city: "",
    country: "",
  });

  const [dataCity, setDataCity] = useState({
    temperature: "",
    description: "",
    humidity: "",
    wind_speed: "",
    city1: "",
    country1: "",
    error: null,
  });

  function handleCountry(e) {
    e.preventDefault(e);
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  }

  function handleCity(e) {
    e.preventDefault(e);
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  }
  const handleForm = async (e) => {
    e.preventDefault(e);
    if (input.city && input.country) {
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${input.city},${input.country}$units=metric&appid=5b9fc987057750a96f86eb4c806cb499`;
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);
      setDataCity({
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind_speed: data.wind.speed,
        city1: data.name,
        country1: data.sys.country,
        error: null,
      });
      console.log(dataCity);
      setInput({
        city: "",
        country: "",
      });
    } else {
      setDataCity({
        error: "Enter an existing country and city",
      });
    }
  };
  
  var elementos = document.getElementsByTagName('input');

  const limpiar = (e)=> { 
    e.preventDefault();
    for (let i = 0; i < elementos.length; i++) {
      elementos[i].value='';          
    }
    setDataCity({
      temperature: "",
      description: "",
      humidity: "",
      wind_speed: "",
      city1: "",
      country1: "",
      error: null,
    });
  }
  return (
    <div className="body">
    <div className={"Container"}>
      <form className="form" onSubmit={handleForm}>
      <h1>Your weather forecast</h1>
        <div className={style.inputs}>
          <input
            className="inputCity"
            type="text"
            name="city"
            onChange={handleCity}
            placeholder="Your city name"
          />
        </div>
        <div>
          <input
          className="inputCountry"
            type="text"
            name="country"
            onChange={handleCountry}
            placeholder="Your country name"
          />
        </div>
        <div className={"buttons"}>
        <button className={"button1"}>Get weather</button>
        <button className={"button2"} type="reset" id="limpiar" onClick={limpiar}>Clear names</button>
        </div>
        
      </form>
      <div className={"info"}>
        {dataCity.error ? (
          <div>{dataCity.error}</div>
        ) : dataCity.city1 ? (
          <div>
            <p>
              Location: {dataCity.city1} ,{dataCity.country1}
            </p>
            <p>Temperature: {(((dataCity.temperature) - 32) / 1/8).toFixed(2)} °c </p>
            <p>Description: {dataCity.description}</p>
            <p>Humidity: {dataCity.humidity} %</p>
            <p>Wind speed: {(dataCity.wind_speed*3.6).toFixed(2)} km/h</p>
          </div>
        ) : (
          "Please enter city and country you want to search"
        )}
      </div>
    </div>
    </div>
  );
};

export default WeatherForm;
