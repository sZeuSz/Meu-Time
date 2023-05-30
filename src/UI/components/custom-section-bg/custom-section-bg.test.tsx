import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CustomSection from "./custom-section-bg.component";

const setup = () =>
  render(
    <BrowserRouter>
      <CustomSection>Custom Section Content</CustomSection>
    </BrowserRouter>
  );

describe("CustomSection component", () => {
  it("should render the component correctly", () => {
    const { getByText } = setup();
    expect(getByText("Custom Section Content")).toBeInTheDocument();
  });
});
