import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

void React;

describe("App", () => {
  test("renders the main header", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: /e-commerce customer portal/i })).toBeInTheDocument();
  });

  test("shows the info paragraph", () => {
    render(<App />);
    expect(screen.getByText(/loaded from an independent typescript application/i)).toBeInTheDocument();
  });

  test("renders the mocked ConsentManager component", () => {
    render(<App />);

    expect(screen.getByTestId("mock-consent")).toBeInTheDocument();
    expect(screen.getByText(/Mocked ConsentManager/i)).toBeInTheDocument();
  });
});
