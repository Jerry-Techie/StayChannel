import React from "react";
import styled from "styled-components";
import { FaFacebookSquare, FaTwitter, FaLinkedin, FaYoutube, FaInstagramSquare } from "react-icons/fa";
import LanguageChanger from "../components/LanguageChanger";

const FooterWrapper = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
  font-size: 0.9rem;
`;

const TopFooter = styled.div`
  background: #dd1e6c;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-bottom: 1px solid #333;
`;

const BottomFooter = styled.div`
  background: #00d2ff;
  color: #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 2rem;
`;

const Section = styled.div`
  flex: 1;
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;
  display: block;
  margin-top: 2px;

  &:hover {
    color: #0d207b;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <TopFooter>
        <Section>
          <b style={{marginLeft:"2.2rem"}}>Email</b>
          <div style={{marginLeft:"2.2rem"}}>
          <Link href="mailto:info@staychannel.com">info@staychannel.com</Link>
          <Link href="mailto:sales@staychannel.com">sales@staychannel.com</Link>
          </div>
        </Section>

        <Section style={{ textAlign: "center" }}>
          <b>Phone</b>
          <Link href="tel:+12669968578">+1 (266) 996-8578</Link>
          <div style={{marginTop:"1rem"}}><LanguageChanger/></div>
        </Section>

        <Section style={{ textAlign: "right" }}>
          <b style={{marginRight:"2.2rem"}}>Social Networks</b>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.5rem", marginTop: "0.3rem", marginRight: "2.8rem" }}>
            <Link href="https://web.facebook.com/people/Staychannel-Distribution-LLC/61582930321320/?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer"><FaFacebookSquare /></Link>
            <Link href="https://www.instagram.com/staychanneldistribution/" target="_blank" rel="noopener noreferrer"><FaInstagramSquare /></Link>
            <Link href="https://www.linkedin.com/company/staychanneldistribution/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></Link>
            <Link href="https://www.youtube.com/channel/UCyr2jdkXX9F9pokBBvRrxYA" target="_blank" rel="noopener noreferrer"><FaYoutube /></Link>
          </div>
        </Section>
      </TopFooter>

      <BottomFooter>
        <Section style={{marginLeft:"2.2rem", fontWeight:"500"}}><Link href="/terms">Terms and Conditions</Link></Section>
        <Section style={{ textAlign: "center", fontWeight:"500" }}><Link href="/privacy">Privacy Policies</Link></Section>
        <Section style={{ textAlign: "right", marginRight:"2.2rem", fontWeight:"500" }}><Link href="/faq">Frequently Asked Questions</Link></Section>
      </BottomFooter>
    </FooterWrapper>
  );
}
