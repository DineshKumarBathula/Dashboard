import React from "react";
import styled from "styled-components";

const TableContainer = styled.div`
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;

  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border-collapse: collapse;

  @media (min-width: 768px) {
    font-size: 1.2rem; /* Adjust font size for larger screens */
  }
`;

const Th = styled.th`
  background-color: #333;
  color: white;
  padding: 12px 16px;
  text-align: center;
`;

const Td = styled.td`
  padding: 12px 16px;
  text-align: center;
  border-top: 1px solid #f0f0f0;
`;

const DataTable = ({ data }) => {
  console.log("DataTable Data:", data); // Log data prop
  return (
    <TableContainer>
      <h2 style={{ textAlign: "center" }}>Weather Data Table</h2>
      <Table>
        <thead>
          <tr>
            <Th>City</Th>
            <Th>Date/Time</Th>
            <Th>Temperature (&#8451;)</Th>
            <Th>Humidity (%)</Th>
            <Th>Weather</Th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <Td>{item.city}</Td>
              <Td>{new Date(item.datetime * 1000).toLocaleString()}</Td>
              <Td>{item.temperature}</Td>
              <Td>{item.humidity}</Td>
              <Td>{item.weather}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
