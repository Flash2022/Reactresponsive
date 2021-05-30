import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { NavLinks } from "./navLinks";
import { Logo1 } from "../Logo/Lorem";
import { MobileNavLinks } from "./mobileNavLinks";
import { Accessibility } from "./Accessiblity";
import { DeviceSize } from "../responsive";

const NavbarContainer = styled.div`
  display: flex;
  flex:0.15;
  flex-direction:column;
  align-items:center;
  
 
 
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  
`;

const MiddleSection = styled.div`

  display: flex;
  flex-direction:column;
  justify-content: center;
  
`;

const RightSection = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  margin-top: 35px;
`;

export function Navbar(props) {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
  return (
    <NavbarContainer>
      <LeftSection>{!isMobile && <Logo1 />}</LeftSection>
      <MiddleSection>{!isMobile && <NavLinks />}</MiddleSection>
      <RightSection>
        {!isMobile && <Accessibility />}
        {isMobile && <MobileNavLinks />}
      </RightSection>
    </NavbarContainer>
  );
}
