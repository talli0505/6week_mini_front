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
  /* border: 1px solid lightgray; */

  width: 100%;
  height: auto;
  margin: 0 auto;

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
