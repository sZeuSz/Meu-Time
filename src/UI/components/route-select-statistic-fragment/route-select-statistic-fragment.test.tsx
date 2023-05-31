import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import RouteSelectContent from "./route-select-statistic-fragment.component";
import { BrowserRouter } from "react-router-dom";
import { UserContext } from "contexts/userContext";
import { FormContext } from "contexts/formContext";
const setup = (id: any) => {
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
          <RouteSelectContent id={id} />
        </FormContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
};
describe("Route select statistic fragment", () => {
  it("renders Players component when id is 1", () => {
    const id = 1;
    setup(id);

    waitFor(
      () => {
        const playersComponent = screen.getByTestId("players-component");
        expect(playersComponent).toBeInTheDocument();
      },
      { timeout: 5000 }
    );
  });

  it("renders Lineups component when id is 2", () => {
    const id = 2;
    setup(id);

    waitFor(
      () => {
        const lineupsComponent = screen.getByTestId("lineups-component");
        expect(lineupsComponent).toBeInTheDocument();
      },
      { timeout: 5000 }
    );
  });

  it("renders ResultTable component when id is 3", () => {
    const id = 3;
    setup(id);

    waitFor(
      () => {
        const resultTableComponent = screen.getByTestId(
          "result-table-component"
        );
        expect(resultTableComponent).toBeInTheDocument();
      },
      { timeout: 5000 }
    );
  });

  it("renders GraphGolsPerMinute component when id is 4", () => {
    const id = 4;
    setup(id);

    waitFor(
      () => {
        const graphComponent = screen.getByTestId(
          "graph-gols-per-minute-component"
        );
        expect(graphComponent).toBeInTheDocument();
      },
      { timeout: 5000 }
    );
  });

  it("does not render any component when id is not recognized", () => {
    const id = 5;
    setup(id);

    const components = [
      screen.queryByTestId("players-component"),
      screen.queryByTestId("lineups-component"),
      screen.queryByTestId("result-table-component"),
      screen.queryByTestId("graph-gols-per-minute-component"),
    ];

    components.forEach((component) => {
      expect(component).not.toBeInTheDocument();
    });
  });
});
