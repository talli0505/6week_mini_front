import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonBox } from "./Button";
import Button from "./Button";
import styled from "styled-components";
import fork from "../../img/fork.png";

const Header = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      localStorage.clear();
      window.location.reload();
    }
  };

  let loginContents = null;
  const localUserNic = localStorage.getItem("userNickname");

  if (localUserNic) {
    loginContents = (
      <UserInfoBlock>
        <UserInfo>{localUserNic}님 환영합니다</UserInfo>
        <ButtonRaw>
          <LastButton onClick={() => navigate("/form")}>게시글작성</LastButton>
          <LastButton onClick={() => onLogout()}>로그아웃</LastButton>
        </ButtonRaw>
      </UserInfoBlock>
    );
  } else {
    loginContents = (
      <BottonBlock>
        <Button onClick={() => navigate("/signup")}>회원가입</Button>
        <Button onClick={() => navigate("/login")}>로그인하기</Button>
        <LastButton onClick={() => navigate("/form")}>게시글작성</LastButton>
      </BottonBlock>
    );
  }

  return (
    <HeaderBox>
      <ImgBlock>
        <LogoImg src="https://cdn-icons-png.flaticon.com/512/3209/3209879.png" />
        <LogoImgFork src={fork} />
      </ImgBlock>
      <TitleBlock onClick={() => navigate("/")}>
        <Title>CODEFORK</Title>
        <Desc>여러분의 에러를 공유하세요</Desc>
      </TitleBlock>
      <InfoBlock>{loginContents}</InfoBlock>
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

const ButtonRaw = styled.div`
  margin-right: 20px;
`;

const LastButton = styled(ButtonBox)`
  border: none;
`;

const TitleBlock = styled(Block)`
  display: flex;
  flex-direction: column;
`;

const InfoBlock = styled(Block)`
  display: flex;
  justify-content: end;
`;

const ImgBlock = styled(Block)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const LogoImg = styled.img`
  width: 80px;
  height: 80px;

  margin-left: 40px;
`;

const LogoImgFork = styled.img`
  width: 50px;
  height: 50px;
`;

const Title = styled.div`
  font-size: 30px;
  width: 30%;
  text-align: center;
  justify-content: center;

  font-weight: 700;
`;

const UserInfo = styled.div`
  font-size: 20px;
  font-weight: 100;
`;

const UserInfoBlock = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

const Desc = styled.div`
  font-size: 10px;
  margin: 0 30px 0 0;
`;

export default Header;
