import React from "react";
import styled from "styled-components";
import LoginLayout from "../components/common/LoginLayout";

const SignUp = () => {
  return (
    <LoginLayout>
      <LoginHeader>회원가입</LoginHeader>
      <form>
        <p>
          아이디 : <input type="text" />
        </p>
        <p>
          비밀번호 : <input type="text" />
        </p>
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          뒤로가기 (로그인페이지로)
        </button>
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

export default SignUp;
