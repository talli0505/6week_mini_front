import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __getPosts } from "../../redux/modules/postsSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderLine>
      <HeaderBox>
        <div>logo</div>
        <div>login</div>
        <div>signup</div>
        <button onClick={() => navigate("/login")}>로그인하기</button>
      </HeaderBox>
      {/* <div>안녕하세요 저는 헤더입니다</div>
      <div onClick={() => navigation("/signup")}>회원이 아니면 회원가입</div> */}
    </HeaderLine>
  );
};

const HeaderLine = styled.header`
  display: flex;
  justify-content: space-around;

  width: 100%;
  height: 70px;

  margin: 0 auto;

  font-size: 2rem;
  font-weight: 600;

  box-shadow: 10px 5px 10px rgba(0, 0, 0, 0.3);

  cursor: pointer;
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const HeaderBoxContents = styled.div``;

export default Header;
