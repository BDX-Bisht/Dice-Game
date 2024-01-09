import React from "react";
import styled from "styled-components";
import { Button } from "../styled/Button";

const StartsGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="images/dices.png" alt="Big_dice" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  height: 100vh;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }

  @media (max-width: 780px) {
    margin-top: 2rem;
    text-align: center;
    display: block;
    justify-content: center;
    img {
      width: 80%;
    }
    .content {
      h1 {
        font-size: 70px;
        margin-bottom: 1rem;
      }
    }
  }
`;

export default StartsGame;
