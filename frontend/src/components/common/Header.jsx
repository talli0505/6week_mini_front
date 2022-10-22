import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { __getPosts } from "../../redux/modules/postsSlice";

const Header = () => {
  return (
    <HeaderLine>
      <p>안녕하세요 저는 헤더입니다</p>
      <a
        href="/signup"
        // onClick={() => {
        //   navigate2("/signup");
        // }}
      >
        회원이 아니면 회원가입
      </a>
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
