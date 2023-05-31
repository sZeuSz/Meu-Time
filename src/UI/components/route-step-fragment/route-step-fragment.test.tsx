import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import RouteStepContent from "./route-step-fragment.component";
import { BrowserRouter } from "react-router-dom";
import { UserContext } from "contexts/userContext";
import { FormContext } from "contexts/formContext";

const setup = (step: any) => {
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
          <RouteStepContent step={step} />
        </FormContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
};
describe("Route step fragment Component", () => {
  it("renders Step1 component when step is 1", () => {
    const step = 1;
    const { getByTestId } = setup(step);

    waitFor(
      () => {
        const step1Component = getByTestId("step1-component");
        expect(step1Component).toBeInTheDocument();
      },
      { timeout: 5000 }
    );
  });

  it("renders Step2 component when step is 2", () => {
    const step = 2;
    const { getByTestId } = setup(step);

    waitFor(
      () => {
        const step2Component = getByTestId("step2-component");
        expect(step2Component).toBeInTheDocument();
      },
      { timeout: 5000 }
    );
  });

  it("renders Step3 component when step is 3", () => {
    const step = 3;
    const { getByTestId } = setup(step);

    waitFor(
      () => {
        const step3Component = getByTestId("step3-component");
        expect(step3Component).toBeInTheDocument();
      },
      { timeout: 5000 }
    );
  });

  it("renders Step4 component when step is 4", () => {
    const step = 4;
    const { getByTestId } = setup(step);

    waitFor(
      () => {
        const step4Component = getByTestId("step4-component");
        expect(step4Component).toBeInTheDocument();
      },
      { timeout: 5000 }
    );
  });

  it("does not render any component when step is not recognized", () => {
    const step = 5;
    const { queryByTestId } = setup(step);
    const components = [
      queryByTestId("step1-component"),
      queryByTestId("step2-component"),
      queryByTestId("step3-component"),
      queryByTestId("step4-component"),
    ];

    components.forEach((component) => {
      expect(component).not.toBeInTheDocument();
    });
  });
});
