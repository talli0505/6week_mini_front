import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate1 = useNavigate();
  const navigate2 = useNavigate();
  return (
    <HeaderLine onClick={() => navigate1("/")}>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p>안녕하세요 저는 헤더입니다</p>
      <button
        onClick={() => {
          navigate2("/signup");
        }}
      >
        회원이 아니면 회원가입
      </button>
    </HeaderLine>
  );
};

const HeaderLine = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 20px;

  width: 1100px;
  height: 170px;

  margin: 0 auto;
  padding: 50px;

  box-sizing: border-box;

  font-size: 2rem;
  font-weight: 600;

  box-shadow: 10px 5px 10px rgba(0, 0, 0, 0.7);

  cursor: pointer;
`;

export default Header;
