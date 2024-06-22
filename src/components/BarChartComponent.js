import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import styled from "styled-components";

const ChartContainer = styled.div`
  margin-bottom: 20px;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 20px;
    text-align: center;
    font-size: 24px;
    color: #333;
  }

  p {
    text-align: center;
    color: #888;
  }
`;

const BarChartComponent = ({ data }) => {
  console.log("BarChartComponent Data:", data); // Log data prop
  return (
    <ChartContainer>
      <h2>Humidity Levels</h2>
      {data.length > 0 ? (
        <BarChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="city" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="humidity" fill="#82ca9d" />
        </BarChart>
      ) : (
        <p>No data available</p>
      )}
    </ChartContainer>
  );
};

export default BarChartComponent;
