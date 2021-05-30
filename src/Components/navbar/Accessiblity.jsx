import React from "react";
import styled from "styled-components";

const AccessibilityContainer = styled.div`
  display: flex;
  flex-direction:column;
  margin-left: 10px;
`;

const CartButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 2.5em;
  color: #222;
  font-size: 13px;
  font-weight: 600;
  border-radius: 25px;
`;

export function Accessibility(props) {
  return (
    <AccessibilityContainer>
      <CartButton>Cart</CartButton>
    </AccessibilityContainer>
  );
}
