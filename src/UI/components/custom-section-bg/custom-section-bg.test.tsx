import { render } from "@testing-library/react";
import CustomSection from "./custom-section-bg.component";

describe("CustomSection component", () => {
  it("should render the component correctly", () => {
    const { getByText } = render(
      <CustomSection>Custom Section Content</CustomSection>
    );

    expect(getByText("Custom Section Content")).toBeInTheDocument();
  });
});
