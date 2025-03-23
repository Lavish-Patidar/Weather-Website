import React, { useState, useEffect } from 'react';
import { Container, CssBaseline } from '@mui/material';
import Search from './components/Search';
import Weather from './components/Weather';
import Forecast from './components/Forecast';
import { fetchWeather, fetchForecast } from './api';

const App = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        if (city) {
            fetchWeatherData();
        }
    }, [city]);

    const fetchWeatherData = async () => {
        try {
            const data = await fetchWeather(city);
            setWeather(data);
            fetchForecastData(city);
        } catch (error) {
            setError(error.message);
        }
    };

    const fetchForecastData = async (city) => {
        try {
            const data = await fetchForecast(city);
            setForecast(data.list);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <Container component="main" >
            <CssBaseline />
            <Search setCity={setCity} />
            {city && <Weather weather={weather} />}
            {city && <Forecast forecast={forecast} />}
        </Container>
    );
};

export default App;
