import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 18px;
  min-width: 220px;
  background-color: black;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  border: 1px solid transparent;
  font-size: 16px;
  transition: 0.4s ease-in-out;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.4s ease-in-out;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
  }
`;

export default Button;
