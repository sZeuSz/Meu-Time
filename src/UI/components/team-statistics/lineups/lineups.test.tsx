import { render, waitFor } from "@testing-library/react";
import { FormContext } from "contexts/formContext";
import { UserContext } from "contexts/userContext";
import React from "react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import { getTeamsStatistics } from "services";
import Lineups from "./lineups.component";

jest.mock("services", () => ({
  getTeamsStatistics: jest.fn(),
}));

describe("Lineups Component", () => {
  it("displays loading spinner when loading is true", () => {
    const { getByTestId } = setup();
    const loadingSpinner = getByTestId("loading-spinner");
    expect(loadingSpinner).toBeInTheDocument();
  });

  it("displays 'Não há dados, desculpe '_'", async () => {
    const { getByText } = setup();
    const mockLineups = [];
    const mockGetTeamsStatistics = getTeamsStatistics as jest.MockedFunction<
      typeof getTeamsStatistics
    >;

    act(() => {
      mockGetTeamsStatistics.mockResolvedValue(mockLineups);
    });

    await waitFor(
      () => {
        const noDataText = getByText("Não há dados, desculpe '_'");
        expect(noDataText).toBeInTheDocument();
      },
      { timeout: 5000 }
    );
  });

  it("displays the lineups when data is not null", async () => {
    const mockLineups = [
      {
        formation: "3-4-2-1",
        played: 5,
      },
    ];
    const mockGetTeamsStatistics = getTeamsStatistics as jest.MockedFunction<
      typeof getTeamsStatistics
    >;
    act(() => {
      mockGetTeamsStatistics.mockResolvedValue(mockLineups);
    });
    const { getByTestId } = setup();
    await waitFor(
      () => {
        const lineupsComponent = getByTestId("lineups-component");
        expect(lineupsComponent).toBeInTheDocument();
      },
      { timeout: 5000 }
    );
  });
});
