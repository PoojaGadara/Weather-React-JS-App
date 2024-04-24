import React, { useState , useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import axios from 'axios'
import '../../../src/App.css'
import {auth } from "../../../src/firebase"
import { useNavigate } from 'react-router-dom';

//API Key

const api = {
    key : "e2a0ecca1052383d793e63a61a9b18d9",
    base : "https://api.openweathermap.org/data/2.5/"
}

export default function Home() {

    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState({});
    const [authUser, setAuthUser] = useState(null);
    const navigate = useNavigate()

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/')
      })
      .catch((error) => console.log(error));
  };
  
    /*
      Search button is pressed. Make a fetch call to the Open Weather Map API.
    */
      const searchPressed = () => {
        axios.get(`${api.base}weather`, {
          params: {
            q: search,
            units: 'metric',
            APPID: api.key
          }
        })
        .then((response) => {
          const weatherData = response.data;
          setWeather(weatherData);
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
        });
      };
  
      
  return (
    <>
      {authUser ? (
        <>
          <button  class='btn btn-outline-primary signout-button' onClick={userSignOut}>Sign Out</button>
          <div className="App">
      <header className="App-header">
        {/* HEADER  */}
        <h1>Weather App</h1>

        {/* Search Box - Input + Button  */}
        <div>
          <input
            type="text"
            class="form-control"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button class='btn btn-outline-primary' onClick={searchPressed}>Search</button>
        </div>

        {/* If weather is not undefined display results from API */}
        {typeof weather.main !== "undefined" ? (
          <div>
            {/* Location  */}
            <p>{weather.name}</p>

            {/* Temperature Celsius  */}
            <p>{weather.main.temp}°C</p>

            {/* Condition (Sunny ) */}
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
        ) : (
          ""
        )}


      </header>
    </div>
        </>
      ) : (
        navigate('/')
      )}
    </>
    
  )
}
