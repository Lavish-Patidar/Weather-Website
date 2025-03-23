import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

import humidityIcon from "../assets/humidity.png";
import windIcon from "../assets/wind.png";
import clearIcon from "../assets/clear.png";
import cloudsIcon from "../assets/clouds.png";
import drizzleIcon from "../assets/drizzle.png";
import rainIcon from "../assets/rain.png";
import snowIcon from "../assets/snow.png";
import mistIcon from "../assets/mist.png";

// Function to select weather icon
export const getWeatherIcon = (weatherCondition) => {
    switch (weatherCondition) {
        case "Clear":
            return clearIcon;
        case "Clouds":
            return cloudsIcon;
        case "Drizzle":
            return drizzleIcon;
        case "Rain":
            return rainIcon;
        case "Snow":
            return snowIcon;
        case "Mist":
            return mistIcon;
        default:
            return clearIcon;
    }
};
const Weather = ({ weather }) => {


    return (
        <Box display="flex" justifyContent="center">
            <Card variant="outlined" style={{ width: 300 }}>
                <CardContent>
                    {weather ? (
                        <Box marginTop={2}>
                            <Typography variant="h5">{weather.name}</Typography>
                            <img
                                src={getWeatherIcon(weather.weather[0].main)}
                                alt="Weather Condition"
                                style={{ width: '96px', height: '96px', margin: '20px auto' }}
                            />
                            <Box display="flex" flexDirection="column" alignItems="center" marginTop={2}>
                                <Typography variant="h6">{Math.round(weather.main.temp)}°C</Typography>
                                <Box display="flex" alignItems="center" gap={1} marginTop={1}>
                                    <img src={humidityIcon} alt="Humidity" style={{ width: '40px', height: '40px' }} />
                                    <Typography>Humidity: {weather.main.humidity}%</Typography>
                                </Box>
                                <Box display="flex" alignItems="center" gap={1} marginTop={1}>
                                    <img src={windIcon} alt="Wind Speed" style={{ width: '40px', height: '40px' }} />
                                    <Typography>Wind Speed: {weather.wind.speed} km/h</Typography>
                                </Box>
                            </Box>
                        </Box>
                    ) : null}
                </CardContent>
            </Card>
        </Box>


    );
};

export default Weather;
