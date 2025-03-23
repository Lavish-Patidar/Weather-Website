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
    const [cityValed, setCityValed] = useState(false);

    useEffect(() => {
        if (city) {
            fetchWeatherData();
        }
    }, [city]);

    const fetchWeatherData = async () => {
        if (!city) {
            setCityValed(false)
            return;
        }

        try {
            const data = await fetchWeather(city);
            setWeather(data);
            fetchForecastData(city);
            setCityValed(true);
        } catch (error) {
            setError('City not found. Please enter a valid city name.');
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
            {cityValed && < Weather weather={weather} />}
            {cityValed && <Forecast forecast={forecast} />}
        </Container>
    );
};

export default App;
