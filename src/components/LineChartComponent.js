import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import styled from "styled-components";
// import styled from "styled-components";

// const ChartWrapper = styled.div`
//   border: 1px solid #ddd;
//   border-radius: 8px;
//   padding: 20px;
//   margin-bottom: 20px;

//   @media (min-width: 768px) {
//     width: 45%; /* Adjust width for larger screens */
//   }
// `;

const ChartContainer = styled.div`
  border: 1px solid #ddd;
  margin-bottom: 20px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .chart-title {
    margin-bottom: 20px;
    text-align: center;
    font-size: 24px;
    color: #333;
  }

  .no-data-message {
    text-align: center;
    color: #888;
  }
  @media (min-width: 768px) {
    width: auto; /* Adjust width for larger screens */
  }
`;

const LineChartComponent = ({ data }) => {
  return (
    <ChartContainer>
      <h2 className="chart-title">Temperature Trends</h2>
      {data.length > 0 ? (
        <LineChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="datetime"
            tickFormatter={(tick) =>
              new Date(tick * 1000).toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
              })
            }
          />
          <YAxis />
          <Tooltip
            labelFormatter={(label) =>
              new Date(label * 1000).toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
              })
            }
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="temperature"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      ) : (
        <p className="no-data-message">No data available</p>
      )}
    </ChartContainer>
  );
};

export default LineChartComponent;
