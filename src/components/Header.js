// Header.js

import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>Weather Dashboard</Title>
      <Description>
        Visualize weather statistics for different cities
      </Description>
    </HeaderWrapper>
  );
};

export default Header;
