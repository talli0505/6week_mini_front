import React from "react";
import styled from "styled-components";

const LoginLayout = ({ children }) => {
  return <LoginLayoutLine>{children}</LoginLayoutLine>;
};
export default LoginLayout;

const LoginLayoutLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 800px;
  width: 100%;
  height: 500px;

  margin: 70px auto 0 auto;

  /* background-color: aliceblue; */
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);

  border-radius: 30px;
  border: 1px solid lightgray;
`;
