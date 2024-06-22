import React from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  margin-bottom: 20px;
  text-align: center;

  label {
    font-weight: bold;
    margin-right: 10px;
  }

  select {
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    /* Adjust centering for smaller screens */
    label {
      display: block; /* Ensure label takes full width */
      margin-bottom: 5px; /* Optional: Add some space below label */
    }

    select {
      width: 100%; /* Make select element full width */
      max-width: 300px; /* Optional: Limit maximum width */
      margin: 0 auto; /* Center the select element */
    }
  }
`;

const Filter = ({ onSelect }) => {
  const handleCityChange = (e) => {
    onSelect(e.target.value);
  };

  return (
    <FilterContainer>
      <label htmlFor="city">Select City:</label>
      <select id="city" onChange={handleCityChange}>
        <option value="Vijayawada">Vijayawada</option>
        <option value="Visakhapatnam">Visakhapatnam</option>
        <option value="Guntur">Guntur</option>
        <option value="Nellore">Nellore</option>
        <option value="Kurnool">Kurnool</option>
        <option value="Rajahmundry">Rajahmundry</option>
        <option value="Kakinada">Kakinada</option>
        <option value="Tirupati">Tirupati</option>
        <option value="Anantapur">Anantapur</option>
        <option value="Chittoor">Chittoor</option>
        <option value="Kadapa">Kadapa</option>
        <option value="Eluru">Eluru</option>
        <option value="Ongole">Ongole</option>
      </select>
    </FilterContainer>
  );
};

export default Filter;
