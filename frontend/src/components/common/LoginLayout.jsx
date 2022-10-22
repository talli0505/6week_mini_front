import React from "react";
import styled from "styled-components";

const LoginLayout = ({ children }) => {
  return <LoginLayoutLine>{children}</LoginLayoutLine>;
};

export default LoginLayout;

const LoginLayoutLine = styled.div`
  width: 800px;
  height: 700px;

  border: 1px solid lightgrey;
  border-radius: 20px;
  margin: 100px auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
