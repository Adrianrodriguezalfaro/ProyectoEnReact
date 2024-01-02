// WeatherDisplay.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherDisplay = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Lógica para obtener la ubicación del usuario y hacer la llamada a la API del clima
    // Utiliza axios u otra biblioteca para hacer la solicitud HTTP

    // Ejemplo:
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get('API_URL', { params: { lat: 'LATITUDE', lon: 'LONGITUDE' } });
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    // Llama a la función para obtener datos cuando el componente se monta
    fetchWeatherData();
  }, []);

  return (
    <div>
      <h2>Visualización del Clima</h2>
      {weatherData ? (
        <div>
          <p>Temperatura: {weatherData.main.temp}°C</p>
          <p>Descripción: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>Clima 16° Humedad 35% </p>
      )}
    </div>
  );
};

export default WeatherDisplay;
