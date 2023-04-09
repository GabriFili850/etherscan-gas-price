import React from "react";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import GasPrice from "../GasPrice";

// Add this line to mock the axios module
jest.mock("axios");

describe("GasPrice component", () => {
  test("renders loading message", () => {
    render(<GasPrice />);
    const loadingElement = screen.getByText(/Loading gas price.../i);
    expect(loadingElement).toBeInTheDocument();
  });
});
