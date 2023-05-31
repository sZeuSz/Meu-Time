import React from "react";
import { render, waitFor } from "@testing-library/react";
import { FormContext } from "contexts/formContext";
import Step1 from "./step1.component";
import { getCountries } from "services";
import { BrowserRouter } from "react-router-dom";
import { UserContext } from "contexts/userContext";

jest.mock("services", () => ({
  getCountries: jest.fn(),
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
          <Step1 />
        </FormContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
};

describe("Step1 Component", () => {
  it("calls apiFunction correctly", async () => {
    const { getByTestId } = setup();
    waitFor(
      () => {
        const stepComponent = getByTestId("step-component");

        expect(getCountries).toHaveBeenCalled();
        expect(stepComponent).toBeInTheDocument();
      },
      { timeout: 5000 }
    );
  });
});
