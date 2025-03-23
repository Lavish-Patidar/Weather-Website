import axios from 'axios';

const API_URL = 'https://weather-website-api-one.vercel.app/'; // Update this if the backend URL changes

export const fetchWeather = async (city) => {
    try {
        const response = await axios.get(`${API_URL}/weather/${city}`);
        return response.data;
    } catch (error) {
        throw new Error('City not found');
    }
};

export const fetchForecast = async (city) => {
    try {
        const response = await axios.get(`${API_URL}/forecast/${city}`);
        return response.data;
    } catch (error) {
        throw new Error('Forecast not found');
    }
};
