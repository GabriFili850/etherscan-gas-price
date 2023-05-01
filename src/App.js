import React from "react";
import GasPrice from "./GasPrice";
import { AppContainer, AppHeader } from "./styles";
import EthereumLogo from "./images/ethereum-logo.svg";

function App() {
  return (
    <AppContainer>
      <img
        src={EthereumLogo}
        alt='Ethereum Logo'
        style={{ width: "50px", height: "auto" }}
      />
      <AppHeader>Etherscan Gas Price</AppHeader>
      <GasPrice />
    </AppContainer>
  );
}

export default App;
