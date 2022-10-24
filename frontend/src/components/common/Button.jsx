import React from "react";
import styled from "styled-components";

const Button = ({ children, onClick }) => {
  return (
    <ButtonBox>
      <span onClick={onClick}>{children}</span>
    </ButtonBox>
  );
};

export const ButtonBox = styled.button`
  width: 100px;
  height: 40px;
  background: transparent;
  border-right: 1px solid lightgray;
  text-align: center;
  margin-left: 10px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: black;
    color: #fff;
  }
`;

export default Button;
