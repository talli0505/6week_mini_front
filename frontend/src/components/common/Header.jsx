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
        <div>
          signup<button onClick={() => navigate("/login")}>로그인하기</button>
        </div>

        {/* <div>안녕하세요 저는 헤더입니다</div>
      <div onClick={() => navigation("/signup")}>회원이 아니면 회원가입</div> */}
      </HeaderBox>
    </HeaderLine>
  );
};

const HeaderLine = styled.header`
  width: 100%;
  height: 70px;

  margin: 0 auto;

  font-size: 2rem;
  font-weight: 600;

  border-bottom: 1px solid lightgray;

  cursor: pointer;

  /* .first {
    border: 1px solid red;
    flex: 1;
    width: 30%;
    box-sizing: border-box;
  }

  .second {
    border: 1px solid green;
    flex: 1;
    margin: 0px 5%;
    width: 30%;
    box-sizing: border-box;
  }

  .third {
    border: 1px solid blue;
    flex: 1;
    width: 30%;
    box-sizing: border-box;
  } */
`;

const HeaderBox = styled.div`
  display: flex;
  div {
    & :nth-child(1) {
      margin-right: auto;
    }
  }
  /* div {
    & :nth-child(2) {
      border: 1px solid green;
      flex: 1;
      margin: 0px 5%;
      width: 30%;
      box-sizing: border-box;
    }
  } */
  div {
    & :nth-child(3) {
      margin-left: auto;
    }
  }
`;
const HeaderBoxContents = styled.div``;

export default Header;
