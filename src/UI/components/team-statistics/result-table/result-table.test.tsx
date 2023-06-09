import { render, waitFor } from "@testing-library/react";
import { FormContext } from "contexts/formContext";
import { UserContext } from "contexts/userContext";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import { getTeamsStatistics } from "services";
import ResultTable from "./result-table.component";

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
            api_key: "csacas",
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
          <ResultTable />
        </FormContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
};
describe("ResultTable Component", () => {
  it("displays loading spinner when loading is true", async () => {
    const { getByTestId } = setup();

    await waitFor(
      () => {
        const loadingSpinner = getByTestId("loading-spinner");
        expect(loadingSpinner).toBeInTheDocument();
      },
      { timeout: 5000 }
    );
  });

  it("displays 'Não há dados, desculpe '_'", async () => {
    const mockData = [];
    const mockGetTeamsStatistics = getTeamsStatistics as jest.MockedFunction<
      typeof getTeamsStatistics
    >;

    mockGetTeamsStatistics.mockResolvedValue(mockData);

    const { getByText } = setup();

    await waitFor(
      () => {
        const noDataText = getByText("Não há dados, desculpe '_'");
        expect(noDataText).toBeInTheDocument();
      },
      { timeout: 5000 }
    );
  });

  it("displays the fixture table when data is not empty", async () => {
    const mockData = [
      {
        fixture: {
          id: 1,
          date: "2023-05-30",
          status: "finished",
          homeTeam: {
            id: 123,
            name: "Team A",
          },
          awayTeam: {
            id: 456,
            name: "Team B",
          },
          goals: {
            home: 2,
            away: 1,
          },
        },
      },
    ];
    const mockGetTeamsStatistics = getTeamsStatistics as jest.MockedFunction<
      typeof getTeamsStatistics
    >;

    mockGetTeamsStatistics.mockResolvedValue(mockData);

    const { getByTestId } = setup();

    await waitFor(
      () => {
        const fixtureTable = getByTestId("fixture-table");
        expect(fixtureTable).toBeInTheDocument();
      },
      { timeout: 5000 }
    );
  });
});
