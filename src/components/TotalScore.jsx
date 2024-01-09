import React from "react";
import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <Container>
      <h1>{score}</h1>
      <p>Total Score</p>
    </Container>
  );
};

const Container = styled.div`
  max-width: 200px;
  text-align: center;
  h1 {
    font-size: 100px;
    line-height: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500px;
  }
  @media (max-width: 780px) {
    display: flex;
    gap: 30px;
    align-items: center;
    border-bottom: 2px solid black;
    margin-bottom: 1rem;
    h1 {
      font-size: 70px;
    }
    P {
      font-size: 20px;
      font-weight: bold;
    }
  }
`;

export default TotalScore;
