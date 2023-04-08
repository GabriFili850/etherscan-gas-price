import React, { useState, useEffect } from "react";
import axios from "axios";

const GasPrice = () => {
  const [gasPrice, setGasPrice] = useState(null);
  const apiKey = process.env.REACT_APP_ETHERSCAN_API_KEY;

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

    const interval = setInterval(() => {
      fetchGasPrice();
    }, 10000); // Update every 10 seconds

    return () => clearInterval(interval);
  }, [apiKey]);

  return (
    <div>
      {gasPrice ? (
        <p>Current Gas Price: {gasPrice} Gwei</p>
      ) : (
        <p>Loading gas price...</p>
      )}
    </div>
  );
};

export default GasPrice;
