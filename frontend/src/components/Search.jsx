import React from 'react';
import { TextField, Button, Box, Typography, styled } from '@mui/material';

const LOGO = styled(Typography)(({ theme }) => ({
    fontSize: '2rem',
    fontWeight: 'bold',
    [theme.breakpoints.down("md")]: {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: '1rem',
    }
}))

const Search = ({ setCity, fetchWeatherData }) => {
    return (

        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} p={2}>
            <LOGO  >Weather App</LOGO>
            <Box display="flex" alignItems="center" width={'70%'} gap={1}>
                <TextField
                    variant="outlined"
                    placeholder="Enter city name"
                    onChange={(e) => setCity(e.target.value)}
                    fullWidth
                />
                <Button
                    variant="contained"
                    onClick={fetchWeatherData}
                    color="primary"
                >
                    Search
                </Button>
            </Box>

        </Box >
    );
}

export default Search;
