import React from "react";
import styled from "styled-components";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction:column;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction:column;
  width: 100%;
  list-style: none;
`;

const LinkItem = styled.li`
  padding: 1.1em 0;
  color: #222;
  font-weight: 500;
  font-size: 14px;
  display: flex;
  flex-direction:column;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

export function NavLinks(props) {
  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
          <Link href="#">About</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">Services</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">Cuisine</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">Gallery</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">Contact</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">Book</Link>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
}