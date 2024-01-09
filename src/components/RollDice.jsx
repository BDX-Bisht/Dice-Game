import React from "react";
import styled from "styled-components";

const RollDice = ({ currentDice, rollDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/images/dice_${currentDice}.png`} alt="dice_image" />
      </div>
      <p>Click On Dice Roll</p>
    </DiceContainer>
  );
};

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 24px;
  }
  .dice {
    cursor: pointer;
  }
  @media (max-width: 780px) {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 2px solid black;
    .dice img {
      height: 200px;
    }
  }
`;

export default RollDice;
