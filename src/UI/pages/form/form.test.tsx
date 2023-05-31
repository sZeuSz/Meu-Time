import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { FormContext } from "contexts/formContext";
import { steps } from "data";
import Form from "./form.component";
import { UserContext } from "contexts/userContext";
import { BrowserRouter } from "react-router-dom";
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
                  active: true,
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
                  active: false,
                },
              ],
            },
            setFormData: jest.fn(),
            nextStep: jest.fn(),
            saveStep: jest.fn(),
          }}
        >
          <Form />
        </FormContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
};
describe("Form Component", () => {
  it("renders the form steps correctly", () => {
    const { getByText } = setup();
    waitFor(
      () => {
        steps.forEach((step, index) => {
          const stepElement = getByText(step.name);
          expect(stepElement).toBeInTheDocument();
          fireEvent.click(stepElement);
        });
      },
      { timeout: 5000 }
    );
  });
});
