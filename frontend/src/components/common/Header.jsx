import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __getPosts } from "../../redux/modules/postsSlice";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderLine>
      <HeaderBox>
        <Block>
          <LogoImg src="https://cdn-icons-png.flaticon.com/512/3209/3209879.png" />
        </Block>
        <Title>Error Fork</Title>
        <BottonBlock>
          <Button onClick={() => navigate("/signup")}>회원가입</Button>
          <Button onClick={() => navigate("/login")}>로그인하기</Button>
          <Button onClick={() => navigate("/form")}>게시글작성</Button>
        </BottonBlock>
      </HeaderBox>
    </HeaderLine>
  );
};

const HeaderLine = styled.header`
  width: 100%;
  height: 80px;

  margin: 0 auto;

  border-bottom: 1px solid lightgray;

  cursor: pointer;
`;

const HeaderBox = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
`;

const Block = styled.div`
  flex: 1;
  width: 30%;
  display: flex;
  align-items: center;
`;
const BottonBlock = styled(Block)`
  justify-content: end;
`;

const LogoImg = styled.img`
  width: 30%;
  height: 30%;

  box-sizing: border-box;

  margin-left: 10px;

  top: 0;
`;

const Title = styled.div`
  font-size: 30px;
  width: 30%;

  text-align: center;
`;

export default Header;
