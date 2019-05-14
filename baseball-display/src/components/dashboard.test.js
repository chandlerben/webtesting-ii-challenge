import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";

import App from "../App";

describe("<Dashboard />", () => {
  it("should increase ball count all the way to 4", () => {
    const { getByText } = render(<App />);

    getByText(/Balls = 0/i);

    const button = getByText(/increase ball/i);
    const strikeButton = getByText(/increase strike/i);

    fireEvent.click(button);
    getByText(/Balls = 1/i);

    fireEvent.click(button);
    getByText(/Balls = 2/i);

    fireEvent.click(button);
    getByText(/Balls = 3/i);

    fireEvent.click(button);
    getByText(/Balls = 4/i);

    fireEvent.click(button);
    getByText(/Balls = 4/i);

    fireEvent.click(strikeButton);
    getByText(/Balls = 4/i);
    getByText(/strikes = 0/i);
  });

  it("should increase strike count all the way to 3", () => {
    const { getByText } = render(<App />);

    getByText(/Strikes = 0/i);

    const button = getByText(/increase strike/i);
    const ballButton = getByText(/increase ball/i);
    fireEvent.click(button);
    getByText(/Strikes = 1/i);

    fireEvent.click(button);
    getByText(/Strikes = 2/i);

    fireEvent.click(button);
    getByText(/Strikes = 3/i);

    fireEvent.click(button);
    getByText(/Strikes = 3/i);

    fireEvent.click(button);
    getByText(/Strikes = 3/i);

    fireEvent.click(ballButton);
    getByText(/Strikes = 3/i);
    getByText(/Balls = 0/i);
  });

  it("foul increases strikes but not above 2", () => {
    const { getByText } = render(<App />);

    getByText(/Strikes = 0/i);

    const button = getByText(/increase strike/i);
    const foulButton = getByText(/foul/i);

    fireEvent.click(foulButton);
    getByText(/Strikes = 1/i);

    fireEvent.click(foulButton);
    getByText(/Strikes = 2/i);

    fireEvent.click(foulButton);
    getByText(/Strikes = 2/i);

    fireEvent.click(button);
    getByText(/Strikes = 3/i);
  });

  it("clear will reset the state", () => {
    const { getByText } = render(<App />);

    getByText(/Strikes = 0/i);
    getByText(/balls = 0/i);

    const button = getByText(/clear/i);
    const ballButton = getByText(/increase ball/i);
    const strikeButton = getByText(/increase strike/i);
    const foulButton = getByText(/foul/i);

    fireEvent.click(foulButton);
    getByText(/Strikes = 1/i);

    fireEvent.click(strikeButton);
    getByText(/Strikes = 2/i);

    fireEvent.click(foulButton);
    getByText(/Strikes = 2/i);

    fireEvent.click(ballButton);
    getByText(/balls = 1/i);

    fireEvent.click(ballButton);
    getByText(/balls = 2/i);

    fireEvent.click(ballButton);
    getByText(/balls = 3/i);

    fireEvent.click(ballButton);
    getByText(/balls = 4/i);

    fireEvent.click(ballButton);
    getByText(/balls = 4/i);

    fireEvent.click(strikeButton);
    getByText(/Strikes = 2/i);

    fireEvent.click(button);
    getByText(/Strikes = 0/i);
    getByText(/balls = 0/i);
  });
});
