import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import LineChartComponent from "./components/LineChartComponent";
import BarChartComponent from "./components/BarChartComponent";
import DataTable from "./components/DataTable";
import Filter from "./components/Filter";
import { fetchWeatherData } from "./data/weatherData";
import styled from "styled-components";

const AppWrapper = styled.div`
  padding: 20px;
`;

const ChartsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    background-color: lightblue; /* Example: Add background color to see if media query works */
  }
`;

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Vijayawada");

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const data = await fetchWeatherData(selectedCity);
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    getWeatherData();
  }, [selectedCity]);

  return (
    <AppWrapper>
      <Header />
      <Filter onSelect={setSelectedCity} />
      <ChartsWrapper>
        <BarChartComponent data={weatherData} />
        <LineChartComponent data={weatherData} />
      </ChartsWrapper>
      <DataTable data={weatherData} />
    </AppWrapper>
  );
};

export default App;
