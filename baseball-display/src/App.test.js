import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";

it("renders without crashing", () => {
  render(<App />);
});
