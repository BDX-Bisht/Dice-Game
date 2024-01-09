import React from "react";
import styled from "styled-components";

const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const array = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandle = (item) => {
    setSelectedNumber(item);
    setError("");
  };

  return (
    <NumberContainer>
      <span>{error}</span>
      <div className="flex">
        {array.map((item, index) => (
          <Box
            isSelected={item === selectedNumber}
            key={index}
            onClick={() => numberSelectorHandle(item)}
          >
            {item}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberContainer>
  );
};

const NumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;

  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
  span {
    color: red;
    font-weight: 700;
  }
  @media (max-width: 780px) {
    margin-bottom: 0.5rem;
    align-items: center;
    p {
      margin-top: 1rem;
    }
    span {
      margin-bottom: 1rem;
    }
  }
`;

const Box = styled.div`
  width: 72px;
  height: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 25px;
  font-weight: 700;
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? "black" : "white")};
  color: ${({ isSelected }) => (isSelected ? "white" : "black")};

  @media (max-width: 780px) {
    width: 55px;
    height: 55px;
  }
`;

export default NumberSelector;
