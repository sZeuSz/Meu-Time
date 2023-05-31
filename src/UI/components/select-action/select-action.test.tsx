import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SelectAction from "./select-action.component";
import { UserContext } from "contexts/userContext";
import { FormContext } from "contexts/formContext";
import { statisticsToSelect } from "data";
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
          <SelectAction />
        </FormContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
};

describe("SelectAction Component", () => {
  it("displays initial text with user's first name and team name", () => {
    const { getByText } = setup();
    const textElement = getByText(
      /Olá, John. Agora que selecionou todas as informações necessárias, escolha o que deseja ver do time escolhido \(Ashford United\)/i
    );
    expect(textElement).toBeInTheDocument();
  });

  it("displays statistic buttons when no content is selected", () => {
    const { getByText } = setup();

    waitFor(
      () => {
        statisticsToSelect.forEach((statistic) => {
          const buttonElement = getByText(statistic.name);
          expect(buttonElement).toBeInTheDocument();
        });
      },
      { timeout: 5000 }
    );
  });

  it("updates text and shows selected content when a statistic button is clicked", () => {
    const { getByText, getByTestId } = setup();

    let statistic = statisticsToSelect[0];
    let buttonElement = getByText(statistic.name);
    fireEvent.click(buttonElement);

    waitFor(
      () => {
        const textElement = getByText(statistic.name);
        expect(textElement).toBeInTheDocument();
      },
      { timeout: 5000 }
    );

    let backButtonElement = getByTestId("arrow-icon");
    fireEvent.click(backButtonElement);

    waitFor(
      () => {
        const initialTextElement = getByText(
          /Olá, John. Agora que selecionou todas as informações necessárias, escolha o que deseja ver do time escolhido \(Ashford United\)/i
        );
        expect(initialTextElement).toBeInTheDocument();
      },
      { timeout: 5000 }
    );

    statistic = statisticsToSelect[1];
    buttonElement = getByText(statistic.name);
    fireEvent.click(buttonElement);

    waitFor(
      () => {
        const textElement = getByText(statistic.name);
        expect(textElement).toBeInTheDocument();
      },
      { timeout: 5000 }
    );

    backButtonElement = getByTestId("arrow-icon");
    fireEvent.click(backButtonElement);

    waitFor(
      () => {
        const initialTextElement = getByText(
          /Olá, John. Agora que selecionou todas as informações necessárias, escolha o que deseja ver do time escolhido \(Ashford United\)/i
        );
        expect(initialTextElement).toBeInTheDocument();
      },
      { timeout: 5000 }
    );

    statistic = statisticsToSelect[2];
    buttonElement = getByText(statistic.name);
    fireEvent.click(buttonElement);

    waitFor(
      () => {
        const textElement = getByText(statistic.name);
        expect(textElement).toBeInTheDocument();
      },
      { timeout: 5000 }
    );

    backButtonElement = getByTestId("arrow-icon");
    fireEvent.click(backButtonElement);

    waitFor(
      () => {
        const initialTextElement = getByText(
          /Olá, John. Agora que selecionou todas as informações necessárias, escolha o que deseja ver do time escolhido \(Ashford United\)/i
        );
        expect(initialTextElement).toBeInTheDocument();
      },
      { timeout: 5000 }
    );

    statistic = statisticsToSelect[3];
    buttonElement = getByText(statistic.name);
    fireEvent.click(buttonElement);
    waitFor(
      () => {
        const textElement = getByText(statistic.name);
        expect(textElement).toBeInTheDocument();
      },
      { timeout: 5000 }
    );

    backButtonElement = getByTestId("arrow-icon");
    fireEvent.click(backButtonElement);

    waitFor(
      () => {
        const initialTextElement = getByText(
          /Olá, John. Agora que selecionou todas as informações necessárias, escolha o que deseja ver do time escolhido \(Ashford United\)/i
        );
        expect(initialTextElement).toBeInTheDocument();
      },
      { timeout: 5000 }
    );
  });
});
