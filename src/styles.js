import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

// Global Styles
export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f0f2f5;
  }

  * {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

// App Wrapper
export const AppWrapper = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

// Header Component Styles
export const HeaderWrapper = styled.header`
  padding: 20px;
  background-color: #282c34;
  color: white;
  text-align: center;
  border-radius: 8px 8px 0 0;
`;

// Filter Component Styles
export const FilterWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
`;

export const Select = styled.select`
  padding: 10px;
  margin-right: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
`;

// Chart Component Styles
export const ChartWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  & > div {
    margin: 10px;
  }
`;

// DataTable Component Styles
export const TableWrapper = styled.div`
  overflow-x: auto;
  margin: 20px 0;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  background-color: #f4f4f4;
  padding: 8px;
  text-align: left;
  border: 1px solid #ddd;
`;

export const Td = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
`;
