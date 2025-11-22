import React from "react";
import styled from "styled-components";
import LanguageChanger from "../components/LanguageChanger.jsx";

const FooterWrapper = styled.footer`
  background: #100a1a;
  border-top: 1px solid #ddd;
  padding: 1.5rem 1rem;
  color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  color: #ccc;
  font-size: 0.9rem;
`;

const LeftSection = styled.div`
  flex: 1;
  text-align: center;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

export default function Footer1() {
  return (
    <FooterWrapper>
      <Container>

     
        <LeftSection>
          <b>StayChannel</b> © {new Date().getFullYear()} | <b>Phone:</b> +1 (266) 996-8578
        </LeftSection>

       
        <RightSection>
          <LanguageChanger />
        </RightSection>

      </Container>
    </FooterWrapper>
  );
}
