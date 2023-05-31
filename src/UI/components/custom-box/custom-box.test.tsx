import { render, fireEvent, act, waitFor } from "@testing-library/react";
import CustomBox from "./custom-box.component";
import { BrowserRouter } from "react-router-dom";
import { UserContext } from "contexts/userContext";

const setup = () =>
  render(
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
        <CustomBox />
      </UserContext.Provider>
    </BrowserRouter>
  );

describe("home page component", () => {
  it("should render the component correctly", () => {
    const { getByText, getByPlaceholderText } = setup();
    waitFor(
      () => {
        const placeholderText = "Insira sua key da API-Football";
        const nameInput = getByPlaceholderText(placeholderText);
        const nameButton = "Login";
        const errorRequired = "Campo obrigatório!";
        const errorKey = "Não foi possível autenticar usando essa Key";
        const slogan =
          "JÁ PENSOU EM TER TODAS AS ESTATÍSTICAS DO FUTEBOL NA PALMA DA MÃO?";
        const loginButton = getByText(nameButton);

        expect(getByText(slogan)).toBeInTheDocument();
        expect(nameInput).toBeInTheDocument();
        expect(getByText(nameButton)).toBeInTheDocument();
        act(() => {
          fireEvent.click(loginButton);
        });

        expect(getByText(errorRequired)).toBeInTheDocument();
        act(() => {
          fireEvent.change(nameInput, { target: { value: "aksucnaksjcnkk" } });
        });

        act(() => {
          fireEvent.click(loginButton);
        });

        waitFor(
          () => {
            expect(getByText(errorKey)).toBeInTheDocument();
          },
          { timeout: 5000 }
        );
      },
      { timeout: 5000 }
    );
  });
});
