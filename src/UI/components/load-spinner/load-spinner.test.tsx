import React from "react";
import { render, screen } from "@testing-library/react";
import LoadSpinner from "./load-spinner.component";

test("renders the loading spinner", () => {
  render(<LoadSpinner />);

  const loadingSpinner = screen.getByTestId("loading-spinner");

  expect(loadingSpinner).toBeInTheDocument();
});
