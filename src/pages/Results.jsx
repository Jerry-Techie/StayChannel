import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import FlightCard from "../components/FlightCard";

const Container = styled.div`
  max-width: 960px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const SearchSummary = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0,0,0,0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SummaryText = styled.div`
  font-size: 0.9rem;
  color: #333;
`;

const ChangeBtn = styled.button`
  background: none;
  border: none;
  color: #0066CC;
  text-decoration: underline;
  cursor: pointer;
  font-size: 0.85rem;
`;

const ResultsList = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Sidebar = styled.aside`
  margin-top: 2rem;

  @media (min-width: 768px) {
    width: 250px;
    margin-top: 0;
  }

  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0,0,0,0.05);
`;

export default function Results() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const q = state || { origin: "CCS", destination: "MIA", departure: "", returnDate: "", tripType: "round", passengers: 1 };

  // Mock results
  const flights = [
    { airline: "Airline A", from: q.origin, to: q.destination, depTime: "08:00", arrTime: "11:30", duration: "3h 30m", price: "$320" },
    { airline: "Airline B", from: q.origin, to: q.destination, depTime: "13:00", arrTime: "16:45", duration: "3h 45m", price: "$380" },
    { airline: "Airline C", from: q.origin, to: q.destination, depTime: "19:00", arrTime: "22:35", duration: "3h 35m", price: "$290" }
  ];

  return (
    <div>
      <Header />
      <Container>
        <SearchSummary>
          <SummaryText>
            Resultados para {q.origin} → {q.destination}
          </SummaryText>
          <ChangeBtn onClick={() => navigate(-1)}>Modificar búsqueda</ChangeBtn>
        </SearchSummary>

        <ResultsList>
          {flights.map((f, i) => <FlightCard key={i} flight={f} />)}
        </ResultsList>

        <Sidebar>
          <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Filtrar</div>
          <div style={{ fontSize: '0.9rem', color: '#666' }}>* Filtros de ejemplo (demo UI)</div>
        </Sidebar>
      </Container>
      <Footer />
    </div>
  );
}
