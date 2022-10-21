import React from "react";
import styled from "styled-components";
import LoginLayout from "../components/common/LoginLayout";

const Login = () => {
  return (
    <LoginLayout>
      <LoginHeader>로그인</LoginHeader>
      <form>
        <p>
          아이디 :{" "}
          <input type="text" placeholder="아이디를 입력해 주세요." required />
        </p>
        <p>
          비밀번호 :{" "}
          <input
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            required
          />
        </p>
        <button type="submit">로그인</button>
        <button type="submit">회원이 아니면 회원가입</button>
      </form>
    </LoginLayout>
  );
};

const LoginHeader = styled.div`
  font-size: 40px;
  font-weight: 600;

  width: 600px;
  height: 200px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Login;
