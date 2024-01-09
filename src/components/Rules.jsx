import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <RulesDiv>
      <h2>How to play Dice Game</h2>
      <ul>
        <li>Select any number.</li>
        <li>Click in the dice image.</li>
        <li>
          After click on dice if selected number is equal to the dice number you
          will get same point as dice.
        </li>
        <li>If you get wrong guess then 2 points will be deducted.</li>
      </ul>
    </RulesDiv>
  );
};

const RulesDiv = styled.div`
  margin: 3rem auto;
  padding: 30px 40px;
  max-width: 900px;
  border-radius: 20px;
  background-color: #c9c3c3c0;
  h2 {
    margin-bottom: 1rem;
  }

  @media (max-width: 780px) {
    padding: 20px;
    margin: 3rem 0px;
    ul {
      padding: 0px 20px;
      padding-right: 0px;
    }
  }
`;

export default Rules;
