import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonBox } from "./Button";
import Button from "./Button";
import styled from "styled-components";
// import fork from "../../img/logo.png";

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderBox>
      <ImgBlock>
        <LogoImg src="https://cdn-icons-png.flaticon.com/512/3209/3209879.png" />
      </ImgBlock>
      <TitleBlock>
        <Title>CODEFORK</Title>
        <Desc>여러분의 에러를 공유하세요</Desc>
      </TitleBlock>
      <BottonBlock>
        <Button onClick={() => navigate("/signup")}>회원가입</Button>
        <Button onClick={() => navigate("/login")}>로그인하기</Button>
        <LastButton onClick={() => navigate("/form")}>게시글작성</LastButton>
      </BottonBlock>
    </HeaderBox>
  );
};

const HeaderBox = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 110px;
  background-color: white;
  position: fixed;
  margin: 0 auto;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid lightgray;
  cursor: pointer;
`;

const Block = styled.div`
  flex: 1;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BottonBlock = styled(Block)`
  justify-content: end;
  margin-right: 40px;
`;

const LastButton = styled(ButtonBox)`
  border: none;
`;

const TitleBlock = styled(Block)`
  display: flex;
  flex-direction: column;
`;

const ImgBlock = styled(Block)`
  justify-content: flex-start;
`;

const LogoImg = styled.img`
  width: 100px;
  height: 100px;

  margin-left: 40px;
`;

const Title = styled.div`
  font-size: 30px;
  width: 30%;
  text-align: center;
  justify-content: center;

  font-weight: 700;
`;

const Desc = styled.div`
  font-size: 10px;
  margin: 0;
`;

export default Header;
