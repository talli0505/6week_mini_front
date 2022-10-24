import React from "react";
import styled from "styled-components";

const Button = ({ children, onClick }) => {
  return (
    <ButtonBox>
      <span onClick={onClick}>{children}</span>
    </ButtonBox>
  );
};

const ButtonBox = styled.button`
  width: 100px;
  height: 40px;
  background: #aee3b4;
  box-sizing: border-box;
  border-radius: 10px;
  text-align: center;
  margin-left: 10px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: #1a6834;
    color: #fff;
  }
`;

export default Button;
