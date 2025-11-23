import React from "react";
import styled from "styled-components";
import logo from "../assets/StayChannel.png";
import { FaPhoneAlt, FaYoutube, FaLinkedin, FaInstagram, FaFacebookSquare } from "react-icons/fa";

const HeaderWrapper = styled.header`
  background: #ffffffff;
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
  flex-direction: column;
  align-items: center; 
  gap: 0.3rem;
`;

const Phone = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #dd1e6c; 
  padding: 0.4rem 0;
  font-weight: 600;
    font-size: 1.1rem;
  
`;

const Socials = styled.div`
  display: flex;
  gap: 0.8rem; 
  padding-left: 0.8rem;
  color: #dd1e6c;

  a {
    color: white;
    font-size: 1rem;
    transition: color 0.3s;

    &:hover {
      color: #ff3b30; 
    }
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Brand>
        <img width="145px" height="70px" src={logo} alt="StayChannel Logo" />
      </Brand>

      <RightSection>

        <Phone>
          <FaPhoneAlt />
          <span>+1 (266) 996-8578</span>
        </Phone>

        <Socials>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube style={{ color: "#dd1e6c", fontSize: "1.3rem" }} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin style={{ color: "#dd1e6c", fontSize: "1.3rem" }} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram style={{ color: "#dd1e6c", fontSize: "1.3rem" }} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare style={{ color: "#dd1e6c", fontSize: "1.3rem" }} />
          </a>
        </Socials>
      </RightSection>
    </HeaderWrapper>
  );
}
