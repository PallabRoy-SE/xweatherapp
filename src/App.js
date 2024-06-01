import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

function App() {
  const theme = useTheme();
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (location) => {
    try {
      setLoading(true);
      if (!location) throw new Error("Please write a location");
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?q=${location}&key=6c164f5846ab425e849163713240106`
      );
      if (res.status === 200) {
        const resWeather = await res.json();
        setWeather({ ...resWeather });
      } else {
        setWeather(null);
        alert("Failed to fetch weather data");
      }
    } catch (error) {
      setWeather(null);
      console.error(new Error(error));
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const searchLocation = e.target.elements["location"].value;
    if (searchLocation?.length) {
      await fetchWeather(searchLocation);
    }
  };

  return (
    <Box
      onSubmit={handleSearch}
      component="section"
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: theme.palette.background.default,
      }}
      p={5}
    >
      <Box
        component="form"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
      >
        <TextField
          required
          id="location"
          size="small"
          type="text"
          placeholder="search city"
          sx={{ mr: 2 }}
        />
        <Button type="submit">Search</Button>
      </Box>
      <Container
        component="section"
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "2%",
          mt: 4,
        }}
        className="weather-cards"
      >
        {loading ? (
          <Typography
            component="p"
            textAlign="center"
            variant="subtitle1"
            width="100%"
          >
            Loading data...
          </Typography>
        ) : weather ? (
          <>
            <Paper
              className="weather-card"
              elevation={3}
              sx={{
                paddingInline: 3,
                paddingBlock: 2,
                width: "25%",
                height: "6rem",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                textAlign="center"
                component="p"
                fontWeight={600}
                fontSize="1rem"
              >
                Temperature
              </Typography>
              <Typography textAlign="center" component="p" fontSize="0.9rem">
                {weather.current.temp_c}°C
              </Typography>
            </Paper>
            <Paper
              elevation={3}
              sx={{
                paddingInline: 3,
                paddingBlock: 2,
                width: "25%",
                height: "6rem",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                textAlign="center"
                component="p"
                fontWeight={600}
                fontSize="1rem"
              >
                Humidity
              </Typography>
              <Typography textAlign="center" component="p" fontSize="0.9rem">
                {weather.current.humidity}%
              </Typography>
            </Paper>
            <Paper
              elevation={3}
              sx={{
                paddingInline: 3,
                paddingBlock: 2,
                width: "25%",
                height: "6rem",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                textAlign="center"
                component="p"
                fontWeight={600}
                fontSize="1rem"
              >
                Condition
              </Typography>
              <Typography textAlign="center" component="p" fontSize="0.9rem">
                {weather.current.condition.text}
              </Typography>
            </Paper>
            <Paper
              elevation={3}
              sx={{
                paddingInline: 3,
                paddingBlock: 2,
                width: "25%",
                height: "6rem",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                textAlign="center"
                component="p"
                fontWeight={600}
                fontSize="1rem"
              >
                Wind
              </Typography>
              <Typography textAlign="center" component="p" fontSize="0.9rem">
                {weather.current.wind_kph} kph
              </Typography>
            </Paper>
          </>
        ) : null}
      </Container>
    </Box>
  );
}

export default App;
