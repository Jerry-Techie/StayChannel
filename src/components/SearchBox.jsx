import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FaExchangeAlt, FaSearch, FaEnvelope, FaQuestionCircle } from "react-icons/fa";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import "../i18n";

const Container = styled.div`
  max-width: 1000px;
  margin: -140px auto 30px;
  padding: 0 10px;
  position: relative;
  
  @media(max-width: 768px){ margin-top:-430px }
`;

const TripToggle = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
`;

const ToggleButton = styled.button`
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  background: ${(props) => (props.active ? "#100a1a" : "white")};
  color: ${(props) => (props.active ? "white" : "#333")};
  font-weight: bold;
  cursor: pointer;
`;

const TopIcons = styled.div`
  display: flex;
  gap: 12px;
  margin-left: auto;
  align-items: center;
`;

const InfoDropdown = styled(motion.div)`
  position: absolute;
  top: 40px;
  right: 0;
  width: 280px;
  background: white;
  color: black;
  padding: 12px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  font-size: 0.85rem;
  z-index: 20;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  padding: 20px;
  border-radius: 12px;
  background-color: #0d207b;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  position: relative;
  @media(max-width: 768px){ padding-bottom: 100px; }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 140px;
`;

const Label = styled.label`
  font-size: 0.75rem;
  color: #fff;
  margin-bottom: 4px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  background: white;
  border-radius: 6px;
  border: 1px solid #ccc;
  padding: 0 12px;
  font-size: 14px;
  box-sizing: border-box;
`;

const SwapButton = styled.button`
  background: #100a1a;
  color: white;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 18px;
`;

const SearchButton = styled.button`
  padding: 10px 30px;
  background: #100a1a;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 15px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const PassengerWrapper = styled.div`
  position: relative;
`;

const PassengerButton = styled.button`
  padding: 12px 16px;
  border-radius: 6px;
  border: 1px solid #ccc;
  background: #100a1a;
  color: white;
  font-weight: bold;
  cursor: pointer;
  margin-top: 15px;
  min-width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Dropdown = styled(motion.div)`
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  max-width: 300px;
  background: white;
  color: black;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  padding: 12px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 10;
`;

const CounterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
`;

const CounterButton = styled.button`
  padding: 4px 10px;
  border-radius: 6px;
  background: #2e2e2e;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: bold;
`;

const SaveButton = styled.button`
  padding: 6px 12px;
  border-radius: 6px;
  background: #100a1a;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  align-self: flex-end;
  margin-top: 10px;
