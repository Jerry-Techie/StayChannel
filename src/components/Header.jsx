import React from "react";
import styled from "styled-components";
import logo from "../assets/StayChannellogo.png";
import CurrencyConverter from "../components/CurrencyConverter";

const HeaderWrapper = styled.header`
  background: #100a1a;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  @media (min-width: 768px) {
    padding: 1rem 4rem;
  }
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  font-size: 1.2rem;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Brand>
        <img width="135px" height="70px" src={logo} alt="StayChannel Logo" />
      </Brand>

      <RightSection>
        {/* Currency Converter added to Header */}
        <CurrencyConverter />
      </RightSection>
    </HeaderWrapper>
  );
}
