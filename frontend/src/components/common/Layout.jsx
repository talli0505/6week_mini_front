import React from "react";
import styled from "styled-components";

import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <LayoutLine>
      <Header />
      {children}
    </LayoutLine>
  );
};

export default Layout;

const LayoutLine = styled.div`
  width: 100%;
  height: auto;
`;
