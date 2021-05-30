import React from "react";
import styled from "styled-components";


const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
flex-direction:column;
`;


const LogoText = styled.h2`
  font-size: 40px;
  justify-content: center;
  margin: 0;
  margin-left: 4px;
  color: #222;
  padding:0 1em ;
  font-family: 'Playfair Display', serif;
  font-weight:bold;
`;

export function Logo1(props) {
  return (
    <LogoWrapper>
      <LogoText>Lorem</LogoText>
      <LogoText>Ipsum</LogoText>
    </LogoWrapper>
  );
}