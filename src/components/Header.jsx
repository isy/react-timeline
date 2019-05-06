import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <PageHeader>
      <Title>React Timeline</Title>
    </PageHeader>
  );
}

const PageHeader = styled.header`
  border-bottom: 1px solid #cfcfcf;
`;

const Title = styled.h1`
  font-size: 20px;
`;

export default Header;
