import { render } from "@testing-library/react";
import LoadSpinner from "./load-spinner.component";

const setup = () => {
  return render(<LoadSpinner />);
};

describe("load spinner component", () => {
  it("render the loading spinner correctly", () => {
    const { getByTestId } = setup();

    const loadingSpinner = getByTestId("loading-spinner");

    expect(loadingSpinner).toBeInTheDocument();
  });
});
