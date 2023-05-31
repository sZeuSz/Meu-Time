import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import GraphGolsPerMinute from "./graphic-gols-per-minutes.component";
import { FormContext } from "contexts/formContext";
import { UserContext } from "contexts/userContext";
import { getTeamsStatistics } from "services";
import { BrowserRouter } from "react-router-dom";

jest.mock("services", () => ({
  getTeamsStatistics: jest.fn(),
}));
const setup = () => {
  return render(
    <BrowserRouter>
      <UserContext.Provider
        value={{
          setUserData: jest.fn(),
          userData: {
            account: {
              firstname: "John",
              lastname: "Doe",
              email: "john.doe@example.com",
              key: "123456789",
            },
            requests: { current: 1, limit_day: 100 },
            subscription: {
              plan: "basic",
              end: "2023-12-31",
              active: true,
            },
            api_key: "",
          },
        }}
      >
        <FormContext.Provider
          value={{
            formData: {
              step1Data: {
                name: "England",
                code: "GB",
                flag: "https://media-3.api-sports.io/flags/gb.svg",
              },
              step2Data: {
                name: 2021,
                flag: "none",
              },
              step3Data: {
                id: 57,
                name: "Non League Div One - Isthmian South East",
                type: "League",
                logo: "https://media-1.api-sports.io/football/leagues/57.png",
                flag: "https://media-1.api-sports.io/football/leagues/57.png",
              },
              step4Data: {
                id: 7206,
                name: "Ashford United",
                code: null,
                country: "England",
                founded: null,
                national: false,
                logo: "https://media-1.api-sports.io/football/teams/7206.png",
                flag: "https://media-1.api-sports.io/football/teams/7206.png",
              },
              step: 1,
              steps: [
                {
                  step: 1,
                  name: "País",
                  active: false,
                },
                {
                  step: 2,
                  name: "Temp.",
                  active: false,
                },
                {
                  step: 3,
                  name: "Liga",
                  active: false,
                },
                {
                  step: 4,
                  name: "Time",
                  active: true,
                },
              ],
            },
            setFormData: jest.fn(),
            nextStep: jest.fn(),
            saveStep: jest.fn(),
          }}
        >
          <GraphGolsPerMinute />
        </FormContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
};

describe("GraphGolsPerMinute Component", () => {
  it("displays loading spinner when loading is true", () => {
    const { getByTestId } = setup();

    const loadingSpinner = getByTestId("loading-spinner");
    expect(loadingSpinner).toBeInTheDocument();
  });

  it("displays 'Não há dados, desculpe '_'', when data is null", () => {
    const { getByText } = setup();

    waitFor(
      () => {
        const noDataText = getByText("Não há dados, desculpe '_'");
        expect(noDataText).toBeInTheDocument();
      },
      { timeout: 5000 }
    );
  });

  it("displays the graph when data is not null", async () => {
    const mockData = {
      for: {
        minute: [1, 2, 3, 4, 5],
      },
    };

    const mockGetTeamsStatistics = getTeamsStatistics as jest.MockedFunction<
      typeof getTeamsStatistics
    >;
    mockGetTeamsStatistics.mockResolvedValue(mockData);

    const { getByTestId } = setup();
    waitFor(
      () => {
        const graphComponent = getByTestId("graph-gols-per-minute-component");
        expect(graphComponent).toBeInTheDocument();
      },
      { timeout: 5000 }
    );
  });
});
