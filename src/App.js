import React from "react";
import GasPrice from "./components/GasPrice";
import { AppContainer, AppHeader } from "./styles";

function App() {
  return (
    <AppContainer>
      <AppHeader>Etherscan Gas Price</AppHeader>
      <GasPrice />
    </AppContainer>
  );
}

export default App;
