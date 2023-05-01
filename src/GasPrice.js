import React, { useState, useEffect } from "react";
import axios from "axios";
import { GasPriceContainer } from "./styles";

const GasPrice = () => {
  const [gasPrice, setGasPrice] = useState(null);
  const [countdown, setCountdown] = useState(15);
  const apiKey = process.env.REACT_APP_ETHERSCAN_API_KEY;

  const REFRESH_INTERVAL = 15000; // 15 seconds

  useEffect(() => {
    const fetchGasPrice = async () => {
      try {
        const response = await axios.get(
          `https://api.etherscan.io/api?module=proxy&action=eth_gasPrice&apikey=${apiKey}`
        );
        const gasPriceInGwei = parseInt(response.data.result, 16) / 1e9;
        setGasPrice(gasPriceInGwei.toFixed(2));
      } catch (error) {
        console.error("Error fetching gas price:", error);
      }
    };

    const updateCountdown = () => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 1) {
          fetchGasPrice();
          return REFRESH_INTERVAL / 1000;
        } else {
          return prevCountdown - 1;
        }
      });
    };

    fetchGasPrice(); // Initial fetch
    const interval = setInterval(updateCountdown, 1000); // Update countdown every second

    return () => clearInterval(interval);
  }, []);

  return (
    <GasPriceContainer>
      {gasPrice ? (
        <>
          <p>Current Gas Price: {gasPrice} Gwei</p>
          <p>Refreshing in {countdown} seconds...</p>
        </>
      ) : (
        <p>Loading gas price...</p>
      )}
    </GasPriceContainer>
  );
};

export default GasPrice;
