import React from "react";
import { render, screen } from "@testing-library/react";
import LoadSpinner from "./load-spinner.component";

const setup = () => {
  return render(<LoadSpinner />);
};

test("render the loading spinner correctly", () => {
  setup();

  const loadingSpinner = screen.getByTestId("loading-spinner");

  expect(loadingSpinner).toBeInTheDocument();
});
