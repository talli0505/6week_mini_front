import React from "react";
import styled from "styled-components";

const Header = () => {
  return <HeaderLine>안녕하세요 저는 헤더입니다</HeaderLine>;
};

const HeaderLine = styled.div`
  border-radius: 20px;

  width: 1100px;
  height: 170px;

  margin: 0 auto;
  padding: 50px;

  box-sizing: border-box;

  font-size: 2rem;
  font-weight: 600;

  box-shadow: 10px 5px 10px rgba(0, 0, 0, 0.7);
`;

export default Header;