`;

const MotionContainer = motion(Container);
const MotionSearchButton = motion(SearchButton);

export default function SearchBox() {
  const { t } = useTranslation();

  const [tripType, setTripType] = useState("round");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departure, setDeparture] = useState(null);
  const [returnDate, setReturnDate] = useState(null);

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const [tempAdults, setTempAdults] = useState(adults);
  const [tempChildren, setTempChildren] = useState(children);
  const [tempInfants, setTempInfants] = useState(infants);

  const [swapped, setSwapped] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const originRef = useRef(null);
  const destinationRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleSwap = () => setSwapped(!swapped);
  const handleInfoClick = () => setShowInfo(!showInfo);

  const handlePassengerClick = () => {
    if (!origin) {
      originRef.current.focus();
      return;
    }
    if (!destination) {
      destinationRef.current.focus();
      return;
    }
    setTempAdults(adults);
    setTempChildren(children);
    setTempInfants(infants);
    setShowDropdown(!showDropdown);
  };

  const handleSavePassengers = () => {
    setAdults(tempAdults);
    setChildren(tempChildren);
    setInfants(tempInfants);
    setShowDropdown(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const renderOriginDest = () => {
    const originBlock = (
      <InputGroup>
        <Label>{t("origin")}</Label>
        <Input
          ref={originRef}
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          placeholder={t("origin")}
          required
        />
      </InputGroup>
    );

    const destinationBlock = (
      <InputGroup>
        <Label>{t("destination")}</Label>
        <Input
          ref={destinationRef}
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder={t("destination")}
          required
        />
      </InputGroup>
    );

    return swapped ? (
      <>
        {destinationBlock}
        <SwapButton type="button" onClick={handleSwap}>
          <FaExchangeAlt />
        </SwapButton>
        {originBlock}
      </>
    ) : (
      <>
        {originBlock}
        <SwapButton type="button" onClick={handleSwap}>
          <FaExchangeAlt />
        </SwapButton>
        {destinationBlock}
      </>
    );
  };

  return (
    <MotionContainer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <TripToggle>
        <ToggleButton
          type="button"
          active={tripType === "round"}
          onClick={() => setTripType("round")}
        >
          {t("roundTrip")}
        </ToggleButton>
        <ToggleButton
          type="button"
          active={tripType === "oneway"}
          onClick={() => setTripType("oneway")}
        >
          {t("oneWay")}
        </ToggleButton>

      <TopIcons>
  <motion.div
    animate={{ y: [0, -5, 0, 5, 0] }}
    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
    whileHover={{ scale: 1.3 }}
    onClick={() =>
      window.open(
        "mailto:info@staychannel.com?subject=Booking%20Help&body=Hello,%20I%20need%20help%20with%20booking",
        "_blank"
      )
    }
    style={{ cursor: "pointer" }}
  >
    <FaEnvelope size={22} color="#070707ff" />
  </motion.div>

  <div style={{ position: "relative" }}>
    <motion.div
      animate={{ y: [0, -5, 0, 5, 0] }}
      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      whileHover={{ scale: 1.3 }}
      onClick={handleInfoClick}
      style={{ cursor: "pointer" }}
    >
      <FaQuestionCircle size={22} color="white" />
    </motion.div>

    <AnimatePresence>
      {showInfo && (
        <InfoDropdown
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <strong>How to Use:</strong>
          <ol style={{ paddingLeft: "16px", marginTop: "6px" }}>
            <li>Enter your origin and destination.</li>
            <li>Select departure date (and return date for round-trip).</li>
            <li>Choose number of passengers.</li>
            <li>Click the search button to see available trips.</li>
            <li>Use the swap button to switch origin/destination.</li>
            <li>For help, click the Mail icon to contact us.</li>
          </ol>
        </InfoDropdown>
      )}
    </AnimatePresence>
  </div>
</TopIcons>

      </TripToggle>

      <Form onSubmit={(e) => e.preventDefault()}>
        {renderOriginDest()}

        <InputGroup>
          <Label>{t("departureDate")}</Label>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              value={departure}
              onChange={(newValue) => setDeparture(newValue)}
              disabled={!origin || !destination}
              slotProps={{
                textField: {
                  fullWidth: true,
                  size: "small",
                  sx: { background: "white", borderRadius: "6px" },
                },
              }}
            />
          </LocalizationProvider>
        </InputGroup>

        {tripType === "round" && (
          <InputGroup>
            <Label>{t("arrivalDate")}</Label>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={returnDate}
                onChange={(newValue) => setReturnDate(newValue)}
                disabled={!origin || !destination}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    size: "small",
                    sx: { background: "white", borderRadius: "6px" },
                  },
                }}
              />
            </LocalizationProvider>
          </InputGroup>
        )}

        <PassengerWrapper>
          <PassengerButton type="button" onClick={handlePassengerClick}>
            {adults} {t("adult")}
            {adults !== 1 ? "s" : ""}, {children} {t("child")}
            {children !== 1 ? "ren" : ""}, {infants} {t("infant")}
            {infants !== 1 ? "s" : ""}
          </PassengerButton>

          <AnimatePresence>
            {showDropdown && (
              <Dropdown
                ref={dropdownRef}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <CounterRow>
                  <span>{t("adults")}:</span>
                  <div>
                    <CounterButton
                      onClick={() => setTempAdults((a) => Math.max(0, a - 1))}
                    >
                      -
                    </CounterButton>
                    <span style={{ margin: "0 8px" }}>{tempAdults}</span>
                    <CounterButton onClick={() => setTempAdults((a) => a + 1)}>
                      +
                    </CounterButton>
                  </div>
                </CounterRow>

                <CounterRow>
                  <span>{t("children")}:</span>
                  <div>
                    <CounterButton
                      onClick={() => setTempChildren((c) => Math.max(0, c - 1))}
                    >
                      -
                    </CounterButton>
                    <span style={{ margin: "0 8px" }}>{tempChildren}</span>
                    <CounterButton onClick={() => setTempChildren((c) => c + 1)}>
                      +
                    </CounterButton>
                  </div>
                </CounterRow>

                <CounterRow>
                  <span>{t("infants")}:</span>
                  <div>
                    <CounterButton
                      onClick={() => setTempInfants((i) => Math.max(0, i - 1))}
                    >
                      -
                    </CounterButton>
                    <span style={{ margin: "0 8px" }}>{tempInfants}</span>
                    <CounterButton onClick={() => setTempInfants((i) => i + 1)}>
                      +
                    </CounterButton>
                  </div>
                </CounterRow>

                <SaveButton type="button" onClick={handleSavePassengers}>
                  {t("save")}
                </SaveButton>
              </Dropdown>
            )}
          </AnimatePresence>
        </PassengerWrapper>

        <MotionSearchButton
          type="submit"
          whileHover={{ scale: 1.05, backgroundColor: "#ff3366" }}
          whileTap={{ scale: 0.95 }}
        >
          <FaSearch /> {t("search")}
        </MotionSearchButton>
      </Form>
    </MotionContainer>
  );
}
