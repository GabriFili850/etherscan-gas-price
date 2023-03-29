import React from "react";
import GasPrice from "./GasPrice";

const App = () => {
  return (
    <div
      className='App'
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <header className='App-header'>
        <h1>Etherscan Gas Price</h1>
      </header>
      <GasPrice />
    </div>
  );
};

export default App;
