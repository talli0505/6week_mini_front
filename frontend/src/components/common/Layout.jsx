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
  border: 2px solid gray;
  border-radius: 20px;

  width: 1200px;
  height: 1000px;

  margin: 100px auto;
  padding: 30px;

  box-sizing: border-box;
`;

// const LayoutTop = styled.div`
//   width: 1200px;
//   margin: 0 auto;
// `;

// const Layouts = styled.div`
//   box-sizing: border-box;
//   padding: 30px;
//   border: 2px solid #000;
//   border-radius: 10px;
// `;
