import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer1 from "../components/Footer";
import SearchBox from "../components/SearchBox";
import { useTranslation } from "react-i18next";

const Hero = styled.section`
  background: #dd1e6c;
  color: white;
  padding: 6.8rem 1rem 6rem 1rem;
  text-align: center;
  overflow-y: hidden;
   @media(max-width: 768px){ margin-bottom:300px;}

`;

const HeroTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;

const HeroSubtitle = styled.p`
  margin-top: 1rem;
  opacity: 0.9;
  padding: 0.01rem 1rem 4rem 1rem;
`;

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <Hero>
        <HeroTitle>{t("heroTitle")}</HeroTitle>
        <HeroSubtitle>{t("heroSubtitle")}</HeroSubtitle>
      </Hero>
      <SearchBox />
      <Footer1 />
    </div>
  );
}
