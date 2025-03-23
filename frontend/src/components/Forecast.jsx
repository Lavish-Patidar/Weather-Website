import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import { getWeatherIcon } from "./Weather";


const Forecast = ({ forecast, error }) => {
    const uniqueDates = new Set();

    return (
        <Box marginTop={2} width={"100%"}>
            <Typography variant="h5" component="h2">6-Day Forecast</Typography>
            {error && <Typography color="error">{error}</Typography>}

            <Grid container spacing={2}>
                {forecast && forecast.map((day, index) => {
                    const date = new Date(day.dt * 1000).toLocaleDateString();
                    // Check if the date is already displayed
                    if (uniqueDates.has(date)) {
                        return null; // Skip duplicate dates
                    }
                    uniqueDates.add(date); // Add the date to the Set

                    return (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card variant="outlined" style={{ display: 'flex', padding: 10, backgroundColor: 'rgba(255, 255, 255, 0.1)' }} >
                                <CardContent>
                                    <Typography variant="h6">{date}</Typography>
                                    <Typography>Temperature: {Math.round(day.main.temp)}°C</Typography>
                                    <Typography>Humidity: {day.main.humidity}%</Typography>
                                    <Typography>Wind Speed: {day.wind.speed} km/h</Typography>
                                </CardContent>
                                <img src={getWeatherIcon(day.weather[0].main)} alt="Weather Icon" />
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default Forecast;
