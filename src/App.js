import React from "react";
import GasPrice from "./components/GasPrice";

import { ContentWrapper, Title } from "./styles";

const App = () => {
  return (
    <ContentWrapper>
      <Title>Etherscan Gas Price</Title>
      <GasPrice />
    </ContentWrapper>
  );
};

export default App;
