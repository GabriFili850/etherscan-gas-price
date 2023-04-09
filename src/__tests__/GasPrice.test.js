// src/GasPrice.test.js

import React from "react";
import { render, screen, act } from "@testing-library/react";
import axios from "axios";
import GasPrice from "../GasPrice";

jest.mock("axios");

describe("GasPrice component", () => {
  test("renders gas price", async () => {
    axios.get.mockResolvedValue({
      data: {
        result: "0x" + (20 * 1e9).toString(16), // Mock the response data to return 20 Gwei
      },
    });

    // Wrap the render call with act and make the callback async
    await act(async () => {
      render(<GasPrice />);
    });

    const gasPriceElement = screen.getByText(/Current Gas Price: 20.00 Gwei/i);
    expect(gasPriceElement).toBeInTheDocument();

    // Add more tests here
  });
});
