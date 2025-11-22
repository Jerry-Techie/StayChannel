import React, { useEffect, useState } from "react";

const CurrencyMini = () => {
  const [rates, setRates] = useState({});
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [result, setResult] = useState("");

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
        const data = await res.json();
        setRates(data.rates);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };
    fetchRates();
  }, []);

  useEffect(() => {
    if (rates[fromCurrency] && rates[toCurrency]) {
      const converted = (1 / rates[fromCurrency]) * rates[toCurrency];
      setResult(converted.toFixed(2));
    }
  }, [fromCurrency, toCurrency, rates]);

  const currencyList = Object.keys(rates);

  return (
    <div style={styles.wrapper}>
      <select
        style={styles.select}
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        {currencyList.map((cur) => (
          <option key={cur} value={cur}>
            {cur}
          </option>
        ))}
      </select>

      <span style={styles.arrow}>→</span>

      <select
        style={styles.select}
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        {currencyList.map((cur) => (
          <option key={cur} value={cur}>
            {cur}
          </option>
        ))}
      </select>

      <span style={styles.rate}>{result}</span>
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    background: "#1b1525",
    padding: "4px 8px",
    borderRadius: "6px",
    fontSize: "12px",
    color: "white",
  },
  select: {
    background: "#241c33",
    color: "white",
    border: "1px solid #3b2d4d",
    borderRadius: "4px",
    padding: "2px 4px",
    fontSize: "12px",
    cursor: "pointer",
  },
  arrow: {
    fontSize: "14px",
    opacity: 0.7,
  },
  rate: {
    fontWeight: "bold",
    marginLeft: "7px",
  },
};

export default CurrencyMini;
