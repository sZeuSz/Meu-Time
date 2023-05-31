import React from "react";
import { render, waitFor } from "@testing-library/react";
import TeamStatisticsSelect from "./team-statistics.component";
import { CustomSection, SelectAction, WaveEffect } from "UI/components";

jest.mock("UI/components", () => ({
  CustomSection: jest.fn(() => <div data-testid="custom-section" />),
  SelectAction: jest.fn(() => <div data-testid="select-action" />),
  WaveEffect: jest.fn(() => <div data-testid="wave-effect" />),
}));

describe("TeamStatisticsSelect Component", () => {
  it("renders the components correctly", () => {
    const { getByTestId } = render(<TeamStatisticsSelect />);

    waitFor(
      () => {
        const customSectionElement = getByTestId("custom-section");
        const selectActionElement = getByTestId("select-action");
        const waveEffectElement = getByTestId("wave-effect");

        expect(customSectionElement).toBeInTheDocument();
        expect(selectActionElement).toBeInTheDocument();
        expect(waveEffectElement).toBeInTheDocument();

        expect(CustomSection).toHaveBeenCalled();
        expect(SelectAction).toHaveBeenCalled();
        expect(WaveEffect).toHaveBeenCalled();
      },
      { timeout: 5000 }
    );
  });
});
